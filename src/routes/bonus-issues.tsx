import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/bonus-issues.json";

export const Route = createFileRoute("/bonus-issues")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Bonus Not Credited? — Cricbet99" },
      { name: "description", content: "Cricbet99 Bonus Not Credited? on Cricbet99: fix missing bonuses, wagering issues and promo credit delays. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Bonus Not Credited? — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Bonus Not Credited? on Cricbet99: fix missing bonuses, wagering issues and promo credit delays. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/bonus-issues" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/bonus-issues", "Cricbet99 Bonus Not Credited?")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_bonus_issues,
});

function Page_bonus_issues() {
  return <LongFormPage content={content} />;
}
