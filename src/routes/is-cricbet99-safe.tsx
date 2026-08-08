import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/is-cricbet99-safe.json";

export const Route = createFileRoute("/is-cricbet99-safe")({
  head: () => ({
    meta: [
      { title: "Is Cricbet99 Safe? — Security, Payouts & Trust Review" },
      { name: "description", content: "Is Cricbet99 safe for Indian players? An honest review of security protocols, UPI payout speed and player protection since 2020." },
      { property: "og:title", content: "Is Cricbet99 Safe? — Security & Payouts Review" },
      { property: "og:description", content: "Comprehensive security review of Cricbet99: bank-grade encryption and 5-minute UPI payouts." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/is-cricbet99-safe" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/is-cricbet99-safe" }],
    scripts: [
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : []),
      {
        type: "application/ld+json",
        children: JSON.stringify(buildArticleJsonLd(content, "https://cricbet99.com/is-cricbet99-safe")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/is-cricbet99-safe", "Is Cricbet99 Safe?")),
      }
    ],
  }),
  component: Page_is_cricbet99_safe,
});

function Page_is_cricbet99_safe() {
  return <LongFormPage content={content} />;
}
