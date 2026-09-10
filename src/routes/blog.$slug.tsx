import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts } from "@/data/posts";
import { getAuthorForCategory } from "@/data/authors";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";
import { AIOverview } from "@/components/AIOverview";
import { BlogHeroBanner } from "@/components/BlogHeroBanner";
import { fetchWhatsAppNumber } from "@/lib/whatsapp";
import { howToJsonLd } from "@/lib/seo";

function faqsForPost(post: { title: string; category: string; faq?: FAQItem[] }): FAQItem[] {
  if (post.faq && post.faq.length > 0) return post.faq;
  const t = post.title;
  const c = post.category;
  return [
    {
      q: `What does this guide on ${t} cover?`,
      a: `This ${c} guide walks Indian bettors through the key concepts, real-money examples and Mahadev Book platform steps needed to act on the topic today — no filler, no theory-only advice.`,
    },
    {
      q: `Is this ${c} advice safe for beginners?`,
      a: `Yes. Every strategy in the article flags the bankroll size and risk level up front, so new players can start small and only scale up when they're comfortable.`,
    },
    {
      q: `How do I get a Mahadev Book cricket ID to try this?`,
      a: `Message us on WhatsApp with your name and preferred deposit method. You'll receive a verified Mahadev Book ID with login URL, user ID and password in under 5 minutes.`,
    },
    {
      q: `How fast are deposits and withdrawals on Mahadev Book?`,
      a: `UPI deposits credit in seconds and UPI withdrawals settle in minutes. Bank transfers land on the same working day.`,
    },
    {
      q: `Where can I get help if something in this guide is unclear?`,
      a: `Our 24/7 support desk on WhatsApp and Telegram (English and Hindi) can walk you through any step in this article, from KYC to placing your first bet.`,
    },
  ];
}


export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    const waNumber = await fetchWhatsAppNumber();
    return { post, waNumber };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Post not found — Mahadev Book" }, { name: "robots", content: "noindex" }] };
    }
    const { post, waNumber } = loaderData;
    const title = post.title;
    const canonicalPath = `https://mahadevbookss.com/blog/${params.slug}`;
    const author = getAuthorForCategory(post.category);
    const authorPageUrl = author ? `https://mahadevbookss.com/authors/${author.slug}` : undefined;
    const articleLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      articleSection: post.category,
      image: "https://mahadevbookss.com/og-image.jpg",
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalPath },
      author: author
        ? {
            "@type": "Person",
            name: author.name,
            jobTitle: author.role,
            url: authorPageUrl,
            worksFor: { "@type": "Organization", name: "Mahadev Book", url: "https://mahadevbookss.com/" },
          }
        : {
            "@type": "Organization",
            name: "Mahadev Book Editorial Team",
            url: "https://mahadevbookss.com/about",
            ...(waNumber
              ? {
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "editorial",
                    telephone: `+${waNumber}`,
                  },
                }
              : {}),
          },
      publisher: {
        "@type": "Organization",
        name: "Mahadev Book",
        logo: { "@type": "ImageObject", url: "https://mahadevbookss.com/favicon.png" },
      },
    };
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonicalPath },
        { name: "twitter:title", content: title },
        { property: "article:published_time", content: post.date },
        { property: "article:modified_time", content: post.updated || post.date },
        { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
      ],
      links: [{ rel: "canonical", href: canonicalPath }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(articleLd) },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://mahadevbookss.com/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: canonicalPath },
            ],
          }),
        },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqsForPost(post))) },
        ...(post.howto
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify(howToJsonLd(post.howto.name, post.excerpt, post.howto.steps)),
              },
            ]
          : []),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: canonicalPath,
            speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
          }),
        },
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Post not found</h1>
      <p className="mt-3 text-muted-foreground">This article may have been moved or unpublished.</p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
        <ArrowLeft className="h-4 w-4" /> Back to blog
      </Link>
    </section>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const author = getAuthorForCategory(post.category);
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallback = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const suggestions = related.length ? related : fallback;

  return (
    <>
      <section className="relative overflow-hidden border-b border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-background to-background" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 20%, hsl(var(--primary) / 0.35), transparent 55%), radial-gradient(ellipse at 80% 60%, hsl(var(--primary) / 0.2), transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 pt-16 sm:pt-24 pb-14 sm:pb-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary font-semibold">
            {post.category}
          </div>
          <h1 className="mt-5 font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            {author && (
              <>
                <Link
                  to="/authors/$slug"
                  params={{ slug: author.slug }}
                  className="inline-flex items-center gap-1.5 hover:text-primary"
                >
                  <User className="h-3.5 w-3.5" /> Written by {author.name}, {author.role}
                </Link>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              </>
            )}
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Last updated: {post.updated || post.date}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-8">
        <div className="overflow-hidden rounded-2xl border border-primary/30 shadow-2xl">
          <BlogHeroBanner
            title={post.title}
            category={post.category}
            slug={post.slug}
            className="block w-full h-auto"
          />
        </div>
      </section>

      <AIOverview
        summary={post.excerpt}
        points={post.content.slice(0, 4).map((b: { heading?: string; body: string }) => b.heading || b.body.slice(0, 90))}
        keywords={
          post.slug === "mahadev-book-india-platform-guide"
            ? [post.category, "Mahadev Book India", "Mahadev Book India 2026", "Mahadev Book India guide"]
            : post.slug.includes("cricket")
              ? [post.category, "Mahadev Book Cricket", "Mahadev cricket betting", "Mahadev Book cricket"]
              : [post.category, "Mahadev Book", "cricket betting India", "betting guide"]
        }
      />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-8">
        <div className="mt-10 space-y-6">
          {post.content.map((block: { heading?: string; body: string }, i: number) => (
            <div key={i}>
              {block.heading && <h2 className="font-display text-xl sm:text-2xl font-bold mt-8 mb-3">{block.heading}</h2>}
              <p className="text-foreground/85 leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8 text-center">
          <div className="font-display text-2xl font-bold">Ready to play?</div>
          <p className="mt-2 text-sm text-muted-foreground">Get your verified Mahadev Book ID in under 5 minutes on WhatsApp.</p>
          <Link to="/contact" className="btn-glow mt-5 inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content">Get your ID</span>
            <span className="btn-glow-content grid place-items-center h-7 w-7 rounded-full bg-black/25">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold">You might also like</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestions.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition">
              <div className="text-xs uppercase tracking-widest text-primary font-semibold">{p.category}</div>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug group-hover:text-primary transition">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <FAQSection title="FAQs on this guide" items={faqsForPost(post)} />

      <QuickLinks
        postCategory={post.category}
        excludeSlug={post.slug}
        title="Popular reads across Mahadev Book"
        subtitle="Hand-picked pages and guides most useful to Indian players."
      />
    </>
  );
}
