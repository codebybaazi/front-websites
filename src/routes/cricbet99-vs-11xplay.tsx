import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { CheckCircle2, XCircle, Trophy, Zap, ShieldCheck, Wallet, MessageCircle, Star } from "lucide-react";
import { getRequestOrigin } from "@/lib/origin.functions";
import shareImage from "@/assets/casino/slots.jpg";

export const Route = createFileRoute("/cricbet99-vs-11xplay")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const cardImage = `${origin}${shareImage}`;
    return {
    meta: [
      { title: "Cricbet99 vs 11xPlay (2026): Odds, Payouts & Verdict" },
      { name: "description", content: "Cricbet99 vs 11xPlay compared on cricket odds, UPI payout speed, casino depth, bonuses and 24/7 support — pick the right cricket ID for India in 2026." },
      { property: "og:title", content: "Cricbet99 vs 11xPlay (2026) — Honest Side-by-Side" },
      { property: "og:description", content: "Which cricket ID pays faster, prices sharper and supports better? Full 2026 comparison of Cricbet99 vs 11xPlay for Indian bettors." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/cricbet99-vs-11xplay" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: cardImage },
      { name: "twitter:image", content: cardImage },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricbet99-vs-11xplay" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://cricbet99.co.in/" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://cricbet99.co.in/all-links" },
            { "@type": "ListItem", position: 3, name: "Cricbet99 vs 11xPlay", item: "https://cricbet99.co.in/cricbet99-vs-11xplay" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is Cricbet99 better than 11xPlay for cricket betting?",
              acceptedAnswer: { "@type": "Answer", text: "For most Indian bettors, yes — Cricbet99 matches 11xPlay on cricket market depth but wins on WhatsApp onboarding, UPI payout speed and 24/7 human support." } },
            { "@type": "Question", name: "Which pays out faster, Cricbet99 or 11xPlay?",
              acceptedAnswer: { "@type": "Answer", text: "Cricbet99's withdrawal desk typically clears UPI requests within a few minutes, any hour of the day. 11xPlay's payout queue usually runs 30–120 minutes depending on your bank and how busy their desk is." } },
            { "@type": "Question", name: "How do I get a Cricbet99 ID?",
              acceptedAnswer: { "@type": "Answer", text: "Message Cricbet99 on WhatsApp — the team verifies your details and activates your ID in about 60 seconds. No forms, no email loops." } },
            { "@type": "Question", name: "Is 11xPlay safe to use in India?",
              acceptedAnswer: { "@type": "Answer", text: "11xPlay is an established betting brand and works fine for casual play, but slower payout windows and heavier onboarding make Cricbet99 the smoother default for cricket-first Indian bettors in 2026." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cricbet99 vs 11xPlay — Honest 2026 Comparison",
          description: "Which cricket ID pays faster, prices sharper and supports better? Full 2026 comparison of Cricbet99 vs 11xPlay for Indian bettors.",
          author: { "@type": "Organization", name: "Cricbet99" },
          publisher: { "@type": "Organization", name: "Cricbet99" },
          datePublished: "2026-01-15",
          dateModified: "2026-07-27",
        }),
      },
    ],
  };
  },
  component: Compare,
});

const rows = [
  { k: "Onboarding", a: "60-sec WhatsApp signup", b: "Web signup + KYC upload" },
  { k: "Cricket markets", a: "Back/lay + fancy + session", b: "Back/lay + fancy" },
  { k: "Football & tennis", a: "EPL, UCL, Grand Slams live", b: "Major leagues covered" },
  { k: "Casino floor", a: "500+ games, 100+ live tables", b: "450+ games" },
  { k: "UPI deposit", a: "Instant, all UPI apps", b: "Instant" },
  { k: "Withdrawals", a: "UPI in minutes", b: "UPI within 30–120 min" },
  { k: "Support", a: "24/7 WhatsApp + Telegram + phone", b: "24/7 chat + email" },
  { k: "Welcome bonus", a: "Personalised on first deposit", b: "Fixed % bonus" },
  { k: "Mobile", a: "Lightweight APK + web", b: "Web + APK" },
];

