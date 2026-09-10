import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { authors } from "@/data/authors";
import { blogPosts } from "@/data/blog-posts";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";

export const Route = createFileRoute("/authors/")({
  head: () => {
    const canonical = "https://cricbet99.co.in/authors";
    return {
      meta: [
        { title: "Our Authors | Cricbet99 Blog" },
        {
          name: "description",
          content:
            "Meet the writers behind the Cricbet99 blog — cricket analysts, betting strategy writers, and the support team who cover match previews, odds, casino games, and account guides.",
        },
        { property: "og:title", content: "Our Authors | Cricbet99 Blog" },
        { property: "og:description", content: "Meet the writers behind the Cricbet99 blog." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildBreadcrumbJsonLd("/authors", "Our Authors")),
        },
      ],
    };
  },
  component: AuthorsIndexPage,
});

function AuthorsIndexPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Meet the people behind the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              Cricbet99 blog.
            </span>
          </>
        }
        subtitle="Every article on this blog carries a byline. Here's who writes what, and why."
      />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {authors.map((author) => {
            const count = blogPosts.filter((p) => p.authorSlug === author.slug).length;
            return (
              <Link
                key={author.slug}
                to="/authors/$slug"
                params={{ slug: author.slug }}
                className="group flex flex-col gap-4 rounded-2xl border border-primary/20 bg-background/60 p-7 transition hover:border-primary/50 hover:shadow-[var(--shadow-gold)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/15 text-lg font-black text-primary">
                    {author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div>
                    <h2 className="font-bold text-foreground/90 group-hover:text-primary">
                      {author.name}
                    </h2>
                    <p className="text-sm text-foreground/60">{author.role}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">{author.shortBio}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {author.expertise.map((e) => (
                    <span
                      key={e}
                      className="rounded-full bg-accent/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground"
                    >
                      {e}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-foreground/50">
                  {count} article{count === 1 ? "" : "s"} published
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
