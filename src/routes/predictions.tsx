import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";

export const Route = createFileRoute("/predictions")({
  head: () => ({
    meta: [
      { title: "Match Predictions 2026 — Expert Cricket & Football Tips | Cricbet99" },
      { name: "description", content: "Data-backed match predictions for IPL 2026, T20 World Cup, FIFA and top football leagues. Form, pitch reports and value bets — updated daily on Cricbet99." },
      { property: "og:title", content: "Match Predictions — Cricbet99" },
      { property: "og:description", content: "Expert daily predictions across cricket, football and tennis." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/predictions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/predictions" }],
  }),
  component: Predictions,
});

const preds = [
  { title: "How our predictions work", body: "Every Cricbet99 prediction combines form, venue history, pitch/weather data, injury news and market movement — not gut feel. We publish the reasoning so you can decide, not blindly follow." },
  { title: "Cricket edge", body: "Session-by-session breakdowns, powerplay projections and death-overs modelling for IPL, T20 World Cup, ODIs and Tests." },
  { title: "Football edge", body: "xG-based 1X2, BTTS and Asian-handicap picks for the Premier League, La Liga, Serie A, UCL and FIFA World Cup 2026." },
  { title: "Value over volume", body: "We publish fewer picks, not more. Every call flags implied probability, our probability and the edge — so you only stake when the market is wrong." },
  { title: "Responsible staking", body: "Every prediction includes a suggested stake band (1u–3u) so bankroll discipline stays intact even on hot streaks." },
  { title: "Live cash-out signals", body: "In-play alerts on WhatsApp let you cash out or double down when momentum, wickets or red cards swing the market." },
];

function Predictions() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Match Predictions"
        title={<>Data-driven picks, <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>not guesswork.</span></>}
        subtitle="Cricbet99 publishes daily match predictions for IPL, international cricket, top football leagues and Grand Slam tennis — grounded in form, venue, pitch and market data."
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {preds.map((p) => (
            <div key={p.title} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand heading="Get today's Cricbet99 predictions." sub="Message us on WhatsApp for today's expert picks with implied odds and value edge." />
    </SiteLayout>
  );
}
