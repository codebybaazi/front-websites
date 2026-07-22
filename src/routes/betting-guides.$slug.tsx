import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPage, ContentNotFound } from "@/components/ContentPage";
import { getGuide } from "@/data/guides";

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
    return {
      meta: [
        { title: p.title },
        { name: "description", content: p.description },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
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
