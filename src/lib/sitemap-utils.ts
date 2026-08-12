import { CricketSeries } from "@/data/cricket-fixtures";
import { FootballFixture } from "@/data/football-fixtures";
import { TennisFixture } from "@/data/tennis-fixtures";
import { blogPosts } from "@/data/blog-posts";

export function generateScheduleSitemap(
  cricket: CricketSeries[],
  football: FootballFixture[],
  tennis: TennisFixture[]
) {
  const baseUrl = "https://cricbet99.co.in";
  const today = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { path: "", changefreq: "daily", priority: "1.0" },
    { path: "/schedule", changefreq: "daily", priority: "0.9" },
    { path: "/matches", changefreq: "always", priority: "0.9" },
    { path: "/cricket-schedule", changefreq: "daily", priority: "0.8" },
    { path: "/football-schedule", changefreq: "daily", priority: "0.8" },
    { path: "/tennis-schedule", changefreq: "daily", priority: "0.8" },
    { path: "/blog", changefreq: "daily", priority: "0.8" },
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
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  staticRoutes.forEach(route => {
    xml += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  // Add Blog Posts
  blogPosts.forEach(post => {
    xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Add Cricket Matches
  cricket.forEach(series => {
    series.matches.forEach(match => {
      xml += `
  <url>
    <loc>${baseUrl}/matches/${match.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });
  });

  // Add Football Matches
  football.forEach(match => {
    xml += `
  <url>
    <loc>${baseUrl}/matches/${match.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Add Tennis Matches
  tennis.forEach(match => {
    xml += `
  <url>
    <loc>${baseUrl}/matches/${match.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  xml += `
</urlset>`;
  return xml;
}
