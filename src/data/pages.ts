// Auto-generated content pages for Sprinters Online Gaming.
// Each entry powers a splat route via src/routes/$.tsx.
// Slugs mirror the source sitemap; content is rebranded and rephrased for Sprinters.

export type PageSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type PageContent = {
  slug: string;            // e.g. "sprinters-cricket" or "betting-guides/how-to-place-a-cricket-bet"
  metaTitle: string;       // <= 60 chars
  metaDescription: string; // <= 160 chars
  kicker: string;
  title: string;
  intro: string;
  sections: PageSection[];
  cta?: string;
  category?: string;       // for JSON-LD Article grouping
};

import { GENERATED_PAGES } from "./pages.generated";

export const PAGES: Record<string, PageContent> = GENERATED_PAGES;

export function getPage(slug: string | undefined): PageContent | null {
  if (!slug) return null;
  const clean = slug.replace(/^\/+|\/+$/g, "");
  return PAGES[clean] ?? null;
}

export const ALL_PAGE_SLUGS = Object.keys(PAGES);
