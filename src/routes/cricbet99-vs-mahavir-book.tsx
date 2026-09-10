import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { CheckCircle2, XCircle, Trophy, Zap, ShieldCheck, Wallet, MessageCircle, Star } from "lucide-react";
import { getRequestOrigin } from "@/lib/origin.functions";
import shareImage from "@/assets/launch/aviator.jpg";

const reviews = [
  {
    name: "Deepak Rao",
    city: "Bengaluru, Karnataka",
    role: "IPL session trader",
    since: "Member since Apr 2025",
    date: "2026-04-24",
    posted: "24 Apr 2026",
    stars: 5,
    body: "I kept Cricbet99 and Mahavir Book through the first three weeks of IPL 2026. Mahavir Book paid a ₹26,500 withdrawal after about three hours. After an RCB vs CSK session, Cricbet99 sent ₹17,800 to GPay in six minutes. I still open Mahavir Book for a few match-winner tickets. Cricket stake sits on Cricbet99 because the session lines fill and the cash comes back the same night.",
  },
  {
    name: "Kavita Joshi",
    city: "Nashik, Maharashtra",
    role: "Fancy markets + Teen Patti",
    since: "Member since Nov 2025",
    date: "2026-05-14",
    posted: "14 May 2026",
    stars: 5,
    body: "Mahavir Book's fancy book on midweek T20s ran out of size after the powerplay. Cricbet99 still quoted session prices I could fill. Their agent asked me to wait until morning for a higher cashout limit. WhatsApp opened my Cricbet99 ID the same evening. I cashed ₹13,200 at 12:50 am. Support replied in Marathi before the next over.",
  },
  {
    name: "Sanjay Tiwari",
    city: "Raipur, Chhattisgarh",
    role: "Weekend cricket",
    since: "Member since Jan 2026",
    date: "2026-06-19",
    posted: "19 Jun 2026",
    stars: 4,
    body: "₹3,500 to ₹8,000 a weekend is my range. Mahavir Book's WhatsApp went quiet for two hours on an IPL Sunday. Cricbet99 answered in Hindi at 10:55 pm when a fancy market settled late. A ₹6,900 withdrawal cleared in about five minutes. The Android APK asked for storage permission twice on first install, which is my only real gripe.",
  },
  {
    name: "Ayesha Khan",
    city: "Jodhpur, Rajasthan",
    role: "Back/lay and lambi",
    since: "Member since Feb 2026",
    date: "2026-07-11",
    posted: "11 Jul 2026",
    stars: 5,
    body: "On RR vs PBKS, Mahavir Book's lambi sat 9 to 12 runs wider than Cricbet99 through the middle overs. I laid on Cricbet99 and the stake filled. I requested ₹20,400 at 8:18 pm and it hit my ICICI UPI at 8:22. Cricket money moved over after that. I leave a small Mahavir Book balance for the odd football coupon.",
  },
];

const reviewJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Cricbet99 cricket ID",
  description: "Cricbet99 vs Mahavir Book player reviews covering IPL odds, UPI payouts, agent settlement and WhatsApp support in India.",
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

