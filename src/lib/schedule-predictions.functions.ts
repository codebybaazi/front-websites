import { createServerFn } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";

export type SchedulePrediction = {
  fixture: string;
  sport: "Cricket" | "Football" | "Tennis";
  pick: string;
  confidence: string;
  reasoning: string;
  score: string;
};

export type ScheduleAiPanel = {
  overview: string;
  predictions: SchedulePrediction[];
  generatedAt: string;
};

const FALLBACK: ScheduleAiPanel = {
  overview:
    "The 2026-27 season is stacked — FIFA World Cup 2026 knockouts, India tour of England, The Ashes 2026-27, ICC T20 World Cup 2026 and every Grand Slam. Bet the biggest fixtures with your Sprinters ID.",
  predictions: [
    {
      fixture: "France vs Spain — World Cup 2026 Semi-final",
      sport: "Football",
      pick: "Spain to win in 90 minutes",
      confidence: "Medium (58%)",
      reasoning:
        "Spain's midfield control (Pedri, Rodri) plus a settled back four gives them the edge in a tight tactical semi.",
      score: "Spain 2 - 1 France",
    },
    {
      fixture: "Norway vs England — World Cup 2026 Quarter-final",
      sport: "Football",
      pick: "England to progress",
      confidence: "Medium-High (64%)",
      reasoning:
        "England's tournament depth and set-piece threat outweigh Haaland-led Norway in a knockout.",
      score: "England 2 - 1 Norway",
    },
    {
      fixture: "Wimbledon 2026 — Men's Final",
      sport: "Tennis",
      pick: "Jannik Sinner to defend the title",
      confidence: "Medium (55%)",
      reasoning:
        "Defending champion on grass, healthy, and the top seed. Alcaraz remains the main threat.",
      score: "3 sets to 1",
    },
  ],
  generatedAt: new Date().toISOString(),
};

let cache: { at: number; data: ScheduleAiPanel } | null = null;
const TTL_MS = 1000 * 60 * 60 * 6; // 6h

export const getScheduleAiPanel = createServerFn({ method: "GET" }).handler(
  async (): Promise<ScheduleAiPanel> => {
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
                "You are a sports analyst for Sprinters (an Indian betting-ID provider). Reply ONLY with strict JSON: {\"overview\": string (max 320 chars, one paragraph naming the biggest upcoming fixtures across cricket, football and tennis in July 2026 - March 2027), \"predictions\": [{\"fixture\": string, \"sport\": \"Cricket\"|\"Football\"|\"Tennis\", \"pick\": string, \"confidence\": string (e.g. \"Medium (58%)\") , \"reasoning\": string (max 200 chars, cite form/head-to-head/venue), \"score\": string (predicted scoreline or sets)}]} — exactly 3 predictions, one per sport if possible. Base picks on 2026 form: FIFA WC 2026 QFs/SFs/Final (Norway vs England, Argentina vs Switzerland, France vs Spain), India tour of England 5th T20I, Wimbledon 2026 men's / women's final, US Open 2026. No emojis, no markdown, no disclaimers.",
            },
            {
              role: "user",
              content:
                "Give a fresh AI overview + top 3 predictions for the upcoming Sprinters schedule.",
            },
          ],
        }),
      });

      if (!r.ok) return FALLBACK;
      const j = (await r.json()) as { choices?: { message?: { content?: string } }[] };
      const raw = j.choices?.[0]?.message?.content ?? "";
      const parsed = JSON.parse(raw) as {
        overview?: string;
        predictions?: SchedulePrediction[];
      };
      if (!parsed.overview || !Array.isArray(parsed.predictions)) return FALLBACK;

      const data: ScheduleAiPanel = {
        overview: String(parsed.overview).slice(0, 400),
        predictions: parsed.predictions.slice(0, 3).map((p) => ({
          fixture: String(p.fixture ?? "").slice(0, 120),
          sport: (["Cricket", "Football", "Tennis"] as const).includes(p.sport as never)
            ? p.sport
            : "Football",
          pick: String(p.pick ?? "").slice(0, 120),
          confidence: String(p.confidence ?? "").slice(0, 40),
          reasoning: String(p.reasoning ?? "").slice(0, 240),
          score: String(p.score ?? "").slice(0, 40),
        })),
        generatedAt: new Date().toISOString(),
      };
      cache = { at: Date.now(), data };
      return data;
    } catch {
      return FALLBACK;
    }
  },
);

export const scheduleAiPanelQueryOptions = queryOptions({
  queryKey: ["schedule-ai-panel"],
  queryFn: () => getScheduleAiPanel(),
  staleTime: 1000 * 60 * 60 * 3,
});
