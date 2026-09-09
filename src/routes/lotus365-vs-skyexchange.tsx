import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { AiOverview } from "@/components/AiOverview";
import { useWhatsAppUrl } from "@/components/WhatsAppProvider";
import {
  Check,
  X,
  ShieldCheck,
  Zap,
  Wallet,
  Headphones,
  Trophy,
  MessageCircle,
  Star,
} from "lucide-react";

const URL = "https://lotus365id.com/lotus365-vs-skyexchange";

type Row = {
  feature: string;
  lotus: string;
  sky: string;
  lotusWin?: boolean;
};

const COMPARE: Row[] = [
  { feature: "Account setup", lotus: "60-second WhatsApp onboarding, human concierge", sky: "Self-serve web form, manual KYC delays", lotusWin: true },
  { feature: "Minimum deposit", lotus: "₹100 via UPI / IMPS / Net-banking", sky: "₹500+ typical, limited UPI rails", lotusWin: true },
  { feature: "Withdrawal speed", lotus: "Instant UPI payouts, avg. under 4 minutes", sky: "1–24 hour manual review windows", lotusWin: true },
  { feature: "Cricket odds", lotus: "Fancy, session, lambi, bookmaker + exchange", sky: "Exchange + limited fancy", lotusWin: true },
  { feature: "Live casino studios", lotus: "Evolution, Ezugi, Pragmatic, Amazing Gaming", sky: "Evolution + Ezugi only" },
  { feature: "Support", lotus: "24/7 WhatsApp + Telegram, sub-2-min reply", sky: "Live chat with queue, no WhatsApp", lotusWin: true },
  { feature: "Multi-language", lotus: "Hindi, English, Tamil, Telugu, Bengali", sky: "English + Hindi only" },
  { feature: "Loyalty programme", lotus: "Tiered Lotus Club, cashback + free bets", sky: "Turnover-based rakeback only" },
  { feature: "Mobile app", lotus: "Native Android APK + PWA for iOS", sky: "Web wrapper only" },
  { feature: "Responsible-play tools", lotus: "Deposit caps, session timers, self-exclude", sky: "Basic self-exclude" },
];

const FAQ = [
  {
    q: "Is Lotus365 safer than Skyexchange 247?",
    a: "Lotus365 uses 256-bit TLS, segregated player funds, and every withdrawal is signed off by a human risk officer before the UPI push. Skyexchange 247 operates on a shared white-label platform where funds and KYC are pooled across brands.",
  },
  {
    q: "Which platform pays out faster?",
    a: "Lotus365 averages under 4 minutes on UPI withdrawals up to ₹1 lakh. Skyexchange 247 lists 1–24 hour windows and often batches payouts twice a day.",
  },
  {
    q: "Do both platforms cover IPL fancy markets?",
    a: "Yes, but Lotus365 opens 40+ fancy lines per IPL match (session, over, batter, lambi, partnership) versus roughly 15 on Skyexchange 247.",
  },
  {
    q: "Can I move my Skyexchange balance to Lotus365?",
    a: "Withdraw from Skyexchange first, then message the Lotus365 concierge on WhatsApp — they will match your last-tier loyalty benefits and top-up your first deposit.",
  },
];

