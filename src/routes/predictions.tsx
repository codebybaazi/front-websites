import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SiteHeader, WHATSAPP, TELEGRAM } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageFaqs } from "@/components/PageFaqs";
import { liveMatchesQueryOptions, type ApiEvent } from "@/lib/live-matches.functions";
import { MessageCircle, Send, Trophy, Clock, MapPin, TrendingUp, Target, Zap, Radio } from "lucide-react";

type CricketMatch = {
  id: string;
  league: string;
  teamA: string;
  teamB: string;
  name: string;
  startTs: number | null;
  isLive: boolean;
  backA: number | null;
  layA: number | null;
  backB: number | null;
  layB: number | null;
};

function splitTeams(name: string): { a: string; b: string } {
  const parts = (name || "").trim().split(/\s+(?:vs?\.?|v\/s|@)\s+/i);
  if (parts.length === 2) return { a: parts[0].trim(), b: parts[1].trim() };
  return { a: name || "TBA", b: "" };
}

function toCricketMatch(e: ApiEvent): CricketMatch {
  const { a, b } = splitTeams(e.event?.name || "");
  const iso = e.market?.event?.openDate || e.event?.openDate;
  const ts = iso ? Date.parse(iso) : NaN;
  const startTs = Number.isNaN(ts) ? null : ts;
  const flagged = !!(e.market?.inPlay || e.isInPlay || e.status === "InPlay");
  // Match homepage behaviour: a future-dated flagged event is upcoming, not live.
  const isLive = flagged && !(startTs != null && startTs > Date.now());
  const back = e.market?.consolidatedRunner?.back ?? [];
  const lay = e.market?.consolidatedRunner?.lay ?? [];
  return {
    id: e.event?.id ?? Math.random().toString(36).slice(2),
    league: e.market?.competition?.name || "Cricket",
    teamA: a,
    teamB: b,
    name: e.event?.name || "Match",
    startTs,
    isLive,
    backA: back[0]?.price ?? null,
    layA: lay[0]?.price ?? null,
    backB: back[1]?.price ?? null,
    layB: lay[1]?.price ?? null,
  };
}

export const Route = createFileRoute("/predictions")({
  loader: ({ context }) => context.queryClient.ensureQueryData(liveMatchesQueryOptions),
  head: () => ({
    meta: [
      { title: "Today Match Prediction & Cricket Betting Tips | Sprinters" },
      {
        name: "description",
        content:
          "Live and upcoming cricket match predictions, toss calls and betting tips from the Sprinters trading desk. Real fixtures, live odds, free daily tips on WhatsApp.",
      },
      { property: "og:title", content: "Today Match Prediction & Cricket Betting Tips" },
      {
        property: "og:description",
        content: "Real live and upcoming cricket fixtures with predictions, live odds and fancy tips from Sprinters.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/predictions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/predictions" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsEvent",
          name: "Daily Cricket Match Predictions",
          description: "Live and upcoming cricket match tips with real exchange odds.",
          sport: "Cricket",
          organizer: { "@type": "Organization", name: "Sprinters Online Gaming" },
        }),
      },
    ],
  }),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Couldn't load fixtures right now</h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
        <a href={WHATSAPP} className="mt-6 inline-block text-primary underline">
          Message us for today's tips
        </a>
      </section>
      <SiteFooter />
    </div>
  ),
  component: PredictionsPage,
});

