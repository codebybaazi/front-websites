import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SiteHeader, TELEGRAM } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageFaqs } from "@/components/PageFaqs";
import { matchByEventIdQueryOptions, type ApiEvent } from "@/lib/live-matches.functions";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";
import { MessageCircle, Send, MapPin, Clock, Trophy, Target, TrendingUp, Radio } from "lucide-react";

function splitTeams(name: string): { a: string; b: string } {
  const parts = (name || "").trim().split(/\s+(?:vs?\.?|v\/s|@)\s+/i);
  if (parts.length === 2) return { a: parts[0].trim(), b: parts[1].trim() };
  return { a: name || "TBA", b: "" };
}

function eventStart(e: ApiEvent): number | null {
  const iso = e.market?.event?.openDate || e.event?.openDate;
  const ts = iso ? Date.parse(iso) : NaN;
  return Number.isNaN(ts) ? null : ts;
}

function isLive(e: ApiEvent): boolean {
  return !!(e.market?.inPlay || e.isInPlay || e.status === "InPlay");
}

function formatDateTime(ts: number | null) {
  if (!ts) return "TBA";
  return new Date(ts).toLocaleString("en-IN", {
    weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata",
  });
}

export const Route = createFileRoute("/match/$id")({
  loader: async ({ params, context }) => {
    const e = await context.queryClient.ensureQueryData(matchByEventIdQueryOptions(params.id));
    if (!e) throw notFound();
    return e;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Match not found | Sprinters" }, { name: "robots", content: "noindex" }] };
    }
    const e = loaderData;
    const { a, b } = splitTeams(e.event?.name || "");
    const league = e.market?.competition?.name || (e.eventType ?? "Cricket");
    const sport = e.eventType || "Cricket";
    const matchName = b ? `${a} vs ${b}` : a;
    const isWC = /world cup|fifa/i.test(league);
    const title = `${matchName} Prediction — Who Will Win, Live Odds & Tips`;
    const description = `${matchName} ${league} prediction today: who will win, expert analysis, live match odds, scoreline and betting tips${isWC ? " for FIFA World Cup 2026" : ""}. Get instant Sprinters betting ID.`;
    const keywords = `${matchName} prediction, ${matchName} live odds, ${matchName} match prediction today, who will win ${matchName}, ${league} prediction, ${league} live odds, ${sport} match prediction today, ${sport} betting tips${isWC ? ", FIFA World Cup 2026 prediction, who will win 2026 FIFA World Cup" : ""}`;
    const url = `/match/${params.id}`;
    return {
      meta: [
        { title: title.slice(0, 60) },
        { name: "description", content: description.slice(0, 160) },
        { name: "keywords", content: keywords },
        { property: "og:title", content: `${matchName} — ${league} Prediction` },
        { property: "og:description", content: description.slice(0, 160) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            name: matchName,
            description,
            sport: e.eventType || "Cricket",
            startDate: e.market?.event?.openDate || e.event?.openDate || undefined,
            competitor: b
              ? [{ "@type": "SportsTeam", name: a }, { "@type": "SportsTeam", name: b }]
              : [{ "@type": "SportsTeam", name: a }],
            organizer: { "@type": "Organization", name: "Sprinters Online Gaming" },
          }),
        },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Couldn't load this match</h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
        <Link to="/predictions" className="mt-6 inline-block text-primary underline">Back to predictions</Link>
      </section>
      <SiteFooter />
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Match not available</h1>
        <p className="mt-4 text-muted-foreground">
          This fixture has finished, been rescheduled, or isn't on the live feed right now.
        </p>
        <Link to="/predictions" className="mt-6 inline-block text-primary underline">See today's predictions</Link>
      </section>
      <SiteFooter />
    </div>
  ),
  component: MatchPage,
});