const scorecard = [
  { label: "Cricket odds", icon: Trophy, cric: 9.6, other: 9.0 },
  { label: "Payout speed", icon: Zap, cric: 9.8, other: 8.1 },
  { label: "Trust & KYC", icon: ShieldCheck, cric: 9.5, other: 8.6 },
  { label: "Casino depth", icon: Wallet, cric: 9.3, other: 8.5 },
  { label: "Support quality", icon: MessageCircle, cric: 9.7, other: 8.2 },
];

const cricPros = [
  "UPI withdrawals in minutes, 24/7 — no daily windows",
  "Back/lay + fancy + session markets with sharp lines",
  "60-second WhatsApp onboarding with a human agent",
  "500+ live casino games including Teen Patti & Andar Bahar",
  "Personalised welcome bonus on your first deposit",
];
const cricCons = ["Invite-only VIP desk for high-stakes players"];

const otherPros = [
  "Well-known betting brand across the Indian market",
  "Solid book on marquee IPL and international games",
  "Clean web UI for desktop bettors",
];
const otherCons = [
  "UPI withdrawals commonly take 30–120 minutes",
  "Heavier web signup with KYC document uploads",
  "Support routes through chat/email during peak hours",
  "Thinner session/fancy depth on smaller cricket leagues",
];

