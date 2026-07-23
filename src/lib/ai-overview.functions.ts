import { createServerFn } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";

export type AiOverview = {
  summary: string;
  highlights: string[];
  generatedAt: string;
};

const FALLBACK: AiOverview = {
  summary:
    "Sprinters Online Gaming is India's premium betting ID provider — offering instant WhatsApp-verified accounts across cricket, football, tennis, live casino and Indian card games with same-day UPI withdrawals.",
  highlights: [
    "Instant ID setup on WhatsApp — verified in minutes",
    "Sharp cricket & multi-sport odds from top exchanges",
    "Live casino, Aviator, Teen Patti & Andar Bahar",
    "Same-day UPI, IMPS & NEFT withdrawals",
    "24/7 dedicated relationship manager",
  ],
  generatedAt: new Date().toISOString(),
};

let cache: { at: number; data: AiOverview } | null = null;
const TTL_MS = 1000 * 60 * 60 * 12; // 12h

export const getAiOverview = createServerFn({ method: "GET" }).handler(
  async (): Promise<AiOverview> => {
    if (cache && Date.now() - cache.at < TTL_MS) return cache.data;

    const key = process.env.LOVABLE_API_KEY;
    if (!key) return FALLBACK;

    try {
      const r = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Lovable-API-Key": key,
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          response_format: { type: "json_object" },
          messages: [
            {
              role: "system",
              content:
                "You are a marketing copywriter for Sprinters Online Gaming, an Indian online betting ID provider (cricket, football, tennis, live casino, Indian card games). Reply ONLY with strict JSON: {\"summary\": string (max 280 chars, energetic, 2 sentences), \"highlights\": string[] (exactly 5 short punchy bullets, max 60 chars each)}. Focus on: instant WhatsApp ID, sharp odds, live cricket, casino & Aviator, same-day UPI withdrawals, 24/7 support. No emojis. No markdown.",
            },
            {
              role: "user",
              content: "Write a fresh, on-brand AI overview for the homepage.",
            },
          ],
        }),
      });

      if (!r.ok) return FALLBACK;
      const j = (await r.json()) as {
        choices?: { message?: { content?: string } }[];
      };
      const raw = j.choices?.[0]?.message?.content ?? "";
      const parsed = JSON.parse(raw) as { summary?: string; highlights?: string[] };
      if (!parsed.summary || !Array.isArray(parsed.highlights)) return FALLBACK;

      const data: AiOverview = {
        summary: String(parsed.summary).slice(0, 320),
        highlights: parsed.highlights.slice(0, 5).map((h) => String(h).slice(0, 80)),
        generatedAt: new Date().toISOString(),
      };
      cache = { at: Date.now(), data };
      return data;
    } catch {
      return FALLBACK;
    }
  },
);

export const aiOverviewQueryOptions = queryOptions({
  queryKey: ["ai-overview"],
  queryFn: () => getAiOverview(),
  staleTime: 1000 * 60 * 60,
});
