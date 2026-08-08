import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { CheckCircle2, XCircle, Trophy, Zap, ShieldCheck, Wallet, MessageCircle, Star } from "lucide-react";

export const Route = createFileRoute("/cricbet99-vs-skyexchange247")({
  head: () => ({
    meta: [
      { title: "Cricbet99 vs SkyExchange 247 (2026): Odds, Payouts, Verdict" },
      { name: "description", content: "Cricbet99 vs SkyExchange 247 compared on exchange odds, UPI payout speed, casino depth, bonuses and 24/7 support — pick the right cricket ID for India in 2026." },
      { name: "keywords", content: "cricbet99 vs skyexchange247, skyexchange 247 vs cricbet99, best exchange betting id india, cricket exchange id, sky exchange review, cricbet99 review, ipl exchange id, upi withdrawal betting" },
      { property: "og:title", content: "Cricbet99 vs SkyExchange 247 (2026) — Honest Side-by-Side" },
      { property: "og:description", content: "Which cricket exchange pays faster, prices sharper and supports better? Full 2026 comparison of Cricbet99 vs SkyExchange 247 for Indian bettors." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cricbet99-vs-skyexchange247" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cricbet99-vs-skyexchange247" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "/compare" },
            { "@type": "ListItem", position: 3, name: "Cricbet99 vs SkyExchange 247", item: "/cricbet99-vs-skyexchange247" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is Cricbet99 better than SkyExchange 247 for cricket betting?",
              acceptedAnswer: { "@type": "Answer", text: "For most Indian bettors, yes — Cricbet99 matches SkyExchange 247 on exchange depth for back/lay, fancy and session markets, but wins on onboarding speed, UPI payout time and human 24/7 WhatsApp support." } },
            { "@type": "Question", name: "Which pays out faster, Cricbet99 or SkyExchange 247?",
              acceptedAnswer: { "@type": "Answer", text: "Cricbet99 clears UPI withdrawals in minutes, 24/7. SkyExchange 247 typically settles UPI within 30–90 minutes depending on your bank and time of day." } },
            { "@type": "Question", name: "How do I get a Cricbet99 ID?",
              acceptedAnswer: { "@type": "Answer", text: "Send a message to Cricbet99 on WhatsApp — the team verifies your details and activates your ID in about 60 seconds. No forms, no email loops." } },
            { "@type": "Question", name: "Is SkyExchange 247 safe to use in India?",
              acceptedAnswer: { "@type": "Answer", text: "SkyExchange 247 is an established exchange brand. It's functional, but slower onboarding and payout windows make Cricbet99 the smoother default for cricket-first Indian bettors in 2026." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cricbet99 vs SkyExchange 247 — Honest 2026 Comparison",
          description: "Which cricket exchange pays faster, prices sharper and supports better? Full 2026 comparison of Cricbet99 vs SkyExchange 247 for Indian bettors.",
          author: { "@type": "Organization", name: "Cricbet99" },
          publisher: { "@type": "Organization", name: "Cricbet99" },
          datePublished: "2026-01-15",
          dateModified: "2026-07-27",
        }),
      },
    ],
  }),
  component: Compare,
});

const rows = [
  { k: "Onboarding", a: "60-sec WhatsApp signup", b: "Web signup + agent verification" },
  { k: "Cricket exchange", a: "Back/lay + fancy + session", b: "Back/lay + fancy" },
  { k: "Football & tennis", a: "EPL, UCL, Grand Slams live", b: "Major leagues covered" },
  { k: "Casino floor", a: "500+ games, 100+ live tables", b: "400+ games" },
  { k: "UPI deposit", a: "Instant, all UPI apps", b: "Instant" },
  { k: "Withdrawals", a: "UPI in minutes", b: "UPI within 30–90 min" },
  { k: "Support", a: "24/7 WhatsApp + Telegram + phone", b: "24/7 chat" },
  { k: "Welcome bonus", a: "Personalised on first deposit", b: "Fixed % bonus" },
  { k: "Mobile", a: "Lightweight APK + web", b: "Web + APK" },
];

