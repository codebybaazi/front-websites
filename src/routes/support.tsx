import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/support.json";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Support Center — Cricbet99" },
      { name: "description", content: "Cricbet99 Support Center on Cricbet99: 24/7 human support on WhatsApp, phone and email. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Support Center — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Support Center on Cricbet99: 24/7 human support on WhatsApp, phone and email. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/support", "Cricbet99 Support Center")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_support,
});

function Page_support() {
  return <LongFormPage content={content} />;
}
