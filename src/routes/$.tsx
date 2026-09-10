import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { getPage } from "@/data/pages";
import { abs, ogImageMeta } from "@/lib/site-url";

export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const slug = params._splat ?? "";
    const page = getPage(slug);
    if (!page) throw notFound();
    return { page, slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Page not found — Sprinters" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { page, slug } = loaderData;
    const path = `/${slug}`;
    const title =
      page.metaTitle.length > 60
        ? `${page.metaTitle.slice(0, 59).trimEnd()}…`
        : page.metaTitle;
    const description =
      page.metaDescription.length > 160
        ? `${page.metaDescription.slice(0, 159).trimEnd()}…`
        : page.metaDescription;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: page.metaTitle },
        { property: "og:description", content: page.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: abs(path) },
        { name: "twitter:card", content: "summary_large_image" },
        ...ogImageMeta(page.title),
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: page.title,
            headline: page.title,
            description: page.metaDescription,
            url: abs(path),
            inLanguage: "en",
            isPartOf: { "@type": "WebSite", name: "Sprinters Online Gaming", url: abs("/") },
            publisher: { "@type": "Organization", name: "Sprinters Online Gaming", url: abs("/"), logo: { "@type": "ImageObject", url: abs("/favicon.png") } },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
              { "@type": "ListItem", position: 2, name: page.title, item: abs(path) },
            ],
          }),
        },
      ],
    };
  },
  component: SplatPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">This page doesn't exist yet.</p>
        <a href="/" className="mt-6 inline-block text-primary underline">Go home</a>
      </div>
    </div>
  ),
});

function SplatPage() {
  const { page } = Route.useLoaderData();
  return (
    <ContentPage
      kicker={page.kicker}
      title={page.title}
      intro={page.intro}
      sections={page.sections}
      cta={page.cta}
    />
  );
}