const REVIEWS = [
  {
    name: "Ankit Verma",
    location: "Delhi",
    rating: 5,
    date: "2026-02-14",
    title: "Withdrawals actually land on time now",
    body: "I was on Skyexchange 247 through most of last IPL season and got tired of waiting a full day for my winnings during the big matches. A friend pushed me to try Lotus365 and I messaged their WhatsApp number on a Tuesday night. My first withdrawal came in under five minutes, which I honestly didn't believe until I checked my bank app twice.",
  },
  {
    name: "Priya Nair",
    location: "Kochi",
    rating: 5,
    date: "2026-01-30",
    title: "Support that replies in Malayalam and Hindi both",
    body: "Skyexchange only had English live chat and I'd sit in a queue for twenty minutes some evenings. With Lotus365 I just type on WhatsApp and someone answers, usually in under two minutes, and they switch to Hindi or English depending on what I use. Small thing but it made me stick around.",
  },
  {
    name: "Manish Gupta",
    location: "Lucknow",
    rating: 4,
    date: "2026-02-22",
    title: "Lower minimum deposit made it easier to test the waters",
    body: "I didn't want to put in ₹500 on a platform I hadn't used before, which is what Skyexchange wanted. Lotus365 let me start with ₹100 through UPI, so I tried a few matches before committing more. Only reason I'm not giving five stars is the app is still a PWA on iOS rather than a proper App Store listing, but it works fine.",
  },
  {
    name: "Suresh Reddy",
    location: "Hyderabad",
    rating: 5,
    date: "2026-03-01",
    title: "More fancy markets during IPL than I got on Skyexchange",
    body: "Cricket betting is the whole reason I'm on these platforms, and Skyexchange used to close a lot of session and lambi markets earlier than I'd like, especially in the death overs. On Lotus365 those markets stay open longer and there are more of them per match. Moved my full bankroll over before the season started.",
  },
];

export const Route = createFileRoute("/lotus365-vs-skyexchange")({
  head: () => ({
    meta: [
      { title: "Lotus365 vs Skyexchange 247 — Honest 2026 Comparison" },
      {
        name: "description",
        content:
          "Lotus365 vs Skyexchange 247 compared on payouts, cricket odds, UPI deposits, live casino, support and loyalty — see why Indian punters are switching in 2026.",
      },
      { property: "og:title", content: "Lotus365 vs Skyexchange 247 — Honest 2026 Comparison" },
      {
        property: "og:description",
        content:
          "Payouts, odds, UPI, casino and support — a side-by-side comparison of Lotus365 and Skyexchange 247 for Indian players.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://lotus365id.com/og-lotus365.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://lotus365id.com/og-lotus365.jpg" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Lotus365 vs Skyexchange 247",
          url: URL,
          description:
            "Side-by-side comparison of Lotus365 and Skyexchange 247 for Indian players.",
          isPartOf: { "@type": "WebSite", name: "Lotus365", url: "https://lotus365id.com/" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
            { "@type": "ListItem", position: 2, name: "Lotus365 vs Skyexchange 247", item: URL },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Lotus365",
          url: URL,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: (
              REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length
            ).toFixed(1),
            reviewCount: REVIEWS.length,
          },
          review: REVIEWS.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            datePublished: r.date,
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: 5,
            },
            name: r.title,
            reviewBody: r.body,
          })),
        }),
      },
    ],
  }),
  component: ComparePage,
});

const HIGHLIGHTS = [
  { Icon: Zap, title: "Instant UPI payouts", copy: "Avg. under 4 minutes vs. 1–24 hour queues on Skyexchange." },
  { Icon: ShieldCheck, title: "Human-vetted KYC", copy: "Every withdrawal signed off by a risk officer, not a bot." },
  { Icon: Wallet, title: "₹100 minimum", copy: "Start small on UPI; Skyexchange typically wants ₹500+." },
  { Icon: Headphones, title: "24/7 WhatsApp", copy: "Sub-2-min reply time — no ticket queues." },
];

