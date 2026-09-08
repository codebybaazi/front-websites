import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPage, ContentNotFound } from "@/components/ContentPage";
import { getCase } from "@/data/cases";
import { deriveFaqsFromPage } from "@/lib/derive-page-faqs";
import { CONTENT_PUBLISHED_DATE, CONTENT_MODIFIED_DATE } from "@/data/site";

export const Route = createFileRoute("/case-study/$slug")({
  loader: ({ params }) => {
    const page = getCase(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study not found — Lotus365" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.page;
    const url = `https://lotus365id.com/case-study/${params.slug}`;
    // (SEO fix) Case studies have no dedicated category image, so fall back to
    // the real site-wide OG asset — previously these pages had no og:image at all.
    const ogImage = "https://lotus365id.com/og-lotus365.jpg";
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
              { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://lotus365id.com/case-study" },
              { "@type": "ListItem", position: 3, name: p.title, item: url },
            ],
          }),
        },
        // (AEO fix) FAQPage schema derived from this case study's own content.
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
  component: CaseRoute,
  notFoundComponent: () => <ContentNotFound slug="case-study" />,
  errorComponent: () => <ContentNotFound slug="case-study" />,
});

function CaseRoute() {
  const { page } = Route.useLoaderData();
  return <ContentPage page={page} />;
}
