import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogPosts } from "@/data/blog-posts";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths: string[] = [
          "/", "/about", "/cricket", "/football", "/tennis", "/horse-racing",
          "/casino", "/indian-card-games", "/sports-id", "/services", "/platforms",
          "/blog", "/how-it-works", "/faq", "/contact", "/responsible-gaming",
          "/privacy-policy", "/terms", "/disclaimer", "/all-links", "/cricbet99-app",
          "/cricbet99-vs-lotus365", "/cricbet99-vs-skyexchange247", "/login",
          // Generated content pages
          "/bonus", "/cricbet99-vs-11xplay", "/cricbet99-vs-laser247", "/cricbet99-vs-gold365",
          "/basketball", "/cricbet99-vs-reddybook", "/login-issues", "/deposit-issues",
          "/account-blocked", "/bonus-issues", "/withdrawal-delay", "/rules", "/refund-policy",
          "/ipl-betting", "/wpl-2026-betting", "/t20-world-cup-betting", "/cricbet99-id",
          "/whatsapp-number", "/kyc-policy", "/online-betting", "/policies",
          "/trusted-betting-id-provider", "/kabaddi", "/referral-code", "/register",
          "/big-win-stories", "/how-to-deposit", "/how-to-withdraw", "/support",
          "/whatsapp-support", "/champions-trophy-betting", "/esports", "/reviews",
          "/security", "/betting-guides", "/case-studies",
          "/matches", "/predictions", "/schedule",
          "/betting-guides/how-to-place-a-cricket-bet", "/betting-guides/how-to-place-a-live-bet",
          "/betting-guides/how-to-set-betting-limits", "/betting-guides/how-to-bet-on-toss-market",
          "/betting-guides/how-to-bet-on-session-betting", "/betting-guides/how-bookmakers-make-money",
          "/case-studies/ipl-5000-to-25000-profit", "/case-studies/small-budget-betting-strategy",
          "/case-studies/toss-market-10-minute-profit", "/case-studies/live-betting-3x-returns",
          "/transaction-limits", "/cricbet99-vs-fairdeal", "/sports-betting",
          "/telegram-channel", "/demo-id", "/exchange", "/todays-best-odds",
          "/why-choose-cricbet99", "/ipl-2026-calendar", "/high-odds-betting-strategy",
          "/become-agent", "/is-cricbet99-real", "/what-is-cricbet99",
          "/is-cricbet99-safe", "/is-cricbet99-legal", "/community-guidelines",
          "/trusted-betting-agent",
        ];
        const entries: SitemapEntry[] = [
          ...staticPaths.map((p) => ({ path: p, changefreq: "monthly" as const, priority: p === "/" ? "1.0" : "0.6" })),
          ...blogPosts.map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly" as const, priority: "0.5" })),
        ];


        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
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
