import { createFileRoute, Link } from "@tanstack/react-router";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";
import { AIOverview } from "@/components/AIOverview";
import { RelatedLinks } from "@/components/RelatedLinks";
import { fetchInPlayEvents, type ApiEvent } from "@/components/InPlayEvents";
import { whatsappUrl } from "@/data/site";
import {
  MessageCircle,
  ShieldCheck,
  Radio,
  Clock,
  TrendingUp,
  Target,
  LineChart,
  Sparkles,
  ChevronRight,
  Flame,
} from "lucide-react";

const predictionsFaqs: FAQItem[] = [
  { q: "Are these cricket predictions guaranteed to win?", a: "No. All tips are analytical opinions based on form, pitch, weather, head-to-head and current exchange odds — never guarantees. Bet responsibly and only stake what you can afford to lose." },
  { q: "Where do the live odds on this page come from?", a: "The exact exchange feed that powers our homepage in-play section. Back and lay prices for cricket, tennis and football refresh every 30 seconds directly from the source." },
  { q: "How do I get today's expert tip?", a: "Tap 'Get analyst tip' on any match. Our desk replies on WhatsApp with the call, recommended market (match odds, session or fancy) and a suggested stake range within a minute." },
  { q: "Do I need a Mahadev Book ID to place bets?", a: "Predictions are free to read. Placing bets needs a verified Mahadev Book ID — message us on WhatsApp with your name and preferred deposit method to receive one in under 60 seconds." },
  { q: "Which sports get daily predictions?", a: "Primarily cricket — IPL, T20 internationals, ODIs, Tests, women's tours, T20 Blast, BBL and PSL. Tennis Grand Slams and top-tier football are added whenever live markets are available." },
  { q: "How often is this page updated?", a: "Match list and odds refresh every 30 seconds while the page is open. New fixtures appear the moment the exchange lists them." },
];

export const Route = createFileRoute("/predictions")({
  head: () => ({
    meta: [
      { title: "Today Cricket Match Prediction — Who Will Win & Live Odds" },
      { name: "description", content: "Today cricket match prediction: who will win today's IPL, T20, ODI & Test match with live score, exchange odds and free daily tips on WhatsApp." },
      { property: "og:title", content: "Today Cricket Match Prediction — Who Will Win & Live Odds" },
      { property: "og:description", content: "Who will win today's cricket match? Live odds, IPL, T20, ODI & Test predictions with real exchange rates, updated live." },
      { property: "og:url", content: "https://mahadevbookss.com/predictions" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/predictions" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(predictionsFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Predictions", item: "https://mahadevbookss.com/predictions" },
          ],
        }),
      },
    ],
  }),
  loader: async (): Promise<{ inPlayEvents: ApiEvent[] }> => ({
    inPlayEvents: await fetchInPlayEvents(),
  }),
  component: PredictionsPage,
});

