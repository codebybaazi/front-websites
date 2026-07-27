import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/telegram-channel.json";

export const Route = createFileRoute("/telegram-channel")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Telegram Channel — Cricbet99" },
      { name: "description", content: "Cricbet99 Telegram Channel on Cricbet99: join our Telegram for tips, odds and match previews. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Telegram Channel — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Telegram Channel on Cricbet99: join our Telegram for tips, odds and match previews. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/telegram-channel" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_telegram_channel,
});

function Page_telegram_channel() {
  return <LongFormPage content={content} />;
}
