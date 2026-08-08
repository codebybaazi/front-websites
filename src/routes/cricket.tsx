import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { Trophy, Radio, Target, Flag, Users } from "lucide-react";
import { AiOverview } from "@/components/ai-overview";

export const Route = createFileRoute("/cricket")({
  head: () => ({
    meta: [
      { title: "Cricket Betting on Cricbet99 | IPL 2026 Live Odds & ID" },
      { name: "description", content: "Join Cricbet99 for the best cricket betting experience in India. Live IPL 2026 odds, session markets, and ball-by-ball fancy bets. Get your official Cricbet99 ID via WhatsApp now." },
      { property: "og:title", content: "Official Cricket Betting on Cricbet99 | Live IPL 2026" },
      { property: "og:description", content: "Bet on every ball of IPL 2026 and international tours with India's most trusted exchange. Instant withdrawals and 24/7 support." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/cricket" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricket" }],
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
        subtitle="Cricbet99 is the heart of Indian cricket trading. From IPL 2026 to international bilateral tours, we provide deep live markets, ball-by-ball Fancy bets, and the fastest settlement in the industry."
      />

      <AiOverview 
        summary="Cricbet99 delivers a world-class cricket betting ecosystem for Indian fans. With a focus on IPL 2026 and international formats, we offer unmatched market depth, real-time odds, and secure WhatsApp-based account management."
        highlights={[
          "Live ball-by-ball Fancy and Session markets",
          "Complete IPL 2026 coverage with top-tier odds",
          "Instant settlement and same-day UPI withdrawals",
          "Dedicated 24/7 personal support via WhatsApp"
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
