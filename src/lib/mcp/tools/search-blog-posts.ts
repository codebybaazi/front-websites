import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SITE_ORIGIN } from "@/utils/page-seo";

type Post = { slug: string; title: string; category: string; desc: string; date: string };

export default defineTool({
  name: "search_blog_posts",
  title: "Search blog posts",
  description:
    "Full-text search across public Fairplay India blog post titles, categories and summaries. Returns matching posts with their public URLs.",
  inputSchema: {
    query: z.string().trim().min(2).describe("Search words, e.g. 'IPL betting id' or 'withdrawal'."),
    limit: z.number().int().min(1).max(50).default(10).describe("Maximum number of results."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ query, limit }) => {
    const { blogArticles } = await import("@/lib/blog-data");
    const posts = blogArticles as unknown as Post[];
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

    const scored = posts
      .map((p) => {
        const haystack = `${p.title} ${p.category} ${p.desc} ${p.slug}`.toLowerCase();
        const score = terms.reduce((acc, term) => (haystack.includes(term) ? acc + 1 : acc), 0);
        return { p, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit ?? 10)
      .map(({ p }) => ({
        slug: p.slug,
        title: p.title,
        category: p.category,
        date: p.date,
        summary: p.desc,
        url: `${SITE_ORIGIN}/posts/${p.slug}`,
      }));

    return {
      content: [{ type: "text", text: JSON.stringify({ query, results: scored }, null, 2) }],
      structuredContent: { query, results: scored },
    };
  },
});
