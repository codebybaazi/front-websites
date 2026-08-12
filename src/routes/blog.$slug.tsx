import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, CTABand } from "@/components/site-layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { blogPosts, getPostBySlug } from "@/data/blog-posts";
import { AiOverview } from "@/components/ai-overview";
import defaultHero from "@/assets/stadium.webp";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [
          { title: "Post not found — Cricbet99 Blog" },
          { name: "description", content: "This Cricbet99 blog post could not be found." },
        ],
      };
    }
    return {
      meta: [
        { title: `${post.title} | Cricbet99 Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://cricbet99.co.in/blog/${post.slug}` },
        ...(post.hero ? [{ property: "og:image", content: post.hero }, { name: "twitter:image", content: post.hero }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `https://cricbet99.co.in/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.dateModified || post.date,
            author: { 
              "@type": "Person", 
              "name": post.author || "Cricbet99 Editorial",
              "url": "https://cricbet99.co.in/about"
            },
            publisher: {
              "@type": "Organization",
              name: "Cricbet99",
              logo: { "@type": "ImageObject", url: "https://cricbet99.co.in/favicon.png" }
            },
            ...(post.hero ? { image: post.hero } : {}),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://cricbet99.co.in/blog/${params.slug}`
            },
            ...(post.faqs ? {
              mainEntity: post.faqs.map(f => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a }
              }))
            } : {})
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cricbet99.co.in/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cricbet99.co.in/blog" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://cricbet99.co.in/blog/${params.slug}` }
            ]
          }),
        }
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <p className="mt-4 text-foreground/70">The blog post you're looking for isn't here. Head back to the blog to browse the latest.</p>
        <Link to="/blog" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Back to blog</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <button onClick={reset} className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Try again</button>
      </div>
    </SiteLayout>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <SiteLayout>
      <article className="mx-auto max-w-5xl px-6 pt-16 pb-8">
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[10px] font-bold uppercase tracking-widest text-foreground/50">
          <span className="inline-flex rounded-full bg-accent/20 px-3 py-1 text-accent-foreground">{post.tag}</span>
          <div className="flex items-center gap-1.5">
            <span className="text-primary/60">By</span>
            <span className="text-foreground/90">{post.author || "Cricbet99 Editorial"}</span>
          </div>
          <div className="flex items-center gap-1.5 border-l border-white/10 pl-4">
            <span className="text-primary/60">Published</span>
            <span className="text-foreground/90">{new Date(post.date).toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata",  year: "numeric", month: "short", day: "numeric"  })}</span>
          </div>
          {post.dateModified && post.dateModified !== post.date && (
            <div className="flex items-center gap-1.5 border-l border-white/10 pl-4">
              <span className="text-primary/60">Updated</span>
              <span className="text-foreground/90">{new Date(post.dateModified).toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata",  year: "numeric", month: "short", day: "numeric"  })}</span>
            </div>
          )}
        </div>
        <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-foreground/70">{post.excerpt}</p>
        <img src={post.hero ?? defaultHero} alt={post.title} className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-[var(--shadow-gold)]" />

        <div className="mt-10 space-y-8">
          {post.sections.map((s: { heading: string; body: string }) => (
            <section key={s.heading}>
              <h2 className="text-2xl font-bold text-primary">{s.heading}</h2>
              <p className="mt-3 text-foreground/80 leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-16 rounded-3xl border border-primary/20 bg-background/40 p-8 backdrop-blur-sm">
            <h2 className="mb-8 text-3xl font-black italic tracking-tighter text-primary uppercase">
              Insights & <span className="text-white text-stroke-primary">FAQ</span>
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {post.faqs.map((faq: { q: string; a: string }, idx: number) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="rounded-2xl border border-primary/10 bg-black/40 px-6 transition-all hover:border-primary/30 data-[state=open]:border-primary/50 data-[state=open]:bg-black/60"
                >
                  <AccordionTrigger className="text-left font-bold text-foreground/90 hover:text-primary hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-foreground/70 leading-relaxed border-t border-white/5 mt-2 pt-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </article>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <CTABand heading="Read up, then bet smart." sub="Get your Cricbet99 ID on WhatsApp and put what you've learned into play." />

        <div className="mt-16">
          <AiOverview 
            summary={post.excerpt}
            highlights={post.sections.map((s: any) => s.heading).slice(0, 4)}
          />
        </div>

        <div className="mt-20">
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/60">More from the blog</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group overflow-hidden rounded-2xl border border-primary/20 bg-background/60 hover:border-primary/50"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img src={p.hero ?? defaultHero} alt={p.title} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent-foreground">{p.tag}</span>
                  <h4 className="mt-2 font-bold leading-snug">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
