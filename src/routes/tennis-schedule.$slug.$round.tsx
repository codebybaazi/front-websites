import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Sparkles, Trophy, Target, MapPin, Calendar, Activity } from "lucide-react";
import { SiteHeader, WHATSAPP, TELEGRAM } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getTennisEvent, type TennisRound } from "@/data/tennis-2026";
import { tennisPredictionQueryOptions } from "@/lib/tennis-prediction.functions";

export const Route = createFileRoute("/tennis-schedule/$slug/$round")({
  loader: ({ params, context }) => {
    const t = getTennisEvent(params.slug);
    const idx = parseInt(params.round, 10) - 1;
    if (!t || !t.rounds || !t.rounds[idx]) throw notFound();
    const round = t.rounds[idx];
    context.queryClient.ensureQueryData(
      tennisPredictionQueryOptions({
        event: t.name,
        round: round.label,
        surface: t.surface,
        venue: t.venue,
        city: t.city,
        date: round.date,
        tour: t.tour,
        category: t.category,
      }),
    );
    return { event: t, round, idx };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Round not found — Sprinters" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { event, round } = loaderData;
    const title = `${round.label} ${event.short ?? event.name} 2026 Prediction — Who Will Win`;
    const desc = `${round.label} of ${event.name} 2026 on ${round.date} at ${event.venue}, ${event.city}. Tennis match prediction today: who will win, predicted champion, scoreline, total games, set betting and live odds.`;
    const keywords = `${event.name} 2026 prediction, ${event.short ?? event.name} ${round.label} prediction, who will win ${event.name} 2026, ${event.name} winner prediction, tennis match prediction today, ${event.name} live odds, ${event.name} betting tips, ${event.tour} 2026 prediction, ${event.surface} court prediction`;
    return {
      meta: [
        { title: title.slice(0, 60) },
        { name: "description", content: desc.slice(0, 160) },
        { name: "keywords", content: keywords },
        { property: "og:title", content: `${round.label} — ${event.name} 2026 Prediction` },
        { property: "og:description", content: desc.slice(0, 160) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/tennis-schedule/${params.slug}/${params.round}` },
      ],
      links: [{ rel: "canonical", href: `/tennis-schedule/${params.slug}/${params.round}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            name: `${round.label} — ${event.name} 2026`,
            description: desc,
            sport: "Tennis",
            startDate: round.date,
            location: { "@type": "Place", name: `${event.venue}, ${event.city}` },
            superEvent: { "@type": "SportsEvent", name: event.name },
            organizer: { "@type": "Organization", name: "Sprinters Online Gaming" },
          }),
        },
      ],
    };
  },
  component: TennisRoundPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Round not found</h1>
        <Link to="/schedule" className="mt-6 inline-block text-primary underline">
          Back to schedule
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
});

