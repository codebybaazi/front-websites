import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPage, ContentNotFound } from "@/components/ContentPage";
import { getPage, resolvePageSlug } from "@/data/pages";
import { deriveFaqsFromPage, toFaqPageJsonLd } from "@/lib/derive-page-faqs";
import { CONTENT_PUBLISHED_DATE, CONTENT_MODIFIED_DATE } from "@/data/site";

export const Route = createFileRoute("/$page")({
  loader: ({ params }) => {
    const page = getPage(params.page);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found — Lotus365" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.page;
    const url = `https://lotus365id.com/${resolvePageSlug(params.page)}`;
    // (SEO fix) These 70+ static pages previously had no og:image — only the
    // homepage did — so social shares fell back to a blank preview card.
    // Reuse the real site-wide OG asset already in public/.
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
            mainEntityOfPage: url,
            datePublished: CONTENT_PUBLISHED_DATE,
            dateModified: CONTENT_MODIFIED_DATE,
            author: { "@type": "Organization", name: "Lotus365" },
            publisher: {
              "@type": "Organization",
              name: "Lotus365",
              logo: { "@type": "ImageObject", url: "/favicon.png" },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
              { "@type": "ListItem", position: 2, name: p.title, item: url },
            ],
          }),
        },
        // (AEO fix) FAQPage schema derived from this page's own intro/section
        // text — genuinely unique per page, not a shared template.
        ...(() => {
          const faqs = deriveFaqsFromPage(p);
          if (faqs.length === 0) return [];
          return [
            {
              type: "application/ld+json",
              children: JSON.stringify(toFaqPageJsonLd(faqs)),
            },
          ];
        })(),
      ],
    };
  },
  component: PageRoute,
  notFoundComponent: () => <ContentNotFound slug="" />,
  errorComponent: ({ error }) => <ContentNotFound slug={String(error)} />,
});

function PageRoute() {
  const { page } = Route.useLoaderData();
  return <ContentPage page={page} />;
}
