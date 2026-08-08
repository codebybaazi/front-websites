import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/basketball.json";

export const Route = createFileRoute("/basketball")({
  head: () => ({
    meta: [
      { title: "Basketball Betting on Cricbet99 — Cricbet99" },
      { name: "description", content: "Basketball Betting on Cricbet99 on Cricbet99: live NBA, EuroLeague and international basketball markets. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Basketball Betting on Cricbet99 — Cricbet99" },
      { property: "og:description", content: "Basketball Betting on Cricbet99 on Cricbet99: live NBA, EuroLeague and international basketball markets. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/basketball" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/basketball", "Basketball Betting on Cricbet99")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_basketball,
});

function Page_basketball() {
  return <LongFormPage content={content} />;
}
