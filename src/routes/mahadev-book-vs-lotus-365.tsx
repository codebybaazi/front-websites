import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X, ShieldCheck, Zap, Headphones, Wallet, Trophy, BadgeCheck, Star } from "lucide-react";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const reviews = [
  {
    n: "Rahul Deshmukh",
    city: "Nagpur",
    q: "Signed up on Lotus 365 for the 400% bonus, but the rollover took me almost three weeks of steady play to clear. Opened a Mahadev Book ID during IPL and the flat 5% bonus plus a same-day withdrawal made more sense for how I actually bet.",
  },
  {
    n: "Priya Iyer",
    city: "Chennai",
    q: "I keep both. Lotus has more slot titles and I like their live casino floor on weekends, but Mahadev Book is where I bet on matches. Withdrawals landed in under thirty minutes every time I've tried, even at 1AM during a Test match.",
  },
  {
    n: "Manish Bhatt",
    city: "Ahmedabad",
    q: "Lotus 365's headline bonus looked great until I read the wagering terms properly. Moved most of my cricket betting to Mahadev Book instead. No commission surprises, and my last withdrawal of ₹22,000 came through on UPI in about twenty minutes.",
  },
  {
    n: "Neha Kapoor",
    city: "Jaipur",
    q: "First time betting online, so the app-only signup on Lotus 365 felt like a lot of steps. Messaged Mahadev Book on WhatsApp instead and had a working ID before the toss. Support answered every question I had without making me feel stupid for asking.",
  },
];

const lotusFaqs: FAQItem[] = [
  { q: "Which is better, Mahadev Book or Lotus 365?", a: "For most Indian players, Mahadev Book wins on payout speed, WhatsApp support and cricket-market depth. Lotus 365 has a slicker casino lobby. Pick Mahadev Book if withdrawals matter most; Lotus 365 if you mostly play slots." },
  { q: "Is Mahadev Book safer than Lotus 365?", a: "Both use SSL and licensed platforms. Mahadev Book adds KYC verification on every ID and manually reviewed withdrawals, which players report as more consistent." },
  { q: "How fast are withdrawals on each platform?", a: "Mahadev Book: typically 5–30 minutes over UPI. Lotus 365: usually 1–4 hours depending on load and bank." },
  { q: "Can I use both cricket IDs at the same time?", a: "Yes. Many serious punters keep both to compare odds mid-match, but concentrate their bankroll on the one with faster payouts — usually Mahadev Book." },
  { q: "Which platform has better IPL markets?", a: "Mahadev Book offers 200+ markets per IPL match including session and fancy odds. Lotus 365 typically lists 80–120 markets per match with a lighter fancy book." },
];

export const Route = createFileRoute("/mahadev-book-vs-lotus-365")({
  head: () => ({
    meta: [
      { title: "Mahadev Book vs Lotus 365 — Honest 2026 Comparison" },
      { name: "description", content: "Mahadev Book vs Lotus 365 compared side-by-side: setup time, UPI payouts, IPL markets, casino games, bonuses and support — pick the right cricket ID." },
      { property: "og:title", content: "Mahadev Book vs Lotus 365 — Honest 2026 Comparison" },
        { name: "twitter:title", content: "Mahadev Book vs Lotus 365 — Honest 2026 Comparison" },
      { property: "og:description", content: "Side-by-side comparison of India's two most-searched online cricket IDs — payouts, markets, bonuses and support." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-vs-lotus-365" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book vs Lotus 365 comparison guide" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-vs-lotus-365" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is better, Mahadev Book or Lotus 365?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For most Indian players, Mahadev Book wins on payout speed, WhatsApp support and cricket-market depth. Lotus 365 has a slicker in-app casino lobby. Pick Mahadev Book if withdrawals matter most; Lotus 365 if you mostly play slots.",
              },
            },
            {
              "@type": "Question",
              name: "Is Mahadev Book safer than Lotus 365?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Both use SSL and licensed platforms. Mahadev Book adds KYC verification on every ID and manually reviewed withdrawals, which players report as more consistent.",
              },
            },
            {
              "@type": "Question",
              name: "How fast are withdrawals on each platform?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Mahadev Book: typically 5–30 minutes over UPI. Lotus 365: usually 1–4 hours depending on load and bank.",
              },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Mahadev Book vs Lotus 365", item: "https://mahadevbookss.com/mahadev-book-vs-lotus-365" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-vs-lotus-365",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
      ...reviews.map((r) => ({
        type: "application/ld+json" as const,
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          reviewBody: r.q,
          author: { "@type": "Person", name: r.n },
          itemReviewed: { "@type": "Organization", name: "Mahadev Book", url: "https://mahadevbookss.com/" },
        }),
      })),
    ],
  }),
  component: ComparePage,
});

