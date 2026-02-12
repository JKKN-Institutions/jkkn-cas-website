/**
 * Design Tokens - Mobile-First Design System
 *
 * Comprehensive design token system for the CAS website.
 * All tokens follow mobile-first principles with progressive enhancement.
 *
 * Usage:
 * import { DESIGN_TOKENS } from '@/lib/design-tokens';
 * className={`${DESIGN_TOKENS.spacing.section.mobile} ${DESIGN_TOKENS.spacing.section.tablet}`}
 */

// ============================================================================
// BREAKPOINTS
// ============================================================================
// Aligned with Tailwind CSS v4 defaults
export const BREAKPOINTS = {
  sm: 640,   // Small devices (landscape phones)
  md: 768,   // Medium devices (tablets)
  lg: 1024,  // Large devices (desktops)
  xl: 1280,  // Extra large devices
  '2xl': 1536, // 2X extra large devices
} as const;

// ============================================================================
// SPACING SCALES
// ============================================================================
export const SPACING = {
  // Section spacing (vertical padding for main content sections)
  section: {
    default: {
      mobile: 'py-12',      // 48px
      tablet: 'md:py-16',   // 64px
      desktop: 'lg:py-20',  // 80px
    },
    compact: {
      mobile: 'py-8',       // 32px
      tablet: 'md:py-12',   // 48px
      desktop: 'lg:py-16',  // 64px
    },
    spacious: {
      mobile: 'py-16',      // 64px
      tablet: 'md:py-20',   // 80px
      desktop: 'lg:py-24',  // 96px
    },
  },

  // Container spacing (horizontal padding for content containers)
  container: {
    mobile: 'px-4',        // 16px
    tablet: 'sm:px-6',     // 24px
    desktop: 'lg:px-8',    // 32px
  },

  // Card spacing (padding inside cards)
  card: {
    mobile: 'p-4',         // 16px
    tablet: 'sm:p-6',      // 24px
    desktop: 'lg:p-8',     // 32px
  },

  // Gap spacing (for flex/grid gaps)
  gap: {
    xs: {
      mobile: 'gap-2',     // 8px
      tablet: 'sm:gap-3',  // 12px
      desktop: 'lg:gap-4', // 16px
    },
    sm: {
      mobile: 'gap-4',     // 16px
      tablet: 'sm:gap-5',  // 20px
      desktop: 'lg:gap-6', // 24px
    },
    md: {
      mobile: 'gap-6',     // 24px
      tablet: 'sm:gap-8',  // 32px
      desktop: 'lg:gap-10', // 40px
    },
    lg: {
      mobile: 'gap-8',     // 32px
      tablet: 'sm:gap-10', // 40px
      desktop: 'lg:gap-12', // 48px
    },
  },
} as const;

// ============================================================================
// TYPOGRAPHY SCALES
// ============================================================================
export const TYPOGRAPHY = {
  // Hero headings (largest, most prominent)
  hero: {
    mobile: 'text-3xl',       // 30px
    tablet: 'sm:text-4xl',    // 36px
    desktop: 'md:text-5xl lg:text-6xl', // 48px → 60px
    lineHeight: 'leading-tight',
    fontWeight: 'font-bold',
  },

  // H1 headings (page titles)
  h1: {
    mobile: 'text-2xl',       // 24px
    tablet: 'sm:text-3xl',    // 30px
    desktop: 'md:text-4xl',   // 36px
    lineHeight: 'leading-tight',
    fontWeight: 'font-bold',
  },

  // H2 headings (section titles)
  h2: {
    mobile: 'text-xl',        // 20px
    tablet: 'sm:text-2xl',    // 24px
    desktop: 'md:text-3xl',   // 30px
    lineHeight: 'leading-snug',
    fontWeight: 'font-semibold',
  },

  // H3 headings (subsection titles)
  h3: {
    mobile: 'text-lg',        // 18px
    tablet: 'sm:text-xl',     // 20px
    desktop: 'md:text-2xl',   // 24px
    lineHeight: 'leading-snug',
    fontWeight: 'font-semibold',
  },

  // H4 headings (card titles)
  h4: {
    mobile: 'text-base',      // 16px
    tablet: 'sm:text-lg',     // 18px
    desktop: 'md:text-xl',    // 20px
    lineHeight: 'leading-normal',
    fontWeight: 'font-medium',
  },

  // Body text (paragraphs)
  body: {
    mobile: 'text-base',      // 16px
    tablet: 'sm:text-base',   // 16px
    desktop: 'md:text-lg',    // 18px
    lineHeight: 'leading-relaxed',
    fontWeight: 'font-normal',
  },

  // Small text (captions, labels)
  small: {
    mobile: 'text-sm',        // 14px (minimum for mobile readability)
    tablet: 'sm:text-sm',     // 14px
    desktop: 'md:text-base',  // 16px
    lineHeight: 'leading-normal',
    fontWeight: 'font-normal',
  },

  // Extra small text (metadata, fine print)
  xs: {
    mobile: 'text-sm',        // 14px (never go below 14px on mobile)
    tablet: 'sm:text-sm',     // 14px
    desktop: 'md:text-sm',    // 14px
    lineHeight: 'leading-normal',
    fontWeight: 'font-normal',
  },
} as const;

