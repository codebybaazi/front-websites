import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Trophy, Zap, Wallet } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const footballFaqs: FAQItem[] = [
  { q: "Which football leagues can I bet on with Mahadev Book?", a: "EPL, La Liga, Serie A, the UEFA Champions League and FIFA World Cup 2026, along with most major European and international competitions." },
  { q: "What football markets are available?", a: "Match winner, both teams to score, over/under goals, correct score, first goalscorer and live in-play odds that move as the match unfolds." },
  { q: "Can I bet on football live, during the match?", a: "Yes. In-play odds update in real time, so you can bet on the next goal, the next card or the final result as the game develops." },
  { q: "Do I need a separate ID for football?", a: "No, the same Mahadev Book ID used for cricket covers football and every other sport on the platform." },
  { q: "How fast are football betting withdrawals?", a: "UPI withdrawals typically settle in 5 to 30 minutes, the same as cricket." },
];

export const Route = createFileRoute("/football-betting")({
  head: () => ({
    meta: [
      { title: "Football Betting on Mahadev Book — EPL, La Liga, UCL & More" },
      { name: "description", content: "Bet on football with Mahadev Book — EPL, La Liga, Serie A, UEFA Champions League and FIFA World Cup 2026, with live in-play markets and fast UPI payouts." },
      { property: "og:title", content: "Football Betting on Mahadev Book — EPL, La Liga, UCL & More" },
      { property: "og:description", content: "Football markets on Mahadev Book — major leagues, live odds and the same ID used for cricket." },
      { property: "og:url", content: "https://mahadevbookss.com/football-betting" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Football betting on Mahadev Book" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/football-betting" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(footballFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Sports", item: "https://mahadevbookss.com/sports" },
            { "@type": "ListItem", position: 3, name: "Football", item: "https://mahadevbookss.com/football-betting" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/football-betting",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: FootballBettingPage,
});

const markets = [
  { icon: Trophy, t: "Major leagues covered", d: "EPL, La Liga, Serie A, UEFA Champions League and FIFA World Cup 2026." },
  { icon: Zap, t: "Full market range", d: "Match winner, both teams to score, over/under goals, correct score and first goalscorer." },
  { icon: Zap, t: "Live in-play", d: "Odds update through the 90 minutes, not just at kickoff." },
  { icon: Wallet, t: "Fast payouts", d: "UPI withdrawals in 5 to 30 minutes, same as every other sport." },
];

function FootballBettingPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Other Sports
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient-gold">Football Betting</span> on Mahadev Book
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          EPL, La Liga, Serie A, the Champions League and FIFA World Cup 2026, all under the same
          ID you already use for cricket.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get an ID</span>
          </a>
          <Link to="/matches" search={{ sport: "football", q: "" }} className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent transition">
            See fixtures
          </Link>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Football Betting on Mahadev Book"
        summary="Mahadev Book covers football through EPL, La Liga, Serie A, the UEFA Champions League and FIFA World Cup 2026, with match-winner, both-teams-to-score, over/under, correct score and first-goalscorer markets. Live in-play odds update through the match, and the same ID used for cricket covers football, with UPI withdrawals settling in 5 to 30 minutes."
        points={[
          "EPL, La Liga, Serie A, UCL, FIFA World Cup 2026",
          "Match winner, BTTS, over/under, correct score markets",
          "First goalscorer and other player markets",
          "Live in-play odds throughout the match",
          "Same ID as cricket, no separate signup",
          "UPI withdrawals in 5–30 minutes",
        ]}
        keywords={["football betting", "football betting id", "mahadev book football", "epl betting india"]}
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

      <FAQSection title="Football Betting — FAQs" items={footballFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Kickoff is closer than you think</h2>
        <p className="mt-3 text-muted-foreground">Get your ID ready before the next big match.</p>
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
        excludePath="/football-betting"
        title="Keep exploring"
        subtitle="Cricket tournaments and other sports on Mahadev Book."
      />
    </>
  );
}
