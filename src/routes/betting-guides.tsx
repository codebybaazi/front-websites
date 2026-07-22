import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { AiOverview } from "@/components/AiOverview";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { GUIDES } from "@/data/guides";
import { ChevronRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/betting-guides")({
  head: () => ({
    meta: [
      { title: "Lotus365 Betting Guides — Learn to Bet Smarter" },
      {
        name: "description",
        content:
          "Practical, plain-English betting guides from the Lotus365 desk — cricket, live betting, session markets, and bankroll discipline.",
      },
      {
        property: "og:title",
        content: "Lotus365 Betting Guides — Learn to Bet Smarter",
      },
      {
        property: "og:description",
        content:
          "Practical, plain-English betting guides from the Lotus365 desk.",
      },
      { property: "og:url", content: "https://lotus365id.com/betting-guides" },
    ],
    links: [{ rel: "canonical", href: "https://lotus365id.com/betting-guides" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Lotus365 Betting Guides",
          description:
            "Practical, plain-English betting guides from the Lotus365 desk — cricket, live betting, session markets and bankroll discipline.",
          url: "https://lotus365id.com/betting-guides",
          isPartOf: { "@type": "WebSite", name: "Lotus365", url: "/" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
            { "@type": "ListItem", position: 2, name: "Betting Guides", item: "https://lotus365id.com/betting-guides" },
          ],
        }),
      },
    ],
  }),
  component: GuidesLayout,
});

function GuidesLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) =>
    m.routeId?.startsWith("/betting-guides/")
  );
  if (isChild) return <Outlet />;
  return <GuidesIndex />;
}

function GuidesIndex() {
  const guides = Object.values(GUIDES);
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
          <BookOpen className="h-3.5 w-3.5" /> Guides
        </div>
        <h1 className="font-display text-4xl md:text-6xl mb-5">
          Learn to bet <span className="gold-text">smarter</span>.
        </h1>
        <p className="text-lg text-foreground/90 max-w-2xl">
          Practical, plain-English guides from the Lotus365 desk. Read them
          once — apply them for years.
        </p>
      </section>

      <AiOverview
        summary="Step-by-step Lotus365 betting guides for cricket, football, tennis and live casino — how to read odds, build accumulators, manage bankroll and cash out safely on UPI."
        points={[
          "Cricket fancy, session and lambi explained",
          "Football over/under, BTTS and cards markets",
          "Bankroll rules for casual and pro punters",
          "UPI deposit and withdrawal walkthroughs",
        ]}
        sources={[{ label: "Blog", to: "/blog" }, { label: "Case studies", to: "/case-study" }, { label: "How to deposit", to: "/how-to-deposit" }]}
      />
      <section className="mx-auto max-w-6xl px-6 pb-24 grid md:grid-cols-2 gap-5">
        {guides.map((g) => (
          <Link
            key={g.slug}
            to="/betting-guides/$slug"
            params={{ slug: g.slug }}
            className="glass-card rounded-2xl p-7 group hover:-translate-y-1 transition-transform"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-3">
              {g.eyebrow}
            </div>
            <h2 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors">
              {g.hero}
            </h2>
            <p className="text-sm text-foreground/90 leading-relaxed line-clamp-3">
              {g.intro}
            </p>
            <div className="mt-4 text-primary text-sm inline-flex items-center gap-1">
              Read guide <ChevronRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </section>
      <QuickLinks
        currentPath="https://lotus365id.com/betting-guides"
        heading="More Lotus365 resources for smarter play"
      />
      <SiteFooter />
    </div>
  );
}
