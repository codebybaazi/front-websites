import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const base = process.env.FAQ_BASE || "http://localhost:8082";
const concurrency = Number(process.env.FAQ_CONCURRENCY || 8);

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
  const postsBlock = src.match(/const POSTS_DATA: Record<string, any\[]> = \{([\s\S]*?)^};/m)?.[1] || "";
  return [
    ...dateBlock.matchAll(/"([a-z0-9-]+)":/g),
    ...postsBlock.matchAll(/^  "([a-z0-9-]+)": \[/gm),
  ].map((m) => m[1]);
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

function collectTypes(doc, type, acc = []) {
  if (!doc) return acc;
  if (Array.isArray(doc)) {
    for (const item of doc) collectTypes(item, type, acc);
    return acc;
  }
  if (typeof doc !== "object") return acc;
  if (doc["@type"] === type) acc.push(doc);
  if (Array.isArray(doc["@graph"])) collectTypes(doc["@graph"], type, acc);
  return acc;
}

function collectFaqPages(doc, acc = []) {
  return collectTypes(doc, "FAQPage", acc);
}

function validateBreadcrumbList(page) {
  const errors = [];
  if (page["@type"] !== "BreadcrumbList") errors.push("not @type BreadcrumbList");
  const items = page.itemListElement;
  if (!Array.isArray(items) || items.length < 2) {
    errors.push("itemListElement needs 2+ ListItem entries");
    return { errors, crumbs: [] };
  }
  const crumbs = [];
  items.forEach((item, i) => {
    if (item["@type"] !== "ListItem") errors.push(`crumb ${i + 1} is not ListItem`);
    if (item.position !== i + 1) errors.push(`crumb ${i + 1} position is ${item.position}`);
    const name = typeof item.name === "string" ? item.name.trim() : "";
    if (!name) errors.push(`crumb ${i + 1} missing name`);
    const url = typeof item.item === "string" ? item.item : item.item?.["@id"] || "";
    if (!/^https?:\/\//.test(url)) errors.push(`crumb ${i + 1} item must be an absolute URL`);
    crumbs.push({ name, url });
  });
  return { errors, crumbs };
}

function validateFaqPage(page) {
  const errors = [];
  if (page["@type"] !== "FAQPage") errors.push("not @type FAQPage");
  const entities = page.mainEntity;
  if (!Array.isArray(entities) || entities.length === 0) {
    errors.push("mainEntity missing or empty");
    return { errors, questions: [] };
  }
  const questions = [];
  const seen = new Set();
  for (const entity of entities) {
    if (entity["@type"] !== "Question") errors.push(`item is ${entity["@type"]}, expected Question`);
    const name = typeof entity.name === "string" ? entity.name.trim() : "";
    if (name.length < 8) errors.push("Question.name too short");
    const answer = entity.acceptedAnswer;
    if (!answer || answer["@type"] !== "Answer") errors.push(`acceptedAnswer must be Answer for "${name}"`);
    const text = typeof answer?.text === "string" ? answer.text.trim() : "";
    if (text.length < 12) errors.push(`Answer.text too short for "${name}"`);
    const key = name.toLowerCase();
    if (seen.has(key)) errors.push(`duplicate question: ${name}`);
    seen.add(key);
    questions.push({ name, text });
  }
  if (questions.length < 2) errors.push(`only ${questions.length} Question(s); Google FAQPage expects 2+`);
  return { errors, questions };
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;|&apos;/gi, "'")
    .replace(/&#47;|&#x2f;/gi, "/")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function htmlHasText(html, text) {
  const hay = decodeEntities(html);
  const needle = decodeEntities(text);
  return hay.includes(needle);
}

function parseJsonLd(html) {
  const out = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html))) {
    const raw = match[1].trim();
    if (!raw) continue;
    try {
      out.push(JSON.parse(raw));
    } catch {
      out.push({ __parseError: true, raw: raw.slice(0, 80) });
    }
  }
  return out;
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

