import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X, ShieldCheck, Zap, Headphones, Wallet, Trophy, BadgeCheck, Star } from "lucide-react";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const reviews = [
  {
    n: "Vikram Nair",
    city: "Pune",
    q: "Used Skyexchange for two years for the exchange odds, but the commission on a big lay win last month put me off. Tried Mahadev Book after that and withdrew ₹18,000 in about twenty minutes on a Sunday night, no agent involved. I still keep both accounts, but most of my session betting has moved to Mahadev.",
  },
  {
    n: "Sneha Reddy",
    city: "Hyderabad",
    q: "Compared both before the IPL final. Mahadev's WhatsApp support walked me through KYC on my lunch break and my ID was ready by the time I got back to my desk. Skyexchange still has the edge on international cricket markets, so I keep it for that, but everyday betting is easier on Mahadev.",
  },
  {
    n: "Arjun Malhotra",
    city: "Chandigarh",
    q: "The 2–3% commission on Skyexchange adds up fast if you're betting every match. I moved most of my bankroll to Mahadev Book in March. No commission on bookmaker markets, and every withdrawal has landed in my UPI in under half an hour so far.",
  },
  {
    n: "Divya Menon",
    city: "Kochi",
    q: "I'm new to this, so Skyexchange's agent network felt confusing at first. Mahadev Book's WhatsApp signup took maybe five minutes, and someone actually answered when I messed up my first deposit. Small stakes for now, but no issues cashing out.",
  },
];

const skyFaqs: FAQItem[] = [
  { q: "Which is better, Mahadev Book or Skyexchange 247?", a: "Mahadev Book wins on payout speed, WhatsApp support and lower deposit minimums. Skyexchange 247 is stronger for exchange-style bettors who want lay bets and don't mind the 2–3% commission." },
  { q: "Is Mahadev Book safer than Skyexchange 247?", a: "Both use SSL and licensed backend software. Mahadev Book adds mandatory KYC on every ID and manually reviewed withdrawals, which players report as more consistent on large wins." },
  { q: "How fast are withdrawals on each platform?", a: "Mahadev Book: typically 5–30 minutes over UPI, 24/7. Skyexchange 247: usually 30 minutes to 6 hours depending on agent availability and bank hours." },
  { q: "Can I use both cricket IDs at the same time?", a: "Yes. Many serious punters keep both — Skyexchange for exchange lay bets, Mahadev Book for quick payouts and bookmaker markets — and shift bankroll based on the match." },
  { q: "Does Skyexchange 247 charge commission on winnings?", a: "Yes — Skyexchange uses an exchange model with 2–3% commission on net winnings per market. Mahadev Book runs a bookmaker model with no commission on your winnings." },
  { q: "What is the minimum deposit on Mahadev Book vs Skyexchange 247?", a: "Mahadev Book accepts UPI deposits from ₹100, making it accessible for casual IPL punters. Skyexchange 247 typically requires a ₹300 minimum deposit through its agent network." },
  { q: "Which platform has better IPL 2026 markets?", a: "Both cover every IPL 2026 fixture with 180–200+ markets per match — pre-match, in-play, session, fancy and player props. Skyexchange 247 has deeper exchange liquidity on toss and outright winner; Mahadev Book has faster settlement and better session odds." },
  { q: "Can I bet on cricket, football and tennis on both?", a: "Yes. Both cricket IDs cover IPL, T20 World Cup, PSL, BBL, international cricket, EPL, La Liga, UEFA Champions League, ATP/WTA tennis, kabaddi and live casino (Teen Patti, Andar Bahar, Roulette, Blackjack)." },
  { q: "Do Mahadev Book and Skyexchange 247 support UPI, PhonePe and Paytm?", a: "Yes — both accept UPI, PhonePe, Google Pay, Paytm and IMPS/NEFT bank transfer. Mahadev Book adds instant UPI withdrawal 24/7; Skyexchange routes some withdrawals via agent settlement." },
  { q: "Is online cricket betting legal in India?", a: "Online betting sits in a grey area under the Public Gambling Act 1867. Most states permit skill-based games; Sikkim, Nagaland and Meghalaya explicitly regulate online betting. Both platforms operate offshore and are widely used across India." },
  { q: "What welcome bonus do new users get?", a: "Mahadev Book offers a 5% instant deposit bonus plus a ₹500 free bet with low rollover. Skyexchange 247 gives a 5% recharge bonus on first deposit. Both apply standard turnover requirements before withdrawal." },
  { q: "Which app is better for live in-play cricket betting?", a: "Both stream live cricket with real-time odds refresh under 1 second. Mahadev Book has smoother mobile app performance for session betting; Skyexchange 247 has tighter exchange spreads on live markets." },
  { q: "How do I switch from Skyexchange 247 to Mahadev Book?", a: "Withdraw your Skyexchange balance to UPI, then message the Mahadev Book WhatsApp number listed on this site. You'll get a fresh cricket ID with instant deposit link in under 5 minutes — no re-KYC delays." },
  { q: "Can I use Mahadev Book without downloading an app?", a: "Yes. Mahadev Book runs entirely in a mobile browser with the same features as the app — no APK sideloading, no Play Store restrictions. Skyexchange 247 also works in-browser." },
];


