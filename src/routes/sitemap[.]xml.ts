import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ALL_PAGE_SLUGS } from "@/data/pages";
import { ALL_GUIDE_SLUGS } from "@/data/guides";
import { ALL_CASE_SLUGS } from "@/data/cases";
import { ALL_POST_SLUGS, POSTS } from "@/data/posts";
import { ALL_AUTHOR_SLUGS } from "@/data/authors";
import { cricketSeries, footballMatches, tennisEvents } from "@/data/schedule";
import { cricketSeriesSlug, footballMatchSlug, tennisEventSlug, tennisRounds } from "@/lib/match-slug";

import { siteUrl } from "@/data/site";
const BASE_URL = siteUrl;

const DEFAULT_IMAGE = `${BASE_URL}/og-lotus365.jpg`;
const GUIDES_IMAGE = `${BASE_URL}/og/guides.jpg`;
const CRICKET_IMAGE = `${BASE_URL}/og/cricket.jpg`;
const FOOTBALL_IMAGE = `${BASE_URL}/og/football.jpg`;
// Matches the real og:image already rendered per blog post category
// (see blog.$slug.tsx) — only casino/platform have no schedule equivalent.
const BLOG_CATEGORY_IMAGE: Record<string, string> = {
  cricket: CRICKET_IMAGE,
  football: FOOTBALL_IMAGE,
  casino: `${BASE_URL}/og/casino.jpg`,
  platform: `${BASE_URL}/og/platform.jpg`,
  guides: GUIDES_IMAGE,
};

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const cricketMatchPaths = cricketSeries.flatMap((s) =>
          s.matches.map((_, i) => `/cricket-schedule/${cricketSeriesSlug(s)}/${i + 1}`)
        );
        const footballMatchPaths = footballMatches.map((m) => `/football-schedule/${footballMatchSlug(m)}`);
        const tennisPaths = tennisEvents.flatMap((e) =>
          tennisRounds.map((r) => `/tennis-schedule/${tennisEventSlug(e)}/${r.id}`)
        );
        const postLastmod = new Map(POSTS.map((p) => [p.slug, p.updated ?? p.date]));
        const postCategory = new Map(POSTS.map((p) => [p.slug, p.category.toLowerCase()]));
        const entries: Array<{ path: string; lastmod?: string; image?: string }> = [
          { path: "/", image: DEFAULT_IMAGE },
          { path: "/schedule", image: DEFAULT_IMAGE },
          { path: "/matches", image: DEFAULT_IMAGE },
          { path: "/blog", image: DEFAULT_IMAGE },
          { path: "/authors", image: DEFAULT_IMAGE },
          ...["cricket", "football", "casino", "platform", "guides"].map((c) => ({
            path: `/blog/category/${c}`,
            image: BLOG_CATEGORY_IMAGE[c],
          })),
          { path: "/betting-guides", image: GUIDES_IMAGE },
          { path: "/case-study", image: DEFAULT_IMAGE },
          { path: "/lotus365-login", image: DEFAULT_IMAGE },
          { path: "/lotus365-vs-skyexchange", image: DEFAULT_IMAGE },
          { path: "/lotus365-vs-diamondexch", image: DEFAULT_IMAGE },
          { path: "/lotus365-vs-betbhai9", image: DEFAULT_IMAGE },
          { path: "/lotus365-vs-lords-exchange", image: DEFAULT_IMAGE },
          { path: "/lotus365-vs-fairplay", image: DEFAULT_IMAGE },
          { path: "/lotus365-vs-betbook247", image: DEFAULT_IMAGE },
          { path: "/lotus365-app-download", image: DEFAULT_IMAGE },
          { path: "/lotus365-customer-care", image: DEFAULT_IMAGE },
          { path: "/is-lotus365-legal-in-india", image: DEFAULT_IMAGE },
          { path: "/lotus365-apk", image: DEFAULT_IMAGE },
          { path: "/lotus365-win", image: DEFAULT_IMAGE },
          { path: "/lotus365-register", image: DEFAULT_IMAGE },
          { path: "/lotus365-blue", image: DEFAULT_IMAGE },
          ...ALL_PAGE_SLUGS.map((s) => ({ path: `/${s}`, image: DEFAULT_IMAGE })),
          ...ALL_AUTHOR_SLUGS.map((s) => ({ path: `/authors/${s}`, image: DEFAULT_IMAGE })),
          ...ALL_GUIDE_SLUGS.map((s) => ({ path: `/betting-guides/${s}`, image: GUIDES_IMAGE })),
          ...ALL_CASE_SLUGS.map((s) => ({ path: `/case-study/${s}`, image: DEFAULT_IMAGE })),
          ...ALL_POST_SLUGS.map((s) => ({
            path: `/blog/${s}`,
            lastmod: postLastmod.get(s),
            image: BLOG_CATEGORY_IMAGE[postCategory.get(s) ?? ""] ?? DEFAULT_IMAGE,
          })),
          ...cricketMatchPaths.map((path) => ({ path, image: CRICKET_IMAGE })),
          ...footballMatchPaths.map((path) => ({ path, image: FOOTBALL_IMAGE })),
          ...tennisPaths.map((path) => ({ path, image: DEFAULT_IMAGE })),
        ];
        const urls = entries
          .map((e) => {
            const lastmod = e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : "";
            const image = e.image ? `<image:image><image:loc>${e.image}</image:loc></image:image>` : "";
            return `  <url><loc>${BASE_URL}${e.path}</loc>${lastmod}<changefreq>weekly</changefreq>${image}</url>`;
          })
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
