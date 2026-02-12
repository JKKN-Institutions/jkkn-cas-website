/**
 * Navigation State Management
 *
 * Centralized state management for navigation using Zustand.
 * Replaces 60+ individual useState hooks with a single store.
 *
 * Features:
 * - Dropdown state management (mobile & desktop)
 * - Mobile menu state
 * - Auto-close behavior
 * - Type-safe navigation
 *
 * Usage:
 * import { useNavigationStore } from '@/hooks/use-navigation';
 *
 * const { dropdowns, toggleDropdown, closeAllDropdowns } = useNavigationStore();
 */

import { create } from 'zustand';

// ============================================================================
// TYPES
// ============================================================================

export interface NavigationState {
  // Dropdown states (keyed by dropdown ID)
  dropdowns: Record<string, boolean>;

  // Mobile menu state
  mobileMenuOpen: boolean;

  // Active submenu (for mobile nested navigation)
  activeSubmenu: string | null;

  // Scroll lock state (prevent body scroll when menu open)
  isScrollLocked: boolean;

  // Actions
  toggleDropdown: (id: string) => void;
  openDropdown: (id: string) => void;
  closeDropdown: (id: string) => void;
  closeAllDropdowns: () => void;
  setMobileMenu: (open: boolean) => void;
  setActiveSubmenu: (id: string | null) => void;
  lockScroll: () => void;
  unlockScroll: () => void;
  reset: () => void;
}

// ============================================================================
// INITIAL STATE
// ============================================================================

const initialState = {
  dropdowns: {},
  mobileMenuOpen: false,
  activeSubmenu: null,
  isScrollLocked: false,
};

// ============================================================================
// STORE
// ============================================================================

export const useNavigationStore = create<NavigationState>((set, get) => ({
  ...initialState,

  /**
   * Toggle a dropdown (open if closed, close if open)
   * On mobile: only one dropdown open at a time
   * On desktop: multiple dropdowns can be open
   */
  toggleDropdown: (id: string) => {
    const currentState = get().dropdowns[id];

    // If we're in mobile mode (menu is open), close other dropdowns
    if (get().mobileMenuOpen) {
      set({
        dropdowns: { [id]: !currentState },
      });
    } else {
      // Desktop mode: just toggle the specific dropdown
      set((state) => ({
        dropdowns: {
          ...state.dropdowns,
          [id]: !currentState,
        },
      }));
    }
  },

  /**
   * Open a specific dropdown
   */
  openDropdown: (id: string) => {
    set((state) => ({
      dropdowns: {
        ...state.dropdowns,
        [id]: true,
      },
    }));
  },

  /**
   * Close a specific dropdown
   */
  closeDropdown: (id: string) => {
    set((state) => ({
      dropdowns: {
        ...state.dropdowns,
        [id]: false,
      },
    }));
  },

  /**
   * Close all dropdowns
   * Useful when navigating or clicking outside
   */
  closeAllDropdowns: () => {
    set({ dropdowns: {} });
  },

  /**
   * Set mobile menu state
   * When closing, also close all dropdowns and unlock scroll
   */
  setMobileMenu: (open: boolean) => {
    set({ mobileMenuOpen: open });

    if (!open) {
      get().closeAllDropdowns();
      get().setActiveSubmenu(null);
      get().unlockScroll();
    } else {
      get().lockScroll();
    }
  },

  /**
   * Set active submenu (for mobile nested navigation)
   */
  setActiveSubmenu: (id: string | null) => {
    set({ activeSubmenu: id });
  },

  /**
   * Lock body scroll (when mobile menu is open)
   */
  lockScroll: () => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
      set({ isScrollLocked: true });
    }
  },

  /**
   * Unlock body scroll (when mobile menu is closed)
   */
  unlockScroll: () => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
      set({ isScrollLocked: false });
    }
  },

  /**
   * Reset to initial state
   */
  reset: () => {
    get().unlockScroll();
    set(initialState);
  },
}));

// ============================================================================
// SELECTOR HOOKS
// ============================================================================

/**
 * Check if a specific dropdown is open
 * @example
 * const isAboutOpen = useDropdownOpen('about');
 */
export function useDropdownOpen(id: string): boolean {
  return useNavigationStore((state) => state.dropdowns[id] || false);
}

/**
 * Check if mobile menu is open
 * @example
 * const isMobileMenuOpen = useMobileMenuOpen();
 */
export function useMobileMenuOpen(): boolean {
  return useNavigationStore((state) => state.mobileMenuOpen);
}

/**
 * Check if any dropdown is open
 * @example
 * const hasOpenDropdown = useHasOpenDropdown();
 */
export function useHasOpenDropdown(): boolean {
  return useNavigationStore((state) =>
    Object.values(state.dropdowns).some((isOpen) => isOpen)
  );
}

// ============================================================================
// NAVIGATION HELPER HOOKS
// ============================================================================

/**
 * Hook for dropdown interaction handlers
 * Provides consistent behavior for both mobile and desktop
 *
 * @example
 * const handlers = useDropdownHandlers('about');
 * <button onClick={handlers.onClick} onMouseEnter={handlers.onHover}>
 */
export function useDropdownHandlers(id: string) {
  const toggleDropdown = useNavigationStore((state) => state.toggleDropdown);
  const openDropdown = useNavigationStore((state) => state.openDropdown);
  const closeDropdown = useNavigationStore((state) => state.closeDropdown);
  const mobileMenuOpen = useNavigationStore((state) => state.mobileMenuOpen);

  return {
    // Click handler (for mobile and desktop toggle)
    onClick: () => toggleDropdown(id),

    // Hover handlers (desktop only)
    onMouseEnter: () => {
      if (!mobileMenuOpen) {
        openDropdown(id);
      }
    },
    onMouseLeave: () => {
      if (!mobileMenuOpen) {
        closeDropdown(id);
      }
    },

    // Focus handlers (keyboard navigation)
    onFocus: () => {
      if (!mobileMenuOpen) {
        openDropdown(id);
      }
    },
  };
}

/**
 * Hook for mobile menu handlers
 * @example
 * const { toggleMenu, closeMenu } = useMobileMenuHandlers();
 */
export function useMobileMenuHandlers() {
  const setMobileMenu = useNavigationStore((state) => state.setMobileMenu);
  const mobileMenuOpen = useNavigationStore((state) => state.mobileMenuOpen);

  return {
    toggleMenu: () => setMobileMenu(!mobileMenuOpen),
    openMenu: () => setMobileMenu(true),
    closeMenu: () => setMobileMenu(false),
  };
}

// ============================================================================
// CLEANUP UTILITY
// ============================================================================

/**
 * Hook for navigation cleanup on unmount
 * Use in Navigation component to ensure proper cleanup
 *
 * @example
 * useNavigationCleanup();
 */
export function useNavigationCleanup() {
  const reset = useNavigationStore((state) => state.reset);

  React.useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);
}

// Required for the cleanup hook
import * as React from 'react';
