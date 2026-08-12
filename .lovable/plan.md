# SEO & Performance Optimization Plan - Cricbet99

This plan addresses the errors and performance issues identified in the PageSpeed Insights report for `https://cricbet99.co.in/`. We will focus on improving Core Web Vitals (LCP, CLS, TBT), enhancing accessibility, and solidifying SEO.

## User Review Required

> [!IMPORTANT]
> The current logo and hero images are being served as local assets. If you have a CDN or optimized versions of these, please let me know. I will also be preloading critical fonts and assets.

## Proposed Changes

### ⚡ Performance & Core Web Vitals
- **LCP (Largest Contentful Paint) Optimization**:
    - Add `fetchpriority="high"` and `preload` for the hero banner image in `src/routes/index.tsx`.
    - Implement a progressive loading strategy for the hero section to show content faster.
- **CLS (Cumulative Layout Shift) Reduction**:
    - Ensure all images have explicit `width` and `height` attributes or aspect-ratio containers.
    - Fix potential shifts in the `LiveDashboard` and `AiOverview` components by adding placeholder heights.
- **TBT (Total Blocking Time) Reduction**:
    - Optimize the `AiOverview` fetch to ensure it doesn't block the main thread.
    - Defer non-critical scripts and styles.

### 🔍 SEO & Accessibility
- **Semantic HTML Audit**:
    - Ensure every page has exactly one `H1` and a logical heading hierarchy.
    - Add missing `aria-label` attributes to icon-only buttons (like social links).
- **Metadata Enhancements**:
    - Refine `robots.txt` and `sitemap.xml` for better indexability.
    - Audit all 90+ routes for missing `alt` tags (automated script).
- **Font Optimization**:
    - Preload critical fonts to prevent FOIT/FLOUT.

### 🛠️ Technical Implementation Details
1. **Hero Optimization**: Update `src/routes/index.tsx` to include `link rel="preload"` for the hero image in the `head` function.
2. **Dimension Fixes**: Update `SiteLayout`, `mega-menu`, and `index` components to specify image dimensions.
3. **Lazy Loading**: Ensure all non-above-the-fold images use `loading="lazy"`.
4. **Script Optimization**: Review `src/routes/__root.tsx` for any blocking scripts.

## Next Steps
1. Apply LCP and CLS fixes to the homepage and root layout.
2. Run a script to verify `alt` tags across the codebase.
3. Optimize font loading in `src/routes/__root.tsx`.
