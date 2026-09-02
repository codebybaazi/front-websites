/**
 * Canonical + structured data audit against a running server.
 *
 * Covers every URL kind the site serves — static pages, /posts/ articles and
 * /match/ fixtures — and checks three things per URL:
 *
 *   canonical    exactly one self-referential absolute tag, agreeing with og:url
 *   json-ld      parses, @context present, absolute URLs, ISO 8601 dates,
 *                required properties for Article / FAQPage / SportsEvent
 *   breadcrumb   one BreadcrumbList off the homepage, sequential positions,
 *                absolute items, last crumb pointing at the canonical
 *
 *   node scripts/validate-seo-schema.mjs [--base http://localhost:8080]
 *                                        [--match-sample 20] [--concurrency 8]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const at = args.indexOf(`--${name}`);
  return at === -1 ? fallback : args[at + 1];
};

const BASE = flag("base", "http://localhost:8080").replace(/\/$/, "");
const MATCH_SAMPLE = Number(flag("match-sample", "20"));
const CONCURRENCY = Number(flag("concurrency", "8"));

const ISO_DATE = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})?)?$/;
const DATE_KEYS = new Set(["datePublished", "dateModified", "startDate", "endDate", "uploadDate"]);
const URL_KEYS = new Set(["url", "@id", "mainEntityOfPage", "item", "logo", "image", "contentUrl"]);

// Schema.org properties Google treats as required for the rich result to be eligible.
const REQUIRED_PROPS = {
  Article: ["headline", "image", "datePublished", "author", "publisher"],
  BlogPosting: ["headline", "image", "datePublished", "author", "publisher"],
  SportsEvent: ["name", "startDate", "location"],
  FAQPage: ["mainEntity"],
  BreadcrumbList: ["itemListElement"],
};

const normalizePath = (p) => (p.replace(/\/+$/, "") || "/");

/* ---------------------------------------------------------------- discovery */

function staticRoutePaths() {
  return fs
    .readdirSync(path.join(root, "src", "routes"))
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => {
      const name = path.basename(file, ".tsx");
      if (name === "__root" || name.startsWith("posts.") || name.startsWith("match.")) return null;
      return name === "index" ? "/" : `/${name}`;
    })
    .filter(Boolean);
}

function postSlugs() {
  const slugs = new Set();
  const blogData = path.join(root, "src", "lib", "blog-data.ts");
  if (fs.existsSync(blogData)) {
    const src = fs.readFileSync(blogData, "utf8");
    for (const m of src.matchAll(/"slug":\s*"([^"]+)"/g)) slugs.add(m[1]);
  }
  const routeSrc = fs.readFileSync(path.join(root, "src", "routes", "posts.$slug.tsx"), "utf8");
  const dateBlock = routeSrc.match(/const dateMap: Record<string, string> = \{([\s\S]*?)^};/m)?.[1] ?? "";
  for (const m of dateBlock.matchAll(/"([a-z0-9-]+)":/g)) slugs.add(m[1]);
  return [...slugs];
}

async function matchPaths() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) return [];
  const xml = await res.text();
  const all = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => new URL(m[1]).pathname)
    .filter((p) => p.startsWith("/match/"));
  const step = Math.max(1, Math.floor(all.length / MATCH_SAMPLE));
  return all.filter((_, i) => i % step === 0).slice(0, MATCH_SAMPLE);
}

/* ------------------------------------------------------------------ parsing */

function parseJsonLd(html) {
  const blocks = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  for (let m; (m = re.exec(html)); ) {
    const raw = m[1].trim();
    if (!raw) continue;
    try {
      blocks.push({ ok: true, data: JSON.parse(raw) });
    } catch (error) {
      blocks.push({ ok: false, message: error.message });
    }
  }
  return blocks;
}

/** Flatten a JSON-LD document into every typed node it contains. */
function flattenNodes(value, acc = []) {
  if (Array.isArray(value)) {
    for (const item of value) flattenNodes(item, acc);
    return acc;
  }
  if (!value || typeof value !== "object") return acc;
  if (value["@type"]) acc.push(value);
  for (const nested of Object.values(value)) flattenNodes(nested, acc);
  return acc;
}

