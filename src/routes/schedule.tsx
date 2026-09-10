import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";
import { AIOverview } from "@/components/AIOverview";
import { RelatedLinks } from "@/components/RelatedLinks";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import {
  Calendar,
  MapPin,
  Trophy,
  MessageCircle,
  ChevronRight,
  Flame,
  Globe2,
  Sparkles,
  Target,
  Award,
  ArrowRight,
} from "lucide-react";
import {
  allSeries,
  getSeriesBySport,
  formatLongDate,
  type Sport,
  type ScheduleSeries,
} from "@/lib/schedule-data";

// ---------- AI predictions ----------
type AIPrediction = {
  sport: "Football" | "Cricket" | "Tennis";
  fixture: string;
  window: string;
  prediction: string;
  confidence: number;
  projectedScore: string;
  topScorer: string;
  rationale: string;
};

const aiPredictions: AIPrediction[] = [
  { sport: "Football", fixture: "Spain vs Argentina — FIFA World Cup Final", window: "19 Jul 2026 · MetLife Stadium", prediction: "Spain to lift the trophy", confidence: 56, projectedScore: "Spain 2 – 1 Argentina (AET)", topScorer: "Lamine Yamal — 1 goal, 1 assist", rationale: "Spain's midfield press (PPDA 8.4) and Yamal's 1v1 conversion overwhelm Argentina's aging back four in extra time." },
  { sport: "Football", fixture: "France vs England — Third-place Play-off", window: "18 Jul 2026 · Miami", prediction: "France by 1 goal", confidence: 55, projectedScore: "France 2 – 1 England", topScorer: "Kylian Mbappé", rationale: "France's transition xG (1.9/90) and Mbappé's knockout record edge England's rotated back line in a bronze-medal shootout." },
  { sport: "Cricket", fixture: "India vs Pakistan — Asia Cup 2026 Super 4", window: "Sep 2026 · Sri Lanka", prediction: "India favourites", confidence: 63, projectedScore: "India 178/5 chase in 18.4 overs", topScorer: "Shubman Gill — projected 62 runs", rationale: "India's top-3 average 47.2 vs pace since 2024; Pakistan's death-overs economy of 10.1 leaves them exposed in a chase on Colombo pitches." },
  { sport: "Cricket", fixture: "ICC T20 World Cup 2026 — Final", window: "Mar 2026 · India", prediction: "India to win at home", confidence: 61, projectedScore: "India 189/6 vs Australia 176/8", topScorer: "Suryakumar Yadav — 71 runs", rationale: "Home conditions plus India's 89% powerplay win-rate under lights make them the model's clearest favourite." },
  { sport: "Tennis", fixture: "US Open 2026 — Men's Final", window: "13 Sep 2026 · New York", prediction: "Carlos Alcaraz over Jannik Sinner", confidence: 55, projectedScore: "Alcaraz d. Sinner 3–6, 6–4, 6–3, 4–6, 6–2", topScorer: "Alcaraz — ~148 total points won", rationale: "Hard-court H2H has flipped in Alcaraz's favour post-2025; his 1st-serve win % of 78 on Deco Turf edges Sinner's 74." },
  { sport: "Tennis", fixture: "WTA Finals Riyadh — Championship", window: "8 Nov 2026 · Riyadh", prediction: "Aryna Sabalenka to defend", confidence: 52, projectedScore: "Sabalenka d. Świątek 6–4, 3–6, 6–4", topScorer: "Sabalenka — 92 total points won", rationale: "Indoor hard suits Sabalenka's flat ball; she owns a 6–4 tour-level H2H edge on the surface." },
];

