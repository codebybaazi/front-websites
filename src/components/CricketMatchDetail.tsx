import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import type { CricketProjection } from "@/utils/match-projections";
import type { WatchPlayer } from "@/utils/cricket-players";
import type { MatchFaq } from "@/utils/match-faqs";
import type { RelatedFixture } from "@/utils/related-fixtures";
import { faqPageNode } from "@/utils/faq-schema";
import { JsonLd } from "@/components/JsonLd";
import { sportsEventGraph } from "@/utils/match-seo";
import { cricketKeywordCluster } from "@/utils/cricket-keywords";
import { getMatchSlug } from "@/utils/slugify";
import { waLink } from "@/lib/whatsapp";

interface MatchRecord {
  event: string;
  date: string;
  time: string;
  venue: string;
  seriesName: string;
}

interface BlogCard {
  slug: string;
  title: string;
  category: string;
  img: string;
}

interface CricketMatchDetailProps {
  match: MatchRecord;
  teamA: string;
  teamB: string;
  projection: CricketProjection;
  watchPlayers: WatchPlayer[];
  whyBet: string[];
  relatedFixtures: RelatedFixture[];
  relatedBlogs: BlogCard[];
  faqs: MatchFaq[];
}

function MiniPitch({ accent }: { accent: boolean }) {
  return (
    <div
      className={`relative h-40 rounded-2xl overflow-hidden border ${accent ? "border-primary/30" : "border-white/10"}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#5f8a32_0%,#8fb84a_18%,#c9b36a_50%,#8fb84a_82%,#5f8a32_100%)]" />
      <div className="absolute inset-y-3 left-1/2 w-[4.5rem] -translate-x-1/2 rounded-[2px] bg-[#d7c07a]" />
      <div className="absolute left-1/2 top-5 h-5 w-14 -translate-x-1/2 border-y-2 border-white/70" />
      <div className="absolute left-1/2 bottom-5 h-5 w-14 -translate-x-1/2 border-y-2 border-white/70" />
      <div className="absolute left-1/2 top-4 flex -translate-x-1/2 gap-0.5">
        <span className="h-3 w-0.5 rounded-full bg-white" />
        <span className="h-3 w-0.5 rounded-full bg-white" />
        <span className="h-3 w-0.5 rounded-full bg-white" />
      </div>
      <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 gap-0.5">
        <span className="h-3 w-0.5 rounded-full bg-white" />
        <span className="h-3 w-0.5 rounded-full bg-white" />
        <span className="h-3 w-0.5 rounded-full bg-white" />
      </div>
    </div>
  );
}

/** Plain-language pitch read derived from the surface tag the projection already sets. */
function pitchReadFor(surface: string, format: string): { suitedTo: string; note: string; tossNote: string } {
  if (surface.includes("SPIN")) {
    return {
      suitedTo: "Spinners",
      note: "Expect grip and turn to arrive early, so middle-over run rates dip and wickets cluster once the shine is gone.",
      tossNote: "Batting first tends to be the safer side here, because chasing on a turning surface gets harder under lights.",
    };
  }
  if (surface.includes("SEAM")) {
    return {
      suitedTo: "Seamers",
      note: "The new ball does the most damage, with lateral movement in the opening overs before batting gets easier.",
      tossNote: "Bowling first is usually favoured while there is still moisture and swing on offer.",
    };
  }
  if (surface.includes("HIGH-SCORING") || surface.includes("BATTERS")) {
    return {
      suitedTo: "Batters",
      note: "True bounce and carry make this a stroke-making ground, so totals sit above the format average.",
      tossNote: "Either side can bat first here; the bigger edge is usually in the totals market, not the toss.",
    };
  }
  if (surface.includes("BOWLING") || surface.includes("TWO-PACED")) {
    return {
      suitedTo: "Bowlers",
      note: "Pace off the surface varies, which punishes hard-handed batting and keeps totals below par.",
      tossNote: "Bowling first is the common call, with the surface slowing further as the game goes on.",
    };
  }
  return {
    suitedTo: "Balanced",
    note: `Nothing extreme in either direction, so ${format === "TEST" ? "session" : "phase"} scoring tracks close to the format average.`,
    tossNote: "The toss is close to neutral, so price the batting line-ups rather than the coin.",
  };
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-primary text-[10px] font-black uppercase tracking-[0.35em] mb-3">{children}</p>
  );
}

export function CricketMatchDetail({
  match,
  teamA,
  teamB,
  projection,
  watchPlayers,
  whyBet,
  relatedFixtures,
  relatedBlogs,
  faqs,
}: CricketMatchDetailProps) {
  const kickoff = match.time && match.time !== "TBD" ? match.time : "19:30 IST";
  const cluster = cricketKeywordCluster({
    teamA,
    teamB,
    event: match.event,
    seriesName: match.seriesName,
    venue: match.venue,
    formatLabel: projection.formatLabel,
  });
  const { codePair, venueShort, stage, codeA, codeB } = cluster;
  const fixtureName = `${teamA} vs ${teamB}`;
  const favorite = projection.winA >= projection.winB ? teamA : teamB;
  const favPct = Math.max(projection.winA, projection.winB);
  const inningsLabel = projection.format === "TEST" ? "Day 1 total" : "1st innings";
  const pitchRead = pitchReadFor(projection.surface, projection.format);
  const overview = `${codePair} ${stage} prediction: ${fixtureName} at ${venueShort} on ${match.date || "a date still to be confirmed"}. The model projects ${teamA} at ${projection.totalA} and ${teamB} at ${projection.totalB} across ${projection.format === "TEST" ? "day-one sessions" : "first-innings phases"}, with a ${projection.surface} pitch read. Live Fairplay odds still move with the toss.`;
  const takeaways = whyBet.slice(0, 4);
  const firstPhase = projection.phases[0];
  const lastPhase = projection.phases[projection.phases.length - 1];
  const marketTiles = [
    { label: `Projected ${inningsLabel}`, value: `${projection.totalA} — ${projection.totalB}`, hint: `${teamA} ${projection.totalA} vs ${teamB} ${projection.totalB}` },
    { label: firstPhase?.phase ?? "Powerplay", value: `${firstPhase?.teamA ?? "—"} / ${firstPhase?.teamB ?? "—"}`, hint: `${firstPhase?.phase ?? "Opening phase"} scoring` },
    { label: lastPhase?.phase ?? "Death overs", value: `${lastPhase?.teamA ?? "—"} / ${lastPhase?.teamB ?? "—"}`, hint: `${lastPhase?.phase ?? "Closing phase"} scoring` },
    { label: `${teamA} win`, value: `${projection.winA}%`, hint: `${teamA} win probability ${projection.winA}%` },
    { label: `${teamB} win`, value: `${projection.winB}%`, hint: `${teamB} win probability ${projection.winB}%` },
    { label: "Format", value: projection.formatLabel, hint: projection.formatLabel },
    { label: "Surface", value: projection.surface, hint: `${projection.surface} pitch` },
    { label: "Favorite", value: favorite, hint: `${favorite} ${favPct}%` },
  ];
  const markets = [
    { name: "Match winner", detail: `${favorite} is the model pick at ${favPct}% for this ${projection.formatLabel.toLowerCase()} at ${match.venue}. Live winner still moves with toss and ${projection.surface.toLowerCase()} conditions.` },
    { name: `${inningsLabel} totals`, detail: `${teamA} is projected at ${projection.totalA} and ${teamB} at ${projection.totalB}. Trade the innings line in phases rather than waiting for the full total.` },
    { name: "Phase / fancy", detail: firstPhase && lastPhase
      ? `${firstPhase.phase} sits at ${firstPhase.teamA} / ${firstPhase.teamB}; ${lastPhase.phase} at ${lastPhase.teamA} / ${lastPhase.teamB}. Fancy and session markets track these bands.`
      : `Session and fancy markets track the ${projection.formatLabel.toLowerCase()} phase map on this ${projection.surface.toLowerCase()} deck.` },
  ];

  const faqNode = faqPageNode(faqs);
  const jsonLd = sportsEventGraph({
    name: fixtureName,
    description: overview,
    slug: getMatchSlug(match.seriesName, match),
    date: match.date,
    venue: match.venue,
    sport: "Cricket",
    competitors: [
      { type: "SportsTeam", name: teamA },
      { type: "SportsTeam", name: teamB },
    ],
    faqNode,
  });

  return (
    <article className="flex flex-col bg-background text-foreground min-h-screen">
      <JsonLd data={jsonLd} />

      <header className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,100,0,0.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <p className="text-center text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            {match.seriesName} · {stage} · {projection.formatLabel}
          </p>
          <h1 className="text-center text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-[0.9] mb-10">
            {teamA} <span className="text-primary not-italic">vs</span> {teamB}
            <span className="mt-4 block text-lg md:text-2xl not-italic font-black tracking-[0.12em] text-primary/90">
              {codePair} {stage} prediction &amp; pitch report
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-center text-white/60 text-sm md:text-base leading-relaxed">
            {overview}
          </p>

          <div className="relative mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 p-6 md:p-10">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-primary text-black text-xl md:text-2xl font-black italic">
                  {codeA}
                </div>
                <p className="text-lg md:text-2xl font-black italic uppercase text-white">{teamA}</p>
              </div>
              <div className="text-center min-w-[8.5rem]">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Projected {inningsLabel}</p>
                <p className="text-3xl md:text-5xl font-black italic text-white tabular-nums leading-none">
                  {projection.totalA}<span className="text-primary px-1">:</span>{projection.totalB}
                </p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-primary">{projection.formatLabel} · {projection.surface}</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white/10 text-white text-xl md:text-2xl font-black italic">
                  {codeB}
                </div>
                <p className="text-lg md:text-2xl font-black italic uppercase text-white">{teamB}</p>
              </div>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 text-center">
              <li className="bg-background/90 px-3 py-4">
                <Calendar className="mx-auto mb-1 h-3.5 w-3.5 text-primary" />
                <time className="block text-[11px] font-bold text-white">{match.date || "TBD"}</time>
              </li>
              <li className="bg-background/90 px-3 py-4">
                <Clock className="mx-auto mb-1 h-3.5 w-3.5 text-primary" />
                <span className="block text-[11px] font-bold text-white">{kickoff}</span>
              </li>
              <li className="bg-background/90 px-3 py-4">
                <MapPin className="mx-auto mb-1 h-3.5 w-3.5 text-primary" />
                <span className="block text-[11px] font-bold text-white line-clamp-1">{match.venue}</span>
              </li>
              <li className="bg-background/90 px-3 py-4">
                <Trophy className="mx-auto mb-1 h-3.5 w-3.5 text-primary" />
                <span className="block text-[11px] font-bold text-white">{projection.surface}</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/schedule"
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-primary"
            >
              <ArrowLeft className="w-3 h-3" /> All cricket fixtures
            </Link>
          </div>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 pb-24 space-y-20">
        <section aria-labelledby="team-details-heading">
          <SectionEyebrow>Match-up identity</SectionEyebrow>
          <h2 id="team-details-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
            Team details for {fixtureName}
          </h2>
          <p className="text-white/55 max-w-3xl mb-10">
            How {teamA} and {teamB} are expected to play this {projection.formatLabel.toLowerCase()} at {match.venue} on a {projection.surface} surface.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { team: teamA, code: codeA, total: projection.totalA, win: projection.winA, accent: true },
              { team: teamB, code: codeB, total: projection.totalB, win: projection.winB, accent: false },
            ].map((side) => (
              <div key={side.team} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/40 p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">{projection.formatLabel}</p>
                    <h3 className="text-2xl font-black italic uppercase text-white">{side.team}</h3>
                  </div>
                  <span className={`rounded-xl px-3 py-2 text-sm font-black italic ${side.accent ? "bg-primary text-black" : "bg-white/10 text-white"}`}>
                    {side.code}
                  </span>
                </div>
                <MiniPitch accent={side.accent} />
                <dl className="mt-6 grid grid-cols-1 gap-4">
                  <div>
                    <dt className="text-[10px] font-black uppercase tracking-widest text-white/35">Projected {inningsLabel}</dt>
                    <dd className="mt-1 text-sm font-semibold text-white">{side.total}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-black uppercase tracking-widest text-white/35">Win probability</dt>
                    <dd className="mt-1 text-sm font-semibold text-white/70">{side.win}% · {projection.surface}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="predictions-heading" className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 md:p-10">
          <SectionEyebrow>Win board</SectionEyebrow>
          <h2 id="predictions-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-3">
            {fixtureName} predictions
          </h2>
          <p className="text-white/55 max-w-3xl mb-10">
            Fairplay win probabilities for this {projection.formatLabel}: {teamA} {projection.winA}% and {teamB} {projection.winB}% at {match.venue}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { label: teamA, p: projection.winA, tone: "home" as const },
              { label: teamB, p: projection.winB, tone: "away" as const },
            ].map((col) => (
              <div
                key={col.label}
                className={`rounded-3xl p-6 text-center border ${
                  col.tone === "home" ? "bg-primary/15 border-primary/40" : "bg-white/5 border-white/10"
                }`}
              >
                <p className="text-[10px] font-black uppercase tracking-widest text-white/45 mb-2">{col.label}</p>
                <p className="text-5xl font-black italic tabular-nums text-white">{col.p}<span className="text-2xl text-primary">%</span></p>
                <div className="mt-4 h-1.5 w-full rounded-full bg-black/40 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${col.p}%` }}
                    className={`h-full ${col.tone === "home" ? "bg-primary" : "bg-white/50"}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { k: "Format", v: projection.formatLabel },
              { k: "Surface", v: projection.surface },
              { k: `${teamA} total`, v: projection.totalA },
              { k: `${teamB} total`, v: projection.totalB },
            ].map((item) => (
              <div key={item.k} className="rounded-2xl bg-black/35 border border-white/5 px-4 py-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.k}</p>
                <p className="mt-2 text-sm font-black italic uppercase text-primary">{item.v}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="ai-overview-heading" className="relative overflow-hidden rounded-[2.25rem] border border-primary/25 bg-primary/5 p-6 md:p-12">
          <Sparkles className="absolute -right-6 -top-6 h-28 w-28 text-primary/20" aria-hidden="true" />
          <SectionEyebrow>AI match overview</SectionEyebrow>
          <h2 id="ai-overview-heading" className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-6 max-w-4xl">
            {fixtureName} — the story so far
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-4xl">{overview}</p>
          <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {takeaways.map((line, i) => (
              <li key={line} className="flex gap-4 rounded-2xl bg-black/30 border border-white/5 p-5">
                <span className="text-primary font-black italic text-xl">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-white/70 leading-relaxed">{line}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="who-wins-heading">
          <SectionEyebrow>Match winner lean</SectionEyebrow>
          <h2 id="who-wins-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
            {codePair} — who will win today's match?
          </h2>
          <p className="text-white/55 max-w-3xl mb-10">
            The Fairplay model leans {favorite} at {favPct}% in this {stage} of {match.seriesName} at {match.venue}. Phase scoring and {projection.surface.toLowerCase()} conditions still move the live {codePair} winner line, so treat {favPct}% as a lean rather than a lock.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 md:p-12 text-black">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3">Predicted winner</p>
              <p className="text-4xl md:text-6xl font-black italic uppercase leading-none">{favorite}</p>
              <p className="mt-4 text-lg font-bold">{favPct}% model confidence — live-trade friendly</p>
              <p className="mt-6 text-sm font-medium opacity-80">{stage} · {projection.formatLabel}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: `${teamA} win`, value: `${projection.winA}%` },
                { label: `${teamB} win`, value: `${projection.winB}%` },
                { label: `${teamA} ${inningsLabel}`, value: projection.totalA },
                { label: `${teamB} ${inningsLabel}`, value: projection.totalB },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-card/40 p-5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.label}</p>
                  <p className="mt-2 text-base font-black italic uppercase text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="pitch-report-heading">
          <SectionEyebrow>Pitch and conditions</SectionEyebrow>
          <h2 id="pitch-report-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
            {codePair} pitch report — {venueShort}
          </h2>
          <p className="text-white/55 max-w-3xl mb-10">
            {venueShort} is tagged {projection.surface} for this {projection.formatLabel.toLowerCase()}. {pitchRead.note} That is what shapes the {stage} totals and toss markets more than the headline winner price.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-[1.5rem] overflow-hidden border border-white/10">
            {[
              { label: "Venue", value: venueShort },
              { label: "Surface", value: projection.surface },
              { label: "Best suited to", value: pitchRead.suitedTo },
              { label: `Projected ${inningsLabel}`, value: `${projection.totalA} / ${projection.totalB}` },
            ].map((item) => (
              <div key={item.label} className="bg-background p-5">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.label}</p>
                <p className="mt-2 text-base font-black italic uppercase text-white">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/55 max-w-3xl">
            <strong className="text-white">Toss read:</strong> {pitchRead.tossNote} Confirm the {codePair} slip before you send — the live board is the only price that settles.
          </p>
        </section>

        {watchPlayers.length > 0 && (
          <section aria-labelledby="key-players-heading">
            <SectionEyebrow>Impact names</SectionEyebrow>
            <h2 id="key-players-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
              Key players to watch in {fixtureName}
            </h2>
            <p className="text-white/55 max-w-3xl mb-10">
              Names that price batter, bowler and fancy markets for this {projection.formatLabel.toLowerCase()} at {match.venue}.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[teamA, teamB].map((team, ti) => (
                <div key={team}>
                  <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-4">{team} watchlist</h3>
                  <div className="space-y-4">
                    {watchPlayers
                      .filter((player) => player.team === team)
                      .map((player, i) => (
                        <article key={player.name} className="flex gap-4 rounded-2xl border border-white/10 bg-card/30 p-4 hover:border-primary/40 transition-colors">
                          <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-black italic ${ti === 0 ? "bg-primary text-black" : "bg-white/10 text-white"}`}>
                            {i + 1}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-lg font-black italic uppercase text-white leading-tight">{player.name}</h4>
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-1">{player.roleLabel} · {player.impact}% impact</p>
                          </div>
                        </article>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="scoreline-heading" className="rounded-[2.25rem] border border-white/10 overflow-hidden">
          <div className="bg-black/50 p-6 md:p-10 border-b border-white/10">
            <SectionEyebrow>Scoreboard & markets</SectionEyebrow>
            <h2 id="scoreline-heading" className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-4">
              Projected scoreline and phase markets for {fixtureName}
            </h2>
            <p className="text-white/60 max-w-3xl">
              {inningsLabel} bands on a {projection.surface} deck: {teamA} {projection.totalA} and {teamB} {projection.totalB}. Trade each phase on Fairplay before toss premium disappears.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {marketTiles.map((tile, i) => (
              <div key={tile.label} className={`p-5 md:p-6 border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : "bg-transparent"} ${i < 4 ? "border-b" : ""} md:border-r md:[&:nth-child(4n)]:border-r-0`}>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{tile.label}</p>
                <p className="mt-2 text-xl md:text-2xl font-black italic uppercase text-white">{tile.value}</p>
                <p className="sr-only">{tile.hint}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {markets.map((market) => (
              <article key={market.name} className="bg-background p-6">
                <h3 className="text-sm font-black italic uppercase text-primary mb-2">{market.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{market.detail}</p>
              </article>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <caption className="sr-only">Projected {projection.formatLabel} scoring phases for {fixtureName}</caption>
              <thead>
                <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40">
                  <th className="p-5">Match phase</th>
                  <th className="p-5 text-right">{teamA}</th>
                  <th className="p-5 text-right">{teamB}</th>
                </tr>
              </thead>
              <tbody>
                {projection.phases.map((row) => (
                  <tr key={row.phase} className="border-b border-white/5">
                    <th scope="row" className="p-5 text-sm font-bold text-white/80">{row.phase}</th>
                    <td className="p-5 text-right font-black italic text-primary">{row.teamA}</td>
                    <td className="p-5 text-right font-black italic text-white">{row.teamB}</td>
                  </tr>
                ))}
                <tr className="bg-primary/10">
                  <th scope="row" className="p-5 text-sm font-black uppercase text-white">{inningsLabel}</th>
                  <td className="p-5 text-right font-black italic text-primary">{projection.totalA}</td>
                  <td className="p-5 text-right font-black italic text-white">{projection.totalB}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="why-bet-heading">
          <SectionEyebrow>Trading notes</SectionEyebrow>
          <h2 id="why-bet-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-8">
            Why bet {fixtureName} on Fairplay?
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyBet.map((line, i) => (
              <li key={line} className="relative rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-primary/10 to-transparent p-7">
                <span className="absolute top-5 right-6 text-5xl font-black italic text-primary/20">{i + 1}</span>
                <p className="relative text-sm md:text-base text-white/75 leading-relaxed pr-10">{line}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="fixture-details-heading" className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-dashed border-primary/40 bg-card/50 p-8">
            <div className="absolute -left-3 top-10 h-6 w-6 rounded-full bg-background border border-primary/40" aria-hidden="true" />
            <div className="absolute -right-3 top-10 h-6 w-6 rounded-full bg-background border border-primary/40" aria-hidden="true" />
            <SectionEyebrow>Match ticket</SectionEyebrow>
            <h2 id="fixture-details-heading" className="text-2xl font-black italic uppercase text-white mb-6">
              Match details about this {fixtureName} fixture
            </h2>
            <dl className="space-y-4">
              {[
                { label: "Series", value: match.seriesName },
                { label: "Stage", value: stage },
                { label: "Fixture", value: fixtureName },
                { label: "Date", value: match.date || "TBD" },
                { label: "Start", value: kickoff },
                { label: "Venue", value: match.venue },
                { label: "Format", value: projection.formatLabel },
                { label: "Surface", value: projection.surface },
              ].map((item) => (
                <div key={item.label} className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.label}</dt>
                  <dd className="text-sm font-bold text-white text-right">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h3 className="text-2xl font-black italic uppercase text-white mb-4">About {fixtureName}</h3>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">{overview}</p>
          </div>
        </section>

        {relatedFixtures.length > 0 && (
          <section aria-labelledby="other-matches-heading">
            <SectionEyebrow>Next on the calendar</SectionEyebrow>
            <h2 id="other-matches-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-8">
              Other upcoming cricket matches
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedFixtures.map((row, i) => (
                <Link
                  key={row.slug}
                  to="/match/$slug"
                  params={{ slug: row.slug }}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-card/30 p-5 hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <span className="text-2xl font-black italic text-primary/40 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">{row.seriesName}</p>
                    <h3 className="text-base font-black italic uppercase text-white group-hover:text-primary transition-colors line-clamp-2">{row.event}</h3>
                    <p className="text-xs text-white/40 mt-1">{row.date || row.venue}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {relatedBlogs.length > 0 && (
          <section aria-labelledby="related-guides-heading">
            <SectionEyebrow>Read before you trade</SectionEyebrow>
            <h2 id="related-guides-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-8">
              Related cricket guides and blogs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((blog) => (
                <Link key={blog.slug} to="/posts/$slug" params={{ slug: blog.slug }} className="group block">
                  <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-card/30 h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={blog.img} alt={blog.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      <p className="absolute bottom-3 left-4 text-[10px] font-black uppercase tracking-widest text-primary">{blog.category}</p>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-black italic uppercase text-white group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="mt-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-primary">
                        Read analysis <ArrowRight className="w-4 h-4" />
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="faq-heading">
          <SectionEyebrow>Quick answers</SectionEyebrow>
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
            {codePair} {stage} — frequently asked questions
          </h2>
          <p className="text-white/55 max-w-3xl mb-8">
            Straight answers on the {codePair} prediction, pitch report, live betting and settlement for {fixtureName} at {match.venue}.
          </p>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-white/10 bg-card/30 open:border-primary/40 open:bg-primary/5">
                <summary className="cursor-pointer list-none p-5 md:p-6 flex items-start justify-between gap-4">
                  <h3 className="text-sm md:text-base font-black uppercase tracking-wide text-white pr-4">{faq.q}</h3>
                  <span className="text-primary font-black group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-5 md:px-6 pb-6 text-sm text-white/65 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <aside className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-10 md:px-12 md:py-12 text-black">
          <ShieldCheck className="absolute right-8 top-8 h-16 w-16 opacity-20" aria-hidden="true" />
          <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tight">Get a Fairplay ID for {fixtureName}</h2>
          <p className="mt-3 max-w-xl font-medium opacity-80">
            Trade live winner, innings totals and fancy markets on this {projection.formatLabel.toLowerCase()} with cash-out and 180-minute settlement.
          </p>
          <a
            href={waLink(`Hi Fairplay, I want a verified ID for ${fixtureName}.`)}
            className="mt-6 inline-flex rounded-full bg-black px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-primary"
          >
            WhatsApp support
          </a>
        </aside>
      </div>
    </article>
  );
}
