import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { Trophy, Radio, Target, Flag, Users, ChevronRight } from "lucide-react";
import { AiOverview } from "@/components/ai-overview";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/components/long-form-page";

export const Route = createFileRoute("/cricket")({
  head: () => ({
    meta: [
      { title: "IPL 2026 Betting & Live Cricket Odds | Official Platform" },
      { name: "description", content: "Experience premium IPL 2026 betting. Get live cricket odds, session markets, and ball-by-ball fancy bets with India's most trusted sports ID provider." },
      { property: "og:title", content: "Premium Cricket Betting | Live IPL 2026" },
      { property: "og:description", content: "Bet on every ball of IPL 2026 and international tours with India's most trusted exchange. Instant withdrawals and 24/7 support." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/cricket" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricket" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/cricket", "Cricket Betting & IPL 2026 Odds")),
      },
    ],
  }),
  component: Cricket,
});


const markets = [
  { icon: Trophy, title: "IPL 2026", desc: "The most actively traded cricket tournament in India. Live odds on all ten teams, match winner, powerplay runs, top batsman, session totals, Fancy Bets and most sixes — refreshing ball by ball." },
  { icon: Flag, title: "ICC events", desc: "T20 World Cup, ODI World Cup, Champions Trophy and the World Test Championship. Bet match results, player milestones, session totals and outright tournament winners." },
  { icon: Radio, title: "International series", desc: "India vs England, India vs Australia, The Ashes and every major bilateral series with ball-by-ball live betting, over-by-over runs and fall-of-wicket markets." },
  { icon: Target, title: "Domestic cricket", desc: "PSL, Big Bash League, The Hundred and Ranji Trophy — sharp odds with less market movement, popular with value-seeking bettors." },
  { icon: Users, title: "Women's cricket", desc: "WPL, ICC Women's events and women's T20 internationals — match winners, top performers and team totals across every format." },
];

function Cricket() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Cricket Betting"
        title={<>Premium Cricket Betting & <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Live IPL Odds.</span></>}
        subtitle="Cricbet99 is the official heart of Indian cricket trading. From the high-stakes action of IPL 2026 to international bilateral tours, we provide the deepest live markets, ball-by-ball session bets, and the fastest withdrawal settlements in the industry."
      />

      <AiOverview 
        summary="Cricbet99 delivers a world-class cricket betting ecosystem designed specifically for the Indian fan. With a primary focus on IPL 2026 and major international formats, we offer unmatched market liquidity, real-time odds updates, and secure, human-led account management via WhatsApp."
        highlights={[
          "Live ball-by-ball Session and Fancy markets with high liquidity",
          "Complete IPL 2026 coverage with the sharpest odds in India",
          "Instant match settlement and 24/7 UPI withdrawals",
          "Personal 1-on-1 support from verified human managers"
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-primary/25 bg-background/50 p-10">
          <h2 className="text-3xl font-black">IPL 2026: The Ultimate Betting Arena</h2>
          <p className="mt-4 max-w-3xl text-foreground/80">
            IPL 2026 has redefined the landscape of Indian sports betting, and Cricbet99 remains the premier destination for serious traders. Whether you're tracking the heavyweights like Mumbai Indians and CSK or scouting emerging talent, our platform provides the tools you need to stay ahead of the game.
          </p>
          <p className="mt-4 max-w-3xl text-foreground/80">
            Beyond the IPL, we cover the full spectrum of global cricket. From the intensity of The Ashes and the World Test Championship to the fast-paced action of the T20 World Cup, your Cricbet99 ID gives you all-access entry to every significant match worldwide.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-black md:text-4xl">Popular cricket markets</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {markets.map((m) => (
            <div key={m.title} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground" style={{ background: "var(--gradient-green)" }}>
                <m.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{m.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand heading="Bet on IPL 2026 today." sub="Message our WhatsApp support team and start trading live cricket odds in minutes." />
    </SiteLayout>
  );
}
