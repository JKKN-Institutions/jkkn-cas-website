# How to Add Lab Images

## Quick Start

1. **Prepare Your Images**
   - Get three lab photos (or use stock images)
   - Recommended resolution: 1200x900px (4:3 aspect ratio)
   - Save as JPG format
   - Optimize for web (target < 200KB per image)

2. **Name Your Images**
   - `lab-1.jpg` - Chemistry/Biology laboratory
   - `lab-2.jpg` - Equipment/Research laboratory
   - `lab-3.jpg` - Computer laboratory

3. **Add to This Directory**
   - Place all three images in this folder: `public/images/labs/`
   - The path should be: `D:\Sangeetha_V\cas-website\public\images\labs\`

4. **Update the Page Component**
   Open `src/app/facilities/labs/page.tsx` and make these changes:

   **For Image 1 (lines 20-32):**
   ```tsx
   <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
     <Image
       src="/images/labs/lab-1.jpg"
       alt="Chemistry and Biology laboratory with students in white coats conducting experiments"
       fill
       sizes="(max-width: 768px) 100vw, 33vw"
       className="object-cover"
     />
   </div>
   ```

   **For Image 2 (lines 33-45):**
   ```tsx
   <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
     <Image
       src="/images/labs/lab-2.jpg"
       alt="Modern equipment and research laboratory with advanced technology"
       fill
       sizes="(max-width: 768px) 100vw, 33vw"
       className="object-cover"
     />
   </div>
   ```

   **For Image 3 (lines 46-58):**
   ```tsx
   <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
     <Image
       src="/images/labs/lab-3.jpg"
       alt="Computer laboratory with students working at modern computer stations"
       fill
       sizes="(max-width: 768px) 100vw, 33vw"
       className="object-cover"
     />
   </div>
   ```

5. **Test**
   - Refresh the page at `http://localhost:3000/facilities/labs`
   - Images should load automatically
   - Check that they display correctly on mobile and desktop

## Image Specifications

### Ideal Image Content

**lab-1.jpg - Chemistry/Biology Lab**
- Students wearing white lab coats
- Chemistry equipment (beakers, test tubes, etc.)
- Biology equipment (microscopes, specimens, etc.)
- Clean, professional laboratory environment

**lab-2.jpg - Equipment/Research Lab**
- Advanced research equipment
- Modern technology and instruments
- Professional research setting
- Well-lit, organized workspace

**lab-3.jpg - Computer Lab**
- Students working at computer stations
- Modern computers and monitors
- Organized rows of workstations
- Professional learning environment

### Technical Specifications

| Specification | Requirement |
|--------------|-------------|
| **Format** | JPG (preferred) or PNG |
| **Dimensions** | 1200x900px minimum (4:3 ratio) |
| **File Size** | < 200KB per image (optimized) |
| **Color Space** | sRGB |
| **Quality** | High quality, web-optimized |
| **Orientation** | Landscape (horizontal) |

### Image Optimization Tips

1. **Use Online Tools**:
   - TinyPNG.com - Compress without quality loss
   - Squoosh.app - Advanced compression
   - ImageOptim - Desktop app for Mac
   - JPEG Optimizer - For Windows

2. **Photoshop/GIMP Settings**:
   - Save for Web & Devices
   - Quality: 75-85%
   - Progressive JPEG
   - Strip metadata

3. **Command Line** (if you have ImageMagick):
   ```bash
   convert input.jpg -resize 1200x900 -quality 85 lab-1.jpg
   convert input.jpg -resize 1200x900 -quality 85 lab-2.jpg
   convert input.jpg -resize 1200x900 -quality 85 lab-3.jpg
   ```

## Stock Photo Resources (Free)

If you need placeholder images:
- **Unsplash.com** - Search "laboratory" or "science lab"
- **Pexels.com** - High quality free photos
- **Pixabay.com** - Royalty-free images
- **Freepik.com** - Free resources (attribution may be required)

Search terms to try:
- "chemistry laboratory"
- "biology lab students"
- "computer lab classroom"
- "research laboratory"
- "science equipment"

## Troubleshooting

### Images Not Showing?

1. **Check File Names**: Must be exactly `lab-1.jpg`, `lab-2.jpg`, `lab-3.jpg` (lowercase)
2. **Check Location**: Must be in `public/images/labs/` directory
3. **Check Format**: JPG or PNG only
4. **Refresh Browser**: Hard refresh with Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
5. **Check Console**: Open browser DevTools (F12) and check for errors

### Images Look Stretched or Cropped?

- Ensure images are 4:3 aspect ratio (1200x900, 800x600, etc.)
- If different ratio, use `object-fit: cover` (already set in code)
- Or crop images to 4:3 before uploading

### Images Too Large (Slow Loading)?

1. Compress using online tools mentioned above
2. Target file size: < 200KB per image
3. Next.js will automatically optimize images, but starting smaller helps

## Alternative: Using Existing JKKN Images

If you have access to the existing JKKN website:
1. Visit cas.jkkn.ac.in/labs
2. Right-click on each image
3. "Save Image As..." or "Copy Image"
4. Save/paste in this directory with correct names
5. Resize and optimize if needed

---

**Need Help?**
Check the main implementation summary at: `LABS_IMPLEMENTATION_SUMMARY.md`