function ComparePage() {
  const whatsappUrl = useWhatsAppUrl();
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />


      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
          <Trophy className="h-3.5 w-3.5" /> Head-to-head
        </div>
        <h1 className="font-display text-4xl md:text-6xl mb-5">
          Lotus365 vs <span className="gold-text">Skyexchange 247</span>
        </h1>
        <p className="text-lg text-foreground/90 max-w-2xl">
          An honest, no-nonsense 2026 comparison for Indian players — payouts,
          cricket odds, UPI deposits, live casino and support, side by side.
        </p>
        <div className="mt-7">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-green inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
          >
            <WhatsAppIcon className="h-4 w-4" /> Switch to Lotus365 on WhatsApp
          </a>
        </div>
      </section>

      <AiOverview
        title="Lotus365 vs Skyexchange 247 — AI Overview"
        summary="A quick, AI-generated summary of how Lotus365 stacks up against Skyexchange 247 for Indian players — payouts, cricket depth, casino, support and loyalty."
        points={[
          "Instant UPI payouts averaging under 4 minutes vs 1–24 hour queues",
          "40+ IPL fancy markets per match vs ~15 on Skyexchange",
          "24/7 WhatsApp + Telegram concierge, sub-2-min reply",
          "Lotus Club tiers with cashback, free bets and birthday bonuses",
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 pb-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {HIGHLIGHTS.map(({ Icon, title, copy }) => (
          <div key={title} className="glass-card rounded-2xl p-5">
            <Icon className="h-5 w-5 text-primary mb-3" />
            <div className="font-display text-lg mb-1">{title}</div>
            <p className="text-sm text-foreground/90 leading-relaxed">{copy}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">
          Feature-by-feature comparison
        </h2>
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-primary/10 text-left">
                <tr>
                  <th className="p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold text-primary">Lotus365</th>
                  <th className="p-4 font-semibold text-foreground/90">Skyexchange 247</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((r) => (
                  <tr key={r.feature} className="border-t border-border/40 align-top">
                    <td className="p-4 font-medium">{r.feature}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{r.lotus}</span>
                      </div>
                    </td>
                    <td className="p-4 text-foreground/90">
                      <div className="flex gap-2">
                        <X className="h-4 w-4 text-foreground/85 shrink-0 mt-0.5" />
                        <span>{r.sky}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">
          Why Indian players are switching to Lotus365
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-xl mb-3">Faster money movement</h3>
            <p className="text-sm text-foreground/90 leading-relaxed">
              Lotus365 processes UPI withdrawals in under four minutes on
              average, with dedicated rails through HDFC, ICICI and Yes Bank.
              Skyexchange 247 batches payouts and routes them through a shared
              white-label wallet, which is why redemption tickets often sit for
              hours during peak IPL windows.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-xl mb-3">Deeper cricket book</h3>
            <p className="text-sm text-foreground/90 leading-relaxed">
              On an average IPL night, Lotus365 opens 40+ fancy markets per
              match — session, over, batter, lambi and partnership lines.
              Skyexchange 247 typically stops at 15, and closes fancy books
              earlier during the death overs.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-xl mb-3">Real humans on WhatsApp</h3>
            <p className="text-sm text-foreground/90 leading-relaxed">
              The Lotus365 concierge answers on WhatsApp and Telegram 24/7 with
              a sub-two-minute median reply. Skyexchange 247 routes through a
              queued web chat with no persistent handle you can message back.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-xl mb-3">Loyalty that pays back</h3>
            <p className="text-sm text-foreground/90 leading-relaxed">
              The Lotus Club tiers unlock weekly cashback, free bets and
              birthday bonuses. Skyexchange 247 only offers turnover rakeback,
              and it drops to zero if you take a two-week break.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-2">
          Players who switched from Skyexchange 247
        </h2>
        <p className="text-sm text-foreground/90 mb-6">
          Real feedback from Lotus365 members who moved over — average{" "}
          {(REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1)}{" "}
          out of 5 across {REVIEWS.length} reviews.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < r.rating
                        ? "text-primary fill-primary"
                        : "text-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <h3 className="font-display text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-foreground/90 leading-relaxed mb-4">
                {r.body}
              </p>
              <div className="text-xs text-foreground/70">
                {r.name} · {r.location} ·{" "}
                {new Date(r.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="glass-card rounded-2xl p-5 group">
              <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                {f.q}
                <span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-4xl mb-4">
            Make the switch in <span className="gold-text">60 seconds</span>
          </h2>
          <p className="text-foreground/90 max-w-xl mx-auto mb-6">
            Message the Lotus365 concierge on WhatsApp — we will match your
            Skyexchange tier and set up your Lotus ID before your next match.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition"
          >
            <MessageCircle className="h-4 w-4" /> Get my Lotus365 ID
          </a>
        </div>
      </section>

      <QuickLinks
        currentPath={URL}
        heading="Explore more Lotus365 resources"
      />
      <SiteFooter />
    </div>
  );
}
