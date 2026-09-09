import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Trophy, Globe, Zap, Wallet } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const t20Faqs: FAQItem[] = [
  { q: "What T20 World Cup markets does Mahadev Book offer?", a: "Match winner, tournament outright winner, top run-scorer, top wicket-taker, group-stage and knockout markets, plus live in-play odds for every fixture." },
  { q: "Can I bet on the tournament outright winner before it starts?", a: "Yes. Outright odds are usually available from the tournament schedule announcement, well before the first ball is bowled." },
  { q: "Are group-stage matches covered the same as knockouts?", a: "Yes, every group match, semi-final and final gets the same depth of markets, not just the headline knockout games." },
  { q: "How do I get an ID before the tournament starts?", a: "Message support on WhatsApp any time. Setup takes a few minutes, so there's no need to wait until the tournament is already underway." },
  { q: "How fast are withdrawals during a busy tournament?", a: "UPI withdrawals still settle in 5 to 30 minutes even during high-traffic tournament nights." },
];

export const Route = createFileRoute("/t20-world-cup-betting")({
  head: () => ({
    meta: [
      { title: "T20 World Cup Betting on Mahadev Book — Odds & Live Markets" },
      { name: "description", content: "Bet on the T20 World Cup with Mahadev Book — match winner, outright odds, top scorer and wicket-taker markets, group stage through the final." },
      { property: "og:title", content: "T20 World Cup Betting on Mahadev Book — Odds & Live Markets" },
      { property: "og:description", content: "Full T20 World Cup coverage on Mahadev Book — outright odds, group stage and knockout markets." },
      { property: "og:url", content: "https://mahadevbookss.com/t20-world-cup-betting" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "T20 World Cup betting on Mahadev Book" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/t20-world-cup-betting" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(t20Faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Sports", item: "https://mahadevbookss.com/sports" },
            { "@type": "ListItem", position: 3, name: "T20 World Cup", item: "https://mahadevbookss.com/t20-world-cup-betting" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/t20-world-cup-betting",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: T20WorldCupPage,
});

const markets = [
  { icon: Trophy, t: "Match winner", d: "Priced for every group, Super 8 and knockout fixture across the tournament." },
  { icon: Globe, t: "Outright winner", d: "Tournament-winner odds available from the schedule announcement through to the final." },
  { icon: Zap, t: "Top run-scorer & wicket-taker", d: "Player-level markets that run across the whole tournament, not just single matches." },
  { icon: Wallet, t: "Fast payouts", d: "UPI withdrawals in 5 to 30 minutes, even on the busiest knockout nights." },
];

function T20WorldCupPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Cricket
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient-gold">T20 World Cup Betting</span> on Mahadev Book
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Group stage through the final, with match, outright and player markets covered
          throughout. Here's what's available and how to get set up.
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
        title="AI Overview — T20 World Cup Betting on Mahadev Book"
        summary="Mahadev Book covers every T20 World Cup fixture from the group stage through the final, with match-winner, tournament outright, top run-scorer and top wicket-taker markets. Outright odds are typically available from the schedule announcement, and UPI withdrawals settle in 5 to 30 minutes even during high-traffic knockout nights."
        points={[
          "Match markets for every group and knockout fixture",
          "Outright winner odds from the schedule announcement",
          "Top run-scorer and wicket-taker markets",
          "Live in-play pricing throughout the tournament",
          "ID issued on WhatsApp before the tournament starts",
          "UPI withdrawals in 5–30 minutes, even on busy nights",
        ]}
        keywords={["t20 world cup betting", "t20 world cup betting id", "mahadev book t20 world cup", "icc t20 betting"]}
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

      <FAQSection title="T20 World Cup Betting — FAQs" items={t20Faqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Ready before the first ball</h2>
        <p className="mt-3 text-muted-foreground">Set up your ID early and have outright odds ready to go.</p>
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
        excludePath="/t20-world-cup-betting"
        title="Keep exploring"
        subtitle="More cricket tournaments and other sports on Mahadev Book."
      />
    </>
  );
}
