# Image Page Replicator Skill

## Overview

This skill enables Claude to analyze uploaded images of webpage designs and recreate them exactly as shown, preserving layout, content, and structure while applying your brand colors.

## Brand Colors

- **Primary Green**: `#0b6d41`
- **Accent Yellow**: `#ffde59`
- **Background Cream**: `#fbfbee`

## When to Use

Use this skill when you want to:
- Convert a design mockup/screenshot into actual code
- Recreate an exact page layout from an image
- Build a page that matches a specific design reference
- Replicate competitor pages with your brand colors

## How to Use

### User Prompt Template

```
See the image. Create this exactly same design (color and text also) for "[page-name]" page.
Don't change anything, just replicate it. Don't change or add any other design or text.
Always page be responsive. Use our brand color. Please create it perfectly.
```

### Example Usage

1. Upload an image of the design
2. Use the prompt: "See the image. Create this exactly same design for home page. Use our brand colors."
3. Claude will:
   - Analyze the image
   - Extract all text and layout structure
   - Map colors to your brand palette
   - Create responsive code with Tailwind CSS
   - Verify completeness

## What the Skill Does

1. **Analyzes** the uploaded image comprehensively
2. **Maps** original colors to your brand colors (#0b6d41, #ffde59, #fbfbee)
3. **Recreates** the exact layout with Next.js + Tailwind CSS
4. **Ensures** responsive design (mobile, tablet, desktop)
5. **Preserves** all text content and visual hierarchy
6. **Verifies** nothing is added or removed

## Files Included

- `SKILL.md` - Complete workflow and instructions
- `references/brand-colors.md` - Detailed color guidelines and accessibility info
- `assets/tailwind.config.template.ts` - Tailwind configuration template
- `assets/page-template.tsx` - Sample page structure with brand colors

## Key Features

✅ Exact replication - No additions or modifications
✅ Brand color application - Consistent color usage
✅ Responsive design - Mobile-first approach
✅ Accessibility - Proper contrast ratios
✅ Semantic HTML - Clean, maintainable code
✅ Tailwind CSS - Utility-first styling

## Configuration Required

Add brand colors to `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      'brand-green': '#0b6d41',
      'brand-yellow': '#ffde59',
      'brand-cream': '#fbfbee',
    },
  },
}
```

## Example Output

Given an image of a landing page, the skill will create:

```tsx
// src/app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-white">
        {/* Exact navigation from image */}
      </header>

      <section className="bg-brand-cream py-20">
        {/* Exact hero section with brand colors */}
      </section>

      <section className="py-16">
        {/* Exact features/content sections */}
      </section>

      <footer className="bg-brand-green text-white">
        {/* Exact footer from image */}
      </footer>
    </div>
  );
}
```

## Tips for Best Results

1. **Upload high-quality images** - Clear text and layout details
2. **Use the exact prompt** - Ensures skill triggers correctly
3. **Specify page name** - Helps Claude name files correctly
4. **Review output** - Check all text matches the image
5. **Test responsiveness** - Verify on different screen sizes

## Version

- **Version**: 1.0.0
- **Created**: 2026-01-26
- **Compatible with**: Next.js 14+, Tailwind CSS 3+

## Support

If the skill doesn't work as expected:
1. Ensure the image is clear and readable
2. Use the recommended prompt format
3. Check that Tailwind config includes brand colors
4. Verify the image contains a complete page design

## License

See LICENSE.txt for complete terms.