// ---------- helpers ----------
function parseDate(s: string) {
  const t = new Date(s).getTime();
  return isNaN(t) ? 0 : t;
}
function isLive(e: ApiEvent) {
  const s = parseDate(e.event?.openDate ?? "");
  return s > 0 && s <= Date.now();
}
function splitTeams(name: string): [string, string | null] {
  const p = name.split(/\s+v\s+|\s+vs\.?\s+/i);
  if (p.length >= 2) return [p[0].trim(), p.slice(1).join(" v ").trim()];
  return [name, null];
}
function fmt(v?: number | null) {
  return v != null && !isNaN(v) ? v.toFixed(2) : "—";
}
function whenLabel(s: string) {
  const d = new Date(s);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleString("en-IN", { weekday: "short", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
}
function tipMessage(e: ApiEvent) {
  const league = e.competition?.name ?? e.eventType;
  return `Hi Mahadev desk, send me today's prediction for ${e.event.name} (${league}).`;
}
function whatsappFor(e: ApiEvent) {
  const base = whatsappUrl.split("?")[0];
  return `${base}?text=${encodeURIComponent(tipMessage(e))}`;
}

// ---------- page ----------
function PredictionsPage() {
  const { inPlayEvents } = Route.useLoaderData() as { inPlayEvents: ApiEvent[] };
  const cricket = inPlayEvents.filter((e: ApiEvent) => e.eventType === "Cricket");
  const others = inPlayEvents.filter((e: ApiEvent) => e.eventType !== "Cricket");
  const liveList = cricket.filter(isLive);
  const upcomingList = cricket
    .filter((e: ApiEvent) => !isLive(e))
    .sort((a: ApiEvent, b: ApiEvent) => parseDate(a.event.openDate) - parseDate(b.event.openDate));
  const leagues = Array.from(
    new Set(cricket.map((e: ApiEvent) => e.competition?.name).filter(Boolean) as string[])
  ).slice(0, 8);
  const featured = liveList[0] ?? upcomingList[0];

  return (
    <>
      {/* Editorial header */}
      <section className="relative border-b border-primary/20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-primary/[0.04] to-background" />
        <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06]" style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-4">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70 flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary">Predictions</span>
          </nav>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-end">
          {/* Left: editorial title */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
              <Sparkles className="h-3 w-3" /> Analyst Desk · Updated Live
            </div>
            <h1
              className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Cricket Predictions
              <span className="block text-primary drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]">
                for Today's Fixtures
              </span>
            </h1>
            <p className="mt-5 text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              Read our desk's take on every live and upcoming cricket match — pulled from the same exchange feed our traders use, paired with a WhatsApp analyst on standby. Free, unbiased, updated by the second.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.65)] transition-shadow"
              >
                <MessageCircle className="h-4 w-4" />
                Get today's tip
              </a>
              <a
                href="#live"
                className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary/10 transition-colors"
              >
                Jump to matches
              </a>
            </div>
          </div>

          {/* Right: live stats deck */}
          <aside className="rounded-2xl border border-primary/25 bg-card/60 backdrop-blur p-5 sm:p-6 shadow-[0_0_50px_rgba(212,175,55,0.08)]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.35em] text-primary font-bold">Today's board</span>
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-red-400 font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Live feed
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { n: liveList.length, l: "Live now", icon: Radio },
                { n: upcomingList.length, l: "Upcoming", icon: Clock },
                { n: leagues.length, l: "Leagues", icon: TrendingUp },
              ].map((s) => (
                <div key={s.l} className="rounded-lg border border-primary/20 bg-background/50 p-3">
                  <s.icon className="h-4 w-4 text-primary" />
                  <div className="mt-2 text-3xl font-bold text-foreground tabular-nums" style={{ fontFamily: "'Cinzel', serif" }}>
                    {s.n}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
            {leagues.length > 0 && (
              <div className="mt-5 pt-4 border-t border-primary/15">
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Leagues in play</div>
                <div className="flex flex-wrap gap-1.5">
                  {leagues.map((l) => (
                    <span key={l} className="rounded-md border border-primary/25 bg-primary/5 px-2 py-1 text-[10px] font-semibold text-primary/90 uppercase tracking-wider">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <AIOverview
        summary="Free daily cricket predictions with live back and lay odds pulled from a real exchange feed — IPL, T20 internationals, ODIs, Tests, WPL, BBL, PSL and more. Every fixture links to a WhatsApp analyst who replies with the recommended market, entry price and stake band in under a minute."
        points={[
          "Live and upcoming cricket matches with 30-second odds refresh",
          "Match odds, session and fancy tips from a real trading desk",
          "Tennis and football markets added when in play",
          "Free to read — no signup, no email, WhatsApp on demand",
        ]}
        keywords={["today cricket match prediction", "who will win today", "live cricket odds", "IPL prediction", "session tips"]}
      />

      {/* Featured pick */}
      {featured && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
          <FeaturedCard e={featured} />
        </section>
      )}

      {/* Live now */}
      <section id="live" className="mx-auto max-w-7xl px-4 sm:px-6 pb-6">
        <SectionHead
          eyebrow={liveList.length ? "In Play" : "Live status"}
          title="Live now"
          count={liveList.length}
          icon={Radio}
          accent="red"
        />
        {liveList.length === 0 ? (
          <EmptyRow text="No cricket matches in play right now. See upcoming fixtures below." />
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {liveList.map((e: ApiEvent) => <MatchCard key={e.event.id} e={e} live />)}
          </div>
        )}
      </section>

      {/* Upcoming */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
        <SectionHead
          eyebrow="Scheduled"
          title="Upcoming fixtures"
          count={upcomingList.length}
          icon={Clock}
        />
        {upcomingList.length === 0 ? (
          <EmptyRow text="No upcoming cricket fixtures loaded. Message the desk for the latest board." />
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {upcomingList.map((e: ApiEvent) => <MatchCard key={e.event.id} e={e} />)}
          </div>
        )}
      </section>

      {/* Also on the board */}
      {others.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
          <SectionHead eyebrow="Also on the board" title="Tennis & football markets" count={others.length} icon={Target} />
          <div className="grid gap-3 md:grid-cols-2">
            {others.slice(0, 6).map((e: ApiEvent) => <MatchCard key={e.event.id} e={e} compact />)}
          </div>
        </section>
      )}

      {/* Method / How we pick */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="rounded-3xl border border-primary/25 bg-card/40 backdrop-blur p-6 sm:p-10">
          <div className="grid gap-8 md:grid-cols-[240px_1fr] items-start">
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-primary font-bold">The method</div>
              <h2
                className="mt-2 text-3xl font-bold text-foreground leading-tight"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                How our analyst desk builds a call
              </h2>
            </div>
            <ol className="space-y-5">
              {[
                { icon: LineChart, t: "Read the exchange", d: "Back/lay volume, movement in the last 30 minutes, and pre-match versus in-play sentiment set the baseline probability." },
                { icon: Target, t: "Overlay conditions", d: "Pitch report, dew factor, toss impact, weather and venue history are weighted against the market implied price to find edge." },
                { icon: ShieldCheck, t: "Sanity-check stake", d: "Every tip ships with a suggested stake band matched to your bankroll — no reckless doubles, no chasing losses." },
                { icon: Flame, t: "Send on WhatsApp", d: "You get the call, the market (match odds / session / fancy), and the entry price. Place it via your Mahadev Book ID in seconds." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70">Step {String(i + 1).padStart(2, "0")}</span>
                      <span className="text-base font-bold text-foreground" style={{ fontFamily: "'Cinzel', serif" }}>{s.t}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SEO editorial block */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <article className="prose-invert text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground" style={{ fontFamily: "'Cinzel', serif" }}>
            Today's cricket betting tips, made simple
          </h2>
          <p>
            The Mahadev Book prediction desk covers every major cricket fixture — IPL, T20 World Cup, England ODIs, Australia Tests, Pakistan Super League, Big Bash, The Hundred, women's tours and domestic T20 leagues. Every call you see on this page is built on live exchange data, not clickbait headlines.
          </p>
          <p>
            You will see the same back and lay odds our trading desk works with. Compare our reading against the market before you commit a rupee — that transparency is the point. If a price looks off, message the desk and an analyst walks you through the logic in plain language.
          </p>
          <p>
            Alongside match-winner tips we send session bets (over runs, batsman runs, wicket sessions) and fancy markets whenever the price offers real value. Every message includes the recommended stake band so your bankroll survives the downswings that come with any sports betting strategy.
          </p>
        </article>
      </section>

      <FAQSection title="Predictions — Frequently Asked" items={predictionsFaqs} />

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-background to-background p-8 sm:p-12 text-center">
          <div aria-hidden className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
          <div aria-hidden className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.35em] text-primary font-bold">Ready to place?</div>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold text-foreground"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Get your verified ID in 60 seconds
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
              WhatsApp the desk. Instant KYC-verified Mahadev Book ID, UPI deposits, and today's analyst pick — all in one message.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[0_0_40px_rgba(212,175,55,0.45)]"
            >
              <MessageCircle className="h-4 w-4" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <RelatedLinks paths={["/schedule", "/matches", "/mahadev-betting-app", "/mahadev-book-vs-skyexchange-247", "/mahadev-book-vs-lotus-365", "/blog"]} title="Related pages" />
    </>
  );
}

// ---------- small components ----------
function SectionHead({
  eyebrow,
  title,
  count,
  icon: Icon,
  accent,
}: {
  eyebrow: string;
  title: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
  accent?: "red";
}) {
  return (
    <div className="flex items-end justify-between border-b border-primary/20 pb-3 mb-5">
      <div>
        <div className={`text-[10px] uppercase tracking-[0.35em] font-bold ${accent === "red" ? "text-red-400" : "text-primary"}`}>
          {eyebrow}
        </div>
        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "'Cinzel', serif" }}>
          <Icon className="h-5 w-5 text-primary" />
          {title}
        </h2>
      </div>
      <span className="text-[11px] uppercase tracking-widest text-muted-foreground tabular-nums">
        {count} match{count === 1 ? "" : "es"}
      </span>
    </div>
  );
}

function EmptyRow({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-dashed border-primary/25 bg-card/30 px-5 py-8 text-center text-sm text-muted-foreground">
      {text}
    </div>
  );
}

function OddsPill({ label, back, lay }: { label: string; back?: number | null; lay?: number | null }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[9px] font-bold uppercase tracking-widest text-primary/70">{label}</span>
      <div className="flex gap-1">
        <span className="rounded bg-sky-500/15 border border-sky-500/40 text-sky-300 px-2 py-0.5 text-[11px] font-bold tabular-nums min-w-[40px] text-center">
          {fmt(back)}
        </span>
        <span className="rounded bg-pink-500/15 border border-pink-500/40 text-pink-300 px-2 py-0.5 text-[11px] font-bold tabular-nums min-w-[40px] text-center">
          {fmt(lay)}
        </span>
      </div>
    </div>
  );
}

function MatchCard({ e, live, compact }: { e: ApiEvent; live?: boolean; compact?: boolean }) {
  const backs = (e.market?.consolidatedRunner?.back ?? []).filter((r) => r?.runner);
  const lays = e.market?.consolidatedRunner?.lay ?? [];
  const [t1, t2] = splitTeams(e.event.name);
  const league = e.competition?.name ?? e.market?.name ?? e.eventType;
  const link = whatsappFor(e);
  const seoTitle = `${e.event.name} — ${league} ${live ? "live" : "upcoming"} ${e.eventType} prediction`;

  return (
    <article
      itemScope
      itemType="https://schema.org/SportsEvent"
      aria-label={seoTitle}
      className="group relative rounded-xl border border-primary/20 bg-card/50 backdrop-blur p-4 sm:p-5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)] transition-all"
    >
      <meta itemProp="sport" content={e.eventType} />
      <meta itemProp="eventStatus" content={live ? "https://schema.org/EventInProgress" : "https://schema.org/EventScheduled"} />

      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground truncate max-w-[70%]" itemProp="superEvent">
          {league}
        </span>
        {live ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-red-500/50 bg-red-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Live
          </span>
        ) : (
          <time dateTime={e.event.openDate} itemProp="startDate" className="text-[10px] text-primary/80 tabular-nums whitespace-nowrap">
            {whenLabel(e.event.openDate)}
          </time>
        )}
      </div>

      <h3 itemProp="name" className="text-base sm:text-lg font-bold text-foreground leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <span>{t1}</span>
          {t2 && <span className="text-muted-foreground text-xs mx-2 font-normal align-middle">vs</span>}
          {t2 && <span>{t2}</span>}
        </a>
      </h3>

      {!compact && (
        <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-primary/15 bg-background/40 px-3 py-2.5">
          <OddsPill label="1" back={backs[0]?.price} lay={lays[0]?.price} />
          <OddsPill label="X" back={backs[2]?.price} lay={lays[2]?.price} />
          <OddsPill label="2" back={backs[1]?.price} lay={lays[1]?.price} />
        </div>
      )}

      <div className="mt-4 flex items-center gap-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2 text-[11px] font-bold uppercase tracking-widest text-primary-foreground hover:brightness-110 transition"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Get analyst tip
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-primary/40 px-3 py-2 text-[11px] font-bold uppercase tracking-widest text-primary hover:bg-primary/10 transition"
        >
          Place bet
        </a>
      </div>
    </article>
  );
}

function FeaturedCard({ e }: { e: ApiEvent }) {
  const [t1, t2] = splitTeams(e.event.name);
  const league = e.competition?.name ?? e.eventType;
  const backs = (e.market?.consolidatedRunner?.back ?? []).filter((r) => r?.runner);
  const lays = e.market?.consolidatedRunner?.lay ?? [];
  const live = isLive(e);
  const link = whatsappFor(e);
  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] via-background to-background p-6 sm:p-8">
      <div aria-hidden className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative grid gap-6 md:grid-cols-[1fr_auto] items-center">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              <Flame className="h-3 w-3" /> Top pick
            </span>
            {live ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-red-500/50 bg-red-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-red-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Live
              </span>
            ) : (
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{whenLabel(e.event.openDate)}</span>
            )}
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">· {league}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>
            {t1}{" "}
            {t2 && <span className="text-primary">vs</span>}{" "}
            {t2 ?? ""}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            Our desk is watching this fixture closely. Message us for the recommended market, entry price and stake band before the game moves.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[0_0_25px_rgba(212,175,55,0.35)]">
              <MessageCircle className="h-4 w-4" /> Get this tip
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary/10 transition">
              Open account
            </a>
          </div>
        </div>
        <div className="flex gap-3 md:flex-col md:items-end justify-start">
          <OddsPill label="1" back={backs[0]?.price} lay={lays[0]?.price} />
          <OddsPill label="X" back={backs[2]?.price} lay={lays[2]?.price} />
          <OddsPill label="2" back={backs[1]?.price} lay={lays[1]?.price} />
        </div>
      </div>
    </div>
  );
}
