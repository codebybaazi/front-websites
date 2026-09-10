import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Trophy, Zap, Wallet } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const wplFaqs: FAQItem[] = [
  { q: "What WPL markets does Mahadev Book offer?", a: "Match winner, top run-scorer, top wicket-taker, session runs and live in-play odds, covering every WPL fixture through the season." },
  { q: "Is WPL betting available alongside IPL?", a: "Yes, the same ID covers both. Many players run WPL and IPL markets side by side without needing a separate account." },
  { q: "How deep is the market coverage compared to IPL?", a: "WPL runs the same market types as IPL — match, session and player markets — with slightly fewer options per game simply because the tournament has fewer teams and matches." },
  { q: "How do I get an ID for WPL?", a: "Message support on WhatsApp. The same setup process applies regardless of which tournament you plan to bet on first." },
];

export const Route = createFileRoute("/wpl-betting")({
  head: () => ({
    meta: [
      { title: "WPL Betting on Mahadev Book — Women's Premier League Odds" },
      { name: "description", content: "Bet on the Women's Premier League with Mahadev Book — match winner, session and player markets, live in-play odds, same ID as IPL." },
      { property: "og:title", content: "WPL Betting on Mahadev Book — Women's Premier League Odds" },
        { name: "twitter:title", content: "WPL Betting on Mahadev Book — Women's Premier League Odds" },
      { property: "og:description", content: "WPL markets on Mahadev Book — match, session and player odds under the same ID as IPL." },
      { property: "og:url", content: "https://mahadevbookss.com/wpl-betting" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "WPL betting on Mahadev Book" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/wpl-betting" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(wplFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Sports", item: "https://mahadevbookss.com/sports" },
            { "@type": "ListItem", position: 3, name: "WPL", item: "https://mahadevbookss.com/wpl-betting" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/wpl-betting",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: WplBettingPage,
});

const markets = [
  { icon: Trophy, t: "Match winner", d: "Priced for every WPL fixture from the opening match to the final." },
  { icon: Zap, t: "Session & player markets", d: "Runs in a set of overs, top run-scorer and top wicket-taker, updated through the season." },
  { icon: Zap, t: "Live in-play", d: "Odds move as the innings develops, not just at the toss." },
  { icon: Wallet, t: "Fast payouts", d: "The same 5-to-30-minute UPI withdrawal window as every other tournament on the platform." },
];

function WplBettingPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Cricket
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient-gold">WPL Betting</span> on Mahadev Book
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Women's Premier League markets under the same ID as IPL — match, session and player
          odds, with live in-play pricing throughout the season.
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
        title="AI Overview — WPL Betting on Mahadev Book"
        summary="Mahadev Book covers the Women's Premier League with match-winner, session and player-level markets like top run-scorer and top wicket-taker, updated through live in-play pricing. The same verified ID used for IPL covers WPL, and UPI withdrawals settle in 5 to 30 minutes."
        points={[
          "Match markets for every WPL fixture",
          "Session runs and player-level markets",
          "Live in-play pricing throughout matches",
          "Same ID covers both WPL and IPL",
          "UPI withdrawals in 5–30 minutes",
          "Covers the full WPL season",
        ]}
        keywords={["wpl betting", "women's premier league betting", "mahadev book wpl", "wpl betting id"]}
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

      <FAQSection title="WPL Betting — FAQs" items={wplFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">One ID for WPL and IPL both</h2>
        <p className="mt-3 text-muted-foreground">Set up once, bet on either tournament whenever it's live.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get My ID</span>
          </a>
          <Link to="/ipl-betting" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            IPL betting markets
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Sports"
        excludePath="/wpl-betting"
        title="Keep exploring"
        subtitle="More cricket tournaments and other sports on Mahadev Book."
      />
    </>
  );
}
