import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Sparkles, Trophy, Target, Users, MapPin, Calendar, TrendingUp, Check, ChevronRight } from "lucide-react";
import { SiteHeader, WHATSAPP, TELEGRAM } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getCricketSeries, type CricketSeriesMatch } from "@/data/cricket-series-2026";
import { matchPredictionQueryOptions } from "@/lib/match-prediction.functions";

export const Route = createFileRoute("/cricket-schedule/$slug/$match")({
  loader: ({ params, context }) => {
    const s = getCricketSeries(params.slug);
    const idx = parseInt(params.match, 10) - 1;
    if (!s || !s.matches || !s.matches[idx]) throw notFound();
    const m = s.matches[idx];
    context.queryClient.prefetchQuery(
      matchPredictionQueryOptions({
        seriesName: s.name,
        matchLabel: m.label,
        home: m.home,
        away: m.away,
        venue: m.venue,
        date: m.date,
        format: s.format,
      }),
    );
    return { series: s, match: m, idx };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Match not found — Sprinters" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { series, match } = loaderData;
    const title = `${match.home} vs ${match.away} Prediction — Who Will Win ${match.label}`;
    const desc = `${match.home} vs ${match.away} (${match.label}, ${series.name}) today match prediction, who will win, winning percentage, live score, playing XI, pitch report & cricket betting tips at ${match.venue}.`;
    const keywords = [
      `${match.home} vs ${match.away}`,
      `${match.home} vs ${match.away} prediction`,
      `${match.home} vs ${match.away} who will win`,
      `${match.home} vs ${match.away} live score`,
      `${match.home} vs ${match.away} playing 11`,
      `${match.home} vs ${match.away} toss prediction`,
      `${match.label} prediction`,
      "today match prediction",
      "who will win today match",
      "today match winner",
      "cricket match prediction",
      "cricket betting tips",
      "online cricket betting",
    ].join(", ");
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: keywords },
        { property: "og:title", content: `${match.home} vs ${match.away} — ${series.name} Prediction` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/cricket-schedule/${params.slug}/${params.match}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${match.home} vs ${match.away} Prediction` },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: `/cricket-schedule/${params.slug}/${params.match}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            name: `${match.home} vs ${match.away} — ${match.label}`,
            description: desc,
            sport: "Cricket",
            startDate: match.date,
            location: { "@type": "Place", name: match.venue },
            competitor: [
              { "@type": "SportsTeam", name: match.home },
              { "@type": "SportsTeam", name: match.away },
            ],
            superEvent: { "@type": "SportsEvent", name: series.name },
            organizer: { "@type": "Organization", name: "Sprinters Online Gaming" },
          }),
        },
      ],
    };
  },

  component: CricketMatchPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Match not found</h1>
        <Link to="/schedule" className="mt-6 inline-block text-primary underline">
          Back to schedule
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
});

