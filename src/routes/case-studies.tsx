import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/case-studies.json";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Case Studies — Cricbet99" },
      { name: "description", content: "Cricbet99 Case Studies on Cricbet99: real member case studies — strategies, budgets and outcomes. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Case Studies — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Case Studies on Cricbet99: real member case studies — strategies, budgets and outcomes. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_case_studies,
});

function Page_case_studies() {
  return <LongFormPage content={content} />;
}
