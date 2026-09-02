import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const base = process.env.FAQ_BASE || "http://localhost:8082";
const concurrency = Number(process.env.FAQ_CONCURRENCY || 8);

const PHRASES = [
  "institutional-grade",
  "sub-10ms",
  "elite fairplay guide",
  "elite fairplay tip",
  "master the art of",
  "simply secure your elite",
  "fairplay elite id",
  "neural market intelligence",
  "high-frequency trading",
  "rsa-4096",
  "10,000+ trades",
  "12 million transactions",
  "85% faster",
  "12.5% edge",
  "p2p exchange core",
  "advanced p2p exchange architecture",
  "exclusive 300% bonus",
  "can i use my 300% bonus",
  "low-latency latency",
];

function unique(list) {
  return [...new Set(list.filter(Boolean))];
}

function slugsFromBlogData() {
  const src = fs.readFileSync(path.join(root, "src", "lib", "blog-data.ts"), "utf8");
  return [...src.matchAll(/"slug":\s*"([^"]+)"/g)].map((m) => m[1]);
}

function slugsFromPostsFile() {
  const src = fs.readFileSync(path.join(root, "src", "routes", "posts.$slug.tsx"), "utf8");
  const dateBlock = src.match(/const dateMap: Record<string, string> = \{([\s\S]*?)^};/m)?.[1] || "";
  return [...dateBlock.matchAll(/"([a-z0-9-]+)":/g)].map((m) => m[1]);
}

function staticRoutePaths() {
  return fs
    .readdirSync(path.join(root, "src", "routes"))
    .filter((f) => f.endsWith(".tsx"))
    .map((file) => {
      const name = path.basename(file, ".tsx");
      if (name === "__root" || name.startsWith("posts.") || name.startsWith("match.")) return null;
      return name === "index" ? "/" : `/${name}`;
    })
    .filter(Boolean);
}

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchHtml(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

async function mapPool(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const i = cursor++;
      results[i] = await worker(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

const postSlugs = unique([...slugsFromBlogData(), ...slugsFromPostsFile()]);
const pagePaths = staticRoutePaths();
const postPaths = postSlugs.map((slug) => `/posts/${slug}`);
const scheduleHtml = await fetchHtml(`${base}/schedule`);
const matchPaths = unique(
  [...scheduleHtml.matchAll(/href="[^"]*\/match\/([^"?#]+)"/g)].map((m) => `/match/${decodeURIComponent(m[1])}`),
).slice(0, 25);

const jobs = [
  ...pagePaths.map((p) => ({ kind: "page", path: p })),
  ...postPaths.slice(0, 40).map((p) => ({ kind: "post", path: p })),
  ...matchPaths.map((p) => ({ kind: "match", path: p })),
];

const failures = [];
let ok = 0;

await mapPool(jobs, concurrency, async (job) => {
  const url = `${base}${job.path}`;
  try {
    const html = await fetchHtml(url);
    const text = visibleText(html);
    const lower = text.toLowerCase();
    const hits = PHRASES.filter((p) => lower.includes(p));
    const issues = [];
    if (hits.length) issues.push(`stuffed phrases: ${hits.join(", ")}`);
    const kw = html.match(/name=["']keywords["'][^>]*content=["']([^"]+)/i);
    if (kw && kw[1].split(",").length > 8) issues.push(`keywords meta has ${kw[1].split(",").length} terms`);
    if (lower.includes("how quickly are technical issues resolved") && lower.includes("are these guides updated for 2026")) {
      issues.push("duplicate support FAQ template");
    }
    if (lower.includes("is my data protected on this page") && lower.includes("is this service available mobile-wide")) {
      issues.push("duplicate generic FAQ template");
    }
    if (issues.length) failures.push(`${job.path}: ${issues.join(" | ")}`);
    else ok += 1;
  } catch (err) {
    failures.push(`${job.path}: ${err.message}`);
  }
});

console.log(`checked=${jobs.length} clean=${ok} failures=${failures.length}`);
if (failures.length) {
  for (const line of failures) console.log("FAIL", line);
  process.exit(1);
}
