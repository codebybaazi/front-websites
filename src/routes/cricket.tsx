import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { Trophy, Radio, Target, Flag, Users } from "lucide-react";

export const Route = createFileRoute("/cricket")({
  head: () => ({
    meta: [
      { title: "Cricket Betting on Cricbet99 — IPL, T20 & International" },
      { name: "description", content: "Bet on IPL 2026, T20 World Cup, ODI series and every bilateral tour with live ball-by-ball odds, Fancy Bets and session markets on Cricbet99. Get your ID now." },
      { property: "og:title", content: "Cricket Betting on Cricbet99" },
      { property: "og:description", content: "IPL, T20, ODI and Test cricket — deep live markets on every match with instant payouts." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cricket" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cricket" }],
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
        eyebrow="Cricket Betting"
        title={<>Bet on every ball of <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Indian cricket.</span></>}
        subtitle="Cricket is the heart of Cricbet99. From IPL 2026 and the T20 World Cup to bilateral tours and domestic tournaments, every major match gets deep live markets, session bets and Fancy Bets — all through your single verified ID."
      />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-primary/25 bg-background/50 p-10">
          <h2 className="text-3xl font-black">IPL 2026 and beyond</h2>
          <p className="mt-4 max-w-3xl text-foreground/80">
            IPL 2026 was another record-breaking season, with the champions joining Chennai Super Kings and Mumbai Indians as one of the few franchises to lift back-to-back titles. Cricbet99 was the go-to platform for Indian players from the opening powerplay of Match 1 to the final over of the title decider.
          </p>
          <p className="mt-4 max-w-3xl text-foreground/80">
            The cricket calendar never sleeps. India's ODI and T20 tours, the England series, Ashes contests and every ICC event are fully covered on Cricbet99 with live session odds, Fancy Bets, ball-by-ball markets and match-winner betting — all from one verified account.
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
