// Guards src/data/posts.ts against the regressions caught during SEO/GEO/AEO
// audits: excerpts over 160 chars, duplicate slugs/titles/excerpts, and
// duplicate FAQ questions. Run with `npm run validate:posts`.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const postsPath = join(__dirname, "..", "src", "data", "posts.ts");
const src = readFileSync(postsPath, "utf8");

function unescape(s) {
  return s.replace(/\\"/g, '"').replace(/\\n/g, " ").trim();
}

const postRe =
  /"slug":\s*"((?:[^"\\]|\\.)*)"[\s\S]*?"title":\s*"((?:[^"\\]|\\.)*)"[\s\S]*?"excerpt":\s*"((?:[^"\\]|\\.)*)"/g;
const qRe = /"q":\s*"((?:[^"\\]|\\.)*)"/g;

const slugs = new Map();
const titles = new Map();
const excerpts = new Map();
const errors = [];

let m;
while ((m = postRe.exec(src))) {
  const slug = unescape(m[1]);
  const title = unescape(m[2]);
  const excerpt = unescape(m[3]);

  if (slugs.has(slug)) errors.push(`Duplicate slug: "${slug}"`);
  slugs.set(slug, (slugs.get(slug) || 0) + 1);

  if (titles.has(title)) errors.push(`Duplicate title: "${title}" (${slug})`);
  titles.set(title, slug);

  if (excerpts.has(excerpt))
    errors.push(`Duplicate excerpt: "${slug}" and "${excerpts.get(excerpt)}"`);
  excerpts.set(excerpt, slug);

  if (excerpt.length > 160)
    errors.push(`Excerpt over 160 chars (${excerpt.length}): "${slug}"`);
}

const questions = new Map();
while ((m = qRe.exec(src))) {
  const q = unescape(m[1]).toLowerCase();
  if (questions.has(q)) errors.push(`Duplicate FAQ question: "${m[1]}"`);
  questions.set(q, true);
}

console.log(`Checked ${slugs.size} posts, ${questions.size} FAQ questions.`);

if (errors.length) {
  console.error(`\n${errors.length} issue(s) found:\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
} else {
  console.log("No issues found.");
}
