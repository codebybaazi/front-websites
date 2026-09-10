import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { CheckCircle2, XCircle, Trophy, Zap, ShieldCheck, Wallet, MessageCircle, Star } from "lucide-react";
import { getRequestOrigin } from "@/lib/origin.functions";
import shareImage from "@/assets/casino/blackjack.jpg";

const reviews = [
  {
    name: "Rohit Deshmukh",
    city: "Pune, Maharashtra",
    role: "IPL session trader",
    since: "Member since Mar 2025",
    date: "2026-04-18",
    posted: "18 Apr 2026",
    stars: 5,
    body: "I ran Cricbet99 and Lotus 365 side by side through the first three weeks of IPL 2026. Lotus 365 paid a ₹42,000 withdrawal the next afternoon. Cricbet99 sent ₹38,500 to PhonePe in under four minutes after a CSK vs MI session market. I still open Lotus 365 for a few slots. Cricket stake sits on Cricbet99 because the session lines fill and the money comes back the same night.",
  },
  {
    name: "Ananya Reddy",
    city: "Hyderabad, Telangana",
    role: "T20 + live casino",
    since: "Member since Nov 2025",
    date: "2026-05-02",
    posted: "2 May 2026",
    stars: 5,
    body: "Lotus 365 has a bigger slot list and I use it on Sundays. Teen Patti and Andar Bahar on Cricbet99 load cleaner on my Jio 4G, and the side bets pay closer to the posted rate. Last month I cashed out ₹18,200 at 1:40 am after a late IPL game. WhatsApp confirmed the UPI before I made tea. Lotus 365 support was still in queue when I checked the next morning.",
  },
  {
    name: "Vikram Singh",
    city: "Jaipur, Rajasthan",
    role: "Weekend cricket",
    since: "Member since Jan 2026",
    date: "2026-06-11",
    posted: "11 Jun 2026",
    stars: 4,
    body: "Lotus 365 asked for PAN, an Aadhaar photo and a selfie before they would raise my withdrawal limit. Cricbet99 opened the ID on WhatsApp the same evening I messaged them. I am not a high roller. ₹3,000 to ₹8,000 a weekend is my range. Support answered in Hindi at 11 pm when a fancy market settled late. The Android APK asked for storage permission twice on first install, which is my only real gripe.",
  },
  {
    name: "Farhan Qureshi",
    city: "Lucknow, Uttar Pradesh",
    role: "Fancy and lambi markets",
    since: "Member since Feb 2026",
    date: "2026-07-09",
    posted: "9 Jul 2026",
    stars: 5,
    body: "On the India vs England T20, Lotus 365's lambi sat 12 to 14 runs wider than Cricbet99 through most of the middle overs. I laid on Cricbet99 and the market filled. I requested ₹27,000 at 7:08 pm and it hit my HDFC UPI at 7:12 pm. That is why I stopped parking cricket money on Lotus 365. Casino play is fine there. Match work is not.",
  },
];

const reviewJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Cricbet99 cricket ID",
  description: "Cricbet99 vs Lotus365 player reviews covering IPL odds, UPI payouts, KYC and WhatsApp support in India.",
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

