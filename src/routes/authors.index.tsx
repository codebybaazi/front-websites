import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AuthorAvatar } from "@/components/AuthorAvatar";
import { AUTHORS, getPostsByAuthor } from "@/data/authors";
import { blogPosts } from "@/data/blog-posts";
import { abs, ogImageMeta } from "@/lib/site-url";

export const Route = createFileRoute("/authors/")({
  head: () => ({
    meta: [
      { title: "Our Writers — Sprinters Blog Authors" },
      {
        name: "description",
        content: "Meet the Sprinters editorial team: the writers behind our cricket, predictions, casino and multi-sport coverage.",
      },
      { property: "og:title", content: "Sprinters Blog Authors" },
      { property: "og:description", content: "Meet the writers behind the Sprinters cricket, predictions, casino and multi-sport coverage." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/authors") },
      ...ogImageMeta("Meet the Sprinters blog writers"),
    ],
    links: [{ rel: "canonical", href: "/authors" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Sprinters Blog Authors",
          description: "The writers behind the Sprinters editorial blog.",
          url: abs("/authors"),
          isPartOf: { "@type": "WebSite", name: "Sprinters Online Gaming", url: abs("/") },
          mainEntity: AUTHORS.map((a) => ({
            "@type": "Person",
            name: a.name,
            jobTitle: a.role,
            url: abs(`/authors/${a.slug}`),
            description: a.shortBio,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
            { "@type": "ListItem", position: 2, name: "Authors", item: abs("/authors") },
          ],
        }),
      },
    ],
  }),
  component: AuthorsIndex,
});

function AuthorsIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            Editorial Team
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight md:text-5xl">Our Writers</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            The Sprinters blog is written and reviewed in-house. Here's who covers what, and why.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {AUTHORS.map((author) => {
            const count = getPostsByAuthor(author.slug, blogPosts).length;
            return (
              <Link
                key={author.slug}
                to="/authors/$slug"
                params={{ slug: author.slug }}
                className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"
              >
                <AuthorAvatar author={author} size="lg" />
                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-card-foreground group-hover:text-primary">{author.name}</h2>
                  <p className="text-sm font-semibold text-primary">{author.role}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {author.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/70 bg-background/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{author.shortBio}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
                    {count} article{count === 1 ? "" : "s"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
