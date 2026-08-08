import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/privacy-policy.json";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Official Cricbet99 Data Protection & Security | Cricbet99 Official" },
      { name: "description", content: "Read the official Cricbet99 Privacy Policy. Learn how we protect your personal information, banking details, and WhatsApp communication with bank-grade encryption." },
      { property: "og:title", content: "Privacy Policy — Official Cricbet99 Data Protection & Security" },
      { property: "og:description", content: "Read the official Cricbet99 Privacy Policy. Learn how we protect your personal information, banking details, and WhatsApp communication with bank-grade encryption." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/privacy-policy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/privacy-policy", "Privacy Policy — Official Cricbet99 Data Protection & Security")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_privacy_policy,
});

function Page_privacy_policy() {
  return <LongFormPage content={content} />;
}
