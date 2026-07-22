import { useEffect } from "react";

type ToolDef = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<unknown> | unknown;
};

declare global {
  interface Navigator {
    modelContext?: {
      registerTool?: (tool: ToolDef & { signal?: AbortSignal }) => void | Promise<void>;
      provideContext?: (ctx: { tools: ToolDef[] }) => void | Promise<void>;
    };
  }
}

const WHATSAPP = "https://wa.me/919000012345";

const tools: ToolDef[] = [
  {
    name: "get_lotus365_id",
    description:
      "Start the Lotus365 ID creation flow. Opens WhatsApp concierge to get a cricket/betting ID in under 2 minutes.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    execute: () => {
      window.open(`${WHATSAPP}?text=${encodeURIComponent("Hi Lotus365, I want a new ID.")}`, "_blank");
      return { ok: true, channel: "whatsapp", url: WHATSAPP };
    },
  },
  {
    name: "claim_welcome_bonus",
    description: "Claim the ₹25,000 Lotus365 welcome bonus by contacting the concierge on WhatsApp.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    execute: () => {
      window.open(`${WHATSAPP}?text=${encodeURIComponent("Hi, I want to claim the ₹25,000 welcome bonus.")}`, "_blank");
      return { ok: true, bonus: "₹25,000" };
    },
  },
  {
    name: "contact_support",
    description: "Open Lotus365 24/7 concierge support on WhatsApp with an optional message.",
    inputSchema: {
      type: "object",
      properties: { message: { type: "string", description: "Message to send to support." } },
      additionalProperties: false,
    },
    execute: (input) => {
      const msg = typeof input?.message === "string" ? (input.message as string) : "Hi Lotus365 support";
      window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
      return { ok: true };
    },
  },
  {
    name: "navigate",
    description:
      "Navigate to a section of the Lotus365 site. Allowed sections: home, about, services, id, deposit, withdraw, bonus, casino, cricket, support, contact, faq.",
    inputSchema: {
      type: "object",
      properties: {
        section: {
          type: "string",
          enum: [
            "home", "about", "services", "id", "deposit", "withdraw",
            "bonus", "casino", "cricket", "support", "contact", "faq",
          ],
        },
      },
      required: ["section"],
      additionalProperties: false,
    },
    execute: (input) => {
      const map: Record<string, string> = {
        home: "/", about: "/about-us", services: "/services", id: "/lotus365-id",
        deposit: "/how-to-deposit", withdraw: "/how-to-withdraw-safely",
        bonus: "/lotus365-book-bonus", casino: "/casino", cricket: "/lotus365-cricket",
        support: "/support", contact: "/contact-us", faq: "/faq",
      };
      const path = map[String(input.section)] ?? "/";
      window.location.assign(path);
      return { ok: true, path };
    },
  },
  {
    name: "site_info",
    description: "Return structured info about Lotus365 — services, contact channels, and key URLs.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    execute: () => ({
      name: "Lotus365",
      site: "https://lotus365id.com",
      whatsapp: WHATSAPP,
      services: ["cricket betting", "sports exchange", "live casino", "Indian card games"],
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
      const mc = navigator.modelContext;
      if (!mc) return false;
      try {
        if (typeof mc.registerTool === "function") {
          for (const tool of tools) {
            mc.registerTool({ ...tool, signal });
          }
        } else if (typeof mc.provideContext === "function") {
          mc.provideContext({ tools });
        }
        return true;
      } catch (e) {
        console.warn("WebMCP registration failed", e);
        return true;
      }
    };

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

