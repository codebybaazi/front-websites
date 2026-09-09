import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Trophy, Zap } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Sports Betting on Mahadev Book — Cricket, Football, Kabaddi & More" },
      { name: "description", content: "Every sport you can bet on with a Mahadev Book ID — IPL, T20 World Cup, WPL, football, kabaddi, basketball, horse racing and esports, all under one login." },
      { property: "og:title", content: "Sports Betting on Mahadev Book — Cricket, Football, Kabaddi & More" },
      { property: "og:description", content: "IPL, T20 World Cup, WPL, football, kabaddi, basketball, horse racing and esports — one Mahadev Book ID, every sport." },
      { property: "og:url", content: "https://mahadevbookss.com/sports" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Sports betting on Mahadev Book" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/sports" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Sports", item: "https://mahadevbookss.com/sports" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/sports",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: SportsPage,
});

const cricket = [
  { t: "IPL", d: "200+ markets per match, session and fancy odds included.", to: "/ipl-betting" as const },
  { t: "T20 World Cup", d: "Every knockout and group match with ICC-standard pricing.", to: "/t20-world-cup-betting" as const },
  { t: "Champions Trophy", d: "Full tournament coverage with live in-play markets.", to: "/champions-trophy-betting" as const },
  { t: "WPL", d: "Women's Premier League markets alongside the men's game.", to: "/wpl-betting" as const },
];

const other = [
  { t: "Football", d: "EPL, La Liga, Serie A, UCL and FIFA World Cup 2026 markets.", to: "/football-betting" as const },
  { t: "Kabaddi", d: "Pro Kabaddi League and international raid-and-tackle markets.", to: "/kabaddi-betting" as const },
  { t: "Basketball", d: "NBA and Euroleague moneyline, spread and total markets.", to: "/basketball-betting" as const },
  { t: "Horse Racing", d: "Win, place and each-way markets on global race meets.", to: "/horse-racing-betting" as const },
  { t: "Esports", d: "CS, Dota 2 and Valorant match and map markets.", to: "/esports-betting" as const },
];

function SportsPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Sports
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          One ID, <span className="text-gradient-gold">every sport</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Cricket is the heart of Mahadev Book, but a single verified ID also covers football,
          kabaddi, basketball, horse racing and esports. Pick a sport below for its markets and
          how to get started.
        </p>
        <div className="mt-8">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get Your ID on WhatsApp</span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Sports Betting on Mahadev Book"
        summary="A Mahadev Book ID covers cricket (IPL, T20 World Cup, Champions Trophy, WPL), football (EPL, La Liga, Serie A, UCL, FIFA World Cup 2026), kabaddi, basketball, horse racing and esports under one login. Cricket carries the deepest market coverage, with 200+ markets per IPL match including session and fancy odds; other sports run standard moneyline, spread, total and outright markets."
        points={[
          "Cricket: IPL, T20 World Cup, Champions Trophy, WPL",
          "Football: EPL, La Liga, Serie A, UCL, FIFA World Cup 2026",
          "Kabaddi: Pro Kabaddi League and internationals",
          "Basketball: NBA and Euroleague",
          "Horse racing: global race meets",
          "Esports: CS, Dota 2, Valorant",
        ]}
        keywords={["mahadev book sports", "mahadev book sports betting", "cricket betting id", "mahadev book"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2"><Trophy className="h-6 w-6 text-primary" /> Cricket</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {cricket.map((c) => (
            <Link key={c.t} to={c.to} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{c.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2"><Zap className="h-6 w-6 text-primary" /> Other sports</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {other.map((c) => (
            <Link key={c.t} to={c.to} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{c.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Ready to place your first bet?</h2>
        <p className="mt-3 text-muted-foreground">One WhatsApp chat gets you a verified ID for every sport above.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get My ID</span>
          </a>
          <Link
            to="/matches"
            search={{ sport: "all", q: "" }}
            className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
          >
            Browse all matches
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Sports"
        excludePath="/sports"
        title="Keep exploring"
        subtitle="Fixtures, predictions and the platforms we support."
      />
    </>
  );
}
