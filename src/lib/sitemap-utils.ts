import type { CricketSeries } from "@/data/cricket-fixtures";
import type { FootballFixture } from "@/data/football-fixtures";
import type { TennisFixture } from "@/data/tennis-fixtures";
import { blogPosts } from "@/data/blog-posts";
import { authors } from "@/data/authors";

/** Converts a real content date to a YYYY-MM-DD sitemap lastmod value, or null if invalid. */
function toLastmod(dateStr: string | undefined | null): string | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  return d.toISOString().split("T")[0];
}

export function generateScheduleSitemap(
  cricket: CricketSeries[],
  football: FootballFixture[],
  tennis: TennisFixture[],
) {
  const baseUrl = "https://cricbet99.co.in";
  const today = new Date().toISOString().split("T")[0];

  const staticRoutes = [
    { path: "", changefreq: "daily", priority: "1.0" },
    { path: "/schedule", changefreq: "daily", priority: "0.9" },
    { path: "/matches", changefreq: "always", priority: "0.9" },
    { path: "/cricket-schedule", changefreq: "daily", priority: "0.8" },
    { path: "/football-schedule", changefreq: "daily", priority: "0.8" },
    { path: "/tennis-schedule", changefreq: "daily", priority: "0.8" },
    { path: "/blog", changefreq: "daily", priority: "0.8" },
    { path: "/authors", changefreq: "weekly", priority: "0.5" },
    { path: "/betting-guides", changefreq: "weekly", priority: "0.7" },
    { path: "/casino", changefreq: "daily", priority: "0.8" },
    { path: "/ipl-betting", changefreq: "always", priority: "0.9" },
    { path: "/cricket", changefreq: "always", priority: "0.9" },
    { path: "/football", changefreq: "daily", priority: "0.8" },
    { path: "/tennis", changefreq: "daily", priority: "0.8" },
    { path: "/horse-racing", changefreq: "daily", priority: "0.7" },
    { path: "/faq", changefreq: "monthly", priority: "0.4" },
    { path: "/about", changefreq: "monthly", priority: "0.3" },
    { path: "/contact", changefreq: "monthly", priority: "0.3" },

    // Sports & verticals
    { path: "/basketball", changefreq: "daily", priority: "0.7" },
    { path: "/esports", changefreq: "daily", priority: "0.7" },
    { path: "/exchange", changefreq: "weekly", priority: "0.7" },
    { path: "/indian-card-games", changefreq: "weekly", priority: "0.6" },
    { path: "/kabaddi", changefreq: "daily", priority: "0.7" },
    { path: "/online-betting", changefreq: "weekly", priority: "0.7" },
    { path: "/sports-betting", changefreq: "weekly", priority: "0.7" },
    { path: "/t20-world-cup-betting", changefreq: "weekly", priority: "0.7" },
    { path: "/champions-trophy-betting", changefreq: "weekly", priority: "0.6" },
    { path: "/wpl-2026-betting", changefreq: "weekly", priority: "0.6" },
    { path: "/ipl-2026-calendar", changefreq: "daily", priority: "0.7" },
    { path: "/todays-best-odds", changefreq: "daily", priority: "0.7" },
    { path: "/predictions", changefreq: "daily", priority: "0.7" },

    // Betting guides (sub-pages)
    { path: "/betting-guides/how-bookmakers-make-money", changefreq: "monthly", priority: "0.6" },
    {
      path: "/betting-guides/how-to-bet-on-session-betting",
      changefreq: "monthly",
      priority: "0.6",
    },
    { path: "/betting-guides/how-to-bet-on-toss-market", changefreq: "monthly", priority: "0.6" },
    { path: "/betting-guides/how-to-place-a-cricket-bet", changefreq: "monthly", priority: "0.6" },
    { path: "/betting-guides/how-to-place-a-live-bet", changefreq: "monthly", priority: "0.6" },
    { path: "/betting-guides/how-to-set-betting-limits", changefreq: "monthly", priority: "0.6" },
    { path: "/high-odds-betting-strategy", changefreq: "monthly", priority: "0.6" },

    // Case studies & social proof
    { path: "/case-studies", changefreq: "weekly", priority: "0.6" },
    { path: "/case-studies/ipl-5000-to-25000-profit", changefreq: "monthly", priority: "0.5" },
    { path: "/case-studies/live-betting-3x-returns", changefreq: "monthly", priority: "0.5" },
    { path: "/case-studies/small-budget-betting-strategy", changefreq: "monthly", priority: "0.5" },
    { path: "/case-studies/toss-market-10-minute-profit", changefreq: "monthly", priority: "0.5" },
    { path: "/big-win-stories", changefreq: "weekly", priority: "0.6" },
    { path: "/reviews", changefreq: "weekly", priority: "0.6" },

    // Brand comparison pages
    { path: "/cricbet99-vs-11xplay", changefreq: "monthly", priority: "0.6" },
    { path: "/cricbet99-vs-diamond-exchange", changefreq: "monthly", priority: "0.6" },
    { path: "/cricbet99-vs-fairdeal", changefreq: "monthly", priority: "0.6" },
    { path: "/cricbet99-vs-gold365", changefreq: "monthly", priority: "0.6" },
    { path: "/cricbet99-vs-laser247", changefreq: "monthly", priority: "0.6" },
    { path: "/cricbet99-vs-lotus365", changefreq: "monthly", priority: "0.6" },
    { path: "/cricbet99-vs-mahavir-book", changefreq: "monthly", priority: "0.6" },
    { path: "/cricbet99-vs-reddybook", changefreq: "monthly", priority: "0.6" },
    { path: "/cricbet99-vs-skyexchange247", changefreq: "monthly", priority: "0.6" },

    // Trust / informational
    { path: "/is-cricbet99-legal", changefreq: "monthly", priority: "0.6" },
    { path: "/is-cricbet99-real", changefreq: "monthly", priority: "0.6" },
    { path: "/is-cricbet99-safe", changefreq: "monthly", priority: "0.6" },
    { path: "/what-is-cricbet99", changefreq: "monthly", priority: "0.6" },
    { path: "/why-choose-cricbet99", changefreq: "monthly", priority: "0.6" },
    { path: "/trusted-betting-agent", changefreq: "monthly", priority: "0.5" },
    { path: "/trusted-betting-id-provider", changefreq: "monthly", priority: "0.5" },
    { path: "/how-it-works", changefreq: "monthly", priority: "0.6" },
    { path: "/services", changefreq: "monthly", priority: "0.5" },
    { path: "/platforms", changefreq: "monthly", priority: "0.5" },

    // Account / product pages
    { path: "/cricbet99-app", changefreq: "monthly", priority: "0.6" },
    { path: "/cricbet99-id", changefreq: "monthly", priority: "0.6" },
    { path: "/demo-id", changefreq: "monthly", priority: "0.5" },
    { path: "/sports-id", changefreq: "monthly", priority: "0.5" },
    { path: "/referral-code", changefreq: "monthly", priority: "0.5" },
    { path: "/bonus", changefreq: "weekly", priority: "0.6" },

    // Support & help center
    { path: "/how-to-deposit", changefreq: "monthly", priority: "0.5" },
    { path: "/cricbet99-deposit-number", changefreq: "weekly", priority: "0.7" },
    { path: "/cricbet99-withdrawl-number", changefreq: "weekly", priority: "0.7" },
    { path: "/cricbet99-customer-care-number", changefreq: "weekly", priority: "0.7" },
    { path: "/how-to-withdraw", changefreq: "monthly", priority: "0.5" },
    { path: "/deposit-issues", changefreq: "monthly", priority: "0.4" },
    { path: "/withdrawal-delay", changefreq: "monthly", priority: "0.4" },
    { path: "/bonus-issues", changefreq: "monthly", priority: "0.4" },
    { path: "/login-issues", changefreq: "monthly", priority: "0.4" },
    { path: "/account-blocked", changefreq: "monthly", priority: "0.4" },
    { path: "/transaction-limits", changefreq: "monthly", priority: "0.4" },
    { path: "/support", changefreq: "monthly", priority: "0.5" },
    { path: "/become-agent", changefreq: "monthly", priority: "0.5" },
    { path: "/whatsapp-number", changefreq: "monthly", priority: "0.5" },
    { path: "/whatsapp-support", changefreq: "monthly", priority: "0.5" },
    { path: "/telegram-channel", changefreq: "monthly", priority: "0.4" },

    // Legal / policy
    { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
    { path: "/terms", changefreq: "yearly", priority: "0.3" },
    { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
    { path: "/refund-policy", changefreq: "yearly", priority: "0.3" },
    { path: "/kyc-policy", changefreq: "yearly", priority: "0.3" },
    { path: "/policies", changefreq: "yearly", priority: "0.3" },
    { path: "/responsible-gaming", changefreq: "yearly", priority: "0.3" },
    { path: "/community-guidelines", changefreq: "yearly", priority: "0.3" },
    { path: "/rules", changefreq: "yearly", priority: "0.3" },
    { path: "/security", changefreq: "yearly", priority: "0.3" },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  staticRoutes.forEach((route) => {
    xml += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  // Add Blog Posts
  blogPosts.forEach((post) => {
    const postLastmod = toLastmod(post.dateModified || post.date) || today;
    xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${postLastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Add Author Pages
  authors.forEach((author) => {
    xml += `
  <url>
    <loc>${baseUrl}/authors/${author.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>`;
  });

  // Add Blog Pagination Pages (page 1 is /blog, already listed above)
  const BLOG_PAGE_SIZE = 30;
  const blogTotalPages = Math.max(1, Math.ceil(blogPosts.length / BLOG_PAGE_SIZE));
  for (let p = 2; p <= blogTotalPages; p++) {
    xml += `
  <url>
    <loc>${baseUrl}/blog?page=${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`;
  }

  // Add Cricket Matches
  cricket.forEach((series) => {
    series.matches.forEach((match) => {
      xml += `
  <url>
    <loc>${baseUrl}/matches/${match.slug}</loc>
    <lastmod>${toLastmod(match.startDate) || today}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });
  });

  // Add Football Matches
  football.forEach((match) => {
    xml += `
  <url>
    <loc>${baseUrl}/matches/${match.slug}</loc>
    <lastmod>${toLastmod(match.startDate) || today}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Add Tennis Matches
  tennis.forEach((match) => {
    xml += `
  <url>
    <loc>${baseUrl}/matches/${match.slug}</loc>
    <lastmod>${toLastmod(match.startDate) || today}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  xml += `
</urlset>`;
  return xml;
}
