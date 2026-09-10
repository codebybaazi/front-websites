import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, CTABand } from "@/components/site-layout";
import { getAuthorBySlug } from "@/data/authors";
import { blogPosts } from "@/data/blog-posts";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";
import defaultHero from "@/assets/stadium.webp";

export const Route = createFileRoute("/authors/$slug")({
  loader: ({ params }) => {
    const author = getAuthorBySlug(params.slug);
    if (!author) throw notFound();
    return { author };
  },
  head: ({ loaderData, params }) => {
    const author = loaderData?.author;
    if (!author) {
      return {
        meta: [
          { title: "Author not found — Cricbet99 Blog" },
          { name: "description", content: "This Cricbet99 blog author could not be found." },
        ],
      };
    }
    const canonical = `https://cricbet99.co.in/authors/${params.slug}`;
    return {
      meta: [
        { title: `${author.name} — ${author.role} | Cricbet99 Blog` },
        { name: "description", content: author.shortBio },
        { property: "og:title", content: `${author.name} — ${author.role}` },
        { property: "og:description", content: author.shortBio },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: author.name,
            jobTitle: author.role,
            description: author.longBio.join(" "),
            url: canonical,
            knowsAbout: author.expertise,
            worksFor: {
              "@type": "Organization",
              name: "Cricbet99",
              url: "https://cricbet99.co.in/",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(buildBreadcrumbJsonLd(`/authors/${params.slug}`, author.name)),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl break-words font-bold">Author not found</h1>
        <p className="mt-4 text-foreground/70">
          The author you're looking for isn't here. Head back to see the full team.
        </p>
        <Link
          to="/authors"
          className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Back to authors
        </Link>
      </div>
    </SiteLayout>
  ),
  component: AuthorPage,
});

function AuthorPage() {
  const { author } = Route.useLoaderData();
  const posts = blogPosts.filter((p) => p.authorSlug === author.slug);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-8">
        <nav className="text-xs font-medium text-foreground/60" aria-label="Breadcrumb">
          <Link to="/authors" className="hover:text-primary">
            Authors
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary font-bold">{author.name}</span>
        </nav>

        <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-primary/15 text-3xl font-black text-primary">
            {author.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
          <div>
            <h1 className="text-3xl break-words font-black leading-tight md:text-4xl">
              {author.name}
            </h1>
            <p className="mt-1 text-foreground/70">
              {author.role} · Covers {author.category}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {author.expertise.map((e) => (
                <span
                  key={e}
                  className="rounded-full bg-accent/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-4 rounded-2xl border border-primary/20 bg-background/40 p-8 text-foreground/80 leading-relaxed">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground/60">
            About {author.name}
          </h2>
          {author.longBio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="text-sm text-foreground/50">Writing for Cricbet99 since {author.joined}.</p>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/60">
            Articles by {author.name} ({posts.length})
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 12).map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group overflow-hidden rounded-2xl border border-primary/20 bg-background/60 hover:border-primary/50"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={p.hero ?? defaultHero}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                    {p.tag}
                  </span>
                  <h4 className="mt-2 font-bold leading-snug group-hover:text-primary">
                    {p.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mx-auto max-w-5xl px-6 pb-16">
        <CTABand
          heading="Read up, then bet smart."
          sub="Get your Cricbet99 ID on WhatsApp and put what you've learned into play."
        />
      </div>
    </SiteLayout>
  );
}
