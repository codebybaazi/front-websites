import { abs } from "@/lib/site-url";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  Sparkles,
  Trophy,
  Target,
  Users,
  MapPin,
  Calendar,
  Clock,
  Check,
  ChevronRight,
  Goal,
} from "lucide-react";
import { SiteHeader, TELEGRAM } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { wc2026Matches, getWc2026Match } from "@/data/wc2026-matches";
import { footballPredictionQueryOptions } from "@/lib/football-prediction.functions";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";

const TOURNAMENT = "FIFA World Cup 2026";

export const Route = createFileRoute("/schedule/$slug")({
  loader: ({ params, context }) => {
    const match = getWc2026Match(params.slug);
    if (!match) throw notFound();
    context.queryClient.prefetchQuery(
      footballPredictionQueryOptions({
        tournament: TOURNAMENT,
        stage: match.stage,
        home: match.home,
        away: match.away,
        venue: match.venue,
        city: match.city,
        date: match.dateLabel,
        kickoff: match.kickoffEt,
      }),
    );
    return match;
  },
  head: ({ params, loaderData }) => {
    const m = loaderData;
    if (!m) {
      return {
        meta: [
          { title: "Match not found — Sprinters" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${m.home} vs ${m.away} — ${m.stage} Prediction`;
    const desc = `${m.home} vs ${m.away} (${m.stage}, ${TOURNAMENT}): AI prediction, predicted score, BTTS, over/under and betting IDs at ${m.venue}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: `${m.home} vs ${m.away} — ${TOURNAMENT} ${m.stage}` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: abs(`/schedule/${params.slug}`) },
      ],
      links: [{ rel: "canonical", href: `/schedule/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            name: `${m.home} vs ${m.away} — ${TOURNAMENT} ${m.stage}`,
            startDate: m.kickoffUtc,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            sport: "Football",
            location: { "@type": "Place", name: m.venue, address: m.city },
            homeTeam: { "@type": "SportsTeam", name: m.home },
            awayTeam: { "@type": "SportsTeam", name: m.away },
            superEvent: { "@type": "SportsEvent", name: TOURNAMENT },
          }),
        },
      ],
    };
  },
  component: MatchPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Match not found</h1>
        <p className="mt-4 text-muted-foreground">
          This {TOURNAMENT} fixture isn't in our schedule.
        </p>
        <Link to="/schedule" className="mt-6 inline-block text-primary underline">
          Back to schedule
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
});

function MatchPage() {
  const m = Route.useLoaderData();
  const whatsapp = useWhatsAppHref();
  const { data: pred } = useSuspenseQuery(
    footballPredictionQueryOptions({
      tournament: TOURNAMENT,
      stage: m.stage,
      home: m.home,
      away: m.away,
      venue: m.venue,
      city: m.city,
      date: m.dateLabel,
      kickoff: m.kickoffEt,
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
            {TOURNAMENT} · {m.stage}
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-[1.05] tracking-tight text-foreground drop-shadow-sm md:text-6xl">
            {m.home}
            <span className="mx-3 text-primary">vs</span>
            {m.away}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/70 md:text-base">
            Match {m.matchNo} · {m.stage}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
              <Calendar className="h-3.5 w-3.5 text-primary" />{m.dateLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
              <Clock className="h-3.5 w-3.5 text-primary" />{m.kickoffEt}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-primary" />{m.venue}, {m.city}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsapp} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-90">
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
          <li className="hover:text-primary">{TOURNAMENT}</li>
          <li><ChevronRight className="h-3 w-3" /></li>
          <li className="text-foreground">{m.home} vs {m.away}</li>
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
            {m.home} vs {m.away} — {m.stage} preview
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
              Who will win?
            </span>
            <h3 className="mt-3 text-3xl font-black uppercase">{pred.winner}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Confidence: <span className="font-semibold text-foreground">{pred.confidence}</span>
            </p>
            <p className="mt-4 text-muted-foreground">{pred.reasoning}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{m.home} form</p>
                <p className="mt-1 font-semibold">{pred.teamAForm}</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{m.away} form</p>
                <p className="mt-1 font-semibold">{pred.teamBForm}</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-4 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Head-to-head</p>
                <p className="mt-1 text-sm">{pred.headToHead}</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-4 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Venue note — {m.venue}</p>
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
            <Goal className="h-4 w-4" />
            Predicted score
          </span>
          <h2 className="mt-3 text-2xl font-black uppercase md:text-3xl">
            Half-time, full-time &amp; goal markets
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <ScoreCard label="Half-time" value={pred.scoreHalfTime} icon={<Clock className="h-4 w-4" />} />
            <ScoreCard label="Full-time" value={pred.scoreFullTime} icon={<Goal className="h-4 w-4" />} highlight />
            <ScoreCard label="Extra-time / Progression" value={pred.scoreAggregateIfExtra} icon={<Trophy className="h-4 w-4" />} />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <MarketPill label="BTTS" value={pred.bttsCall} />
            <MarketPill label="Over/Under" value={pred.overUnderCall} />
            <MarketPill label="Corners" value={pred.cornersCall} />
            <MarketPill label="Cards" value={pred.cardsCall} />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Powered by Lovable AI · projections are estimates and not a guarantee of outcome.
          </p>
        </div>
      </section>

      {/* Match info + about */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Info label="Match" value={`No. ${m.matchNo} — ${m.stage}`} />
          <Info label="Kick-off" value={`${m.kickoffEt}`} />
          <Info label="Date" value={m.dateLabel} />
          <Info label="Venue" value={`${m.venue}, ${m.city}`} />
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold">About {m.home} vs {m.away}</h2>
          <p className="mt-3 text-muted-foreground">
            The {m.stage.toLowerCase()} of the {TOURNAMENT} sees {m.home} face {m.away} at {m.venue}, {m.city} on {m.dateLabel} ({m.kickoffEt}).
            Bet on match winner, correct score, BTTS, over/under 2.5, corners, cards and live in-play with sharp odds on your Sprinters ID — instant UPI deposits and same-day withdrawals.
          </p>
        </div>
      </section>

      {/* Related matches */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Other upcoming matches — {TOURNAMENT}
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {wc2026Matches
              .filter((x) => x.slug !== m.slug)
              .map((x) => (
                <li key={x.slug}>
                  <Link
                    to="/schedule/$slug"
                    params={{ slug: x.slug }}
                    className="block rounded-lg border border-border bg-background px-4 py-3 text-sm hover:border-primary hover:text-primary"
                  >
                    <span className="font-semibold">{x.home} vs {x.away}</span>
                    <span className="ml-2 text-muted-foreground">· {x.stage}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* Related guides */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Related guides &amp; blogs</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <RelatedCard to="/football-betting" title="Football betting guide" desc="Markets, odds & tips for every tournament." />
          <RelatedCard to="/predictions" title="Today's AI predictions" desc="Cross-sport AI picks refreshed daily." />
          <RelatedCard to="/schedule" title="Full football schedule" desc="Every fixture & kick-off, 2026-27." />
          <RelatedCard to="/blog" title="Sprinters blog" desc="Match previews, strategy & payouts." />
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-3xl font-black uppercase">FAQs — {m.home} vs {m.away}</h2>
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
    <div className={`rounded-2xl border p-5 ${highlight ? "border-primary/50 bg-primary/5" : "border-border bg-background/60"}`}>
      <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {icon}
        {label}
      </p>
      <p className="mt-2 text-xl font-black">{value}</p>
    </div>
  );
}

function MarketPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">{label}</p>
      <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
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
