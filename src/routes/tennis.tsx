import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { AiOverview } from "@/components/ai-overview";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/tennis")({
  head: () => ({
    meta: [
      { title: "Tennis Betting on Cricbet99 | Live ATP, WTA & Slam Odds" },
      { name: "description", content: "Master tennis betting with Cricbet99. Live odds for Wimbledon, ATP Tour, and WTA events. Secure your tennis betting ID today for instant access to global courts." },
      { property: "og:title", content: "Tennis Betting Excellence on Cricbet99" },
      { property: "og:description", content: "Bet on every set, game, and match across the global tennis circuit. High-limit markets and professional support." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/tennis" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/tennis" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/tennis", "Tennis Betting on Cricbet99")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/tennis", "Tennis Betting on Cricbet99")),
      },
    ],
  }),
  component: Tennis,
});

const events = [
  { name: "Wimbledon", desc: "London's grass-court classic — outright winners, set betting and live game-by-game markets across two weeks." },
  { name: "US Open", desc: "New York's hard-court showpiece with match winners, over/under sets and live in-play trading." },
  { name: "Australian Open", desc: "The season's first Grand Slam. Bet outrights and every match across the men's and women's draws." },
  { name: "Roland Garros", desc: "The clay-court major with deep player props and live set markets." },
  { name: "ATP Tour", desc: "Every Masters 1000 and 500 event covered with match, set and game markets." },
  { name: "WTA Tour", desc: "Full WTA schedule with live odds on tour finals, majors and rising stars." },
];

function Tennis() {
  return (
    <SiteLayout>
      <nav className="mx-auto max-w-7xl px-6 py-3" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-medium text-foreground/60">
          <li>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <li className="text-primary font-bold" aria-current="page">
            Tennis Betting on Cricbet99
          </li>
        </ol>
      </nav>

      <PageHero
        wide
        eyebrow="Tennis"
        title={<>Professional Tennis Betting & <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Live Court Action.</span></>}
        subtitle="Experience sub-second odds updates on every serve. Cricbet99 brings you the complete tennis calendar, from Grand Slam finals to high-intensity ATP 1000 tournaments."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <div key={e.name} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <h3 className="text-lg font-bold">{e.name}</h3>
              <p className="mt-2 text-sm text-foreground/70">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <AiOverview 
        summary="Experience professional tennis betting on Cricbet99. Track live ATP and WTA action with sub-second odds updates and elite market coverage."
        highlights={[
          "Live odds for every set and game in real-time",
          "Complete coverage of Grand Slams and ATP tours",
          "Fast withdrawals for all winning tennis bets",
          "Professional human support available 24/7"
        ]}
      />

      <CTABand heading="Serve up your first bet." sub="Get your Cricbet99 ID on WhatsApp and dive into live tennis odds." />
    </SiteLayout>
  );
}
