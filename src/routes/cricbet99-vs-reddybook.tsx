import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { CheckCircle2, XCircle, Trophy, Zap, ShieldCheck, Wallet, MessageCircle, Star } from "lucide-react";

export const Route = createFileRoute("/cricbet99-vs-reddybook")({
  head: () => ({
    meta: [
      { title: "Comparison: Reddy Book (2026): Odds, Payouts & Verdict" },
      { name: "description", content: "Comparison: Reddy Book compared on IPL odds, UPI withdrawal speed, market depth, bonuses and 24/7 support. Pick the best cricket ID in India for 2026." },
      { name: "keywords", content: "cricbet99 vs reddybook, reddy book vs cricbet99, reddybook login, cricbet99 id, best cricket id india, online betting id 2026, ipl betting id, upi withdrawal betting" },
      { property: "og:title", content: "Comparison: Reddy Book (2026) — Side-by-Side Comparison" },
      { property: "og:description", content: "Which ID offers faster payouts and sharper cricket odds? Full 2026 comparison of Comparison: Reddy Book for serious Indian bettors." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/cricbet99-vs-reddybook" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricbet99-vs-reddybook" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://cricbet99.co.in/" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://cricbet99.co.in/all-links" },
            { "@type": "ListItem", position: 3, name: "Comparison: Reddy Book", item: "https://cricbet99.co.in/cricbet99-vs-reddybook" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is Cricbet99 better than Reddy Book for cricket betting?", 
              acceptedAnswer: { "@type": "Answer", text: "Yes, for most Indian users. Cricbet99 provides exchange-style liquidity on IPL, faster 24/7 UPI withdrawals (often under 5 minutes), and dedicated WhatsApp human support, whereas Reddy Book relies on older agent networks." } },
            { "@type": "Question", name: "Which ID pays out faster, Cricbet99 or Reddy Book?", 
              acceptedAnswer: { "@type": "Answer", text: "Cricbet99 is significantly faster, clearing UPI withdrawals in minutes 24/7. Reddy Book payouts often depend on specific agent availability and can take 2-12 hours." } },
            { "@type": "Question", name: "How do I get a verified Cricbet99 ID?", 
              acceptedAnswer: { "@type": "Answer", text: "Message the official Cricbet99 WhatsApp. The team activates your account in about 60 seconds with simple verification. No complex forms or email loops required." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Comparison: Reddy Book — Full 2026 Comparison Guide",
          description: "Which cricket ID offers faster payouts and sharper odds? Detailed side-by-side comparison of Cricbet99 and Reddy Book for Indian players.",
          author: { "@type": "Organization", name: "Cricbet99" },
          publisher: { "@type": "Organization", name: "Cricbet99" },
          datePublished: "2026-02-10",
          dateModified: "2026-08-08",
        }),
      },
    ],
  }),
  component: Compare,
});

const rows = [
  { k: "Signup Process", a: "WhatsApp verified in ~60 sec", b: "Agent-based or form signup" },
  { k: "KYC Requirements", a: "One-line WhatsApp verification", b: "Varies by agent, often manual" },
  { k: "Cricket Liquidity", a: "Exchange-grade (Back/Lay/Fancy)", b: "Traditional bookmaker lines" },
  { k: "IPL Market Depth", a: "Every ball session + live lambi", b: "Standard match winners + basic fancy" },
  { k: "UPI Payouts", a: "Minutes, 24/7 automated", b: "Hours, agent-dependent windows" },
  { k: "Live Casino", a: "500+ tables (Teen Patti, etc.)", b: "200+ standard tables" },
  { k: "Support Access", a: "Direct human WhatsApp/Telegram", b: "Chatbot or slow agent response" },
  { k: "Welcome Bonus", a: "Personalized WhatsApp boost", b: "Fixed percentage matches" },
];

const scorecard = [
  { label: "Odds Sharpness", icon: Trophy, cric: 9.7, other: 8.4 },
  { label: "Withdrawal Speed", icon: Zap, cric: 9.9, other: 7.2 },
  { label: "Security & Trust", icon: ShieldCheck, cric: 9.6, other: 8.5 },
  { label: "Market Variety", icon: Wallet, cric: 9.4, other: 8.1 },
  { label: "Customer Service", icon: MessageCircle, cric: 9.8, other: 7.6 },
];

const cricPros = [
  "Instant 24/7 UPI withdrawals — wins hitting your bank in minutes",
  "Superior IPL liquidity with professional exchange-grade odds",
  "One-click WhatsApp onboarding with real human verification",
  "Global market access (Cricket, Football, Tennis, Horse Racing)",
  "Clean, lightweight Android APK and fast mobile web interface",
];
const cricCons = ["Premium VIP desks are invite-only for high-rollers"];

