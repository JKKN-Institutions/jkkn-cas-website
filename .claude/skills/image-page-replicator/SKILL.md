---
name: image-page-replicator
description: This skill should be used when the user uploads an image of a webpage/design and requests to recreate it exactly with the same layout, content, and structure while applying brand colors. Triggers on phrases like "recreate this design", "replicate this page", "create exact same design", or when user explicitly mentions creating a page from an uploaded image.
---

# Image Page Replicator

## Overview

This skill enables Claude to analyze an uploaded image of a webpage or design and recreate it exactly as shown, preserving the layout, content, text, and structure while applying the project's brand colors.

## Brand Colors

The following brand colors must be used when recreating designs:

- **Primary Green**: `#0b6d41`
- **Accent Yellow**: `#ffde59`
- **Background Cream**: `#fbfbee`

## When to Use This Skill

Use this skill when the user:
- Uploads an image and asks to "recreate this design"
- Requests to "replicate this page exactly"
- Says "create the same design" or "copy this layout"
- Provides the specific prompt: "See the image. Create this exactly same design (color and text also) for [page-name] page. Don't change anything, just replicate it."
- Wants to convert a design mockup/screenshot into actual code

## Workflow

### Step 1: Analyze the Image

When an image is provided:

1. **Read the image** using the Read tool to view it visually
2. **Analyze the complete layout structure**:
   - Header section (logo, navigation, menu items)
   - Hero/Banner section (headings, subheadings, call-to-action buttons)
   - Content sections (grid layouts, cards, text blocks)
   - Features/Services sections
   - Footer (links, social media, contact info)
3. **Identify all text content** - Extract every piece of text visible in the image
4. **Note visual hierarchy** - Heading sizes, spacing, alignment
5. **Observe color usage** - Where different colors are applied
6. **Identify UI components** - Buttons, cards, icons, forms, navigation

### Step 2: Map Colors to Brand Palette

After analyzing the original design colors:

1. **Map primary/dark colors** to `#0b6d41` (green)
2. **Map accent/highlight colors** to `#ffde59` (yellow)
3. **Map light backgrounds** to `#fbfbee` (cream)
4. **Keep white backgrounds** as white (`#ffffff`)
5. **Keep text colors** appropriate (dark text on light backgrounds, light text on dark backgrounds)

Color replacement rules:
- Any blue, teal, or primary brand color → `#0b6d41`
- Any orange, gold, or accent color → `#ffde59`
- Any beige, off-white, or light background → `#fbfbee`
- Preserve contrast ratios for accessibility

### Step 3: Plan the Component Structure

Before writing code:

1. **Break down into sections** from top to bottom
2. **Identify reusable components** (buttons, cards, navigation items)
3. **Plan the responsive behavior**:
   - Mobile: Single column, stacked elements
   - Tablet: 2-column grid where applicable
   - Desktop: Full multi-column layout
4. **Note animations or interactions** (hover states, transitions)

### Step 4: Create the Page

#### Technology Stack
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (if needed for advanced components)
- **Icons**: Lucide React

#### File Creation Process

1. **Create the page component** in the appropriate directory:
   - For home page: `src/app/page.tsx`
   - For other pages: `src/app/[page-name]/page.tsx`

2. **Write the complete code** with:
   - Proper imports (React, Next.js components, icons)
   - TypeScript interfaces for any data structures
   - Full component structure matching the image
   - All text content exactly as shown
   - Brand colors applied via Tailwind classes
   - Responsive design with Tailwind breakpoints (sm:, md:, lg:, xl:)
   - Proper semantic HTML (header, main, section, footer)

3. **Apply Tailwind classes for brand colors**:
   ```tsx
   // Use these custom color classes (ensure they're in tailwind.config)
   bg-brand-green    // #0b6d41
   text-brand-green
   border-brand-green

   bg-brand-yellow   // #ffde59
   text-brand-yellow
   border-brand-yellow

   bg-brand-cream    // #fbfbee
   text-brand-cream
   ```

4. **Ensure responsive design**:
   ```tsx
   // Example responsive classes
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
   <h1 className="text-3xl md:text-5xl lg:text-6xl">
   <nav className="hidden md:flex">
   <button className="w-full md:w-auto">
   ```

