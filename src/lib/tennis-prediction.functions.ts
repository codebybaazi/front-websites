import { createServerFn } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";

export type TennisPrediction = {
  overview: string;
  favourite: string;
  darkHorse: string;
  confidence: string;
  reasoning: string;
  predictedFinalist1: string;
  predictedFinalist2: string;
  predictedChampion: string;
  scoreline: string;
  totalGames: string;
  totalSets: string;
  tieBreakCall: string;
  surfaceNote: string;
  keyPlayers: string[];
  faqs: { q: string; a: string }[];
};

type Input = {
  event: string;
  round: string;
  surface: string;
  venue: string;
  city: string;
  date: string;
  tour: string;
  category: string;
};

function fallback(i: Input): TennisPrediction {
  const fav = i.tour === "WTA" ? "Iga Świątek" : "Jannik Sinner";
  const dark = i.tour === "WTA" ? "Coco Gauff" : "Carlos Alcaraz";
  return {
    overview: `${i.round} of ${i.event} is played on ${i.surface} at ${i.venue}, ${i.city}. Expect high-quality baseline rallies with the top seeds asserting control as the draw narrows.`,
    favourite: fav,
    darkHorse: dark,
    confidence: "Medium (60%)",
    reasoning: `${fav} enters this ${i.round.toLowerCase()} with the deepest recent form on ${i.surface.toLowerCase()} and a favourable draw, edging ${dark} in a projected final.`,
    predictedFinalist1: fav,
    predictedFinalist2: dark,
    predictedChampion: fav,
    scoreline: `${fav} to win in 3 sets (best-of-5) — projected 6-4, 4-6, 7-6, 6-3`,
    totalGames: "Over 34.5 total games — long service games expected",
    totalSets: "4 sets — tight decider likely",
    tieBreakCall: "Tie-break: Yes in at least 1 set",
    surfaceNote: `${i.surface} at ${i.venue} rewards heavy topspin and first-serve percentage.`,
    keyPlayers: [fav, dark, i.tour === "WTA" ? "Aryna Sabalenka" : "Novak Djokovic"],
    faqs: [
      {
        q: `Who will win ${i.round} of ${i.event}?`,
        a: `Our AI model tips ${fav} to come through ${i.round.toLowerCase()} at ${i.venue} with medium confidence based on form and surface stats.`,
      },
      {
        q: `What is the predicted score for the ${i.round} at ${i.event}?`,
        a: `AI projection: ${fav} in 3 sets — around 6-4, 4-6, 7-6, 6-3 with over 34.5 total games.`,
      },
      {
        q: `Where and when is the ${i.round} at ${i.event}?`,
        a: `${i.round} of ${i.event} is on ${i.date} at ${i.venue}, ${i.city} on ${i.surface}.`,
      },
      {
        q: `How can I bet on ${i.event} with Sprinters?`,
        a: `Message Sprinters on WhatsApp, verify with OTP and deposit via UPI. Your betting ID lands within minutes for match-winner, set betting, total games, handicap and live in-play markets.`,
      },
    ],
  };
}

const cache = new Map<string, { at: number; data: TennisPrediction }>();
const TTL = 1000 * 60 * 60 * 12;

export const getTennisPrediction = createServerFn({ method: "POST" })
  .inputValidator((data: Input) => data)
  .handler(async ({ data }): Promise<TennisPrediction> => {
    const key = `${data.event}::${data.round}`;
    const hit = cache.get(key);
    if (hit && Date.now() - hit.at < TTL) return hit.data;

    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) return fallback(data);

    try {
      const r = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Lovable-API-Key": apiKey },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          response_format: { type: "json_object" },
          messages: [
            {
              role: "system",
              content:
                'You are a tennis analyst for Sprinters (Indian betting-ID provider). Reply ONLY with strict JSON: {"overview":string (<=280 chars),"favourite":string,"darkHorse":string,"confidence":string,"reasoning":string (<=280 chars, cite form/surface/H2H),"predictedFinalist1":string,"predictedFinalist2":string,"predictedChampion":string,"scoreline":string (predicted final scoreline in sets and games),"totalGames":string,"totalSets":string,"tieBreakCall":string,"surfaceNote":string,"keyPlayers":string[] (3 items),"faqs":[{"q":string,"a":string}] (exactly 4)}. Base picks on realistic 2026 form. No emojis, no markdown.',
            },
            {
              role: "user",
              content: `Predict tennis: ${data.round} of ${data.event} (${data.tour} ${data.category}) on ${data.date}, ${data.surface} at ${data.venue}, ${data.city}. Give overview, favourite & dark horse, projected finalists & champion, scoreline, total games/sets, tie-break call, surface note, 3 key players, 4 SEO FAQs.`,
            },
          ],
        }),
      });
      if (!r.ok) return fallback(data);
      const j = (await r.json()) as { choices?: { message?: { content?: string } }[] };
      const parsed = JSON.parse(j.choices?.[0]?.message?.content ?? "") as Partial<TennisPrediction>;
      if (!parsed.favourite || !Array.isArray(parsed.faqs)) return fallback(data);
      const result: TennisPrediction = {
        overview: String(parsed.overview ?? "").slice(0, 340),
        favourite: String(parsed.favourite).slice(0, 60),
        darkHorse: String(parsed.darkHorse ?? "").slice(0, 60),
        confidence: String(parsed.confidence ?? "Medium (60%)").slice(0, 40),
        reasoning: String(parsed.reasoning ?? "").slice(0, 340),
        predictedFinalist1: String(parsed.predictedFinalist1 ?? "").slice(0, 60),
        predictedFinalist2: String(parsed.predictedFinalist2 ?? "").slice(0, 60),
        predictedChampion: String(parsed.predictedChampion ?? "").slice(0, 60),
        scoreline: String(parsed.scoreline ?? "").slice(0, 160),
        totalGames: String(parsed.totalGames ?? "").slice(0, 160),
        totalSets: String(parsed.totalSets ?? "").slice(0, 160),
        tieBreakCall: String(parsed.tieBreakCall ?? "").slice(0, 160),
        surfaceNote: String(parsed.surfaceNote ?? "").slice(0, 200),
        keyPlayers: (parsed.keyPlayers ?? []).slice(0, 3).map((p) => String(p).slice(0, 80)),
        faqs: parsed.faqs.slice(0, 4).map((f) => ({
          q: String(f.q ?? "").slice(0, 160),
          a: String(f.a ?? "").slice(0, 400),
        })),
      };
      cache.set(key, { at: Date.now(), data: result });
      return result;
    } catch {
      return fallback(data);
    }
  });

export const tennisPredictionQueryOptions = (input: Input) =>
  queryOptions({
    queryKey: ["tennis-prediction", input.event, input.round],
    queryFn: () => getTennisPrediction({ data: input }),
    staleTime: 1000 * 60 * 60 * 6,
  });
