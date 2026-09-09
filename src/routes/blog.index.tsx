import { createFileRoute, Link } from "@tanstack/react-router";
import { AiOverview } from "@/components/AiOverview";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { POSTS, type Post } from "@/data/posts";
import { ChevronRight, BookOpen, Calendar, Clock, Search } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Lotus365 Blog — Guides, Playbooks & Match Predictions" },
      {
        name: "description",
        content:
          "The Lotus365 blog — betting playbooks, IPL & FIFA match predictions, platform guides and premium concierge insights from the Lotus365 desk.",
      },
      {
        property: "og:title",
        content: "Lotus365 Blog — Guides, Playbooks & Match Predictions",
      },
      {
        property: "og:description",
        content:
          "IPL & FIFA predictions, platform guides, casino playbooks and honest editorial — all rebranded and rewritten for Lotus365.",
      },
      { property: "og:url", content: "https://lotus365id.com/blog" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://lotus365id.com/og-lotus365.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://lotus365id.com/og-lotus365.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://lotus365id.com/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Lotus365 Blog",
          description:
            "Betting playbooks, IPL & FIFA match predictions, platform guides and premium concierge insights from the Lotus365 desk.",
          url: "https://lotus365id.com/blog",
          isPartOf: { "@type": "WebSite", name: "Lotus365", url: "/" },
        }),
      },
    ],
  }),
  component: BlogIndex,
});

const CATEGORIES = ["All", "Cricket", "Football", "Casino", "Platform", "Guides"] as const;

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

function BlogIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");

  const sorted = useMemo(
    () => [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1)),
    []
  );
  const filtered = useMemo(() => {
    return sorted.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (q && !`${p.h1} ${p.excerpt}`.toLowerCase().includes(q.toLowerCase()))
        return false;
      return true;
    });
  }, [sorted, cat, q]);

  const featured = sorted[0];
  const secondary = sorted.slice(1, 4);
  const rest = filtered.filter((p) => p.slug !== featured?.slug);

  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 20% 0%, oklch(0.82 0.15 88 / 0.18), transparent 60%), radial-gradient(60% 60% at 80% 20%, oklch(0.55 0.09 165 / 0.4), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
            <BookOpen className="h-3.5 w-3.5" /> The Lotus365 Journal
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
            Playbooks, predictions & <span className="gold-text">payouts</span>.
          </h1>
          <p className="mt-5 text-lg text-foreground/90 max-w-2xl">
            {POSTS.length}+ hand-written pieces from the Lotus365 desk — match
            predictions, sport-by-sport strategy, payment guides, and honest reviews.
          </p>
        </div>
      </section>

      <AiOverview
        summary="The Lotus365 blog covers betting guides, IPL previews, case studies and platform news — written for Indian punters who want an edge, not filler."
        points={[
          "Match previews for IPL, T20 World Cup and FIFA 2026",
          "Deposit, withdrawal and KYC how-tos",
          "Case studies of real Lotus365 wins",
          "Weekly odds movers and strategy explainers",
        ]}
        sources={[{ label: "Betting guides", to: "/betting-guides" }, { label: "Case studies", to: "/case-study" }]}
      />

      <div className="h-12 md:h-16" />



      {/* Featured hero card + 3 secondary */}
      {featured && (
        <section className="mx-auto max-w-6xl px-6 pb-12">
          <div className="grid lg:grid-cols-3 gap-5">
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="lg:col-span-2 glass-card rounded-3xl overflow-hidden group relative min-h-[360px] flex flex-col gold-border"
            >
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.36 0.08 165), oklch(0.24 0.06 165))",
                }}
              />
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(60% 60% at 20% 20%, oklch(0.82 0.15 88 / 0.35), transparent 60%)",
                }}
              />
              <div className="relative p-8 md:p-10 flex flex-col h-full justify-end">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">
                  Featured · {featured.category}
                </div>
                <h2 className="font-display text-2xl md:text-4xl mb-3 group-hover:text-primary transition-colors">
                  {featured.h1}
                </h2>
                <p className="text-foreground/95 max-w-2xl">{featured.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-foreground/90">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {formatDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {featured.readMinutes} min
                  </span>
                  <span className="ml-auto text-primary inline-flex items-center gap-1">
                    Read <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            <div className="grid grid-rows-3 gap-5">
              {secondary.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="glass-card rounded-2xl p-5 group hover:-translate-y-0.5 transition-transform"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary/70 mb-2">
                    {p.category} · {formatDate(p.date)}
                  </div>
                  <div className="font-display text-base md:text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {p.h1}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="glass-card rounded-2xl p-4 md:p-5 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-primary/60" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search Lotus365 articles…"
              className="w-full bg-transparent border border-primary/20 rounded-full pl-9 pr-4 py-2.5 text-sm outline-none focus:border-primary/60"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] transition-colors ${
                  cat === c
                    ? "btn-gold btn-gold-hover"
                    : "gold-border text-primary hover:bg-primary/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="uppercase tracking-[0.3em] text-foreground/70 mr-1">
            Category hubs:
          </span>
          {(["cricket", "football", "casino", "platform", "guides"] as const).map((s) => (
            <Link
              key={s}
              to="/blog/category/$category"
              params={{ category: s }}
              className="px-3 py-1 rounded-full gold-border text-primary hover:bg-primary/10 uppercase tracking-[0.2em]"
            >
              {s}
            </Link>
          ))}
        </div>
        <div className="mt-3 text-xs text-foreground/85">
          Showing {rest.length} of {POSTS.length} articles
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <QuickLinks
        currentPath="https://lotus365id.com/blog"
        heading="Explore the full Lotus365 hub"
        subheading="Beyond the blog — jump into cricket markets, casino tables, account tools and 24/7 support."
      />
      <SiteFooter />
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col hover:-translate-y-1 transition-transform"
    >
      <div
        className="relative h-40 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.34 0.07 165), oklch(0.22 0.05 165))",
        }}
      >
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 20% 20%, oklch(0.82 0.15 88 / 0.35), transparent 60%), radial-gradient(60% 60% at 80% 80%, oklch(0.55 0.09 165 / 0.5), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid place-items-center px-6 text-center">
          <div className="font-display text-lg gold-text line-clamp-3">
            {post.h1}
          </div>
        </div>
        <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.25em] bg-background/60 gold-border rounded-full px-2.5 py-1 text-primary">
          {post.category}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/85 mb-2 inline-flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {post.readMinutes}m
          </span>
        </div>
        <div className="font-display text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.h1}
        </div>
        <p className="text-sm text-foreground/90 line-clamp-3">{post.excerpt}</p>
        <div className="mt-4 text-primary text-sm inline-flex items-center gap-1">
          Read <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
