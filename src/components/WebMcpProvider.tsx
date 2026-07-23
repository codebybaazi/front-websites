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
      "Navigate the current SprintersHub tab to a path on this site (e.g. '/', '/contact-us', '/blog').",
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
    name: "open_whatsapp",
    description:
      "Open a WhatsApp chat with SprintersHub support to request a new betting ID or help.",
    inputSchema: {
      type: "object",
      properties: {
        message: {
          type: "string",
          description: "Optional prefilled message for the WhatsApp chat.",
        },
      },
    },
    execute: ({ message }) => {
      const btn = document.querySelector<HTMLAnchorElement>(
        'a[href*="wa.me"], a[href*="whatsapp.com"]',
      );
      if (btn) {
        const url = new URL(btn.href);
        if (typeof message === "string" && message.trim()) {
          url.searchParams.set("text", message);
        }
        window.open(url.toString(), "_blank", "noopener");
        return { ok: true, url: url.toString() };
      }
      return { ok: false, error: "WhatsApp link not found on page" };
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
];

export function WebMcpProvider() {
  useEffect(() => {
    const mc = (navigator as Navigator).modelContext;
    if (!mc) return;
    const controller = new AbortController();
    try {
      if (typeof mc.registerTool === "function") {
        for (const tool of tools) {
          void mc.registerTool({ ...tool, signal: controller.signal });
        }
      } else if (typeof mc.provideContext === "function") {
        void mc.provideContext({ tools });
      }
    } catch (err) {
      console.warn("WebMCP registration failed", err);
    }
    return () => controller.abort();
  }, []);
  return null;
}