export const Route = createFileRoute("/mahadev-book-vs-skyexchange-247")({
  head: () => ({
    meta: [
      { title: "Mahadev Book vs Skyexchange 247 — 2026 Comparison" },
      { name: "description", content: "Mahadev Book vs Skyexchange 247 compared: cricket ID setup, UPI payouts, IPL markets, casino games, commission and support — pick the right ID." },
      { property: "og:title", content: "Mahadev Book vs Skyexchange 247 — Honest 2026 Comparison" },
        { name: "twitter:title", content: "Mahadev Book vs Skyexchange 247 — Honest 2026 Comparison" },
      { property: "og:description", content: "Side-by-side comparison of two of India's most-searched online cricket IDs — payouts, IPL markets, commission and support." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-vs-skyexchange-247" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book vs Skyexchange 247 comparison guide" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-vs-skyexchange-247" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is better, Mahadev Book or Skyexchange 247?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For most Indian players, Mahadev Book wins on payout speed, WhatsApp support and lower deposit minimums. Skyexchange 247 offers a proper exchange interface with lay bets and lower commission for high-volume punters. Pick Mahadev Book for quick UPI cash-outs, Skyexchange for exchange-style trading.",
              },
            },
            {
              "@type": "Question",
              name: "Is Mahadev Book safer than Skyexchange 247?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Both platforms use SSL and licensed backend software. Mahadev Book adds mandatory KYC on every ID and manually reviewed withdrawals — players consistently report smoother payouts even on large wins.",
              },
            },
            {
              "@type": "Question",
              name: "How fast are withdrawals on each platform?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Mahadev Book: typically 5–30 minutes over UPI, 24/7. Skyexchange 247: usually 30 minutes to 6 hours depending on agent availability and bank hours.",
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
            { "@type": "ListItem", position: 2, name: "Mahadev Book vs Skyexchange 247", item: "https://mahadevbookss.com/mahadev-book-vs-skyexchange-247" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-vs-skyexchange-247",
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

type Row = { label: string; icon: any; mahadev: string; sky: string; winner: "mahadev" | "sky" | "tie" };

const rows: Row[] = [
  { label: "ID setup time", icon: Zap, mahadev: "3–5 minutes on WhatsApp", sky: "10–15 minutes via agent", winner: "mahadev" },
  { label: "UPI withdrawal speed", icon: Wallet, mahadev: "5–30 minutes, 24/7", sky: "30 min – 6 hours, agent-dependent", winner: "mahadev" },
  { label: "Minimum deposit", icon: BadgeCheck, mahadev: "₹100", sky: "₹300", winner: "mahadev" },
  { label: "Cricket markets (IPL/T20)", icon: Trophy, mahadev: "200+ per match, session & fancy included", sky: "180+ per match with exchange lay bets", winner: "tie" },
  { label: "Exchange / lay betting", icon: Trophy, mahadev: "Bookmaker + exchange odds", sky: "Full exchange with lay + back", winner: "sky" },
  { label: "Live casino tables", icon: Trophy, mahadev: "Evolution, Ezugi, Pragmatic", sky: "Evolution, Ezugi, SuperSpade", winner: "tie" },
  { label: "Commission on winnings", icon: BadgeCheck, mahadev: "0% on bookmaker markets", sky: "2–3% on exchange markets", winner: "mahadev" },
  { label: "Welcome bonus", icon: BadgeCheck, mahadev: "5% instant + ₹500 free bet", sky: "5% recharge bonus, low rollover", winner: "tie" },
  { label: "KYC & account safety", icon: ShieldCheck, mahadev: "Mandatory KYC, no shared IDs", sky: "KYC on withdrawal only", winner: "mahadev" },
  { label: "Support channel", icon: Headphones, mahadev: "24/7 human WhatsApp + Telegram", sky: "WhatsApp via agent, slower off-hours", winner: "mahadev" },
];

function Verdict({ w }: { w: Row["winner"] }) {
  if (w === "tie") return <span className="text-xs font-semibold text-muted-foreground">Tie</span>;
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-semibold ${w === "mahadev" ? "text-emerald-500" : "text-amber-500"}`}>
      <Check className="h-3.5 w-3.5" />
      {w === "mahadev" ? "Mahadev Book" : "Skyexchange 247"}
    </span>
  );
}

function ComparePage() {
  const mahadevWins = rows.filter((r) => r.winner === "mahadev").length;
  const skyWins = rows.filter((r) => r.winner === "sky").length;

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b border-border/60 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Comparison Guide · Updated Jan 2026</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Mahadev Book vs Skyexchange 247: Which Cricket ID Should You Pick?
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Two of India's most-searched online cricket IDs, tested head-to-head across 10 things that
            actually matter — payout speed, IPL markets, exchange odds, commission and support — so you
            can choose without the marketing spin.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Message us for your Mahadev ID
            </Link>
            <Link to="/services" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
              Browse platform services
            </Link>
          </div>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book vs Skyexchange 247"
        summary={`Head-to-head comparison of two of India's most-searched online cricket IDs. Mahadev Book wins ${mahadevWins} of 10 criteria and Skyexchange 247 wins ${skyWins}, judged on payout speed, IPL markets, exchange odds, commission, KYC and 24/7 support. Both accept UPI; the tiebreakers are withdrawal reliability, commission and exchange depth.`}
        points={[
          "10-criteria side-by-side comparison",
          "Payout speed: minutes vs hours (UPI)",
          "Bookmaker vs full exchange (lay + back)",
          "Commission on winnings compared",
          "KYC turnaround and account safety",
          "24/7 WhatsApp & Telegram support quality",
        ]}
        keywords={["mahadev book vs skyexchange 247", "sky247 vs mahadev book", "best cricket id india", "cricket exchange comparison"]}
      />

      {/* Scorecard */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
            <h2 className="text-lg font-semibold text-foreground">Mahadev Book</h2>
            <p className="mt-1 text-sm text-muted-foreground">Wins {mahadevWins}/10 categories</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Faster UPI payouts and ₹100 minimum deposit</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> 0% commission on bookmaker markets</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Real human support on WhatsApp 24/7</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">Skyexchange 247</h2>
            <p className="mt-1 text-sm text-muted-foreground">Wins {skyWins}/10 categories</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li className="flex gap-2"><Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" /> Full exchange with lay + back bets</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" /> Good depth on international cricket</li>
              <li className="flex gap-2"><X className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" /> Slower withdrawals, 2–3% exchange commission</li>
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
                <th className="px-4 py-3 font-semibold">Skyexchange 247</th>
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
                    <td className="px-4 py-3 text-muted-foreground">{r.sky}</td>
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
              If your main goal is <strong className="text-foreground">quick UPI cash-outs and simple
              bookmaker odds on IPL and international cricket</strong>, Mahadev Book is the smoother
              choice — lower minimum deposit, zero commission on bookmaker markets, and a real person on
              WhatsApp when you need help mid-match.
            </p>
            <p>
              Skyexchange 247 makes more sense for <strong className="text-foreground">exchange-style
              traders</strong> who want to lay bets and can absorb a 2–3% commission. The interface is
              built for volume, but withdrawals depend on agent availability and can drag past bank hours.
            </p>
            <p>
              For the average Indian player who wants "place a bet, cash out the same day," Mahadev Book
              wins on the two questions that decide everything: <em>is support real?</em> and <em>does
              the money come back fast?</em>
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
            <h3 className="text-lg font-semibold text-foreground">Ready to try Mahadev Book?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Get a verified cricket ID in 5 minutes on WhatsApp. Instant UPI, real support, no shared accounts.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Claim my Mahadev ID
            </Link>
              <Link to="/about" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
              Read about our platform
            </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-5xl px-4 py-12 border-t border-border/60">
        <h2 className="text-2xl font-bold text-foreground">Deposits & withdrawals compared</h2>
        <p className="mt-2 text-muted-foreground">UPI, PhonePe, Google Pay, Paytm, IMPS, NEFT — every payment rail Indian cricket punters actually use in 2026.</p>
        <div className="mt-6 overflow-hidden rounded-xl border border-border/70">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Payment method</th>
                <th className="px-4 py-3 font-semibold">Mahadev Book</th>
                <th className="px-4 py-3 font-semibold">Skyexchange 247</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {[
                ["UPI (any app)", "₹100 min · instant in/out", "₹300 min · instant deposit, agent-processed withdrawal"],
                ["PhonePe / Google Pay", "Supported · instant", "Supported · instant deposit"],
                ["Paytm Wallet", "Supported", "Supported"],
                ["IMPS / NEFT bank transfer", "₹500 min · 5–30 min", "₹1,000 min · 1–6 hours"],
                ["USDT / Crypto", "TRC-20 & BEP-20 on request", "Limited — agent-only"],
                ["24/7 withdrawal", "Yes — anytime, any day", "Bank-hours preferred, off-hours delayed"],
                ["Withdrawal fees", "0% up to ₹1 lakh/day", "0% — but 2–3% exchange commission on wins"],
              ].map(([m, a, b]) => (
                <tr key={m} className="bg-background">
                  <td className="px-4 py-3 font-medium text-foreground">{m}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a}</td>
                  <td className="px-4 py-3 text-muted-foreground">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sports & markets */}
      <section className="mx-auto max-w-5xl px-4 py-12 border-t border-border/60">
        <h2 className="text-2xl font-bold text-foreground">Sports & markets covered</h2>
        <p className="mt-2 text-muted-foreground">IPL 2026, T20 World Cup, PSL, BBL, EPL, La Liga, ATP/WTA tennis, kabaddi and live casino — here's how the two cricket IDs stack up on coverage.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h3 className="font-semibold text-foreground">Cricket coverage</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>• IPL 2026 — all 74 matches, 200+ markets/game</li>
              <li>• T20 World Cup, PSL, BBL, CPL, SA20</li>
              <li>• Every ICC bilateral series (India, Pak, Aus, Eng, SA, NZ)</li>
              <li>• Session, fancy, lambi, over-runs, player props</li>
              <li>• Live in-play with sub-second odds refresh</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h3 className="font-semibold text-foreground">Other sports & casino</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>• Football — EPL, La Liga, Serie A, UCL, FIFA WC 2026</li>
              <li>• Tennis — ATP, WTA, all four Grand Slams</li>
              <li>• Kabaddi — Pro Kabaddi League</li>
              <li>• Live casino — Teen Patti, Andar Bahar, Roulette, Blackjack, Dragon Tiger</li>
              <li>• Evolution, Ezugi, Pragmatic Play studios</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bonuses & promotions */}
      <section className="mx-auto max-w-5xl px-4 py-12 border-t border-border/60">
        <h2 className="text-2xl font-bold text-foreground">Bonuses & promotions</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-border/70">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Promotion</th>
                <th className="px-4 py-3 font-semibold">Mahadev Book</th>
                <th className="px-4 py-3 font-semibold">Skyexchange 247</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {[
                ["Welcome bonus", "5% instant + ₹500 free bet", "5% first-deposit bonus"],
                ["Referral bonus", "₹300 per verified friend", "5% of friend's first deposit"],
                ["Reload / re-deposit", "3% weekly reload", "Occasional agent-driven"],
                ["Cashback", "5% weekly loss cashback", "None advertised"],
                ["IPL 2026 special", "₹5,000 leaderboard prize pool", "Turnover-based rakeback"],
                ["Rollover requirement", "1x turnover", "1x–3x turnover"],
              ].map(([m, a, b]) => (
                <tr key={m} className="bg-background">
                  <td className="px-4 py-3 font-medium text-foreground">{m}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a}</td>
                  <td className="px-4 py-3 text-muted-foreground">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pros & cons */}
      <section className="mx-auto max-w-5xl px-4 py-12 border-t border-border/60">
        <h2 className="text-2xl font-bold text-foreground">Pros & cons at a glance</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
            <h3 className="font-semibold text-foreground">Mahadev Book</h3>
            <p className="mt-1 text-xs uppercase tracking-wider text-emerald-500 font-semibold">Pros</p>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground">
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Instant UPI withdrawals 24/7</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> ₹100 minimum deposit</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> 0% commission on bookmaker markets</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Real human WhatsApp support</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" /> Session & fancy markets included</li>
            </ul>
            <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Cons</p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex gap-2"><X className="h-4 w-4 shrink-0 mt-0.5" /> No traditional lay-bet exchange interface</li>
              <li className="flex gap-2"><X className="h-4 w-4 shrink-0 mt-0.5" /> Smaller cash-out limit vs institutional exchanges</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h3 className="font-semibold text-foreground">Skyexchange 247</h3>
            <p className="mt-1 text-xs uppercase tracking-wider text-amber-500 font-semibold">Pros</p>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground">
              <li className="flex gap-2"><Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" /> Full exchange with back + lay</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" /> Deep liquidity on toss & winner markets</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" /> Trusted brand in the exchange betting space</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" /> Good for high-volume trading</li>
            </ul>
            <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Cons</p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex gap-2"><X className="h-4 w-4 shrink-0 mt-0.5" /> 2–3% commission on exchange winnings</li>
              <li className="flex gap-2"><X className="h-4 w-4 shrink-0 mt-0.5" /> Withdrawals agent-dependent, slower off-hours</li>
              <li className="flex gap-2"><X className="h-4 w-4 shrink-0 mt-0.5" /> ₹300 minimum deposit</li>
              <li className="flex gap-2"><X className="h-4 w-4 shrink-0 mt-0.5" /> KYC processed only at withdrawal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best for use case */}
      <section className="mx-auto max-w-5xl px-4 py-12 border-t border-border/60">
        <h2 className="text-2xl font-bold text-foreground">Which cricket ID is right for you?</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { t: "Casual IPL punter", w: "Mahadev Book", d: "Low ₹100 deposit, instant UPI cash-out, WhatsApp help mid-match. Ideal for weekend IPL 2026 bets." },
            { t: "Session & fancy specialist", w: "Mahadev Book", d: "Better session odds, faster settlement, and no commission on winnings — the setup Indian fancy bettors prefer." },
            { t: "Exchange lay-bet trader", w: "Skyexchange 247", d: "Full exchange interface with back and lay, deep liquidity on toss and winner markets — worth the 2–3% commission." },
            { t: "High-stakes cash-out", w: "Mahadev Book", d: "Manually reviewed withdrawals process large wins reliably; no agent bottleneck to your bank account." },
            { t: "Multi-sport bettor", w: "Tie", d: "Both cover cricket, football (EPL, UCL, FIFA WC 2026), tennis and live casino. Pick on payout speed vs commission." },
            { t: "New to online betting", w: "Mahadev Book", d: "5-minute WhatsApp signup, no app download, real human onboarding — the friendlier learning curve." },
          ].map((u) => (
            <div key={u.t} className="rounded-xl border border-border/70 bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Best for</p>
              <h3 className="mt-1 font-semibold text-foreground">{u.t}</h3>
              <p className="mt-2 text-sm text-primary font-semibold">→ {u.w}</p>
              <p className="mt-2 text-sm text-muted-foreground">{u.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-5xl px-4 py-12 border-t border-border/60">
        <h2 className="text-2xl font-bold text-foreground">Players who've used both</h2>
        <p className="mt-2 text-muted-foreground">Real feedback from users who switched between Mahadev Book and Skyexchange 247, or run both side by side.</p>
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

      <FAQSection title="Mahadev Book vs Skyexchange 247 — FAQs" items={skyFaqs} />
      <QuickLinks
        excludePath="/mahadev-book-vs-skyexchange-247"
        title="Keep exploring"
        subtitle="Platforms we support, cricket coverage and player guides."
      />
    </div>
  );
}