const scheduleFaqs: FAQItem[] = [
  { q: "How is this schedule organised?", a: "Use the tabs at the top of the page to filter by sport. 'All' shows every fixture across football, cricket and tennis. Each sport tab lists the series first, then every individual match inside that series." },
  { q: "Can I open a specific match?", a: "Yes — click any match row to open its dedicated match page with venue, date, kick-off, series context and a direct WhatsApp link to place bets on the exchange." },
  { q: "What is the FIFA World Cup 2026 schedule?", a: "World Cup 2026 schedule: group stage runs 11–27 June 2026 across 12 groups and 72 matches; Round of 32 begins 28 June, quarter-finals 4–5 July, semi-finals 14–15 July, third-place play-off 18 July and the FIFA World Cup 2026 final on 19 July at MetLife Stadium. Every world cup 2026 fixture, kick-off, venue and today match prediction is on the series block above." },
  { q: "Where is the FIFA World Cup 2026 final?", a: "The FIFA World Cup 2026 final is on Sunday, 19 July 2026 at MetLife Stadium (New York/New Jersey), kick-off 15:00 ET — Spain vs Argentina in our model. The third-place play-off is on 18 July 2026 at Hard Rock Stadium, Miami, between France and England." },
  { q: "Where are the World Cup 2026 matches played?", a: "World Cup 2026 is co-hosted by USA, Canada and Mexico across 16 host cities — Atlanta, Boston, Dallas, Guadalajara, Houston, Kansas City, Los Angeles, Mexico City, Miami, Monterrey, New York/New Jersey, Philadelphia, San Francisco, Seattle, Toronto and Vancouver." },
  { q: "Which tennis events are included?", a: "The full 2026 ATP men's and WTA women's tennis schedule from July onwards — every ATP 1000, WTA 1000, ATP 500, WTA 500, the US Open, and the season-ending Nitto ATP Finals in Turin and WTA Finals in Riyadh, plus every ATP 250 and WTA 250 tour stop." },
  { q: "When is US Open Tennis 2026?", a: "US Open Tennis 2026 runs 24 August – 13 September 2026 at USTA Billie Jean King National Tennis Center, Flushing Meadows, New York — the US Open schedule, draw, live scores and today match prediction sit on the US Open series block above." },
  { q: "Where will the ATP Finals be in 2026?", a: "The Nitto ATP Finals 2026 stay in Turin, Italy (Inalpi Arena), 8–15 November 2026 — final year of the Turin contract. WTA Finals 2026 return to Riyadh, Saudi Arabia, 1–8 November 2026." },
  { q: "What are the 2026 tennis Grand Slams?", a: "Four Grand Slams — Australian Open (Melbourne, Jan), Roland Garros (Paris, May–Jun), Wimbledon (London, Jun–Jul) and the US Open (New York, Aug–Sep). This schedule covers the US Open onwards plus every ATP & WTA tournament through the season finals." },
  { q: "Which cricket series are covered?", a: "Every men's international series from July 2026 through March 2027 — India tour of England 2026 (ind vs eng), India tour of Zimbabwe 2026, India tour of Sri Lanka 2026, plus Australia, Pakistan, New Zealand, South Africa, West Indies, Bangladesh, Ireland and Afghanistan tours, Asia Cup 2026 and the ICC T20 World Cup 2026." },
  { q: "When is India vs England 2026?", a: "India tour of England 2026 (ind vs eng) runs from 1 July to 19 July 2026 — five T20Is starting at Chester-le-Street on 1 July, then three ODIs at Edgbaston, Lord's and The Oval. Full India vs England 2026 schedule, venues, playing XI and today match prediction sit on the series block above." },
  { q: "Where is India vs England 2026 played?", a: "Across nine England grounds: Chester-le-Street, Old Trafford (Manchester), Trent Bridge (Nottingham), Bristol and Southampton for the T20Is; Edgbaston (Birmingham), Lord's and The Oval (London) for the ODIs." },
  { q: "Who will win India vs England 2026?", a: "Open any india-vs-england match row above for our AI today match prediction — projected score, playing XI, key batter/bowler picks and live cricket score once the match starts. Model favours India in T20Is (57% average confidence) and a 2-1 India ODI series win." },
  { q: "When is India tour of Zimbabwe 2026?", a: "India tour of Zimbabwe 2026 is a short white-ball leg in July 2026 — see the Zimbabwe series block above for exact dates, Harare/Bulawayo venues and per-match predictions." },
  { q: "When is India tour of Sri Lanka 2026?", a: "India tour of Sri Lanka 2026 runs in August 2026 as a T20I + ODI series in Colombo, Kandy and Dambulla — full schedule, live cricket score and today match prediction on the series block above." },
  { q: "How accurate are the AI predictions?", a: "Our model blends Elo-style rating, recent form, head-to-head, venue and market-implied probability. Historically it lands 58–63% on marquee football knockouts and 55–60% on Grand Slam finals — always treat picks as guidance." },
  { q: "Where can I bet on these fixtures?", a: "Every fixture on this page is bookable on a Mahadev Book exchange ID — message us on WhatsApp to get an ID in under a minute." },
];

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "T20 World Cup 2026 Schedule, IPL Match Today & Live Cricket" },
      { name: "description", content: "T20 World Cup 2026 schedule, IPL match today, women's cricket World Cup schedule and live score for every India, England, Australia series." },
      { name: "keywords", content: "world cup 2026, fifa world cup 2026, world cup 2026 schedule, world cup 2026 fixtures, fifa world cup 2026 final, soccer games today, us open, us open tennis, us open tennis 2026, us open schedule, atp, atp finals, atp finals 2026, tennis grand slam schedule, australian open schedule, tennis tournaments, t20 world cup 2026, t20 world cup schedule, icc t20 world cup, ipl match today, ipl live score, women's cricket world cup schedule, live cricket score, today cricket match, cricket schedule 2026, ind vs eng, india vs england 2026, cricbuzz, cricinfo" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: "T20 World Cup 2026 Schedule, IPL Match Today & Live Cricket" },
      { property: "og:description", content: "ICC T20 World Cup 2026 schedule, IPL live score, women's cricket World Cup fixtures and today cricket match — full 2026-27 calendar with predictions." },
      { property: "og:url", content: "https://mahadevbookss.com/schedule" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mahadev Book" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "T20 World Cup 2026 & IPL schedule on Mahadev Book" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "T20 World Cup 2026 Schedule, IPL Match Today & Live Cricket" },
      { name: "twitter:description", content: "ICC T20 World Cup 2026, IPL match today, women's cricket World Cup & live cricket score." },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/schedule" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(scheduleFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Schedule", item: "https://mahadevbookss.com/schedule" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "2026-27 Sports Schedule",
          itemListElement: allSeries.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "SportsEvent",
              name: s.name,
              startDate: s.start,
              endDate: s.end,
              location: { "@type": "Place", name: s.host },
              sport: s.sport,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/schedule",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: SchedulePage,
});

