import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/esports.json";

export const Route = createFileRoute("/esports")({
  head: () => ({
    meta: [
      { title: "Esports Betting on Cricbet99 — Cricbet99" },
      { name: "description", content: "Esports Betting on Cricbet99 on Cricbet99: live CS2, Dota 2, Valorant and LoL markets. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Esports Betting on Cricbet99 — Cricbet99" },
      { property: "og:description", content: "Esports Betting on Cricbet99 on Cricbet99: live CS2, Dota 2, Valorant and LoL markets. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/esports" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_esports,
});

function Page_esports() {
  return <LongFormPage content={content} />;
}
