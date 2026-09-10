import { abs } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/sports-id")({
  head: () => ({
    meta: [
      { title: "Online Sports ID — 30+ Sports, One Login | Sprinters" },
      { name: "description", content: "Get a verified Sprinters Sports ID and bet on cricket, football, tennis, kabaddi, horse racing and 30+ sports with one login." },
      { property: "og:title", content: "Online Sports ID | Sprinters" },
      { property: "og:description", content: "30+ sports. One verified ID. Best odds across India's top exchanges." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/sports-id") }
    ],
    links: [{ rel: "canonical", href: "/sports-id" }],
    scripts: [
        ...(buildPageFaqLd("/sports-id") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/sports-id")) }] : []),
    ],
  }),
  component: () => (
    <ContentPage
      kicker="Sports ID"
      title="One ID. Thirty Sports."
      intro="The most popular ID in India for a reason — cricket, football, tennis, kabaddi, hockey, basketball, horse racing, esports and more, all under one verified login."
      sections={[
        {
          heading: "What's included",
          bullets: [
            "Access to India's top betting exchanges",
            "Best-of-market odds, refreshed live",
            "Live streaming on select matches",
            "Instant deposits from ₹100, withdrawals within 24 hours",
            "24/7 support in Hindi, English, Telugu and Tamil",
          ],
        },
        {
          heading: "How to get yours",
          bullets: [
            "Message us on WhatsApp",
            "Share your name and preferred username",
            "Verify with OTP",
            "Deposit and start playing — ID delivered in minutes",
          ],
        },
      ]}
    />
  ),
});
