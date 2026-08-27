import type { CricketFormat } from "@/utils/match-projections";
import type { WatchPlayer } from "@/utils/cricket-players";
import { cricketTeamCode } from "@/utils/cricket-keywords";

export interface MatchFaq {
  q: string;
  a: string;
}

function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function binom(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  const kk = Math.min(k, n - k);
  let r = 1;
  for (let i = 1; i <= kk; i++) {
    r = (r * (n - kk + i)) / i;
  }
  return Math.round(r);
}

function combinadic(n: number, k: number, idx: number): number[] {
  const combo: number[] = [];
  let x = idx;
  let remaining = k;
  for (let i = 0; i < n && remaining > 0; i++) {
    const ways = binom(n - i - 1, remaining - 1);
    if (x < ways) {
      combo.push(i);
      remaining -= 1;
    } else {
      x -= ways;
    }
  }
  while (combo.length < k) {
    combo.push(Math.min(n - 1, combo.length));
  }
  return combo;
}

function venueShortName(venue: string): string {
  const primary = venue.split(",")[0]?.trim();
  return primary && primary.length > 0 ? primary : venue;
}

function stageLabel(event: string): string {
  const beforeVs = event.split(":")[0]?.trim();
  return beforeVs && beforeVs.length > 0 ? beforeVs : event;
}

function homeSide(seriesName: string, teamA: string, teamB: string): "A" | "B" | null {
  const tour = seriesName.match(/tour of\s+([^,]+)/i);
  const host = (tour?.[1] ?? "").trim().toLowerCase();
  if (!host) return null;
  if (teamA.toLowerCase().includes(host) || host.includes(teamA.toLowerCase())) return "A";
  if (teamB.toLowerCase().includes(host) || host.includes(teamB.toLowerCase())) return "B";
  return null;
}

function seriesMatchIndex(event: string): number {
  const numbered = event.match(/(\d+)(?:st|nd|rd|th)/i);
  if (numbered?.[1]) return Number(numbered[1]);
  if (event.toLowerCase().includes("one-off")) return 1;
  return 2;
}

interface FaqCtx {
  slug: string;
  event: string;
  seriesName: string;
  venue: string;
  venueShort: string;
  time: string;
  date: string;
  teamA: string;
  teamB: string;
  format: CricketFormat;
  formatLabel: string;
  surface: string;
  winA: number;
  winB: number;
  totalA: string;
  totalB: string;
  stage: string;
  matchNo: number;
  host: string | null;
  favorite: string;
  underdog: string;
  favPct: number;
  underPct: number;
  phase: string;
  starA: WatchPlayer | null;
  starB: WatchPlayer | null;
  codePair: string;
}

/**
 * Questions every cricket fixture page must answer, because they mirror the
 * highest-intent searches ("who will win", "pitch report"). These are always
 * rendered so the FAQ schema covers them on all matches.
 */
function pinnedFaqs(ctx: FaqCtx): MatchFaq[] {
  const suited = ctx.surface.includes("SPIN")
    ? "spinners"
    : ctx.surface.includes("SEAM")
      ? "seamers"
      : ctx.surface.includes("HIGH-SCORING") || ctx.surface.includes("BATTERS")
        ? "batters"
        : ctx.surface.includes("BOWLING") || ctx.surface.includes("TWO-PACED")
          ? "bowlers"
          : "neither side of the game in particular";

  return [
    {
      q: `${ctx.codePair} — who will win today's ${ctx.stage}?`,
      a: `The Fairplay model leans ${ctx.favorite} at ${ctx.favPct}%, with ${ctx.underdog} at ${ctx.underPct}%, for ${ctx.teamA} vs ${ctx.teamB} at ${ctx.venueShort}. Projected totals are ${ctx.teamA} ${ctx.totalA} and ${ctx.teamB} ${ctx.totalB}. It is a lean off form, venue and a ${ctx.surface} surface — not a guaranteed result, so check the live price before you back either side.`,
    },
    {
      q: `What is the ${ctx.codePair} pitch report for ${ctx.venueShort}?`,
      a: `${ctx.venue} is tagged ${ctx.surface} for this ${ctx.formatLabel.toLowerCase()}, which suits ${suited}. That read is why ${ctx.teamA} projects at ${ctx.totalA} and ${ctx.teamB} at ${ctx.totalB}. Pitch and toss move ${ctx.phase} and totals markets on Fairplay more than they move the headline winner line.`,
    },
  ];
}

