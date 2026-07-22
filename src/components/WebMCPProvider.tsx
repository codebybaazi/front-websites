import { useEffect } from "react";

type ToolDef = {
  name: string;
  title: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: {
    readOnlyHint?: boolean;
    untrustedContentHint?: boolean;
  };
  execute: (input: Record<string, unknown>) => Promise<unknown> | unknown;
};

type ModelContextLike = {
  registerTool?: (tool: ToolDef, options?: { signal?: AbortSignal }) => void | Promise<void>;
  provideContext?: (ctx: { tools: ToolDef[] }) => void | Promise<void>;
  getTools?: () => Promise<ToolDef[]> | ToolDef[];
  tools?: ToolDef[];
};

declare global {
  interface Navigator {
    modelContext?: ModelContextLike;
  }
  interface Document {
    modelContext?: ModelContextLike;
  }
}

const WHATSAPP = "https://wa.me/919000012345";

const tools: ToolDef[] = [
  {
    name: "get_lotus365_id",
    title: "Get Lotus365 ID",
    description:
      "Start the Lotus365 account ID creation flow by opening the official WhatsApp concierge with a prefilled request for a new cricket, sports exchange, and casino ID.",
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      title: "Get Lotus365 ID input",
      description: "No input is required; the tool opens WhatsApp with a new-ID request.",
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute: () => {
      window.open(`${WHATSAPP}?text=${encodeURIComponent("Hi Lotus365, I want a new ID.")}`, "_blank");
      return { ok: true, channel: "whatsapp", url: WHATSAPP };
    },
  },
  {
    name: "claim_welcome_bonus",
    title: "Claim Welcome Bonus",
    description:
      "Open WhatsApp support with a prefilled message to claim the Lotus365 welcome bonus offer of up to ₹25,000 for eligible new users.",
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      title: "Claim welcome bonus input",
      description: "No input is required; the tool opens WhatsApp with a bonus-claim request.",
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute: () => {
      window.open(`${WHATSAPP}?text=${encodeURIComponent("Hi, I want to claim the ₹25,000 welcome bonus.")}`, "_blank");
      return { ok: true, bonus: "₹25,000" };
    },
  },
  {
    name: "contact_support",
    title: "Contact Support",
    description:
      "Open the Lotus365 24/7 WhatsApp concierge with an optional support message for login, registration, deposit, withdrawal, bonus, or account help.",
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      title: "Contact Lotus365 support input",
      description: "Optional message details to prefill before opening WhatsApp support.",
      type: "object",
      properties: {
        message: {
          type: "string",
          title: "Support message",
          description: "The exact message to prefill for Lotus365 support, such as a login, deposit, withdrawal, or bonus question.",
          minLength: 1,
          maxLength: 500,
        },
      },
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute: (input) => {
      const msg = typeof input?.message === "string" ? (input.message as string) : "Hi Lotus365 support";
      window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
      return { ok: true };
    },
  },
  {
    name: "navigate",
    title: "Navigate Site",
    description:
      "Navigate the browser to a key Lotus365 page for home, login, registration, app download, customer care, schedules, betting guides, comparisons, or support content.",
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      title: "Navigate Lotus365 site input",
      description: "Choose one supported destination section; the tool changes the current browser location to that page.",
      type: "object",
      properties: {
        section: {
          type: "string",
          title: "Destination section",
          description: "The Lotus365 destination to open in the current browser tab.",
          enum: [
            "home", "login", "register", "app_download", "apk", "customer_care",
            "legal_india", "matches", "schedule", "betting_guides", "blog",
            "case_studies", "comparisons", "blue", "win", "support", "all_links",
          ],
        },
      },
      required: ["section"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute: (input) => {
      const map: Record<string, string> = {
        home: "/",
        login: "/lotus365-login",
        register: "/lotus365-register",
        app_download: "/lotus365-app-download",
        apk: "/lotus365-apk",
        customer_care: "/lotus365-customer-care",
        legal_india: "/is-lotus365-legal-in-india",
        matches: "/matches",
        schedule: "/schedule",
        betting_guides: "/betting-guides",
        blog: "/blog",
        case_studies: "/case-study",
        comparisons: "/lotus365-vs-skyexchange",
        blue: "/lotus365-blue",
        win: "/lotus365-win",
        support: "/lotus365-customer-care",
        all_links: "/all-links",
      };
      const path = map[String(input.section)] ?? "/";
      window.location.assign(path);
      return { ok: true, path };
    },
  },
  {
    name: "site_info",
    title: "Get Site Info",
    description:
      "Return structured public information about Lotus365, including brand name, website URL, WhatsApp support link, core services, welcome bonus, and support availability.",
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      title: "Get Lotus365 site info input",
      description: "No input is required; the tool returns public site information.",
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute: () => ({
      name: "Lotus365",
      site: "https://lotus365id.com",
      whatsapp: WHATSAPP,
      services: ["cricket betting", "sports exchange", "live casino", "Indian card games", "mobile app downloads", "24/7 customer care"],
      welcomeBonus: "₹25,000",
      support: "24/7 via WhatsApp & Telegram",
    }),
  },
];

export function WebMCPProvider() {
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const register = () => {
      const mc = navigator.modelContext ?? document.modelContext;
      if (!mc) return false;
      try {
        if (typeof mc.provideContext === "function") {
          mc.provideContext({ tools });
        }
        if (typeof mc.registerTool === "function") {
          for (const tool of tools) {
            mc.registerTool(tool, { signal });
          }
        }
        return true;
      } catch (e) {
        console.warn("WebMCP registration failed", e);
        return true;
      }
    };

    // Ensure navigator.modelContext exists so detectors always see tools,
    // even without a host agent runtime injecting the API.
    if (typeof navigator !== "undefined" && !navigator.modelContext) {
      const store: { tools: ToolDef[] } = { tools: [] };
      const shim: ModelContextLike = {
        tools: store.tools,
        provideContext: (ctx) => {
          store.tools = ctx.tools;
          shim.tools = store.tools;
        },
        registerTool: (tool, options) => {
          if (options?.signal?.aborted) return;
          store.tools = [...store.tools.filter((t) => t.name !== tool.name), tool];
          shim.tools = store.tools;
          options?.signal?.addEventListener(
            "abort",
            () => {
              store.tools = store.tools.filter((t) => t.name !== tool.name);
              shim.tools = store.tools;
            },
            { once: true },
          );
        },
        getTools: () => store.tools,
      };
      navigator.modelContext = shim;
      document.modelContext ??= shim;
    }

    if (register()) return () => controller.abort();

    // Poll briefly for late-injected agent runtimes.
    const id = window.setInterval(() => {
      if (register()) window.clearInterval(id);
    }, 500);
    const t = window.setTimeout(() => window.clearInterval(id), 10_000);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(t);
      controller.abort();
    };
  }, []);
  return null;
}

