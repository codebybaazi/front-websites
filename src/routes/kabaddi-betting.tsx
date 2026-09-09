import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Zap, Trophy, Wallet } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const kabaddiFaqs: FAQItem[] = [
  { q: "What kabaddi competitions can I bet on?", a: "Pro Kabaddi League seasons and major international kabaddi events, covered under the same Mahadev Book ID as cricket and other sports." },
  { q: "What kabaddi markets are available?", a: "Match winner, total points, highest raid points and live in-play odds that move as raids and tackles happen." },
  { q: "Is kabaddi betting available live, during a match?", a: "Yes, in-play odds update through the match, so you can bet on the next few minutes rather than only the final result." },
  { q: "Do I need a different ID for kabaddi than cricket?", a: "No. One verified Mahadev Book ID covers kabaddi along with every other sport on the platform." },
];

export const Route = createFileRoute("/kabaddi-betting")({
  head: () => ({
    meta: [
      { title: "Kabaddi Betting on Mahadev Book — PKL & International Odds" },
      { name: "description", content: "Bet on Pro Kabaddi League and international kabaddi with Mahadev Book — match winner, total points and live in-play odds under one ID." },
      { property: "og:title", content: "Kabaddi Betting on Mahadev Book — PKL & International Odds" },
      { property: "og:description", content: "Kabaddi markets on Mahadev Book — Pro Kabaddi League and international events." },
      { property: "og:url", content: "https://mahadevbookss.com/kabaddi-betting" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Kabaddi betting on Mahadev Book" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/kabaddi-betting" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(kabaddiFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Sports", item: "https://mahadevbookss.com/sports" },
            { "@type": "ListItem", position: 3, name: "Kabaddi", item: "https://mahadevbookss.com/kabaddi-betting" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/kabaddi-betting",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: KabaddiBettingPage,
});

const markets = [
  { icon: Trophy, t: "PKL & internationals", d: "Pro Kabaddi League seasons plus major international kabaddi events." },
  { icon: Zap, t: "Match & points markets", d: "Match winner, total points and highest raid points, priced per fixture." },
  { icon: Zap, t: "Live in-play", d: "Odds shift with every raid and tackle, not just at the start of the match." },
  { icon: Wallet, t: "Fast payouts", d: "UPI withdrawals in 5 to 30 minutes, the same as cricket and football." },
];

function KabaddiBettingPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Other Sports
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient-gold">Kabaddi Betting</span> on Mahadev Book
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Pro Kabaddi League and international fixtures, with match and points markets that update
          raid by raid.
        </p>
        <div className="mt-8">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get an ID</span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Kabaddi Betting on Mahadev Book"
        summary="Mahadev Book covers Pro Kabaddi League seasons and major international kabaddi events with match-winner, total-points and highest-raid-points markets. Live in-play odds move with each raid and tackle, and the same ID used for cricket and football also covers kabaddi, with UPI withdrawals in 5 to 30 minutes."
        points={[
          "Pro Kabaddi League and international fixtures",
          "Match winner, total points, highest raid points",
          "Live in-play odds move raid by raid",
          "Same ID as cricket and other sports",
          "UPI withdrawals in 5–30 minutes",
        ]}
        keywords={["kabaddi betting", "pro kabaddi league betting", "mahadev book kabaddi", "pkl betting id"]}
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

      <FAQSection title="Kabaddi Betting — FAQs" items={kabaddiFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Next PKL match, covered</h2>
        <p className="mt-3 text-muted-foreground">Get a verified ID and check the raid-point markets before the whistle.</p>
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
        excludePath="/kabaddi-betting"
        title="Keep exploring"
        subtitle="Cricket tournaments and other sports on Mahadev Book."
      />
    </>
  );
}