function TennisRoundPage() {
  const { event, round, idx } = Route.useLoaderData();
  const { data: pred } = useSuspenseQuery(
    tennisPredictionQueryOptions({
      event: event.name,
      round: round.label,
      surface: event.surface,
      venue: event.venue,
      city: event.city,
      date: round.date,
      tour: event.tour,
      category: event.category,
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
            background:
              "radial-gradient(circle at 15% 20%, hsl(var(--primary) / 0.18), transparent 55%), radial-gradient(circle at 85% 80%, hsl(var(--secondary) / 0.18), transparent 55%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            <Trophy className="h-3.5 w-3.5" />
            {event.tour} · {event.category}
          </span>
          <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {event.name}
          </p>
          <h1 className="mt-3 text-4xl font-black uppercase leading-tight text-foreground drop-shadow-sm md:text-6xl">
            {round.label}
          </h1>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 font-medium backdrop-blur">
              <Calendar className="h-4 w-4 text-primary" /> {round.date}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 font-medium backdrop-blur">
              <MapPin className="h-4 w-4 text-primary" /> {event.venue}, {event.city}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 font-medium backdrop-blur">
              <Activity className="h-4 w-4 text-primary" /> {event.surface}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg backdrop-blur"
            >
              Get Betting ID on WhatsApp
            </a>
            <a
              href={TELEGRAM}
              className="rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-semibold backdrop-blur"
            >
              Chat on Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-6 pt-6 text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/schedule" className="hover:text-primary">
              Schedule
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              to="/tennis-schedule/$slug"
              params={{ slug: event.slug }}
              className="hover:text-primary"
            >
              {event.short}
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground">{round.label}</li>
        </ol>
      </nav>

      {/* AI Overview */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 md:p-10"
          style={{ boxShadow: "var(--shadow-glow-secondary)" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <Sparkles className="h-3.5 w-3.5" /> AI Overview
          </span>
          <h2 className="mt-4 text-2xl font-black uppercase text-foreground md:text-3xl">
            {round.label} at {event.short}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {pred.overview}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground/70">
            Generated by Lovable AI
          </p>
        </div>
      </section>

      {/* AI Prediction — Who will win */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <Target className="h-3.5 w-3.5" /> AI Prediction
          </span>
          <h2 className="mt-4 text-2xl font-black uppercase text-foreground md:text-3xl">
            Who will win — and how many points
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <PredCard label="Favourite" value={pred.favourite} accent />
            <PredCard label="Dark horse" value={pred.darkHorse} />
            <PredCard label="Confidence" value={pred.confidence} />
          </div>

          <p className="mt-6 text-muted-foreground">{pred.reasoning}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <PredCard label="Projected finalist 1" value={pred.predictedFinalist1} />
            <PredCard label="Projected finalist 2" value={pred.predictedFinalist2} />
            <PredCard label="Predicted champion" value={pred.predictedChampion} accent />
          </div>
        </div>
      </section>

      {/* Predicted score */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
          <h2 className="text-2xl font-black uppercase text-foreground md:text-3xl">
            Predicted score & markets
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ScoreCard label="Projected scoreline" value={pred.scoreline} big />
            <ScoreCard label="Total games" value={pred.totalGames} />
            <ScoreCard label="Total sets" value={pred.totalSets} />
            <ScoreCard label="Tie-break call" value={pred.tieBreakCall} />
            <ScoreCard label="Surface note" value={pred.surfaceNote} />
          </div>
          <div className="mt-6 rounded-2xl border border-border/60 bg-background/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Key players to watch
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {pred.keyPlayers.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Match info */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <h2 className="text-xl font-bold">Round info</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Info label="Round" value={round.label} />
          <Info label="Date" value={round.date} />
          <Info label="Surface" value={event.surface} />
          <Info label="Category" value={event.category} />
        </div>
        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-bold">About this round</h3>
          <p className="mt-3 text-muted-foreground">{round.detail}</p>
          <p className="mt-3 text-muted-foreground">
            Looking for a {event.name} 2026 prediction for {round.label}? Get today's
            tennis match prediction with who will win, predicted champion, projected
            scoreline, total games, set betting, handicap and live in-play odds on the
            {" "}{event.surface} court at {event.venue}. Sprinters offers instant UPI
            deposits, 24-hour withdrawals and expert {event.tour} {event.category}{" "}
            betting tips.
          </p>
        </div>
      </section>

      {/* Other rounds */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Other rounds
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {(event.rounds ?? []).map((r: TennisRound, i: number) =>
              i === idx ? null : (
                <li key={i}>
                  <Link
                    to="/tennis-schedule/$slug/$round"
                    params={{ slug: event.slug, round: String(i + 1) }}
                    className="block rounded-lg border border-border bg-background px-4 py-3 text-sm hover:border-primary hover:text-primary"
                  >
                    <span className="font-semibold">{r.label}</span>
                    <span className="ml-2 text-muted-foreground">· {r.date}</span>
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="mt-6">
            <Link
              to="/tennis-schedule/$slug"
              params={{ slug: event.slug }}
              className="text-sm font-semibold text-primary"
            >
              ← Full {event.short} schedule
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">FAQ</span>
        <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-3">
          {pred.faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border/70 bg-card p-4 open:border-primary/60"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-foreground md:text-base">
                {f.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function PredCard({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        accent
          ? "border-primary/40 bg-primary/10"
          : "border-border bg-background/60"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className={`mt-2 text-lg font-bold ${accent ? "text-primary" : "text-foreground"}`}>
        {value}
      </p>
    </div>
  );
}

function ScoreCard({
  label,
  value,
  big = false,
}: {
  label: string;
  value: string;
  big?: boolean;
}) {
  return (
    <div className={`rounded-2xl border border-border bg-background/60 p-5 ${big ? "md:col-span-2" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">{label}</p>
      <p className={`mt-2 font-bold text-foreground ${big ? "text-xl md:text-2xl" : "text-base"}`}>
        {value}
      </p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-lg font-bold text-foreground">{value}</p>
    </div>
  );
}