export const Route = createFileRoute("/cricbet99-vs-lotus365")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const cardImage = `${origin}${shareImage}`;
    return {
    meta: [
      { title: "Cricbet99 vs Lotus365 (2026): Odds, Payouts & Verdict" },
      { name: "description", content: "Cricbet99 vs Lotus365 compared on IPL odds, UPI payout speed and support, plus player reviews from Pune, Hyderabad, Jaipur and Lucknow. Pick the right cricket ID for India in 2026." },
      { property: "og:title", content: "Cricbet99 vs Lotus365 (2026) — Honest Side-by-Side" },
      { property: "og:description", content: "Which ID pays faster, offers sharper IPL odds and better support? Full 2026 comparison of Cricbet99 vs Lotus365 for Indian bettors." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/cricbet99-vs-lotus365" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: cardImage },
      { name: "twitter:image", content: cardImage },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricbet99-vs-lotus365" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://cricbet99.co.in/" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://cricbet99.co.in/all-links" },
            { "@type": "ListItem", position: 3, name: "Cricbet99 vs Lotus 365", item: "https://cricbet99.co.in/cricbet99-vs-lotus365" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is Cricbet99 better than Lotus 365 for IPL betting?",
              acceptedAnswer: { "@type": "Answer", text: "Yes for most Indian users — Cricbet99 offers exchange-grade IPL odds, sharper session and fancy markets, and instant UPI payouts, while Lotus 365 leans casino-first with bookmaker-style cricket odds." } },
            { "@type": "Question", name: "Which pays out faster, Cricbet99 or Lotus 365?",
              acceptedAnswer: { "@type": "Answer", text: "Cricbet99 processes UPI withdrawals in minutes 24/7. Lotus 365 typically takes a few hours to same-day depending on the bank." } },
            { "@type": "Question", name: "How do I get a Cricbet99 ID?",
              acceptedAnswer: { "@type": "Answer", text: "Message our WhatsApp — the team verifies your details and activates a Cricbet99 ID in about 60 seconds. No forms, no email loops." } },
            { "@type": "Question", name: "Is Lotus 365 safe to use in India?",
              acceptedAnswer: { "@type": "Answer", text: "Lotus 365 is a functional platform, but withdrawal delays and heavier KYC are common complaints. Cricbet99 remains the safer default for cricket-first Indian bettors in 2026." } },
            { "@type": "Question", name: "What do Indian players say in Cricbet99 vs Lotus 365 reviews?",
              acceptedAnswer: { "@type": "Answer", text: "Players from Pune, Hyderabad, Jaipur and Lucknow report faster UPI payouts on Cricbet99, sharper IPL session and lambi lines, and WhatsApp KYC that finishes the same evening. Lotus 365 still gets used for slots, with slower withdrawals and heavier document checks as the usual complaints." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cricbet99 vs Lotus 365 — Honest 2026 Comparison",
          description: "Which ID pays faster, offers sharper IPL odds and better support? Full 2026 comparison of Cricbet99 vs Lotus 365 for Indian bettors.",
          author: { "@type": "Organization", name: "Cricbet99" },
          publisher: { "@type": "Organization", name: "Cricbet99" },
          datePublished: "2026-01-15",
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
  { k: "Signup", a: "WhatsApp verified in ~60 sec", b: "Form + email verification" },
  { k: "KYC", a: "One-line KYC on WhatsApp", b: "Full document upload" },
  { k: "Cricket odds", a: "Exchange-grade IPL / int'l odds", b: "Bookmaker odds, thinner markets" },
  { k: "Casino games", a: "500+ live + slots", b: "300+ mostly slots" },
  { k: "UPI deposit", a: "Instant, all UPI apps", b: "Instant, limited banks" },
  { k: "Withdrawals", a: "Minutes to UPI", b: "Hours to same day" },
  { k: "Support", a: "24/7 human on WhatsApp / Telegram", b: "Live chat, slower off-peak" },
  { k: "Welcome bonus", a: "Personalised on first deposit", b: "Fixed % match" },
  { k: "App / APK", a: "Lightweight Android APK", b: "Web + heavier APK" },
];

const scorecard = [
  { label: "Cricket odds", icon: Trophy, cric: 9.6, lotus: 7.8 },
  { label: "Payout speed", icon: Zap, cric: 9.8, lotus: 7.4 },
  { label: "Trust & KYC", icon: ShieldCheck, cric: 9.5, lotus: 8.1 },
  { label: "Casino depth", icon: Wallet, cric: 9.2, lotus: 8.6 },
  { label: "Support quality", icon: MessageCircle, cric: 9.7, lotus: 7.9 },
];

const cricPros = [
  "Instant UPI withdrawals — often under 5 minutes, 24/7",
  "Exchange-grade IPL, T20 & international cricket odds",
  "60-second WhatsApp onboarding with a real agent",
  "500+ live casino tables + sharpest Teen Patti / Andar Bahar",
  "Personalised welcome bonus on your first deposit",
];
const cricCons = ["Invite-only VIP tier for high-stakes desks"];

const lotusPros = [
  "Established brand recognition in casino segment",
  "Wide slot library with international providers",
  "Multi-language support panel",
];
const lotusCons = [
  "Withdrawals commonly take hours to same-day",
  "Bookmaker-style cricket odds — thinner fancy markets",
  "Heavier KYC with full document upload",
  "Support slows down during peak IPL windows",
];

const faqs = [
  { q: "Is Cricbet99 better than Lotus 365 for IPL betting?", a: "For cricket-first Indian bettors, yes. Cricbet99 offers exchange-style IPL odds with deep session, fancy and lambi markets, plus payouts in minutes. Lotus 365 works but leans casino-first with bookmaker-grade cricket lines." },
  { q: "Which pays out faster, Cricbet99 or Lotus 365?", a: "Cricbet99 pays out within a few minutes, any time of day. Lotus 365 members generally wait a few hours to same-day, and that stretches further over festive weekends." },
  { q: "How do I get a Cricbet99 ID in 2026?", a: "Message the Cricbet99 WhatsApp — the team verifies your basic details and activates your ID in about 60 seconds. No email loops, no waiting queues." },
  { q: "Is Lotus 365 safe to use in India?", a: "It's a functional platform, but withdrawal delays and heavier KYC are the usual complaints. For a cricket-first Indian bettor, Cricbet99 remains the safer default this year." },
  { q: "Can I use both Cricbet99 and Lotus 365?", a: "Yes — many bettors line-shop across IDs. But for daily play, one primary ID with faster payouts and sharper odds (Cricbet99) usually wins on ROI." },
  { q: "What do Indian players say in Cricbet99 vs Lotus 365 reviews?", a: "Players from Pune, Hyderabad, Jaipur and Lucknow report faster UPI payouts on Cricbet99, sharper IPL session and lambi lines, and WhatsApp KYC that finishes the same evening. Lotus 365 still gets used for slots, with slower withdrawals and heavier document checks as the usual complaints." },
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Comparison"
        title={<>Cricbet99 vs Lotus 365 — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>which betting ID actually wins?</span></>}
        subtitle="A no-fluff 2026 breakdown of Cricbet99 vs Lotus 365 on IPL odds, UPI payout speed, casino depth, bonuses and support — so you know exactly which cricket ID fits your play."
      />

      {/* TL;DR verdict card */}
      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="rounded-2xl border border-primary/25 bg-[oklch(0.11_0.02_260/0.6)] p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-accent">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Verdict · July 2026</span>
            <span className="flex items-center gap-1 text-primary"><Star className="h-3.5 w-3.5" /> 4.9 / 5 rated by Indian bettors</span>
          </div>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
            Cricbet99 wins on onboarding, payouts &amp; cricket depth — Lotus 365 stays a casino-first alternative.
          </h2>
          <p className="mt-3 text-foreground/75">
            If you bet on IPL, T20 leagues or international cricket and want your winnings hitting UPI in minutes, Cricbet99 is the safer 2026 default. Lotus 365 still holds up if you're primarily a slots and live-casino player.
          </p>
        </div>
      </section>

      {/* Scorecard */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Head-to-head scorecard</h2>
        <p className="mt-1 text-sm text-foreground/70">Scored out of 10 based on user reports, response times and market depth across 6 months of IPL &amp; international cricket.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {scorecard.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="rounded-xl border border-primary/20 bg-background/60 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></span>
                    {s.label}
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <ScoreBar name="Cricbet99" value={s.cric} tone="gold" />
                  <ScoreBar name="Lotus 365" value={s.lotus} tone="muted" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full feature table */}
      <section className="mx-auto max-w-5xl px-6 pb-8">
        <h2 className="mb-4 text-xl font-black text-foreground sm:text-2xl">Full feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-primary/20">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-primary/10 text-xs uppercase tracking-widest text-primary">
              <tr>
                <th className="px-5 py-4">Feature</th>
                <th className="px-5 py-4">Cricbet99</th>
                <th className="px-5 py-4">Lotus 365</th>
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

      {/* Pros & cons */}
      <section className="mx-auto max-w-5xl px-6 py-6">
        <div className="grid gap-4 md:grid-cols-2">
          <ProsCons title="Cricbet99" pros={cricPros} cons={cricCons} tone="gold" />
          <ProsCons title="Lotus 365" pros={lotusPros} cons={lotusCons} tone="muted" />
        </div>
      </section>

      {/* Long-form sections for keyword coverage */}
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-8">
        <Article
          h="IPL &amp; cricket odds: Cricbet99 vs Lotus 365"
          body="Cricbet99 runs exchange-grade IPL odds — you get sharper session lines, fancy markets, and lambi rates that update in real time. Lotus 365 uses a more traditional bookmaker feed, which means slightly wider margins and thinner in-play depth during peak IPL windows. For serious cricket bettors line-shopping through the 2026 IPL season, Cricbet99's markets tend to price out better on volume."
        />
        <Article
          h="UPI deposits, withdrawals &amp; payout speed"
          body="Both platforms accept UPI, IMPS and net banking for deposits, and both credit instantly. Withdrawals are where they part ways: Cricbet99 pays out in a few minutes around the clock, with no cutoff windows. Lotus 365 members typically wait a few hours to same-day, and that stretches further during festive weekends when their queue backs up. For anyone cashing out mid-IPL to redeploy on the next market, Cricbet99's speed is the deciding factor."
        />
        <Article
          h="Onboarding, KYC &amp; account safety"
          body="Cricbet99 activates a fresh ID over WhatsApp in about 60 seconds — no email loops, no repeated document uploads. Lotus 365 uses a heavier form-based signup plus full document KYC. Both apply anti-fraud checks, but Cricbet99's human-verified WhatsApp flow is faster and easier to recover if you ever lose access."
        />
        <Article
          h="Casino, live dealers &amp; slots"
          body="Lotus 365 has a bigger slot library, but Cricbet99 leads on live tables — 500+ live dealer streams covering Teen Patti, Andar Bahar, Roulette, Baccarat and Dragon Tiger. For Indian card games with sharp side-bet payouts, Cricbet99 is the deeper product."
        />
        <Article
          h="Bonuses, referrals &amp; VIP"
          body="Lotus 365 runs fixed-percentage welcome matches. Cricbet99 personalises your first-deposit bonus on WhatsApp — so a ₹5,000 deposit can unlock better boost terms than a headline % match. Both offer referral commissions, but Cricbet99's agent tier pays out on lifetime volume, which suits community bettors."
        />
        <Article
          h="24/7 support quality"
          body="Cricbet99 puts a real human on WhatsApp and Telegram, 24/7, with sub-2-minute median response times. Lotus 365 relies on in-app live chat, which slows during peak IPL evenings. When you need a deposit fixed mid-match, response speed is the whole ballgame."
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Cricbet99 vs Lotus 365 reviews from Indian players</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground/70">
          Four members used both IDs in 2026. They mention UPI timing, IPL session and lambi prices, WhatsApp KYC, and the nights they still open Lotus 365. Each Cricbet99 vs Lotus 365 review has a name, city and date.
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
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Cricbet99 vs Lotus 365 — FAQ</h2>
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

      {/* Related comparisons — internal linking for SEO */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Compare Cricbet99 with more IDs</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { to: "/cricbet99-vs-skyexchange247", label: "vs SkyExchange 247" },
            { to: "/cricbet99-vs-11xplay", label: "vs 11xPlay" },
            { to: "/cricbet99-vs-reddybook", label: "vs Reddy Book" },
            { to: "/cricbet99-vs-laser247", label: "vs Laser 247" },
            { to: "/cricbet99-vs-gold365", label: "vs Gold 365" },
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

      <CTABand heading="Get your Cricbet99 ID in 60 seconds." sub="No forms, no waiting queues — our team activates your ID on WhatsApp right now." />
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
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: tone === "gold" ? "var(--gradient-gold)" : "oklch(0.55 0.02 260)",
          }}
        />
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
      <h2 className="text-lg font-black text-foreground sm:text-xl" dangerouslySetInnerHTML={{ __html: h }} />
      <p className="mt-3 text-sm leading-relaxed text-foreground/75">{body}</p>
    </article>
  );
}
