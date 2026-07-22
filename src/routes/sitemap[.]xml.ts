import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ALL_PAGE_SLUGS } from "@/data/pages";
import { ALL_GUIDE_SLUGS } from "@/data/guides";
import { ALL_CASE_SLUGS } from "@/data/cases";
import { ALL_POST_SLUGS, POSTS } from "@/data/posts";
import { cricketSeries, footballMatches, tennisEvents } from "@/data/schedule";
import { cricketSeriesSlug, footballMatchSlug, tennisEventSlug, tennisRounds } from "@/lib/match-slug";

import { siteUrl } from "@/data/site";
const BASE_URL = siteUrl;

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
        const entries: Array<{ path: string; lastmod?: string }> = [
          { path: "/" },
          { path: "/schedule" },
          { path: "/matches" },
          { path: "/blog" },
          ...["cricket", "football", "casino", "platform", "guides"].map((c) => ({
            path: `/blog/category/${c}`,
          })),
          { path: "/betting-guides" },
          { path: "/case-study" },
          { path: "/lotus365-login" },
          { path: "/lotus365-vs-skyexchange" },
          { path: "/lotus365-vs-diamondexch" },
          { path: "/lotus365-vs-betbhai9" },
          { path: "/lotus365-vs-lords-exchange" },
          { path: "/lotus365-vs-fairplay" },
          { path: "/lotus365-vs-betbook247" },
          { path: "/lotus365-app-download" },
          { path: "/lotus365-customer-care" },
          { path: "/is-lotus365-legal-in-india" },
          { path: "/lotus365-apk" },
          { path: "/lotus365-win" },
          { path: "/lotus365-register" },
          { path: "/lotus365-blue" },
          ...ALL_PAGE_SLUGS.map((s) => ({ path: `/${s}` })),
          ...ALL_GUIDE_SLUGS.map((s) => ({ path: `/betting-guides/${s}` })),
          ...ALL_CASE_SLUGS.map((s) => ({ path: `/case-study/${s}` })),
          ...ALL_POST_SLUGS.map((s) => ({
            path: `/blog/${s}`,
            lastmod: postLastmod.get(s),
          })),
          ...cricketMatchPaths.map((path) => ({ path })),
          ...footballMatchPaths.map((path) => ({ path })),
          ...tennisPaths.map((path) => ({ path })),
        ];
        const urls = entries
          .map((e) => {
            const lastmod = e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : "";
            return `  <url><loc>${BASE_URL}${e.path}</loc>${lastmod}<changefreq>weekly</changefreq></url>`;
          })
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
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
