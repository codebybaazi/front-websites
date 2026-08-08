import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { blogPosts } from "@/data/blog-posts";
import defaultHero from "@/assets/stadium.webp";

const INITIAL_COUNT = 30;
const LOAD_STEP = 15;


export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Blog | IPL Betting Tips, Cricket News & Guides" },
      { name: "description", content: "Read the latest IPL 2026 betting tips, match previews, and expert cricket analysis on the official Cricbet99 blog. Your guide to winning sports trading." },
      { property: "og:title", content: "Cricbet99 Blog" },
      { property: "og:description", content: "Cricket previews, betting guides and responsible gaming content." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Cricbet99 Official Blog",
          "description": "Latest cricket betting tips, IPL 2026 previews, and sports trading guides.",
          "publisher": {
            "@type": "Organization",
            "name": "Cricbet99",
            "logo": { "@type": "ImageObject", "url": "https://cricbet99.co.in/favicon.png" }
          }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cricbet99.co.in/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cricbet99.co.in/blog" }
          ]
        })
      }
    ],
  }),
  component: Blog,
});

function Blog() {
  const sortedPosts = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  );
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visiblePosts = sortedPosts.slice(0, visibleCount);
  const hasMore = visibleCount < sortedPosts.length;

  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Blog"
        title={<>Cricket, betting and everything <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Cricbet99.</span></>}
        subtitle="Match previews, IPL and World Cup breakdowns, market guides and responsible gaming resources — the Cricbet99 blog is where our traders share what they're watching, tracking and analysing every week."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-primary/20 bg-background/60 transition hover:border-primary/50 hover:shadow-[var(--shadow-gold)]"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img src={p.hero ?? defaultHero} alt={p.title} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="inline-flex rounded-full bg-accent/20 px-3 py-1 text-accent-foreground">{p.tag}</span>
                  <span className="text-foreground/50">{new Date(p.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</span>
                </div>
                <h2 className="mt-4 text-lg font-bold leading-snug group-hover:text-primary">{p.title}</h2>
                <p className="mt-2 text-sm text-foreground/70">{p.excerpt}</p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">Read post →</span>
              </div>
            </Link>
          ))}
        </div>
        {hasMore && (
          <div className="mt-12 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => Math.min(c + LOAD_STEP, sortedPosts.length))}
              className="rounded-full border border-primary/40 bg-primary/10 px-8 py-3 text-sm font-bold uppercase tracking-widest text-primary transition hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-gold)]"
            >
              Load more posts
            </button>
            <p className="text-xs text-foreground/50">
              Showing {visiblePosts.length} of {sortedPosts.length}
            </p>
          </div>
        )}
      </section>
      <CTABand heading="Read up, then bet smart." sub="Get your Cricbet99 ID on WhatsApp and put what you've learned into play." />
    </SiteLayout>
  );
}

