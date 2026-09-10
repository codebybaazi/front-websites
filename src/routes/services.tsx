import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy, Dice5, Zap, BadgeCheck, Wallet, Headphones, Sparkles, ArrowUpRight } from "lucide-react";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const servicesFaqs: FAQItem[] = [
  { q: "What sports can I bet on with a Mahadev Book cricket ID?", a: "Cricket (IPL, T20 World Cup, WPL, BBL, PSL and India series), football (EPL, La Liga, Champions League, ISL), tennis, basketball, kabaddi and horse racing — all under one login." },
  { q: "Which casino games are live on Mahadev Book?", a: "Live-dealer Teen Patti, Andar Bahar, Roulette, Blackjack, Baccarat and Dragon Tiger — plus 500+ slots and instant games like Aviator, Mines and Dice." },
  { q: "How fast are deposits and withdrawals?", a: "UPI deposits credit in seconds. UPI withdrawals settle in minutes, bank transfers on the same working day. No invented delays." },
  { q: "Do I need a separate ID for casino, cricket and Aviator?", a: "No — one verified Mahadev Book ID unlocks every sport, live casino table, slot and instant game on the platform." },
  { q: "Do you have an agent / partner program?", a: "Yes. Onboard players from your circle, earn ongoing revenue share and manage every ID from a single dashboard. Message us on WhatsApp to apply." },
  { q: "Are cricket session and fancy markets available?", a: "Yes — full session, fancy, toss, over-by-over and player-prop markets for IPL, WPL, T20 World Cup and every India series." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Cricket Betting ID, Casino & Games — Mahadev Book Services" },
      { name: "description", content: "Get a verified cricket betting ID for IPL, live casino, Aviator and Teen Patti — plus instant UPI withdrawals, agent programs and 24/7 support on Mahadev Book." },
      { property: "og:title", content: "Cricket Betting ID, Casino & Games — Mahadev Book" },
        { name: "twitter:title", content: "Cricket Betting ID, Casino & Games — Mahadev Book" },
      { property: "og:description", content: "One verified cricket betting ID unlocks IPL markets, live casino, Aviator, Teen Patti and instant UPI payouts." },
      { property: "og:url", content: "https://mahadevbookss.com/services" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book Services — Cricket Betting ID, Live Casino, Instant UPI Payouts" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/services" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(servicesFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://mahadevbookss.com/services" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/services",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: ServicesPage,
});


const sports = [
  { id: "cricket", t: "Cricket Betting ID", d: "IPL, T20 World Cup, BBL, PSL, Ranji and every India series — with exchange-grade pre-match odds and second-by-second in-play markets. This is the cricket satta ID your friends keep asking you about." },
  { id: "football", t: "Football", d: "Premier League, La Liga, Serie A, Champions League, ISL and India internationals. Match, goals, corners and player-prop markets, all in one online betting ID." },
  { id: "tennis", t: "Tennis", d: "Grand slams, ATP and WTA tours, doubles and mixed. Set-by-set live odds that refresh in under a second — no lag, no missed windows." },
];

const casino = [
  { id: "live-casino", t: "Live Casino", d: "Real dealers streamed in HD — Teen Patti, Andar Bahar, Roulette, Blackjack and Baccarat, running around the clock." },
  { id: "slots", t: "Slots", d: "500+ RTP-tuned slot titles from Pragmatic Play, Evolution, Play'n GO and more. Something for every mood and budget." },
  { id: "cards", t: "Card Games", d: "Rummy, Poker cash tables and tournaments, plus every Teen Patti variant Indian players actually play." },
  { id: "virtual", t: "Virtual Sports", d: "Simulated football, tennis and horse racing that never stops — bet a round while you wait for the real match to start." },
  { id: "instant", t: "Instant Games", d: "Aviator, mines, dice and crash games. Quick rounds, quick decisions, quick payouts." },
];

const player = [
  { id: "ids", icon: BadgeCheck, t: "Verified Cricket ID Setup", d: "A verified online cricket ID in under 5 minutes on WhatsApp. One person, one ID — no shared logins, no proxies. That's the safety our whole platform is built on." },
  { id: "payouts", icon: Wallet, t: "Instant UPI Payouts", d: "UPI withdrawals settle in minutes. Bank transfers land the same working day. No invented delays, no runaround." },
];

const agent = [
  { id: "agents", icon: Sparkles, t: "Agent & Partner Network", d: "Onboard players in your circle, earn ongoing revenue share and manage every ID from one clean dashboard." },
  { id: "wallet", icon: Wallet, t: "Wallet & Admin Tools", d: "Multi-user wallets, deposit and withdrawal audit trails, and role-based access — built in, not bolted on." },
];


function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Games & Services
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Cricket betting ID, <span className="text-gradient-gold">casino & everything else</span> — one login
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          One verified Mahadev Book ID gets you IPL cricket odds, football, tennis, live casino tables, instant Aviator rounds and a full agent programme. Everything Indian bettors actually use, on the same trusted rails.
        </p>

      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Services"
        summary="Mahadev Book offers a single verified cricket betting ID that unlocks IPL and international cricket markets, football, tennis, kabaddi, live casino, Aviator, Teen Patti, and hundreds of slots. Every service runs on instant UPI deposits, minute-scale withdrawals, and a 24/7 human support desk."
        points={[
          "Cricket betting ID for IPL, T20 World Cup, WPL, BBL, PSL",
          "Session, fancy, toss and live in-play cricket satta markets",
          "Live casino: roulette, blackjack, baccarat, Andar Bahar",
          "Instant games: Aviator, Teen Patti, Dragon Tiger",
          "UPI deposits in seconds, withdrawals in minutes",
          "Agent / partner program with revenue share",
        ]}
        keywords={["cricket betting id", "cricket satta id", "ipl betting id", "online betting id", "aviator", "teen patti"]}
      />


      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">What services does Mahadev Book offer?</h2>
        <h3 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
          <Trophy className="h-6 w-6 text-primary" /> Sports betting
        </h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {sports.map((s) => (
            <div key={s.id} id={s.id} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition scroll-mt-24">
              <div className="font-display text-xl font-bold text-primary">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <h3 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
          <Dice5 className="h-6 w-6 text-primary" /> Casino & instant games
        </h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {casino.map((s) => (
            <div key={s.id} id={s.id} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition scroll-mt-24">
              <div className="font-display text-lg font-bold text-primary">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <h3 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
          <Zap className="h-6 w-6 text-primary" /> For players
        </h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {player.map((s) => (
            <div key={s.id} id={s.id} className="rounded-2xl border border-border bg-card p-6 scroll-mt-24">
              <div className="h-11 w-11 rounded-lg bg-primary/15 text-primary grid place-items-center"><s.icon className="h-5 w-5" /></div>
              <div className="mt-4 font-display text-lg font-bold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8 pb-16">
        <h3 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
          <Headphones className="h-6 w-6 text-primary" /> For agents
        </h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {agent.map((s) => (
            <div key={s.id} id={s.id} className="rounded-2xl border border-border bg-card p-6 scroll-mt-24">
              <div className="h-11 w-11 rounded-lg bg-primary/15 text-primary grid place-items-center"><s.icon className="h-5 w-5" /></div>
              <div className="mt-4 font-display text-lg font-bold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/contact" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content">Get your ID</span>
            <span className="btn-glow-content grid place-items-center h-7 w-7 rounded-full bg-black/25">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
      <FAQSection title="Services & Games — FAQs" items={servicesFaqs} />
      <QuickLinks
        pageCategory="Platform"
        excludePath="/services"
        title="Related services & platforms"
        subtitle="Cricket, casino, wallet options and mobile access."
      />
    </>
  );
}
