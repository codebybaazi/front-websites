import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { posts } from "@/data/posts";
import {
  Calendar,
  MapPin,
  MessageCircle,
  ChevronRight,
  Clock,
  ArrowLeft,
  Target,
  Sparkles,
  Trophy,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Flag,
  BookOpen,
  Star,
} from "lucide-react";
import { getMatchBySlug, formatLongDate, allMatches, type ScheduleMatch } from "@/lib/schedule-data";
import { getMatchPrediction, hasRealTeams } from "@/lib/match-predictions";
import { getTennisPrediction, tennisStageFromSubtitle, tennisTourFromSubtitle } from "@/lib/tennis-predictions";
import { getCricketPrediction, formatFromSubtitle, hasKnownCricketTeams } from "@/lib/cricket-predictions";

export const Route = createFileRoute("/match/$slug")({
  loader: ({ params }) => {
    const found = getMatchBySlug(params.slug);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Match not found" }, { name: "robots", content: "noindex" }] };
    }
    const { match, series } = loaderData;
    const isFootball = series.sport === "football" && hasRealTeams(match.home, match.away);
    const isCricket = series.sport === "cricket";
    const rawTitle = isFootball
      ? `${match.title} Live Score, Prediction & Odds — World Cup 2026 ${match.subtitle}`
      : isCricket
      ? `${match.title} Live Cricket Score, Today Match Prediction — ${match.subtitle}`
      : series.sport === "tennis"
      ? `${match.title} Live Score & Prediction — ${series.name}`
      : `${match.title} Prediction & Live Score — ${match.subtitle}, ${series.name}`;
    const title = rawTitle.length > 60 ? `${rawTitle.slice(0, 60).trimEnd()}…` : rawTitle;
    const rawDesc = isFootball
      ? `${match.title} FIFA World Cup 2026 ${match.subtitle} — live score, today match prediction, projected top scorer${match.venue ? `, ${match.venue}` : ""} on ${formatLongDate(match.date)}. World cup 2026 fixtures & odds.`
      : isCricket
      ? `${match.title} live cricket score, today match prediction, playing XI & odds on ${formatLongDate(match.date)}${match.time ? ` at ${match.time}` : ""}${match.venue ? `, ${match.venue}` : ""} — ${series.name}. T20 World Cup / IPL / ODI updates.`
      : series.sport === "tennis"
      ? `${match.title} live score, prediction, draw & odds — ${series.name} ${formatLongDate(match.date)}${match.venue ? `, ${match.venue}` : ""}. ATP / WTA tennis schedule and Grand Slam updates.`
      : `${match.title} today match prediction & live score on ${formatLongDate(match.date)}${match.time ? ` at ${match.time}` : ""}${match.venue ? `, ${match.venue}` : ""} — ${series.name}.`;
    const desc = rawDesc.length > 160 ? `${rawDesc.slice(0, 160).trimEnd()}…` : rawDesc;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://mahadevbookss.com/match/${match.slug}` },
        { property: "og:site_name", content: "Mahadev Book" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: `https://mahadevbookss.com/match/${match.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            name: `${match.title} — ${match.subtitle}`,
            startDate: match.date,
            location: match.venue
              ? { "@type": "Place", name: match.venue, address: match.city ?? series.host }
              : { "@type": "Place", name: series.host },
            sport: series.sport,
            superEvent: { "@type": "SportsEvent", name: series.name, startDate: series.start, endDate: series.end },
            competitor: match.home && match.away
              ? [
                  { "@type": "SportsTeam", name: match.home },
                  { "@type": "SportsTeam", name: match.away },
                ]
              : undefined,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
              { "@type": "ListItem", position: 2, name: "Schedule", item: "https://mahadevbookss.com/schedule" },
              { "@type": "ListItem", position: 3, name: series.name, item: `https://mahadevbookss.com/schedule#${series.slug}` },
              { "@type": "ListItem", position: 4, name: match.title, item: `https://mahadevbookss.com/match/${match.slug}` },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: MatchNotFound,
  component: MatchPage,
});

function MatchNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-foreground">Match not found</h1>
      <p className="mt-3 text-muted-foreground">The fixture you're looking for isn't on our 2026-27 schedule.</p>
      <Link to="/schedule" className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Schedule
      </Link>
    </div>
  );
}

