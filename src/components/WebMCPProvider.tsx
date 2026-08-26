import { useEffect } from "react";
import { buildWhatsAppUrl, fetchWhatsAppNumber, getCachedWhatsAppNumber } from "@/lib/whatsapp";

type ToolDef = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: Record<string, unknown>;
  execute: (input: any) => Promise<{ content: Array<{ type: string; text: string }> }>;
};

const openWA = async (msg: string) => {
  let number = getCachedWhatsAppNumber();
  if (!number) number = await fetchWhatsAppNumber();
  const url = buildWhatsAppUrl(number, msg);
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
      "Start the onboarding flow to obtain a new verified Mahadev Book online betting ID (cricket, football, tennis, or casino). Opens the official 24x7 WhatsApp support chat in a new tab with a prefilled message containing the user's name, chosen sport, and optional referral code so an agent can create and deliver the ID. Use when the user wants to sign up, register, create an account, or get a fresh betting/gaming ID.",
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
    description:
      "Assist an existing Mahadev Book user who cannot log in, has forgotten their password, lost access to their account, or needs their user ID recovered. Opens 24x7 WhatsApp support with a prefilled message that includes the provided user ID (if any) so support can verify identity and restore access. Use for login problems, password reset, account recovery, or 'can't sign in' scenarios.",
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
    description:
      "Open Mahadev Book's 24x7 customer support on WhatsApp with a prefilled message tagged by topic (deposit, withdrawal, id, predictions, or other). Use for any general help, complaints, payment questions, deposit/withdrawal issues, KYC queries, or when the user asks to talk to a human agent.",
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
      "Navigate the current browser tab to a specific page on mahadevbookss.com. Use this to take the user to a section of the site. Allowed paths: '/' (home), '/services' (deposit/withdrawal/support), '/predictions' (today's cricket predictions), '/matches' (live & upcoming matches), '/schedule' (fixture calendar), '/blog' (guides & articles), '/contact' (support form), '/login' (existing user sign-in), and '/mahadev-book-vs-lotus-365' (competitor comparison). Any other path is rejected.",
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
    description: "Fetch today's cricket match predictions from Mahadev Book as markdown, including matchups, win probabilities, expert picks, and confidence notes curated by in-house analysts. Optionally specify an ISO date (YYYY-MM-DD) for a different day; defaults to today. Read-only, safe to call repeatedly.",
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
    description: "List currently live and upcoming cricket matches tracked by Mahadev Book, including teams, tournament, venue, start time (IST), and status. Filter by status ('live', 'upcoming', or 'all'). Returns markdown suitable for display or summarization. Read-only.",
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
    description: "Retrieve the upcoming cricket fixture calendar across IPL, international, and domestic leagues as markdown. Optional ISO 'from' and 'to' dates narrow the window. Use when the user asks 'what matches are coming up', 'when is X playing', or wants a schedule overview. Read-only.",
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
    description: "Return a description of the services Mahadev Book offers to ID holders: instant deposits, fast withdrawals, live betting lines, dedicated account managers, and 24x7 WhatsApp support. Use when the user asks what Mahadev Book does, what features are included, or how deposits/withdrawals work. Read-only.",
    inputSchema: { type: "object", properties: {} },
    annotations: { title: "Get services", readOnlyHint: true, idempotentHint: true },
    execute: async () => {
      try { return { content: [{ type: "text", text: await fetchMd("/services") }] }; }
      catch (e) { return { content: [{ type: "text", text: `Failed: ${String(e)}` }] }; }
    },
  },
  {
    name: "get_blog_posts",
    description: "List Mahadev Book blog posts as markdown, including betting guides, tutorials, match analysis, and news. Use for research, content discovery, or when the user asks to read articles or learn about betting strategy. Read-only.",
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
    description: "Fetch a head-to-head comparison of Mahadev Book against another Indian betting ID provider (Lotus 365 or Skyexchange 247), covering trust, payout speed, market coverage, support quality, and pricing. Use when the user is evaluating providers or asks 'which is better'. Read-only.",
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
    description: "Search Mahadev Book's blog and content pages by keyword and navigate the current tab to the blog listing filtered by the query. Use when the user wants to find articles or topics on the site.",
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
    description: "Fetch any page of mahadevbookss.com as clean, LLM-friendly markdown (scripts/styles stripped, main content extracted). Provide a relative path starting with '/'. Use this as a general-purpose reader when no more specific tool applies. Read-only and idempotent.",
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

function registerWebMCP(signal?: AbortSignal) {
  if (typeof window === "undefined") return false;
  const w = window as any;
  w.__webmcp_tools = tools;
  const mc = (navigator as any)?.modelContext;
  if (!mc) return false;
  try {
    // Per WebMCP spec: registerTool(tool, { signal }) per tool
    if (typeof mc.registerTool === "function") {
      for (const t of tools) {
        try { mc.registerTool(t, signal ? { signal } : undefined); }
        catch (e) { console.warn(`WebMCP registerTool failed: ${t.name}`, e); }
      }
    }
    // Fallback for earlier draft that used provideContext
    if (typeof mc.provideContext === "function") {
      try { mc.provideContext({ tools }); } catch { /* noop */ }
    }
    window.dispatchEvent(new CustomEvent("webmcp:ready", { detail: { tools: tools.map((t) => t.name) } }));
    return true;
  } catch {
    return false;
  }
}

// Register synchronously at module evaluation (client only), so tools are
// available as early as possible — before React mounts.
if (typeof window !== "undefined") {
  registerWebMCP();
  // Intercept late injection of navigator.modelContext
  try {
    const nav = navigator as any;
    if (!nav.modelContext) {
      let stored: any;
      Object.defineProperty(nav, "modelContext", {
        configurable: true,
        get() { return stored; },
        set(v) { stored = v; try { registerWebMCP(); } catch { /* noop */ } },
      });
    }
  } catch { /* noop */ }
}

export function WebMCPProvider() {
  useEffect(() => {
    const ac = new AbortController();
    if (!registerWebMCP(ac.signal)) {
      let tries = 0;
      const id = window.setInterval(() => {
        if (registerWebMCP(ac.signal) || ++tries > 40) window.clearInterval(id);
      }, 200);
      return () => { window.clearInterval(id); ac.abort(); };
    }
    return () => ac.abort();
  }, []);
  return null;
}
