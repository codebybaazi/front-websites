import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Zap, Trophy, Wallet } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const horseFaqs: FAQItem[] = [
  { q: "What horse racing markets does Mahadev Book offer?", a: "Win, place and each-way bets on global race meets, with odds updated as the field and conditions are confirmed closer to race time." },
  { q: "Which race meets are covered?", a: "Major international meets rather than a single circuit, so there's usually a race running somewhere in the world on a given day." },
  { q: "What does an each-way bet mean?", a: "It's really two bets in one — part on the horse to win, part on it to place. If it wins, both parts pay out; if it only places, the place part pays." },
  { q: "Do I need a separate ID for horse racing?", a: "No, the same Mahadev Book ID covers horse racing along with cricket and every other sport on the platform." },
];

export const Route = createFileRoute("/horse-racing-betting")({
  head: () => ({
    meta: [
      { title: "Horse Racing Betting on Mahadev Book — Win, Place & Each-Way" },
      { name: "description", content: "Bet on global horse racing with Mahadev Book — win, place and each-way markets on major race meets, under the same ID as cricket." },
      { property: "og:title", content: "Horse Racing Betting on Mahadev Book — Win, Place & Each-Way" },
        { name: "twitter:title", content: "Horse Racing Betting on Mahadev Book — Win, Place & Each-Way" },
      { property: "og:description", content: "Horse racing markets on Mahadev Book — win, place and each-way on global race meets." },
      { property: "og:url", content: "https://mahadevbookss.com/horse-racing-betting" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Horse racing betting on Mahadev Book" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/horse-racing-betting" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(horseFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Sports", item: "https://mahadevbookss.com/sports" },
            { "@type": "ListItem", position: 3, name: "Horse Racing", item: "https://mahadevbookss.com/horse-racing-betting" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/horse-racing-betting",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: HorseRacingBettingPage,
});

const markets = [
  { icon: Trophy, t: "Global race meets", d: "Major international racing rather than a single circuit, most days of the week." },
  { icon: Zap, t: "Win, place & each-way", d: "The three standard racing bet types, priced as fields are confirmed." },
  { icon: Zap, t: "Updated odds", d: "Prices adjust as the field, going and conditions firm up closer to race time." },
  { icon: Wallet, t: "Fast payouts", d: "UPI withdrawals in 5 to 30 minutes after a race settles." },
];

function HorseRacingBettingPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Other Sports
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient-gold">Horse Racing Betting</span> on Mahadev Book
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Win, place and each-way markets on major race meets around the world, under the same ID
          you already use for cricket.
        </p>
        <div className="mt-8">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get an ID</span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Horse Racing Betting on Mahadev Book"
        summary="Mahadev Book offers win, place and each-way markets on major international horse racing meets, with odds updated as fields and conditions are confirmed closer to race time. The same verified ID used for cricket and other sports covers horse racing, and UPI withdrawals settle in 5 to 30 minutes after a race."
        points={[
          "Win, place and each-way markets",
          "Major international race meets",
          "Odds update as fields are confirmed",
          "Same ID as cricket and other sports",
          "UPI withdrawals in 5–30 minutes",
        ]}
        keywords={["horse racing betting", "horse racing betting india", "mahadev book horse racing", "each way betting"]}
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

      <FAQSection title="Horse Racing Betting — FAQs" items={horseFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Today's race meets, covered</h2>
        <p className="mt-3 text-muted-foreground">Get a verified ID and check the win and place odds before the gates open.</p>
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
        excludePath="/horse-racing-betting"
        title="Keep exploring"
        subtitle="Cricket tournaments and other sports on Mahadev Book."
      />
    </>
  );
}
