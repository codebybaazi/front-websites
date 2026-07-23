import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search, Calendar, MapPin, Trophy } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { cricketSeries2026 } from "@/data/cricket-series-2026";
import { wc2026Matches } from "@/data/wc2026-matches";
import { tennis2026 } from "@/data/tennis-2026";

type Sport = "all" | "cricket" | "football" | "tennis";

type MatchRow = {
  key: string;
  label: string;
  teams: string;
  date: string;
  venue: string;
  to: string;
  params?: Record<string, string>;
  search?: string;
};

type TournamentGroup = {
  key: string;
  sport: Exclude<Sport, "all">;
  name: string;
  meta: string;
  overviewTo: string;
  overviewParams?: Record<string, string>;
  matches: MatchRow[];
};

const searchSchema = z.object({
  sport: fallback(z.string(), "all").default("all"),
  q: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/matches")({
  validateSearch: zodValidator(searchSchema),
  head: () => {
    const title = "Matches 2026–27 — Cricket, Football & Tennis Schedule";
    const desc =
      "Every 2026–27 match grouped by tournament — cricket series, FIFA World Cup 2026, ATP/WTA tennis. Filter by sport, search teams, jump straight to fixtures & AI predictions.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: "matches 2026, cricket schedule 2026, football schedule, tennis schedule, fixtures, today match, live score, match prediction" },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "/matches" },
      ],
      links: [{ rel: "canonical", href: "/matches" }],
    };
  },
  component: MatchesIndex,
});

function buildGroups(): TournamentGroup[] {
  const cricketGroups: TournamentGroup[] = cricketSeries2026.map((s) => ({
    key: `cricket-${s.slug}`,
    sport: "cricket",
    name: s.name,
    meta: `${s.format} · ${s.window}`,
    overviewTo: "/cricket-schedule/$slug",
    overviewParams: { slug: s.slug },
    matches: (s.matches ?? []).map((m, i) => ({
      key: `${s.slug}-${i}`,
      label: m.label,
      teams: `${m.home} vs ${m.away}`,
      date: m.date,
      venue: m.venue,
      to: "/cricket-schedule/$slug/$match",
      params: { slug: s.slug, match: String(i + 1) },
    })),
  }));

  const footballGroup: TournamentGroup = {
    key: "football-fifa-wc-2026",
    sport: "football",
    name: "FIFA World Cup 2026 — Knockouts",
    meta: "Quarter-finals · Semi-finals · Final · Jul 2026",
    overviewTo: "/schedule",
    matches: wc2026Matches.map((m) => ({
      key: m.slug,
      label: m.stage,
      teams: `${m.home} vs ${m.away}`,
      date: m.dateLabel,
      venue: `${m.venue}, ${m.city}`,
      to: "/schedule/$slug",
      params: { slug: m.slug },
    })),
  };

  const tennisGroups: TournamentGroup[] = tennis2026.map((t) => ({
    key: `tennis-${t.slug}`,
    sport: "tennis",
    name: t.name,
    meta: `${t.category} · ${t.surface} · ${t.window}`,
    overviewTo: "/tennis-schedule/$slug",
    overviewParams: { slug: t.slug },
    matches: (t.rounds ?? []).map((r, i) => ({
      key: `${t.slug}-${i}`,
      label: r.label,
      teams: r.detail,
      date: r.date,
      venue: `${t.venue}, ${t.city}`,
      to: "/tennis-schedule/$slug/$round",
      params: { slug: t.slug, round: String(i + 1) },
    })),
  }));

  return [...cricketGroups, footballGroup, ...tennisGroups];
}

const SPORT_TABS: { id: Sport; label: string }[] = [
  { id: "all", label: "All Sports" },
  { id: "cricket", label: "Cricket" },
  { id: "football", label: "Football" },
  { id: "tennis", label: "Tennis" },
];

function MatchesIndex() {
  const { sport: sportParam, q: qParam } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(qParam);

  const sport = (SPORT_TABS.find((s) => s.id === sportParam)?.id ?? "all") as Sport;

  const groups = useMemo(() => buildGroups(), []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return groups
      .filter((g) => (sport === "all" ? true : g.sport === sport))
      .map((g) => {
        if (!needle) return g;
        const groupMatch = g.name.toLowerCase().includes(needle);
        const matches = g.matches.filter(
          (m) =>
            groupMatch ||
            m.teams.toLowerCase().includes(needle) ||
            m.label.toLowerCase().includes(needle) ||
            m.venue.toLowerCase().includes(needle),
        );
        return { ...g, matches };
      })
      .filter((g) => g.matches.length > 0 || (needle && g.name.toLowerCase().includes(needle)));
  }, [groups, sport, query]);

  const totalMatches = filtered.reduce((n, g) => n + g.matches.length, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border/50 bg-match-hero">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            <Trophy className="h-3.5 w-3.5" />
            Matches Index · 2026–27
          </span>
          <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cricket · Football · Tennis
          </p>
          <h1 className="mt-3 text-4xl font-black uppercase leading-tight text-foreground drop-shadow-sm md:text-6xl">
            All Matches, Grouped by Tournament
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Every cricket series, FIFA World Cup 2026 knockout, and ATP/WTA event in one place.
            Filter by sport, search teams or venues, and jump straight to fixtures, live score
            and AI match predictions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 font-medium backdrop-blur">
              <Calendar className="h-4 w-4 text-primary" /> 2026–27 Schedule
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 font-medium backdrop-blur">
              <Trophy className="h-4 w-4 text-primary" /> Tournament Groups
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 font-medium backdrop-blur">
              <Search className="h-4 w-4 text-primary" /> Sport Filter + Search
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {SPORT_TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() =>
                  navigate({ search: (prev: { sport: string; q: string }) => ({ ...prev, sport: t.id }), replace: true })
                }
                className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest transition ${
                  sport === t.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <label className="relative flex-1 md:max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                const v = e.target.value;
                setQuery(v);
                navigate({ search: (prev: { sport: string; q: string }) => ({ ...prev, q: v }), replace: true });
              }}
              placeholder="Search team, tournament or venue…"
              className="w-full rounded-full border border-border bg-card py-2 pl-10 pr-4 text-sm outline-none focus:border-primary"
              aria-label="Search matches"
            />
          </label>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Showing {filtered.length} tournament{filtered.length === 1 ? "" : "s"} · {totalMatches} match
          {totalMatches === 1 ? "" : "es"}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            No matches found. Try a different sport or search term.
          </p>
        ) : (
          <div className="space-y-8">
            {filtered.map((g) => (
              <article key={g.key} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
                      {g.sport}
                    </span>
                    <h2 className="mt-1 text-xl font-black uppercase">{g.name}</h2>
                    <p className="text-sm text-muted-foreground">{g.meta}</p>
                  </div>
                  <Link
                    to={g.overviewTo}
                    params={g.overviewParams as never}
                    className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold hover:border-primary hover:text-primary"
                  >
                    View tournament →
                  </Link>
                </div>

                {g.matches.length > 0 ? (
                  <ul className="mt-5 divide-y divide-border/60 overflow-hidden rounded-xl border border-border/60">
                    {g.matches.map((m) => (
                      <li key={m.key}>
                        <Link
                          to={m.to}
                          params={m.params as never}
                          className="flex flex-col gap-2 bg-background/60 p-4 transition hover:bg-primary/5 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div className="min-w-0">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                              {m.label}
                            </p>
                            <p className="mt-0.5 truncate font-semibold text-foreground">
                              {m.teams}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground sm:justify-end">
                            <span className="inline-flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {m.date}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {m.venue}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Fixtures publish once the schedule is confirmed.
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