function CricketMatchPage() {
  const { series, match, idx } = Route.useLoaderData();
  const others = (series.matches ?? []).filter((_: CricketSeriesMatch, i: number) => i !== idx);
  const { data: pred } = useSuspenseQuery(
    matchPredictionQueryOptions({
      seriesName: series.name,
      matchLabel: match.label,
      home: match.home,
      away: match.away,
      venue: match.venue,
      date: match.date,
      format: series.format,
    }),
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-background via-card to-background">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, hsl(var(--primary)/0.35), transparent 55%), radial-gradient(circle at 85% 80%, hsl(var(--primary)/0.25), transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary backdrop-blur">
            <Trophy className="h-3.5 w-3.5" />
            {series.short} · {match.label}
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-[1.05] tracking-tight text-foreground drop-shadow-sm md:text-6xl">
            {match.home}
            <span className="mx-3 text-primary">vs</span>
            {match.away}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/70 md:text-base">
            {series.name}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
              <Calendar className="h-3.5 w-3.5 text-primary" />{match.date}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-primary" />{match.venue}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
              <Target className="h-3.5 w-3.5 text-primary" />{series.format}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-90">
              Get Betting ID on WhatsApp
            </a>
            <a href={TELEGRAM} className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
              Chat on Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-6xl px-6 pt-6 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><ChevronRight className="h-3 w-3" /></li>
          <li><Link to="/schedule" className="hover:text-primary">Schedule</Link></li>
          <li><ChevronRight className="h-3 w-3" /></li>
          <li>
            <Link to="/cricket-schedule/$slug" params={{ slug: series.slug }} className="hover:text-primary">
              {series.short}
            </Link>
          </li>
          <li><ChevronRight className="h-3 w-3" /></li>
          <li className="text-foreground">{match.label}</li>
        </ol>
      </nav>


      {/* AI Overview */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8"
          style={{ boxShadow: "var(--shadow-glow-secondary)" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            AI Match Overview
          </span>
          <h2 className="mt-4 text-2xl font-black uppercase leading-tight md:text-3xl">
            {match.home} vs {match.away} Today Match Prediction — Who Will Win {match.label}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {pred.reasoning}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground/70">Generated by Lovable AI</p>
        </div>
      </section>

      {/* Who will win */}
      <section className="mx-auto max-w-5xl px-6 pb-4">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <Trophy className="h-4 w-4" />
              Who will win today match?
            </span>
            <h3 className="mt-3 text-3xl font-black uppercase">
              {pred.winner}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">Winning percentage: <span className="font-semibold text-foreground">{pred.confidence}</span></p>

            <p className="mt-4 text-muted-foreground">{pred.reasoning}</p>
            <div className="mt-6 grid gap-3">
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Head-to-head</p>
                <p className="mt-1 text-sm">{pred.headToHead}</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Venue note — {match.venue}</p>
                <p className="mt-1 text-sm">{pred.venueNote}</p>
              </div>
            </div>

          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <Users className="h-4 w-4" />
              Key players to watch
            </span>
            <ul className="mt-4 space-y-3">
              {pred.keyPlayers.map((p) => (
                <li key={p} className="flex items-start gap-2 rounded-xl border border-border bg-background/60 p-4 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Predicted scores */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-border bg-card p-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <Target className="h-4 w-4" />
            Predicted score
          </span>
          <h2 className="mt-3 text-2xl font-black uppercase md:text-3xl">
            Projected scoreline &amp; over-by-over
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <ScoreCard label="After 5 overs" value={pred.score5} icon={<TrendingUp className="h-4 w-4" />} />
            <ScoreCard label="After 10 overs" value={pred.score10} icon={<TrendingUp className="h-4 w-4" />} />
            <ScoreCard label="Full match" value={pred.scoreFull} icon={<Trophy className="h-4 w-4" />} highlight />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Powered by Lovable AI · projections are estimates and not a guarantee of outcome.
          </p>
        </div>
      </section>

      {/* Match info + about */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Info label="Match" value={match.label} />
          <Info label="Date" value={match.date} />
          <Info label="Venue" value={match.venue} />
          <Info label="Series" value={series.short} />
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold">About {match.home} vs {match.away}</h2>
          <p className="mt-3 text-muted-foreground">
            The {match.label} of the {series.name} sees {match.home} host {match.away} at {match.venue} on {match.date}.
            Bet on match winner, top batter, top bowler, over/under runs, powerplay markets and live in-play with sharp odds
            on your Sprinters ID — instant UPI deposits and same-day withdrawals.
          </p>
          <p className="mt-3 text-muted-foreground">
            {series.summary}
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Popular betting markets — {match.home} vs {match.away}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• <span className="font-semibold text-foreground">Match winner:</span> back {match.home} or {match.away} to lift the {match.label}.</li>
              <li>• <span className="font-semibold text-foreground">Top batter & top bowler:</span> pick the standout performer from either side.</li>
              <li>• <span className="font-semibold text-foreground">Over/under runs:</span> total match runs, first-innings score, powerplay runs.</li>
              <li>• <span className="font-semibold text-foreground">Session & fancy markets:</span> 6-over, 10-over, 15-over lambi lines with live updates.</li>
              <li>• <span className="font-semibold text-foreground">Live in-play:</span> ball-by-ball odds, next-wicket, next-over runs.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Betting tips for this {series.format}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Check the toss — chasing sides win most day-night games at {match.venue}.</li>
              <li>• Track pitch reports 30 minutes before the {match.label} for spin vs pace bias.</li>
              <li>• Split your stake across match winner + a top-batter pick to reduce variance.</li>
              <li>• Use live in-play to hedge if the powerplay swings against your pre-match pick.</li>
              <li>• Set a session limit — Sprinters supports responsible-betting deposit caps.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold">Why bet on {match.home} vs {match.away} with Sprinters</h2>
          <p className="mt-3 text-muted-foreground">
            Sprinters delivers a verified betting ID in minutes over WhatsApp with the sharpest cricket odds on {series.short},
            instant UPI deposits, same-day withdrawals, 24×7 support and access to all major exchanges. Watch the {match.label}
            live, place pre-match and in-play bets, and cash out any time — all from one Sprinters login.
          </p>
        </div>
      </section>


      {/* Related matches */}
      {others.length > 0 && (
        <section className="border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Related matches — {series.short}
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {(series.matches ?? []).map((m: CricketSeriesMatch, i: number) =>
                i === idx ? null : (
                  <li key={i}>
                    <Link
                      to="/cricket-schedule/$slug/$match"
                      params={{ slug: series.slug, match: String(i + 1) }}
                      className="block rounded-lg border border-border bg-background px-4 py-3 text-sm hover:border-primary hover:text-primary"
                    >
                      <span className="font-semibold">{m.label}: {m.home} vs {m.away}</span>
                      <span className="ml-2 text-muted-foreground">· {m.date}</span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>
      )}

      {/* Related guides */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Related guides &amp; blogs</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <RelatedCard to="/cricket-betting" title="Cricket betting guide" desc="Markets, odds & tips for every format." />
          <RelatedCard to="/predictions" title="Today's AI predictions" desc="Cross-sport AI picks refreshed daily." />
          <RelatedCard to="/cricket-schedule" title="Full cricket schedule" desc="Every series & fixture, 2026-27." />
          <RelatedCard to="/blog" title="Sprinters blog" desc="Match previews, strategy & payouts." />
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-3xl font-black uppercase">FAQs — {match.home} vs {match.away}</h2>
          <div className="mt-6 space-y-3">
            {pred.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/50"
              >
                <summary className="cursor-pointer list-none font-semibold text-foreground">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {f.q}
                    <ChevronRight className="h-4 w-4 shrink-0 transition group-open:rotate-90" />
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ScoreCard({ label, value, icon, highlight }: { label: string; value: string; icon: React.ReactNode; highlight?: boolean }) {
  return (
    <div
      className={`rounded-2xl border p-5 ${highlight ? "border-primary/50 bg-primary/5" : "border-border bg-background/60"}`}
    >
      <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {icon}
        {label}
      </p>
      <p className="mt-2 text-xl font-black">{value}</p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-2 text-lg font-bold text-foreground">{value}</p>
    </div>
  );
}

function RelatedCard({ to, title, desc }: { to: string; title: string; desc: string }) {
  return (
    <Link
      to={to}
      className="block rounded-2xl border border-border bg-card p-5 transition hover:border-primary hover:shadow-lg"
    >
      <p className="font-bold text-foreground">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
        Read more <ChevronRight className="h-3 w-3" />
      </span>
    </Link>
  );
}