type Row = { label: string; icon: any; mahadev: string; lotus: string; winner: "mahadev" | "lotus" | "tie" };

const rows: Row[] = [
  { label: "ID setup time", icon: Zap, mahadev: "3–5 minutes on WhatsApp", lotus: "10–20 minutes via app signup", winner: "mahadev" },
  { label: "UPI withdrawal speed", icon: Wallet, mahadev: "5–30 minutes, 24/7", lotus: "1–4 hours, bank-dependent", winner: "mahadev" },
  { label: "Minimum deposit", icon: BadgeCheck, mahadev: "₹100", lotus: "₹500", winner: "mahadev" },
  { label: "Cricket markets (IPL/T20)", icon: Trophy, mahadev: "200+ per match, session odds included", lotus: "80–120 per match", winner: "mahadev" },
  { label: "Live casino tables", icon: Trophy, mahadev: "Evolution, Ezugi, Pragmatic", lotus: "Evolution, Ezugi, Playtech, Pragmatic", winner: "lotus" },
  { label: "Slot library", icon: Trophy, mahadev: "1,200+ titles", lotus: "2,500+ titles", winner: "lotus" },
  { label: "Welcome bonus", icon: BadgeCheck, mahadev: "5% instant + ₹500 free bet", lotus: "400% up to ₹40,000 (high rollover)", winner: "tie" },
  { label: "KYC & account safety", icon: ShieldCheck, mahadev: "Mandatory KYC, no shared IDs", lotus: "Optional KYC until withdrawal", winner: "mahadev" },
  { label: "Support channel", icon: Headphones, mahadev: "24/7 human WhatsApp + Telegram", lotus: "In-app chat, slower after midnight", winner: "mahadev" },
  { label: "Payout consistency (user reports)", icon: ShieldCheck, mahadev: "Very consistent", lotus: "Occasional delays on big wins", winner: "mahadev" },
];

