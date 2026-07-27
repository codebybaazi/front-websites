import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/register.json";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register on Cricbet99 — Cricbet99" },
      { name: "description", content: "Register on Cricbet99 and open your verified ID in under 2 minutes via WhatsApp. Instant UPI payouts and 24/7 support." },
      { property: "og:title", content: "Register on Cricbet99 — Cricbet99" },
      { property: "og:description", content: "Register on Cricbet99 and open your verified ID in under 2 minutes via WhatsApp. Instant UPI payouts and 24/7 support." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_register,
});

function Page_register() {
  return <LongFormPage content={content} />;
}
