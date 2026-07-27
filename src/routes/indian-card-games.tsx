import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { Crown, Dices, Sparkles, Gamepad2 } from "lucide-react";

export const Route = createFileRoute("/indian-card-games")({
  head: () => ({
    meta: [
      { title: "Indian Card Games on Cricbet99 — Teen Patti, Andar Bahar & More" },
      { name: "description", content: "Play the classic Indian card games — Teen Patti, Andar Bahar, 32 Cards, Muflis and Lucky 7 — with real dealers streamed in HD on Cricbet99." },
      { property: "og:title", content: "Indian Card Games on Cricbet99" },
      { property: "og:description", content: "Teen Patti, Andar Bahar, 32 Cards, Muflis and Lucky 7 with live dealers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndianCardGames,
});

const games = [
  { icon: Crown, title: "Teen Patti", desc: "India's iconic three-card game. Compare hands with the dealer, place side bets on pair-plus and 3+3 and enjoy fast rounds with live dealers 24/7." },
  { icon: Dices, title: "Andar Bahar", desc: "A single card is drawn and you pick which side — Andar or Bahar — matches first. Simple rules, quick payouts and multiple variants." },
  { icon: Sparkles, title: "32 Cards", desc: "Four players, eight cards each. Bet on which player will score the highest total — a uniquely Indian dealer-run casino game." },
  { icon: Gamepad2, title: "Muflis Teen Patti", desc: "The reverse Teen Patti variant where the lowest hand wins. Live-streamed with real dealers and side bet options." },
  { icon: Crown, title: "Lucky 7", desc: "Predict whether the next card will be higher, lower or equal to seven. Fast, simple and one of the highest-volume tables on Cricbet99." },
  { icon: Sparkles, title: "Casino War", desc: "The old-school high-card showdown with side bets and instant round settlement." },
];

function IndianCardGames() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Indian Card Games"
        title={<>Classic Indian card games, <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>real dealers,</span> 24/7.</>}
        subtitle="Cricbet99 brings the games you grew up playing — Teen Patti, Andar Bahar, 32 Cards, Muflis and Lucky 7 — to your screen with live Hindi-speaking dealers, HD streams and instant round switching."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <div key={g.title} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{g.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand heading="Deal me in." sub="Get your Cricbet99 ID on WhatsApp and take a seat at the Teen Patti table tonight." />
    </SiteLayout>
  );
}