const matchFaqs = (title: string, seriesName: string, isFootball: boolean): FAQItem[] => [
  { q: `When is ${title}?`, a: `See the fixture panel above — kick-off, date and venue are aligned to the official ${seriesName} calendar.` },
  isFootball
    ? { q: `Who is predicted to win ${title}?`, a: `Our AI prediction section above breaks down win probability, projected score and the key players who decide the tie. Model calls update as team-news breaks.` }
    : { q: `Can I bet on ${title}?`, a: `Yes. Match odds, in-play and side markets for ${title} are live on the Mahadev Book exchange. WhatsApp us for an ID.` },
  { q: `Is the venue confirmed?`, a: `The venue shown is the officially scheduled ground. In rare cases fixtures are relocated — check back closer to match day for updates.` },
  { q: `How do I bet on ${title}?`, a: `Get a Mahadev Book ID on WhatsApp in under a minute. Once your ID is live you can back and lay match-winner, correct-score, first-goalscorer, over/under 2.5 and full in-play with instant UPI.` },
  { q: `Which markets are most popular for ${title}?`, a: `For knockout football our users trade Match Result, Both Teams To Score (BTTS), Over 2.5 Goals, First Goalscorer and Correct Score most heavily. Handicap markets pick up in the final 24 hours.` },
];

