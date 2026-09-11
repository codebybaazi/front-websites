import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SITE_ORIGIN } from "@/utils/page-seo";

type Post = { slug: string; title: string; category: string; desc: string; date: string };

export default defineTool({
  name: "get_blog_post",
  title: "Get blog post",
  description:
    "Fetch a single public Fairplay India blog post by slug, returning its metadata and the readable Markdown version of the page.",
  inputSchema: {
    slug: z.string().trim().min(1).describe("Post slug, e.g. fairplay-id-security-tips-protect-your-id-login."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async ({ slug }) => {
    const { blogArticles } = await import("@/lib/blog-data");
    const post = (blogArticles as unknown as Post[]).find((p) => p.slug === slug);
    if (!post) throw new ToolError(`No blog post found with slug "${slug}".`);

    const url = `${SITE_ORIGIN}/posts/${post.slug}`;
    let markdown = "";
    try {
      const response = await fetch(url, { headers: { accept: "text/markdown" } });
      if (response.ok) markdown = await response.text();
    } catch {
      // Content fetch is best-effort; metadata alone is still useful.
    }

    const { authorForPostSlug } = await import("@/lib/authors");
    const author = authorForPostSlug(post.slug);

    const payload = {
      slug: post.slug,
      title: post.title,
      category: post.category,
      date: post.date,
      summary: post.desc,
      url,
      author: {
        name: author.name,
        role: author.role,
        url: `${SITE_ORIGIN}/authors/${author.slug}`,
      },
      markdown: markdown || null,
    };

    return {
      content: [{ type: "text", text: markdown || JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
