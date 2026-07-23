import { useEffect } from "react";

type ToolDef = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: Record<string, unknown>;
  execute: (input: any) => Promise<{ content: Array<{ type: string; text: string }> }>;
};

const WHATSAPP_URL = "https://wa.me/919999999999";
const openWA = (msg: string) => {
  const url = `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;
  if (typeof window !== "undefined") window.open(url, "_blank", "noopener,noreferrer");
  return url;
};
const fetchMd = async (path: string) => {
  const res = await fetch(path, { headers: { Accept: "text/markdown" } });
  return (await res.text()).slice(0, 6000);
};

const tools: ToolDef[] = [
  {
    name: "get_new_betting_id",
    description:
      "Request a new verified Mahadev Book online cricket betting ID. Opens the 24x7 WhatsApp onboarding chat with a prefilled message including the user's name, sport preference, and referral code.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Full name of the user requesting the ID." },
        sport: { type: "string", enum: ["cricket", "football", "tennis", "casino"], description: "Preferred sport." },
        referral: { type: "string", description: "Optional referral code." },
      },
    },
    annotations: { title: "Get a new betting ID", readOnlyHint: false, openWorldHint: true },
    execute: async ({ name, sport, referral }) => {
      const msg = `Hi, I want a new Mahadev Book ID${name ? ` for ${name}` : ""}${sport ? ` (${sport})` : ""}${referral ? ` ref:${referral}` : ""}.`;
      return { content: [{ type: "text", text: `Opening WhatsApp: ${openWA(msg)}` }] };
    },
  },
  {
    name: "login_help",
    description: "Get help logging into an existing Mahadev Book ID or recovering a forgotten password via WhatsApp support.",
    inputSchema: {
      type: "object",
      properties: {
        user_id: { type: "string", description: "Existing Mahadev Book user id (optional)." },
      },
    },
    annotations: { title: "Login / recovery help", readOnlyHint: false },
    execute: async ({ user_id }) => {
      const msg = `Hi, I need login/recovery help${user_id ? ` for ID ${user_id}` : ""}.`;
      return { content: [{ type: "text", text: `Opening support chat: ${openWA(msg)}` }] };
    },
  },
  {
    name: "contact_support",
    description: "Open Mahadev Book 24x7 customer support on WhatsApp with an optional prefilled message.",
    inputSchema: {
      type: "object",
      properties: {
        message: { type: "string", description: "Message to send to support." },
        topic: { type: "string", enum: ["deposit", "withdrawal", "id", "predictions", "other"], description: "Support topic." },
      },
    },
    annotations: { title: "Contact 24x7 support", readOnlyHint: false },
    execute: async ({ message, topic }) => {
      const msg = `[${topic ?? "other"}] ${message || "Hi, I need support."}`;
      return { content: [{ type: "text", text: `Opening support chat: ${openWA(msg)}` }] };
    },
  },
  {
    name: "navigate",
    description:
      "Navigate to a page on mahadevbookss.com. Allowed paths: /, /services, /predictions, /matches, /schedule, /blog, /contact, /login, /mahadev-book-vs-lotus-365.",
    inputSchema: {
      type: "object",
      properties: {
        path: { type: "string", description: "Relative path beginning with /." },
      },
      required: ["path"],
    },
    annotations: { title: "Navigate site", readOnlyHint: false },
    execute: async ({ path }) => {
      const allowed = ["/", "/services", "/predictions", "/matches", "/schedule", "/blog", "/contact", "/login", "/mahadev-book-vs-lotus-365"];
      if (!allowed.includes(path)) return { content: [{ type: "text", text: `Path not allowed: ${path}` }] };
      if (typeof window !== "undefined") window.location.href = path;
      return { content: [{ type: "text", text: `Navigating to ${path}` }] };
    },
  },
  {
    name: "get_predictions",
    description: "Retrieve today's cricket match predictions with win probabilities, curated by Mahadev Book analysts.",
    inputSchema: {
      type: "object",
      properties: {
        date: { type: "string", description: "ISO date (YYYY-MM-DD). Defaults to today." },
      },
    },
    annotations: { title: "Get cricket predictions", readOnlyHint: true, idempotentHint: true },
    execute: async () => {
      try { return { content: [{ type: "text", text: await fetchMd("/predictions") }] }; }
      catch (e) { return { content: [{ type: "text", text: `Failed: ${String(e)}` }] }; }
    },
  },
  {
    name: "get_matches",
    description: "List currently live and upcoming cricket matches with venue, teams, and start time.",
    inputSchema: {
      type: "object",
      properties: {
        status: { type: "string", enum: ["live", "upcoming", "all"], description: "Match status filter." },
      },
    },
    annotations: { title: "Get matches", readOnlyHint: true, idempotentHint: true },
    execute: async () => {
      try { return { content: [{ type: "text", text: await fetchMd("/matches") }] }; }
      catch (e) { return { content: [{ type: "text", text: `Failed: ${String(e)}` }] }; }
    },
  },
  {
    name: "get_schedule",
    description: "Retrieve the upcoming cricket match schedule across leagues and international fixtures.",
    inputSchema: {
      type: "object",
      properties: {
        from: { type: "string", description: "ISO start date." },
        to: { type: "string", description: "ISO end date." },
      },
    },
    annotations: { title: "Get schedule", readOnlyHint: true, idempotentHint: true },
    execute: async () => {
      try { return { content: [{ type: "text", text: await fetchMd("/schedule") }] }; }
      catch (e) { return { content: [{ type: "text", text: `Failed: ${String(e)}` }] }; }
    },
  },
  {
    name: "get_services",
    description: "Describe deposit, withdrawal, live-line, and 24x7 support services offered by Mahadev Book.",
    inputSchema: { type: "object", properties: {} },
    annotations: { title: "Get services", readOnlyHint: true, idempotentHint: true },
    execute: async () => {
      try { return { content: [{ type: "text", text: await fetchMd("/services") }] }; }
      catch (e) { return { content: [{ type: "text", text: `Failed: ${String(e)}` }] }; }
    },
  },
  {
    name: "get_blog_posts",
    description: "List Mahadev Book blog posts, betting guides, and analysis articles.",
    inputSchema: {
      type: "object",
      properties: {
        tag: { type: "string", description: "Filter posts by tag (optional)." },
      },
    },
    annotations: { title: "Get blog posts", readOnlyHint: true, idempotentHint: true },
    execute: async () => {
      try { return { content: [{ type: "text", text: await fetchMd("/blog") }] }; }
      catch (e) { return { content: [{ type: "text", text: `Failed: ${String(e)}` }] }; }
    },
  },
  {
    name: "compare_providers",
    description: "Compare Mahadev Book with other betting ID providers such as Lotus 365 and Skyexchange 247.",
    inputSchema: {
      type: "object",
      properties: {
        competitor: { type: "string", enum: ["lotus365", "skyexchange247"], description: "Competitor to compare against." },
      },
    },
    annotations: { title: "Compare providers", readOnlyHint: true, idempotentHint: true },
    execute: async ({ competitor }) => {
      const path = competitor === "skyexchange247" ? "/mahadev-book-vs-skyexchange-247" : "/mahadev-book-vs-lotus-365";
      try { return { content: [{ type: "text", text: await fetchMd(path) }] }; }
      catch (e) { return { content: [{ type: "text", text: `Failed: ${String(e)}` }] }; }
    },
  },
  {
    name: "search_site",
    description: "Search Mahadev Book blog and pages by keyword.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "Search query keywords." } },
      required: ["query"],
    },
    annotations: { title: "Search site", readOnlyHint: false },
    execute: async ({ query }) => {
      if (typeof window !== "undefined") window.location.href = `/blog?q=${encodeURIComponent(query)}`;
      return { content: [{ type: "text", text: `Searching for: ${query}` }] };
    },
  },
  {
    name: "get_page_markdown",
    description: "Fetch any page of mahadevbookss.com as clean markdown for AI consumption.",
    inputSchema: {
      type: "object",
      properties: { path: { type: "string", description: "Relative path beginning with /." } },
      required: ["path"],
    },
    annotations: { title: "Get page as markdown", readOnlyHint: true, idempotentHint: true },
    execute: async ({ path }) => {
      if (!path?.startsWith("/")) return { content: [{ type: "text", text: "Path must start with /" }] };
      try { return { content: [{ type: "text", text: await fetchMd(path) }] }; }
      catch (e) { return { content: [{ type: "text", text: `Failed: ${String(e)}` }] }; }
    },
  },
];

export function WebMCPProvider() {
  useEffect(() => {
    const mc = (navigator as any)?.modelContext;
    if (!mc) return;
    const controller = new AbortController();
    const { signal } = controller;

    try {
      if (typeof mc.registerTool === "function") {
        for (const t of tools) {
          try {
            mc.registerTool({ ...t, signal });
          } catch (e) {
            console.warn(`WebMCP registerTool failed for ${t.name}`, e);
          }
        }
      } else if (typeof mc.provideContext === "function") {
        mc.provideContext({ tools });
      }
    } catch (e) {
      console.warn("WebMCP registration failed", e);
    }

    return () => controller.abort();
  }, []);
  return null;
}
