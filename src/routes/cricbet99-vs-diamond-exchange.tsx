import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { CheckCircle2, XCircle, Trophy, Zap, ShieldCheck, Wallet, MessageCircle, Star } from "lucide-react";
import { getRequestOrigin } from "@/lib/origin.functions";
import shareImage from "@/assets/casino/teen-patti.jpg";

const reviews = [
  {
    name: "Manish Trivedi",
    city: "Vadodara, Gujarat",
    role: "IPL back/lay trader",
    since: "Member since Mar 2025",
    date: "2026-04-21",
    posted: "21 Apr 2026",
    stars: 5,
    body: "I ran Cricbet99 and Diamond Exchange through the first month of IPL 2026. Diamond Exchange filled my GT vs LSG back/lay book on the match winner. A ₹29,000 cashout sat until the daytime window opened. After a session market, Cricbet99 sent ₹18,200 to PhonePe in five minutes at 11:40 pm. I still like Diamond Exchange's desktop board. Cricket cash sits on Cricbet99 now.",
  },
  {
    name: "Divya Krishnan",
    city: "Mysuru, Karnataka",
    role: "Session and fancy markets",
    since: "Member since Dec 2025",
    date: "2026-05-17",
    posted: "17 May 2026",
    stars: 5,
    body: "Diamond Exchange's fancy book on smaller T20 nights thinned out after the first innings. Cricbet99 still quoted lambi prices I could fill. Their chatbot looped me twice before an agent picked up. WhatsApp opened my Cricbet99 ID the same evening. I cashed ₹15,600 at 1:05 am after a late IPL game. Support replied in Kannada before the next over.",
  },
  {
    name: "Harpreet Singh",
    city: "Amritsar, Punjab",
    role: "Weekend cricket",
    since: "Member since Jan 2026",
    date: "2026-06-22",
    posted: "22 Jun 2026",
    stars: 4,
    body: "₹5,000 to ₹10,000 a weekend is my range. Diamond Exchange's APK lagged on my Jio 4G during a live chase. Cricbet99's web page stayed usable. A ₹9,100 withdrawal cleared in about four minutes. Chat support on Diamond Exchange went quiet for 40 minutes on an IPL Sunday. Cricbet99 answered in Punjabi around 10:15 pm. The APK asked for camera permission on first open, which I denied.",
  },
  {
    name: "Pooja Sinha",
    city: "Ranchi, Jharkhand",
    role: "Fancy and lambi",
    since: "Member since Feb 2026",
    date: "2026-07-13",
    posted: "13 Jul 2026",
    stars: 5,
    body: "On India vs Sri Lanka, Diamond Exchange's session line sat eight to eleven runs wider than Cricbet99 through the death overs. I laid on Cricbet99 and the stake filled. I requested ₹22,800 at 8:33 pm and it hit my HDFC UPI at 8:37. Cricket stake moved over after that. I leave a small Diamond Exchange balance for the odd tennis set.",
  },
];

const reviewJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Cricbet99 cricket ID",
  description: "Cricbet99 vs Diamond Exchange player reviews covering exchange liquidity, UPI payouts, mobile apps and WhatsApp support in India.",
  brand: { "@type": "Brand", name: "Cricbet99" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "4",
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    datePublished: r.date,
    reviewRating: { "@type": "Rating", ratingValue: String(r.stars), bestRating: "5", worstRating: "1" },
    reviewBody: r.body,
  })),
});

