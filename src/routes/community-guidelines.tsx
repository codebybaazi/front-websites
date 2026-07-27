import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/community-guidelines.json";

export const Route = createFileRoute("/community-guidelines")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Community Guidelines — Cricbet99" },
      { name: "description", content: "Cricbet99 Community Guidelines on Cricbet99: rules of conduct that keep our community safe and fair. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Community Guidelines — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Community Guidelines on Cricbet99: rules of conduct that keep our community safe and fair. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/community-guidelines" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_community_guidelines,
});

function Page_community_guidelines() {
  return <LongFormPage content={content} />;
}
