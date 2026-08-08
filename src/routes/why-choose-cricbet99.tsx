import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/why-choose-cricbet99.json";

export const Route = createFileRoute("/why-choose-cricbet99")({
  head: () => ({
    meta: [
      { title: "Why Choose Cricbet99 — Cricbet99" },
      { name: "description", content: "Why Choose Cricbet99 on Cricbet99: the top reasons Indian players trust Cricbet99. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Why Choose Cricbet99 — Cricbet99" },
      { property: "og:description", content: "Why Choose Cricbet99 on Cricbet99: the top reasons Indian players trust Cricbet99. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-cricbet99" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd, buildBreadcrumbJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_why_choose_cricbet99,
});

function Page_why_choose_cricbet99() {
  return <LongFormPage content={content} />;
}