const scorecard = [
  { label: "Exchange odds", icon: Trophy, cric: 9.5, other: 9.1 },
  { label: "Payout speed", icon: Zap, cric: 9.8, other: 8.2 },
  { label: "Trust & KYC", icon: ShieldCheck, cric: 9.5, other: 8.7 },
  { label: "Casino depth", icon: Wallet, cric: 9.3, other: 8.4 },
  { label: "Support quality", icon: MessageCircle, cric: 9.7, other: 8.3 },
];

const cricPros = [
  "UPI withdrawals in minutes, 24/7 — no daily windows",
  "Back/lay + fancy + session markets with real exchange depth",
  "60-second WhatsApp onboarding with a human agent",
  "500+ live casino games including Teen Patti & Andar Bahar",
  "Personalised welcome bonus on your first deposit",
];
const cricCons = ["Invite-only VIP desk for high-stakes players"];

const otherPros = [
  "Established exchange brand in the Indian market",
  "Solid back/lay depth on marquee IPL and international games",
  "Clean web UI for desktop bettors",
];
const otherCons = [
  "UPI withdrawals commonly take 30–90 minutes",
  "Slower agent-based signup versus WhatsApp onboarding",
  "Support routes through chat only during peak hours",
  "Thinner session/fancy depth on smaller cricket leagues",
];

