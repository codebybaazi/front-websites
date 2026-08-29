/**
 * WebMCP: exposes in-page, read-only Fairplay India tools to browser AI agents via
 * navigator.modelContext.provideContext(). Registration is client-only (no SSR) and
 * degrades silently in browsers without the API.
 */
import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args: Record<string, unknown>) => Promise<{
    content: Array<{ type: "text"; text: string }>;
  }>;
};

type ModelContext = {
  provideContext: (context: { tools: WebMcpTool[] }) => void | Promise<void>;
};

const text = (value: unknown) => ({
  content: [{ type: "text" as const, text: typeof value === "string" ? value : JSON.stringify(value, null, 2) }],
});

export function WebMcpTools() {
  const router = useRouter();

  useEffect(() => {
    const loadPosts = async () => {
      const { blogArticles } = await import("@/lib/blog-data");
      return blogArticles as unknown as Array<{
        slug: string;
        title: string;
        category: string;
        desc: string;
        date: string;
      }>;
    };

    const origin = window.location.origin;

    const tools: WebMcpTool[] = [
      {
        name: "list_blog_posts",
        description:
          "List Fairplay India blog posts (cricket betting guides, IPL coverage, casino and account help) with slug, title, category, date and summary.",
        inputSchema: {
          type: "object",
          properties: {
            category: { type: "string", description: "Optional category filter, e.g. 'Support'." },
            limit: { type: "number", description: "Maximum number of posts to return (default 20)." },
          },
          additionalProperties: false,
        },
        execute: async ({ category, limit }) => {
          const posts = await loadPosts();
          const filtered =
            typeof category === "string" && category.trim()
              ? posts.filter((p) => p.category.toLowerCase() === category.toLowerCase())
              : posts;
          const max = typeof limit === "number" && limit > 0 ? Math.min(limit, 100) : 20;
          return text({
            total: filtered.length,
            posts: filtered.slice(0, max).map((p) => ({
              slug: p.slug,
              title: p.title,
              category: p.category,
              date: p.date,
              summary: p.desc,
              url: `${origin}/posts/${p.slug}`,
            })),
          });
        },
      },
      {
        name: "search_blog_posts",
        description:
          "Search Fairplay India blog posts by keyword across titles, categories and summaries. Use for questions about betting IDs, deposits, withdrawals, IPL or casino games.",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string", description: "Search words, e.g. 'IPL betting id'." },
            limit: { type: "number", description: "Maximum number of results (default 10)." },
          },
          required: ["query"],
          additionalProperties: false,
        },
        execute: async ({ query, limit }) => {
          const posts = await loadPosts();
          const terms = String(query ?? "")
            .toLowerCase()
            .split(/\s+/)
            .filter(Boolean);
          if (!terms.length) return text({ query, results: [] });
          const max = typeof limit === "number" && limit > 0 ? Math.min(limit, 50) : 10;
          const results = posts
            .map((p) => {
              const haystack = `${p.title} ${p.category} ${p.desc} ${p.slug}`.toLowerCase();
              return { p, score: terms.filter((t) => haystack.includes(t)).length };
            })
            .filter((r) => r.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, max)
            .map(({ p }) => ({
              slug: p.slug,
              title: p.title,
              category: p.category,
              date: p.date,
              summary: p.desc,
              url: `${origin}/posts/${p.slug}`,
            }));
          return text({ query, results });
        },
      },
      {
        name: "get_page_content",
        description:
          "Read the visible text content of the page currently open in the browser, for grounded answers about Fairplay India.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        execute: async () => {
          const body = document.querySelector("main")?.innerText ?? document.body.innerText;
          return text({
            url: window.location.href,
            title: document.title,
            content: body.replace(/\n{3,}/g, "\n\n").slice(0, 20000),
          });
        },
      },
      {
        name: "navigate_site",
        description:
          "Open a page on this Fairplay India site in the current browser tab, e.g. '/blog', '/fairplay-id' or '/posts/<slug>'.",
        inputSchema: {
          type: "object",
          properties: {
            path: { type: "string", description: "Root-relative path starting with '/'." },
          },
          required: ["path"],
          additionalProperties: false,
        },
        execute: async ({ path }) => {
          const target = String(path ?? "");
          if (!target.startsWith("/")) {
            return text({ error: "path must be root-relative and start with '/'" });
          }
          await router.navigate({ href: target });
          return text({ navigatedTo: target, url: window.location.href });
        },
      },
    ];

    try {
      void modelContext.provideContext({ tools });
    } catch {
      // Older or partial WebMCP implementations: nothing else to do.
    }
  }, [router]);

  return null;
}
