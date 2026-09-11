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
import type { FootballBlogCard, FootballFaq, FootballMatchModel } from "@/utils/football-match";
import type { RelatedFixture } from "@/utils/related-fixtures";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { sportsEventGraph } from "@/utils/match-seo";
import { getMatchSlug } from "@/utils/slugify";
import { waLink } from "@/lib/whatsapp";

interface MatchRecord {
  event: string;
  date: string;
  time: string;
  venue: string;
  seriesName: string;
}

interface FootballMatchDetailProps {
  match: MatchRecord;
  model: FootballMatchModel;
  relatedFixtures: RelatedFixture[];
  relatedBlogs: FootballBlogCard[];
  faqs: FootballFaq[];
}

function formationRows(style: string): number[] {
  if (style === "4-2-3-1") return [1, 4, 2, 3, 1];
  if (style === "4-4-2") return [1, 4, 4, 2];
  if (style === "3-4-3") return [1, 3, 4, 3];
  if (style === "4-3-1-2") return [1, 4, 3, 1, 2];
  return [1, 4, 3, 3];
}

function MiniPitch({ style, accent }: { style: string; accent: boolean }) {
  const rows = formationRows(style);
  return (
    <div
      className={`relative h-40 rounded-2xl overflow-hidden border ${accent ? "border-primary/30" : "border-white/10"}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#143d24_0%,#0d2a18_50%,#143d24_100%)]" />
      <div className="absolute inset-x-3 top-1/2 h-px bg-white/20" />
      <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
      <div className="relative z-10 h-full flex flex-col justify-evenly py-2 px-3">
        {rows.map((count, rowIdx) => (
          <div key={`${style}-${rowIdx}`} className="flex justify-evenly">
            {Array.from({ length: count }).map((_, i) => (
              <span
                key={`${rowIdx}-${i}`}
                className={`h-2.5 w-2.5 rounded-full shadow ${accent ? "bg-primary" : "bg-white"}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-primary text-[10px] font-black uppercase tracking-[0.35em] mb-3">{children}</p>
  );
}

export function FootballMatchDetail({
  match,
  model,
  relatedFixtures,
  relatedBlogs,
  faqs,
}: FootballMatchDetailProps) {
  const kickoff = match.time && match.time !== "TBD" ? match.time : "TBD";
  const fixtureName = `${model.teamA} vs ${model.teamB}`;
  const jsonLd = sportsEventGraph({
    name: fixtureName,
    description: model.overview,
    slug: getMatchSlug(match.seriesName, match),
    date: match.date,
    time: match.time,
    venue: match.venue,
    sport: "Soccer",
    competitors: [
      { type: "SportsTeam", name: model.teamA },
      { type: "SportsTeam", name: model.teamB },
    ],
  });

  const marketTiles = [
    { label: "Projected FT", value: `${model.ftA} — ${model.ftB}`, hint: `${model.teamA} ${model.ftA} ${model.teamB} ${model.ftB}` },
    { label: "Projected HT", value: `${model.htA} — ${model.htB}`, hint: `Half-time ${model.teamA} ${model.htA}-${model.htB}` },
    { label: `${model.teamA} xG`, value: model.xgA, hint: `${model.xgA} expected goals` },
    { label: `${model.teamB} xG`, value: model.xgB, hint: `${model.xgB} expected goals` },
    { label: "BTTS", value: `${model.btts}%`, hint: `Both teams to score ${model.btts}%` },
    { label: "Over 2.5", value: `${model.over25}%`, hint: `Over 2.5 goals ${model.over25}%` },
    { label: "HT/FT", value: model.htft, hint: `Double result ${model.htft}` },
    { label: "First goal", value: model.firstGoalWindow, hint: `First goal window ${model.firstGoalWindow}` },
  ];

  return (
    <article className="flex flex-col bg-background text-foreground min-h-screen">
      <JsonLd data={jsonLd} />

      <header className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,100,0,0.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <p className="text-center text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            {model.tournament} · {model.stage}
          </p>
          <h1 className="text-center text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-[0.9] mb-10">
            {model.teamA} <span className="text-primary not-italic">vs</span> {model.teamB}
            <span className="mt-4 block text-lg md:text-2xl not-italic font-black tracking-[0.12em] text-primary/90">
              {model.stage} prediction
            </span>
          </h1>

          <div className="relative mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 p-6 md:p-10">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-primary text-black text-xl md:text-2xl font-black italic">
                  {model.codeA}
                </div>
                <p className="text-lg md:text-2xl font-black italic uppercase text-white">{model.teamA}</p>
              </div>
              <div className="text-center min-w-[7rem]">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Projected FT</p>
                <p className="text-5xl md:text-6xl font-black italic text-white tabular-nums">
                  {model.ftA}<span className="text-primary px-1">:</span>{model.ftB}
                </p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-primary">HT {model.htA}:{model.htB}</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white/10 text-white text-xl md:text-2xl font-black italic">
                  {model.codeB}
                </div>
                <p className="text-lg md:text-2xl font-black italic uppercase text-white">{model.teamB}</p>
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
                <span className="block text-[11px] font-bold text-white">{model.group}</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/schedule"
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-primary"
            >
              <ArrowLeft className="w-3 h-3" /> All football fixtures
            </Link>
          </div>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 pb-24 space-y-20">
        <section aria-labelledby="team-details-heading">
          <SectionEyebrow>Line-up identity</SectionEyebrow>
          <h2 id="team-details-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
            Team details for {fixtureName}
          </h2>
          <p className="text-white/55 max-w-3xl mb-10">
            How {model.teamA} and {model.teamB} are expected to set up at {match.venue} in {model.stage}. Formation, strengths and the one leak that prices live markets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { team: model.teamA, code: model.codeA, style: model.styleA, strength: model.strengthA, leak: model.leakA, accent: true },
              { team: model.teamB, code: model.codeB, style: model.styleB, strength: model.strengthB, leak: model.leakB, accent: false },
            ].map((side) => (
              <div key={side.team} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/40 p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">{side.style} shape</p>
                    <h3 className="text-2xl font-black italic uppercase text-white">{side.team}</h3>
                  </div>
                  <span className={`rounded-xl px-3 py-2 text-sm font-black italic ${side.accent ? "bg-primary text-black" : "bg-white/10 text-white"}`}>
                    {side.code}
                  </span>
                </div>
                <MiniPitch style={side.style} accent={side.accent} />
                <dl className="mt-6 grid grid-cols-1 gap-4">
                  <div>
                    <dt className="text-[10px] font-black uppercase tracking-widest text-white/35">Strength</dt>
                    <dd className="mt-1 text-sm font-semibold text-white">{side.strength}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-black uppercase tracking-widest text-white/35">Soft point</dt>
                    <dd className="mt-1 text-sm font-semibold text-white/70">{side.leak}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="predictions-heading" className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 md:p-10">
          <SectionEyebrow>1X2 board</SectionEyebrow>
          <h2 id="predictions-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-3">
            {fixtureName} predictions
          </h2>
          <p className="text-white/55 max-w-3xl mb-10">
            Fairplay win probabilities for {model.stage}: {model.teamA} {model.winA}%, draw {model.winD}%, {model.teamB} {model.winB}%. BTTS {model.btts}% and over 2.5 goals {model.over25}%.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: model.teamA, p: model.winA, tone: "home" as const },
              { label: "Draw", p: model.winD, tone: "draw" as const },
              { label: model.teamB, p: model.winB, tone: "away" as const },
            ].map((col) => (
              <div
                key={col.label}
                className={`rounded-3xl p-6 text-center border ${
                  col.tone === "home"
                    ? "bg-primary/15 border-primary/40"
                    : col.tone === "away"
                      ? "bg-white/5 border-white/10"
                      : "bg-black/40 border-white/10"
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
              { k: "Both teams to score", v: `${model.btts}%` },
              { k: "Over 2.5 goals", v: `${model.over25}%` },
              { k: "Under 3.5 goals", v: `${model.under35}%` },
              { k: "Asian handicap", v: model.asianHandicap },
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
          <p className="text-lg text-white/80 leading-relaxed max-w-4xl">{model.overview}</p>
          <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {model.takeaways.map((line, i) => (
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
            Who will win today's {fixtureName} match?
          </h2>
          <p className="text-white/55 max-w-3xl mb-10">
            The Fairplay model leans {model.predictedWinner} at {model.confidence}% for this {model.stage.toLowerCase()} at {match.venue}. The sharper trade is often HT/FT {model.htft}, not only the 1X2 headline.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 md:p-12 text-black">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-3">Predicted winner</p>
              <p className="text-4xl md:text-6xl font-black italic uppercase leading-none">{model.predictedWinner}</p>
              <p className="mt-4 text-lg font-bold">{model.confidence}% model confidence — live-trade friendly</p>
              <p className="mt-6 text-sm font-medium opacity-80">{model.groupLean}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Both teams to score", value: `Yes — ${model.btts}%` },
                { label: "Draw no bet", value: model.dnb },
                { label: "Asian handicap", value: model.asianHandicap },
                { label: "First team to score", value: model.firstScorer },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-card/40 p-5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.label}</p>
                  <p className="mt-2 text-base font-black italic uppercase text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="key-players-heading">
          <SectionEyebrow>Match-winners</SectionEyebrow>
          <h2 id="key-players-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
            Key players to watch in {fixtureName}
          </h2>
          <p className="text-white/55 max-w-3xl mb-10">
            Six names that price scorer, assist and card markets for {model.teamA} and {model.teamB} at {match.venue}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[model.teamA, model.teamB].map((team, ti) => (
              <div key={team}>
                <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-4">{team} watchlist</h3>
                <div className="space-y-4">
                  {model.players
                    .filter((player) => player.team === team)
                    .map((player, i) => (
                      <article key={player.name} className="flex gap-4 rounded-2xl border border-white/10 bg-card/30 p-4 hover:border-primary/40 transition-colors">
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-black italic ${ti === 0 ? "bg-primary text-black" : "bg-white/10 text-white"}`}>
                          {10 - i}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-lg font-black italic uppercase text-white leading-tight">{player.name}</h4>
                          <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-1">{player.role} · {player.impact}% impact</p>
                          <p className="mt-2 text-sm text-white/55">{player.note}</p>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="markets-heading" className="rounded-[2.25rem] border border-white/10 overflow-hidden">
          <div className="bg-black/50 p-6 md:p-10 border-b border-white/10">
            <SectionEyebrow>Scoreboard & markets</SectionEyebrow>
            <h2 id="markets-heading" className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-4">
              Projected score, HT/FT and goal markets for {fixtureName}
            </h2>
            <p className="text-white/60 max-w-3xl">
              Model output leans to half-time {model.htA}-{model.htB} and full-time {model.teamA} {model.ftA}-{model.ftB} {model.teamB}. First goal window {model.firstGoalWindow}; second-half goals cluster around {model.secondGoalWindow}.
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
            {model.markets.map((market) => (
              <article key={market.name} className="bg-background p-6">
                <h3 className="text-sm font-black italic uppercase text-primary mb-2">{market.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{market.detail}</p>
              </article>
            ))}
          </div>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            <div className="bg-background p-5 flex justify-between gap-4">
              <dt className="text-[10px] font-black uppercase tracking-widest text-white/40">{model.teamA} shots on target</dt>
              <dd className="text-sm font-black text-white">{model.shotsA}</dd>
            </div>
            <div className="bg-background p-5 flex justify-between gap-4">
              <dt className="text-[10px] font-black uppercase tracking-widest text-white/40">{model.teamB} shots on target</dt>
              <dd className="text-sm font-black text-white">{model.shotsB}</dd>
            </div>
            <div className="bg-background p-5 flex justify-between gap-4">
              <dt className="text-[10px] font-black uppercase tracking-widest text-white/40">Corners</dt>
              <dd className="text-sm font-black text-white text-right">{model.corners}</dd>
            </div>
            <div className="bg-background p-5 flex justify-between gap-4">
              <dt className="text-[10px] font-black uppercase tracking-widest text-white/40">Cards</dt>
              <dd className="text-sm font-black text-white text-right">{model.cards}</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="why-bet-heading">
          <SectionEyebrow>Trading notes</SectionEyebrow>
          <h2 id="why-bet-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-8">
            Why bet {fixtureName} on Fairplay?
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {model.whyBet.map((line, i) => (
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
                { label: "Tournament", value: model.tournament },
                { label: "Stage", value: model.stage },
                { label: "Fixture", value: fixtureName },
                { label: "Date", value: match.date || "TBD" },
                { label: "Kick-off", value: kickoff },
                { label: "Venue", value: match.venue },
                { label: "Format", value: model.formatLabel },
                { label: "Referee", value: model.referee },
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
            <p className="text-white/70 leading-relaxed text-base md:text-lg">{model.about}</p>
          </div>
        </section>

        {relatedFixtures.length > 0 && (
          <section aria-labelledby="other-matches-heading">
            <SectionEyebrow>Next on the calendar</SectionEyebrow>
            <h2 id="other-matches-heading" className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-8">
              Other upcoming football matches
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
              Related football guides and blogs
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

        <FAQSection
          title={`Frequently asked questions about ${fixtureName}`}
          faqs={faqs}
        />

        <aside className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-10 md:px-12 md:py-12 text-black">
          <ShieldCheck className="absolute right-8 top-8 h-16 w-16 opacity-20" aria-hidden="true" />
          <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tight">Get a Fairplay ID for {fixtureName}</h2>
          <p className="mt-3 max-w-xl font-medium opacity-80">
            Trade live 1X2, BTTS, HT/FT and goalscorer markets on {model.stage} with cash-out and 180-minute settlement.
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
