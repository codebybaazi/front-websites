import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";

export const Route = createFileRoute("/horse-racing")({
  head: () => ({
    meta: [
      { title: "Horse Racing Betting on Cricbet99 | Live Turf & International Odds" },
      { name: "description", content: "Place your bets on global horse racing with Cricbet99. From Royal Ascot to Indian turf clubs, get the best win, place, and each-way odds today." },
      { property: "og:title", content: "Premier Horse Racing Betting | Cricbet99" },
      { property: "og:description", content: "The ultimate destination for horse racing enthusiasts. Live odds, expert markets, and instant payouts on all major meets." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/horse-racing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/horse-racing" }],
  }),
  component: HorseRacing,
});

const meets = [
  { name: "Royal Ascot", desc: "The most prestigious meet in world racing — five days of Group 1 action with tournament outrights, race winners and each-way betting." },
  { name: "Epsom Derby", desc: "The classic Flat race of the British calendar with deep ante-post and race-day markets." },
  { name: "Dubai World Cup", desc: "Meydan's showpiece night with the world's richest turf and dirt races, fully covered on Cricbet99." },
  { name: "Indian racing", desc: "Mumbai, Bangalore, Kolkata, Hyderabad and Chennai turf clubs — win, place and each-way betting on every race card." },
  { name: "Melbourne Cup", desc: "The race that stops a nation — outright winners, top finishers and jockey-specific markets across the Spring Carnival." },
  { name: "Cheltenham & Grand National", desc: "The best of British jumps racing with festival outrights, race winners and place markets." },
];

function HorseRacing() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Horse Racing"
        title={<>Elite Horse Racing & <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Live Turf Markets.</span></>}
        subtitle="From the legendary Royal Ascot to the competitive Indian racing circuit, Cricbet99 offers sophisticated betting options for every racing connoisseur, including win, place, and exotic markets."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {meets.map((m) => (
            <div key={m.name} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <h3 className="text-lg font-bold">{m.name}</h3>
              <p className="mt-2 text-sm text-foreground/70">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand heading="Back your first winner." sub="Message us on WhatsApp and get your Cricbet99 racing ID in minutes." />
    </SiteLayout>
  );
}
