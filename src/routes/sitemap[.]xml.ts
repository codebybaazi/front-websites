import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogPosts } from "@/data/blog-posts";
import { ALL_PAGE_SLUGS } from "@/data/pages";
import { wc2026Matches } from "@/data/wc2026-matches";
import { cricketSeries2026 } from "@/data/cricket-series-2026";
import { tennis2026 } from "@/data/tennis-2026";
import { getLiveMatches } from "@/lib/live-matches.functions";

const BASE_URL = "https://sprintersbokk.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/matches", changefreq: "daily", priority: "0.9" },

          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.8" },
          { path: "/platforms", changefreq: "monthly", priority: "0.8" },
          { path: "/sports-id", changefreq: "monthly", priority: "0.9" },
          { path: "/cricket-betting", changefreq: "weekly", priority: "0.9" },
          { path: "/cricket-betting-app", changefreq: "weekly", priority: "0.9" },
          { path: "/football-betting", changefreq: "weekly", priority: "0.9" },
          { path: "/tennis-betting", changefreq: "weekly", priority: "0.8" },
          { path: "/horse-race-betting", changefreq: "weekly", priority: "0.8" },
          { path: "/casino", changefreq: "weekly", priority: "0.9" },
          { path: "/indian-card-games", changefreq: "weekly", priority: "0.8" },
          { path: "/predictions", changefreq: "daily", priority: "0.95" },
          { path: "/cricbet99", changefreq: "monthly", priority: "0.7" },
          { path: "/laser247", changefreq: "monthly", priority: "0.7" },
          { path: "/11xplay", changefreq: "monthly", priority: "0.7" },
          { path: "/sprinters-club", changefreq: "monthly", priority: "0.7" },
          { path: "/sprinters-login", changefreq: "monthly", priority: "0.5" },
          { path: "/sprinters-vs-lotus365", changefreq: "monthly", priority: "0.6" },
          { path: "/sprinters-vs-skyexchange247", changefreq: "monthly", priority: "0.6" },
          { path: "/blog", changefreq: "daily", priority: "0.9" },
          { path: "/thank-you", changefreq: "yearly", priority: "0.2" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms-and-conditions", changefreq: "yearly", priority: "0.3" },
          { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
          { path: "/responsible-gambling", changefreq: "yearly", priority: "0.5" },
        ];

        const postEntries: SitemapEntry[] = blogPosts.map((p) => ({
          path: `/post/${p.slug}`,
          lastmod: p.date || undefined,
          changefreq: "monthly",
          priority: "0.6",
        }));

        const generatedEntries: SitemapEntry[] = ALL_PAGE_SLUGS.map((slug) => ({
          path: `/${slug}`,
          changefreq: "weekly",
          priority: "0.6",
        }));

        const scheduleEntries: SitemapEntry[] = [
          { path: "/schedule", changefreq: "daily", priority: "0.8" },
          ...wc2026Matches.map((m) => ({
            path: `/schedule/${m.slug}`,
            lastmod: m.kickoffUtc.slice(0, 10),
            changefreq: "daily" as const,
            priority: "0.75",
          })),
        ];

        const cricketScheduleEntries: SitemapEntry[] = [
          { path: "/cricket-schedule", changefreq: "daily", priority: "0.85" },
          ...cricketSeries2026.flatMap((s) => {
            const seriesEntry: SitemapEntry = {
              path: `/cricket-schedule/${s.slug}`,
              lastmod: s.startIso,
              changefreq: "weekly" as const,
              priority: "0.7",
            };
            const matchEntries: SitemapEntry[] = (s.matches ?? []).map((_, i) => ({
              path: `/cricket-schedule/${s.slug}/${i + 1}`,
              changefreq: "daily" as const,
              priority: "0.6",
            }));
            return [seriesEntry, ...matchEntries];
          }),
        ];

        const tennisScheduleEntries: SitemapEntry[] = [
          ...tennis2026.flatMap((t) => {
            const eventEntry: SitemapEntry = {
              path: `/tennis-schedule/${t.slug}`,
              lastmod: t.startIso,
              changefreq: "weekly" as const,
              priority: "0.7",
            };
            const roundEntries: SitemapEntry[] = (t.rounds ?? []).map((_, i) => ({
              path: `/tennis-schedule/${t.slug}/${i + 1}`,
              changefreq: "daily" as const,
              priority: "0.6",
            }));
            return [eventEntry, ...roundEntries];
          }),
        ];

        let liveMatchEntries: SitemapEntry[] = [];
        try {
          const liveMatches = await getLiveMatches();
          liveMatchEntries = liveMatches
            .filter((e) => e.event?.id)
            .map((e) => ({
              path: `/match/${e.event!.id}`,
              changefreq: "hourly" as const,
              priority: "0.7",
            }));
        } catch {
          liveMatchEntries = [];
        }

        const entries = [...staticEntries, ...postEntries, ...generatedEntries, ...scheduleEntries, ...cricketScheduleEntries, ...tennisScheduleEntries, ...liveMatchEntries];


        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
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