console.log(`Discovering URLs: ${pagePaths.length} pages, ${postPaths.length} posts...`);

const scheduleHtml = await fetchHtml(`${base}/schedule`);
const matchPaths = unique(
  [...scheduleHtml.matchAll(/href="[^"]*\/match\/([^"?#]+)"/g)].map((m) => `/match/${decodeURIComponent(m[1])}`),
);

const jobs = [
  ...pagePaths.map((p) => ({ kind: "page", path: p, required: true })),
  ...postPaths.map((p) => ({ kind: "post", path: p, required: true })),
  ...matchPaths.map((p) => ({ kind: "match", path: p, required: true })),
];

const stats = { page: 0, post: 0, match: 0 };
const crumbStats = { page: 0, post: 0, match: 0 };
const failures = [];
let ok = 0;
let crumbOk = 0;
let skipped = 0;

await mapPool(jobs, concurrency, async (job) => {
  const url = `${base}${job.path}`;
  try {
    const html = await fetchHtml(url);
    const blocks = parseJsonLd(html);
    const parseErrors = blocks.filter((b) => b.__parseError);
    if (parseErrors.length) {
      failures.push(`${job.path}: invalid JSON-LD`);
      return;
    }
    const faqPages = collectFaqPages(blocks);
    if (faqPages.length === 0) {
      if (job.required) failures.push(`${job.path}: missing FAQPage JSON-LD`);
      else skipped += 1;
    } else {
      if (faqPages.length > 1) {
        failures.push(`${job.path}: ${faqPages.length} FAQPage graphs (Google wants one)`);
      }
      for (const page of faqPages) {
        const { errors, questions } = validateFaqPage(page);
        for (const err of errors) failures.push(`${job.path}: ${err}`);
        for (const q of questions) {
          if (!htmlHasText(html, q.name)) failures.push(`${job.path}: schema question not visible: ${q.name}`);
          if (!htmlHasText(html, q.text)) failures.push(`${job.path}: schema answer not visible: ${q.name}`);
        }
        if (!errors.length && questions.length) {
          ok += 1;
          stats[job.kind] += 1;
        }
      }
    }

    const breadcrumbs = collectTypes(blocks, "BreadcrumbList");
    if (job.path === "/") {
      if (breadcrumbs.length) failures.push(`${job.path}: homepage should not emit BreadcrumbList`);
    } else if (breadcrumbs.length === 0) {
      failures.push(`${job.path}: missing BreadcrumbList JSON-LD`);
    } else {
      if (breadcrumbs.length > 1) {
        failures.push(`${job.path}: ${breadcrumbs.length} BreadcrumbList graphs (Google wants one)`);
      }
      for (const page of breadcrumbs) {
        const { errors, crumbs } = validateBreadcrumbList(page);
        for (const err of errors) failures.push(`${job.path}: ${err}`);
        for (const crumb of crumbs) {
          if (!htmlHasText(html, crumb.name)) failures.push(`${job.path}: breadcrumb name not visible: ${crumb.name}`);
        }
        if (!errors.length && crumbs.length >= 2) {
          crumbOk += 1;
          crumbStats[job.kind] += 1;
        }
      }
    }
  } catch (err) {
    failures.push(`${job.path}: ${err.message}`);
  }
});

console.log(
  `checked=${jobs.length} (pages=${pagePaths.length} posts=${postPaths.length} matches=${matchPaths.length})\n` +
    `faqOk=${ok} (pages=${stats.page} posts=${stats.post} matches=${stats.match}) skippedFaq=${skipped}\n` +
    `breadcrumbOk=${crumbOk} (pages=${crumbStats.page} posts=${crumbStats.post} matches=${crumbStats.match}) failures=${failures.length}`,
);

if (failures.length) {
  console.log(failures.slice(0, 80).join("\n"));
  if (failures.length > 80) console.log(`...and ${failures.length - 80} more`);
  process.exit(1);
}
