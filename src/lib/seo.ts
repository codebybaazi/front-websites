export const SITE_ORIGIN = "https://mahadevbookss.com";
export const OG_IMAGE_URL = `${SITE_ORIGIN}/og-image.jpg`;
export const SUPPORT_EMAIL = "support@mahadevbookss.com";
export const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;

/** Public office used in LocalBusiness / Organization NAP. */
export const OFFICE_ADDRESS = {
  streetAddress: "1012",
  addressLocality: "South Delhi",
  addressRegion: "Delhi",
  postalCode: "",
  addressCountry: "IN",
} as const;

export const OFFICE_ADDRESS_LINE = "1012, South Delhi, India";

export function postalAddressJsonLd() {
  return {
    "@type": "PostalAddress",
    streetAddress: OFFICE_ADDRESS.streetAddress,
    addressLocality: OFFICE_ADDRESS.addressLocality,
    addressRegion: OFFICE_ADDRESS.addressRegion,
    addressCountry: OFFICE_ADDRESS.addressCountry,
  };
}

export function sameAsForNumber(waNumber?: string) {
  const urls = [`${SITE_ORIGIN}/contact`];
  if (waNumber) urls.unshift(`https://wa.me/${waNumber}`);
  return urls;
}

/** Shared Open Graph / Twitter image tags. Files live in /public. */
export function ogImageMeta(alt: string) {
  return [
    { property: "og:image", content: OG_IMAGE_URL },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: alt },
    { name: "twitter:image", content: OG_IMAGE_URL },
  ];
}

export function twitterTitleMeta(title: string) {
  return [{ name: "twitter:title", content: title }];
}

export function howToJsonLd(
  name: string,
  description: string,
  steps: { name: string; text: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function isHowToPath(path: string): boolean {
  const p = path.toLowerCase();
  return (
    p.includes("how-to") ||
    p.startsWith("/betting-guides/") ||
    p === "/how-to-deposit" ||
    p === "/how-to-withdraw-safely"
  );
}

/**
 * Static file-route paths that must not also be emitted from pages.ts
 * (dedicated .tsx wins at runtime; duplicate sitemap locs confuse crawlers).
 * Redirect-only paths belong here too so they are not advertised as indexable URLs.
 */
export const FILE_ROUTE_PATHS = new Set<string>([
  "/",
  "/about",
  "/about-us",
  "/all-links",
  "/authors",
  "/awards",
  "/basketball-betting",
  "/blog",
  "/champions-trophy-betting",
  "/contact",
  "/esports-betting",
  "/football-betting",
  "/horse-racing-betting",
  "/ipl-betting",
  "/kabaddi-betting",
  "/legal",
  "/login",
  "/mahadev-betting-app",
  "/mahadev-book-bonuses",
  "/mahadev-book-customer-care-number",
  "/mahadev-book-deposit-issues",
  "/mahadev-book-deposit-methods",
  "/mahadev-book-deposit-number",
  "/mahadev-book-kyc",
  "/mahadev-book-limits",
  "/mahadev-book-login-issues",
  "/mahadev-book-priority-support",
  "/mahadev-book-referral-program",
  "/mahadev-book-telegram",
  "/mahadev-book-vs-lotus-365",
  "/mahadev-book-vs-skyexchange-247",
  "/mahadev-book-withdrawal-delay",
  "/mahadev-book-withdrawal-guide",
  "/mahadev-book-withdrawal-number",
  "/matches",
  "/policies",
  "/predictions",
  "/privacy",
  "/responsible",
  "/reviews",
  "/safety",
  "/schedule",
  "/services",
  "/sports",
  "/t20-world-cup-betting",
  "/terms",
  "/trusted",
  "/what",
  "/why",
  "/wpl-betting",
]);
