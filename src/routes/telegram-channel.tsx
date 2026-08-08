import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/telegram-channel.json";

export const Route = createFileRoute("/telegram-channel")({
  head: () => ({
    meta: [
      { title: "Official Cricbet99 Telegram | Live Tips & Odds" },
      { name: "description", content: "Join the official Cricbet99 Telegram channel for real-time match previews, expert betting tips, and exclusive odds updates for IPL 2026." },
      { property: "og:title", content: "Cricbet99 Telegram Hub | Expert Insights" },
      { property: "og:description", content: "Get the latest insights delivered directly to your phone. Join our growing Telegram community for professional betting analysis." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/telegram-channel" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/telegram-channel", "Official Cricbet99 Telegram | Live Tips & Odds")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_telegram_channel,
});

function Page_telegram_channel() {
  return <LongFormPage content={content} />;
}
