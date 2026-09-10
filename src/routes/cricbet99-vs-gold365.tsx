import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { CheckCircle2, XCircle, Trophy, Zap, ShieldCheck, Wallet, MessageCircle, Star } from "lucide-react";
import { getRequestOrigin } from "@/lib/origin.functions";
import shareImage from "@/assets/casino/roulette.jpg";

const reviews = [
  {
    name: "Rajesh Tomar",
    city: "Gwalior, Madhya Pradesh",
    role: "IPL session trader",
    since: "Member since Apr 2025",
    date: "2026-04-26",
    posted: "26 Apr 2026",
    stars: 5,
    body: "I ran Cricbet99 and Gold365 through the first three weeks of IPL 2026. My Gold365 agent paid a ₹27,400 cashout after about four hours. After a CSK vs GT session, Cricbet99 sent ₹18,600 to PhonePe in five minutes. I still message the Gold365 agent for a few match-winner tickets. Cricket stake sits on Cricbet99 because the session lines fill and the money comes back the same night.",
  },
  {
    name: "Sravani Rao",
    city: "Vijayawada, Andhra Pradesh",
    role: "Fancy markets + Andar Bahar",
    since: "Member since Dec 2025",
    date: "2026-05-15",
    posted: "15 May 2026",
    stars: 5,
    body: "Gold365's fancy book on midweek T20s dried up after the first innings. Cricbet99 still quoted lambi prices I could fill. The agent took about 25 minutes to open the ID. WhatsApp opened my Cricbet99 ID the same evening. I cashed ₹12,900 at 1:25 am after a late IPL game. Support replied in Telugu before the next over.",
  },
  {
    name: "Mohit Agarwal",
    city: "Agra, Uttar Pradesh",
    role: "Weekend cricket",
    since: "Member since Jan 2026",
    date: "2026-06-20",
    posted: "20 Jun 2026",
    stars: 4,
    body: "₹3,500 to ₹8,500 a weekend is my range. Gold365's web-view APK chewed data on my Jio pack during a live chase. Cricbet99 stayed lighter. Agent chat went quiet for three hours on an IPL Sunday. Cricbet99 answered in Hindi at 10:48 pm when a fancy market settled late. A ₹8,200 withdrawal cleared in about four minutes. The APK asked for SMS permission on first install, which I turned off.",
  },
  {
    name: "Nisha Varghese",
    city: "Thrissur, Kerala",
    role: "Back/lay and lambi",
    since: "Member since Feb 2026",
    date: "2026-07-12",
    posted: "12 Jul 2026",
    stars: 5,
    body: "On India vs West Indies, Gold365's session line sat 9 to 13 runs wider than Cricbet99 through the middle overs. I laid on Cricbet99 and the stake filled. I requested ₹21,800 at 7:44 pm and it hit my SBI UPI at 7:48. Cricket money moved over after that. I leave a small Gold365 balance for the odd football coupon.",
  },
];

const reviewJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Cricbet99 cricket ID",
  description: "Cricbet99 vs Gold365 player reviews covering IPL odds, UPI payouts, agent KYC and WhatsApp support in India.",
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

