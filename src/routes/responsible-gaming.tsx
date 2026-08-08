import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/responsible-gaming.json";

export const Route = createFileRoute("/responsible-gaming")({
  head: () => ({
    meta: [
      { title: "Responsible Gaming — Play Safely with Cricbet99 | Cricbet99 Official" },
      { name: "description", content: "Cricbet99 is committed to responsible gaming. Use our tools for deposit limits, session timers, and self-exclusion to keep your betting fun and safe." },
      { property: "og:title", content: "Responsible Gaming — Play Safely with Cricbet99" },
      { property: "og:description", content: "Cricbet99 is committed to responsible gaming. Use our tools for deposit limits, session timers, and self-exclusion to keep your betting fun and safe." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/responsible-gaming" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/responsible-gaming", "Responsible Gaming — Play Safely with Cricbet99")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_responsible_gaming,
});

function Page_responsible_gaming() {
  return <LongFormPage content={content} />;
}