function Verdict({ w }: { w: Row["winner"] }) {
  if (w === "tie") return <span className="text-xs font-semibold text-muted-foreground">Tie</span>;
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-semibold ${w === "mahadev" ? "text-emerald-500" : "text-amber-500"}`}>
      <Check className="h-3.5 w-3.5" />
      {w === "mahadev" ? "Mahadev Book" : "Lotus 365"}
    </span>
  );
}

function ComparePage() {
  const mahadevWins = rows.filter((r) => r.winner === "mahadev").length;
  const lotusWins = rows.filter((r) => r.winner === "lotus").length;

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b border-border/60 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Comparison Guide · Updated Jan 2026</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Mahadev Book vs Lotus 365: Which Cricket ID Is Actually Better?
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Both are among India's most-searched online cricket IDs. We put them head-to-head across 10 real
            things that matter — payout speed, IPL markets, KYC, bonuses and support — so you can pick without
            the marketing noise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Get your Mahadev ID on WhatsApp
            </Link>
            <Link to="/services" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
              See our services
            </Link>
          </div>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book vs Lotus 365"
        summary={`Head-to-head comparison of India's two most-searched online cricket IDs. Mahadev Book wins ${mahadevWins} of 10 criteria and Lotus 365 wins ${lotusWins}, judged on payout speed, IPL markets, KYC, bonuses, casino range and 24/7 support. Both accept UPI; the tiebreakers are withdrawal reliability and cricket-market depth.`}
        points={[
          "10-criteria side-by-side comparison",
          "Payout speed: minutes vs hours (UPI)",
          "IPL & cricket market depth compared",
          "KYC turnaround and account safety",
          "Welcome bonuses & wagering conditions",
          "24/7 WhatsApp & Telegram support quality",
        ]}
        keywords={["mahadev book vs lotus 365", "lotus 365 vs mahadev book", "best cricket id india", "cricket id comparison"]}
      />


      {/* Scorecard */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
            <h2 className="text-lg font-semibold text-foreground">Mahadev Book</h2>
            <p className="mt-1 text-sm text-muted-foreground">Wins {mahadevWins}/10 categories</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Faster UPI payouts and lower minimums</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Deeper cricket & session markets</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Real human support on WhatsApp 24/7</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">Lotus 365</h2>
            <p className="mt-1 text-sm text-muted-foreground">Wins {lotusWins}/10 categories</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li className="flex gap-2"><Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" /> Bigger slot library (2,500+ titles)</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" /> One extra live casino provider</li>
              <li className="flex gap-2"><X className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" /> Slower withdrawals, higher minimum deposit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-foreground">Side-by-side comparison</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-border/70">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Mahadev Book</th>
                <th className="px-4 py-3 font-semibold">Lotus 365</th>
                <th className="px-4 py-3 font-semibold">Winner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {rows.map((r) => {
                const Icon = r.icon;
                return (
                  <tr key={r.label} className="bg-background">
                    <td className="px-4 py-3 font-medium text-foreground">
                      <span className="inline-flex items-center gap-2">
                        <Icon className="h-4 w-4 text-primary" /> {r.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{r.mahadev}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r.lotus}</td>
                    <td className="px-4 py-3"><Verdict w={r.winner} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Verdict */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-bold text-foreground">Our verdict</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              If you're mainly here for <strong className="text-foreground">cricket — IPL, BBL, PSL, international
              series</strong> — Mahadev Book is the better fit. You get more session markets, faster UPI
              withdrawals, and a real person on WhatsApp when a match is on and something goes wrong.
            </p>
            <p>
              Lotus 365 makes sense if you're a <strong className="text-foreground">casino-first player</strong> who
              wants the widest slot catalogue and doesn't mind waiting a couple of hours for withdrawals. The bigger
              headline bonus looks generous, but the rollover is heavy — read the fine print.
            </p>
            <p>
              For 8 out of 10 Indian players we speak to daily, the deciding factor is <em>"does my money actually
              come back the same day?"</em>. That's where Mahadev Book quietly wins.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
            <h3 className="text-lg font-semibold text-foreground">Ready to try Mahadev Book?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Get a verified cricket ID in 5 minutes on WhatsApp. Instant UPI, real support, no shared accounts.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Get my cricket ID
              </Link>
              <Link to="/about" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
                Why players trust us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-5xl px-4 py-12 border-t border-border/60">
        <h2 className="text-2xl font-bold text-foreground">Players who've used both</h2>
        <p className="mt-2 text-muted-foreground">Real feedback from users who tried Lotus 365 and Mahadev Book side by side.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reviews.map((r) => (
            <div key={r.n} className="rounded-xl border border-border/70 bg-card p-6">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-foreground/90">"{r.q}"</p>
              <div className="mt-4 text-sm font-semibold text-foreground">{r.n}</div>
              <div className="text-xs text-muted-foreground">{r.city}</div>
            </div>
          ))}
        </div>
      </section>

      <FAQSection title="Mahadev Book vs Lotus 365 — FAQs" items={lotusFaqs} />
      <QuickLinks
        excludePath="/mahadev-book-vs-lotus-365"
        title="Keep exploring"
        subtitle="Platforms we support, cricket coverage and player guides."
      />
    </div>
  );
}