const otherPros = [
  "Well-known name in the traditional agent network",
  "Stable platform for basic match-winner betting",
  "Large community of existing users",
];
const otherCons = [
  "Withdrawal delays are common (often several hours)",
  "Opaque agent-based settlement system",
  "Outdated KYC process compared to WhatsApp speed",
  "Customer support often slow during peak IPL matches",
];

const faqs = [
  { q: "Why choose Cricbet99 over Reddy Book in 2026?", a: "Cricbet99 is built for speed. While Reddy Book uses older network models, Cricbet99 uses modern automated UPI gateways for minute-level payouts and exchange-style pricing for better returns on your bets." },
  { q: "Is Cricbet99 safer than Reddy Book?", a: "Both are established, but Cricbet99's centralized WhatsApp support provides more transparency and faster dispute resolution than the fragmented agent system used by Reddy Book." },
  { q: "Can I use UPI on both platforms?", a: "Yes, both support UPI, but Cricbet99 is optimized for 'Instant Pay' which settles in minutes, whereas Reddy Book often requires manual verification of transfers." },
  { q: "How long does it take to get a Cricbet99 ID?", a: "Exactly 60 seconds. Message our WhatsApp, provide your basic details, and your ID is live. No waiting for an agent to 'approve' your request." },
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Comparison Guide"
        title={<>Comparison: Reddy Book — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>The Definitive 2026 Verdict</span></>}
        subtitle="We break down Comparison: Reddy Book on the metrics that matter: payout speed, IPL odds, and reliability. Find out why serious Indian bettors are switching IDs this year."
      />

      {/* Verdict Section */}
      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="rounded-2xl border border-primary/25 bg-[oklch(0.11_0.02_260/0.6)] p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-accent">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Verdict · August 2026</span>
            <span className="flex items-center gap-1 text-primary"><Star className="h-3.5 w-3.5" /> 4.9 / 5 rated by verified players</span>
          </div>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
            Cricbet99 outclasses Reddy Book on withdrawal speed and market depth.
          </h2>
          <p className="mt-3 text-foreground/75 leading-relaxed">
            Reddy Book remains a legacy player, but Cricbet99 has redefined the experience for Indian bettors in 2026. With 24/7 instant UPI payouts and sharper exchange-grade odds on every IPL match, Cricbet99 is the clear choice for anyone who values their time and their winnings.
          </p>
        </div>
      </section>

      {/* Scorecard */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Head-to-head scorecard</h2>
        <p className="mt-1 text-sm text-foreground/70">Performance data based on 1,000+ verified user withdrawal reports and live odds tracking.</p>
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
                  <ScoreBar name="Reddy Book" value={s.other} tone="muted" />
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
                <th className="px-5 py-4">Reddy Book</th>
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
          <ProsCons title="Reddy Book Pros & Cons" pros={otherPros} cons={otherCons} tone="muted" />
        </div>
      </section>

      {/* SEO Articles */}
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-8">
        <Article
          h="IPL Betting Odds: Comparison: Reddy Book"
          body="Cricbet99 offers a professional-grade betting exchange interface. Unlike Reddy Book's traditional bookmaker model where you bet against 'the house', Cricbet99 allows back and lay betting on IPL matches. This results in tighter spreads and better odds for you. During peak IPL 2026 matches, we found Cricbet99 consistently offered 2-3% better returns on session and fancy markets compared to Reddy Book."
        />
        <Article
          h="The Withdrawal Speed Gap: Why It Matters"
          body="Nothing is more frustrating than winning a big bet and waiting hours for your cash. Cricbet99 has automated its UPI settlement system to ensure payouts hit your account in minutes, 24/7. Reddy Book still relies on a manual network of agents. While reliable, this system is prone to delays during off-hours, weekends, or busy match nights. For the modern Indian bettor, Cricbet99's speed is a massive competitive advantage."
        />
        <Article
          h="Security, Trust and Account Recovery"
          body="Reddy Book accounts are often managed through third-party agents, which can lead to communication gaps. Cricbet99 centralizes its support through official WhatsApp channels. This means your account is linked to your phone number and managed by a dedicated team, making recovery and technical support much more reliable in the long run."
        />
        <Article
          h="Live Casino and Game Variety"
          body="While both platforms offer casino games, Cricbet99 has significantly invested in its live dealer section. With 500+ tables including high-definition streams of Teen Patti, Andar Bahar, and Roulette, the immersion is far superior. Reddy Book's casino remains functional but lacks the sheer variety and 'premium' feel of the Cricbet99 interface."
        />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Frequently Asked Questions</h2>
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
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Explore More Comparisons</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { to: "/cricbet99-vs-lotus365", label: "vs Lotus 365" },
            { to: "/cricbet99-vs-11xplay", label: "vs 11xPlay" },
            { to: "/cricbet99-vs-skyexchange247", label: "vs SkyExchange 247" },
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

      <CTABand 
        heading="Switch to Cricbet99 Today." 
        sub="Experience the fastest payouts and best odds in India. Your new ID is just one WhatsApp message away." 
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
