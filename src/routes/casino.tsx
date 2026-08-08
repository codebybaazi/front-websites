import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { Gamepad2, Sparkles, Dices, Crown } from "lucide-react";
import { AiOverview } from "@/components/ai-overview";

export const Route = createFileRoute("/casino")({
  head: () => ({
    meta: [
      { title: "Live Casino on Cricbet99 — Teen Patti, Andar Bahar & Roulette" },
      { name: "description", content: "HD-streamed live casino with real dealers. Play Teen Patti, Andar Bahar, Roulette, Baccarat, Blackjack and Dragon Tiger 24/7 on Cricbet99. Instant payouts." },
      { property: "og:title", content: "Live Casino on Cricbet99" },
      { property: "og:description", content: "Real dealers, HD streams and instant round switching, 24/7." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/casino" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/casino" }],
  }),
  component: Casino,
});

const tables = [
  { icon: Crown, title: "Teen Patti", desc: "India's favourite three-card game with real dealers, side bets and fast rounds — streamed in HD around the clock." },
  { icon: Dices, title: "Andar Bahar", desc: "Classic Indian card game with instant results and multiple side bet variants." },
  { icon: Sparkles, title: "Roulette", desc: "European and Auto Roulette tables with straight-up, split and outside bets. Live wheels, live drama." },
  { icon: Gamepad2, title: "Baccarat", desc: "Player, Banker and Tie plus side bets on every hand — sharp odds and quick settlement." },
  { icon: Crown, title: "Blackjack", desc: "Real dealer Blackjack with side bets, multiple seats and 24/7 tables." },
  { icon: Dices, title: "Dragon Tiger", desc: "Fast-paced two-card duel — pick a side and see the result in seconds." },
];

function Casino() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Live Casino"
        title={<>Real dealers. <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Real thrill.</span> 24/7.</>}
        subtitle="Cricbet99's live casino brings HD-streamed tables with real dealers to your screen at any hour. Play Teen Patti, Andar Bahar, Roulette, Baccarat, Blackjack, Dragon Tiger and slots — all with one verified ID and instant round switching."
      />
      <AiOverview 
        summary="Cricbet99's Live Casino provides an immersive HD experience with real dealers for India's favourite games like Teen Patti and Andar Bahar, operating 24/7 with instant payouts."
        highlights={[
          "HD quality streaming with professional dealers",
          "Wide variety of Indian and global card games",
          "Instant settlement on all table rounds",
          "Mobile-optimized gameplay for iOS and Android"
        ]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tables.map((t) => (
            <div key={t.title} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{t.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand heading="Take a seat at the table." sub="Get your Cricbet99 Casino ID via WhatsApp and start playing in minutes." />
    </SiteLayout>
  );
}
