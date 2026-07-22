import { createFileRoute, Link } from "@tanstack/react-router";
import { AiOverview } from "@/components/AiOverview";
import { useMemo } from "react";
import { Search, ChevronRight, Trophy, Sparkles, CalendarDays, MapPin } from "lucide-react";
import { cricketSeries, footballMatches, tennisEvents } from "@/data/schedule";
import {
  cricketSeriesSlug,
  footballMatchSlug,
  tennisEventSlug,
  tennisRounds,
} from "@/lib/match-slug";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RelatedContent } from "@/components/RelatedContent";

type MatchesSearch = { sport: string; q: string };

export const Route = createFileRoute("/matches")({
  validateSearch: (raw: Record<string, unknown>): MatchesSearch => ({
    sport: typeof raw.sport === "string" ? raw.sport : "all",
    q: typeof raw.q === "string" ? raw.q : "",
  }),
  head: () => {
    const title =
      "Match Index 2026–27 — Cricket, Football & Tennis Schedule | Lotus365";
    const desc =
      "Complete 2026–27 match index grouped by tournament — Asia Cup, IPL, ICC World Cup, FIFA World Cup 2026, ATP & WTA Grand Slams. Filter by sport and search by team or event.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: "https://lotus365id.com/matches" },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: "https://lotus365id.com/matches" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
              { "@type": "ListItem", position: 2, name: "Matches", item: "https://lotus365id.com/matches" },
            ],
          }),
        },
      ],
    };
  },
  component: MatchesIndex,
});

type Sport = "all" | "cricket" | "football" | "tennis";

const SPORTS: { id: Sport; label: string; icon: string }[] = [
  { id: "all", label: "All Sports", icon: "◆" },
  { id: "cricket", label: "Cricket", icon: "🏏" },
  { id: "football", label: "Football", icon: "⚽" },
  { id: "tennis", label: "Tennis", icon: "🎾" },
];