function buildFaqPool(ctx: FaqCtx): MatchFaq[] {
  const kickoff = ctx.date && ctx.date !== "TBD" ? `${ctx.date} at ${ctx.time}` : ctx.time;
  const hostBit = ctx.host ? `${ctx.host} at home` : `both sides as visitors`;

  return [
    {
      q: `How do I get a verified Fairplay ID before ${ctx.event} at ${ctx.venueShort}?`,
      a: `WhatsApp the Fairplay desk and request an ID tagged to ${ctx.seriesName}. Verification for ${ctx.teamA} vs ${ctx.teamB} is typically live within 180 seconds, so you can be funded before ${kickoff} at ${ctx.venue}.`,
    },
    {
      q: `Is the ${ctx.favPct}–${ctx.underPct} AI split for ${ctx.event} updating live?`,
      a: `Yes. ${ctx.favorite} is modelled at ${ctx.favPct}% and ${ctx.underdog} at ${ctx.underPct}% on a ${ctx.surface} read at ${ctx.venueShort}. The engine refreshes about every 30 seconds from liquidity, innings state, and ${ctx.phase} telemetry for this ${ctx.formatLabel}.`,
    },
    {
      q: `When does ${ctx.event} settle on Fairplay?`,
      a: `Elite wallets are credited within 180 minutes after ${ctx.event} is officially completed at ${ctx.venueShort}. ${ctx.formatLabel} result, innings, and fancy markets from ${ctx.teamA} vs ${ctx.teamB} post to the same exchange wallet — you do not wait on a bookmaker cycle.`,
    },
    {
      q: `Can I see professional market depth for ${ctx.teamA} vs ${ctx.teamB} at ${ctx.venueShort}?`,
      a: `The Fairplay terminal shows full back/lay ladders for ${ctx.event}, not just a headline price. ${ctx.format === "TEST" ? "Session and innings" : ctx.format === "ODI" ? "Middle-over and death-over" : "Powerplay and death-over"} books at ${ctx.venue} are the depth that actually moves on this ${ctx.formatLabel}.`,
    },
    {
      q: `How does ${ctx.venueShort} change the betting map for ${ctx.event}?`,
      a: `${ctx.venue} is tagged ${ctx.surface}. That tilts early ${ctx.format === "TEST" ? "session and new-ball" : ctx.format === "ODI" ? "powerplay and overs 11-40" : "Powerplay and death"} markets more than the overnight winner line. ${ctx.teamA}'s projected band is ${ctx.totalA}; ${ctx.teamB} sits at ${ctx.totalB}.`,
    },
    {
      q: `What do the projected ${ctx.formatLabel} totals for ${ctx.event} actually mean?`,
      a: `They are first-innings maps, not cash-out promises: ${ctx.teamA} ${ctx.totalA} and ${ctx.teamB} ${ctx.totalB} at ${ctx.venueShort}. Use them to frame totals and ${ctx.phase} fancy before toss premium on ${ctx.stage} disappears.`,
    },
    {
      q: ctx.starA && ctx.starB
        ? `Why are ${ctx.starA.name} and ${ctx.starB.name} the watch names for ${ctx.event}?`
        : `Which player markets matter most on ${ctx.event}?`,
      a: ctx.starA && ctx.starB
        ? `${ctx.starA.name} (${ctx.starA.team}, ${ctx.starA.roleLabel}, ${ctx.starA.impact}% impact) and ${ctx.starB.name} (${ctx.starB.team}, ${ctx.starB.roleLabel}, ${ctx.starB.impact}% impact) are the live-player edges on this ${ctx.surface} deck at ${ctx.venueShort}. Their wicket and runs markets usually lead the ${ctx.formatLabel} winner price.`
        : `Fairplay lists batter, bowler, and partnership fancy for ${ctx.teamA} vs ${ctx.teamB} at ${ctx.venueShort}. Those books react faster than the match-odds ladder once ${ctx.phase} is underway.`,
    },
    {
      q: `Where does the ${ctx.stage} sit inside ${ctx.seriesName}?`,
      a: ctx.matchNo <= 1
        ? `${ctx.stage} opens ${ctx.seriesName}. Opening prices on ${ctx.teamA} vs ${ctx.teamB} at ${ctx.venueShort} are widest before the venue is proven — Fairplay fills that gap in minutes, not overnight.`
        : ctx.matchNo >= 5
          ? `${ctx.stage} is the back end of ${ctx.seriesName}. Series fancy at ${ctx.venueShort} often lags the live ${ctx.formatLabel} winner market, which is why exchange depth on ${ctx.favorite} (${ctx.favPct}%) still matters.`
          : ctx.matchNo === 3
            ? `${ctx.stage} is the midpoint of ${ctx.seriesName}. ${ctx.favorite}'s ${ctx.favPct}% line can flip in one ${ctx.phase} window at ${ctx.venueShort} — that is the ${ctx.underdog} in-play window.`
            : `${ctx.stage} of ${ctx.seriesName} at ${ctx.venueShort} already prices form from the previous game. Fairplay still lets you back ${ctx.underdog} (${ctx.underPct}%) without a bookmaker margin.`,
    },
    {
      q: `Which Fairplay markets actually matter on this ${ctx.formatLabel}?`,
      a: ctx.format === "TEST"
        ? `Session, first-innings, and next-10-over ladders for ${ctx.event} at ${ctx.venueShort}. Red-ball ${ctx.surface} decks move those books harder than a simple match-winner, especially after Session 1.`
        : ctx.format === "ODI"
          ? `50-over totals, overs 11-40, and death-over brackets for ${ctx.teamA} (${ctx.totalA}) vs ${ctx.teamB} (${ctx.totalB}) at ${ctx.venueShort}. That is where ${ctx.stage} liquidity concentrates on Fairplay.`
          : `Powerplay, death overs, and sixes/boundaries on ${ctx.event}. A 20-over sprint at ${ctx.venueShort} prices the whole innings in those two windows — not in a pre-toss headline.`,
    },
    {
      q: `What should I do around toss for ${ctx.event} (${ctx.time})?`,
      a: `Toss-to-first-ball at ${ctx.venueShort} is when ${ctx.teamA}/${ctx.teamB} depth is thinnest. ${kickoff} is the overlay window for ${ctx.phase} markets on this ${ctx.surface} surface before the ${ctx.favPct}% favourite line fully adjusts.`,
    },
    {
      q: ctx.host
        ? `Does ${ctx.host} home advantage at ${ctx.venueShort} change the ${ctx.favPct}% line?`
        : `Is there a home read for ${ctx.event} at ${ctx.venueShort}?`,
      a: ctx.host
        ? `Yes — ${ctx.host} bring local information to ${ctx.venue} (${ctx.surface}). That is already in ${ctx.favorite}'s ${ctx.favPct}% model, but Fairplay still carries ${ctx.underdog} at ${ctx.underPct}% if the new ball or spin does not match the card.`
        : `This fixture is listed with ${hostBit}. Trade the ${ctx.formatLabel} on pitch telemetry at ${ctx.venueShort} rather than a home-crowd cliché — ${ctx.teamA} ${ctx.winA}% / ${ctx.teamB} ${ctx.winB}% is the live split.`,
    },
    {
      q: `When is the best in-play window on ${ctx.event}?`,
      a: `After ${ctx.phase} at ${ctx.venueShort}. That is when ${ctx.formatLabel} fancy (next ${ctx.format === "TEST" ? "10 overs" : "over"}) on ${ctx.teamA} vs ${ctx.teamB} is sharper on exchange than on a book, and when ${ctx.favorite}'s ${ctx.favPct}% line is most likely to gap.`,
    },
  ];
}

