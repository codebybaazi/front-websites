import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { CheckCircle2, XCircle, Trophy, Zap, ShieldCheck, Wallet, MessageCircle, Star } from "lucide-react";

export const Route = createFileRoute("/cricbet99-vs-laser247")({
  head: () => ({
    meta: [
      { title: "Comparison: Laser247 (2026): Odds, Payouts & Verdict" },
      { name: "description", content: "Compare Comparison: Laser247 on IPL odds, withdrawal speed, market depth, bonuses and 24/7 support. Find the best cricket betting ID in India for 2026." },
      { name: "keywords", content: "cricbet99 vs laser247, laser247 vs cricbet99, laser247 login, cricbet99 id, best cricket id india, online betting id 2026, ipl betting id, laser247 withdrawal" },
      { property: "og:title", content: "Comparison: Laser247 (2026) — Side-by-Side Comparison" },
      { property: "og:description", content: "Which ID offers faster payouts and sharper cricket odds? Full 2026 comparison of Comparison: Laser247 for serious Indian bettors." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/cricbet99-vs-laser247" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricbet99-vs-laser247" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://cricbet99.co.in/" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://cricbet99.co.in/all-links" },
            { "@type": "ListItem", position: 3, name: "Comparison: Laser247", item: "https://cricbet99.co.in/cricbet99-vs-laser247" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is Cricbet99 better than Laser247 for cricket betting?", 
              acceptedAnswer: { "@type": "Answer", text: "Yes, in 2026 Cricbet99 leads on technical infrastructure. While Laser247 is a popular choice, Cricbet99 offers more reliable 24/7 automated UPI withdrawals and deeper liquidity on IPL fancy markets." } },
            { "@type": "Question", name: "How long does Laser247 take for withdrawals vs Cricbet99?", 
              acceptedAnswer: { "@type": "Answer", text: "Laser247 typically clears withdrawals in 1-4 hours depending on traffic. Cricbet99 uses a next-gen automated gateway that completes most UPI transfers in under 5 minutes, even during peak match times." } },
            { "@type": "Question", name: "Does Cricbet99 have better IPL odds than Laser247?", 
              acceptedAnswer: { "@type": "Answer", text: "Cricbet99 consistently provides professional exchange-style odds with tighter spreads. For active bettors, this often means 2-5% higher returns on winning bets compared to traditional bookmaker lines." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Comparison: Laser247 — Full 2026 Comparison Guide",
          description: "Which cricket ID offers faster payouts and sharper odds? Detailed side-by-side comparison of Cricbet99 and Laser247 for Indian players.",
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
  { k: "Withdrawal Speed", a: "Instant (under 5 mins) 24/7", b: "1 to 4 hours (avg)" },
  { k: "Cricket Liquidity", a: "Highest in India (Exchange-grade)", b: "High (Traditional lines)" },
  { k: "Signup Method", a: "WhatsApp Verified (60 sec)", b: "Agent or Website Form" },
  { k: "IPL Market Variety", a: "Ball-by-ball, Session, Lambi", b: "Match winner + Basic Fancy" },
  { k: "Customer Support", a: "24/7 Human WhatsApp Help", b: "Support Ticket / Slow Chat" },
  { k: "Welcome Bonus", a: "Up to ₹10,000 WhatsApp Special", b: "Standard Percentage Match" },
  { k: "Mobile App", a: "Ultra-light Android APK (12MB)", b: "Standard APK (45MB)" },
];

const scorecard = [
  { label: "Payout Efficiency", icon: Zap, cric: 9.9, other: 8.2 },
  { label: "Cricket Odds Sharpness", icon: Trophy, cric: 9.8, other: 8.9 },
  { label: "Platform Stability", icon: ShieldCheck, cric: 9.7, other: 8.6 },
  { label: "Betting Markets", icon: Wallet, cric: 9.5, other: 9.0 },
  { label: "Active Support", icon: MessageCircle, cric: 9.8, other: 7.8 },
];

const cricPros = [
  "Lightning-fast 24/7 UPI withdrawals",
  "Superior exchange-style betting interface",
  "Direct human support via WhatsApp/Telegram",
  "High-liquidity IPL markets for professional bettors",
  "Zero-lag live casino streams",
];
const cricCons = ["Premium VIP desks require higher minimum turnover"];

const otherPros = [
  "Well-established brand name",
  "Good variety of sports including Football",
  "Stable legacy platform",
];
const otherCons = [
  "Occasional delays in payout processing",
  "Support response time can lag during big events",
  "UI feels slightly dated compared to modern exchanges",
  "Less flexible fancy market options",
];

const faqs = [
  { q: "Why is Cricbet99 considered better than Laser247 in 2026?", a: "Cricbet99 has invested heavily in automation. While Laser247 still relies on manual verification for many tasks, Cricbet99 uses automated APIs for instant deposits and withdrawals, making it more efficient for fast-paced betting." },
  { q: "Can I use the same UPI ID on both platforms?", a: "Yes, both support standard UPI, but Cricbet99's gateway is optimized for higher success rates and faster settlements." },
  { q: "Is Laser247 safe to use?", a: "Laser247 is a long-standing platform and is generally considered safe, but Cricbet99 offers more direct transparency through its official human-led WhatsApp channels." },
  { q: "How do I switch my ID from Laser247 to Cricbet99?", a: "Simply message our WhatsApp. Our team can set up your new Cricbet99 ID in under 60 seconds so you can start enjoying better odds immediately." },
];

function Compare() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Comparison Guide"
        title={<>Comparison: Laser247 — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Ultimate 2026 Analysis</span></>}
        subtitle="We compare Comparison: Laser247 on the metrics that define your betting experience. From withdrawal speed to IPL market depth, see why Cricbet99 is India's leading choice for 2026."
      />

      {/* Verdict Section */}
      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="rounded-2xl border border-primary/25 bg-[oklch(0.11_0.02_260/0.6)] p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-accent">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Verdict · August 2026</span>
            <span className="flex items-center gap-1 text-primary"><Star className="h-3.5 w-3.5" /> 4.9 / 5 Rating</span>
          </div>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
            Cricbet99 dominates on technical performance and payout speed.
          </h2>
          <p className="mt-3 text-foreground/75 leading-relaxed">
            While Laser247 remains a reliable legacy platform, Cricbet99 has set a new standard for Indian betting in 2026. With automated instant withdrawals and professional-grade exchange liquidity, it provides a significantly smoother experience for both casual and high-stakes cricket bettors.
          </p>
        </div>
      </section>

      {/* Scorecard */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl font-black text-foreground sm:text-2xl">Head-to-head scorecard</h2>
        <p className="mt-1 text-sm text-foreground/70">Based on verified user feedback and live platform performance metrics.</p>
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
                  <ScoreBar name="Laser247" value={s.other} tone="muted" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-5xl px-6 pb-8">
        <h2 className="mb-4 text-xl font-black text-foreground sm:text-2xl">Feature Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-primary/20">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-primary/10 text-xs uppercase tracking-widest text-primary">
              <tr>
                <th className="px-5 py-4">Metric</th>
                <th className="px-5 py-4">Cricbet99</th>
                <th className="px-5 py-4">Laser247</th>
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
          <ProsCons title="Laser247 Pros & Cons" pros={otherPros} cons={otherCons} tone="muted" />
        </div>
      </section>

      {/* SEO Articles */}
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-8">
        <Article
          h="IPL Payouts: Why Choose Us Leads Laser247"
          body="During the high-pressure IPL season, withdrawal queues on platforms like Laser247 can stretch as thousands of players cash out simultaneously. Cricbet99 uses a load-balanced automated UPI payout system that processes transactions in parallel. This ensures that your winnings hit your bank account in minutes, not hours, regardless of match-day traffic."
        />
        <Article
          h="Exchange Odds vs Bookmaker Lines"
          body="Laser247 operates primarily on a traditional bookmaker model. Cricbet99 provides an exchange-style interface which allows for back and lay betting. This transparency leads to better odds for the user, as you are often betting against other players rather than the house's margin. In our testing, Cricbet99's cricket odds were consistently tighter than those on Laser247."
        />
        <Article
          h="Customer Support: WhatsApp vs Support Tickets"
          body="Reliability is key when dealing with online IDs. Cricbet99 provides direct, human-led support via WhatsApp, ensuring you get answers in real-time. Laser247's support system can sometimes feel impersonal and slower, especially when dealing with complex account or payout queries."
        />
        <Article
          h="User Interface and Mobile Experience"
          body="The Cricbet99 APK is optimized for the Indian mobile landscape—it's lightweight, fast, and uses minimal data. While Laser247's app is functional, it can feel resource-heavy on older Android devices. For players who bet on the move, the speed and responsiveness of Cricbet99 provide a clear advantage."
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
        sub="Get your new ID in 60 seconds and experience the future of Indian sports betting." 
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
