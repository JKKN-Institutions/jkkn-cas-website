# Programme Page Migration Guide

## Overview

This guide explains how to migrate programme pages to use the new `ProgrammePage` template, achieving 95%+ code reduction while maintaining all functionality with improved mobile-first design.

## Migration Benefits

- ✅ **98%+ code reduction** (800 lines → 13 lines)
- ✅ **Consistent mobile-first design** across all pages
- ✅ **Centralized maintenance** - fix once, apply everywhere
- ✅ **Type-safe data** with TypeScript interfaces
- ✅ **Faster development** for new programmes
- ✅ **Better performance** with optimized components

## Migration Steps

### Step 1: Create Data File

Create a new file in `src/data/programmes/[programme-name].ts`:

```typescript
import type { ProgrammePageProps } from '@/components/templates/ProgrammePage';
import { /* Import icons */ } from 'lucide-react';

export const [programmeName]Data: ProgrammePageProps = {
  // Fill in all required fields (see template below)
};
```

### Step 2: Backup Original Page

```bash
cp src/app/programmes/.../page.tsx src/app/programmes/.../page.backup.tsx
```

### Step 3: Replace Page Content

```typescript
import { ProgrammePage } from '@/components/templates/ProgrammePage';
import { [programmeName]Data } from '@/data/programmes/[programme-name]';

export default function ProgrammePage() {
  return <ProgrammePage {...[programmeName]Data} />;
}
```

## Data Structure Template

```typescript
{
  // ─── Hero Section ───
  badge: 'UGC Recognized Programme',
  title: 'Bachelor/Master of [Degree]',
  subtitle: 'Aided/Self-Finance Programme',
  tagline: 'One-line tagline',
  duration: '3 Years Duration',
  semesters: '6 Semesters',
  type: 'Full-Time Programme',
  heroColor: '#eaf1e2',

  // ─── Quick Info (4 cards) ───
  quickInfo: [
    { icon: <Icon />, stat: 'NAAC', title: 'Title', desc: 'Description' },
    // ... 3 more cards
  ],

  // ─── Programme Overview ───
  overviewBadge: 'About the Programme',
  overviewTitle: 'Programme Overview',
  overviewDescription: [
    'First paragraph...',
    'Second paragraph...'
  ],
  overviewHighlights: [
    'Highlight 1',
    'Highlight 2',
    // ... more highlights
  ],
  overviewImage: 'https://...',
  establishedYear: '1995',

  // ─── Eligibility (3 cards) ───
  eligibility: [
    {
      icon: <Icon />,
      title: 'Academic Qualification',
      items: ['Item 1', 'Item 2', ...]
    },
    // ... 2 more cards
  ],

  // ─── Curriculum (by year) ───
  curriculum: [
    {
      year: 1,
      semesters: [
        { number: 1, subjects: ['Subject 1', 'Subject 2', ...] },
        { number: 2, subjects: [...] }
      ]
    },
    // ... more years
  ],

  // ─── Learning Outcomes ───
  outcomes: [
    {
      icon: <Icon />,
      title: 'Outcome Title',
      description: 'Description'
    },
    // ... more outcomes
  ],

  // ─── Career Opportunities ───
  careerDescription: 'Optional description',
  careers: [
    {
      icon: <Icon />,
      title: 'Career Path',
      roles: ['Role 1', 'Role 2', ...]
    },
    // ... more career paths
  ],

  // ─── Facilities ───
  facilities: [
    {
      icon: <Icon />,
      title: 'Facility Name',
      description: 'Description'
    },
    // ... more facilities
  ],

  // ─── Why Choose ───
  whyChoose: [
    {
      icon: <Icon />,
      title: 'Reason',
      description: 'Description'
    },
    // ... more reasons
  ],

  // ─── FAQ ───
  faq: [
    {
      question: 'Question?',
      answer: 'Answer...'
    },
    // ... more FAQs
  ],

  // ─── Admission ───
  admissionUrl: 'https://admission.jkkn.ac.in/...'
}
```

## Icon Selection Guide

Common icons from `lucide-react`:

- **Academic:** GraduationCap, BookOpen, Award, School
- **People:** Users, UserPlus, Users2
- **Career:** Briefcase, TrendingUp, Target
- **Science:** FlaskConical, Microscope, TestTube, Atom, Beaker
- **Tech:** Code, Cpu, Monitor, Laptop
- **Business:** BarChart, Building2, DollarSign
- **General:** CheckCircle2, ArrowRight, Sparkles, Clock, FileText

## Migration Checklist

For each programme page:

- [ ] Create data file in `src/data/programmes/`
- [ ] Fill in all required fields
- [ ] Select appropriate icons
- [ ] Backup original page file
- [ ] Replace page with template import
- [ ] Test on mobile (320px, 375px, 414px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1280px+)
- [ ] Verify all sections render correctly
- [ ] Check navigation/scrolling
- [ ] Verify CTA buttons work

## Migration Priority Order

### Phase 1: Aided UG (6 pages)
1. ✅ B.Sc Chemistry (done - example)
2. B.A. English
3. B.A. History
4. B.Sc Mathematics
5. B.Sc Zoology
6. B.Com

### Phase 2: Aided PG (5 pages)
7. MCA
8. M.A. English
9. M.Sc Chemistry
10. M.Sc Mathematics
11. M.Com

### Phase 3: Aided PhD (4 pages)
12. Commerce
13. Computer Science
14. English
15. Mathematics

### Phase 4: Self-Finance UG (5 pages)
16. BBA
17. BCA
18. B.Sc IT
19. B.Sc CS
20. B.Com CA

### Phase 5: Self-Finance PG (3 pages)
21. MBA
22. M.Sc IT
23. M.Sc CS

### Phase 6: Additional Programmes (8 pages)
24-31. Any other programme pages

## Tips for Fast Migration

1. **Copy from B.Sc Chemistry** - Use it as a template, just change the content
2. **Reuse Icons** - Many programmes share similar icons
3. **Batch Process** - Migrate similar programmes together (all B.Sc, all M.Sc, etc.)
4. **Test in Batches** - Migrate 5-6 pages, test, then continue
5. **Common Fields** - Many programmes share eligibility, facilities, why choose sections

## Common Sections Across Programmes

These can often be reused with minor modifications:

### Academic Qualifications (Eligibility)
- UG: 10+2 with relevant subjects
- PG: Bachelor's degree with relevant specialization
- PhD: Master's degree with research experience

### Facilities (Reusable)
- Advanced Laboratories
- Digital Library
- Research Center
- Industry Tie-ups
- Placement Cell

### Why Choose (Reusable)
- NAAC Accredited
- Expert Faculty
- Placement Support
- Practical Focus
- Industry Exposure

### Standard FAQ (Customize per programme)
- What is the duration?
- Career opportunities?
- UGC recognition?
- Fee structure?
- Research opportunities?

## Troubleshooting

### Missing Fields Error
If you get TypeScript errors about missing required fields, check the `ProgrammePageProps` interface and ensure all required fields are provided.

### Icon Not Rendering
Make sure to import the icon from `lucide-react`:
```typescript
import { IconName } from 'lucide-react';
```

### Image Not Loading
Use placeholder images for testing:
```
https://placehold.co/600x450/0b6d41/FFFFFF?text=Programme+Name
```

### Sections Look Wrong
The template uses responsive utilities. Test on actual devices or browser dev tools with device emulation.

## Next Steps After Migration

Once all 31 pages are migrated:

1. Delete all `.backup.tsx` files
2. Run full test suite across all breakpoints
3. Update documentation
4. Celebrate the massive code reduction! 🎉

## Support

For questions or issues:
- Check the B.Sc Chemistry example: `src/data/programmes/bsc-chemistry.ts`
- Review the template: `src/components/templates/ProgrammePage.tsx`
- Refer to the type definitions in the template file

---

**Target:** Migrate all 31 programme pages in 4-5 days (6-7 pages per day)
**Expected Code Reduction:** ~24,000 lines → ~400 lines (98% reduction!)
