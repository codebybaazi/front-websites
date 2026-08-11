import { CricketSeries } from "@/data/cricket-fixtures";
import { FootballFixture } from "@/data/football-fixtures";
import { TennisFixture } from "@/data/tennis-fixtures";

export function generateScheduleSitemap(
  cricket: CricketSeries[],
  football: FootballFixture[],
  tennis: TennisFixture[]
) {
  const baseUrl = "https://cricbet99.co.in";
  const today = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    "",
    "/schedule",
    "/matches",
    "/all-links",
    "/login",
    "/register",
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  staticRoutes.forEach(route => {
    xml += `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <priority>${route === "" ? "1.0" : "0.8"}</priority>
  </url>`;
  });

  // Add Cricket Matches
  cricket.forEach(series => {
    series.matches.forEach(match => {
      xml += `
  <url>
    <loc>${baseUrl}/matches/${match.slug}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>`;
    });
  });

  // Add Football Matches
  football.forEach(match => {
    xml += `
  <url>
    <loc>${baseUrl}/matches/${match.slug}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>`;
  });

  // Add Tennis Matches
  tennis.forEach(match => {
    xml += `
  <url>
    <loc>${baseUrl}/matches/${match.slug}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>`;
  });

  xml += `
</urlset>`;
  return xml;
}
