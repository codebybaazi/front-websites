import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import {
  Calendar,
  MapPin,
  Search,
  X,
  Clock,
  Hash,
} from "lucide-react";
import {
  allSeries,
  formatLongDate,
  type Sport,
  type ScheduleSeries,
} from "@/lib/schedule-data";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";
import { AIOverview } from "@/components/AIOverview";
import { RelatedLinks } from "@/components/RelatedLinks";

type MatchesSearch = { sport: string; q: string };

const matchesFaqs: FAQItem[] = [
  { q: "What is the Matches Index?", a: "A single page that groups every 2026-27 fixture by tournament — cricket series, FIFA World Cup 2026 knockouts and ATP/WTA events — with a sport filter and a search box for teams, tournaments or venues." },
  { q: "How does the search work?", a: "Type any team, tournament or venue name in the search box. The list filters in real time to tournaments that match, and each match row highlights within its tournament group." },
  { q: "How is this different from the Schedule page?", a: "The Schedule page is the calendar-first view with predictions and AI overview. The Matches Index is the search-first index — pick a sport, type a query, jump straight to a match page." },
  { q: "Where do the match pages come from?", a: "Every match links to its own /match/$slug page with venue, date, kick-off time and betting context." },
];

export const Route = createFileRoute("/matches")({
  validateSearch: (raw: Record<string, unknown>): MatchesSearch => ({
    sport: typeof raw.sport === "string" ? raw.sport : "all",
    q: typeof raw.q === "string" ? raw.q : "",
  }),
  head: () => ({
    meta: [
      { title: "All Matches 2026-27 — Tournament Index, Filter & Search" },
      { name: "description", content: "All cricket, football & tennis matches 2026-27 by tournament. Filter by sport, search teams or venues — jump to fixtures, live score & predictions." },
      { property: "og:title", content: "All Matches 2026-27 — Tournament Index, Filter & Search" },
      { property: "og:description", content: "Every cricket series, FIFA World Cup 2026 knockout & ATP/WTA event in one place. Filter by sport, search teams or venues, open any match page." },
      { property: "og:url", content: "https://mahadevbookss.com/matches" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/matches" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(matchesFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Matches", item: "https://mahadevbookss.com/matches" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/matches",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: MatchesIndexPage,
});

const TABS: { id: Sport | "all"; label: string; glyph: string }[] = [
  { id: "all", label: "All", glyph: "◇" },
  { id: "cricket", label: "Cricket", glyph: "◈" },
  { id: "football", label: "Football", glyph: "◉" },
  { id: "tennis", label: "Tennis", glyph: "◎" },
];

function MatchesIndexPage() {
  const { sport, q } = Route.useSearch();
  const navigate = Route.useNavigate();

  const activeSport = (["all", "cricket", "football", "tennis"].includes(sport) ? sport : "all") as Sport | "all";
  const query = q.trim().toLowerCase();

  const filtered = useMemo(() => {
    let list: ScheduleSeries[] = activeSport === "all" ? allSeries : allSeries.filter((s) => s.sport === activeSport);
    if (query) {
      list = list
        .map((s) => {
          const seriesHit =
            s.name.toLowerCase().includes(query) ||
            s.host.toLowerCase().includes(query) ||
            s.format.toLowerCase().includes(query);
          const matches = seriesHit
            ? s.matches
            : s.matches.filter(
                (m) =>
                  m.title.toLowerCase().includes(query) ||
                  m.subtitle.toLowerCase().includes(query) ||
                  (m.venue?.toLowerCase().includes(query) ?? false) ||
                  (m.city?.toLowerCase().includes(query) ?? false) ||
                  (m.home?.toLowerCase().includes(query) ?? false) ||
                  (m.away?.toLowerCase().includes(query) ?? false),
              );
          return { series: s, matches };
        })
        .filter((x) => x.matches.length > 0)
        .map((x) => ({ ...x.series, matches: x.matches }));
    }
    return list;
  }, [activeSport, query]);

  const totalMatches = filtered.reduce((n, s) => n + s.matches.length, 0);
  const cricketCount = allSeries.filter((s) => s.sport === "cricket").length;
  const footballCount = allSeries.filter((s) => s.sport === "football").length;
  const tennisCount = allSeries.filter((s) => s.sport === "tennis").length;

  const setSport = (id: Sport | "all") =>
    navigate({ search: (prev: MatchesSearch) => ({ ...prev, sport: id }) });
  const setQuery = (value: string) =>
    navigate({ search: (prev: MatchesSearch) => ({ ...prev, q: value }) });

  return (
    <div className="min-h-screen bg-background">
      {/* Editorial hero: asymmetric split, big index number, ticker rail */}
      <section className="relative border-b border-border overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] [background-size:56px_56px]"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-8 sm:pt-14 sm:pb-12">
          <nav className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-8 flex items-center gap-2">
            <Link to="/" className="hover:text-primary">
              home
            </Link>
            <span className="text-primary/50">→</span>
            <span className="text-foreground">/matches</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-end">
            <div className="font-display text-[100px] sm:text-[140px] leading-[0.85] font-bold text-gradient-gold tabular-nums">
              {String(allSeries.length).padStart(2, "0")}
            </div>
            <div className="lg:pb-4">
              <div className="text-[11px] font-mono uppercase tracking-[0.35em] text-primary">
                Index № 01 · Season 2026-27
              </div>
              <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] uppercase">
                Every fixture. <span className="text-primary">One index.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
                A single searchable ledger of {allSeries.length} tournaments and{" "}
                {allSeries.reduce((n, s) => n + s.matches.length, 0)} matches across cricket, football and tennis — filter by sport, type any team or venue, open the match page.
              </p>
            </div>
          </div>

          {/* Stat ticker */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 divide-x divide-border border-y border-border">
            {[
              { k: "Tournaments", v: allSeries.length },
              { k: "Cricket", v: cricketCount },
              { k: "Football", v: footballCount },
              { k: "Tennis", v: tennisCount },
            ].map((s) => (
              <div key={s.k} className="px-4 py-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">{s.k}</div>
                <div className="mt-1 font-display text-2xl font-bold tabular-nums text-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AIOverview
        summary={`The Matches Index is a single searchable ledger of ${allSeries.length} tournaments and ${allSeries.reduce((n, s) => n + s.matches.length, 0)} fixtures across the 2026-27 season — cricket series, FIFA World Cup 2026 knockouts and ATP/WTA events. Filter by sport, type any team or venue, and jump straight to a match page with venue, kick-off time and betting context.`}
        points={[
          `${cricketCount} cricket series including IPL, T20 World Cup and bilateral tours`,
          `${footballCount} football tournaments led by FIFA World Cup 2026`,
          `${tennisCount} tennis events across ATP and WTA calendars`,
          "Real-time search across teams, tournaments and venues",
        ]}
        keywords={["cricket schedule 2026", "FIFA World Cup 2026 fixtures", "ATP WTA calendar", "match index", "fixtures by tournament"]}
      />

      {/* Two-column workspace: sticky rail + results */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid gap-8 grid-cols-[minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* Sticky filter rail */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Filter · Sport
              </div>
              <div role="tablist" aria-label="Filter matches by sport" className="flex flex-col">
                {TABS.map((t) => {
                  const active = activeSport === t.id;
                  const count = t.id === "all" ? allSeries.length : allSeries.filter((s) => s.sport === t.id).length;
                  return (
                    <button
                      key={t.id}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSport(t.id)}
                      className={`group flex items-center justify-between border-l-2 pl-4 pr-2 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                        active
                          ? "border-primary text-primary bg-primary/5"
                          : "border-border/60 text-foreground/60 hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`text-lg ${active ? "text-primary" : "text-muted-foreground"}`}>{t.glyph}</span>
                        {t.label}
                      </span>
                      <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                        {String(count).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Filter · Search
              </div>
              <label className="relative block">
                <span className="sr-only">Search matches</span>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input
                  type="search"
                  inputMode="search"
                  placeholder="Team, venue, series…"
                  value={q}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-none border-0 border-b-2 border-border bg-transparent pl-9 pr-8 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition"
                />
                {q && (
                  <button
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </label>
            </div>

            <div className="border-t border-border pt-5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground leading-relaxed">
              <div><span className="text-primary">{filtered.length}</span> tournaments</div>
              <div><span className="text-primary">{totalMatches}</span> matches</div>
              {query && <div className="mt-2 text-foreground/70 normal-case tracking-normal">→ “{q}”</div>}
            </div>

            <Link
              to="/schedule"
              className="inline-flex w-full items-center justify-center gap-2 border border-primary/40 bg-primary/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary hover:bg-primary/10 transition"
            >
              <Calendar className="h-3.5 w-3.5" /> Calendar View
            </Link>
          </aside>

          {/* Results column */}
          <div>
            {filtered.length === 0 ? (
              <div className="border border-dashed border-border bg-card/40 p-10 text-center">
                <h2 className="font-display text-xl font-bold">No matches found</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try a different sport filter or clear the search box.
                </p>
                <button
                  onClick={() => {
                    setSport("all");
                    setQuery("");
                  }}
                  className="mt-4 inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary hover:bg-primary/20 transition"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="space-y-10">
                {filtered.map((series, idx) => (
                  <TournamentGroup key={series.slug} series={series} index={idx + 1} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <FAQSection items={matchesFaqs} />
      <RelatedLinks paths={["/schedule", "/predictions", "/mahadev-betting-app", "/mahadev-book-vs-skyexchange-247", "/blog"]} title="Explore Mahadev Book" />
    </div>
  );
}

function TournamentGroup({ series, index }: { series: ScheduleSeries; index: number }) {
  return (
    <article className="relative pl-6 sm:pl-8">
      {/* Vertical accent line */}
      <span aria-hidden className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
      <span aria-hidden className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--background)),0_0_0_5px_hsl(var(--primary)/0.4)]" />

      <header className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground tabular-nums">
          <Hash className="inline h-3 w-3 -mt-0.5 mr-0.5" />
          {String(index).padStart(2, "0")}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary border border-primary/40 px-2 py-0.5">
          {series.sport}
        </span>
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase leading-tight">
          {series.name}
        </h2>
        <span className="text-xs text-muted-foreground font-mono">
          {series.format} · {formatLongDate(series.start)} – {formatLongDate(series.end)}
        </span>
      </header>

      <ul className="grid gap-3 grid-cols-[minmax(0,1fr)] sm:grid-cols-2">
        {series.matches.map((m) => (
          <li key={m.slug}>
            <Link
              to="/match/$slug"
              params={{ slug: m.slug }}
              className="group relative flex gap-4 border border-border bg-card/60 p-4 hover:border-primary/60 hover:bg-card transition-all"
            >
              {/* Date block */}
              <div className="flex flex-col items-center justify-center min-w-[54px] border-r border-border/70 pr-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-primary">
                  {new Date(m.date).toLocaleDateString("en-US", { month: "short" })}
                </div>
                <div className="font-display text-2xl font-bold tabular-nums leading-none mt-0.5">
                  {new Date(m.date).getDate()}
                </div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mt-0.5">
                  {new Date(m.date).toLocaleDateString("en-US", { weekday: "short" })}
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold font-mono break-words">
                  {m.subtitle}
                </div>
                <div className="mt-1 font-semibold text-sm text-foreground group-hover:text-primary transition line-clamp-2">
                  {m.title}
                </div>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                  {m.time && (
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3 text-primary/70" />
                      {m.time}
                    </span>
                  )}
                  {(m.venue || m.city) && (
                    <span className="inline-flex items-center gap-1 truncate">
                      <MapPin className="h-3 w-3 text-primary/70" />
                      <span className="truncate">{[m.venue, m.city].filter(Boolean).join(", ")}</span>
                    </span>
                  )}
                </div>
              </div>

              <span
                aria-hidden
                className="absolute right-3 top-3 text-primary/0 group-hover:text-primary transition text-xs font-mono"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