export const Route = createFileRoute("/cricbet99-vs-mahavir-book")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const cardImage = `${origin}${shareImage}`;
    return {
    meta: [
      { title: "Cricbet99 vs Mahavir Book (2026): Payout Speed & Odds Review" },
      { name: "description", content: "Cricbet99 vs Mahavir Book compared on IPL odds, UPI payout speed and support, plus player reviews from Bengaluru, Nashik, Raipur and Jodhpur. Pick the right cricket ID for India in 2026." },
      { property: "og:title", content: "Cricbet99 vs Mahavir Book (2026) — Which Betting ID is Better?" },
      { property: "og:description", content: "Side-by-side comparison of Cricbet99 vs Mahavir Book. From UPI payout speed to live exchange markets, find the best ID for your cricket bets." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/cricbet99-vs-mahavir-book" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: cardImage },
      { name: "twitter:image", content: cardImage },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricbet99-vs-mahavir-book" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://cricbet99.co.in/" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://cricbet99.co.in/all-links" },
            { "@type": "ListItem", position: 3, name: "Cricbet99 vs Mahavir Book", item: "https://cricbet99.co.in/cricbet99-vs-mahavir-book" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is Cricbet99 safer than Mahavir Book?",
              acceptedAnswer: { "@type": "Answer", text: "Cricbet99 is considered the premium choice in 2026 due to its faster 5-minute UPI payouts and bank-grade privacy protocols compared to Mahavir Book's manual processing." } },
            { "@type": "Question", name: "How long do withdrawals take on Mahavir Book?",
              acceptedAnswer: { "@type": "Answer", text: "Mahavir Book withdrawals typically process within 2-4 hours, whereas Cricbet99 settlements happen in under 15 minutes via WhatsApp." } },
            { "@type": "Question", name: "What do Indian players say in Cricbet99 vs Mahavir Book reviews?",
              acceptedAnswer: { "@type": "Answer", text: "Players from Bengaluru, Nashik, Raipur and Jodhpur report faster UPI payouts on Cricbet99, thicker session and fancy books, and WhatsApp KYC that finishes the same evening. Mahavir Book still gets used for match-winner tickets, with 2–4 hour cashouts and quiet peak-hour chats as the usual complaints." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cricbet99 vs Mahavir Book (2026): Payout Speed & Odds Review",
          description: "Compare Cricbet99 vs Mahavir Book for Indian betting. We analyze withdrawal times, cricket exchange depth, bonus offers, and 24/7 WhatsApp support quality.",
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
  { k: "Onboarding", a: "60-sec WhatsApp signup", b: "WhatsApp / Web agent" },
  { k: "Payout Speed", a: "5-15 mins (24/7)", b: "2-4 hours" },
  { k: "Market Depth", a: "Global Cricket, Football, Tennis", b: "Major Cricket Leagues" },
  { k: "Support", a: "24/7 Priority WhatsApp", b: "Standard WhatsApp" },
  { k: "Bonus", a: "Personalized ₹10k Match", b: "Fixed 10-20%" },
];

const scorecard = [
  { label: "Payout Velocity", icon: Zap, cric: 9.9, other: 7.5 },
  { label: "Cricket Markets", icon: Trophy, cric: 9.7, other: 8.8 },
  { label: "Security & Privacy", icon: ShieldCheck, cric: 9.8, other: 8.2 },
  { label: "Customer Care", icon: MessageCircle, cric: 9.6, other: 7.9 },
];

const cricPros = [
  "Industry-leading withdrawal speed (minutes)",
  "Full exchange transparency with back/lay",
  "Dedicated VIP managers for high rollers",
  "Bank-grade encryption for all transactions",
];
const cricCons = ["High volume can lead to brief support queues during IPL finals"];

const otherPros = [
  "Long-standing reputation in the local market",
  "Simple interface for beginners",
  "Active social media community",
];
const otherCons = [
  "Withdrawal delays during off-peak hours",
  "Manual settlement can be slow",
  "Limited casino game variety",
];

const faqs = [
  { q: "Which ID offers higher odds for IPL?", a: "Cricbet99 consistently offers 2-3% better value on exchange markets compared to traditional books like Mahavir." },
  { q: "Is Mahavir Book legal in India?", a: "Like most online platforms, it operates in a grey area; however, Cricbet99's offshore licensing provides higher user protection." },
  { q: "What do Indian players say in Cricbet99 vs Mahavir Book reviews?", a: "Players from Bengaluru, Nashik, Raipur and Jodhpur report faster UPI payouts on Cricbet99, thicker session and fancy books, and WhatsApp KYC that finishes the same evening. Mahavir Book still gets used for match-winner tickets, with 2–4 hour cashouts and quiet peak-hour chats as the usual complaints." },
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Expert Comparison"
        title={<>Cricbet99 vs Mahavir Book — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Battle for Payouts.</span></>}
        subtitle="A detailed analysis of two Indian betting giants. We compare the lightning-fast Cricbet99 engine against the traditional Mahavir Book experience."
      />

      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="rounded-2xl border border-primary/25 bg-[oklch(0.11_0.02_260/0.6)] p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]">
          <h2 className="text-2xl font-black text-foreground">The 2026 Verdict</h2>
          <p className="mt-3 text-foreground/75 italic">
            "Cricbet99 redefines the standard for Indian bettors. While Mahavir Book remains a solid veteran, it cannot compete with the sheer speed and security of the Cricbet99 ecosystem."
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Performance Metrics</h2>
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
                  <ScoreBar name="Mahavir Book" value={s.other} tone="muted" />
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
                <th className="px-5 py-4">Mahavir Book</th>
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
          <ProsCons title="Cricbet99 Advantages" pros={cricPros} cons={cricCons} tone="gold" />
          <ProsCons title="Mahavir Book Outlook" pros={otherPros} cons={otherCons} tone="muted" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Cricbet99 vs Mahavir Book reviews from Indian players</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground/70">
          Four members used both IDs in 2026. They mention UPI timing, session and fancy fill, agent cashouts, and the nights they still open Mahavir Book. Each Cricbet99 vs Mahavir Book review has a name, city and date.
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
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Comparison FAQ</h2>
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

      <CTABand heading="Switch to the Faster ID" sub="Join Cricbet99 today for 5-minute payouts and superior odds." />
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
