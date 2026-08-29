import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SITE_ORIGIN } from "@/utils/page-seo";

type Post = {
  slug: string;
  title: string;
  category: string;
  desc: string;
  date: string;
};

async function loadPosts(): Promise<Post[]> {
  const { blogArticles } = await import("@/lib/blog-data");
  return blogArticles as unknown as Post[];
}

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description:
    "List published Fairplay India blog posts (title, category, date, summary and public URL). Optionally filter by category.",
  inputSchema: {
    category: z.string().trim().min(1).optional().describe("Filter by category, e.g. Guide or Support."),
    limit: z.number().int().min(1).max(100).default(20).describe("Maximum number of posts to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ category, limit }) => {
    const all = await loadPosts();
    const filtered = category
      ? all.filter((p) => p.category?.toLowerCase() === category.toLowerCase())
      : all;
    const posts = filtered.slice(0, limit ?? 20).map((p) => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      date: p.date,
      summary: p.desc,
      url: `${SITE_ORIGIN}/posts/${p.slug}`,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify({ total: filtered.length, posts }, null, 2) }],
      structuredContent: { total: filtered.length, posts },
    };
  },
});
