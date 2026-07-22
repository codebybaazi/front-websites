import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { POSTS, type Post } from "@/data/posts";
import { ChevronRight, Calendar, Clock, Home } from "lucide-react";
import { siteUrl } from "@/data/site";

type CategoryLabel = Post["category"];
type CategorySlug = "cricket" | "football" | "casino" | "platform" | "guides";

const HUBS: Record<
  CategorySlug,
  {
    label: CategoryLabel;
    title: string;
    description: string;
    keyword: string;
    intro: string;
  }
> = {
  cricket: {
    label: "Cricket",
    title: "Cricket Betting Blog — IPL & T20 Tips on Lotus365",
    description:
      "Cricket betting playbooks, IPL previews, T20 World Cup analysis and daily match odds — all curated by the Lotus365 editorial desk for Indian punters.",
    keyword: "lotus365 cricket betting",
    intro:
      "Every IPL preview, T20 breakdown and cricket odds explainer we publish — organised in one hub so you never miss the next match edge on Lotus365.",
  },
  football: {
    label: "Football",
    title: "Football Betting Blog — EPL, UCL & FIFA 2026 on Lotus365",
    description:
      "Football betting analysis on Lotus365 — EPL previews, Champions League match tips, FIFA 2026 build-up and best-value markets for Indian bettors.",
    keyword: "lotus365 football betting",
    intro:
      "EPL, La Liga, UCL and FIFA 2026 — every football post from the Lotus365 desk, grouped so you can follow the season without hunting.",
  },
  casino: {
    label: "Casino",
    title: "Casino Playbooks & Live Dealer Guides on Lotus365",
    description:
      "Casino playbooks on Lotus365 — Teen Patti, Andar Bahar, live dealer tables, slots RTP breakdowns and safe bankroll strategy for Indian players.",
    keyword: "lotus365 casino",
    intro:
      "Teen Patti, Andar Bahar, roulette, slots and live-dealer strategy — every casino article organised for quick reference.",
  },
  platform: {
    label: "Platform",
    title: "Lotus365 Platform Guides — App, Login, KYC & Payments",
    description:
      "Everything about the Lotus365 platform — app download, login help, KYC, UPI deposits, withdrawals and account security for Indian users.",
    keyword: "lotus365 platform",
    intro:
      "App, login, KYC, payments and account tools — the operational articles that keep your Lotus365 experience smooth.",
  },
  guides: {
    label: "Guides",
    title: "Betting Guides & Strategy Playbooks — Lotus365",
    description:
      "Step-by-step betting guides on Lotus365 — how to read odds, manage bankroll, spot value markets and grow long-term as an Indian bettor.",
    keyword: "lotus365 betting guides",
    intro:
      "Long-form playbooks on odds, bankroll, value markets and long-term strategy — read these before you place your next slip.",
  },
};

const CATEGORY_SLUGS = Object.keys(HUBS) as CategorySlug[];

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

export const Route = createFileRoute("/blog/category/$category")({
  loader: ({ params }) => {
    const slug = params.category.toLowerCase() as CategorySlug;
    if (!CATEGORY_SLUGS.includes(slug)) throw notFound();
    const hub = HUBS[slug];
    const posts = POSTS.filter((p) => p.category === hub.label).sort((a, b) =>
      a.date < b.date ? 1 : -1
    );
    return { slug, hub, posts };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Blog category — Lotus365" }] };
    const { slug, hub, posts } = loaderData;
    const path = `/blog/category/${slug}`;
    const url = `${siteUrl}${path}`;
    return {
      meta: [
        { title: hub.title },
        { name: "description", content: hub.description },
        { property: "og:title", content: hub.title },
        { property: "og:description", content: hub.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: hub.title,
            description: hub.description,
            url,
            isPartOf: { "@type": "WebSite", name: "Lotus365", url: siteUrl },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: posts.length,
              itemListElement: posts.slice(0, 25).map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${siteUrl}/blog/${p.slug}`,
                name: p.h1,
              })),
            },
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
              { "@type": "ListItem", position: 3, name: hub.label, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-primary">
      Category not found.{" "}
      <Link to="/blog" className="underline ml-2">
        Back to blog
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen grid place-items-center text-primary">
      Something went wrong loading this hub.
    </div>
  ),
  component: CategoryHub,
});

function CategoryHub() {
  const { slug, hub, posts } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Breadcrumbs */}
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
          <li className="text-primary/90">{hub.label}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-6">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4">
          Lotus365 · Category hub
        </div>
        <h1 className="font-display text-3xl md:text-5xl leading-[1.1]">
          {hub.label} <span className="gold-text">on Lotus365</span>
        </h1>
        <p className="mt-5 text-lg text-foreground/90 leading-relaxed max-w-3xl">
          {hub.intro}
        </p>
        <div className="mt-4 text-sm text-foreground/80">
          {posts.length} article{posts.length === 1 ? "" : "s"} in this hub · targeting{" "}
          <span className="text-primary">{hub.keyword}</span>
        </div>
      </section>

      {/* Sibling hubs */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="glass-card rounded-2xl p-4 md:p-5 flex flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/70 self-center mr-2">
            Other hubs
          </span>
          {CATEGORY_SLUGS.filter((s) => s !== slug).map((s) => (
            <Link
              key={s}
              to="/blog/category/$category"
              params={{ category: s }}
              className="px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] gold-border text-primary hover:bg-primary/10"
            >
              {HUBS[s].label}
            </Link>
          ))}
          <Link
            to="/blog"
            className="px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] gold-border text-primary hover:bg-primary/10"
          >
            All posts
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        {posts.length === 0 ? (
          <div className="glass-card rounded-2xl p-8 text-center text-foreground/85">
            No posts in this hub yet — check back soon.
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
                  className="relative h-40 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.34 0.07 165), oklch(0.22 0.05 165))",
                  }}
                >
                  <div className="absolute inset-0 grid place-items-center px-6 text-center">
                    <div className="font-display text-lg gold-text line-clamp-3">
                      {p.h1}
                    </div>
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
        currentPath={`${siteUrl}/blog/category/${slug}`}
        heading="Continue exploring Lotus365"
        subheading="From this hub jump into markets, the app, and account tools."
      />
      <SiteFooter />
    </div>
  );
}
