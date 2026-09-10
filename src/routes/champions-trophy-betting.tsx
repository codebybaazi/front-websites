import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Trophy, Zap, Wallet } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const ctFaqs: FAQItem[] = [
  { q: "What Champions Trophy markets does Mahadev Book offer?", a: "Match winner, tournament outright, top run-scorer and top wicket-taker, plus session and live in-play markets for every fixture from the group stage to the final." },
  { q: "Is the Champions Trophy covered as deeply as IPL?", a: "It gets the same standard of match and session markets as IPL. Session and fancy betting is generally deepest for IPL simply because of match volume, but Champions Trophy fixtures aren't treated as an afterthought." },
  { q: "Can I bet on the final in advance?", a: "Outright winner odds run from the start of the tournament, so you can back a team well before the final is set." },
  { q: "How do I set up an ID for the Champions Trophy?", a: "Message support on WhatsApp — setup takes a few minutes and doesn't need to wait until the tournament starts." },
];

export const Route = createFileRoute("/champions-trophy-betting")({
  head: () => ({
    meta: [
      { title: "Champions Trophy Betting on Mahadev Book — Odds & Live Markets" },
      { name: "description", content: "Bet on the Champions Trophy with Mahadev Book — match winner, outright odds, top scorer and wicket-taker markets, group stage through the final." },
      { property: "og:title", content: "Champions Trophy Betting on Mahadev Book — Odds & Live Markets" },
        { name: "twitter:title", content: "Champions Trophy Betting on Mahadev Book — Odds & Live Markets" },
      { property: "og:description", content: "Full Champions Trophy coverage on Mahadev Book — outright odds and live in-play markets." },
      { property: "og:url", content: "https://mahadevbookss.com/champions-trophy-betting" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Champions Trophy betting on Mahadev Book" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/champions-trophy-betting" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(ctFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Sports", item: "https://mahadevbookss.com/sports" },
            { "@type": "ListItem", position: 3, name: "Champions Trophy", item: "https://mahadevbookss.com/champions-trophy-betting" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/champions-trophy-betting",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: ChampionsTrophyPage,
});

const markets = [
  { icon: Trophy, t: "Match winner", d: "Standard match markets for every group and knockout fixture." },
  { icon: Zap, t: "Outright & player markets", d: "Tournament winner, top run-scorer and top wicket-taker odds running across the event." },
  { icon: Zap, t: "Live in-play", d: "Odds move with the game, so you're not locked into a pre-match price once play starts." },
  { icon: Wallet, t: "Fast payouts", d: "UPI withdrawals in 5 to 30 minutes, 24/7." },
];

function ChampionsTrophyPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Cricket
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient-gold">Champions Trophy Betting</span> on Mahadev Book
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Full tournament coverage from the group stage to the final, with match, outright and
          live in-play markets on every fixture.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get an ID</span>
          </a>
          <Link to="/matches" search={{ sport: "cricket", q: "" }} className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent transition">
            See fixtures
          </Link>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Champions Trophy Betting on Mahadev Book"
        summary="Mahadev Book covers the Champions Trophy from the group stage through the final, with match-winner, tournament outright, and player-level markets for top run-scorer and top wicket-taker. Live in-play odds update through each match, and UPI withdrawals settle in 5 to 30 minutes."
        points={[
          "Match markets for every group and knockout fixture",
          "Outright winner odds from the start of the tournament",
          "Top run-scorer and wicket-taker markets",
          "Live in-play pricing during matches",
          "ID issued on WhatsApp in minutes",
          "UPI withdrawals in 5–30 minutes",
        ]}
        keywords={["champions trophy betting", "champions trophy betting id", "mahadev book champions trophy", "icc champions trophy betting"]}
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

      <FAQSection title="Champions Trophy Betting — FAQs" items={ctFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Get set up before the group stage</h2>
        <p className="mt-3 text-muted-foreground">A verified ID takes minutes on WhatsApp.</p>
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
        excludePath="/champions-trophy-betting"
        title="Keep exploring"
        subtitle="More cricket tournaments and other sports on Mahadev Book."
      />
    </>
  );
}
