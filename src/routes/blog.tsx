import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageFaqs } from "@/components/PageFaqs";
import { blogPosts } from "@/data/blog-posts";
import { getAuthorForPost } from "@/data/authors";
import { abs, ogImageMeta } from "@/lib/site-url";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Sprinters Blog — Cricket, Betting Tips & Casino Guides" },
      { name: "description", content: "Cricket previews, player news, betting tips and casino strategy from the Sprinters editorial team. Fresh posts every week." },
      { property: "og:title", content: "Sprinters Blog" },
      { property: "og:description", content: "Cricket, football and casino insights — updated weekly." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/blog") },
      ...ogImageMeta("Sprinters Blog — cricket, betting tips and casino guides"),
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
        ...(buildPageFaqLd("/blog") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/blog")) }] : []),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Sprinters Blog",
          description:
            "Editorial articles on cricket, betting tips, casino strategy and Indian sports culture from the Sprinters team.",
          url: abs("/blog"),
          isPartOf: { "@type": "WebSite", name: "Sprinters Online Gaming", url: abs("/") },
          about: [
            { "@type": "Thing", name: "Cricket" },
            { "@type": "Thing", name: "Sports betting" },
            { "@type": "Thing", name: "Live casino" },
          ],
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            Editorial
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight md:text-5xl">Sprinters Blog</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {sorted.length}+ articles on cricket, betting, casino strategy and Indian sports culture.
          </p>
          <Link to="/authors" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
            Meet the writers behind these articles →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary"
            >
              {p.image ? (
                <img src={p.image} alt={p.title} loading="lazy" className="h-44 w-full object-cover" />
              ) : (
                <div className="h-44 w-full" style={{ background: "var(--gradient-hero)" }} />
              )}
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.date}</span>
                <h2 className="mt-2 line-clamp-3 text-lg font-bold text-card-foreground group-hover:text-primary">
                  <Link to="/post/$slug" params={{ slug: p.slug }}>{p.title}</Link>
                </h2>
                {p.excerpt ? (
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
                ) : null}
                <span className="mt-2 text-xs font-medium text-muted-foreground/80">
                  By {getAuthorForPost(p).name}
                </span>
                <Link
                  to="/post/$slug"
                  params={{ slug: p.slug }}
                  aria-label={`Read: ${p.title}`}
                  className="mt-auto pt-4 text-sm font-semibold text-primary"
                >
                  Read post →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageFaqs />
      <SiteFooter />
    </div>
  );
}
