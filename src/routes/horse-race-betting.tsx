import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/horse-race-betting")({
  head: () => ({
    meta: [
      { title: "Horse Race Betting ID — Indian & International Turf | Sprinters" },
      { name: "description", content: "Bet on horse racing from Mumbai, Bangalore, Kolkata, Royal Ascot, Melbourne Cup and more with a verified Sprinters ID." },
      { property: "og:title", content: "Horse Race Betting ID | Sprinters" },
      { property: "og:description", content: "Indian turf clubs plus international racing. One ID, every meet." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/horse-race-betting" }
    ],
    links: [{ rel: "canonical", href: "/horse-race-betting" }],
  }),
  component: () => (
    <ContentPage
      kicker="Horse Race Betting"
      title="The Turf. On Your Terms."
      intro="Follow every meet across India's premier turf clubs and the biggest international races — with fast odds and instant payouts."
      sections={[
        {
          heading: "Race tracks covered",
          bullets: [
            "RWITC Mumbai, Bangalore Turf Club, Royal Calcutta",
            "Hyderabad, Mysore, Delhi, Chennai and Pune",
            "Royal Ascot, Melbourne Cup, Kentucky Derby",
            "Dubai World Cup and Breeders' Cup",
          ],
        },
        {
          heading: "Bet types",
          body: "Win, place, show, exacta, trifecta, quinella, forecast — plus live in-race markets on select events.",
        },
      ]}
    />
  ),
});
