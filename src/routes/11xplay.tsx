import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/11xplay")({
  head: () => ({
    meta: [
      { title: "11xplay ID via Sprinters — Multi-Sport Betting" },
      { name: "description", content: "Verified 11xplay IDs from Sprinters. Full multi-sport betting, casino, card games and instant Indian payments." },
      { property: "og:title", content: "11xplay ID | Sprinters" },
      { property: "og:description", content: "11xplay betting IDs delivered on WhatsApp — with local Indian support." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/11xplay" }
    ],
    links: [{ rel: "canonical", href: "/11xplay" }],
  }),
  component: () => (
    <ContentPage
      kicker="11xplay"
      title="Your 11xplay ID, via Sprinters"
      intro="11xplay is a fast-growing multi-sport platform popular for its wide market coverage. Sprinters delivers verified 11xplay IDs on WhatsApp."
      sections={[
        {
          heading: "What's on 11xplay",
          bullets: [
            "Cricket, football, tennis, kabaddi and more",
            "Live casino and card games",
            "Fast-updating odds and cash-out",
            "Fantasy-style and prop markets",
          ],
        },
        {
          heading: "Why go through Sprinters",
          bullets: [
            "One WhatsApp for the entire lifecycle",
            "Instant deposits, 24-hour withdrawals",
            "Personal support manager",
          ],
        },
      ]}
    />
  ),
});
