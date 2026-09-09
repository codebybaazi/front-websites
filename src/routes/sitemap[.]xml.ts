import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/data/posts";
import { authors } from "@/data/authors";
import { pages } from "@/data/pages";

import { allMatches } from "@/lib/schedule-data";

const BASE_URL = "https://mahadevbookss.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  // Only set when we have a real, honest date to report — never fabricated.
  // Blog posts use their real publish date; matches use their real kickoff
  // date once it's in the past (a future kickoff date is not a valid lastmod,
  // since lastmod must describe when the page was last modified, not a
  // future event). Static pages have no tracked edit date, so they omit it.
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.9" },
          { path: "/mahadev-book-vs-lotus-365", changefreq: "monthly", priority: "0.8" },
          { path: "/mahadev-book-vs-skyexchange-247", changefreq: "monthly", priority: "0.8" },
          { path: "/login", changefreq: "monthly", priority: "0.7" },
          { path: "/mahadev-betting-app", changefreq: "weekly", priority: "0.9" },
          { path: "/predictions", changefreq: "hourly", priority: "0.9" },
          { path: "/schedule", changefreq: "daily", priority: "0.9" },
          { path: "/matches", changefreq: "daily", priority: "0.9" },
          { path: "/all-links", changefreq: "weekly", priority: "0.5" },
          { path: "/authors", changefreq: "monthly", priority: "0.6" },
          ...pages.map((p) => ({
            path: p.path,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          ...authors.map((a) => ({
            path: `/authors/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.5",
          })),
          ...posts.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
            lastmod: p.date,
          })),
          ...allMatches.map((m) => {
            const isPast = m.date < today;
            return {
              path: `/match/${m.slug}`,
              // A past match's preview/prediction content is settled and won't
              // change again, so it's crawled far less often and ranked lower.
              // An upcoming match's page is effectively static too (no live
              // score integration), so "weekly" overstated how often it
              // actually changes — "monthly" is closer to the truth.
              changefreq: isPast ? ("never" as const) : ("monthly" as const),
              priority: isPast ? "0.3" : "0.6",
              // Only past matches get a lastmod: their kickoff date is a real
              // past date. An upcoming match's kickoff date is in the future,
              // which is not a valid "last modified" date, so it's omitted
              // rather than faked.
              lastmod: isPast ? m.date : undefined,
            };
          }),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

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
