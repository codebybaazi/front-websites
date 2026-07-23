// Regenerate src/data/blog-posts.ts bodies via Lovable AI.
// Usage: LOVABLE_API_KEY=... node scripts/regen-blog.mjs
import fs from "node:fs/promises";

const KEY = process.env.LOVABLE_API_KEY;
if (!KEY) throw new Error("LOVABLE_API_KEY missing");

const SRC = "src/data/blog-posts.ts";
const MODEL = "google/gemini-3-flash-preview";
const CONCURRENCY = 8;

const raw = await fs.readFile(SRC, "utf8");
const m = raw.match(/blogPosts:\s*BlogPost\[\]\s*=\s*(\[[\s\S]*\]);?\s*$/);
if (!m) throw new Error("Could not locate blogPosts array");
const posts = JSON.parse(m[1].replace(/,(\s*[\]}])/g, "$1"));
console.log(`Loaded ${posts.length} posts`);

const SYSTEM =
  "You are a senior editor for Sprinters Online Gaming, an Indian cricket, sports and casino blog. Rewrite/expand each seed into a complete, engaging 500-700 word article. Use natural paragraphs (4-8), no markdown headings, no lists, no HTML. Do not repeat the title. Neutral, factual tone. End with a proper concluding sentence. Return ONLY the article body prose.";

async function expand(post) {
  const seed = `TITLE: ${post.title}\nEXCERPT: ${post.excerpt}\nEXISTING (truncated): ${post.body}`;
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { "content-type": "application/json", "Lovable-API-Key": KEY },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 2000,
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: seed },
      ],
    }),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text().catch(() => "")}`);
  const j = await res.json();
  const text = j.choices?.[0]?.message?.content?.trim();
  if (!text || text.length < 400) throw new Error(`short: ${text?.length ?? 0}`);
  return text.replace(/\s+/g, " ").trim();
}

let done = 0, failed = 0;
async function worker(queue) {
  while (queue.length) {
    const i = queue.shift();
    const p = posts[i];
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        p.body = await expand(p);
        break;
      } catch (e) {
        if (attempt === 2) { failed++; console.warn(`fail ${p.slug}: ${e.message}`); }
        else await new Promise(r => setTimeout(r, 1500 * (attempt + 1)));
      }
    }
    done++;
    if (done % 20 === 0) {
      console.log(`${done}/${posts.length} (fail ${failed})`);
      await fs.writeFile(SRC + ".tmp", serialize(posts));
    }
  }
}

function serialize(posts) {
  const header = `export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  body: string;
};

export const blogPosts: BlogPost[] = `;
  return header + JSON.stringify(posts, null, 2) + ";\n";
}

// Batch mode: only process posts whose body is still short (truncated seed).
// Usage: node scripts/regen-blog.mjs [BATCH_SIZE]   default 50
const BATCH_SIZE = Number(process.argv[2] ?? 50);
const MIN_DONE_LEN = 800; // regenerated bodies are 500-700 words (~3-4k chars)
const pending = posts
  .map((p, i) => ({ i, len: (p.body || "").length }))
  .filter((x) => x.len < MIN_DONE_LEN)
  .map((x) => x.i);
const batch = pending.slice(0, BATCH_SIZE);
console.log(`${pending.length} pending, processing ${batch.length} this run`);
const queue = [...batch];
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)));
await fs.writeFile(SRC, serialize(posts));
const remaining = pending.length - (done - failed);
console.log(`Done. ${done} processed, ${failed} failed. ~${remaining} still pending.`);