const faqs = [
  { q: "Is Cricbet99 better than 11xPlay for IPL?", a: "For most Indian bettors, yes. Cricbet99 matches 11xPlay's depth on IPL and adds sharper session and fancy markets, faster UPI payouts, and 24/7 human support on WhatsApp." },
  { q: "Which pays out faster, Cricbet99 or 11xPlay?", a: "Cricbet99's withdrawal desk usually clears requests within a few minutes, any hour. 11xPlay's payout queue runs 30–120 minutes depending on your bank and how busy their desk is." },
  { q: "How do I open a Cricbet99 ID?", a: "Message the Cricbet99 WhatsApp — the team activates your ID in about 60 seconds with a one-line KYC. No forms, no waiting queues." },
  { q: "Is 11xPlay safe to use in India?", a: "11xPlay is a functional, well-known brand. It's safe for casual play, but Cricbet99 remains the smoother default for cricket-first Indian bettors in 2026." },
  { q: "Can I use both Cricbet99 and 11xPlay?", a: "Yes, many bettors line-shop across IDs. For daily grinding though, one primary ID with faster payouts and better support (Cricbet99) usually wins on ROI." },
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Comparison"
        title={<>Cricbet99 vs 11xPlay — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>compared honestly.</span></>}
        subtitle="A no-fluff 2026 breakdown of Cricbet99 vs 11xPlay on cricket market depth, UPI payout speed, casino floor, bonuses and support — so you pick the right cricket ID for your play."
      />

      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="rounded-2xl border border-primary/25 bg-[oklch(0.11_0.02_260/0.6)] p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-accent">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Verdict · July 2026</span>
            <span className="flex items-center gap-1 text-primary"><Star className="h-3.5 w-3.5" /> 4.9 / 5 rated by Indian bettors</span>
          </div>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
            Cricbet99 wins on payouts, onboarding &amp; support — 11xPlay stays a solid runner-up.
          </h2>
          <p className="mt-3 text-foreground/75">
            If you want a cricket ID with minute-level UPI payouts, one-line WhatsApp KYC and a real human on support 24/7, Cricbet99 is the safer 2026 default. 11xPlay still holds up if you prefer a familiar desktop-first betting UI.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Head-to-head scorecard</h2>
        <p className="mt-1 text-sm text-foreground/70">Scored out of 10 based on user reports, response times and market depth across 6 months of IPL &amp; international cricket.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {scorecard.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="rounded-xl border border-primary/20 bg-background/60 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></span>
                  {s.label}
                </div>
                <div className="mt-3 space-y-2">
                  <ScoreBar name="Cricbet99" value={s.cric} tone="gold" />
                  <ScoreBar name="11xPlay" value={s.other} tone="muted" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <h2 className="mb-4 text-xl font-black text-foreground sm:text-2xl">Full feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-primary/20">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-primary/10 text-xs uppercase tracking-widest text-primary">
              <tr>
                <th className="px-5 py-4">Feature</th>
                <th className="px-5 py-4">Cricbet99</th>
                <th className="px-5 py-4">11xPlay</th>
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
          <ProsCons title="Cricbet99" pros={cricPros} cons={cricCons} tone="gold" />
          <ProsCons title="11xPlay" pros={otherPros} cons={otherCons} tone="muted" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-6 py-8">
        <Article
          h="Cricket market depth: Cricbet99 vs 11xPlay"
          body="Both IDs cover IPL, T20 leagues and international cricket with back/lay and fancy markets. Cricbet99 adds sharper session lines and deeper lambi rates on smaller series where 11xPlay's book thins out. On marquee IPL games, prices are close — but on side markets, Cricbet99 typically holds tighter spreads."
        />
        <Article
          h="UPI deposits, withdrawals &amp; payout speed"
          body="On the deposit side, both IDs credit UPI instantly. The real difference shows up when you cash out: Cricbet99's withdrawal desk usually clears requests within a few minutes, any hour of the day, with no cutoff windows to plan around. 11xPlay's payout queue typically needs 30 to 120 minutes depending on your bank and how busy their desk is. During a tight run-chase, that gap decides whether you're reinvesting winnings mid-match or waiting it out."
        />
        <Article
          h="Onboarding, KYC &amp; account safety"
          body="Cricbet99 activates a cricket ID over WhatsApp in about 60 seconds with a one-line KYC — no email loops, no repeated document uploads. 11xPlay uses a web signup with KYC document uploads, which adds several extra steps. Both apply anti-fraud checks, but Cricbet99's human-verified WhatsApp flow is easier to recover if you lose access."
        />
        <Article
          h="Casino floor, live dealers &amp; slots"
          body="11xPlay lists 450+ games. Cricbet99 pushes past 500+, including 100+ live dealer tables covering Teen Patti, Andar Bahar, Roulette, Baccarat and Dragon Tiger. For Indian card games with sharp side-bet payouts, Cricbet99 is the deeper product."
        />
        <Article
          h="Bonuses, referrals &amp; VIP tiers"
          body="11xPlay runs fixed-percentage welcome matches. Cricbet99 personalises your first-deposit boost on WhatsApp — a ₹5,000 deposit can unlock better bonus terms than a standard headline %. Cricbet99's agent tier pays lifetime commission, which suits community bettors."
        />
        <Article
          h="24/7 support quality"
          body="Cricbet99 puts a real human on WhatsApp, Telegram and phone, 24/7, with sub-2-minute median response times. 11xPlay relies on chat and email, which can slow during peak IPL evenings. When a deposit needs fixing mid-match, response speed decides the whole day."
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Cricbet99 vs 11xPlay — FAQ</h2>
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

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Compare Cricbet99 with more IDs</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { to: "/cricbet99-vs-lotus365", label: "vs Lotus 365" },
            { to: "/cricbet99-vs-skyexchange247", label: "vs SkyExchange 247" },
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

      <CTABand heading="One WhatsApp message. One verified ID." sub="Message Cricbet99 support and start playing in under 5 minutes." />
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
      <h2 className="text-lg font-black text-foreground sm:text-xl" dangerouslySetInnerHTML={{ __html: h }} />
      <p className="mt-3 text-sm leading-relaxed text-foreground/75">{body}</p>
    </article>
  );
}