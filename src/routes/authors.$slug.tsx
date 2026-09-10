import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ogImageMeta } from "@/lib/seo";
import { ArrowLeft } from "lucide-react";
import { getAuthorBySlug } from "@/data/authors";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/authors/$slug")({
  loader: async ({ params }) => {
    const author = getAuthorBySlug(params.slug);
    if (!author) throw notFound();
    const authorPosts = posts.filter((p) => p.category === author.category);
    return { author, authorPosts };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Author not found — Mahadev Book" }, { name: "robots", content: "noindex" }] };
    }
    const { author } = loaderData;
    const canonicalPath = `https://mahadevbookss.com/authors/${params.slug}`;
    const title = `${author.name} — ${author.role} at Mahadev Book`;
    return {
      meta: [
        { title },
        { name: "description", content: author.bio },
        { property: "og:title", content: title },
        { name: "twitter:title", content: title },
        { property: "og:description", content: author.bio },
        { property: "og:url", content: canonicalPath },
        { property: "og:type", content: "profile" },
        ...ogImageMeta(`${author.name} — ${author.role} at Mahadev Book`),
      ],
      links: [{ rel: "canonical", href: canonicalPath }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: author.name,
            jobTitle: author.role,
            description: `${author.bio} ${author.background}`,
            url: canonicalPath,
            worksFor: { "@type": "Organization", name: "Mahadev Book", url: "https://mahadevbookss.com/" },
            knowsAbout: author.category,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://mahadevbookss.com/blog" },
              { "@type": "ListItem", position: 3, name: author.name, item: canonicalPath },
            ],
          }),
        },
      ],
    };
  },
  component: AuthorPage,
  notFoundComponent: AuthorNotFound,
});

function AuthorNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Author not found</h1>
      <p className="mt-3 text-muted-foreground">This profile may have been moved or unpublished.</p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
        <ArrowLeft className="h-4 w-4" /> Back to blog
      </Link>
    </section>
  );
}

function AuthorPage() {
  const { author, authorPosts } = Route.useLoaderData();

  return (
    <>
      <section className="relative overflow-hidden border-b border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-background to-background" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 pt-16 sm:pt-24 pb-14 sm:pb-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary font-semibold">
            {author.category}
          </div>
          <h1 className="mt-5 font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            {author.name}
          </h1>
          <p className="mt-2 text-lg text-primary font-semibold">{author.role}</p>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground">{author.bio}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-10">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold">Background</h2>
          <p className="mt-3 text-foreground/85 leading-relaxed">{author.background}</p>
        </div>
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold">Beyond the desk</h2>
          <p className="mt-3 text-foreground/85 leading-relaxed">{author.personal}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-14">
        <h2 className="text-2xl font-bold">
          Guides written by {author.name}
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authorPosts.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition">
              <div className="text-xs uppercase tracking-widest text-primary font-semibold">{p.category}</div>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug group-hover:text-primary transition">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
            </Link>
          ))}
        </div>
        {authorPosts.length === 0 && (
          <p className="mt-6 text-muted-foreground">No published guides in this category yet.</p>
        )}
      </section>
    </>
  );
}
