import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/big-win-stories.json";

export const Route = createFileRoute("/big-win-stories")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Big Win Stories — Cricbet99" },
      { name: "description", content: "Cricbet99 Big Win Stories on Cricbet99: real winners, real payouts — verified Cricbet99 success stories. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:title", content: "Cricbet99 Big Win Stories — Cricbet99" },
      { property: "og:description", content: "Cricbet99 Big Win Stories on Cricbet99: real winners, real payouts — verified Cricbet99 success stories. 24/7 WhatsApp support, instant UPI payouts and India's sharpest odds since 2020." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/big-win-stories" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/big-win-stories", "Cricbet99 Big Win Stories")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_big_win_stories,
});

function Page_big_win_stories() {
  return <LongFormPage content={content} />;
}
