import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { CheckCircle2, XCircle, Trophy, Zap, ShieldCheck, Wallet, MessageCircle, Star } from "lucide-react";

export const Route = createFileRoute("/cricbet99-vs-mahavir-book")({
  head: () => ({
    meta: [
      { title: "Comparison: Mahavir Book (2026): Payout Speed & Odds Review" },
      { name: "description", content: "Compare Comparison: Mahavir Book for Indian betting. We analyze withdrawal times, cricket exchange depth, bonus offers, and 24/7 WhatsApp support quality." },
      { name: "keywords", content: "cricbet99 vs mahavir book, mahavir book review, best cricket id india, mahavir book withdrawal time, cricbet99 payouts, online cricket exchange id" },
      { property: "og:title", content: "Comparison: Mahavir Book (2026) — Which Betting ID is Better?" },
      { property: "og:description", content: "Side-by-side comparison of Comparison: Mahavir Book. From UPI payout speed to live exchange markets, find the best ID for your cricket bets." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/cricbet99-vs-mahavir-book" },
      { name: "twitter:card", content: "summary_large_image" },
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
            { "@type": "ListItem", position: 3, name: "Comparison: Mahavir Book", item: "https://cricbet99.co.in/cricbet99-vs-mahavir-book" },
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
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Comparison: Mahavir Book (2026): Payout Speed & Odds Review",
          description: "Compare Comparison: Mahavir Book for Indian betting. We analyze withdrawal times, cricket exchange depth, bonus offers, and 24/7 WhatsApp support quality.",
          author: { "@type": "Organization", name: "Cricbet99" },
          publisher: { "@type": "Organization", name: "Cricbet99" },
          datePublished: "2026-07-31",
          dateModified: "2026-08-01",
        }),
      },
    ],
  }),
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
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Expert Comparison"
        title={<>Comparison: Mahavir Book — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Battle for Payouts.</span></>}
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
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Comparison FAQ</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-primary/20 bg-background/60 p-4 open:border-primary/40">
              <summary className="cursor-pointer list-none text-sm font-bold text-foreground">
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
