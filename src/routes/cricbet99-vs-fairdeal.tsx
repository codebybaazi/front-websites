import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { CheckCircle2, XCircle, Trophy, Zap, ShieldCheck, Wallet, MessageCircle, Star } from "lucide-react";

export const Route = createFileRoute("/cricbet99-vs-fairdeal")({
  head: () => ({
    meta: [
      { title: "Comparison: Fairdeal (2026): Odds, Payouts & Comparison" },
      { name: "description", content: "Compare Comparison: Fairdeal on IPL betting odds, UPI withdrawal speed, market variety and support. Find the best betting ID in India for 2026." },
      { name: "keywords", content: "cricbet99 vs fairdeal, fairdeal login, fairdeal app, cricbet99 id, online betting id india 2026, ipl betting app, best cricket id 2026" },
      { property: "og:title", content: "Comparison: Fairdeal (2026) — Side-by-Side Comparison" },
      { property: "og:description", content: "Which ID offers faster payouts and sharper odds? Full 2026 comparison of Comparison: Fairdeal for serious Indian bettors." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/cricbet99-vs-fairdeal" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricbet99-vs-fairdeal" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "/compare" },
            { "@type": "ListItem", position: 3, name: "Comparison: Fairdeal", item: "/cricbet99-vs-fairdeal" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is Cricbet99 better than Fairdeal for IPL betting?", 
              acceptedAnswer: { "@type": "Answer", text: "Yes, in 2026 Cricbet99 provides superior exchange-style liquidity and significantly faster automated UPI withdrawals (under 5 mins) compared to Fairdeal's manual processing." } },
            { "@type": "Question", name: "How long does Fairdeal take to process withdrawals?", 
              acceptedAnswer: { "@type": "Answer", text: "Fairdeal withdrawals typically take between 3-12 hours depending on their agent availability. Cricbet99 offers 24/7 automated settlements that hit your bank in minutes." } },
            { "@type": "Question", name: "Does Cricbet99 have a mobile app like Fairdeal?", 
              acceptedAnswer: { "@type": "Answer", text: "Yes, Cricbet99 offers a lightweight, high-performance Android APK specifically optimized for fast betting and low data usage, outperforming the Fairdeal mobile interface." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Comparison: Fairdeal — Full 2026 Comparison Guide",
          description: "Detailed side-by-side comparison of Cricbet99 and Fairdeal for Indian players. Analyze odds, speed, and reliability.",
          author: { "@type": "Organization", name: "Cricbet99" },
          publisher: { "@type": "Organization", name: "Cricbet99" },
          datePublished: "2026-08-01",
          dateModified: "2026-08-08",
        }),
      },
    ],
  }),
  component: Compare,
});

const rows = [
  { k: "Withdrawal Speed", a: "Instant (under 5 mins) 24/7", b: "3 to 12 hours (avg)" },
  { k: "Cricket Odds", a: "Professional Exchange-grade", b: "Standard Bookie lines" },
  { k: "Onboarding", a: "WhatsApp (Instant ID)", b: "Agent-led registration" },
  { k: "IPL Markets", a: "Full Session + Advanced Fancy", b: "Standard Match Odds" },
  { k: "Customer Support", a: "24/7 Human WhatsApp Help", b: "Support Email / Slow Chat" },
  { k: "Welcome Bonus", a: "Exclusive ₹10,000 WhatsApp Bonus", b: "Fixed Deposit Match" },
  { k: "App Performance", a: "Ultra-light, No-lag APK", b: "Standard WebView app" },
];

const scorecard = [
  { label: "Withdrawal Automation", icon: Zap, cric: 9.9, other: 7.2 },
  { label: "Odds Sharpness", icon: Trophy, cric: 9.8, other: 8.4 },
  { label: "Trust & Security", icon: ShieldCheck, cric: 9.7, other: 8.8 },
  { label: "Live Market Variety", icon: Wallet, cric: 9.6, other: 8.5 },
  { label: "Support Speed", icon: MessageCircle, cric: 9.8, other: 7.0 },
];

const cricPros = [
  "Industry-leading 24/7 instant UPI withdrawals",
  "Superior professional exchange interface",
  "Dedicated human WhatsApp support team",
  "Best IPL session and fancy odds in India",
  "Premium live casino with HD streams",
];
const cricCons = ["Premium features require verified WhatsApp status"];