const typesOf = (node) => [].concat(node["@type"] ?? []);

/* ----------------------------------------------------------------- checkers */

function checkCanonical(html, requestPath, report) {
  const tags = [...html.matchAll(/<link[^>]+rel=["']canonical["'][^>]*>/gi)].map((m) => m[0]);
  if (tags.length === 0) return report("canonical", "no <link rel=canonical>");
  if (tags.length > 1) report("canonical", `${tags.length} canonical tags (expected 1)`);

  const href = tags[0].match(/href=["']([^"']+)["']/i)?.[1];
  if (!href) return report("canonical", "canonical tag has no href");
  if (!/^https:\/\//.test(href)) report("canonical", `canonical is not an absolute https URL: ${href}`);

  let canonicalUrl;
  try {
    canonicalUrl = new URL(href);
  } catch {
    return report("canonical", `canonical is not a valid URL: ${href}`);
  }

  if (normalizePath(canonicalUrl.pathname) !== normalizePath(requestPath)) {
    report("canonical", `not self-referential: ${canonicalUrl.pathname} on ${requestPath}`);
  }

  const ogUrl = html.match(/<meta[^>]+property=["']og:url["'][^>]+content=["']([^"']*)["']/i)?.[1];
  if (!ogUrl) report("canonical", "og:url missing");
  else if (normalizePath(new URL(ogUrl, BASE).pathname) !== normalizePath(canonicalUrl.pathname)) {
    report("canonical", `og:url ${ogUrl} disagrees with canonical ${href}`);
  }

  const robots = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["']/i)?.[1];
  if (robots && /noindex/i.test(robots)) report("canonical", `page is noindex: ${robots}`);

  return canonicalUrl.href;
}

function checkNode(node, report) {
  for (const type of typesOf(node)) {
    for (const prop of REQUIRED_PROPS[type] ?? []) {
      if (node[prop] === undefined || node[prop] === null || node[prop] === "") {
        report("json-ld", `${type} is missing required property "${prop}"`);
      }
    }
  }

  for (const [key, value] of Object.entries(node)) {
    if (typeof value !== "string") continue;
    if (DATE_KEYS.has(key) && !ISO_DATE.test(value)) {
      report("json-ld", `${typesOf(node)[0] ?? "node"}.${key} is not ISO 8601: "${value}"`);
    }
    if (URL_KEYS.has(key) && value.startsWith("/")) {
      report("json-ld", `${typesOf(node)[0] ?? "node"}.${key} is a relative URL: "${value}"`);
    }
  }
}

function checkBreadcrumb(node, requestPath, canonical, report) {
  const items = node.itemListElement;
  if (!Array.isArray(items) || items.length < 2) {
    return report("breadcrumb", "itemListElement needs 2+ ListItem entries");
  }

  items.forEach((item, i) => {
    if (item["@type"] !== "ListItem") report("breadcrumb", `crumb ${i + 1} is not a ListItem`);
    if (item.position !== i + 1) report("breadcrumb", `crumb ${i + 1} has position ${item.position}`);
    if (!String(item.name ?? "").trim()) report("breadcrumb", `crumb ${i + 1} has no name`);
    const url = typeof item.item === "string" ? item.item : item.item?.["@id"];
    if (!/^https?:\/\//.test(url ?? "")) {
      report("breadcrumb", `crumb ${i + 1} item is not an absolute URL: ${url}`);
    }
  });

  const last = items[items.length - 1];
  const lastUrl = typeof last.item === "string" ? last.item : last.item?.["@id"];
  if (canonical && lastUrl && normalizePath(new URL(lastUrl).pathname) !== normalizePath(requestPath)) {
    report("breadcrumb", `last crumb ${lastUrl} does not point at ${requestPath}`);
  }
}

async function auditUrl(job) {
  const failures = [];
  const report = (area, message) => failures.push({ area, message });

  let html;
  try {
    const res = await fetch(`${BASE}${job.path}`, { headers: { "user-agent": "fairplay-seo-audit" } });
    if (res.status !== 200) return { ...job, failures: [{ area: "http", message: `HTTP ${res.status}` }] };
    html = await res.text();
  } catch (error) {
    return { ...job, failures: [{ area: "http", message: error.message }] };
  }

  const canonical = checkCanonical(html, job.path, report);

  const blocks = parseJsonLd(html);
  if (blocks.length === 0) report("json-ld", "no JSON-LD blocks");

  const nodes = [];
  for (const block of blocks) {
    if (!block.ok) {
      report("json-ld", `invalid JSON: ${block.message}`);
      continue;
    }
    for (const doc of [].concat(block.data)) {
      if (doc["@context"] !== "https://schema.org") {
        report("json-ld", `top-level block missing @context (got ${JSON.stringify(doc["@context"])})`);
      }
      nodes.push(...flattenNodes(doc));
    }
  }
  for (const node of nodes) checkNode(node, report);

  const crumbNodes = nodes.filter((n) => typesOf(n).includes("BreadcrumbList"));
  if (job.path === "/") {
    if (crumbNodes.length) report("breadcrumb", "homepage should not emit a BreadcrumbList");
  } else if (crumbNodes.length === 0) {
    report("breadcrumb", "missing BreadcrumbList");
  } else {
    if (crumbNodes.length > 1) report("breadcrumb", `${crumbNodes.length} BreadcrumbList nodes (expected 1)`);
    for (const node of crumbNodes) checkBreadcrumb(node, job.path, canonical, report);
  }

  const faqNodes = nodes.filter((n) => typesOf(n).includes("FAQPage"));
  if (faqNodes.length > 1) report("json-ld", `${faqNodes.length} FAQPage nodes (expected 1)`);

  const types = [...new Set(nodes.flatMap(typesOf))];
  return { ...job, failures, types };
}

/* --------------------------------------------------------------------- main */

async function pool(items, worker) {
  const out = [];
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
      while (cursor < items.length) out.push(await worker(items[cursor++]));
    }),
  );
  return out;
}

const jobs = [
  ...staticRoutePaths().map((p) => ({ kind: "page", path: p })),
  ...postSlugs().map((slug) => ({ kind: "post", path: `/posts/${slug}` })),
  ...(await matchPaths()).map((p) => ({ kind: "match", path: p })),
];

const counts = jobs.reduce((acc, job) => ({ ...acc, [job.kind]: (acc[job.kind] ?? 0) + 1 }), {});
console.error(
  `Auditing ${jobs.length} URLs (pages=${counts.page ?? 0} posts=${counts.post ?? 0} matches=${counts.match ?? 0}) on ${BASE}…`,
);

const results = await pool(jobs, auditUrl);
const bad = results.filter((r) => r.failures.length);

// Group identical failures so 183 copies of one bug read as one line.
const grouped = new Map();
for (const result of bad) {
  for (const failure of result.failures) {
    const key = `${failure.area}\u0000${failure.message.replace(/\/posts\/[a-z0-9-]+|\/match\/[^\s"]+/g, "…")}`;
    if (!grouped.has(key)) grouped.set(key, { ...failure, paths: [] });
    grouped.get(key).paths.push(result.path);
  }
}

console.log(`\nSEO schema audit — ${BASE}`);
console.log(`checked: ${results.length} · clean: ${results.length - bad.length} · with issues: ${bad.length}`);

if (grouped.size === 0) {
  console.log("\nNo issues found.");
} else {
  const byArea = {};
  for (const entry of grouped.values()) (byArea[entry.area] ??= []).push(entry);
  for (const [area, entries] of Object.entries(byArea)) {
    console.log(`\n[${area}] ${entries.length} distinct issue(s):`);
    for (const entry of entries.sort((a, b) => b.paths.length - a.paths.length)) {
      console.log(`  - ${entry.message}  (${entry.paths.length} URL${entry.paths.length > 1 ? "s" : ""})`);
      console.log(`      e.g. ${entry.paths.slice(0, 3).join(", ")}`);
    }
  }
}

const typeCounts = {};
for (const result of results) for (const type of result.types ?? []) typeCounts[type] = (typeCounts[type] ?? 0) + 1;
console.log(
  `\nSchema types seen: ${Object.entries(typeCounts).sort((a, b) => b[1] - a[1]).map(([t, n]) => `${t}(${n})`).join(", ")}`,
);

process.exit(bad.length ? 1 : 0);
