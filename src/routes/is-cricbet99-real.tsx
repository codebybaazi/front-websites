import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/is-cricbet99-real.json";

export const Route = createFileRoute("/is-cricbet99-real")({
  head: () => ({
    meta: [
      { title: "Is Cricbet99 Real or Fake? — Cricbet99" },
      { name: "description", content: "Is Cricbet99 Real or Fake? on Cricbet99: the honest answer about Cricbet99's legitimacy in India. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Is Cricbet99 Real or Fake? — Cricbet99" },
      { property: "og:description", content: "Is Cricbet99 Real or Fake? on Cricbet99: the honest answer about Cricbet99's legitimacy in India. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/is-cricbet99-real" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_is_cricbet99_real,
});

function Page_is_cricbet99_real() {
  return <LongFormPage content={content} />;
}
