import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/tennis-betting")({
  head: () => ({
    meta: [
      { title: "Tennis Betting ID — Grand Slams, ATP & WTA | Sprinters" },
      { name: "description", content: "Bet on all four Grand Slams, ATP, WTA, Davis Cup and every ATP 1000. Verified Sprinters ID, sharp odds, live cash-out." },
      { property: "og:title", content: "Tennis Betting ID | Sprinters" },
      { property: "og:description", content: "Grand Slams, ATP, WTA — full tennis coverage with one Sprinters ID." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tennis-betting" }
    ],
    links: [{ rel: "canonical", href: "/tennis-betting" }],
  }),
  component: () => (
    <ContentPage
      kicker="Tennis Betting"
      title="Every Set. Every Slam."
      intro="Australian Open, Roland Garros, Wimbledon, US Open — plus the full ATP and WTA calendar. Bet by match, set, game or point."
      sections={[
        {
          heading: "Tournaments we cover",
          bullets: [
            "All 4 Grand Slams",
            "ATP 1000, 500, 250 events",
            "WTA 1000 and Premier tournaments",
            "Davis Cup, Billie Jean King Cup, Laver Cup",
            "Challenger & ITF events",
          ],
        },
        {
          heading: "Markets",
          body: "Match winner, set betting, correct score, total games, over/under sets, first set winner, tie-break, player specials.",
        },
      ]}
    />
  ),
});
