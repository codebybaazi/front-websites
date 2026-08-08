import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/demo-id.json";

export const Route = createFileRoute("/demo-id")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Demo ID — Cricbet99" },
      { name: "description", content: "Cricbet99 Demo ID on Cricbet99: try Cricbet99 free with a demo ID before you deposit. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Demo ID — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Demo ID on Cricbet99: try Cricbet99 free with a demo ID before you deposit. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/demo-id" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/demo-id", "Cricbet99 Demo ID")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_demo_id,
});

function Page_demo_id() {
  return <LongFormPage content={content} />;
}
