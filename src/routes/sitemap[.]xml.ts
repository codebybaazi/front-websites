import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/data/posts";
import { authors } from "@/data/authors";
import { pages } from "@/data/pages";

import { allMatches } from "@/lib/schedule-data";
import { FILE_ROUTE_PATHS } from "@/lib/seo";

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
        ];

        const listed = new Set(entries.map((e) => e.path));
        for (const path of FILE_ROUTE_PATHS) {
          if (path === "/" || path === "/about-us" || listed.has(path)) continue;
          entries.push({ path, changefreq: "monthly", priority: "0.65" });
          listed.add(path);
        }

        entries.push(
          ...pages
            .filter((p) => !listed.has(p.path) && !FILE_ROUTE_PATHS.has(p.path) && !p.noindex)
            .map((p) => ({
              path: p.path,
              changefreq: "monthly" as const,
              priority: "0.65",
            })),
          ...authors.map((a) => ({
            path: `/authors/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.5",
          })),
          ...posts.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
            lastmod: p.updated || p.date,
          })),
          ...allMatches
            .filter((m) => {
              if (m.date >= today) return true;
              const ageDays = (Date.parse(today) - Date.parse(m.date)) / 86_400_000;
              return ageDays <= 14;
            })
            .map((m) => {
              const isPast = m.date < today;
              return {
                path: `/match/${m.slug}`,
                changefreq: isPast ? ("never" as const) : ("weekly" as const),
                // Editorial URLs sit at 0.65–1.0. Match pages stay lower so
                // hundreds of fixtures do not drown blog, CMS and money pages.
                priority: isPast ? "0.2" : "0.35",
                lastmod: isPast ? m.date : undefined,
              };
            }),
        );

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
