import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader, TELEGRAM } from "@/components/SiteHeader";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";
import { SiteFooter } from "@/components/SiteFooter";
import { blogPosts } from "@/data/blog-posts";
import { getAuthorForPost } from "@/data/authors";
import { abs } from "@/lib/site-url";
import { MessageCircle, Send, Calendar, ArrowLeft } from "lucide-react";


export const Route = createFileRoute("/post/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
    return { post, related };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Post not found — Sprinters" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const author = getAuthorForPost(post);
    const desc = post.excerpt || `${post.title} — read the full story on the Sprinters blog.`;
    const url = `/post/${params.slug}`;
    const suffix = " | Sprinters Blog";
    const maxTitle = 60 - suffix.length;
    const shortTitle = post.title.length > maxTitle ? `${post.title.slice(0, maxTitle - 1).trimEnd()}…` : post.title;
    return {
      meta: [
        { title: `${shortTitle}${suffix}` },

        { name: "description", content: desc.slice(0, 160) },
        { property: "og:title", content: post.title },
        { property: "og:description", content: desc.slice(0, 200) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: abs(url) },
        ...(post.image ? [{ property: "og:image", content: post.image }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title.slice(0, 110),
            datePublished: post.date,
            dateModified: post.date,
            image: [abs(post.image || "/favicon.png")],
            description: desc.slice(0, 200),
            mainEntityOfPage: { "@type": "WebPage", "@id": abs(url) },
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              url: abs(`/authors/${author.slug}`),
            },
            publisher: {
              "@type": "Organization",
              name: "Sprinters Online Gaming",
              logo: { "@type": "ImageObject", url: abs("/favicon.png") },
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
              { "@type": "ListItem", position: 2, name: "Blog", item: abs("/blog") },
              { "@type": "ListItem", position: 3, name: post.title, item: abs(url) },
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
        <h1 className="text-4xl font-black uppercase">Post not found</h1>
        <p className="mt-4 text-muted-foreground">
          This article isn't available. Browse the blog for more.
        </p>
        <Link to="/blog" className="mt-6 inline-block text-primary underline">
          ← Back to blog
        </Link>
      </section>
      <SiteFooter />
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-4 text-muted-foreground">Please try again in a moment.</p>
      </section>
      <SiteFooter />
    </div>
  ),
  component: PostPage,
});

function splitParagraphs(body: string): string[] {
  if (!body) return [];
  // blog-posts.ts already trims each body to its last complete sentence
  // (cleanBody()), so this only needs to group sentences into paragraphs.
  const cleaned = body.replace(/\s+/g, " ").trim();
  const sentences = cleaned.match(/[^.!?]+[.!?]+/g) ?? [cleaned];
  const paras: string[] = [];
  let buf = "";
  for (const s of sentences) {
    buf += (buf ? " " : "") + s.trim();
    if (buf.length > 260) {
      paras.push(buf);
      buf = "";
    }
  }
  if (buf) paras.push(buf);
  return paras;
}

function PostPage() {
  const { post, related } = Route.useLoaderData();
  const author = getAuthorForPost(post);
  const paragraphs = splitParagraphs(post.body);
  const whatsapp = useWhatsAppHref();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>

        <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{post.date}</span>
          <span aria-hidden>•</span>
          <Link to="/authors/$slug" params={{ slug: author.slug }} className="normal-case tracking-normal text-foreground hover:text-primary hover:underline">
            {author.name}
          </Link>
          <span className="normal-case tracking-normal text-muted-foreground/70">· {author.role}</span>
        </div>

        <h1 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-5xl">
          {post.title}
        </h1>

        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            loading="eager"
            className="mt-8 w-full rounded-2xl border border-border object-cover"
          />
        ) : null}

        <div className="prose prose-invert mt-8 max-w-none">
          {paragraphs.length > 0 ? (
            paragraphs.map((p, i) => (
              <p key={i} className="mb-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                {p}
              </p>
            ))
          ) : (
            <p className="text-muted-foreground">
              Full story coming soon. In the meantime, message us for the latest updates.
            </p>
          )}
        </div>

        {/* Inline CTA */}
        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{ background: "var(--gradient-hero)" }}
        >
          <p className="text-lg font-semibold text-white">
            Play the markets in this story — get your Sprinters ID in minutes.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href={whatsapp}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={TELEGRAM}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20"
            >
              <Send className="h-4 w-4" /> Telegram
            </a>
          </div>
        </div>

        {/* Related */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold">More from the blog</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((r: typeof post) => (
              <Link
                key={r.slug}
                to="/post/$slug"
                params={{ slug: r.slug }}
                className="group overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary"
              >
                {r.image ? (
                  <img src={r.image} alt={r.title} loading="lazy" className="h-32 w-full object-cover" />
                ) : (
                  <div className="h-32 w-full" style={{ background: "var(--gradient-hero)" }} />
                )}
                <div className="p-4">
                  <h3 className="line-clamp-3 text-sm font-semibold text-card-foreground group-hover:text-primary">
                    {r.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
