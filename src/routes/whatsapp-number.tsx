import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/whatsapp-number.json";

export const Route = createFileRoute("/whatsapp-number")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Official WhatsApp Number — Cricbet99" },
      { name: "description", content: "Cricbet99 Official WhatsApp Number on Cricbet99: official Cricbet99 WhatsApp support — verified number and 24/7 help. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Official WhatsApp Number — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Official WhatsApp Number on Cricbet99: official Cricbet99 WhatsApp support — verified number and 24/7 help. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/whatsapp-number" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_whatsapp_number,
});

function Page_whatsapp_number() {
  return <LongFormPage content={content} />;
}
