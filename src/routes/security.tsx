import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/security.json";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Security — Cricbet99" },
      { name: "description", content: "Cricbet99 Security on Cricbet99: how we keep your account, deposits and data safe. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Security — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Security on Cricbet99: how we keep your account, deposits and data safe. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/security" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/security", "Cricbet99 Security")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_security,
});

function Page_security() {
  return <LongFormPage content={content} />;
}