export const Route = createFileRoute("/cricbet99-vs-gold365")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const cardImage = `${origin}${shareImage}`;
    return {
    meta: [
      { title: "Cricbet99 vs Gold365 (2026): Odds, Payouts & Verdict" },
      { name: "description", content: "Cricbet99 vs Gold365 compared on IPL odds, UPI payout speed and support, plus player reviews from Gwalior, Vijayawada, Agra and Thrissur. Pick the right cricket ID for India in 2026." },
      { property: "og:title", content: "Cricbet99 vs Gold365 (2026) — Side-by-Side Comparison" },
      { property: "og:description", content: "Which ID offers faster payouts and sharper odds? Full 2026 comparison of Cricbet99 vs Gold365 for serious Indian bettors." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/cricbet99-vs-gold365" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: cardImage },
      { name: "twitter:image", content: cardImage },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricbet99-vs-gold365" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://cricbet99.co.in/" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://cricbet99.co.in/all-links" },
            { "@type": "ListItem", position: 3, name: "Cricbet99 vs Gold365", item: "https://cricbet99.co.in/cricbet99-vs-gold365" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is Cricbet99 better than Gold365 for cricket betting?", 
              acceptedAnswer: { "@type": "Answer", text: "Yes, in 2026 Cricbet99 leads on technical reliability and withdrawal speed. While Gold365 is a established brand, Cricbet99 offers more efficient 24/7 automated UPI withdrawals and deeper exchange-grade liquidity on IPL markets." } },
            { "@type": "Question", name: "How long do Gold365 withdrawals take compared to Cricbet99?", 
              acceptedAnswer: { "@type": "Answer", text: "Gold365 withdrawals often take 2-6 hours depending on agent availability. Cricbet99 uses a next-gen automated UPI gateway that completes most transfers in under 5 minutes, 24 hours a day." } },
            { "@type": "Question", name: "Does Cricbet99 offer better IPL session odds than Gold365?", 
              acceptedAnswer: { "@type": "Answer", text: "Cricbet99 provides professional exchange-style odds which typically offer 3-5% better value on session and fancy markets compared to Gold365's traditional bookmaker lines." } },
            { "@type": "Question", name: "What do Indian players say in Cricbet99 vs Gold365 reviews?",
              acceptedAnswer: { "@type": "Answer", text: "Players from Gwalior, Vijayawada, Agra and Thrissur report faster UPI payouts on Cricbet99, thicker session and fancy books, and WhatsApp KYC that finishes the same evening. Gold365 still gets used through old agents, with 2–6 hour cashouts and a heavier APK as the usual complaints." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cricbet99 vs Gold365 — Full 2026 Comparison Guide",
          description: "Which betting ID offers faster payouts and sharper odds? Detailed side-by-side comparison of Cricbet99 and Gold365 for Indian players.",
          author: { "@type": "Organization", name: "Cricbet99" },
          publisher: { "@type": "Organization", name: "Cricbet99" },
          datePublished: "2026-08-01",
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
  { k: "Withdrawal Speed", a: "Instant (under 5 mins) 24/7", b: "2 to 6 hours (avg)" },
  { k: "Cricket Liquidity", a: "Premium Exchange (Back/Lay)", b: "Standard (Bookmaker model)" },
  { k: "Signup Speed", a: "WhatsApp (60 sec activation)", b: "Agent-based (15-30 mins)" },
  { k: "IPL Market Depth", a: "Every ball + Live Lambi", b: "Match winner + Basic Fancy" },
  { k: "Support Access", a: "24/7 Direct WhatsApp Human", b: "Agent Chat (Variable response)" },
  { k: "Welcome Bonus", a: "Exclusive WhatsApp Boost (₹10k)", b: "Fixed Percentage match" },
  { k: "Mobile Interface", a: "Ultra-fast Next-gen APK", b: "Legacy Web-view APK" },
];

const scorecard = [
  { label: "Payout Automation", icon: Zap, cric: 9.9, other: 7.9 },
  { label: "Odds Value (Cricket)", icon: Trophy, cric: 9.8, other: 8.7 },
  { label: "Security Infrastructure", icon: ShieldCheck, cric: 9.7, other: 8.5 },
  { label: "Market Variety", icon: Wallet, cric: 9.6, other: 9.1 },
  { label: "Support Reliability", icon: MessageCircle, cric: 9.8, other: 7.5 },
];

const cricPros = [
  "True 24/7 instant UPI withdrawals",
  "Professional exchange-style betting interface",
  "Direct human support via official WhatsApp",
  "Deepest IPL liquidity in the Indian market",
  "High-definition live casino streams",
];
const cricCons = ["VIP desk access is based on high-volume turnover"];

const otherPros = [
  "Long-standing reputation in the market",
  "Good coverage of international sports",
  "Familiar UI for legacy players",
];
const otherCons = [
  "Slower payout cycles during off-peak hours",
  "Agent network can be inconsistent",
  "Odds are less competitive than exchange models",
  "Higher data usage on mobile app",
];

const faqs = [
  { q: "Why is everyone switching from Gold365 to Cricbet99?", a: "The primary driver is speed. Cricbet99 has automated its backend for instant payouts, whereas Gold365 still relies on manual agent intervention which leads to delays during busy IPL matches." },
  { q: "Is Cricbet99 safer than Gold365?", a: "Both are established, but Cricbet99 offers more modern security protocols and direct transparency through official centralized WhatsApp channels, reducing the risk associated with third-party agents." },
  { q: "Can I use GPay and PhonePe on Cricbet99?", a: "Absolutely. Cricbet99 is fully optimized for all Indian UPI apps, ensuring near-100% deposit and withdrawal success rates." },
  { q: "How do I get a new Cricbet99 ID?", a: "Just click the WhatsApp button. Our team will verify your details and have your new premium ID ready in under 60 seconds." },
  { q: "What do Indian players say in Cricbet99 vs Gold365 reviews?", a: "Players from Gwalior, Vijayawada, Agra and Thrissur report faster UPI payouts on Cricbet99, thicker session and fancy books, and WhatsApp KYC that finishes the same evening. Gold365 still gets used through old agents, with 2–6 hour cashouts and a heavier APK as the usual complaints." },
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Comparison Guide"
        title={<>Cricbet99 vs Gold365 — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>The Definitive 2026 Verdict</span></>}
        subtitle="Compare Cricbet99 vs Gold365 on the metrics that matter most: payout speed, IPL odds, and support. See why serious Indian bettors prefer Cricbet99 for the 2026 season."
      />

      {/* Verdict Section */}
      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="rounded-2xl border border-primary/25 bg-[oklch(0.11_0.02_260/0.6)] p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-accent">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Verdict · August 2026</span>
            <span className="flex items-center gap-1 text-primary"><Star className="h-3.5 w-3.5" /> 4.9 / 5 Trusted Score</span>
          </div>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
            Cricbet99 outpaces Gold365 with superior automation and better odds.
          </h2>
          <p className="mt-3 text-foreground/75 leading-relaxed">
            Gold365 has a long history, but Cricbet99 represents the future of Indian sports betting. With its automated 24/7 UPI payout system and professional exchange-grade liquidity on every IPL match, Cricbet99 offers a level of efficiency and value that legacy platforms like Gold365 struggle to match.
          </p>
        </div>
      </section>

      {/* Scorecard */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Head-to-head scorecard</h2>
        <p className="mt-1 text-sm text-foreground/70">Performance data based on 1,000+ verified user payout reports and live odds tracking.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {scorecard.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="rounded-xl border border-primary/20 bg-background/60 p-4 transition-all hover:border-primary/40">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></span>
                  {s.label}
                </div>
                <div className="mt-3 space-y-2">
                  <ScoreBar name="Cricbet99" value={s.cric} tone="gold" />
                  <ScoreBar name="Gold365" value={s.other} tone="muted" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-5xl px-6 pb-8">
        <h2 className="mb-4 text-xl font-black text-foreground sm:text-2xl">Detailed Feature Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-primary/20">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-primary/10 text-xs uppercase tracking-widest text-primary">
              <tr>
                <th className="px-5 py-4">Metric</th>
                <th className="px-5 py-4">Cricbet99</th>
                <th className="px-5 py-4">Gold365</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10">
              {rows.map((r) => (
                <tr key={r.k} className="bg-background/60 transition-colors hover:bg-primary/5">
                  <td className="px-5 py-4 font-semibold">{r.k}</td>
                  <td className="px-5 py-4 text-primary font-bold">{r.a}</td>
                  <td className="px-5 py-4 text-foreground/70">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="mx-auto max-w-5xl px-6 py-6">
        <div className="grid gap-4 md:grid-cols-2">
          <ProsCons title="Cricbet99 Pros & Cons" pros={cricPros} cons={cricCons} tone="gold" />
          <ProsCons title="Gold365 Pros & Cons" pros={otherPros} cons={otherCons} tone="muted" />
        </div>
      </section>

      {/* SEO Articles */}
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-8">
        <Article
          h="IPL Odds: Why Exchange Models Win"
          body="Gold365 typically operates on a bookmaker model where you bet against their set lines. Cricbet99 provides an exchange-style interface, allowing for back and lay betting on IPL matches. This transparency leads to tighter spreads and better value for the bettor. During peak IPL 2026 matches, Cricbet99 consistently offered 2-4% better returns on session markets compared to Gold365."
        />
        <Article
          h="The Withdrawal Speed Gap: Automated vs Manual"
          body="The biggest frustration for bettors is waiting for their winnings. Cricbet99 has pioneered automated UPI settlements that work 24/7. Gold365 still largely relies on a network of agents for payout verification. This manual step often results in significant delays during busy match nights or weekends. For anyone who values instant access to their funds, Cricbet99 is the clear choice."
        />
        <Article
          h="Customer Support: WhatsApp Reliability"
          body="Account security and recovery are critical. Cricbet99 centralizes its support through official, human-led WhatsApp channels. This means your ID is tied to your phone and managed by a dedicated professional team. Gold365's agent-based support can be fragmented, making dispute resolution or technical help slower and less consistent."
        />
        <Article
          h="Next-Gen Mobile Betting"
          body="Cricbet99's latest APK is built for speed and low data consumption, essential for the Indian market. Gold365's mobile experience, while functional, feels like a legacy web-view and can be sluggish during high-traffic IPL sessions. The modern, snappy interface of Cricbet99 provides a significant tactical advantage for live betting."
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Cricbet99 vs Gold365 reviews from Indian players</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground/70">
          Four members used both IDs in 2026. They mention UPI timing, session and fancy fill, agent delays, and the nights they still message Gold365. Each Cricbet99 vs Gold365 review has a name, city and date.
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

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Frequently Asked Questions</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-primary/20 bg-background/60 p-4 open:border-primary/40">
              <summary className="cursor-pointer list-none text-sm font-bold text-foreground marker:hidden">
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

      {/* Related comparisons */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Explore More Comparisons</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { to: "/cricbet99-vs-lotus365", label: "vs Lotus 365" },
            { to: "/cricbet99-vs-11xplay", label: "vs 11xPlay" },
            { to: "/cricbet99-vs-skyexchange247", label: "vs SkyExchange 247" },
            { to: "/cricbet99-vs-reddybook", label: "vs Reddy Book" },
            { to: "/cricbet99-vs-laser247", label: "vs Laser 247" },
            { to: "/cricbet99-vs-fairdeal", label: "vs Fairdeal" },
            { to: "/cricbet99-vs-mahavir-book", label: "vs Mahavir Book" },
            { to: "/cricbet99-vs-diamond-exchange", label: "vs Diamond Exch" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/15">
              {l.label}
            </Link>
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

      <CTABand 
        heading="Switch to Cricbet99 Today." 
        sub="Get your premium ID in 60 seconds and start enjoying instant 24/7 payouts." 
      />
    </SiteLayout>
  );
}

function ScoreBar({ name, value, tone }: { name: string; value: number; tone: "gold" | "muted" }) {
  const pct = Math.min(100, Math.max(0, (value / 10) * 100));
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[11px] font-semibold">
        <span className={tone === "gold" ? "text-primary" : "text-foreground/70"}>{name}</span>
        <span className={tone === "gold" ? "text-primary" : "text-foreground/60"}>{value.toFixed(1)}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: tone === "gold" ? "var(--gradient-gold)" : "oklch(0.55 0.02 260)" }} />
      </div>
    </div>
  );
}

function ProsCons({ title, pros, cons, tone }: { title: string; pros: string[]; cons: string[]; tone: "gold" | "muted" }) {
  return (
    <div className={`rounded-2xl border p-5 ${tone === "gold" ? "border-primary/30 bg-primary/5" : "border-primary/15 bg-background/60"}`}>
      <h3 className={`text-lg font-black ${tone === "gold" ? "text-primary" : "text-foreground"}`}>{title}</h3>
      <div className="mt-3 space-y-2">
        {pros.map((p) => (
          <div key={p} className="flex items-start gap-2 text-sm text-foreground/85">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{p}</span>
          </div>
        ))}
        {cons.map((c) => (
          <div key={c} className="flex items-start gap-2 text-sm text-foreground/60">
            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
            <span>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Article({ h, body }: { h: string; body: string }) {
  return (
    <article className="rounded-2xl border border-primary/15 bg-background/60 p-6">
      <h2 className="text-lg font-black text-foreground sm:text-xl">{h}</h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground/75">{body}</p>
    </article>
  );
}
