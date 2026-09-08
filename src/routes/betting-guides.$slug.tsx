import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPage, ContentNotFound } from "@/components/ContentPage";
import { getGuide } from "@/data/guides";
import { deriveFaqsFromPage } from "@/lib/derive-page-faqs";
import { CONTENT_PUBLISHED_DATE, CONTENT_MODIFIED_DATE } from "@/data/site";

export const Route = createFileRoute("/betting-guides/$slug")({
  loader: ({ params }) => {
    const page = getGuide(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Guide not found — Lotus365" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.page;
    const url = `https://lotus365id.com/betting-guides/${params.slug}`;
    // (SEO fix) Reuse the real "guides" category OG image already shipped in
    // public/og/ — every betting-guide page previously had no og:image at all.
    const ogImage = "https://lotus365id.com/og/guides.jpg";
    return {
      meta: [
        { title: p.title },
        { name: "description", content: p.description },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.description,
            image: [ogImage],
            datePublished: CONTENT_PUBLISHED_DATE,
            dateModified: CONTENT_MODIFIED_DATE,
            author: { "@type": "Organization", name: "Lotus365" },
            publisher: { "@type": "Organization", name: "Lotus365" },
            mainEntityOfPage: url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
              { "@type": "ListItem", position: 2, name: "Betting Guides", item: "https://lotus365id.com/betting-guides" },
              { "@type": "ListItem", position: 3, name: p.title, item: url },
            ],
          }),
        },
        // (AEO fix) HowTo schema — every guide's `sections` array is already an
        // ordered walkthrough; expose it as real HowToStep entries for step
        // rich-results instead of only generic Article markup.
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: p.title,
            description: p.description,
            step: p.sections.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.heading.replace(/^\d+\.\s*/, ""),
              text: s.body,
            })),
          }),
        },
        // (AEO fix) FAQPage schema derived from this guide's own content.
        ...(() => {
          const faqs = deriveFaqsFromPage(p);
          if (faqs.length === 0) return [];
          return [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            },
          ];
        })(),
      ],
    };
  },
  component: GuideRoute,
  notFoundComponent: () => <ContentNotFound slug="betting-guides" />,
  errorComponent: () => <ContentNotFound slug="betting-guides" />,
});

function GuideRoute() {
  const { page } = Route.useLoaderData();
  return <ContentPage page={page} />;
}
