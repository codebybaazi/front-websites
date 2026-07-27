import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/cricbet99-vs-fairdeal.json";

export const Route = createFileRoute("/cricbet99-vs-fairdeal")({
  head: () => ({
    meta: [
      { title: "Cricbet99 vs Fairdeal — Cricbet99" },
      { name: "description", content: "Compare Cricbet99 vs fairdeal: features, odds, payouts and support. 24/7 WhatsApp help and instant UPI payouts on India's sharpest cricket ID." },
      { property: "og:title", content: "Cricbet99 vs Fairdeal — Cricbet99" },
      { property: "og:description", content: "Compare Cricbet99 vs fairdeal: features, odds, payouts and support. 24/7 WhatsApp help and instant UPI payouts on India's sharpest cricket ID." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cricbet99-vs-fairdeal" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cricbet99-vs-fairdeal" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_cricbet99_vs_fairdeal,
});

function Page_cricbet99_vs_fairdeal() {
  return <LongFormPage content={content} />;
}
