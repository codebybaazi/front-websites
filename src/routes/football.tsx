import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";

export const Route = createFileRoute("/football")({
  head: () => ({
    meta: [
      { title: "Football Betting on Cricbet99 — EPL, La Liga & UEFA" },
      { name: "description", content: "Bet on Premier League, La Liga, Bundesliga, Serie A, UEFA Champions League, ISL and FIFA fixtures with deep in-play markets on Cricbet99." },
      { property: "og:title", content: "Football Betting on Cricbet99" },
      { property: "og:description", content: "Every top league covered with match winner, BTTS, handicaps and in-play markets." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Football,
});

const leagues = [
  { name: "Premier League", desc: "Every matchday from Anfield to the Etihad — match winner, both teams to score, correct score and in-play totals." },
  { name: "La Liga", desc: "Real Madrid, Barcelona and the Spanish top flight with deep player and team markets across the season." },
  { name: "UEFA Champions League", desc: "Group stage to final. Live tournament outrights, aggregate winners and market-by-market in-play betting." },
  { name: "Bundesliga & Serie A", desc: "Germany and Italy's premier leagues fully covered — goal handicaps, first-half markets and player props." },
  { name: "Indian Super League", desc: "Home-grown football with match winners, top scorers and live in-game markets on every ISL fixture." },
  { name: "FIFA internationals", desc: "World Cup qualifiers, UEFA Nations League and friendlies with tournament and match-level markets." },
];

function Football() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Football"
        title={<>Every league, every kick-off, one <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Cricbet99 ID.</span></>}
        subtitle="From the Premier League to the ISL, Cricbet99 covers every major football competition with live in-play markets, competitive odds and fast settlement — so you never miss a moment of the action."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leagues.map((l) => (
            <div key={l.name} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <h3 className="text-lg font-bold">{l.name}</h3>
              <p className="mt-2 text-sm text-foreground/70">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand heading="Kick off with a Cricbet99 ID." sub="Live football odds, deep markets and instant payouts — all on WhatsApp." />
    </SiteLayout>
  );
}