function MatchPage() {
  const { match, series } = Route.useLoaderData();
  const { whatsappUrl } = useWhatsApp();
  const isFootball = series.sport === "football" && hasRealTeams(match.home, match.away);
  const isTennis = series.sport === "tennis";
  const isCricket = series.sport === "cricket" && hasKnownCricketTeams(match.home, match.away);
  const faqs = matchFaqs(match.title, series.name, isFootball);
  const seriesMatches = series.matches;
  const idx = seriesMatches.findIndex((m: ScheduleMatch) => m.slug === match.slug);
  const prev = idx > 0 ? seriesMatches[idx - 1] : null;
  const next = idx >= 0 && idx < seriesMatches.length - 1 ? seriesMatches[idx + 1] : null;

  const prediction = isFootball ? getMatchPrediction(match.home!, match.away!) : null;
  const tennisPred = isTennis
    ? getTennisPrediction(series.name, tennisTourFromSubtitle(match.subtitle), tennisStageFromSubtitle(match.subtitle))
    : null;
  const cricketPred = isCricket
    ? getCricketPrediction(match.home!, match.away!, formatFromSubtitle(match.subtitle))
    : null;

  // Other upcoming FIFA fixtures (for football matches).
  const otherFifa: ScheduleMatch[] = isFootball
    ? allMatches
        .filter((m) => m.seriesSlug === series.slug && m.slug !== match.slug && hasRealTeams(m.home, m.away))
        .slice(0, 6)
    : [];

  // Other upcoming tennis fixtures (same tournament first, then other tournaments).
  const otherTennis: ScheduleMatch[] = isTennis
    ? [
        ...allMatches.filter((m) => m.seriesSlug === series.slug && m.slug !== match.slug),
        ...allMatches.filter((m) => m.sport === "tennis" && m.seriesSlug !== series.slug),
      ].slice(0, 6)
    : [];

  // Other upcoming cricket fixtures — same series first, then other cricket.
  const otherCricket: ScheduleMatch[] = isCricket
    ? [
        ...allMatches.filter((m) => m.seriesSlug === series.slug && m.slug !== match.slug),
        ...allMatches.filter((m) => m.sport === "cricket" && m.seriesSlug !== series.slug),
      ].slice(0, 6)
    : [];

  // Related guides: prefer football / world-cup / odds posts.
  const relatedPosts = (() => {
    const kw = isCricket
      ? ["cricket", "ipl", "t20", "world-cup", "odi", "test", "odds", "betting"]
      : isTennis
      ? ["tennis", "odds", "betting", "grand-slam", "wimbledon", "open"]
      : ["football", "world-cup", "odds", "cricket", "betting"];
    const scored = posts.map((p) => ({
      p,
      score: kw.reduce((s, k) => s + (p.slug.toLowerCase().includes(k) ? 1 : 0), 0),
    }));
    return scored.sort((a, b) => b.score - a.score).slice(0, 3).map((s) => s.p);
  })();

  return (
    <div className="min-h-screen bg-background">
      {/* ─────────────── HERO BANNER ─────────────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/0.18),transparent_55%),radial-gradient(circle_at_85%_90%,hsl(var(--primary)/0.10),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
          <nav className="text-xs text-muted-foreground mb-6 flex items-center flex-wrap gap-1.5">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/schedule" className="hover:text-primary">Schedule</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium truncate max-w-[180px] sm:max-w-none">{series.name}</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium truncate max-w-[180px] sm:max-w-none">{match.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary uppercase tracking-widest">
              <Trophy className="h-3 w-3" /> {series.sport} · {match.subtitle}
            </span>
            {isFootball && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
                <Sparkles className="h-3 w-3" /> AI Prediction Ready
              </span>
            )}
          </div>

          {isFootball && prediction ? (
            <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8 my-8">
              {/* Home */}
              <div className="text-center md:text-right">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">Home</div>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold leading-none">
                  {match.home}
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                  Form: <span className="text-foreground font-semibold tracking-wider">{prediction.home.form}</span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-primary font-display text-2xl font-bold">{prediction.home.winProbability}%</span>
                  <span className="text-muted-foreground text-xs ml-1">win probability</span>
                </div>
              </div>

              {/* VS */}
              <div className="flex flex-col items-center gap-2">
                <div className="font-display text-2xl font-bold text-muted-foreground">VS</div>
                <div className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest">
                  {prediction.drawProbability}% Draw
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Predicted score</div>
                <div className="font-display text-xl font-bold text-foreground">{prediction.predictedScore}</div>
              </div>

              {/* Away */}
              <div className="text-center md:text-left">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">Away</div>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold leading-none">
                  {match.away}
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                  Form: <span className="text-foreground font-semibold tracking-wider">{prediction.away.form}</span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-primary font-display text-2xl font-bold">{prediction.away.winProbability}%</span>
                  <span className="text-muted-foreground text-xs ml-1">win probability</span>
                </div>
              </div>
            </div>
          ) : isTennis && tennisPred ? (
            <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8 my-8">
              <div className="text-center md:text-right">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">Favourite · Seed #{tennisPred.favourite.seed}</div>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold leading-none">
                  {tennisPred.favourite.name}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{tennisPred.favourite.country}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                  Form: <span className="text-foreground font-semibold tracking-wider">{tennisPred.favourite.form}</span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-primary font-display text-2xl font-bold">{tennisPred.favourite.winProbability}%</span>
                  <span className="text-muted-foreground text-xs ml-1">win probability</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="font-display text-2xl font-bold text-muted-foreground">VS</div>
                <div className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest">
                  {tennisPred.surface}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Predicted sets</div>
                <div className="font-display text-xl font-bold text-foreground">{tennisPred.predictedSets}</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">Challenger · Seed #{tennisPred.challenger.seed}</div>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold leading-none">
                  {tennisPred.challenger.name}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{tennisPred.challenger.country}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                  Form: <span className="text-foreground font-semibold tracking-wider">{tennisPred.challenger.form}</span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-primary font-display text-2xl font-bold">{tennisPred.challenger.winProbability}%</span>
                  <span className="text-muted-foreground text-xs ml-1">win probability</span>
                </div>
              </div>
            </div>
          ) : isCricket && cricketPred ? (
            <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8 my-8">
              <div className="text-center md:text-right">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">Home · {cricketPred.format}</div>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold leading-none">{match.home}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                  Form: <span className="text-foreground font-semibold tracking-wider">{cricketPred.home.form}</span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-primary font-display text-2xl font-bold">{cricketPred.home.winProbability}%</span>
                  <span className="text-muted-foreground text-xs ml-1">win probability</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="font-display text-2xl font-bold text-muted-foreground">VS</div>
                <div className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest">
                  {cricketPred.format === "Test" ? `${cricketPred.tieOrDrawProbability}% Draw` : cricketPred.format}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Projected 1st innings</div>
                <div className="font-display text-sm font-bold text-foreground text-center">
                  <div>{match.home}: {cricketPred.home.projectedScore}</div>
                  <div>{match.away}: {cricketPred.away.projectedScore}</div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">Away · {cricketPred.format}</div>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold leading-none">{match.away}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                  Form: <span className="text-foreground font-semibold tracking-wider">{cricketPred.away.form}</span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-primary font-display text-2xl font-bold">{cricketPred.away.winProbability}%</span>
                  <span className="text-muted-foreground text-xs ml-1">win probability</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gradient-gold">
              {match.title}
            </div>
          )}

          <h1 className="sr-only">
            {`${match.title} — ${match.subtitle} preview & prediction, ${series.name}`}
          </h1>

          <dl className="mt-8 grid sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-border bg-card p-4">
              <dt className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" /> Date</dt>
              <dd className="mt-1.5 font-display text-base font-bold">{formatLongDate(match.date)}</dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <dt className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" /> Kick-off</dt>
              <dd className="mt-1.5 font-display text-base font-bold">{match.time ?? match.subtitle}</dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <dt className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" /> Venue</dt>
              <dd className="mt-1.5 font-display text-base font-bold">{match.venue ?? series.host}</dd>
              {match.city && <div className="text-[11px] text-muted-foreground mt-0.5">{match.city}</div>}
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <dt className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5"><Flag className="h-3.5 w-3.5 text-primary" /> Stage</dt>
              <dd className="mt-1.5 font-display text-base font-bold">{match.subtitle}</dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-primary-foreground font-semibold">
              <span className="btn-glow-content inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Get Betting ID on WhatsApp
              </span>
            </a>
            <Link to="/predictions" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold hover:border-primary/60 transition">
              <Sparkles className="h-4 w-4 text-primary" /> More AI Predictions
            </Link>
          </div>
        </div>
      </section>

      {isFootball && prediction && (
        <>
          {/* ─────────────── AI OVERVIEW ─────────────── */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
            <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/8 via-card to-card p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-full bg-primary/15 p-1.5"><Sparkles className="h-4 w-4 text-primary" /></div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">AI Overview</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold mb-3">
                {match.home} vs {match.away} — AI Match Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">{prediction.aiOverview}</p>

              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Both teams to score</div>
                  <div className="mt-1 font-display text-2xl font-bold text-primary">{prediction.bttsProbability}%</div>
                </div>
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Over 2.5 goals</div>
                  <div className="mt-1 font-display text-2xl font-bold text-primary">{prediction.over25Probability}%</div>
                </div>
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Model confidence</div>
                  <div className="mt-1 font-display text-2xl font-bold text-primary">
                    {Math.max(prediction.home.winProbability, prediction.away.winProbability, prediction.drawProbability)}%
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─────────────── WHO WILL WIN ─────────────── */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="rounded-full bg-primary/15 p-1.5"><TrendingUp className="h-4 w-4 text-primary" /></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">Who Will Win</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Who will win {match.home} vs {match.away}?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">{prediction.whoWillWin}</p>

            {/* Probability bar */}
            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-foreground">{match.home} <span className="text-primary">{prediction.home.winProbability}%</span></span>
                <span className="text-muted-foreground">Draw <span className="text-primary">{prediction.drawProbability}%</span></span>
                <span className="text-foreground">{match.away} <span className="text-primary">{prediction.away.winProbability}%</span></span>
              </div>
              <div className="h-3 flex rounded-full overflow-hidden border border-border">
                <div className="bg-primary" style={{ width: `${prediction.home.winProbability}%` }} />
                <div className="bg-muted" style={{ width: `${prediction.drawProbability}%` }} />
                <div className="bg-primary/60" style={{ width: `${prediction.away.winProbability}%` }} />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Head-to-head:</strong> {prediction.headToHead}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">Tactics:</strong> {prediction.tactics}
              </div>
            </div>
          </section>

          {/* ─────────────── KEY PLAYERS ─────────────── */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
            <div className="flex items-center gap-2 mb-5">
              <div className="rounded-full bg-primary/15 p-1.5"><Users className="h-4 w-4 text-primary" /></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">Key Players</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Players who decide {match.home} vs {match.away}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { team: match.home!, players: prediction.home.keyPlayers },
                { team: match.away!, players: prediction.away.keyPlayers },
              ].map(({ team, players }) => (
                <div key={team} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="rounded-full bg-primary/15 p-1.5"><Star className="h-3.5 w-3.5 text-primary" /></div>
                    <div className="font-display text-xl font-bold">{team}</div>
                  </div>
                  <ul className="space-y-4">
                    {players.map((p) => (
                      <li key={p.name} className="border-l-2 border-primary/40 pl-4">
                        <div className="flex items-center justify-between gap-2">
                          <div className="font-display font-bold text-foreground">{p.name}</div>
                          <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{p.role}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">{p.note}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ─────────────── PREDICTION SCORE ─────────────── */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/12 to-transparent p-8 sm:p-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-full bg-primary/15 p-1.5"><BarChart3 className="h-4 w-4 text-primary" /></div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">Predicted Score</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Final score prediction
              </h2>
              <div className="grid sm:grid-cols-3 items-center gap-6 text-center">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{match.home}</div>
                  <div className="mt-2 font-display text-6xl font-bold text-gradient-gold">{prediction.home.projectedGoals}</div>
                  <div className="text-xs text-muted-foreground mt-1">projected goals</div>
                </div>
                <div className="rounded-2xl border border-primary/30 bg-card py-6">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Model score</div>
                  <div className="mt-2 font-display text-3xl font-bold text-primary">{prediction.predictedScore}</div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Winner:{" "}
                    <span className="text-foreground font-semibold">
                      {prediction.predictedWinner === "draw" ? "Draw" : prediction.predictedWinner === "home" ? match.home : match.away}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{match.away}</div>
                  <div className="mt-2 font-display text-6xl font-bold text-gradient-gold">{prediction.away.projectedGoals}</div>
                  <div className="text-xs text-muted-foreground mt-1">projected goals</div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {isTennis && tennisPred && (
        <>
          {/* ─────────── TENNIS AI OVERVIEW ─────────── */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
            <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/8 via-card to-card p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-full bg-primary/15 p-1.5"><Sparkles className="h-4 w-4 text-primary" /></div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">AI Overview</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold mb-3">
                {tennisPred.favourite.name} vs {tennisPred.challenger.name} — {match.subtitle} preview
              </h2>
              <p className="text-muted-foreground leading-relaxed">{tennisPred.aiOverview}</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Over 22.5 games</div>
                  <div className="mt-1 font-display text-2xl font-bold text-primary">{tennisPred.overGamesProbability}%</div>
                </div>
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Tie-break in match</div>
                  <div className="mt-1 font-display text-2xl font-bold text-primary">{tennisPred.tiebreakProbability}%</div>
                </div>
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Model confidence</div>
                  <div className="mt-1 font-display text-2xl font-bold text-primary">{tennisPred.favourite.winProbability}%</div>
                </div>
              </div>
            </div>
          </section>

          {/* ─────────── WHO WILL WIN (tennis) ─────────── */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="rounded-full bg-primary/15 p-1.5"><TrendingUp className="h-4 w-4 text-primary" /></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">Who Will Win</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Who will win the {match.subtitle} — {tennisPred.favourite.name} or {tennisPred.challenger.name}?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">{tennisPred.whoWillWin}</p>
            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-foreground">{tennisPred.favourite.name} <span className="text-primary">{tennisPred.favourite.winProbability}%</span></span>
                <span className="text-foreground">{tennisPred.challenger.name} <span className="text-primary">{tennisPred.challenger.winProbability}%</span></span>
              </div>
              <div className="h-3 flex rounded-full overflow-hidden border border-border">
                <div className="bg-primary" style={{ width: `${tennisPred.favourite.winProbability}%` }} />
                <div className="bg-primary/60" style={{ width: `${tennisPred.challenger.winProbability}%` }} />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Match-up:</strong> {tennisPred.matchup}
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {tennisPred.keyStats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                  <div className="mt-1 font-display text-sm font-bold text-foreground">{s.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ─────────── PREDICTION SCORE (tennis) ─────────── */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/12 to-transparent p-8 sm:p-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-full bg-primary/15 p-1.5"><BarChart3 className="h-4 w-4 text-primary" /></div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">Predicted Score</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Final score prediction
              </h2>
              <div className="grid sm:grid-cols-3 items-center gap-6 text-center">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{tennisPred.favourite.name}</div>
                  <div className="mt-2 font-display text-5xl font-bold text-gradient-gold">Sets {tennisPred.predictedSets.split("-")[0]}</div>
                  <div className="text-xs text-muted-foreground mt-1">to win</div>
                </div>
                <div className="rounded-2xl border border-primary/30 bg-card py-6 px-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Set-by-set score</div>
                  <div className="mt-2 font-display text-lg sm:text-xl font-bold text-primary leading-snug">{tennisPred.predictedScore}</div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Winner: <span className="text-foreground font-semibold">{tennisPred.favourite.name}</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{tennisPred.challenger.name}</div>
                  <div className="mt-2 font-display text-5xl font-bold text-gradient-gold">Sets {tennisPred.predictedSets.split("-")[1]}</div>
                  <div className="text-xs text-muted-foreground mt-1">projected</div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {isCricket && cricketPred && (
        <>
          {/* ─────────── CRICKET AI OVERVIEW ─────────── */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
            <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/8 via-card to-card p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-full bg-primary/15 p-1.5"><Sparkles className="h-4 w-4 text-primary" /></div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">AI Overview</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold mb-3">
                {match.home} vs {match.away} — {cricketPred.format} AI Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">{cricketPred.aiOverview}</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{match.home} win</div>
                  <div className="mt-1 font-display text-2xl font-bold text-primary">{cricketPred.home.winProbability}%</div>
                </div>
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{match.away} win</div>
                  <div className="mt-1 font-display text-2xl font-bold text-primary">{cricketPred.away.winProbability}%</div>
                </div>
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{cricketPred.format === "Test" ? "Draw probability" : "Format"}</div>
                  <div className="mt-1 font-display text-2xl font-bold text-primary">{cricketPred.format === "Test" ? `${cricketPred.tieOrDrawProbability}%` : cricketPred.format}</div>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-border bg-background/40 p-4">
                <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Pitch report</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{cricketPred.pitchReport}</p>
              </div>
            </div>
          </section>

          {/* ─────────── WHO WILL WIN (cricket) ─────────── */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="rounded-full bg-primary/15 p-1.5"><TrendingUp className="h-4 w-4 text-primary" /></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">Who Will Win</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Who will win {match.home} vs {match.away}?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">{cricketPred.whoWillWin}</p>
            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-foreground">{match.home} <span className="text-primary">{cricketPred.home.winProbability}%</span></span>
                {cricketPred.format === "Test" && (
                  <span className="text-muted-foreground">Draw <span className="text-primary">{cricketPred.tieOrDrawProbability}%</span></span>
                )}
                <span className="text-foreground">{match.away} <span className="text-primary">{cricketPred.away.winProbability}%</span></span>
              </div>
              <div className="h-3 flex rounded-full overflow-hidden border border-border">
                <div className="bg-primary" style={{ width: `${cricketPred.home.winProbability}%` }} />
                {cricketPred.format === "Test" && (
                  <div className="bg-muted" style={{ width: `${cricketPred.tieOrDrawProbability}%` }} />
                )}
                <div className="bg-primary/60" style={{ width: `${cricketPred.away.winProbability}%` }} />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Head-to-head:</strong> {cricketPred.headToHead}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">Top batter:</strong> {cricketPred.topBatter}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">Top bowler:</strong> {cricketPred.topBowler}
              </div>
            </div>
          </section>

          {/* ─────────── KEY PLAYERS (cricket) ─────────── */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
            <div className="flex items-center gap-2 mb-5">
              <div className="rounded-full bg-primary/15 p-1.5"><Users className="h-4 w-4 text-primary" /></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">Key Players to Watch</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Players who decide {match.home} vs {match.away}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[cricketPred.home, cricketPred.away].map((side) => (
                <div key={side.team} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="rounded-full bg-primary/15 p-1.5"><Star className="h-3.5 w-3.5 text-primary" /></div>
                    <div className="font-display text-xl font-bold">{side.team}</div>
                  </div>
                  <ul className="space-y-4">
                    {side.keyPlayers.map((p) => (
                      <li key={p.name} className="border-l-2 border-primary/40 pl-4">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="font-display font-bold text-foreground">{p.name}</div>
                          <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{p.role}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">{p.note}</div>
                        <div className="text-xs text-primary/80 mt-1 font-semibold">Projected: {p.projected}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ─────────── PROJECTED SCORELINE + OVER-BY-OVER ─────────── */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/12 to-transparent p-8 sm:p-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-full bg-primary/15 p-1.5"><BarChart3 className="h-4 w-4 text-primary" /></div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">Prediction Score</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Projected scoreline & over-by-over
              </h2>
              <div className="grid sm:grid-cols-3 items-center gap-6 text-center">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{match.home}</div>
                  <div className="mt-2 font-display text-3xl sm:text-4xl font-bold text-gradient-gold">{cricketPred.home.projectedScore}</div>
                </div>
                <div className="rounded-2xl border border-primary/30 bg-card py-6 px-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Model call</div>
                  <div className="mt-2 font-display text-lg font-bold text-primary leading-snug">
                    {cricketPred.predictedWinner === "draw" ? "Draw likely" : `${cricketPred.predictedWinner === "home" ? match.home : match.away} to win`}
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">{cricketPred.headline}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{match.away}</div>
                  <div className="mt-2 font-display text-3xl sm:text-4xl font-bold text-gradient-gold">{cricketPred.away.projectedScore}</div>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {cricketPred.overByOver.map((phase) => (
                  <div key={phase.phase} className="rounded-xl border border-border bg-background/60 p-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[10px] uppercase tracking-widest text-primary font-bold">{phase.phase}</div>
                      <div className="text-[10px] text-muted-foreground">Overs {phase.overs}</div>
                    </div>
                    <div className="flex gap-4 font-display">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Runs</div>
                        <div className="text-xl font-bold text-foreground">{phase.runs}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Wickets</div>
                        <div className="text-xl font-bold text-foreground">{phase.wickets}</div>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{phase.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─────────── WHY BET (cricket) ─────────── */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
            <div className="flex items-center gap-2 mb-5">
              <div className="rounded-full bg-primary/15 p-1.5"><Target className="h-4 w-4 text-primary" /></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">Why Bet This Match</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Why bet on {match.home} vs {match.away}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {cricketPred.whyBet.map((r, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5 flex gap-3">
                  <div className="rounded-full bg-primary/15 h-8 w-8 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-primary text-sm">{i + 1}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}


      {/* ─────────────── MATCH DETAILS ─────────────── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid md:grid-cols-[1.6fr_1fr] gap-10">
        <article className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-display max-w-none">
          <div className="flex items-center gap-2 mb-3 not-prose">
            <div className="rounded-full bg-primary/15 p-1.5"><BookOpen className="h-4 w-4 text-primary" /></div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">Match Details</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-gradient-gold">About this fixture</h2>
          <p>
            {match.title} is scheduled as the <strong>{match.subtitle}</strong> of {series.name}
            {match.venue ? <> at <strong>{match.venue}</strong>{match.city ? `, ${match.city}` : ""}</> : null} on
            {" "}<strong>{formatLongDate(match.date)}</strong>{match.time ? <> with kick-off at <strong>{match.time}</strong></> : null}.
            {" "}It is part of the wider {series.name} calendar which runs from {formatLongDate(series.start)} to {formatLongDate(series.end)}.
          </p>
          <p>{series.description}</p>
          <h3 className="font-display text-xl font-bold">How to bet on this match</h3>
          <p>
            Get a verified Mahadev Book exchange ID on WhatsApp in under a minute. Once your ID is live you can back and lay {isFootball ? "Match Result, Correct Score, Both Teams To Score, Over/Under 2.5 goals, First Goalscorer" : "match-odds, side markets (over/under, first goal/wicket, top batter/scorer)"} and full in-play with instant UPI deposits and withdrawals.
          </p>
        </article>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-primary/25 bg-card p-5">
            <div className="text-[11px] uppercase tracking-[0.3em] text-primary/80 font-display mb-3 flex items-center gap-1.5"><Target className="h-3.5 w-3.5" /> Series</div>
            <div className="font-display text-lg font-bold text-foreground">{series.name}</div>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between gap-3"><span>Sport</span><span className="text-foreground capitalize font-semibold">{series.sport}</span></div>
              <div className="flex justify-between gap-3"><span>Format</span><span className="text-foreground font-semibold text-right">{series.format}</span></div>
              <div className="flex justify-between gap-3"><span>Host</span><span className="text-foreground font-semibold text-right">{series.host}</span></div>
              <div className="flex justify-between gap-3"><span>Window</span><span className="text-foreground font-semibold text-right">{formatLongDate(series.start)} – {formatLongDate(series.end)}</span></div>
              <div className="flex justify-between gap-3"><span>Total matches</span><span className="text-foreground font-semibold">{series.matches.length}</span></div>
            </div>
            <Link to="/schedule" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
              View full series schedule <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {(prev || next) && (
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-display mb-3">In this series</div>
              {prev && (
                <Link to="/match/$slug" params={{ slug: prev.slug }} className="block py-2 border-b border-border/60">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Previous</div>
                  <div className="text-sm font-semibold hover:text-primary">{prev.title} — {prev.subtitle}</div>
                </Link>
              )}
              {next && (
                <Link to="/match/$slug" params={{ slug: next.slug }} className="block py-2">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Next</div>
                  <div className="text-sm font-semibold hover:text-primary">{next.title} — {next.subtitle}</div>
                </Link>
              )}
            </div>
          )}
        </aside>
      </section>

      {/* ─────────────── OTHER UPCOMING FIFA MATCHES ─────────────── */}
      {isFootball && otherFifa.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 border-t border-border">
          <div className="flex items-center gap-2 mb-3">
            <div className="rounded-full bg-primary/15 p-1.5"><Zap className="h-4 w-4 text-primary" /></div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">Also on the Bracket</span>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold">
              Other upcoming matches — {series.name}
            </h2>
            <Link to="/schedule" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
              Full bracket <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherFifa.map((m) => (
              <Link key={m.slug} to="/match/$slug" params={{ slug: m.slug }} className="group rounded-xl border border-border bg-card p-5 hover:border-primary/60 transition">
                <div className="text-[10px] uppercase tracking-widest text-primary font-bold">{m.subtitle}</div>
                <div className="mt-2 font-display text-lg font-bold group-hover:text-primary transition">{m.title}</div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {formatLongDate(m.date)}</span>
                  {m.venue && <span className="truncate max-w-[140px]">{m.venue}</span>}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {isTennis && otherTennis.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 border-t border-border">
          <div className="flex items-center gap-2 mb-3">
            <div className="rounded-full bg-primary/15 p-1.5"><Zap className="h-4 w-4 text-primary" /></div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">On the Tour</span>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold">
              Other upcoming tennis matches
            </h2>
            <Link to="/schedule" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
              Full tennis schedule <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherTennis.map((m) => (
              <Link key={m.slug} to="/match/$slug" params={{ slug: m.slug }} className="group rounded-xl border border-border bg-card p-5 hover:border-primary/60 transition">
                <div className="text-[10px] uppercase tracking-widest text-primary font-bold">{m.subtitle}</div>
                <div className="mt-2 font-display text-lg font-bold group-hover:text-primary transition">{m.title}</div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {formatLongDate(m.date)}</span>
                  {m.venue && <span className="truncate max-w-[140px]">{m.venue}</span>}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {isCricket && otherCricket.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 border-t border-border">
          <div className="flex items-center gap-2 mb-3">
            <div className="rounded-full bg-primary/15 p-1.5"><Zap className="h-4 w-4 text-primary" /></div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">More Cricket</span>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold">
              Other upcoming cricket matches
            </h2>
            <Link to="/schedule" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
              Full cricket schedule <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherCricket.map((m) => (
              <Link key={m.slug} to="/match/$slug" params={{ slug: m.slug }} className="group rounded-xl border border-border bg-card p-5 hover:border-primary/60 transition">
                <div className="text-[10px] uppercase tracking-widest text-primary font-bold">{m.subtitle}</div>
                <div className="mt-2 font-display text-lg font-bold group-hover:text-primary transition">{m.title}</div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {formatLongDate(m.date)}</span>
                  {m.venue && <span className="truncate max-w-[140px]">{m.venue}</span>}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}


      {/* ─────────────── RELATED GUIDES & BLOGS ─────────────── */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 border-t border-border">
          <div className="flex items-center gap-2 mb-3">
            <div className="rounded-full bg-primary/15 p-1.5"><BookOpen className="h-4 w-4 text-primary" /></div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-display font-bold">Related Guides & Blogs</span>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Sharpen your edge before kick-off
            </h2>
            <Link to="/blog" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
              All articles <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {relatedPosts.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/60 transition">
                <div className="text-[10px] uppercase tracking-widest text-primary font-bold">{p.category ?? "Guide"}</div>
                <div className="mt-2 font-display text-lg font-bold leading-snug group-hover:text-primary transition">{p.title}</div>
                {p.excerpt && <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>}
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
                  Read guide <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <FAQSection items={faqs} />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8 sm:p-10 text-center">
          <h2 className="font-display text-2xl font-bold">Book {match.title} on Mahadev Book</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Instant UPI, exchange odds and 24/7 support — WhatsApp us for an ID in under a minute.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow mt-5 inline-flex items-center gap-2 rounded-full px-7 py-3 text-primary-foreground font-semibold">
            <span className="btn-glow-content inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Get Started on WhatsApp
            </span>
          </a>
        </div>
      </section>

      <RelatedLinks paths={["/schedule", "/matches", "/predictions", "/mahadev-betting-app", "/mahadev-book-vs-skyexchange-247"]} title="More cricket on Mahadev Book" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
    </div>
  );
}
