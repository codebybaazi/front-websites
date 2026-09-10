import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { blogPosts } from "@/data/blog-posts";
import { getAuthorBySlug } from "@/data/authors";
import { AiOverview } from "@/components/ai-overview";
import defaultHero from "@/assets/stadium.webp";

const PAGE_SIZE = 30;

const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
const TOTAL_PAGES = Math.max(1, Math.ceil(sortedPosts.length / PAGE_SIZE));

export const Route = createFileRoute("/blog/")({
  validateSearch: (search: Record<string, unknown>) => ({
    page: Math.min(TOTAL_PAGES, Math.max(1, Number(search.page) || 1)),
  }),
  loaderDeps: ({ search }) => ({ page: search.page }),
  loader: async ({ deps }) => ({ page: deps.page }),
  head: ({ loaderData }) => {
    const page = loaderData?.page ?? 1;
    const isFirstPage = page <= 1;
    const canonical = isFirstPage
      ? "https://cricbet99.co.in/blog"
      : `https://cricbet99.co.in/blog?page=${page}`;
    const title = isFirstPage
      ? "Cricbet99 Blog | IPL Betting Tips, Cricket News & Guides"
      : `Cricbet99 Blog — Page ${page} | IPL Betting Tips & Cricket News`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content:
            "Read the latest IPL 2026 betting tips, match previews, and expert cricket analysis on the official Cricbet99 blog. Your guide to winning sports trading.",
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: "Cricket previews, betting guides and responsible gaming content.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: canonical },
        ...(page > 1
          ? [
              {
                rel: "prev",
                href:
                  page === 2
                    ? "https://cricbet99.co.in/blog"
                    : `https://cricbet99.co.in/blog?page=${page - 1}`,
              },
            ]
          : []),
        ...(page < TOTAL_PAGES
          ? [{ rel: "next", href: `https://cricbet99.co.in/blog?page=${page + 1}` }]
          : []),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Cricbet99 Official Blog",
            description:
              "Latest cricket betting tips, IPL 2026 previews, and sports trading guides.",
            publisher: {
              "@type": "Organization",
              name: "Cricbet99",
              logo: { "@type": "ImageObject", url: "https://cricbet99.co.in/favicon.png" },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://cricbet99.co.in/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://cricbet99.co.in/blog",
              },
            ],
          }),
        },
      ],
    };
  },
  component: Blog,
});

function Blog() {
  const { page } = Route.useSearch();
  const visiblePosts = useMemo(
    () => sortedPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [page],
  );

  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Blog"
        title={
          <>
            Cricket, betting and everything{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              Cricbet99.
            </span>
          </>
        }
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
                <img
                  src={p.hero ?? defaultHero}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="inline-flex rounded-full bg-accent/20 px-3 py-1 text-accent-foreground">
                    {p.tag}
                  </span>
                  <span className="text-foreground/50">
                    {new Date(p.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-bold leading-snug group-hover:text-primary">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-foreground/70">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Read post →
                  </span>
                  {(() => {
                    const a = getAuthorBySlug(p.authorSlug);
                    return a ? (
                      <span className="text-[11px] text-foreground/50">By {a.name}</span>
                    ) : null;
                  })()}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {TOTAL_PAGES > 1 && (
          <nav aria-label="Blog pagination" className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              {page > 1 && (
                <Link
                  to="/blog"
                  search={{ page: page - 1 }}
                  rel="prev"
                  className="rounded-full border border-primary/40 bg-primary/10 px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-primary transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  ← Previous
                </Link>
              )}
              {page < TOTAL_PAGES && (
                <Link
                  to="/blog"
                  search={{ page: page + 1 }}
                  rel="next"
                  className="rounded-full border border-primary/40 bg-primary/10 px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-primary transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Next →
                </Link>
              )}
            </div>
            <p className="text-xs text-foreground/50">
              Page {page} of {TOTAL_PAGES} — showing {visiblePosts.length} of {sortedPosts.length}{" "}
              posts
            </p>
          </nav>
        )}
      </section>
      <AiOverview
        summary="Cricbet99 Intelligence Hub: Expert analysis, IPL 2026 betting tips, and market strategy guides from India's top traders."
        highlights={[
          "IPL 2026 Match Previews",
          "Advanced Betting Strategies",
          "Live Market Insight Reports",
          "Responsible Gaming Resources",
        ]}
      />
      <CTABand
        heading="Read up, then bet smart."
        sub="Get your Cricbet99 ID on WhatsApp and put what you've learned into play."
      />
    </SiteLayout>
  );
}
