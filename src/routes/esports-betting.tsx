import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Zap, Trophy, Wallet } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const esportsFaqs: FAQItem[] = [
  { q: "Which esports titles can I bet on?", a: "CS (Counter-Strike), Dota 2 and Valorant, covering major tournaments and league matches for each title." },
  { q: "What esports markets are available?", a: "Match winner, map winner and total maps, with live in-play odds that update as each map is played." },
  { q: "Are esports markets treated the same as traditional sports?", a: "Yes, the same ID, wallet and withdrawal process applies. Esports isn't a separate or lesser product on the platform." },
  { q: "Can I bet on esports live?", a: "Yes. Odds move map by map, so a bet placed after map one reflects what's actually happened, not the pre-match price." },
];

export const Route = createFileRoute("/esports-betting")({
  head: () => ({
    meta: [
      { title: "Esports Betting on Mahadev Book — CS, Dota 2 & Valorant" },
      { name: "description", content: "Bet on CS, Dota 2 and Valorant with Mahadev Book — match and map winner markets, live in-play odds, under the same ID as cricket." },
      { property: "og:title", content: "Esports Betting on Mahadev Book — CS, Dota 2 & Valorant" },
      { property: "og:description", content: "Esports markets on Mahadev Book — CS, Dota 2 and Valorant match and map odds." },
      { property: "og:url", content: "https://mahadevbookss.com/esports-betting" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Esports betting on Mahadev Book" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/esports-betting" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(esportsFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Sports", item: "https://mahadevbookss.com/sports" },
            { "@type": "ListItem", position: 3, name: "Esports", item: "https://mahadevbookss.com/esports-betting" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/esports-betting",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: EsportsBettingPage,
});

const markets = [
  { icon: Trophy, t: "CS, Dota 2 & Valorant", d: "Major tournaments and league matches across all three titles." },
  { icon: Zap, t: "Match & map markets", d: "Match winner, map winner and total maps, priced per fixture." },
  { icon: Zap, t: "Live in-play", d: "Odds update map by map as a series unfolds." },
  { icon: Wallet, t: "Fast payouts", d: "UPI withdrawals in 5 to 30 minutes, same as every other sport on the platform." },
];

function EsportsBettingPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Other Sports
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient-gold">Esports Betting</span> on Mahadev Book
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          CS, Dota 2 and Valorant markets with the same ID, wallet and payout process used for
          cricket and every other sport.
        </p>
        <div className="mt-8">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get an ID</span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Esports Betting on Mahadev Book"
        summary="Mahadev Book covers esports through CS, Dota 2 and Valorant, with match-winner, map-winner and total-maps markets, plus live in-play odds that update as each map is played. The same ID, wallet and withdrawal process used for cricket and other sports applies to esports, with UPI withdrawals settling in 5 to 30 minutes."
        points={[
          "CS, Dota 2 and Valorant coverage",
          "Match winner, map winner, total maps markets",
          "Live in-play odds update map by map",
          "Same ID, wallet and payouts as other sports",
          "UPI withdrawals in 5–30 minutes",
        ]}
        keywords={["esports betting", "cs betting", "dota 2 betting", "valorant betting india", "mahadev book esports"]}
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

      <FAQSection title="Esports Betting — FAQs" items={esportsFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Next series, covered</h2>
        <p className="mt-3 text-muted-foreground">Get a verified ID and check the map markets before the series starts.</p>
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
        excludePath="/esports-betting"
        title="Keep exploring"
        subtitle="Cricket tournaments and other sports on Mahadev Book."
      />
    </>
  );
}
