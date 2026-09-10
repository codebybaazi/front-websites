export function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Sitemap: https://cricbet99.co.in/sitemap.xml

# Prevent indexing of search and sensitive parameters
Disallow: /*?search=
Disallow: /*?filter=
Disallow: /api/

# Block crawlers from common dev paths
Disallow: /dev/
Disallow: /admin/
Disallow: /login
Disallow: /register
Disallow: /auth/

# Specifically allow important sections
Allow: /schedule
Allow: /matches/
Allow: /cricket-schedule
Allow: /football-schedule
Allow: /tennis-schedule
Allow: /blog/
Allow: /betting-guides/

# Intelligence Hub Signal
# X-Robots-Tag: Intelligence-Hub-2026
`;
}