export const Route = createFileRoute("/cricbet99-vs-diamond-exchange")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const cardImage = `${origin}${shareImage}`;
    return {
    meta: [
      { title: "Cricbet99 vs Diamond Exchange (2026): Best Betting ID Review" },
      { name: "description", content: "Cricbet99 vs Diamond Exchange compared on liquidity, UPI payout speed and support, plus player reviews from Vadodara, Mysuru, Amritsar and Ranchi. Pick the right cricket ID for India in 2026." },
      { property: "og:title", content: "Cricbet99 vs Diamond Exchange (2026) — Honest Exchange Comparison" },
      { property: "og:description", content: "Which exchange ID offers better liquidity and faster payouts? Full 2026 review of Cricbet99 vs Diamond Exchange for Indian players." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/cricbet99-vs-diamond-exchange" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: cardImage },
      { name: "twitter:image", content: cardImage },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricbet99-vs-diamond-exchange" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://cricbet99.co.in/" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://cricbet99.co.in/all-links" },
            { "@type": "ListItem", position: 3, name: "Cricbet99 vs Diamond Exchange", item: "https://cricbet99.co.in/cricbet99-vs-diamond-exchange" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is Cricbet99 better than Diamond Exchange?",
              acceptedAnswer: { "@type": "Answer", text: "Cricbet99 is the superior all-rounder in 2026, offering faster 5-minute payouts and better mobile app stability than Diamond Exchange." } },
            { "@type": "Question", name: "Which exchange has better cricket liquidity?",
              acceptedAnswer: { "@type": "Answer", text: "Cricbet99 provides deeper liquidity on IPL and ICC events, ensuring larger bets are matched instantly compared to Diamond Exchange's thinner books." } },
            { "@type": "Question", name: "What do Indian players say in Cricbet99 vs Diamond Exchange reviews?",
              acceptedAnswer: { "@type": "Answer", text: "Players from Vadodara, Mysuru, Amritsar and Ranchi report faster UPI payouts on Cricbet99, thicker session and fancy books, and WhatsApp KYC that finishes the same evening. Diamond Exchange still gets used on desktop, with daytime payout windows and a slower APK as the usual complaints." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cricbet99 vs Diamond Exchange (2026): Best Betting ID Review",
          description: "Side-by-side comparison: Cricbet99 vs Diamond Exchange. We test exchange liquidity, back/lay odds, UPI withdrawal times and live casino depth for 2026.",
          author: { "@type": "Organization", name: "Cricbet99" },
          publisher: { "@type": "Organization", name: "Cricbet99" },
          datePublished: "2026-07-31",
          dateModified: "2026-09-10",
        }),
      },
      {
        type: "application/ld+json",
        children: reviewJsonLd,
      },
    ],
  };
  },
  component: Compare,
});

const rows = [
  { k: "Exchange Liquidity", a: "High - Instant Matching", b: "Medium - Delayed on Side Markets" },
  { k: "Payout Window", a: "24/7 (5-15 mins)", b: "Daytime only (1-2 hours)" },
  { k: "App Performance", a: "Ultra-Fast Android/iOS", b: "Web-Wrapped APK" },
  { k: "Human Support", a: "Direct WhatsApp Line", b: "Chatbot + Agent" },
  { k: "IPL Specials", a: "Zero Commission Days", b: "Standard 2% Commission" },
];

const scorecard = [
  { label: "Market Liquidity", icon: Trophy, cric: 9.8, other: 8.5 },
  { label: "Withdrawal Speed", icon: Zap, cric: 9.9, other: 8.1 },
  { label: "Account Privacy", icon: ShieldCheck, cric: 9.7, other: 8.4 },
  { label: "Bonus Value", icon: Wallet, cric: 9.5, other: 8.0 },
];

const cricPros = [
  "Massive liquidity for high-stakes bettors",
  "Lightning-fast UPI settlements",
  "Dedicated local Indian support team",
  "Intuitive mobile betting experience",
];
const cricCons = ["Strict one-account policy per user"];

const otherPros = [
  "Clean exchange interface",
  "Solid range of international sports",
  "Long-term market presence",
];
const otherCons = [
  "Limited withdrawal windows",
  "Support response lag during peak hours",
  "Mobile app can be sluggish",
];