const faqs = [
  { q: "Is Cricbet99 better than SkyExchange 247 for IPL?", a: "For most Indian bettors, yes. Cricbet99 matches SkyExchange 247's exchange depth on IPL and adds sharper session and fancy books, faster UPI payouts, and 24/7 human support on WhatsApp." },
  { q: "Which pays out faster, Cricbet99 or SkyExchange 247?", a: "Cricbet99 clears UPI withdrawals in minutes around the clock. SkyExchange 247 typically settles UPI in 30–90 minutes depending on your bank." },
  { q: "How do I open a Cricbet99 exchange ID?", a: "Message the Cricbet99 WhatsApp — the team activates your exchange ID in about 60 seconds with a one-line KYC. No forms, no waiting queues." },
  { q: "Is SkyExchange 247 safe to use in India?", a: "SkyExchange 247 is a functional, well-known exchange. It's safe for casual play, but Cricbet99 remains the smoother default for cricket-first Indian bettors in 2026." },
  { q: "Can I use both Cricbet99 and SkyExchange 247?", a: "Yes, many exchange bettors line-shop across IDs. For daily grinding though, one primary ID with faster payouts and better support (Cricbet99) usually wins on ROI." },
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Comparison"
        title={<>Cricbet99 vs SkyExchange 247 — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>compared honestly.</span></>}
        subtitle="A no-fluff 2026 breakdown of Cricbet99 vs SkyExchange 247 on exchange depth, UPI payout speed, casino floor, bonuses and support — so you pick the right cricket exchange ID for your play."
      />

      {/* TL;DR verdict */}
      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="rounded-2xl border border-primary/25 bg-[oklch(0.11_0.02_260/0.6)] p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-accent">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Verdict · July 2026</span>
            <span className="flex items-center gap-1 text-primary"><Star className="h-3.5 w-3.5" /> 4.9 / 5 rated by Indian bettors</span>
          </div>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
            Cricbet99 wins on payouts, onboarding &amp; support — SkyExchange 247 stays a strong exchange runner-up.
          </h2>
          <p className="mt-3 text-foreground/75">
            If you want an exchange ID with minute-level UPI payouts, one-line WhatsApp KYC and a real human on support 24/7, Cricbet99 is the safer 2026 default. SkyExchange 247 still holds up if you prefer a familiar desktop-first exchange UI.
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
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></span>
                  {s.label}
                </div>
                <div className="mt-3 space-y-2">
                  <ScoreBar name="Cricbet99" value={s.cric} tone="gold" />
                  <ScoreBar name="SkyExchange 247" value={s.other} tone="muted" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full table */}
      <section className="mx-auto max-w-5xl px-6 pb-8">
        <h2 className="mb-4 text-xl font-black text-foreground sm:text-2xl">Full feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-primary/20">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-primary/10 text-xs uppercase tracking-widest text-primary">
              <tr>
                <th className="px-5 py-4">Feature</th>
                <th className="px-5 py-4">Cricbet99</th>
                <th className="px-5 py-4">SkyExchange 247</th>
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
          <ProsCons title="SkyExchange 247" pros={otherPros} cons={otherCons} tone="muted" />
        </div>
      </section>

      {/* Long-form content */}
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-8">
        <Article
          h="Cricket exchange depth: Cricbet99 vs SkyExchange 247"
          body="Both IDs run a proper back/lay exchange with fancy markets on IPL, T20 leagues and international cricket. Cricbet99 adds sharper session lines and deeper lambi rates on smaller series where SkyExchange 247's book thins out. On marquee IPL games, prices are close — but on side markets, Cricbet99 typically holds tighter spreads."
        />
        <Article
          h="UPI deposits, withdrawals &amp; payout speed"
          body="Deposits are instant on both. The gap is withdrawals. Cricbet99 clears UPI cashouts in minutes, 24/7, with no daily window restrictions. SkyExchange 247 typically pays within 30–90 minutes depending on the bank and time of day. If instant payouts matter on live IPL swings, Cricbet99 is the practical winner."
        />
        <Article
          h="Onboarding, KYC &amp; account safety"
          body="Cricbet99 activates an exchange ID over WhatsApp in about 60 seconds with a one-line KYC — no email loops, no repeated document uploads. SkyExchange 247 uses a web signup with agent verification, which adds a few extra steps. Both apply anti-fraud checks, but Cricbet99's human-verified WhatsApp flow is easier to recover if you lose access."
        />
        <Article
          h="Casino floor, live dealers &amp; slots"
          body="SkyExchange 247 lists 400+ games. Cricbet99 pushes past 500+, including 100+ live dealer tables covering Teen Patti, Andar Bahar, Roulette, Baccarat and Dragon Tiger. For Indian card games with sharp side-bet payouts, Cricbet99 is the deeper product."
        />
        <Article
          h="Bonuses, referrals &amp; VIP tiers"
          body="SkyExchange 247 runs fixed-percentage welcome matches. Cricbet99 personalises your first-deposit boost on WhatsApp — a ₹5,000 deposit can unlock better bonus terms than a standard headline %. Cricbet99's agent tier pays lifetime commission, which suits community bettors."
        />
        <Article
          h="24/7 support quality"
          body="Cricbet99 puts a real human on WhatsApp, Telegram and phone, 24/7, with sub-2-minute median response times. SkyExchange 247 relies on 24/7 web chat, which can slow during peak IPL evenings. When a deposit needs fixing mid-match, response speed decides the whole day."
        />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Cricbet99 vs SkyExchange 247 — FAQ</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-primary/20 bg-background/60 p-4 open:border-primary/40">
              <summary className="cursor-pointer list-none text-sm font-bold text-foreground marker:hidden">
                <span className="flex items-center justify-between gap-3">
                  {f.q}
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
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Compare Cricbet99 with more IDs</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { to: "/cricbet99-vs-lotus365", label: "vs Lotus 365" },
            { to: "/cricbet99-vs-11xplay", label: "vs 11xPlay" },
            { to: "/cricbet99-vs-reddybook", label: "vs Reddy Book" },
            { to: "/cricbet99-vs-laser247", label: "vs Laser 247" },
            { to: "/cricbet99-vs-gold365", label: "vs Gold 365" },
            { to: "/cricbet99-vs-fairdeal", label: "vs Fairdeal" },
            { to: "/cricbet99-vs-mahavir-book", label: "vs Mahavir Book" },
            { to: "/cricbet99-vs-diamond-exchange", label: "vs Diamond Exch" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/15">
              Cricbet99 {l.label}
            </Link>
          ))}
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
