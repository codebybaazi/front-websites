import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/cricbet99-vs-reddybook.json";

export const Route = createFileRoute("/cricbet99-vs-reddybook")({
  head: () => ({
    meta: [
      { title: "Cricbet99 vs Reddy Book — Cricbet99" },
      { name: "description", content: "Compare Cricbet99 vs reddybook: features, odds, payouts and support. 24/7 WhatsApp help and instant UPI payouts on India's sharpest cricket ID." },
      { property: "og:title", content: "Cricbet99 vs Reddy Book — Cricbet99" },
      { property: "og:description", content: "Compare Cricbet99 vs reddybook: features, odds, payouts and support. 24/7 WhatsApp help and instant UPI payouts on India's sharpest cricket ID." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cricbet99-vs-reddybook" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cricbet99-vs-reddybook" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_cricbet99_vs_reddybook,
});

function Page_cricbet99_vs_reddybook() {
  return <LongFormPage content={content} />;
}
