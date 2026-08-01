import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { CheckCircle2, XCircle, Trophy, Zap, ShieldCheck, Wallet, MessageCircle, Star } from "lucide-react";

export const Route = createFileRoute("/cricbet99-vs-lotus365")({
  head: () => ({
    meta: [
      { title: "Cricbet99 vs Lotus 365 (2026): Odds, Payouts & Verdict" },
      { name: "description", content: "Cricbet99 vs Lotus 365 compared on IPL odds, UPI payout speed, casino depth, bonuses and 24/7 support — pick the right cricket ID for India in 2026." },
      { name: "keywords", content: "cricbet99 vs lotus365, lotus365 vs cricbet99, best cricket betting id india, cricbet99 review, lotus365 review, ipl betting id, upi withdrawal betting site, online cricket id 2026" },
      { property: "og:title", content: "Cricbet99 vs Lotus 365 (2026) — Honest Side-by-Side" },
      { property: "og:description", content: "Which ID pays faster, offers sharper IPL odds and better support? Full 2026 comparison of Cricbet99 vs Lotus 365 for Indian bettors." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cricbet99-vs-lotus365" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cricbet99-vs-lotus365" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "/compare" },
            { "@type": "ListItem", position: 3, name: "Cricbet99 vs Lotus 365", item: "/cricbet99-vs-lotus365" },
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
          dateModified: "2026-07-27",
        }),
      },
    ],
  }),
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
  { q: "Which pays out faster, Cricbet99 or Lotus 365?", a: "Cricbet99 clears UPI withdrawals in a few minutes around the clock. Lotus 365 typically settles in a few hours to same-day depending on your bank." },
  { q: "How do I get a Cricbet99 ID in 2026?", a: "Message the Cricbet99 WhatsApp — the team verifies your basic details and activates your ID in about 60 seconds. No email loops, no waiting queues." },
  { q: "Is Lotus 365 safe to use in India?", a: "It's a functional platform, but withdrawal delays and heavier KYC are the usual complaints. For a cricket-first Indian bettor, Cricbet99 remains the safer default this year." },
  { q: "Can I use both Cricbet99 and Lotus 365?", a: "Yes — many bettors line-shop across IDs. But for daily play, one primary ID with faster payouts and sharper odds (Cricbet99) usually wins on ROI." },
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
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
          body="Both IDs accept UPI, IMPS and net banking. The gap shows up on withdrawals. Cricbet99 clears UPI cashouts in minutes, 24/7, without daily-window restrictions. Lotus 365 users commonly report a few hours to same-day settlements, and occasional delays during festive weekends. If instant payouts matter — especially on live IPL swings — Cricbet99 is the practical winner."
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

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Cricbet99 vs Lotus 365 — FAQ</h2>
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
              Cricbet99 {l.label}
            </Link>
          ))}
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
