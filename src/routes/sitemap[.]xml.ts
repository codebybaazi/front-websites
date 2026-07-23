import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/data/posts";

import { allMatches } from "@/lib/schedule-data";

const BASE_URL = "https://mahadevbookss.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
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
          ...posts.map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly" as const, priority: "0.6" })),
          ...allMatches.map((m) => ({ path: `/match/${m.slug}`, changefreq: "weekly" as const, priority: "0.6" })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
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
