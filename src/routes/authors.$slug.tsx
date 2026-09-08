import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { getAuthor, ALL_AUTHOR_SLUGS } from "@/data/authors";
import { POSTS, type Post } from "@/data/posts";
import { ChevronRight, Calendar, Clock, Home } from "lucide-react";
import { siteUrl } from "@/data/site";

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return d;
  }
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export const Route = createFileRoute("/authors/$slug")({
  loader: ({ params }) => {
    const author = getAuthor(params.slug);
    if (!author) throw notFound();
    const posts = POSTS.filter((p) => p.author === author.name).sort((a, b) =>
      a.date < b.date ? 1 : -1
    );
    return { author, posts };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Author not found — Lotus365" }, { name: "robots", content: "noindex" }] };
    const { author, posts } = loaderData;
    const url = `${siteUrl}/authors/${author.slug}`;
    const title = `${author.name} — ${author.role} at Lotus365`;
    const desc = `${author.bio}`.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${url}#person`,
            name: author.name,
            jobTitle: author.role,
            description: author.bio,
            url,
            worksFor: { "@type": "Organization", name: "Lotus365", url: siteUrl },
            knowsAbout: author.focus,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
              { "@type": "ListItem", position: 3, name: author.name, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `Articles by ${author.name} on Lotus365`,
            itemListElement: posts.slice(0, 25).map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${siteUrl}/blog/${p.slug}`,
              name: p.h1,
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-primary">
      Author not found.{" "}
      <Link to="/blog" className="underline ml-2">
        Back to blog
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen grid place-items-center text-primary">
      Something went wrong loading this author page.
    </div>
  ),
  component: AuthorRoute,
});

function AuthorRoute() {
  const { author, posts } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <nav className="mx-auto max-w-6xl px-6 pt-8 text-xs text-foreground/85">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link to="/" className="hover:text-primary inline-flex items-center gap-1">
              <Home className="h-3 w-3" /> Home
            </Link>
          </li>
          <li><ChevronRight className="h-3 w-3" /></li>
          <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
          <li><ChevronRight className="h-3 w-3" /></li>
          <li className="text-primary/90">{author.name}</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pt-8 pb-10">
        <div className="glass-card rounded-2xl p-7 md:p-9 flex items-start gap-5">
          <div className="h-16 w-16 rounded-full grid place-items-center bg-primary/15 text-primary text-lg font-semibold gold-border shrink-0">
            {initials(author.name)}
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-1">
              {author.role}
            </div>
            <h1 className="font-display text-3xl md:text-4xl mb-3">{author.name}</h1>
            <p className="text-foreground/90 leading-relaxed max-w-2xl">{author.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {author.focus.map((f) => (
                <span
                  key={f}
                  className="text-[11px] uppercase tracking-[0.2em] gold-border rounded-full px-3 py-1 text-primary"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3 text-sm text-foreground/80">
          {posts.length} article{posts.length === 1 ? "" : "s"} on Lotus365
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        {posts.length === 0 ? (
          <div className="glass-card rounded-2xl p-8 text-center text-foreground/85">
            No published articles yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p: Post) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col hover:-translate-y-1 transition-transform"
              >
                <div
                  className="relative h-32 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.34 0.07 165), oklch(0.22 0.05 165))",
                  }}
                >
                  <div className="absolute inset-0 grid place-items-center px-6 text-center">
                    <div className="font-display text-base gold-text line-clamp-3">{p.h1}</div>
                  </div>
                  <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.25em] bg-background/60 gold-border rounded-full px-2.5 py-1 text-primary">
                    {p.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/85 mb-2 inline-flex items-center gap-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {formatDate(p.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {p.readMinutes}m
                    </span>
                  </div>
                  <div className="font-display text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {p.h1}
                  </div>
                  <p className="text-sm text-foreground/90 line-clamp-3">{p.excerpt}</p>
                  <div className="mt-4 text-primary text-sm inline-flex items-center gap-1">
                    Read <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <QuickLinks
        currentPath={`${siteUrl}/authors/${author.slug}`}
        heading="Continue exploring Lotus365"
        subheading="From this author page, jump into markets, the app, and account tools."
      />
      <SiteFooter />
    </div>
  );
}
