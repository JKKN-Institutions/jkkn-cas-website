/**
 * NavDropdown Component
 *
 * Reusable dropdown component for navigation menus.
 * Supports both desktop (hover) and mobile (click) interactions.
 *
 * Features:
 * - Hover support for desktop
 * - Click support for mobile
 * - Smooth animations
 * - Keyboard navigation
 * - Mega menu support
 * - Accessible (ARIA attributes)
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { responsive } from '@/lib/responsive-utils';
import { DESIGN_TOKENS } from '@/lib/design-tokens';
import { useDropdownOpen, useDropdownHandlers } from '@/hooks/use-navigation';
import { useIsMobile } from '@/hooks/use-mobile';
import type { NavigationItem } from '@/lib/navigation-config';

// ============================================================================
// TYPES
// ============================================================================

export interface NavDropdownProps {
  item: NavigationItem;
  className?: string;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function NavDropdown({ item, className }: NavDropdownProps) {
  const isOpen = useDropdownOpen(item.id);
  const handlers = useDropdownHandlers(item.id);
  const isMobile = useIsMobile();

  // Don't render if no children
  if (!item.children || item.children.length === 0) {
    return null;
  }

  const isMegaMenu = item.isMegaMenu || false;

  return (
    <div
      className={cn('relative', className)}
      onMouseEnter={handlers.onMouseEnter}
      onMouseLeave={handlers.onMouseLeave}
    >
      {/* Trigger Button */}
      <button
        onClick={handlers.onClick}
        onFocus={handlers.onFocus}
        className={cn(
          'flex items-center gap-2',
          'text-gray-700 hover:text-brand-green',
          responsive.transition('colors', 'fast'),
          'font-medium',
          // Mobile touch target
          isMobile && DESIGN_TOKENS.touch.minHeight
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={cn(
            'w-4 h-4',
            responsive.transition('transform', 'fast'),
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {isMegaMenu ? (
            <MegaMenuContent item={item} />
          ) : (
            <StandardDropdownContent item={item} />
          )}
        </>
      )}
    </div>
  );
}

// ============================================================================
// STANDARD DROPDOWN CONTENT
// ============================================================================

function StandardDropdownContent({ item }: { item: NavigationItem }) {
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        // Desktop: Absolute positioning
        !isMobile && [
          'absolute left-0 top-full mt-2',
          'min-w-[280px]',
          'z-50',
        ],
        // Mobile: Static positioning
        isMobile && [
          'mt-2 ml-4',
        ],
        // Shared styling
        'bg-white',
        DESIGN_TOKENS.radius.lg,
        'shadow-lg border border-gray-100',
        'overflow-hidden',
        // Animation
        'animate-in fade-in slide-in-from-top-2',
        DESIGN_TOKENS.animation.duration.fast
      )}
    >
      <div className="py-2">
        {item.children?.map((group) => (
          <div key={group.id}>
            {/* Group Label (if multiple groups) */}
            {item.children && item.children.length > 1 && (
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {group.label}
              </div>
            )}

            {/* Group Items */}
            {group.items.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className={cn(
                  'block px-4 py-2.5',
                  'text-gray-700 hover:bg-brand-cream hover:text-brand-green',
                  responsive.transition('colors', 'fast'),
                  // Mobile touch target
                  isMobile && DESIGN_TOKENS.touch.minHeight
                )}
              >
                <div className="font-medium">{subItem.label}</div>
                {subItem.description && (
                  <div className="text-sm text-gray-500 mt-0.5">
                    {subItem.description}
                  </div>
                )}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// MEGA MENU CONTENT
// ============================================================================

function MegaMenuContent({ item }: { item: NavigationItem }) {
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        // Desktop: Full width with max constraint
        !isMobile && [
          'absolute left-1/2 -translate-x-1/2 top-full mt-2',
          'w-screen max-w-5xl',
          'z-50',
        ],
        // Mobile: Static positioning
        isMobile && [
          'mt-2 ml-4',
        ],
        // Shared styling
        'bg-white',
        DESIGN_TOKENS.radius.lg,
        'shadow-xl border border-gray-100',
        'overflow-hidden',
        // Animation
        'animate-in fade-in slide-in-from-top-2',
        DESIGN_TOKENS.animation.duration.fast
      )}
    >
      <div className={cn(responsive.card())}>
        {/* Grid Layout */}
        <div
          className={cn(
            'grid',
            // Responsive columns
            'grid-cols-1',
            !isMobile && 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
            // Gap
            responsive.gap('md')
          )}
        >
          {item.children?.map((group) => (
            <div key={group.id}>
              {/* Group Header */}
              <div className="mb-3">
                <h3
                  className={cn(
                    'font-semibold text-brand-green',
                    'text-sm uppercase tracking-wider'
                  )}
                >
                  {group.label}
                </h3>
                <div className="mt-1 h-0.5 w-8 bg-brand-green" />
              </div>

              {/* Group Items */}
              <ul className="space-y-2">
                {group.items.map((subItem) => (
                  <li key={subItem.href}>
                    <Link
                      href={subItem.href}
                      className={cn(
                        'block py-1.5',
                        'text-gray-700 hover:text-brand-green',
                        responsive.transition('colors', 'fast'),
                        'text-sm'
                      )}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MOBILE DROPDOWN (ACCORDION STYLE)
// ============================================================================

export function MobileNavDropdown({ item }: NavDropdownProps) {
  const isOpen = useDropdownOpen(item.id);
  const handlers = useDropdownHandlers(item.id);

  // Don't render if no children
  if (!item.children || item.children.length === 0) {
    return null;
  }

  return (
    <div className="border-b border-gray-100">
      {/* Accordion Trigger */}
      <button
        onClick={handlers.onClick}
        className={cn(
          'w-full flex items-center justify-between',
          'px-4 py-4',
          'text-gray-900 font-medium',
          'hover:bg-brand-cream',
          responsive.transition('colors', 'fast'),
          DESIGN_TOKENS.touch.minHeight
        )}
        aria-expanded={isOpen}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5',
            responsive.transition('transform', 'fast'),
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="bg-gray-50 px-4 pb-4">
          {item.children.map((group) => (
            <div key={group.id} className="mb-4 last:mb-0">
              {/* Group Label */}
              {item.children && item.children.length > 1 && (
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {group.label}
                </div>
              )}

              {/* Group Items */}
              <ul className="space-y-1">
                {group.items.map((subItem) => (
                  <li key={subItem.href}>
                    <Link
                      href={subItem.href}
                      className={cn(
                        'block py-2 pl-4',
                        'text-gray-700 hover:text-brand-green',
                        responsive.transition('colors', 'fast'),
                        DESIGN_TOKENS.touch.minHeight
                      )}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