function MatchPage() {
  const { id } = Route.useParams();
  const { data } = useSuspenseQuery({ ...matchByEventIdQueryOptions(id), refetchInterval: 20_000 });
  const e = data!;
  const { a: teamA, b: teamB } = splitTeams(e.event?.name || "");
  const league = e.market?.competition?.name || (e.eventType ?? "Cricket");
  const startTs = eventStart(e);
  const live = isLive(e);
  const back = e.market?.consolidatedRunner?.back ?? [];
  const lay = e.market?.consolidatedRunner?.lay ?? [];

  const matchName = teamB ? `${teamA} vs ${teamB}` : teamA;
  const whatsapp = useWhatsAppHref(`Hi Sprinters, send me the prediction and odds for ${matchName} (${league}).`);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
              {league}
            </span>
            {live && (
              <span className="inline-flex items-center gap-1 rounded-full border border-red-500/40 bg-red-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
                <Radio className="h-3 w-3" /> Live now
              </span>
            )}
          </div>
          <h1 className="mt-6 text-3xl font-black uppercase leading-tight md:text-5xl">
            {teamA}
            {teamB && <><span className="text-muted-foreground"> vs </span>{teamB}</>}
          </h1>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {league}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {formatDateTime(startTs)}</span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsapp} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
              <MessageCircle className="h-5 w-5" /> Get prediction on WhatsApp
            </a>
            <a href={TELEGRAM} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold transition hover:border-primary">
              <Send className="h-5 w-5" /> Telegram
            </a>
          </div>
        </div>
      </section>

      {(back.length > 0 || lay.length > 0) && (
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold uppercase tracking-wide">Live match odds</h2>
            <p className="mt-1 text-xs text-muted-foreground">Back (blue) and lay (green) from consolidated exchange feed. Updates every 20s.</p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <thead className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="py-2 pr-4 font-bold">Runner</th>
                    <th className="py-2 pr-4 text-center font-bold text-emerald-500">Back</th>
                    <th className="py-2 text-center font-bold text-sky-500">Lay</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: Math.max(back.length, lay.length) }).map((_, i) => {
                    const bk = back[i];
                    const ly = lay[i];
                    const name = bk?.runner.name || ly?.runner.name || "—";
                    return (
                      <tr key={i} className="border-t border-border/50">
                        <td className="py-2.5 pr-4 font-semibold">{name}</td>
                        <td className="py-2.5 pr-4 text-center">
                          <span className="inline-block min-w-[52px] rounded bg-emerald-500/15 px-2 py-1 font-bold text-emerald-500">
                            {bk?.price ?? "—"}
                          </span>
                        </td>
                        <td className="py-2.5 text-center">
                          <span className="inline-block min-w-[52px] rounded bg-sky-500/15 px-2 py-1 font-bold text-sky-500">
                            {ly?.price ?? "—"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-2xl font-bold">{matchName} prediction today — who will win?</h2>
          <p className="mt-3 text-muted-foreground">
            Looking for a {matchName} prediction for today's {league} clash? Our trading
            desk tracks live match odds, expert analysis, head-to-head form, line-ups,
            venue trends and exchange movement ball-by-ball. Get the match winner
            prediction, toss call, scoreline projection and fancy session tips on
            WhatsApp before the first whistle.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            <li className="rounded-xl border border-border/60 p-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">Live match odds</p>
              <p className="text-xs text-muted-foreground">Match winner and toss updated live above.</p>
            </li>
            <li className="rounded-xl border border-border/60 p-4">
              <Target className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">Fancy & session tips</p>
              <p className="text-xs text-muted-foreground">Over-by-over runs, batsman props and partnerships.</p>
            </li>
            <li className="rounded-xl border border-border/60 p-4">
              <Trophy className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">Toss & venue read</p>
              <p className="text-xs text-muted-foreground">Ground-by-ground bat/chase bias analysis.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl p-10 text-center md:p-14" style={{ background: "var(--gradient-hero)" }}>
          <p className="mx-auto max-w-xl text-lg font-semibold text-white">
            Bet on {matchName} with a Sprinters ID — deposit and withdraw in minutes on WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={whatsapp} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:opacity-90">
              <MessageCircle className="h-5 w-5" /> WhatsApp us
            </a>
            <Link to="/predictions" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">
              More predictions
            </Link>
          </div>
        </div>
      </section>

      <PageFaqs />
      <SiteFooter />
    </div>
  );
}