### Step 5: Configure Tailwind for Brand Colors

If brand colors aren't already configured, update `tailwind.config.ts`:

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

### Step 6: Verify Completeness

After creating the page, verify:

1. **All text content** from the image is included
2. **Layout structure** matches exactly (sections, columns, spacing)
3. **Brand colors** are applied correctly
4. **Responsive design** works on mobile, tablet, and desktop
5. **All visual elements** are present (icons, images, buttons)
6. **No extra content** was added beyond what's in the image
7. **No content** was removed or modified

### Step 7: Test and Refine

1. **Check the page** at different breakpoints
2. **Verify color contrast** for accessibility
3. **Ensure hover states** work for interactive elements
4. **Test navigation** links (use placeholder href="#" if destinations unknown)

## Important Rules

### DO:
- ✅ Recreate the exact layout and structure
- ✅ Use all text content exactly as shown
- ✅ Apply brand colors consistently
- ✅ Make the design fully responsive
- ✅ Use semantic HTML elements
- ✅ Preserve visual hierarchy and spacing
- ✅ Include all sections visible in the image

### DON'T:
- ❌ Add extra features not shown in the image
- ❌ Remove or modify text content
- ❌ Change the layout structure
- ❌ Add different sections or components
- ❌ Use colors other than the brand palette (except for white/black/gray for text)
- ❌ Skip any visible elements from the original design
- ❌ Add comments like "// Add more features" or "// Additional functionality"

## Example Usage

### User Request:
```
See the image. Create this exactly same design (color and text also) for "home" page.
Don't change anything, just replicate it. Don't change or add any other design or text.
Always page be responsive. Use our brand color. Please create it perfectly.
```

### Expected Response:
1. Read and analyze the uploaded image
2. Identify all sections: header, hero, features, footer, etc.
3. Extract all text content
4. Map original colors to brand colors
5. Create `src/app/page.tsx` with complete implementation
6. Ensure Tailwind config includes brand colors
7. Verify all content matches the image exactly
8. Confirm responsive behavior

## Common Patterns

### Hero Section Example:
```tsx
<section className="bg-brand-cream py-20">
  <div className="container mx-auto px-4">
    <h1 className="text-5xl font-bold text-brand-green mb-4">
      [Exact heading from image]
    </h1>
    <p className="text-xl text-gray-700 mb-8">
      [Exact subheading from image]
    </p>
    <button className="bg-brand-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90">
      [Exact button text]
    </button>
  </div>
</section>
```

### Features Grid Example:
```tsx
<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Replicate each feature card exactly as shown */}
      <div className="border border-brand-green rounded-lg p-6">
        <h3 className="text-xl font-semibold text-brand-green mb-2">
          [Feature title]
        </h3>
        <p className="text-gray-600">
          [Feature description]
        </p>
      </div>
    </div>
  </div>
</section>
```

## Tips for Accuracy

1. **Text Extraction**: Read text carefully, maintaining exact wording and capitalization
2. **Spacing**: Match the spacing between elements (use Tailwind spacing: p-4, mt-8, gap-6, etc.)
3. **Font Sizes**: Match the relative sizes (text-sm, text-base, text-xl, text-3xl, etc.)
4. **Alignment**: Preserve text alignment (text-left, text-center, text-right)
5. **Icons**: If icons are present, use appropriate Lucide React icons
6. **Images**: Use placeholder images if actual images aren't provided

## Troubleshooting

**Issue**: Colors don't match the brand
- **Solution**: Ensure tailwind.config.ts includes brand colors and use correct class names

**Issue**: Layout doesn't match the image
- **Solution**: Re-analyze the image structure and adjust grid/flex classes

**Issue**: Not responsive on mobile
- **Solution**: Add appropriate breakpoint classes (md:, lg:) and test at different screen sizes

**Issue**: Missing content
- **Solution**: Review the image again systematically from top to bottom

## Version

- **Version**: 1.0.0
- **Last Updated**: 2026-01-26
- **Compatibility**: Next.js 14+, Tailwind CSS 3+