function PredictionsPage() {
  const { data } = useSuspenseQuery({ ...liveMatchesQueryOptions, refetchInterval: 20_000 });

  const cricket = useMemo<CricketMatch[]>(() => {
    const now = Date.now();
    return (data ?? [])
      .filter((e) => {
        const type = (e.eventType || "").toLowerCase();
        if (type !== "cricket") return false;
        const comp = e.market?.competition?.name || "";
        if (/casino|lobby|sportsbook/i.test(comp)) return false;
        return true;
      })
      .map(toCricketMatch)
      .filter((m) => m.isLive || !m.startTs || m.startTs > now - 3 * 60 * 60 * 1000)
      .sort((a, b) => {
        if (a.isLive !== b.isLive) return a.isLive ? -1 : 1;
        return (a.startTs ?? Infinity) - (b.startTs ?? Infinity);
      });
  }, [data]);

  const live = cricket.filter((m) => m.isLive);
  const upcoming = cricket.filter((m) => !m.isLive);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            Daily Predictions
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight md:text-5xl">
            Today Match Prediction & Cricket Betting Tips
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Real live and upcoming cricket fixtures from the same exchange feed you see on our homepage. Tap any match
            for details or message the Sprinters desk on WhatsApp for today's pick.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-xs text-muted-foreground">
            Odds updated in near real-time. Tips are analytical opinions, not guarantees. 18+ — bet responsibly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-3">
          <Radio className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold uppercase tracking-wide">
            Live now <span className="ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">{live.length}</span>
          </h2>
        </div>
        {live.length === 0 ? (
          <p className="mt-6 rounded-xl border border-border bg-card p-6 text-muted-foreground">
            No cricket matches in play right now. See upcoming fixtures below.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {live.map((m) => <MatchCard key={m.id} m={m} />)}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex items-center gap-3">
          <Clock className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold uppercase tracking-wide">
            Upcoming <span className="ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">{upcoming.length}</span>
          </h2>
        </div>
        {upcoming.length === 0 ? (
          <p className="mt-6 rounded-xl border border-border bg-card p-6 text-muted-foreground">
            No upcoming cricket fixtures published yet. Message us on WhatsApp for today's card.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {upcoming.slice(0, 12).map((m) => <MatchCard key={m.id} m={m} />)}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-2xl font-bold">How our trading desk calls a match</h2>
          <p className="mt-3 text-muted-foreground">
            Every fixture is graded on pitch report, weather, head-to-head form, player workloads and live exchange
            movement. When you ping us on WhatsApp we send the confidence rating, suggested market and session/fancy
            ideas — sized so you can stake to your own bankroll.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            <li className="rounded-xl border border-border/60 p-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">Live odds tracked</p>
              <p className="text-xs text-muted-foreground">Refreshed against top exchanges every 20 seconds.</p>
            </li>
            <li className="rounded-xl border border-border/60 p-4">
              <Target className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">Fancy & session tips</p>
              <p className="text-xs text-muted-foreground">Powerplay, over-under and player prop ideas.</p>
            </li>
            <li className="rounded-xl border border-border/60 p-4">
              <Zap className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">Toss + venue reads</p>
              <p className="text-xs text-muted-foreground">Ground-by-ground bat/chase bias.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl p-10 text-center md:p-14" style={{ background: "var(--gradient-hero)" }}>
          <p className="mx-auto max-w-xl text-lg font-semibold text-white">
            Want the pick before the toss? Get your Sprinters ID and receive daily predictions on WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:opacity-90">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
            <a href={TELEGRAM} className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">
              <Send className="h-5 w-5" /> Telegram
            </a>
          </div>
        </div>
      </section>

      <PageFaqs />
      <SiteFooter />
    </div>
  );
}

function formatDateTime(ts: number | null) {
  if (!ts) return "TBA";
  return new Date(ts).toLocaleString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  });
}

function OddPill({ label, back, lay }: { label: string; back: number | null; lay: number | null }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-lg border border-border/60 bg-background/50 px-2 py-1.5">
      <span className="text-[10px] font-bold uppercase text-muted-foreground">{label}</span>
      <div className="flex gap-1">
        <span className="min-w-[36px] rounded bg-emerald-500/15 px-1.5 py-0.5 text-center text-[11px] font-bold text-emerald-500">
          {back ?? "—"}
        </span>
        <span className="min-w-[36px] rounded bg-sky-500/15 px-1.5 py-0.5 text-center text-[11px] font-bold text-sky-500">
          {lay ?? "—"}
        </span>
      </div>
    </div>
  );
}

function MatchCard({ m }: { m: CricketMatch }) {
  const waMsg = encodeURIComponent(
    `Hi Sprinters, send me today's prediction for ${m.teamA}${m.teamB ? ` vs ${m.teamB}` : ""} (${m.league}).`,
  );
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary">
      <div className="h-2 w-full" style={{ background: "var(--gradient-hero)" }} aria-hidden />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{m.league}</span>
          {m.isLive ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-red-500/40 bg-red-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-500">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Upcoming
            </span>
          )}
        </div>
        <h3 className="mt-2 text-2xl font-black">
          <Link to="/match/$id" params={{ id: m.id }} className="hover:text-primary">
            {m.teamA}
            {m.teamB && <><span className="text-muted-foreground"> vs </span>{m.teamB}</>}
          </Link>
        </h3>
        <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {m.league}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {formatDateTime(m.startTs)}
          </span>
        </div>
        {(m.backA || m.backB) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {m.teamA && <OddPill label={m.teamA.slice(0, 10)} back={m.backA} lay={m.layA} />}
            {m.teamB && <OddPill label={m.teamB.slice(0, 10)} back={m.backB} lay={m.layB} />}
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            to="/match/$id"
            params={{ id: m.id }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-bold transition hover:border-primary"
          >
            <Trophy className="h-4 w-4" /> View match
          </Link>
          <a
            href={`${WHATSAPP}?text=${waMsg}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> Get tip on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
