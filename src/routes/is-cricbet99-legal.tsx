import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/is-cricbet99-legal.json";

export const Route = createFileRoute("/is-cricbet99-legal")({
  head: () => ({
    meta: [
      { title: "Is Cricbet99 Legal? — Cricbet99" },
      { name: "description", content: "Is Cricbet99 legal in India? A clear look at the legal position of online cricket betting and how Cricbet99 operates." },
      { property: "og:title", content: "Is Cricbet99 Legal? — Cricbet99" },
      { property: "og:description", content: "Is Cricbet99 legal in India? A clear look at the legal position of online cricket betting and how Cricbet99 operates." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/is-cricbet99-legal" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_is_cricbet99_legal,
});

function Page_is_cricbet99_legal() {
  return <LongFormPage content={content} />;
}
