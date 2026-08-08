import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/is-cricbet99-real.json";

export const Route = createFileRoute("/is-cricbet99-real")({
  head: () => ({
    meta: [
      { title: "Is Cricbet99 Real or Fake? 100% Legitimacy & Trust Verification | Cricbet99 Official" },
      { name: "description", content: "Is Cricbet99 real? We provide full transparency into our 6-year operating history, verified payout receipts, and human-led support that serves 1.2 Lakh+ Indian players." },
      { property: "og:title", content: "Is Cricbet99 Real or Fake? 100% Legitimacy & Trust Verification" },
      { property: "og:description", content: "Is Cricbet99 real? We provide full transparency into our 6-year operating history, verified payout receipts, and human-led support that serves 1.2 Lakh+ Indian players." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/is-cricbet99-real" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/is-cricbet99-real", "Is Cricbet99 Real or Fake? 100% Legitimacy & Trust Verification")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_is_cricbet99_real,
});

function Page_is_cricbet99_real() {
  return <LongFormPage content={content} />;
}
