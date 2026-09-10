import { abs } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/laser247")({
  head: () => ({
    meta: [
      { title: "Laser247 ID via Sprinters — Sports + Casino Access" },
      { name: "description", content: "Verified Laser247 IDs delivered on WhatsApp by Sprinters. Full sportsbook, live casino, instant deposits and 24-hour payouts." },
      { property: "og:title", content: "Laser247 ID | Sprinters" },
      { property: "og:description", content: "Verified Laser247 access — full sports + casino, delivered on WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/laser247") }
    ],
    links: [{ rel: "canonical", href: "/laser247" }],
    scripts: [
        ...(buildPageFaqLd("/laser247") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/laser247")) }] : []),
    ],
  }),
  component: () => (
    <ContentPage
      kicker="Laser247"
      title="Your Laser247 ID, via Sprinters"
      intro="Laser247 is a premium sports and casino platform trusted across India. Sprinters gets you set up in minutes with dedicated local support."
      sections={[
        {
          heading: "Platform highlights",
          bullets: [
            "30+ sports with live in-play markets",
            "Live casino from Evolution, Ezugi, Pragmatic",
            "Aviator, Teen Patti, Andar Bahar",
            "Match streaming on select events",
          ],
        },
        {
          heading: "Sprinters advantage",
          bullets: [
            "Verified ID via WhatsApp in minutes",
            "Instant UPI deposits",
            "24-hour withdrawal guarantee",
            "24/7 Hindi/English concierge",
          ],
        },
      ]}
    />
  ),
});
