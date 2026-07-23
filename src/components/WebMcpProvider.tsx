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
      "Navigate the current browser tab of the sprintersbloom web app to a same-origin route (for example '/' for the home page). Triggers a full client navigation on this site; does not open new tabs, external URLs, or cross-origin destinations.",
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description:
            "Absolute same-origin path beginning with '/'. Query strings and hash fragments are allowed (e.g. '/?ref=agent#section'). External URLs or protocol-relative paths are rejected.",
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
      "Read a lightweight snapshot of the page the user is currently viewing in the sprintersbloom web app: canonical URL, document title, meta description, and up to 20 H1/H2 headings in document order. Use before other tools to ground the agent in the current context.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
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
      "Enumerate up to 50 same-origin anchor links visible on the current page (visible link text and href). Use this to discover which routes on the sprintersbloom site the agent can hand to the 'navigate' tool next. External links are omitted.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
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

// Register as early as possible on the client. Poll briefly in case the
// browser injects navigator.modelContext after script load.
if (typeof window !== "undefined") {
  let attempts = 0;
  const tryRegister = () => {
    if ((navigator as Navigator).modelContext?.registerTool) {
      register();
      return;
    }
    if (attempts++ < 40) setTimeout(tryRegister, 250);
  };
  tryRegister();
}

export function WebMcpProvider() {
  useEffect(() => register(), []);
  return null;
}