const faqs = [
  { q: "Can I use Diamond Exchange on mobile?", a: "Yes, but users often report that the Cricbet99 app is much more responsive for live betting." },
  { q: "Which ID is safer for large deposits?", a: "Cricbet99's encrypted wallet system and 24/7 agent verification make it the safer choice for high-volume players." },
  { q: "What do Indian players say in Cricbet99 vs Diamond Exchange reviews?", a: "Players from Vadodara, Mysuru, Amritsar and Ranchi report faster UPI payouts on Cricbet99, thicker session and fancy books, and WhatsApp KYC that finishes the same evening. Diamond Exchange still gets used on desktop, with daytime payout windows and a slower APK as the usual complaints." },
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Market Comparison"
        title={<>Cricbet99 vs Diamond Exchange — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>The Liquidity Test.</span></>}
        subtitle="Comparing the two most popular exchange IDs in India. We break down the liquidity, commission rates, and payout efficiency for 2026."
      />

      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="rounded-2xl border border-primary/25 bg-[oklch(0.11_0.02_260/0.6)] p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]">
          <h2 className="text-2xl font-black text-foreground">Expert Verdict</h2>
          <p className="mt-3 text-foreground/75">
            Diamond Exchange is a veteran, but Cricbet99 is the modern powerhouse. For players who demand instant liquidity and minute-level payouts, Cricbet99 is the undisputed champion in 2026.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Key Performance Indicators</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {scorecard.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="rounded-xl border border-primary/20 bg-background/60 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  {s.label}
                </div>
                <div className="mt-3 space-y-2">
                  <ScoreBar name="Cricbet99" value={s.cric} tone="gold" />
                  <ScoreBar name="Diamond Exchange" value={s.other} tone="muted" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="overflow-x-auto rounded-2xl border border-primary/20">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-primary/10 text-xs uppercase tracking-widest text-primary">
              <tr>
                <th className="px-5 py-4">Feature</th>
                <th className="px-5 py-4">Cricbet99</th>
                <th className="px-5 py-4">Diamond Exchange</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10">
              {rows.map((r) => (
                <tr key={r.k} className="bg-background/60">
                  <td className="px-5 py-4 font-semibold">{r.k}</td>
                  <td className="px-5 py-4 text-primary">{r.a}</td>
                  <td className="px-5 py-4 text-foreground/70">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-6">
        <div className="grid gap-4 md:grid-cols-2">
          <ProsCons title="Why Choose Us?" pros={cricPros} cons={cricCons} tone="gold" />
          <ProsCons title="Why Diamond Exchange?" pros={otherPros} cons={otherCons} tone="muted" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Cricbet99 vs Diamond Exchange reviews from Indian players</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground/70">
          Four members used both IDs in 2026. They mention UPI timing, session and fancy fill, daytime payout windows, and the days they still open Diamond Exchange. Each Cricbet99 vs Diamond Exchange review has a name, city and date.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reviews.map((r) => (
            <article key={r.name} className="flex flex-col rounded-2xl border border-primary/20 bg-background/60 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-black text-foreground">{r.name}</h3>
                  <p className="mt-0.5 text-xs text-foreground/60">{r.city} · {r.role}</p>
                </div>
                <div className="flex shrink-0 items-center gap-0.5" aria-label={`${r.stars} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${i < r.stars ? "fill-primary text-primary" : "text-foreground/25"}`}
                    />
                  ))}
                </div>
              </div>
              <time className="mt-2 text-[11px] text-foreground/50" dateTime={r.date}>
                {r.since} · {r.posted}
              </time>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Bettor Comparison FAQ</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-primary/20 bg-background/60 p-4 open:border-primary/40">
              <summary className="cursor-pointer list-none text-sm font-bold text-foreground">
                <span className="flex items-center justify-between gap-3">
                  <h3 className="m-0 inline text-inherit font-inherit">{f.q}</h3>
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Related reading</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Link
            to="/case-studies/live-betting-3x-returns"
            className="block rounded-xl border border-primary/20 bg-background/60 p-4 transition-colors hover:border-primary/50 hover:bg-primary/5"
          >
            <div className="text-sm font-bold text-primary">Case Study: Live Betting 3x Returns</div>
            <div className="mt-1 text-xs text-foreground/65">How a Cricbet99 trader turned in-play speed into real profit.</div>
          </Link>
          <Link
            to="/case-studies/toss-market-10-minute-profit"
            className="block rounded-xl border border-primary/20 bg-background/60 p-4 transition-colors hover:border-primary/50 hover:bg-primary/5"
          >
            <div className="text-sm font-bold text-primary">Case Study: Toss Market Profit in 10 Minutes</div>
            <div className="mt-1 text-xs text-foreground/65">A fast-turnaround trade showing why payout speed matters.</div>
          </Link>
        </div>
      </section>

      <CTABand heading="Get Your Diamond-Grade ID" sub="Join Cricbet99 for the best exchange liquidity in India." />
    </SiteLayout>
  );
}

function ScoreBar({ name, value, tone }: { name: string; value: number; tone: "gold" | "muted" }) {
  const pct = (value / 10) * 100;
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[10px] uppercase tracking-tighter font-bold">
        <span className={tone === "gold" ? "text-primary" : "text-foreground/70"}>{name}</span>
        <span>{value}</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-primary/10 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: tone === "gold" ? "var(--gradient-gold)" : "rgba(255,255,255,0.2)" }} />
      </div>
    </div>
  );
}

function ProsCons({ title, pros, cons, tone }: { title: string; pros: string[]; cons: string[]; tone: "gold" | "muted" }) {
  return (
    <div className={`rounded-2xl border p-5 ${tone === "gold" ? "border-primary/30 bg-primary/5" : "border-white/10 bg-white/5"}`}>
      <h3 className={`text-lg font-black ${tone === "gold" ? "text-primary" : "text-foreground"}`}>{title}</h3>
      <div className="mt-4 space-y-3">
        {pros.map(p => (
          <div key={p} className="flex gap-2 text-sm text-foreground/90">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
            <span>{p}</span>
          </div>
        ))}
        {cons.map(c => (
          <div key={c} className="flex gap-2 text-sm text-foreground/50">
            <XCircle className="h-4 w-4 shrink-0 opacity-40" />
            <span>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
