/**
 * Indexing-readiness audit against a running server (default http://localhost:8080).
 *
 * Crawls every non-fixture URL in sitemap.xml plus a sample of /match/ pages and
 * reports: dead URLs, canonical mismatches, noindex pages, duplicate titles or
 * descriptions, H1 problems, invalid JSON-LD, orphan pages (no inbound internal
 * link) and internal links that are missing from the sitemap.
 *
 *   node scripts/audit-indexing.mjs [--base http://localhost:8080] [--match-sample 15]
 */

const args = process.argv.slice(2);
const readFlag = (name, fallback) => {
  const at = args.indexOf(`--${name}`);
  return at === -1 ? fallback : args[at + 1];
};

const BASE = readFlag("base", "http://localhost:8080").replace(/\/$/, "");
const MATCH_SAMPLE = Number(readFlag("match-sample", "15"));
const CONCURRENCY = Number(readFlag("concurrency", "6"));

const text = (html, re) => html.match(re)?.[1]?.trim();

function extract(html) {
  const canonical = text(html, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
  const jsonLd = [];
  const jsonLdErrors = [];
  for (const block of html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    try {
      const parsed = JSON.parse(block[1]);
      const nodes = parsed["@graph"] ?? [parsed];
      for (const node of [].concat(nodes)) if (node?.["@type"]) jsonLd.push(node["@type"]);
    } catch (error) {
      jsonLdErrors.push(error.message);
    }
  }

  const links = new Set();
  for (const href of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const path = href[1].replace(/\/$/, "") || "/";
    // Skip assets and Vite's dev-only module URLs (/@vite, /@id/…, /@fs/…).
    if (path.startsWith("/@")) continue;
    if (!/\.(png|jpg|jpeg|svg|webp|ico|css|js|xml|txt)$/i.test(path)) links.add(path);
  }

  return {
    title: text(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    description: text(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i),
    robots: text(html, /<meta[^>]+name="robots"[^>]+content="([^"]*)"/i),
    canonical,
    h1Count: (html.match(/<h1[\s>]/gi) ?? []).length,
    h2Count: (html.match(/<h2[\s>]/gi) ?? []).length,
    jsonLd,
    jsonLdErrors,
    links: [...links],
  };
}

async function crawl(path) {
  try {
    const response = await fetch(`${BASE}${path}`, { headers: { "user-agent": "fairplay-audit" } });
    const html = await response.text();
    return { path, status: response.status, ...extract(html) };
  } catch (error) {
    return { path, status: 0, error: error.message, links: [], jsonLd: [], jsonLdErrors: [] };
  }
}

async function pool(paths) {
  const results = [];
  let cursor = 0;
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (cursor < paths.length) {
      const path = paths[cursor++];
      results.push(await crawl(path));
      if (results.length % 25 === 0) process.stderr.write(`  …${results.length}/${paths.length}\n`);
    }
  });
  await Promise.all(workers);
  return results;
}

const sitemapResponse = await fetch(`${BASE}/sitemap.xml`);
if (!sitemapResponse.ok) {
  console.error(
    `sitemap.xml returned ${sitemapResponse.status} — is the server running on ${BASE}?`,
  );
  process.exit(1);
}
const sitemapXml = await sitemapResponse.text();
const sitemapPaths = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (row) => new URL(row[1]).pathname.replace(/\/$/, "") || "/",
);
const sitemapSet = new Set(sitemapPaths);

const staticPaths = sitemapPaths.filter((path) => !path.startsWith("/match/"));
const matchPaths = sitemapPaths.filter((path) => path.startsWith("/match/"));
const step = Math.max(1, Math.floor(matchPaths.length / MATCH_SAMPLE));
const sampledMatches = matchPaths.filter((_, index) => index % step === 0).slice(0, MATCH_SAMPLE);

