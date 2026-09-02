import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  Globe,
  LayoutGrid,
  ListOrdered,
  MapPin,
  Search,
  Star,
  Swords,
  Trophy,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { AIPoweredOverview } from "@/components/AIPoweredOverview";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import type { IndexSport, IndexTournament } from "@/utils/match-index";
import { MATCH_INDEX_TOTALS, filterMatchIndex } from "@/utils/match-index";
import { matchesIndexJsonLd } from "@/utils/match-seo";
import { pageHeadFor } from "@/utils/page-seo";

type SportTab = IndexSport | "all";

const searchSchema = z.object({
  sport: z.enum(["all", "cricket", "football", "tennis"]).optional().catch(undefined),
  q: z.string().optional().catch(undefined),
});

export const Route = createFileRoute("/matches")({
  validateSearch: (search) => searchSchema.parse(search),
  component: MatchesPage,
  head: () => pageHeadFor("/matches"),
});

const SPORT_ICON = {
  cricket: Trophy,
  football: Swords,
  tennis: Star,
} as const;

const TABS: Array<{ key: SportTab; label: string; icon: typeof LayoutGrid }> = [
  { key: "all", label: "All sports", icon: LayoutGrid },
  { key: "cricket", label: "Cricket", icon: Trophy },
  { key: "football", label: "Football", icon: Swords },
  { key: "tennis", label: "Tennis", icon: Star },
];

const tabCount = (key: SportTab) =>
  key === "all" ? MATCH_INDEX_TOTALS.tournaments : MATCH_INDEX_TOTALS.bySport[key].tournaments;

const OVERVIEW_HIGHLIGHTS = [
  "Every tournament grouped with a featured fixture at the top",
  "Filter by cricket, football, tennis or view all sports together",
  "Search by team, series or venue and the list narrows as you type",
  "Each match opens the same detail page used across the Fairplay schedule",
];

const OVERVIEW_SOURCES = [
  { label: "Full schedule", to: "/schedule" },
  { label: "Cricket betting", to: "/ipl-betting" },
  { label: "Live exchange", to: "/betting" },
];

function MatchesPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const activeSport: SportTab = search.sport ?? "all";
  const urlQuery = search.q ?? "";
  const [query, setQuery] = useState(urlQuery);

  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  useEffect(() => {
    if (query === urlQuery) return;
    const timer = setTimeout(() => {
      navigate({
        search: (prev) => ({ ...prev, q: query.trim() ? query : undefined }),
        replace: true,
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [query, urlQuery, navigate]);

  const tournaments = useMemo(() => filterMatchIndex(activeSport, query), [activeSport, query]);
  const visibleMatches = tournaments.reduce((sum, row) => sum + row.matches.length, 0);

  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen">
      <JsonLd data={matchesIndexJsonLd()} />

      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,185,74,0.1),transparent_60%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-3 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
              <div className="h-[2px] w-8 bg-primary" />
              Match index · 2026–27
              <div className="h-[2px] w-8 bg-primary" />
            </div>
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.8] mb-8">
              Every match, <span className="text-primary not-italic">one page</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto italic">
              The complete 2026–27 calendar — cricket series, FIFA World Cup 2026 fixtures and the
              ATP/WTA season, curated by tournament. Filter by sport or search by team, event or
              venue.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {[
                {
                  icon: ListOrdered,
                  value: `${MATCH_INDEX_TOTALS.tournaments}`,
                  label: "Tournaments",
                },
                { icon: Calendar, value: `${MATCH_INDEX_TOTALS.matches}`, label: "Matches" },
                { icon: Globe, value: "3", label: "Sports covered" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-card/40 px-6 py-4"
                >
                  <stat.icon className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <div className="text-xl font-black italic text-white leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-[0.25em] text-white/40 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <AIPoweredOverview
            title="Match index overview"
            summary="The Fairplay match index groups every upcoming cricket, football and tennis fixture by tournament — with sport filters, search, and one-tap links to the match page that carries predictions, venue notes and Fairplay markets."
            highlights={OVERVIEW_HIGHLIGHTS}
            sources={OVERVIEW_SOURCES}
          />
        </div>

        <div className="space-y-8 my-16">
          <nav
            aria-label="Filter matches by sport"
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {TABS.map((tab) => {
              const active = activeSport === tab.key;
              return (
                <Link
                  key={tab.key}
                  to="/matches"
                  search={
                    tab.key === "all"
                      ? { q: query || undefined }
                      : { sport: tab.key, q: query || undefined }
                  }
                  replace
                  className={`flex items-center gap-2.5 px-6 md:px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all border ${
                    active
                      ? "bg-primary text-black border-primary shadow-[0_0_20px_rgba(47,185,74,0.3)]"
                      : "bg-card/50 text-white/40 border-white/5 hover:border-white/20 hover:bg-card/70"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  <span
                    className={`text-[10px] not-italic rounded-full px-2 py-0.5 ${
                      active ? "bg-black/20 text-black" : "bg-white/5 text-white/30"
                    }`}
                  >
                    {tabCount(tab.key)}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type="search"
              aria-label="Search matches, tournaments or venues"
              placeholder="Search team, event or venue..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full bg-card/30 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/20"
            />
          </div>

          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
            {tournaments.length} tournaments · {visibleMatches} matches
          </p>
        </div>

        {tournaments.length === 0 ? (
          <div className="text-center py-20 bg-card/20 rounded-3xl border border-dashed border-white/10">
            <Search className="w-12 h-12 text-white/10 mx-auto mb-4" />
            <p className="text-white/40 font-medium italic">
              No tournaments match “{query}”. Try a team name, a city or clear the search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {tournaments.map((tournament, index) => (
              <TournamentCard key={tournament.id} tournament={tournament} index={index} />
            ))}
          </div>
        )}

        <section className="mt-24 py-16 px-8 rounded-[3rem] bg-gradient-to-br from-primary to-[#FF6A18] relative overflow-hidden shadow-[0_0_50px_rgba(47,185,74,0.2)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-black leading-[0.9]">
              One ID For <span className="text-white not-italic">Every Fixture</span>
            </h2>
            <p className="text-black/70 text-lg max-w-xl font-medium">
              Open any match from this index, read the prediction notes, then trade it on the same
              Fairplay ID — cricket, FIFA World Cup 2026 and the ATP/WTA tour.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/fairplay-id"
                className="px-12 py-5 bg-black text-primary rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4 group"
              >
                Get a Fairplay ID
                <Zap className="w-5 h-5 fill-primary group-hover:animate-pulse" />
              </Link>
              <Link
                to="/schedule"
                className="px-12 py-5 bg-black/10 text-black border border-black/20 rounded-full text-sm font-black uppercase tracking-[0.2em] hover:bg-black/20 transition-all"
              >
                Day-by-day schedule
              </Link>
            </div>
          </div>
        </section>
      </div>

      <FAQSection
        title="Fairplay match index questions"
        faqs={[
          {
            q: "What is the difference between /matches and the schedule page?",
            a: "This index groups fixtures by tournament with a featured match per series, so you can scan a whole tour at once. The schedule page lists the same fixtures in a date-first table. Both open the same match detail pages.",
          },
          {
            q: "How do I find one fixture quickly?",
            a: "Type a team, tournament or venue in the search box — for example India, World Cup or Edgbaston. The tournament list narrows as you type, and the sport tabs stay available.",
          },
          {
            q: "What is on a match page?",
            a: "Each match page carries the fixture, stage, venue and start time plus prediction notes, squad or player context and the Fairplay markets that usually open for that format.",
          },
          {
            q: "Are cricket, football and tennis on the same Fairplay ID?",
            a: "Yes. One Fairplay ID and one UPI wallet covers cricket including IPL, FIFA World Cup 2026 football and the ATP/WTA tennis tour listed on this page.",
          },
        ]}
      />
    </div>
  );
}

function TournamentCard({ tournament, index }: { tournament: IndexTournament; index: number }) {
  const SportIcon = SPORT_ICON[tournament.sport];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.03, 0.3) }}
      className="bg-card/30 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm h-full"
      aria-labelledby={`${tournament.id}-heading`}
    >
      <header className="bg-primary/5 border-b border-white/5 p-6 md:p-7 flex items-start justify-between gap-5">
        <div className="flex items-start gap-4 min-w-0">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <SportIcon className="w-6 h-6 text-primary" />
          </div>
          <div className="min-w-0">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">
              {tournament.sport}
            </span>
            <h2
              id={`${tournament.id}-heading`}
              className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white leading-tight mt-1"
            >
              {tournament.series}
            </h2>
            <p className="text-white/45 text-[11px] font-bold uppercase tracking-widest mt-2">
              {tournament.subtitle}
            </p>
            {tournament.host && (
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">
                Host · {tournament.host}
              </p>
            )}
          </div>
        </div>
        <span className="shrink-0 text-[9px] font-black uppercase tracking-widest bg-primary text-black px-3 py-1.5 rounded-full">
          {tournament.matches.length} {tournament.matches.length === 1 ? "match" : "matches"}
        </span>
      </header>

      <div className="p-5 md:p-6 space-y-4">
        <Link
          to="/match/$slug"
          params={{ slug: tournament.featured.slug }}
          title={`${tournament.featured.fixture} — prediction, venue notes and Fairplay odds`}
          className="group block rounded-2xl border border-primary/20 bg-primary/[0.06] p-5 hover:border-primary/50 hover:bg-primary/10 transition-all"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">
              Featured
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-white transition-colors">
              View
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-black text-white mt-2 group-hover:text-primary transition-colors">
            {tournament.featured.fixture}
          </h3>
          <p className="flex items-start gap-2 text-[12px] text-white/55 mt-2 leading-snug">
            <MapPin className="w-3.5 h-3.5 text-primary/50 shrink-0 mt-0.5" />
            {tournament.featured.meta || tournament.window}
          </p>
        </Link>

        {tournament.rest.length > 0 && (
          <ul className="rounded-2xl border border-white/5 bg-background/30 divide-y divide-white/[0.04] overflow-hidden">
            {tournament.rest.map((match, matchIndex) => (
              <li key={match.slug}>
                <Link
                  to="/match/$slug"
                  params={{ slug: match.slug }}
                  title={`${match.fixture} — prediction, venue notes and Fairplay odds`}
                  className="group flex items-center gap-4 px-5 py-4 hover:bg-white/[0.03] transition-colors"
                >
                  <span className="hidden sm:flex w-7 h-7 rounded-lg bg-background border border-white/5 items-center justify-center text-[10px] font-bold text-white/25 group-hover:text-primary group-hover:border-primary/30 transition-all shrink-0">
                    {matchIndex + 2}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14px] font-bold text-white group-hover:text-primary transition-colors truncate">
                      {match.fixture}
                    </span>
                    <span className="block text-[11px] text-white/40 mt-0.5 truncate">
                      {match.meta || tournament.window}
                    </span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}
