/**
 * Responsive Utilities - Mobile-First Helper Functions
 *
 * Helper functions for applying design tokens consistently across the application.
 * All functions return mobile-first class strings that progressively enhance for larger screens.
 *
 * Usage:
 * import { responsive } from '@/lib/responsive-utils';
 * <section className={responsive.section()}>
 * <h1 className={responsive.heading('hero')}>
 */

import { DESIGN_TOKENS, type SpacingVariant, type TypographyLevel, type GridVariant } from './design-tokens';
import { cn } from './utils';

// ============================================================================
// SECTION UTILITIES
// ============================================================================

/**
 * Apply standardized section spacing (vertical padding)
 * @param variant - 'default' | 'compact' | 'spacious'
 * @returns Mobile-first spacing classes
 *
 * @example
 * <section className={responsive.section()}>
 * <section className={responsive.section('compact')}>
 */
export function section(variant: SpacingVariant = 'default'): string {
  const spacing = DESIGN_TOKENS.spacing.section[variant];
  return cn(
    spacing.mobile,
    spacing.tablet,
    spacing.desktop
  );
}

/**
 * Apply standardized container spacing (horizontal padding)
 * @param maxWidth - Optional max-width constraint
 * @returns Mobile-first container classes
 *
 * @example
 * <div className={responsive.container()}>
 * <div className={responsive.container('max-w-7xl mx-auto')}>
 */
export function container(maxWidth?: string): string {
  const spacing = DESIGN_TOKENS.spacing.container;
  return cn(
    spacing.mobile,
    spacing.tablet,
    spacing.desktop,
    maxWidth
  );
}

/**
 * Apply standardized card padding
 * @returns Mobile-first card padding classes
 *
 * @example
 * <div className={cn('bg-white rounded-lg', responsive.card())}>
 */
export function card(): string {
  const spacing = DESIGN_TOKENS.spacing.card;
  return cn(
    spacing.mobile,
    spacing.tablet,
    spacing.desktop
  );
}

// ============================================================================
// TYPOGRAPHY UTILITIES
// ============================================================================

/**
 * Apply responsive typography styles
 * @param level - Typography level (hero, h1, h2, h3, h4, body, small, xs)
 * @param customClasses - Optional additional classes
 * @returns Mobile-first typography classes
 *
 * @example
 * <h1 className={responsive.heading('hero')}>
 * <h2 className={responsive.heading('h2', 'text-brand-green')}>
 * <p className={responsive.heading('body')}>
 */
export function heading(level: TypographyLevel, customClasses?: string): string {
  const typo = DESIGN_TOKENS.typography[level];
  return cn(
    typo.mobile,
    typo.tablet,
    typo.desktop,
    typo.lineHeight,
    typo.fontWeight,
    customClasses
  );
}

/**
 * Alias for heading function for better semantics when used with text
 * @example
 * <p className={responsive.text('body')}>
 */
export const text = heading;

// ============================================================================
// GRID UTILITIES
// ============================================================================

/**
 * Apply responsive grid layouts
 * @param variant - Grid pattern variant
 * @param gap - Gap size (xs, sm, md, lg)
 * @param customClasses - Optional additional classes
 * @returns Mobile-first grid classes
 *
 * @example
 * <div className={responsive.grid('cards')}>
 * <div className={responsive.grid('cards', 'md')}>
 * <div className={responsive.grid('stats', 'sm', 'bg-gray-50')}>
 */
export function grid(
  variant: GridVariant,
  gap: keyof typeof DESIGN_TOKENS.spacing.gap = 'md',
  customClasses?: string
): string {
  const gridPattern = DESIGN_TOKENS.grid[variant];
  const gapSpacing = DESIGN_TOKENS.spacing.gap[gap];

  return cn(
    'grid',
    gridPattern.mobile,
    gridPattern.tablet,
    gridPattern.desktop,
    gapSpacing.mobile,
    gapSpacing.tablet,
    gapSpacing.desktop,
    customClasses
  );
}

// ============================================================================
// CARD COMPONENT UTILITIES
// ============================================================================

/**
 * Apply complete card styling with responsive patterns
 * @param options - Card configuration
 * @returns Complete card classes
 *
 * @example
 * <div className={responsive.cardStyle()}>
 * <div className={responsive.cardStyle({ hover: true, border: true })}>
 */
