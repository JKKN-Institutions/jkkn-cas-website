# Brand Color Guidelines

## Official Brand Colors

### Primary Colors

#### Brand Green
- **Hex**: `#0b6d41`
- **RGB**: `rgb(11, 109, 65)`
- **Usage**: Primary buttons, headers, navigation, primary text accents
- **Tailwind Class**: `brand-green`
- **When to use**: For primary actions, main headings, brand elements

#### Accent Yellow
- **Hex**: `#ffde59`
- **RGB**: `rgb(255, 222, 89)`
- **Usage**: Highlights, call-to-action accents, hover states, badges
- **Tailwind Class**: `brand-yellow`
- **When to use**: For attention-grabbing elements, secondary CTAs, highlights

#### Background Cream
- **Hex**: `#fbfbee`
- **RGB**: `rgb(251, 251, 238)`
- **Usage**: Page backgrounds, section backgrounds, light surfaces
- **Tailwind Class**: `brand-cream`
- **When to use**: For soft backgrounds, alternating sections, cards

## Color Mapping Rules

When recreating designs from images, map original colors as follows:

### Dark/Primary Colors → Brand Green (#0b6d41)
- Blue (any shade)
- Teal
- Dark green
- Navy
- Primary brand colors in the original design

### Bright/Accent Colors → Brand Yellow (#ffde59)
- Orange
- Gold
- Amber
- Bright yellow
- Highlight colors in the original design

### Light Backgrounds → Brand Cream (#fbfbee)
- Beige
- Off-white (non-pure white)
- Light gray backgrounds
- Tan
- Light yellow backgrounds

### Keep As-Is
- **Pure White** (`#ffffff`) - For cards, text backgrounds
- **Pure Black** (`#000000`) - For primary text (or use very dark gray)
- **Gray Shades** - For secondary text, borders, shadows

## Accessibility Guidelines

### Contrast Ratios

Ensure proper contrast for WCAG AA compliance:

- **Brand Green on White**: ✅ Excellent (8.24:1)
- **Brand Green on Brand Cream**: ✅ Good (7.89:1)
- **White on Brand Green**: ✅ Excellent (8.24:1)
- **Brand Yellow on Brand Green**: ✅ Good (4.83:1)
- **Black on Brand Yellow**: ✅ Excellent (12.47:1)
- **Brand Green on Brand Yellow**: ⚠️ Use carefully (3.2:1)

### Best Practices

1. **Text on Backgrounds**:
   - Dark text on brand-cream: Use `text-gray-900` or `text-brand-green`
   - Light text on brand-green: Use `text-white`
   - Dark text on brand-yellow: Use `text-gray-900` or `text-brand-green`

2. **Buttons**:
   - Primary: `bg-brand-green text-white`
   - Secondary: `bg-brand-yellow text-brand-green`
   - Outline: `border-brand-green text-brand-green`

3. **Links**:
   - Default: `text-brand-green hover:underline`
   - Visited: Can keep same or slightly darker

## Tailwind Configuration

Add to `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        'brand-green': '#0b6d41',
        'brand-yellow': '#ffde59',
        'brand-cream': '#fbfbee',
      },
    },
  },
}
```

## Common Color Combinations

### Hero Sections
```tsx
// Option 1: Cream background
<section className="bg-brand-cream">
  <h1 className="text-brand-green">Hero Title</h1>
  <button className="bg-brand-green text-white">CTA Button</button>
</section>

// Option 2: Green background
<section className="bg-brand-green">
  <h1 className="text-white">Hero Title</h1>
  <button className="bg-brand-yellow text-brand-green">CTA Button</button>
</section>
```

### Feature Cards
```tsx
<div className="bg-white border-2 border-brand-green">
  <h3 className="text-brand-green">Feature Title</h3>
  <p className="text-gray-600">Description</p>
</div>
```

### Call-to-Action Sections
```tsx
<section className="bg-brand-green">
  <h2 className="text-white">Ready to get started?</h2>
  <button className="bg-brand-yellow text-brand-green">Get Started</button>
</section>
```

## Gradients (Optional)

If gradients are needed:

```tsx
// Green gradient
bg-gradient-to-r from-brand-green to-emerald-600

// Yellow accent gradient
bg-gradient-to-r from-brand-yellow to-amber-400

// Subtle background gradient
bg-gradient-to-b from-brand-cream to-white
```

## Opacity Variations

When subtle variations are needed:

```tsx
// Semi-transparent brand colors
bg-brand-green/90    // 90% opacity
bg-brand-green/75    // 75% opacity
bg-brand-green/50    // 50% opacity
bg-brand-green/10    // 10% opacity (very subtle)

bg-brand-yellow/90
bg-brand-cream/50
```

## Dark Mode Considerations

If dark mode is implemented in the future:

- Brand Green remains consistent
- Brand Yellow may need slightly darker shade for dark backgrounds
- Brand Cream inverts to a dark gray or charcoal

## Don'ts

❌ Don't use these colors:
- Bright red (except for error states)
- Bright blue (unless in original design being replicated)
- Purple
- Pink
- Neon colors

❌ Don't mix multiple brand colors in text:
- Avoid multi-colored headings
- Keep text consistent within sections

❌ Don't use brand-yellow for large text blocks:
- It's an accent color, use sparingly
- Primary text should be brand-green or gray shades

## Examples by Component Type

### Navigation
- Background: `bg-white` or `bg-brand-cream`
- Links: `text-brand-green hover:text-brand-green/80`
- Active: `text-brand-green font-semibold border-b-2 border-brand-yellow`

### Buttons
- Primary: `bg-brand-green hover:bg-brand-green/90 text-white`
- Secondary: `bg-brand-yellow hover:bg-brand-yellow/90 text-brand-green`
- Outline: `border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white`

### Forms
- Input borders: `border-gray-300 focus:border-brand-green`
- Labels: `text-brand-green font-medium`
- Error state: `border-red-500` (exception to brand colors)
- Success state: `border-brand-green`

### Badges/Tags
- Info: `bg-brand-cream text-brand-green`
- Highlight: `bg-brand-yellow text-brand-green`
- Success: `bg-brand-green text-white`

### Footer
- Background: `bg-brand-green`
- Text: `text-white`
- Links: `text-brand-yellow hover:text-brand-yellow/80`
