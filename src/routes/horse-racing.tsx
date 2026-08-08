import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";

export const Route = createFileRoute("/horse-racing")({
  head: () => ({
    meta: [
      { title: "Horse Racing Betting on Cricbet99 — UK, Indian & International" },
      { name: "description", content: "Bet on horse racing from Ascot, Epsom, Meydan and the Indian turf circuit with win, place and each-way markets on Cricbet99." },
      { property: "og:title", content: "Horse Racing Betting on Cricbet99" },
      { property: "og:description", content: "UK, Dubai and Indian racing with live win, place and each-way markets." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
        title={<>Every furlong, every finish — bet racing on <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Cricbet99.</span></>}
        subtitle="From Royal Ascot and the Epsom Derby to Dubai's Meydan and every Indian turf club, Cricbet99 delivers live win, place and each-way markets on the biggest race meetings in the world."
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
