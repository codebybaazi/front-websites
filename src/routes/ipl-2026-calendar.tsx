import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/ipl-2026-calendar.json";

export const Route = createFileRoute("/ipl-2026-calendar")({
  head: () => ({
    meta: [
      { title: "IPL 2026 Calendar — Cricbet99" },
      { name: "description", content: "IPL 2026 Calendar on Cricbet99: the full IPL 2026 fixture calendar and match previews. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "IPL 2026 Calendar — Cricbet99" },
      { property: "og:description", content: "IPL 2026 Calendar on Cricbet99: the full IPL 2026 fixture calendar and match previews. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ipl-2026-calendar" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_ipl_2026_calendar,
});

function Page_ipl_2026_calendar() {
  return <LongFormPage content={content} />;
}
