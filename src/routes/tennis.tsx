import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";

export const Route = createFileRoute("/tennis")({
  head: () => ({
    meta: [
      { title: "Tennis Betting on Cricbet99 — ATP, WTA & Grand Slams" },
      { name: "description", content: "Wimbledon, Roland Garros, US Open, Australian Open plus every ATP and WTA event — bet live sets, games and match winners on Cricbet99. Instant ID activation." },
      { property: "og:title", content: "Tennis Betting on Cricbet99" },
      { property: "og:description", content: "Grand Slams, ATP and WTA with live set and game markets." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tennis" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tennis" }],
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
      <PageHero
        wide
        eyebrow="Tennis"
        title={<>All four majors, every ATP and WTA event — on <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Cricbet99.</span></>}
        subtitle="From baseline rallies to tie-break drama, tennis on Cricbet99 delivers live set and game markets, tournament outrights and player props across the ATP and WTA calendar."
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
      <CTABand heading="Serve up your first bet." sub="Get your Cricbet99 ID on WhatsApp and dive into live tennis odds." />
    </SiteLayout>
  );
}
