import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/data/posts";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { QuickLinks } from "@/components/QuickLinks";
import { AIOverview } from "@/components/AIOverview";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";
import { BlogHeroBanner } from "@/components/BlogHeroBanner";

const blogFaqs: FAQItem[] = [
  { q: "Who writes the Mahadev Book blog?", a: "Working analysts and support staff who use sportsbooks and live casino tables every day — no ghost-written filler, no AI hype pieces." },
  { q: "What topics does the blog cover?", a: "IPL and T20 World Cup betting strategy, cricket satta session and fancy markets, live casino tactics (Aviator, Teen Patti, roulette), UPI deposit and withdrawal walkthroughs, KYC, and responsible-play tools." },
  { q: "How often are new posts published?", a: "New guides go up weekly, with match-specific previews and post-match analyses during IPL, WPL, T20 World Cup and other India series." },
  { q: "Are the strategies safe for beginners?", a: "Yes — every guide flags the bankroll size and risk level up front, so new players can start small and scale up only when comfortable." },
  { q: "Can I request a topic?", a: "Absolutely. Message us on WhatsApp with the topic — most reader-requested guides go live within a week." },
];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Betting Guides & Tips | Mahadev Book" },
      { name: "description", content: "Guides on IPL and football betting, deposits and withdrawals, live casino strategy, KYC, and responsible play — from the Mahadev Book team." },
      { property: "og:title", content: "Mahadev Book Blog" },
      { property: "og:description", content: "Practical betting guides written for Indian players." },
      { property: "og:url", content: "https://mahadevbookss.com/blog" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book — Verified Betting IDs, Instant UPI Payouts, 24/7 Support" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/blog" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(blogFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mahadevbookss.com/blog" },
          ],
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Blog
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Guides, tips & <span className="text-gradient-gold">strategy</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Practical writing from people who spend all day inside sportsbooks and casino tables. No fluff, no hype.
        </p>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Blog"
        summary={`Practical, India-focused betting guides written by people who use sportsbooks daily. ${posts.length}+ articles covering IPL and cricket betting strategy, session and fancy markets, UPI deposits and withdrawals, live casino tactics, KYC and responsible-play tools.`}
        points={[
          "IPL & T20 World Cup betting strategy",
          "Cricket satta: session, fancy and toss markets",
          "Live casino guides: Aviator, Teen Patti, roulette",
          "UPI deposit & withdrawal walkthroughs",
          "KYC, account safety and responsible gaming",
          "Case studies from real Indian players",
        ]}
        keywords={["cricket betting guide", "ipl satta tips", "cricket satta id", "live casino strategy", "upi withdrawal"]}
      />


      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center rounded-3xl border border-border bg-card p-6 sm:p-10 hover:border-primary/50 transition"
        >
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">{featured.category}</div>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight group-hover:text-primary transition">
              {featured.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
              Read the guide <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-primary/30">
            <BlogHeroBanner
              title={featured.title}
              category={featured.category}
              slug={featured.slug}
              className="block w-full h-auto"
            />
            <div className="flex items-center justify-center gap-4 bg-primary/5 px-4 py-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
            </div>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition flex flex-col"
            >
              <div className="border-b border-border overflow-hidden">
                <BlogHeroBanner
                  title={p.title}
                  category={p.category}
                  slug={p.slug}
                  className="block w-full h-auto"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">{p.category}</div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug group-hover:text-primary transition">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FAQSection title="Mahadev Book Blog — FAQs" items={blogFaqs} />
      <QuickLinks
        title="Quick links across Mahadev Book"
        subtitle="Jump straight to the pages Indian players use most — platforms, wallet help, cricket coverage and safety."
      />
    </>
  );
}
