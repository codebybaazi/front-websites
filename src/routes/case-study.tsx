import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { AiOverview } from "@/components/AiOverview";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { CASES } from "@/data/cases";
import { ChevronRight, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "Lotus365 Case Studies — Real Player Playthroughs" },
      {
        name: "description",
        content:
          "Verified Lotus365 player case studies — real bankrolls, real bets, real payouts. Learn from what actually worked.",
      },
      {
        property: "og:title",
        content: "Lotus365 Case Studies — Real Player Playthroughs",
      },
      {
        property: "og:description",
        content:
          "Verified Lotus365 case studies — real bankrolls, real bets, real payouts.",
      },
      { property: "og:url", content: "https://lotus365id.com/case-study" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://lotus365id.com/og-lotus365.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://lotus365id.com/og-lotus365.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://lotus365id.com/case-study" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Lotus365 Case Studies",
          description:
            "Verified Lotus365 player case studies — real bankrolls, real bets, real payouts.",
          url: "https://lotus365id.com/case-study",
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
            { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://lotus365id.com/case-study" },
          ],
        }),
      },
    ],
  }),
  component: CasesLayout,
});

function CasesLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId?.startsWith("/case-study/"));
  if (isChild) return <Outlet />;
  return <CasesIndex />;
}

function CasesIndex() {
  const cases = Object.values(CASES);
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
          <TrendingUp className="h-3.5 w-3.5" /> Case studies
        </div>
        <h1 className="font-display text-4xl md:text-6xl mb-5">
          What actually <span className="gold-text">worked</span>.
        </h1>
        <p className="text-lg text-foreground/90 max-w-2xl">
          Real Lotus365 members, real bankrolls, real payouts. Every story
          verified before publishing.
        </p>
      </section>

      <AiOverview
        summary="Real Lotus365 player case studies — big cricket wins, casino streaks and exchange trades broken down with stake, odds, market and takeaway lessons."
        points={[
          "IPL and T20 World Cup winning bets",
          "Live casino Teen Patti and Baccarat runs",
          "Exchange lay/back strategy walkthroughs",
          "Stake sizing and cash-out timing lessons",
        ]}
        sources={[{ label: "Betting guides", to: "/betting-guides" }, { label: "Big win stories", to: "/lotus365-big-win-stories" }]}
      />
      <section className="mx-auto max-w-6xl px-6 pb-24 grid md:grid-cols-2 gap-5">
        {cases.map((c) => (
          <Link
            key={c.slug}
            to="/case-study/$slug"
            params={{ slug: c.slug }}
            className="glass-card rounded-2xl p-7 group hover:-translate-y-1 transition-transform"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-3">
              {c.eyebrow}
            </div>
            <h2 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors">
              {c.hero}
            </h2>
            <p className="text-sm text-foreground/90 leading-relaxed line-clamp-3">
              {c.intro}
            </p>
            <div className="mt-4 text-primary text-sm inline-flex items-center gap-1">
              Read case study <ChevronRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </section>
      <QuickLinks
        currentPath="https://lotus365id.com/case-study"
        heading="Explore more of the Lotus365 hub"
      />
      <SiteFooter />
    </div>
  );
}