export function getMatchFaqs(input: {
  slug: string;
  event: string;
  seriesName: string;
  venue: string;
  time?: string;
  date?: string;
  teamA: string;
  teamB: string;
  format: CricketFormat;
  formatLabel: string;
  surface: string;
  winA: number;
  winB: number;
  totalA: string;
  totalB: string;
  players?: readonly WatchPlayer[];
  limit?: number;
}): MatchFaq[] {
  const limit = input.limit ?? 6;
  const home = homeSide(input.seriesName, input.teamA, input.teamB);
  const favorite = input.winA >= input.winB ? input.teamA : input.teamB;
  const players = input.players ?? [];
  const ctx: FaqCtx = {
    slug: input.slug,
    event: input.event,
    seriesName: input.seriesName,
    venue: input.venue,
    venueShort: venueShortName(input.venue),
    time: input.time || "19:30 IST",
    date: input.date || "TBD",
    teamA: input.teamA,
    teamB: input.teamB,
    format: input.format,
    formatLabel: input.formatLabel,
    surface: input.surface,
    winA: input.winA,
    winB: input.winB,
    totalA: input.totalA,
    totalB: input.totalB,
    stage: stageLabel(input.event),
    matchNo: seriesMatchIndex(input.event),
    host: home === "A" ? input.teamA : home === "B" ? input.teamB : null,
    favorite,
    underdog: favorite === input.teamA ? input.teamB : input.teamA,
    favPct: Math.max(input.winA, input.winB),
    underPct: 100 - Math.max(input.winA, input.winB),
    phase:
      input.format === "TEST" ? "Session 2" : input.format === "ODI" ? "overs 11-40" : "the Powerplay",
    starA: players.find((player) => player.team === input.teamA) ?? players[0] ?? null,
    starB: players.find((player) => player.team === input.teamB) ?? players[1] ?? null,
    codePair: `${cricketTeamCode(input.teamA)} vs ${cricketTeamCode(input.teamB)}`,
  };

  const pinned = pinnedFaqs(ctx);
  const rotatingSlots = Math.max(0, limit - pinned.length);
  const pool = buildFaqPool(ctx);
  const n = pool.length;
  if (n === 0 || rotatingSlots === 0) return [...pinned, ...pool].slice(0, limit);

  const picked: MatchFaq[] = [...pinned];
  const used = new Set(pinned.map((faq) => faq.q));

  if (n > rotatingSlots) {
    const totalCombos = Math.max(1, binom(n, rotatingSlots));
    const comboIdx = hashSeed(`faq|${input.slug}|${input.venue}|${input.event}`) % totalCombos;
    for (const index of combinadic(n, rotatingSlots, comboIdx)) {
      const faq = pool[index];
      if (!faq || used.has(faq.q)) continue;
      used.add(faq.q);
      picked.push(faq);
    }
  }
  for (const faq of pool) {
    if (picked.length >= limit) break;
    if (used.has(faq.q)) continue;
    used.add(faq.q);
    picked.push(faq);
  }
  return picked.slice(0, limit);
}
