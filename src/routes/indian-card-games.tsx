import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { Crown, Dices, Sparkles, Gamepad2, ShieldCheck, Zap } from "lucide-react";
import { AiOverview } from "@/components/ai-overview";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/indian-card-games")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `https://cricbet99.co.in/indian-card-games
    return {
      meta: [
        { title: "Indian Card Games on Cricbet99 — Teen Patti & Andar Bahar" },
        { name: "description", content: "Play Teen Patti, Andar Bahar, Lucky 7, and 32 Cards with live dealers on Cricbet99. HD streaming, instant UPI payouts, and 24/7 WhatsApp support for Indian players." },
        { name: "keywords", content: "cricbet99 teen patti, online andar bahar india, cricbet99 lucky 7, indian card games online, cricbet99 live cards" },
        { property: "og:title", content: "Classic Indian Card Games — Live on Cricbet99" },
        { property: "og:description", content: "Enjoy the best of Indian card games with real dealers and lightning-fast withdrawals on India's most trusted platform." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
      ],
      links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/indian-card-games", "Indian Card Games on Cricbet99 — Teen Patti & Andar Bahar")),
      },
    ],
    };
  },
  component: IndianCardGames,
});

const games = [
  { icon: Crown, title: "Live Teen Patti", desc: "Experience the pulse of India's favorite card game. Our live Teen Patti tables feature Hindi-speaking dealers, HD quality streams, and side bets that amplify every hand's excitement." },
  { icon: Dices, title: "Online Andar Bahar", desc: "The ultimate game of chance. Watch every card placement in high definition as you predict whether Andar or Bahar will win. Fast rounds, instant payouts." },
  { icon: Sparkles, title: "Lucky 7", desc: "Simple, fast, and incredibly engaging. Bet on whether the next card will be above, below, or exactly 7. One of the highest-volume games on Cricbet99." },
  { icon: Gamepad2, title: "32 Cards Casino", desc: "A modern classic designed specifically for Indian casino lovers. Predict the winning hand among four players in this unique dealer-led game." },
  { icon: ShieldCheck, title: "Muflis Teen Patti", desc: "A refreshing twist on the classic where the lowest hand takes the pot. Perfect for players who enjoy strategic variety in their card games." },
  { icon: Zap, title: "Dragon Tiger Live", desc: "The quickest showdown in the casino. Pick your side and witness sub-second results with real human dealers streamed directly to your mobile or desktop." },
];

function IndianCardGames() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="The Heart of Indian Gaming"
        title={<>Classic Indian Games, <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Modern Experience.</span></>}
        subtitle="Cricbet99 brings the authentic feel of the club to your home. With real Hindi-speaking dealers and HD-streamed card games like Teen Patti and Andar Bahar, we offer the most culturally resonant casino platform for Indian players."
      />

      <AiOverview 
        summary="Cricbet99 specializes in localized gaming content, offering the most robust selection of Indian card games. Every table is managed by professional dealers and protected by the platform's instant settlement technology."
        highlights={[
          "Live Hindi-speaking dealer options",
          "Multiple Teen Patti and Andar Bahar variants",
          "Optimized for 4G/5G mobile connections",
          "Verified random card generation and fair play"
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black md:text-5xl">Traditional <span className="text-primary">Card Games</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60">From the streets to the screens, enjoy the games you know and love with the security and speed of Cricbet99.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <div key={g.title} className="group relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 transition-all hover:border-primary/40 hover:translate-y-[-4px]">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground shadow-lg transition-transform group-hover:rotate-6" style={{ background: "var(--gradient-gold)" }}>
                <g.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{g.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand 
        heading="Join the Live Dealer Table." 
        sub="Your Teen Patti seat is waiting. Message our verified WhatsApp number to get your Cricbet99 ID and start winning on India's favorite card games today." 
      />
    </SiteLayout>
  );
}
