import { abs } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/indian-card-games")({
  head: () => ({
    meta: [
      { title: "Indian Card Games — Teen Patti, Andar Bahar & Rummy | Sprinters" },
      { name: "description", content: "Play Teen Patti, Andar Bahar, 32 Cards, Rummy and Poker live with real dealers on Sprinters — 24/7, in Hindi and English." },
      { property: "og:title", content: "Indian Card Games | Sprinters" },
      { property: "og:description", content: "Teen Patti, Andar Bahar, Rummy — live dealers, real wins." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/indian-card-games") }
    ],
    links: [{ rel: "canonical", href: "/indian-card-games" }],
    scripts: [
        ...(buildPageFaqLd("/indian-card-games") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/indian-card-games")) }] : []),
    ],
  }),
  component: () => (
    <ContentPage
      kicker="Indian Card Games"
      title="The Games You Grew Up With."
      intro="Every classic Indian card game — reimagined live with real dealers, native-language commentary and instant payouts."
      sections={[
        {
          heading: "Games available",
          bullets: [
            "Teen Patti — classic, one-day, 20-20 and joker variants",
            "Andar Bahar — Bollywood-style and speed",
            "32 Cards Live",
            "Rummy — points, pool and deals",
            "Poker — Texas Hold'em cash & tournaments",
          ],
        },
        {
          heading: "Play safe, play smart",
          body: "All tables are RNG-certified and streamed in real time. Deposit as little as ₹100, withdraw within 24 hours.",
        },
      ]}
    />
  ),
});
