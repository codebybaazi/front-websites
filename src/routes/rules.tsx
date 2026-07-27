import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/rules.json";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Rules & Regulations — Cricbet99" },
      { name: "description", content: "Cricbet99 Rules & Regulations on Cricbet99: fair play rules, market settlement and account conduct. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Rules & Regulations — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Rules & Regulations on Cricbet99: fair play rules, market settlement and account conduct. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/rules" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_rules,
});

function Page_rules() {
  return <LongFormPage content={content} />;
}