// ============================================================================
// GRID PATTERNS
// ============================================================================
export const GRID = {
  // Standard card grids (3-column on desktop)
  cards: {
    mobile: 'grid-cols-1',
    tablet: 'sm:grid-cols-2',
    desktop: 'lg:grid-cols-3',
  },

  // Wide card grids (4-column on desktop)
  cardsWide: {
    mobile: 'grid-cols-1',
    tablet: 'sm:grid-cols-2',
    desktop: 'lg:grid-cols-3 xl:grid-cols-4',
  },

  // Compact grids (2-column on mobile for icons/small items)
  compact: {
    mobile: 'grid-cols-2',
    tablet: 'sm:grid-cols-3',
    desktop: 'md:grid-cols-4 lg:grid-cols-6',
  },

  // Feature grids (2-column max)
  features: {
    mobile: 'grid-cols-1',
    tablet: 'sm:grid-cols-2',
    desktop: 'lg:grid-cols-2',
  },

  // Stats grids (4-column on desktop)
  stats: {
    mobile: 'grid-cols-2',
    tablet: 'sm:grid-cols-2',
    desktop: 'md:grid-cols-4',
  },

  // Footer columns
  footer: {
    mobile: 'grid-cols-1',
    tablet: 'sm:grid-cols-2',
    desktop: 'md:grid-cols-3 lg:grid-cols-4',
  },

  // Programme grid (specialized for programme pages)
  programmes: {
    mobile: 'grid-cols-1',
    tablet: 'sm:grid-cols-2',
    desktop: 'lg:grid-cols-3',
  },
} as const;

// ============================================================================
// ANIMATION TOKENS
// ============================================================================
export const ANIMATION = {
  // Transition durations
  duration: {
    fast: 'duration-150',      // 150ms - Micro interactions
    normal: 'duration-200',    // 200ms - Standard transitions
    slow: 'duration-300',      // 300ms - Complex animations
  },

  // Easing functions
  easing: {
    default: 'ease-in-out',
    inOut: 'ease-in-out',
    in: 'ease-in',
    out: 'ease-out',
  },

  // Hover effects
  hover: {
    scale: 'hover:scale-105',
    lift: 'hover:-translate-y-1',
    shadow: 'hover:shadow-lg',
  },

  // Transitions
  transition: {
    all: 'transition-all',
    colors: 'transition-colors',
    transform: 'transition-transform',
    shadow: 'transition-shadow',
  },
} as const;

// ============================================================================
// TOUCH TARGET SIZES
// ============================================================================
// Minimum 44x44px for mobile accessibility (WCAG guidelines)
export const TOUCH = {
  minHeight: 'min-h-[44px]',
  minWidth: 'min-w-[44px]',
  button: {
    mobile: 'h-12 px-6',      // 48px height
    tablet: 'sm:h-12 sm:px-6',
    desktop: 'md:h-12 md:px-8',
  },
  icon: {
    mobile: 'w-10 h-10',      // 40px (within tap target)
    tablet: 'sm:w-12 sm:h-12',
    desktop: 'md:w-12 md:h-12',
  },
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================
export const RADIUS = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
} as const;

// ============================================================================
// COMBINED DESIGN TOKENS
// ============================================================================
export const DESIGN_TOKENS = {
  breakpoints: BREAKPOINTS,
  spacing: SPACING,
  typography: TYPOGRAPHY,
  grid: GRID,
  animation: ANIMATION,
  touch: TOUCH,
  radius: RADIUS,
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================
export type Breakpoint = keyof typeof BREAKPOINTS;
export type SpacingVariant = keyof typeof SPACING.section;
export type TypographyLevel = keyof typeof TYPOGRAPHY;
export type GridVariant = keyof typeof GRID;
