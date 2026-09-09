import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Trophy, Zap, Wallet, ShieldCheck } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const iplFaqs: FAQItem[] = [
  { q: "What IPL markets can I bet on with Mahadev Book?", a: "Match winner, toss, top batter, top bowler, total runs, session and over-by-over markets, plus in-play odds that update through the match. Over 200 markets are typically available per fixture." },
  { q: "What is session betting in IPL?", a: "Betting on how many runs a team scores in a specific set of overs, rather than the match result. It's one of the most active IPL markets on the platform." },
  { q: "Can I bet on IPL live, during the match?", a: "Yes. In-play odds refresh in real time as overs are bowled, so you can bet on the next few overs, the next wicket, or the eventual winner as the game develops." },
  { q: "How do I get an ID to bet on IPL?", a: "Message support on WhatsApp with your name and preferred deposit method. A verified ID is usually issued in under five minutes." },
  { q: "How fast can I withdraw IPL winnings?", a: "UPI withdrawals typically settle in 5 to 30 minutes, 24/7, including during and right after a match." },
];

export const Route = createFileRoute("/ipl-betting")({
  head: () => ({
    meta: [
      { title: "IPL Betting on Mahadev Book — Markets, Odds & Live In-Play" },
      { name: "description", content: "Bet on IPL with a Mahadev Book ID — 200+ markets per match, session and fancy odds, live in-play pricing, and UPI withdrawals in minutes." },
      { property: "og:title", content: "IPL Betting on Mahadev Book — Markets, Odds & Live In-Play" },
      { property: "og:description", content: "IPL markets, session odds and live in-play betting on Mahadev Book, with fast UPI payouts." },
      { property: "og:url", content: "https://mahadevbookss.com/ipl-betting" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "IPL betting on Mahadev Book" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/ipl-betting" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(iplFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Sports", item: "https://mahadevbookss.com/sports" },
            { "@type": "ListItem", position: 3, name: "IPL", item: "https://mahadevbookss.com/ipl-betting" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/ipl-betting",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: IplBettingPage,
});

const markets = [
  { icon: Trophy, t: "Match & toss winner", d: "The two most-bet pre-match markets, priced from the moment fixtures are announced." },
  { icon: Zap, t: "Session & fancy odds", d: "Runs in a set of overs, top batter, top bowler and other fancy markets that update throughout the innings." },
  { icon: Zap, t: "Live in-play", d: "Odds refresh over by over, so you can bet on what happens next rather than only the final result." },
  { icon: Wallet, t: "Fast payouts", d: "UPI withdrawals in 5 to 30 minutes, so winnings from an afternoon match don't sit around until evening." },
];

function IplBettingPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Cricket
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient-gold">IPL Betting</span> on Mahadev Book
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          200+ markets per match, session and fancy odds, and live in-play pricing that updates as
          the game moves. Here's what's on offer and how to get started.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get an ID for IPL</span>
          </a>
          <Link to="/matches" search={{ sport: "cricket", q: "" }} className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent transition">
            See IPL fixtures
          </Link>
        </div>
      </section>

      <AIOverview
        title="AI Overview — IPL Betting on Mahadev Book"
        summary="Mahadev Book offers 200+ markets per IPL match, including match winner, toss, top batter, top bowler, session runs and fancy odds, plus live in-play pricing that updates over by over. IDs are issued on WhatsApp in minutes, and UPI withdrawals typically settle in 5 to 30 minutes."
        points={[
          "200+ markets per IPL match",
          "Session and fancy odds alongside standard markets",
          "Live in-play pricing updates over by over",
          "ID issued on WhatsApp in minutes",
          "UPI withdrawals in 5–30 minutes",
          "Covers every IPL fixture across the season",
        ]}
        keywords={["ipl betting", "ipl betting id", "mahadev book ipl", "ipl online betting"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {markets.map((m) => (
            <div key={m.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <m.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{m.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12 border-t border-border/60 text-center">
        <ShieldCheck className="h-8 w-8 text-primary mx-auto" />
        <p className="mt-3 text-muted-foreground">
          Every ID is KYC-verified before withdrawals unlock, so your IPL winnings go to your own
          account, not anyone else's.
        </p>
      </section>

      <FAQSection title="IPL Betting — FAQs" items={iplFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Next IPL match, covered</h2>
        <p className="mt-3 text-muted-foreground">Get a verified ID and see the full market sheet before the toss.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get My ID</span>
          </a>
          <Link to="/sports" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Browse all sports
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Sports"
        excludePath="/ipl-betting"
        title="Keep exploring"
        subtitle="More cricket tournaments and other sports on Mahadev Book."
      />
    </>
  );
}
