import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { Gamepad2, Sparkles, Dices, Crown, ShieldCheck, Zap, ChevronRight } from "lucide-react";
import { AiOverview } from "@/components/ai-overview";
import { getRequestOrigin } from "@/lib/origin.functions";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/components/long-form-page";

export const Route = createFileRoute("/casino")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/casino`;
    return {
      meta: [
        { title: "Cricbet99 Live Casino — Teen Patti, Andar Bahar & 500+ Games" },
        { name: "description", content: "Experience India's most trusted live casino on Cricbet99. Play Teen Patti, Andar Bahar, Roulette, and Baccarat with HD streaming and real dealers. Instant 24/7 payouts." },
        { name: "keywords", content: "cricbet99 casino, live teen patti, online andar bahar, cricbet99 live dealer, online casino india, cricbet99 app casino" },
        { property: "og:title", content: "Cricbet99 Live Casino — Real Dealers & Instant Payouts" },
        { property: "og:description", content: "Get your Cricbet99 Casino ID and play live card games, slots and roulette with 24/7 support and lightning fast withdrawals." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: Casino,
});

const tables = [
  { icon: Crown, title: "Live Teen Patti", desc: "India's favorite card game, optimized for mobile and desktop. Play classic Teen Patti or Muflis with real human dealers and side bets like pair-plus." },
  { icon: Dices, title: "Online Andar Bahar", desc: "The fastest Indian casino game. Simple rules, instant results, and multi-camera HD streams that capture every card drawn in real-time." },
  { icon: Sparkles, title: "Live Roulette", desc: "Experience the thrill of the wheel with European and American Roulette. HD streaming ensures you never miss a spin, with instant winning settlements." },
  { icon: Gamepad2, title: "Premium Baccarat", desc: "The high-roller classic. Bet on Player, Banker, or Tie with professional dealers. Low house edge and rapid-fire rounds for maximum action." },
  { icon: ShieldCheck, title: "Live Blackjack", desc: "Multiple tables and seats available 24/7. Beat the dealer in HD quality with smooth controls and real-time interaction with other players." },
  { icon: Zap, title: "Dragon Tiger", desc: "Fast-paced, high-intensity two-card duel. The simplest live casino game with the quickest payouts on the Cricbet99 platform." },
];

function Casino() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Intelligence & Entertainment"
        title={<>Premium Live Casino. <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Zero Latency.</span> 24/7 Action.</>}
        subtitle="Cricbet99 redefines the online casino experience for the modern Indian player. By combining bank-grade encryption with crystal-clear HD-streamed live tables, we offer the most immersive way to play Teen Patti, Andar Bahar, and 500+ premium slots with one verified ID."
      />
      
      <AiOverview 
        summary="Cricbet99's Casino ecosystem is built on a foundation of transparency and speed. With professional human dealers, low-latency HD broadcasting, and instant UPI-powered withdrawals, it is the premier choice for serious Indian casino enthusiasts."
        highlights={[
          "HD-Quality live streams with sub-second latency",
          "Professional dealers providing a real casino atmosphere",
          "Instant round-by-round settlement for all card games",
          "24/7 dedicated WhatsApp support for VIP casino members"
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black md:text-5xl">Explore Our <span className="text-primary">Live Tables</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60">Choose from a wide variety of card games and casino classics, all streamed live from premium studios across the globe.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tables.map((t) => (
            <div key={t.title} className="group relative rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-8 transition-all hover:border-primary/50 hover:bg-primary/10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground shadow-lg transition-transform group-hover:scale-110" style={{ background: "var(--gradient-gold)" }}>
                <t.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{t.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-black md:text-5xl mb-12">Why Play Casino on <span className="text-primary">Cricbet99?</span></h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-2xl bg-background/40 border border-primary/10 backdrop-blur-sm">
              <div className="text-accent text-4xl font-black mb-4">01</div>
              <h4 className="text-lg font-bold mb-2">Instant Cashouts</h4>
              <p className="text-sm text-foreground/60">Won big on a Teen Patti hand? Your winnings can be in your bank account via UPI within minutes.</p>
            </div>
            <div className="p-6 rounded-2xl bg-background/40 border border-primary/10 backdrop-blur-sm">
              <div className="text-accent text-4xl font-black mb-4">02</div>
              <h4 className="text-lg font-bold mb-2">Verified Fair Play</h4>
              <p className="text-sm text-foreground/60">Our live dealer systems are regularly audited for fairness, ensuring a transparent environment for every player.</p>
            </div>
            <div className="p-6 rounded-2xl bg-background/40 border border-primary/10 backdrop-blur-sm">
              <div className="text-accent text-4xl font-black mb-4">03</div>
              <h4 className="text-lg font-bold mb-2">One ID, Total Access</h4>
              <p className="text-sm text-foreground/60">Use your Cricbet99 cricket ID to access all casino tables. No need for multiple accounts or balances.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABand 
        heading="Claim your Casino Seat." 
        sub="Join thousands of players winning daily on Cricbet99. Message our verified WhatsApp number to get your live casino ID and 100% welcome bonus." 
      />
    </SiteLayout>
  );
}