function MatchesIndex() {
  const { sport, q } = Route.useSearch();
  const navigate = Route.useNavigate();
  const activeSport = (SPORTS.find((s) => s.id === sport)?.id ?? "all") as Sport;
  const query = q.toLowerCase().trim();

  const groups = useMemo(() => {
    const out: {
      sport: Exclude<Sport, "all">;
      tournament: string;
      meta: string;
      items: { label: string; sub: string; href: string; params?: Record<string, string> }[];
    }[] = [];

    if (activeSport === "all" || activeSport === "cricket") {
      for (const s of cricketSeries) {
        const seriesSlug = cricketSeriesSlug(s);
        const items = s.matches
          .map((m, i) => ({
            label: m.teams,
            sub: `${m.match} · ${m.date} · ${m.venue}`,
            href: "/cricket-schedule/$series/$match",
            params: { series: seriesSlug, match: String(i + 1) },
          }))
          .filter(
            (it) =>
              !query ||
              it.label.toLowerCase().includes(query) ||
              it.sub.toLowerCase().includes(query) ||
              s.name.toLowerCase().includes(query),
          );
        if (items.length) {
          out.push({
            sport: "cricket",
            tournament: s.name,
            meta: `${s.format} · ${s.window}`,
            items,
          });
        }
      }
    }

    if (activeSport === "all" || activeSport === "football") {
      const byStage = new Map<string, typeof footballMatches>();
      for (const m of footballMatches) {
        const key = m.stage.split("·")[0].trim() || "Fixtures";
        if (!byStage.has(key)) byStage.set(key, []);
        byStage.get(key)!.push(m);
      }
      for (const [stage, list] of byStage) {
        const items = list
          .map((m) => ({
            label: m.match,
            sub: `${m.stage} · ${m.date} · ${m.kickoff} · ${m.venue}`,
            href: "/football-schedule/$match",
            params: { match: footballMatchSlug(m) },
          }))
          .filter(
            (it) =>
              !query ||
              it.label.toLowerCase().includes(query) ||
              it.sub.toLowerCase().includes(query),
          );
        if (items.length) {
          out.push({
            sport: "football",
            tournament: `FIFA World Cup 2026 — ${stage}`,
            meta: "Canada · Mexico · USA · Jun–Jul 2026",
            items,
          });
        }
      }
    }

    if (activeSport === "all" || activeSport === "tennis") {
      for (const e of tennisEvents) {
        const evSlug = tennisEventSlug(e);
        const isSlam = /grand slam|australian open|french open|wimbledon|us open/i.test(
          e.category + " " + e.name,
        );
        const rounds = isSlam ? tennisRounds : tennisRounds.slice(3);
        const items = rounds
          .map((r) => ({
            label: `${e.name} — ${r.label}`,
            sub: `${e.tour} · ${e.category} · ${e.surface} · ${e.dates} · ${e.location}`,
            href: "/tennis-schedule/$event/$round",
            params: { event: evSlug, round: r.id },
          }))
          .filter(
            (it) =>
              !query ||
              it.label.toLowerCase().includes(query) ||
              it.sub.toLowerCase().includes(query) ||
              e.name.toLowerCase().includes(query),
          );
        if (items.length) {
          out.push({
            sport: "tennis",
            tournament: e.name,
            meta: `${e.tour} · ${e.category} · ${e.surface} · ${e.location}`,
            items,
          });
        }
      }
    }

    return out;
  }, [activeSport, query]);

  const totalMatches = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-12 pb-20">
        {/* Hero */}
        <section className="relative mb-10 overflow-hidden rounded-3xl glass-card px-6 py-10 md:px-12 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(600px 260px at 90% -10%, oklch(0.82 0.15 88 / 0.25), transparent 60%), radial-gradient(500px 240px at -10% 110%, oklch(0.9 0.11 92 / 0.18), transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full gold-border px-3 py-1 text-[10px] font-semibold tracking-[0.24em] uppercase text-primary">
              <Sparkles className="h-3 w-3" /> Match Index · 2026–27
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-semibold tracking-tight leading-[1.05]">
              Every Match, <span className="gold-text">One Premium Page</span>
            </h1>
            <p className="mt-4 max-w-2xl text-foreground/90 md:text-lg">
              The complete 2026–27 calendar — cricket series, FIFA World Cup 2026 fixtures
              and the ATP/WTA season, curated by tournament. Filter by sport or search by
              team, event or venue.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-foreground/90">
              <span className="inline-flex items-center gap-1.5">
                <Trophy className="h-3.5 w-3.5 text-primary" />
                {groups.length} Tournaments
              </span>
              <span className="h-3 w-px bg-primary/30" />
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-primary" />
                {totalMatches} Matches
              </span>
              <span className="h-3 w-px bg-primary/30" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Global Coverage
              </span>
            </div>
          </div>
        </section>

      <AiOverview
        summary="The Lotus365 Match Index groups every upcoming cricket, football and tennis fixture by tournament — with sport filters, search and one-tap links to live odds and predictions."
        points={[
          "Grouped by tournament with a featured match per series",
          "Filter by Cricket, Football, Tennis or All sports",
          "Search by team, event or venue",
          "Deep links to match previews, live odds and predictions",
        ]}
        sources={[{ label: "Full schedule", to: "/schedule" }, { label: "Cricket betting", to: "/lotus365-cricket" }, { label: "Predictions", to: "/lotus365-prediction" }]}
      />

        {/* Filter + search */}
        <section className="sticky top-16 z-20 -mx-4 mb-8 px-4 py-4 backdrop-blur-xl bg-[rgb(13_66_55_/_0.75)] border-y border-primary/15">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {SPORTS.map((s) => {
                const active = activeSport === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() =>
                      navigate({ search: (prev: MatchesSearch) => ({ ...prev, sport: s.id }) })
                    }
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                      active
                        ? "btn-gold shadow-[0_10px_30px_-10px_oklch(0.82_0.15_88/0.6)]"
                        : "gold-border text-foreground/90 hover:text-primary hover:border-primary/50 bg-primary/[0.04]"
                    }`}
                  >
                    <span className="text-sm leading-none">{s.icon}</span>
                    {s.label}
                  </button>
                );
              })}
            </div>
            <div className="relative sm:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/70" />
              <input
                type="search"
                value={q}
                onChange={(e) =>
                  navigate({
                    search: (prev: MatchesSearch) => ({ ...prev, q: e.target.value }),
                  })
                }
                placeholder="Search team, tournament or venue…"
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[rgb(13_66_55_/_0.5)] gold-border text-sm placeholder:text-foreground/85 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>
          </div>
          <div className="mt-3 text-[11px] tracking-[0.18em] uppercase text-primary/70">
            {groups.length} tournaments · {totalMatches} matches
            {query && ` · matching "${q}"`}
          </div>
        </section>

        {/* Groups */}
        {groups.length === 0 ? (
          <div className="glass-card rounded-3xl p-12 text-center">
            <Search className="mx-auto h-8 w-8 text-primary/60" />
            <p className="mt-4 font-display text-xl">No matches found</p>
            <p className="mt-1 text-sm text-foreground/95">
              Try a different sport or clear the search.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {groups.map((g) => {
              const [featured, ...rest] = g.items;
              return (
                <section
                  key={`${g.sport}-${g.tournament}`}
                  className="glass-card rounded-3xl overflow-hidden"
                >
                  {/* Tournament header */}
                  <header className="relative flex items-start justify-between gap-4 px-6 py-5 border-b border-primary/15">
                    <div className="min-w-0">
                      <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-primary/90">
                        <span className="h-px w-6 bg-gradient-to-r from-primary to-transparent" />
                        {g.sport}
                      </div>
                      <h2 className="mt-1.5 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                        {g.tournament}
                      </h2>
                      <div className="mt-1 text-xs text-foreground/95">{g.meta}</div>
                    </div>
                    <div className="shrink-0 rounded-full gold-border bg-primary/[0.06] px-3 py-1 text-[11px] font-semibold tracking-wider text-primary">
                      {g.items.length} {g.items.length === 1 ? "MATCH" : "MATCHES"}
                    </div>
                  </header>

                  {/* Featured match card */}
                  <div className="p-5">
                    <Link
                      to={featured.href as string}
                      params={featured.params as never}
                      className="group relative block overflow-hidden rounded-2xl p-5 md:p-6 bg-gradient-to-br from-primary/[0.14] via-primary/[0.06] to-transparent border border-primary/25 hover:border-primary/60 transition"
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-30 blur-3xl"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.92 0.13 92), oklch(0.78 0.16 82))",
                        }}
                      />
                      <div className="relative flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
                            <Trophy className="h-3 w-3" /> Featured
                          </div>
                          <div className="mt-2 font-display text-xl md:text-2xl font-semibold truncate">
                            {featured.label}
                          </div>
                          <div className="mt-1 text-xs md:text-sm text-foreground/90 truncate">
                            {featured.sub}
                          </div>
                        </div>
                        <span className="btn-gold shrink-0 inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold group-hover:translate-x-0.5 transition">
                          View <ChevronRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Remaining matches */}
                  {rest.length > 0 && (
                    <ul className="grid gap-px bg-primary/10 sm:grid-cols-2">
                      {rest.map((it, i) => (
                        <li key={i} className="bg-[rgb(13_72_60_/_0.55)]">
                          <Link
                            to={it.href as string}
                            params={it.params as never}
                            className="group flex items-center justify-between gap-3 px-5 py-4 hover:bg-primary/[0.08] transition"
                          >
                            <div className="min-w-0">
                              <div className="font-semibold text-sm truncate group-hover:text-primary transition">
                                {it.label}
                              </div>
                              <div className="mt-0.5 text-[11px] text-foreground/85 truncate">
                                {it.sub}
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-primary/60 shrink-0 group-hover:text-primary group-hover:translate-x-0.5 transition" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </main>

      <RelatedContent currentPath="/matches" />
      <SiteFooter />
    </div>
  );
}
