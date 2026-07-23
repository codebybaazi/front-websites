import { useEffect } from "react";

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<unknown> | unknown;
};

declare global {
  interface Navigator {
    modelContext?: {
      registerTool?: (
        tool: WebMcpTool & { signal?: AbortSignal },
      ) => void | Promise<void>;
      provideContext?: (ctx: { tools: WebMcpTool[] }) => void | Promise<void>;
    };
  }
}

const tools: WebMcpTool[] = [
  {
    name: "navigate",
    description:
      "Navigate the current sprintersbloom tab to a same-origin path on this site (e.g. '/').",
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "Same-origin path starting with '/'.",
        },
      },
      required: ["path"],
    },
    execute: ({ path }) => {
      if (typeof path !== "string" || !path.startsWith("/")) {
        return { ok: false, error: "path must be a same-origin path starting with /" };
      }
      window.location.assign(path);
      return { ok: true, path };
    },
  },
  {
    name: "get_page_summary",
    description:
      "Return the current page's title, URL, meta description, and top headings so an agent can understand what the user is viewing.",
    inputSchema: { type: "object", properties: {} },
    execute: () => ({
      url: window.location.href,
      title: document.title,
      description:
        document
          .querySelector('meta[name="description"]')
          ?.getAttribute("content") ?? "",
      headings: Array.from(document.querySelectorAll("h1, h2"))
        .slice(0, 20)
        .map((h) => ({ level: h.tagName.toLowerCase(), text: h.textContent?.trim() ?? "" })),
    }),
  },
  {
    name: "list_links",
    description:
      "List same-origin navigation links visible on the current page so an agent can discover where to go next.",
    inputSchema: { type: "object", properties: {} },
    execute: () => ({
      links: Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href]"))
        .map((a) => ({ text: a.textContent?.trim() ?? "", href: a.getAttribute("href") ?? "" }))
        .filter((l) => l.href.startsWith("/") || l.href.startsWith(window.location.origin))
        .slice(0, 50),
    }),
  },
];

function register() {
  const mc = (navigator as Navigator).modelContext;
  if (!mc || typeof mc.registerTool !== "function") return () => {};
  const controller = new AbortController();
  try {
    for (const tool of tools) {
      void mc.registerTool({ ...tool, signal: controller.signal });
    }
  } catch (err) {
    console.warn("WebMCP registerTool failed", err);
  }
  return () => controller.abort();
}

// Register as early as possible on the client so agents don't time out
// waiting for navigator.modelContext.provideContext to be called.
if (typeof window !== "undefined" && (navigator as Navigator).modelContext) {
  register();
}

export function WebMcpProvider() {
  useEffect(() => register(), []);
  return null;
}
