import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AuthorAvatar } from "@/components/AuthorAvatar";
import { getAuthorBySlug, getPostsByAuthor, AUTHORS } from "@/data/authors";
import { blogPosts } from "@/data/blog-posts";
import { abs, ogImageMeta } from "@/lib/site-url";
import { ArrowLeft, ArrowRight, Briefcase, User } from "lucide-react";

export const Route = createFileRoute("/authors/$slug")({
  loader: ({ params }) => {
    const author = getAuthorBySlug(params.slug);
    if (!author) throw notFound();
    const posts = getPostsByAuthor(author.slug, blogPosts).sort((a, b) => (a.date < b.date ? 1 : -1));
    return { author, posts };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Author not found — Sprinters" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { author, posts } = loaderData;
    const path = `/authors/${params.slug}`;
    const description = `${author.shortBio} ${posts.length} article${posts.length === 1 ? "" : "s"} on the Sprinters blog.`.slice(0, 200);
    return {
      meta: [
        { title: `${author.name} — ${author.role} | Sprinters` },
        { name: "description", content: description.slice(0, 160) },
        { property: "og:title", content: `${author.name} — ${author.role}` },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: abs(path) },
        ...ogImageMeta(`${author.name} — ${author.role} at Sprinters Online Gaming`),
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              description: author.bio.join(" "),
              url: abs(path),
              knowsAbout: author.expertise,
              worksFor: { "@type": "Organization", name: "Sprinters Online Gaming", url: abs("/") },
            },
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
              { "@type": "ListItem", position: 3, name: author.name, item: abs(path) },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-4xl font-black uppercase">Author not found</h1>
        <Link to="/authors" className="mt-6 inline-block text-primary underline">
          ← Back to all authors
        </Link>
      </section>
      <SiteFooter />
    </div>
  ),
  component: AuthorPage,
});

function AuthorPage() {
  const { author, posts } = Route.useLoaderData();
  const others = AUTHORS.filter((a) => a.slug !== author.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20">
          <Link to="/authors" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> All authors
          </Link>
          <div className="mt-6 flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
            <AuthorAvatar author={author} size="lg" />
            <div>
              <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">{author.name}</h1>
              <p className="mt-1 text-base font-semibold text-primary">{author.role}</p>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">{author.focus}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
                {posts.length} article{posts.length === 1 ? "" : "s"} on the Sprinters blog
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="inline-flex items-center gap-2 text-xl font-bold text-card-foreground">
              <User className="h-5 w-5 text-primary" />
              Personal details
            </h2>
            <dl className="mt-5 divide-y divide-border/70">
              {author.details.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0">
                  <dt className="text-sm text-muted-foreground">{row.label}</dt>
                  <dd className="text-right text-sm font-semibold text-card-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {author.expertise.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/70 bg-background/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="inline-flex items-center gap-2 text-xl font-bold text-card-foreground">
              <Briefcase className="h-5 w-5 text-primary" />
              Experience
            </h2>
            <ul className="mt-5 space-y-5">
              {author.experience.map((item) => (
                <li key={item.title}>
                  <p className="text-sm font-semibold text-card-foreground">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-xl font-bold text-card-foreground">About {author.name.split(" ")[0]}</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {author.bio.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-2xl font-bold text-foreground">
          Articles by {author.name}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {posts.length} piece{posts.length === 1 ? "" : "s"} assigned to this desk.
        </p>
        {posts.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="line-clamp-3 text-base font-semibold leading-snug text-card-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  to="/post/$slug"
                  params={{ slug: post.slug }}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm text-muted-foreground">No articles yet.</p>
        )}
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-lg font-bold text-card-foreground">Rest of the desk</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {others.map((a) => (
              <Link
                key={a.slug}
                to="/authors/$slug"
                params={{ slug: a.slug }}
                className="group flex items-center gap-3 rounded-xl border border-border/60 bg-background/60 p-3 transition hover:border-primary/60"
              >
                <AuthorAvatar author={a} size="sm" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-foreground group-hover:text-primary">{a.name}</div>
                  <div className="truncate text-xs text-muted-foreground">{a.role}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
