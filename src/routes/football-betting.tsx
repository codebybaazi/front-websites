import { abs } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/football-betting")({
  head: () => ({
    meta: [
      { title: "Football Betting ID — EPL, UCL & World Cup | Sprinters" },
      { name: "description", content: "Bet on Premier League, Champions League, La Liga, Bundesliga, Serie A, ISL and every major football tournament with a Sprinters ID." },
      { property: "og:title", content: "Football Betting ID | Sprinters" },
      { property: "og:description", content: "Full football coverage — from EPL to ISL — with live odds and instant payouts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: abs("/football-betting") }
    ],
    links: [{ rel: "canonical", href: "/football-betting" }],
    scripts: [
        ...(buildPageFaqLd("/football-betting") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/football-betting")) }] : []),
    ],
  }),
  component: () => (
    <ContentPage
      kicker="Football Betting"
      title="The World's Game. Your One ID."
      intro="Follow every league you love — Premier League, La Liga, Serie A, Bundesliga, Ligue 1, ISL, UEFA Champions League and international fixtures — with a single Sprinters ID."
      sections={[
        {
          heading: "Leagues & competitions",
          bullets: [
            "Premier League, La Liga, Serie A, Bundesliga, Ligue 1",
            "UEFA Champions League, Europa League",
            "FIFA World Cup, Euros, Copa América, AFCON",
            "Indian Super League, I-League",
            "MLS, Brazilian Série A and top continental cups",
          ],
        },
        {
          heading: "Popular markets",
          body: "1X2, both teams to score, over/under goals, correct score, first goal scorer, corners, cards, halftime/fulltime, Asian handicap, and dozens of props per match.",
        },
        {
          heading: "Live in-play",
          body: "Odds update in real time as the match unfolds. Cash out early, chase momentum, or lock in profit — all from one dashboard.",
        },
      ]}
    />
  ),
});
