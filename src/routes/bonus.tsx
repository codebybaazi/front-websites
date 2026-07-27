import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/bonus.json";

export const Route = createFileRoute("/bonus")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Bonuses & Promotions — Cricbet99" },
      { name: "description", content: "Cricbet99 Bonuses & Promotions on Cricbet99: exclusive welcome, reload and loyalty bonuses. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Bonuses & Promotions — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Bonuses & Promotions on Cricbet99: exclusive welcome, reload and loyalty bonuses. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/bonus" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_bonus,
});

function Page_bonus() {
  return <LongFormPage content={content} />;
}