console.error(
  `Crawling ${staticPaths.length} static pages + ${sampledMatches.length} match pages…`,
);
const pages = await pool([...staticPaths, ...sampledMatches]);
const ok = pages.filter((page) => page.status === 200);

const problems = [];
const note = (label, rows) => {
  if (rows.length) problems.push({ label, rows });
};

note(
  "Non-200 responses",
  pages.filter((page) => page.status !== 200).map((page) => `${page.path} → ${page.status}`),
);

const canonicalOrigin = new URL(ok.find((page) => page.canonical)?.canonical ?? BASE).origin;
note(
  "Canonical missing or not self-referential",
  ok
    .filter((page) => page.canonical !== `${canonicalOrigin}${page.path === "/" ? "" : page.path}`)
    .map((page) => `${page.path} → ${page.canonical ?? "missing"}`),
);

note(
  "Blocked from indexing",
  ok
    .filter((page) => /noindex/i.test(page.robots ?? ""))
    .map((page) => `${page.path} → ${page.robots}`),
);

note(
  "Missing meta description",
  ok.filter((page) => !page.description).map((page) => page.path),
);

const byValue = (key) => {
  const seen = new Map();
  for (const page of ok) {
    const value = page[key];
    if (!value) continue;
    seen.set(value, [...(seen.get(value) ?? []), page.path]);
  }
  return [...seen.entries()]
    .filter(([, paths]) => paths.length > 1)
    .map(([value, paths]) => `${paths.join(", ")} → "${value.slice(0, 70)}"`);
};
note("Duplicate titles", byValue("title"));
note("Duplicate descriptions", byValue("description"));

note(
  "H1 count is not exactly 1",
  ok.filter((page) => page.h1Count !== 1).map((page) => `${page.path} → ${page.h1Count} H1s`),
);

note(
  "Invalid JSON-LD",
  ok
    .filter((page) => page.jsonLdErrors.length)
    .map((page) => `${page.path} → ${page.jsonLdErrors[0]}`),
);

note(
  "Missing BreadcrumbList",
  ok
    .filter((page) => page.path !== "/" && !page.jsonLd.includes("BreadcrumbList"))
    .map((page) => page.path),
);

const inbound = new Map(staticPaths.map((path) => [path, new Set()]));
for (const page of ok) {
  for (const link of page.links) {
    if (link === page.path) continue;
    inbound.get(link)?.add(page.path);
  }
}
note(
  "Orphans (no inbound internal link)",
  [...inbound.entries()].filter(([, from]) => from.size === 0).map(([path]) => path),
);
const thin = [...inbound.entries()]
  .filter(([, from]) => from.size > 0 && from.size <= 2)
  .map(([path, from]) => `${path} ← ${[...from].join(", ")}`);
note("Thin inbound linking (1–2 sources)", thin);

const linkedNotInSitemap = new Set();
for (const page of ok) {
  for (const link of page.links) {
    if (!sitemapSet.has(link) && !link.startsWith("/posts/")) linkedNotInSitemap.add(link);
  }
}
note("Linked but not in sitemap", [...linkedNotInSitemap]);

console.log(`\nIndexing audit — ${BASE}`);
console.log(
  `sitemap URLs: ${sitemapPaths.length} (${staticPaths.length} static, ${matchPaths.length} match)`,
);
console.log(`crawled: ${pages.length} · 200 OK: ${ok.length}`);

if (problems.length === 0) {
  console.log("\nNo issues found.");
} else {
  for (const { label, rows } of problems) {
    console.log(`\n${label} (${rows.length}):`);
    for (const row of rows.slice(0, 40)) console.log(`  - ${row}`);
    if (rows.length > 40) console.log(`  … ${rows.length - 40} more`);
  }
}

const inboundCounts = [...inbound.entries()]
  .sort((a, b) => b[1].size - a[1].size)
  .slice(0, 10)
  .map(([path, from]) => `${path} (${from.size})`);
console.log(`\nMost linked pages: ${inboundCounts.join(", ")}`);
