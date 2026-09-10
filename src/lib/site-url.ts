export const SITE_URL = "https://sprintersbokk.com";

export function abs(path: string): string {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

/**
 * Shared social-preview image meta tags. Pages without a dedicated image of
 * their own fall back to the site's default OG banner so every indexable
 * page has an og:image/twitter:image rather than none at all.
 */
export function ogImageMeta(alt: string) {
  return [
    { property: "og:image", content: abs("/og-banner.jpg") },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: alt },
    { name: "twitter:image", content: abs("/og-banner.jpg") },
  ];
}
