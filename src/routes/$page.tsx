import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPage, ContentNotFound } from "@/components/ContentPage";
import { getPage, resolvePageSlug } from "@/data/pages";

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
            mainEntityOfPage: url,
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