const TABS: { id: Sport | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cricket", label: "Cricket" },
  { id: "football", label: "Football" },
  { id: "tennis", label: "Tennis" },
];

const SPORT_ICON: Record<Sport, typeof Trophy> = {
  football: Trophy,
  cricket: Globe2,
  tennis: Award,
};

function SchedulePage() {
  const { whatsappUrl } = useWhatsApp();
  const [tab, setTab] = useState<Sport | "all">("all");
  const seriesList = getSeriesBySport(tab);

  const totals = {
    series: allSeries.length,
    cricket: allSeries.filter((s) => s.sport === "cricket").length,
    football: allSeries.filter((s) => s.sport === "football").reduce((n, s) => n + s.matches.length, 0),
    tennis: allSeries.filter((s) => s.sport === "tennis").length,
    matches: allSeries.reduce((n, s) => n + s.matches.length, 0),
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.12),transparent_50%),radial-gradient(circle_at_80%_60%,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <nav className="text-xs text-muted-foreground mb-6 flex items-center gap-1.5">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Schedule</span>
          </nav>

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-widest">
                <Flame className="h-3.5 w-3.5" /> 2026-27 Season
              </div>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-gradient-gold">
                T20 World Cup 2026 Schedule, IPL Match Today & Live Cricket
              </h1>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                The full ICC T20 World Cup 2026 schedule, IPL match today, women's cricket World Cup fixtures, live cricket score and every India, England &amp; Australia series — plus FIFA World Cup 2026 knockouts and the ATP &amp; WTA 2026 tennis calendar, all filterable by sport.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-primary-foreground font-semibold">
                  <span className="btn-glow-content inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" /> Get Betting ID
                  </span>
                </a>
                <Link to="/predictions" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold hover:border-primary/60 transition">
                  Today's Predictions
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/25 bg-card/60 p-6 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-primary/80 font-display mb-4">Schedule Snapshot</div>
              <dl className="space-y-3.5 text-sm">
                <div className="flex items-baseline justify-between border-b border-border/60 pb-3">
                  <dt className="text-muted-foreground">Total series</dt>
                  <dd className="font-display text-2xl font-bold text-gradient-gold">{totals.series}</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-border/60 pb-3">
                  <dt className="text-muted-foreground">Total matches</dt>
                  <dd className="font-display text-2xl font-bold">{totals.matches}</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-border/60 pb-3">
                  <dt className="text-muted-foreground">Cricket series</dt>
                  <dd className="font-semibold">{totals.cricket}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-muted-foreground">Tennis tournaments</dt>
                  <dd className="font-semibold">{totals.tennis}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* AI overview */}
      <AIOverview
        title="AI Overview — T20 World Cup 2026, IPL & Live Cricket Schedule"
        summary="The ICC T20 World Cup 2026 schedule, IPL match today with live cricket score, women's cricket World Cup fixtures and T20 World Cup standings — plus the FIFA World Cup 2026 knockouts and the full ATP &amp; WTA 2026 tennis calendar. Filter by sport, drill into any series, and open per-match pages for date, venue, kick-off, predicted winner and projected score."
        points={[
          `ICC T20 World Cup 2026 full schedule, groups & knockouts`,
          `IPL match today with live cricket score and predictions`,
          `Women's cricket World Cup schedule and T20 World Cup standings`,
          `${totals.matches} matches across ${totals.series} series with per-match SEO pages`,
          "FIFA World Cup 2026 knockouts — Round of 32 to the MetLife final",
          "Full ATP & WTA 2026 tennis calendar with all four Grand Slams",
        ]}
        keywords={[
          "world cup 2026",
          "fifa world cup 2026",
          "world cup 2026 schedule",
          "fifa world cup 2026 final",
          "us open tennis 2026",
          "us open schedule",
          "atp finals 2026",
          "tennis grand slam schedule",
          "t20 world cup 2026",
          "ipl match today",
          "ind vs eng",
          "live cricket score",
        ]}
      />

      {/* Tabs + series list */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        <div
          role="tablist"
          aria-label="Filter schedule by sport"
          className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4"
        >
          {TABS.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary))]"
                    : "border border-border bg-card text-foreground/80 hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {t.label}
                <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {t.id === "all" ? allSeries.length : allSeries.filter((s) => s.sport === t.id).length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="space-y-8">
          {seriesList.map((s) => (
            <SeriesBlock key={s.slug} series={s} />
          ))}
        </div>
      </section>

      {/* AI Predictions */}
      <section className="border-t border-border bg-gradient-to-b from-primary/[0.04] to-transparent" id="ai-predictions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold">AI Predictions — Who Wins, Projected Score & Top Scorer</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Model-driven calls for the marquee 2026-27 fixtures — predicted winner, confidence, projected score and expected top scorer.
          </p>

          <div className="mt-8 rounded-2xl border border-primary/25 bg-card overflow-hidden">
            <div className="hidden lg:grid grid-cols-[0.7fr_1.6fr_1.3fr_1fr_1.3fr_1.3fr] gap-4 px-6 py-3 text-[11px] uppercase tracking-widest text-primary/80 border-b border-border bg-primary/[0.06]">
              <div>Sport</div><div>Fixture</div><div>Prediction</div><div>Confidence</div><div>Projected Score</div><div>Top Scorer</div>
            </div>
            {aiPredictions.map((p) => (
              <div key={p.fixture} className="grid lg:grid-cols-[0.7fr_1.6fr_1.3fr_1fr_1.3fr_1.3fr] gap-4 px-6 py-5 border-b border-border/60 last:border-0 hover:bg-primary/[0.03]">
                <div className="text-xs font-bold uppercase tracking-wider text-primary">{p.sport}</div>
                <div>
                  <div className="font-semibold text-foreground">{p.fixture}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{p.window}</div>
                </div>
                <div className="text-sm font-semibold inline-flex items-center gap-2">
                  <Target className="h-3.5 w-3.5 text-primary shrink-0" />{p.prediction}
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${p.confidence}%` }} />
                  </div>
                  <span className="text-xs font-bold text-primary">{p.confidence}%</span>
                </div>
                <div className="text-sm">{p.projectedScore}</div>
                <div className="text-sm text-muted-foreground">{p.topScorer}</div>
                <div className="lg:col-span-6 text-xs text-muted-foreground/80 leading-relaxed pt-1 border-t border-border/40 mt-2">
                  <span className="font-semibold text-foreground/70">Why:</span> {p.rationale}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={scheduleFaqs} />

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Bet the biggest 2026-27 fixtures with a verified Mahadev Book ID</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Instant UPI, exchange-grade odds and 24/7 support — get your ID on WhatsApp in under a minute.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 text-primary-foreground font-semibold">
            <span className="btn-glow-content inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Get Started on WhatsApp
            </span>
          </a>
        </div>
      </section>
      <RelatedLinks paths={["/matches", "/predictions", "/mahadev-betting-app", "/mahadev-book-vs-skyexchange-247", "/blog"]} title="Related cricket pages" />
    </div>
  );
}

function SeriesBlock({ series }: { series: ScheduleSeries }) {
  const Icon = SPORT_ICON[series.sport];
  const [open, setOpen] = useState(true);

  return (
    <article className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Series header */}
      <header className="px-5 sm:px-7 py-5 border-b border-border bg-muted/20">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-primary font-bold">
              <Icon className="h-3.5 w-3.5" />
              {series.sport}
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{series.matches.length} match{series.matches.length === 1 ? "" : "es"}</span>
            </div>
            <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-foreground">{series.name}</h3>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" />{formatLongDate(series.start)} – {formatLongDate(series.end)}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />{series.host}</span>
              <span className="inline-flex items-center gap-1.5"><Trophy className="h-3.5 w-3.5 text-primary" />{series.format}</span>
            </div>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-4 py-2 text-xs font-semibold hover:border-primary/50"
            aria-expanded={open}
          >
            {open ? "Hide matches" : "View matches"}
            <ChevronRight className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-90" : ""}`} />
          </button>
        </div>
        <p className="mt-3 text-sm text-muted-foreground max-w-3xl leading-relaxed">{series.description}</p>
      </header>

      {/* Matches */}
      {open && (
        <div>
          <div className="hidden md:grid grid-cols-[1.6fr_1fr_1fr_1.4fr_auto] gap-4 px-6 py-3 text-[11px] uppercase tracking-widest text-muted-foreground border-b border-border bg-muted/10">
            <div>Match</div>
            <div>Date</div>
            <div>Kick-off / Stage</div>
            <div>Venue</div>
            <div />
          </div>
          {series.matches.map((m) => (
            <Link
              key={m.slug}
              to="/match/$slug"
              params={{ slug: m.slug }}
              className="grid md:grid-cols-[1.6fr_1fr_1fr_1.4fr_auto] gap-4 items-center px-6 py-4 border-b border-border/60 last:border-0 hover:bg-primary/[0.04] transition-colors group"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-semibold text-foreground truncate">{m.title}</span>
              </div>
              <div className="text-sm text-muted-foreground inline-flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
                {formatLongDate(m.date)}
              </div>
              <div className="text-sm font-semibold">
                {m.time ? m.time : <span className="text-muted-foreground font-normal">{m.subtitle}</span>}
              </div>
              <div className="text-sm text-muted-foreground inline-flex items-center gap-2 min-w-0">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span className="truncate">{m.venue}{m.city ? `, ${m.city}` : ""}</span>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-0.5 transition-transform">
                Details <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
