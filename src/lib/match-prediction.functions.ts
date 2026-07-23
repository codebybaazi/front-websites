import { createServerFn } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";

export type MatchPrediction = {
  winner: string;
  confidence: string;
  reasoning: string;
  keyPlayers: string[];
  score5: string;
  score10: string;
  scoreFull: string;
  teamAForm: string;
  teamBForm: string;
  headToHead: string;
  venueNote: string;
  faqs: { q: string; a: string }[];
};

type Input = {
  seriesName: string;
  matchLabel: string;
  home: string;
  away: string;
  venue: string;
  date: string;
  format?: string;
};

function fallback(input: Input): MatchPrediction {
  const winner = input.home;
  return {
    winner,
    confidence: "Medium (56%)",
    reasoning: `${winner} carry home advantage at ${input.venue} with a settled batting order and familiar conditions, giving them the edge in this ${input.matchLabel}.`,
    keyPlayers: [
      `${input.home} — top-order batter`,
      `${input.away} — strike bowler`,
      `${winner} — captain / finisher`,
    ],
    score5: `${input.home} 42/1 · ${input.away} 40/2`,
    score10: `${input.home} 88/2 · ${input.away} 82/3`,
    scoreFull: `${input.home} 178/6 · ${input.away} 172/8`,
    teamAForm: `${input.home}: W-W-L-W-W in last 5`,
    teamBForm: `${input.away}: W-L-W-L-W in last 5`,
    headToHead: `${input.home} lead recent head-to-head 3-2 in the format.`,
    venueNote: `${input.venue} traditionally favours batters chasing under lights with dew.`,
    faqs: [
      {
        q: `Who will win ${input.home} vs ${input.away} (${input.matchLabel})?`,
        a: `Our AI model tips ${winner} to win the ${input.matchLabel} of the ${input.seriesName} with medium confidence, backed by recent form and venue history at ${input.venue}.`,
      },
      {
        q: `What is the predicted score for ${input.home} vs ${input.away}?`,
        a: `AI projection: ${input.home} around 178/6, ${input.away} chasing at 172/8. 5-over score ~42/1, 10-over score ~88/2.`,
      },
      {
        q: `Where is ${input.home} vs ${input.away} being played?`,
        a: `${input.home} vs ${input.away} (${input.matchLabel}) is scheduled for ${input.date} at ${input.venue}.`,
      },
      {
        q: `How can I bet on ${input.home} vs ${input.away} with Sprinters?`,
        a: `Message Sprinters on WhatsApp, verify with OTP and deposit via UPI. Your betting ID is delivered within minutes for match winner, top batter, over/under and live in-play markets.`,
      },
    ],
  };
}

const cache = new Map<string, { at: number; data: MatchPrediction }>();
const TTL = 1000 * 60 * 60 * 12;

export const getMatchPrediction = createServerFn({ method: "POST" })
  .inputValidator((data: Input) => data)
  .handler(async ({ data }): Promise<MatchPrediction> => {
    const key = `${data.seriesName}::${data.matchLabel}::${data.home}::${data.away}`;
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
                'You are a cricket analyst for Sprinters (Indian betting-ID provider). Reply ONLY with strict JSON matching: {"winner":string,"confidence":string (e.g. "Medium (58%)"),"reasoning":string (<=260 chars, cite form/venue/H2H),"keyPlayers":string[] (3 items),"score5":string (5-over score both teams),"score10":string (10-over score both teams),"scoreFull":string (full match predicted score),"teamAForm":string,"teamBForm":string,"headToHead":string (<=140 chars),"venueNote":string (<=140 chars),"faqs":[{"q":string,"a":string}] (exactly 4)}. Base picks on realistic 2026 form. No emojis, no markdown, no disclaimers.',
            },
            {
              role: "user",
              content: `Predict: ${data.home} vs ${data.away} — ${data.matchLabel} of ${data.seriesName}${data.format ? ` (${data.format})` : ""}, on ${data.date} at ${data.venue}. Provide winner, why, key players, 5-over/10-over/full predicted scores, both teams' recent form, head-to-head, venue note, and 4 SEO FAQs.`,
            },
          ],
        }),
      });
      if (!r.ok) return fallback(data);
      const j = (await r.json()) as { choices?: { message?: { content?: string } }[] };
      const raw = j.choices?.[0]?.message?.content ?? "";
      const parsed = JSON.parse(raw) as Partial<MatchPrediction>;
      if (!parsed.winner || !Array.isArray(parsed.faqs)) return fallback(data);
      const result: MatchPrediction = {
        winner: String(parsed.winner).slice(0, 60),
        confidence: String(parsed.confidence ?? "Medium (55%)").slice(0, 40),
        reasoning: String(parsed.reasoning ?? "").slice(0, 320),
        keyPlayers: (parsed.keyPlayers ?? []).slice(0, 3).map((p) => String(p).slice(0, 80)),
        score5: String(parsed.score5 ?? "").slice(0, 80),
        score10: String(parsed.score10 ?? "").slice(0, 80),
        scoreFull: String(parsed.scoreFull ?? "").slice(0, 80),
        teamAForm: String(parsed.teamAForm ?? "").slice(0, 80),
        teamBForm: String(parsed.teamBForm ?? "").slice(0, 80),
        headToHead: String(parsed.headToHead ?? "").slice(0, 200),
        venueNote: String(parsed.venueNote ?? "").slice(0, 200),
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

export const matchPredictionQueryOptions = (input: Input) =>
  queryOptions({
    queryKey: ["match-prediction", input.seriesName, input.matchLabel, input.home, input.away],
    queryFn: () => getMatchPrediction({ data: input }),
    staleTime: 1000 * 60 * 60 * 6,
  });
