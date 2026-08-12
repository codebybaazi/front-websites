# Mobile Core Web Vitals Optimization Plan

The user reports a mobile PageSpeed score of 74 and persistent Core Web Vital issues: **Image Delivery, Forced Reflow, Network Dependency Tree, Cache Lifetimes, Render-blocking resources, and Unused JavaScript.** This plan implements a sitewide technical overhaul to resolve these bottlenecks and target a 100/100 score.

## User Review Required

> [!IMPORTANT]
> This plan focuses on technical performance optimizations that affect how the site loads and renders on mobile devices. No visual designs will change significantly, but load behavior will be much faster.

- **Image Optimization**: Converting key assets to WebP/AVIF where possible and adding missing dimensions.
- **Resource Prioritization**: Fine-tuning preloads and lazy-loading to fix the "Network Dependency Tree" and "Render-blocking" issues.
- **Layout Stability**: Fixing "Forced Reflow" by optimizing CSS and ensuring layout elements have reserved space.

## Technical Details

### 1. Resource & Render Blocking Optimization
- **Critical CSS**: Extracting critical styles for above-the-fold elements and deferring non-critical CSS.
- **Script Deferral**: Audit `src/routes/__root.tsx` and components to ensure scripts are non-blocking.
- **Font Loading**: Adding `font-display: swap` to any custom fonts to prevent FOUT/FINC.

### 2. Image & Asset Delivery
- **Lazy Loading**: Enforcing `loading="lazy"` on all below-the-fold images across `index.tsx`, `schedule.tsx`, and `matches/$slug.tsx`.
- **Explicit Dimensions**: Auditing every image to ensure `width` and `height` attributes are present to prevent CLS (Cumulative Layout Shift).
- **Format Optimization**: Advising the use of modern formats (WebP/AVIF) for large assets like `hero-banner.jpg`.

### 3. Fixing Forced Reflow & Layout Issues
- **CSS Containment**: Using `contain: content` and `content-visibility: auto` on complex sections like `LiveDashboard`, `FaqSection`, and `AiOverview`.
- **Passive Listeners**: Ensuring any scroll/touch event listeners are marked as passive to prevent main-thread jank.
- **Reducing DOM Size**: Truncating or lazy-rendering large lists in `schedule.tsx` and `live-dashboard.tsx`.

### 4. Cache & Network Efficiency
- **Cache-Control**: Reviewing headers for static assets (if applicable via Cloudflare/Edge).
- **Preconnect**: Adding `preconnect` for high-priority external domains (e.g., WhatsApp, APIs).

## Implementation Steps

### Phase 1: Global Layout & Head
- Update `src/routes/__root.tsx` with optimized preloads and preconnects.
- Audit `src/styles.css` for heavy selectors causing reflows.

### Phase 2: Component Performance
- Optimize `src/components/live-dashboard.tsx`: Improve data fetching efficiency and add layout containment.
- Optimize `src/components/site-layout.tsx`: Ensure backdrop and header don't trigger layout shifts.

### Phase 3: Route-Specific Fixes
- **Homepage (`index.tsx`)**: Fix image dimensions and implement `content-visibility`.
- **Schedule (`schedule.tsx`)**: Optimize large tables for mobile rendering.
- **Match Details (`matches/$slug.tsx`)**: Ensure analytics charts and badges don't cause reflows.

### Phase 4: Final Verification
- Run a simulated Lighthouse/PageSpeed test via browser tools.
- Update the SEO Audit Report with the final status.
