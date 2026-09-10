import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Zap, Trophy, Wallet } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const basketballFaqs: FAQItem[] = [
  { q: "Which basketball leagues can I bet on?", a: "NBA and Euroleague fixtures, covered under the same Mahadev Book ID as cricket and other sports." },
  { q: "What basketball markets are available?", a: "Moneyline, point spread, total points and live in-play odds that adjust as the score changes through each quarter." },
  { q: "Can I bet on basketball live?", a: "Yes. In-play odds move quarter by quarter, so you can react to how a game is actually going rather than only the pre-tip price." },
  { q: "Do NBA game times work for Indian bettors?", a: "NBA games run late at night in India, and support along with betting markets stay live 24/7, so timing isn't a barrier." },
];

export const Route = createFileRoute("/basketball-betting")({
  head: () => ({
    meta: [
      { title: "Basketball Betting on Mahadev Book — NBA & Euroleague Odds" },
      { name: "description", content: "Bet on NBA and Euroleague basketball with Mahadev Book — moneyline, spread, totals and live in-play odds under one ID." },
      { property: "og:title", content: "Basketball Betting on Mahadev Book — NBA & Euroleague Odds" },
        { name: "twitter:title", content: "Basketball Betting on Mahadev Book — NBA & Euroleague Odds" },
      { property: "og:description", content: "NBA and Euroleague markets on Mahadev Book — moneyline, spread and totals." },
      { property: "og:url", content: "https://mahadevbookss.com/basketball-betting" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Basketball betting on Mahadev Book" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/basketball-betting" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(basketballFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Sports", item: "https://mahadevbookss.com/sports" },
            { "@type": "ListItem", position: 3, name: "Basketball", item: "https://mahadevbookss.com/basketball-betting" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/basketball-betting",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: BasketballBettingPage,
});

const markets = [
  { icon: Trophy, t: "NBA & Euroleague", d: "Regular season and playoff fixtures across both competitions." },
  { icon: Zap, t: "Moneyline, spread & totals", d: "The three core basketball markets, priced for every game on the schedule." },
  { icon: Zap, t: "Live in-play", d: "Odds adjust quarter by quarter as the score moves." },
  { icon: Wallet, t: "Fast payouts", d: "UPI withdrawals in 5 to 30 minutes, any time of night." },
];

function BasketballBettingPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Other Sports
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient-gold">Basketball Betting</span> on Mahadev Book
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          NBA and Euroleague markets with moneyline, spread and totals, plus live odds that move
          with the score.
        </p>
        <div className="mt-8">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get an ID</span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Basketball Betting on Mahadev Book"
        summary="Mahadev Book covers NBA and Euroleague basketball with moneyline, point spread and total points markets, plus live in-play odds that adjust quarter by quarter. Support and withdrawals run 24/7, which matters given NBA games typically play late at night in India. UPI withdrawals settle in 5 to 30 minutes."
        points={[
          "NBA and Euroleague coverage",
          "Moneyline, spread and totals markets",
          "Live in-play odds by quarter",
          "24/7 support fits NBA's late-night India schedule",
          "Same ID as cricket and other sports",
          "UPI withdrawals in 5–30 minutes",
        ]}
        keywords={["basketball betting", "nba betting india", "mahadev book basketball", "euroleague betting"]}
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

      <FAQSection title="Basketball Betting — FAQs" items={basketballFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Tonight's NBA slate, covered</h2>
        <p className="mt-3 text-muted-foreground">Get a verified ID and check the lines before tip-off.</p>
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
        excludePath="/basketball-betting"
        title="Keep exploring"
        subtitle="Cricket tournaments and other sports on Mahadev Book."
      />
    </>
  );
}