const otherPros = [
  "Long-term presence in the market",
  "Reasonable variety of sports",
  "Familiar interface for older players",
];
const otherCons = [
  "Slow payout times during big matches",
  "Manual agent verification leads to delays",
  "Bookmaker margins are higher than exchanges",
  "App can be sluggish on budget phones",
];

const faqs = [
  { q: "Why choose Cricbet99 over Fairdeal?", a: "Cricbet99 is built on modern automation. While Fairdeal relies on older agent-based systems that cause delays, Cricbet99 provides instant settlements and exchange-grade pricing for all cricket matches." },
  { q: "Is Cricbet99 safer than Fairdeal?", a: "Both are established, but Cricbet99's centralized support and direct WhatsApp links offer better security and faster dispute resolution than the fragmented agent model used by Fairdeal." },
  { q: "Can I use UPI for Fairdeal and Cricbet99?", a: "Yes, both support UPI, but Cricbet99's gateway has a much higher success rate and processes transactions significantly faster." },
  { q: "How quickly can I get a Cricbet99 ID?", a: "Your ID is ready in 60 seconds. Just message us on WhatsApp, and our team will activate your account instantly." },
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Comparison Guide"
        title={<>Comparison: Fairdeal — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>The Definitive 2026 Verdict</span></>}
        subtitle="Compare Comparison: Fairdeal on payout speed, IPL odds, and reliability. Find out why modern Indian bettors are leaving legacy IDs behind."
      />

      {/* Verdict Section */}
      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="rounded-2xl border border-primary/25 bg-[oklch(0.11_0.02_260/0.6)] p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-accent">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Verdict · August 2026</span>
            <span className="flex items-center gap-1 text-primary"><Star className="h-3.5 w-3.5" /> Top Rated ID</span>
          </div>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
            Cricbet99 outclasses Fairdeal with speed and transparency.
          </h2>
          <p className="mt-3 text-foreground/75 leading-relaxed">
            Fairdeal has been a stable name, but it lacks the technological edge that Cricbet99 brings to the table in 2026. For players who demand instant payouts and the best possible returns on their IPL bets, Cricbet99's automated ecosystem and exchange model provide a vastly superior experience.
          </p>
        </div>
      </section>

      {/* Scorecard */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Head-to-head scorecard</h2>
        <p className="mt-1 text-sm text-foreground/70">Performance data based on verified user withdrawal logs and live odds monitoring.</p>
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
                  <ScoreBar name="Fairdeal" value={s.other} tone="muted" />
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
                <th className="px-5 py-4">Fairdeal</th>
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
          <ProsCons title="Fairdeal Pros & Cons" pros={otherPros} cons={otherCons} tone="muted" />
        </div>
      </section>

      {/* SEO Articles */}
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-8">
        <Article
          h="Why Choose Us Leads in Payout Automation"
          body="Fairdeal still relies on manual agent networks to verify and release payments, which can take hours. Cricbet99 has integrated a next-generation automated UPI gateway. This means your withdrawal requests are processed by the system immediately, ensuring your funds reach your bank account in minutes, even at 3 AM."
        />
        <Article
          h="Exchange vs Bookmaker: The Odds Gap"
          body="Fairdeal uses traditional bookmaker lines where the margin is built into the odds. Cricbet99 operates an exchange model, allowing users to back and lay. This transparency results in significantly better odds for you, especially in high-volume IPL markets where exchange liquidity ensures you get the best market price."
        />
        <Article
          h="The Importance of WhatsApp Support"
          body="In the world of online IDs, access to help is everything. Cricbet99 centralizes all support through official WhatsApp channels, providing a direct link to a human team. Fairdeal's support is often fragmented across different agents, which can lead to confusion and slow response times during critical match moments."
        />
        <Article
          h="Mobile Experience for the Modern Bettor"
          body="The Cricbet99 APK is specifically engineered for speed and low-latency live betting. Fairdeal's app experience is functional but lacks the optimization for low-end devices and poor network conditions that Cricbet99 provides, making it a better choice for players across all regions of India."
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
            { to: "/cricbet99-vs-reddybook", label: "vs Reddy Book" },
            { to: "/cricbet99-vs-laser247", label: "vs Laser 247" },
            { to: "/cricbet99-vs-gold365", label: "vs Gold 365" },
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
        sub="Your premium ID is ready. Message us on WhatsApp to start winning now." 
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