export function cardStyle(options?: {
  hover?: boolean;
  border?: boolean;
  shadow?: boolean;
  radius?: keyof typeof DESIGN_TOKENS.radius;
}): string {
  const {
    hover = false,
    border = false,
    shadow = true,
    radius = 'lg'
  } = options || {};

  return cn(
    // Base styling
    'bg-white',
    DESIGN_TOKENS.radius[radius],
    card(),

    // Shadow
    shadow && 'shadow-md',

    // Border
    border && 'border border-gray-200',

    // Hover effects
    hover && cn(
      DESIGN_TOKENS.animation.transition.all,
      DESIGN_TOKENS.animation.duration.normal,
      DESIGN_TOKENS.animation.hover.lift,
      DESIGN_TOKENS.animation.hover.shadow
    )
  );
}

// ============================================================================
// BUTTON UTILITIES
// ============================================================================

/**
 * Apply responsive button sizing with proper touch targets
 * @param variant - Button size variant
 * @returns Mobile-first button classes
 *
 * @example
 * <button className={responsive.button()}>
 */
export function button(variant: 'default' | 'icon' = 'default'): string {
  if (variant === 'icon') {
    const iconSize = DESIGN_TOKENS.touch.icon;
    return cn(
      iconSize.mobile,
      iconSize.tablet,
      iconSize.desktop,
      'flex items-center justify-center'
    );
  }

  const btnSize = DESIGN_TOKENS.touch.button;
  return cn(
    btnSize.mobile,
    btnSize.tablet,
    btnSize.desktop,
    'inline-flex items-center justify-center',
    'font-medium',
    DESIGN_TOKENS.radius.md,
    DESIGN_TOKENS.animation.transition.colors,
    DESIGN_TOKENS.animation.duration.normal
  );
}

// ============================================================================
// GAP UTILITIES
// ============================================================================

/**
 * Apply responsive gap spacing for flex/grid
 * @param size - Gap size (xs, sm, md, lg)
 * @returns Mobile-first gap classes
 *
 * @example
 * <div className={cn('flex', responsive.gap('md'))}>
 */
export function gap(size: keyof typeof DESIGN_TOKENS.spacing.gap = 'md'): string {
  const gapSpacing = DESIGN_TOKENS.spacing.gap[size];
  return cn(
    gapSpacing.mobile,
    gapSpacing.tablet,
    gapSpacing.desktop
  );
}

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

/**
 * Apply hover animation effects
 * @param effects - Array of effect types
 * @returns Hover animation classes
 *
 * @example
 * <div className={responsive.hover(['scale', 'shadow'])}>
 */
export function hover(effects: Array<'scale' | 'lift' | 'shadow'>): string {
  return cn(
    DESIGN_TOKENS.animation.transition.all,
    DESIGN_TOKENS.animation.duration.normal,
    ...effects.map(effect => DESIGN_TOKENS.animation.hover[effect])
  );
}

/**
 * Apply transition effects
 * @param type - Transition type
 * @param duration - Duration variant
 * @returns Transition classes
 *
 * @example
 * <div className={responsive.transition('colors', 'fast')}>
 */
export function transition(
  type: keyof typeof DESIGN_TOKENS.animation.transition = 'all',
  duration: keyof typeof DESIGN_TOKENS.animation.duration = 'normal'
): string {
  return cn(
    DESIGN_TOKENS.animation.transition[type],
    DESIGN_TOKENS.animation.duration[duration]
  );
}

// ============================================================================
// UTILITY OBJECT EXPORT
// ============================================================================

/**
 * Main responsive utilities object
 * Import and use: import { responsive } from '@/lib/responsive-utils';
 */
export const responsive = {
  // Layout
  section,
  container,
  card,

  // Typography
  heading,
  text,

  // Grid
  grid,
  gap,

  // Components
  cardStyle,
  button,

  // Animations
  hover,
  transition,
} as const;

// ============================================================================
// BREAKPOINT UTILITIES
// ============================================================================

/**
 * Get breakpoint value in pixels
 * @param breakpoint - Breakpoint key
 * @returns Pixel value
 *
 * @example
 * const mdBreakpoint = getBreakpointValue('md'); // 768
 */
export function getBreakpointValue(breakpoint: keyof typeof DESIGN_TOKENS.breakpoints): number {
  return DESIGN_TOKENS.breakpoints[breakpoint];
}

/**
 * Check if a width is below a breakpoint
 * @param width - Width in pixels
 * @param breakpoint - Breakpoint key
 * @returns Boolean
 *
 * @example
 * const isMobile = isBelowBreakpoint(window.innerWidth, 'md');
 */
export function isBelowBreakpoint(
  width: number,
  breakpoint: keyof typeof DESIGN_TOKENS.breakpoints
): boolean {
  return width < DESIGN_TOKENS.breakpoints[breakpoint];
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================
export type ResponsiveOptions = {
  section?: SpacingVariant;
  heading?: TypographyLevel;
  grid?: GridVariant;
  gap?: keyof typeof DESIGN_TOKENS.spacing.gap;
};
