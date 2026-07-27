import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/what-is-cricbet99.json";

export const Route = createFileRoute("/what-is-cricbet99")({
  head: () => ({
    meta: [
      { title: "What Is Cricbet99? — Cricbet99" },
      { name: "description", content: "What Is Cricbet99? on Cricbet99: Cricbet99 explained — a complete overview for new players. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "What Is Cricbet99? — Cricbet99" },
      { property: "og:description", content: "What Is Cricbet99? on Cricbet99: Cricbet99 explained — a complete overview for new players. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/what-is-cricbet99" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_what_is_cricbet99,
});

function Page_what_is_cricbet99() {
  return <LongFormPage content={content} />;
}
