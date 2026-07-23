import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg?w=1600&format=webp&quality=72";

import {
  MessageCircle,
  Send,
  Shield,
  Zap,
  Users,
  Sparkles,
  Wallet,
  ArrowUpRight,
  Trophy,
  Dice5,
  Flame,
  Star,
  Headphones,
  Lock,
  Clock,
  CheckCircle2,
  Smartphone,
  CreditCard,
  IndianRupee,
  BadgeCheck,
  Check,
} from "lucide-react";
import { SiteHeader, WHATSAPP, TELEGRAM } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroSlider } from "@/components/HeroSlider";
import { InPlayMatches } from "@/components/InPlayMatches";
import { AiOverviewSection } from "@/components/AiOverviewSection";
import { aiOverviewQueryOptions } from "@/lib/ai-overview.functions";
import { Link } from "@tanstack/react-router";
import { blogPosts } from "@/data/blog-posts";
import crashAviator from "@/assets/crash-aviator.jpg?w=400&format=webp&quality=68";
import crashJetx from "@/assets/crash-jetx.jpg?w=400&format=webp&quality=68";
import crashSpaceman from "@/assets/crash-spaceman.jpg?w=400&format=webp&quality=68";
import crashRocketon from "@/assets/crash-rocketon.jpg?w=400&format=webp&quality=68";
import crashCashshow from "@/assets/crash-cashshow.jpg?w=400&format=webp&quality=68";
import crashClassic from "@/assets/crash-classic.jpg?w=400&format=webp&quality=68";
import crashBalloon from "@/assets/crash-balloon.jpg?w=400&format=webp&quality=68";
import crashMines from "@/assets/crash-mines.jpg?w=400&format=webp&quality=68";
import crashPlinko from "@/assets/crash-plinko.jpg?w=400&format=webp&quality=68";
import crashCricketx from "@/assets/crash-cricketx.jpg?w=400&format=webp&quality=68";
import instantDragonTiger from "@/assets/instant-dragon-tiger.jpg?w=400&format=webp&quality=68";
import instantTeenPatti from "@/assets/instant-teenpatti.jpg?w=400&format=webp&quality=68";
import instantAndarBahar from "@/assets/instant-andarbahar.jpg?w=400&format=webp&quality=68";
import instantLucky7 from "@/assets/instant-lucky7.jpg?w=400&format=webp&quality=68";
import instantRoulette from "@/assets/instant-roulette.jpg?w=400&format=webp&quality=68";
import instantBaccarat from "@/assets/instant-baccarat.jpg?w=400&format=webp&quality=68";
import instantSicbo from "@/assets/instant-sicbo.jpg?w=400&format=webp&quality=68";
import instant32Cards from "@/assets/instant-32cards.jpg?w=400&format=webp&quality=68";
import casinoRoulette from "@/assets/casino-roulette.jpg?w=400&format=webp&quality=68";
import casinoBlackjack from "@/assets/casino-blackjack.jpg?w=400&format=webp&quality=68";
import casinoBaccarat from "@/assets/casino-baccarat.jpg?w=400&format=webp&quality=68";
import casinoSicbo from "@/assets/casino-sicbo.jpg?w=400&format=webp&quality=68";
import casinoDragonTiger from "@/assets/casino-dragontiger.jpg?w=400&format=webp&quality=68";
import casinoAndarBahar from "@/assets/instant-andarbahar.jpg?w=400&format=webp&quality=68";
import slotOlympus from "@/assets/slot-olympus.jpg?w=400&format=webp&quality=68";
import slotSweetBonanza from "@/assets/slot-sweetbonanza.jpg?w=400&format=webp&quality=68";
import slotBook from "@/assets/slot-book.jpg?w=400&format=webp&quality=68";
import slotWildWest from "@/assets/slot-wildwest.jpg?w=400&format=webp&quality=68";
import slotStarburst from "@/assets/slot-starburst.jpg?w=400&format=webp&quality=68";
import slotBigBass from "@/assets/slot-bigbass.jpg?w=400&format=webp&quality=68";
import tablePoker from "@/assets/table-poker.jpg?w=400&format=webp&quality=68";
import tableCraps from "@/assets/table-craps.jpg?w=400&format=webp&quality=68";
import tableHoldem from "@/assets/table-holdem.jpg?w=400&format=webp&quality=68";
import table3CardPoker from "@/assets/table-3cardpoker.jpg?w=400&format=webp&quality=68";
import tableWar from "@/assets/table-war.jpg?w=400&format=webp&quality=68";

import { liveMatchesQueryOptions } from "@/lib/live-matches.functions";



export const Route = createFileRoute("/")({
  loader: ({ context }) => {
    void context.queryClient.prefetchQuery(aiOverviewQueryOptions);
    return context.queryClient.ensureQueryData(liveMatchesQueryOptions);
  },
  head: () => ({
    meta: [
      { title: "Online Cricket & Betting ID in India — Sprinters" },
      {
        name: "description",
        content:
          "Get your online cricket & betting ID in minutes with Sprinters. IPL, football, tennis & live casino — instant UPI, 24-hour payouts, 24/7 support.",
      },
      { property: "og:title", content: "Online Cricket & Betting ID in India — Sprinters" },
      {
        property: "og:description",
        content:
          "One verified Sprinters cricket ID unlocks Laser247, Tiger Exchange, Cricbet99, 11xplay and more — sharp odds, instant deposits and 24-hour payouts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "https://sprintersbokk.com/og-banner.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Sprinters Online Gaming — India's Trusted Online Betting ID" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://sprintersbokk.com/og-banner.jpg" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preload",
        as: "image",
        href: heroSlide1,
        fetchpriority: "high",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqLd()) },
    ],
  }),
  component: Index,
});

const markets = [
  { title: "IPL 2027 Live", tag: "Ball-by-ball", icon: Trophy },
  { title: "Live Casino", tag: "24/7 Dealers", icon: Dice5 },
  { title: "Football Betting", tag: "EPL · UCL", icon: Flame },
  { title: "Fancy Bets", tag: "Session Odds", icon: Sparkles },
  { title: "Tennis Markets", tag: "ATP · WTA", icon: Star },
  { title: "Teen Patti", tag: "Andar Bahar", icon: Dice5 },
];

const exchanges = [
  { name: "Sky", suffix: "Exch", gradient: "from-sky-400 to-blue-600", accent: "#38bdf8" },
  { name: "Diamond", suffix: "Exch", gradient: "from-cyan-300 to-indigo-500", accent: "#22d3ee" },
  { name: "Lotus", suffix: "365", gradient: "from-pink-500 to-rose-600", accent: "#ec4899" },
  { name: "World", suffix: "777", gradient: "from-amber-400 to-orange-600", accent: "#f59e0b" },
  { name: "Tiger", suffix: "Exch", gradient: "from-orange-500 to-red-600", accent: "#f97316" },
  { name: "Laser", suffix: "247", gradient: "from-lime-400 to-emerald-600", accent: "#84cc16" },
  { name: "11x", suffix: "play", gradient: "from-violet-500 to-fuchsia-600", accent: "#a855f7" },
  { name: "Play99", suffix: "Exch", gradient: "from-emerald-400 to-teal-600", accent: "#10b981" },
  { name: "Cricbet", suffix: "99", gradient: "from-red-500 to-yellow-500", accent: "#ef4444" },
  { name: "Go", suffix: "Exchange", gradient: "from-blue-500 to-purple-600", accent: "#3b82f6" },
];

const stats = [
  ["10K+", "IDs Issued & Verified"],
  ["1 Lakh+", "Active Verified Punters"],
  ["24 hr", "Withdrawal Processing"],
  ["30+", "Exchanges & Sportsbooks"],
];

const sports = [
  { title: "Cricket ★", text: "The heart of Sprinters. IPL, T20 World Cup, ODI World Cup, The Ashes, PSL and every bilateral series — match winner, top batsman, session runs, Fancy Bets and over-by-over totals with live odds every ball." },
  { title: "Football", text: "Premier League, La Liga, Bundesliga, ISL, UEFA Champions League and FIFA fixtures — match winner, BTTS, handicaps and full in-play betting." },
  { title: "Tennis", text: "ATP, WTA and every Grand Slam. Bet on match winners, set scores and game-level markets with live odds." },
  { title: "Horse Racing", text: "Indian and international race cards with win, place and each-way options. Quick settlement and competitive prices on race days." },
  { title: "Kabaddi", text: "Full Pro Kabaddi League coverage — live bets on raid points, match winners and team totals throughout the season." },
  { title: "Live Casino", text: "HD-streamed live dealers 24/7 — Blackjack, Roulette, Baccarat, Dragon Tiger, Teen Patti and Andar Bahar, all through one Sprinters ID." },
  { title: "Indian Card Games", text: "Teen Patti, Andar Bahar, Rummy and Baccarat. Fast rounds, instant results and the classic Indian gameplay you love." },
  { title: "Fantasy & Esports", text: "Fantasy contests and esports markets on top titles with live odds and quick payouts." },
];

const howSteps = [
  { n: "01", title: "Ping us on WhatsApp", text: "Tap any 'Get ID' button to reach our verified support desk. We respond instantly, 24 hours a day." },
  { n: "02", title: "Share basic details", text: "Send your name and the mobile number you want linked. Used only for OTP and account setup — never shared." },
  { n: "03", title: "Verify with OTP", text: "Confirm the one-time password we send to your phone. Keeps your account secure from day one." },
  { n: "04", title: "Load your wallet", text: "Deposit via UPI, GPay, PhonePe, Paytm or bank transfer. Balance reflects in seconds." },
  { n: "05", title: "Receive your ID", text: "Your Sprinters ID and password land on WhatsApp the moment your deposit is confirmed." },
  { n: "06", title: "Login and play", text: "Sign in on any device and start betting on IPL, football, tennis, kabaddi or live casino instantly." },
];

const ids = [
  {
    badge: "MOST POPULAR",
    name: "Sprinters Sports ID",
    features: [
      "Live cricket — IPL 2027, T20, international series",
      "Football, tennis, kabaddi and horse racing markets",
      "Session bets, Fancy Bets and over-by-over odds",
      "Access to Laser247, Tiger Exch, Cricbet99, 11xplay",
      "Fast UPI deposits and 24-hour withdrawals",
      "24/7 WhatsApp support for every query",
    ],
  },
  {
    badge: "FOR CASINO PLAYERS",
    name: "Sprinters Casino ID",
    features: [
      "Live dealers — Blackjack, Roulette, Baccarat, Dragon Tiger",
      "Indian card games: Teen Patti, Andar Bahar, Rummy",
      "HD streams with real dealers, available 24/7",
      "Slot games across multiple themes and jackpots",
      "Secure wallet with UPI deposits and payouts",
      "Instant round switching and smooth gameplay",
    ],
  },
  {
    badge: "FOR NEW USERS",
    name: "Sprinters Demo ID",
    features: [
      "Explore the platform before placing real bets",
      "Learn session bets, Fancy Bets and live odds",
      "Browse cricket and casino sections risk-free",
      "Understand how markets move at your own pace",
      "Upgrade to Sports or Casino ID anytime",
      "Available to new users via WhatsApp",
    ],
  },
];

const why = [
  { icon: Users, title: "Trusted user base", text: "Lakhs of verified players across India rely on Sprinters every single day." },
  { icon: BadgeCheck, title: "Guided access", text: "Every ID is created with real human support — no confusing forms, no bots." },
  { icon: Lock, title: "Data handled responsibly", text: "Your details stay with us. We never share your info with third parties." },
  { icon: Headphones, title: "Support round the clock", text: "WhatsApp and Telegram assistance any hour, any day — real replies from real people." },
  { icon: Clock, title: "24-hour withdrawals", text: "Payout requests are processed within 24 hours, straight to your UPI or bank account." },
  { icon: Smartphone, title: "Bet from anywhere", text: "Fully mobile-ready — place live IPL bets, check odds and manage your wallet on the go." },
];

const cricketMarkets = [
  { title: "IPL 2027", text: "The most active tournament on the book. Live ball-by-ball odds for all 10 teams — match winner, powerplay runs, top batsman, session totals, Fancy Bets and most sixes." },
  { title: "ICC Events", text: "T20 World Cup, ODI World Cup, Champions Trophy and World Test Championship — match results, player milestones and outright tournament winners." },
  { title: "International Series", text: "India vs England, India vs Australia, The Ashes and every bilateral. Ball-by-ball live betting with over-by-over runs and player props." },
  { title: "Domestic Cricket", text: "PSL, Big Bash League, The Hundred and Ranji Trophy — competitive odds with less market movement, ideal for value hunters." },
  { title: "Women's Cricket", text: "WPL, ICC Women's events and Women's T20 internationals — match winners, top performers and team totals across every format." },
];

const FAQ_ITEMS = [
  { q: "What is Sprinters Online Gaming?", a: "Sprinters is a guided-access platform that helps Indian players reach agent-assisted online cricket, sports and casino services. You get a single verified ID, real WhatsApp support and access to multiple leading exchanges." },
  { q: "How do I get a Sprinters ID?", a: "Tap any 'Get ID' button — you'll be routed to WhatsApp where our team sets you up in under five minutes with a verified ID and login." },
  { q: "Is Sprinters safe to use?", a: "Yes. Every transaction is encrypted, OTP verification protects each login, and your personal details are never shared with third parties." },
  { q: "Which sports and games can I bet on?", a: "Cricket (IPL, T20, internationals, domestic), football, tennis, kabaddi, horse racing, esports and a full HD live casino with Teen Patti, Andar Bahar, Blackjack and Roulette." },
  { q: "Which payment methods do you accept?", a: "UPI, GPay, PhonePe, Paytm, BHIM and direct bank transfer — for both deposits and withdrawals." },
  { q: "How fast are withdrawals?", a: "Withdrawal requests are processed within 24 hours and land directly in your UPI ID or bank account with no surprise deductions." },
  { q: "Are there fees for deposits or withdrawals?", a: "Sprinters does not charge platform-level fees. Your bank or payment provider may apply their own charges." },
  { q: "What if I forget my password?", a: "Reach out on WhatsApp — our team will guide you through recovery and get you back in quickly." },
  { q: "Is support really available 24/7?", a: "Yes — WhatsApp and Telegram are staffed round the clock, every day of the year." },
  { q: "Is there an age restriction?", a: "You must be 18 or older, or the legal age in your state, to open and use a Sprinters account." },
];

function buildFaqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <h1 className="sr-only">Online Cricket ID & Betting ID in India — Sprinters Online Gaming</h1>

      <HeroSlider />

      <Suspense fallback={null}>
        <AiOverviewSection />
      </Suspense>

      {/* Stats strip */}
      <section className="mx-auto mt-6 max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="bg-background/80 px-6 py-6 text-center backdrop-blur">
              <div
                className="bg-clip-text text-2xl font-black text-transparent md:text-3xl"
                style={{ backgroundImage: "var(--gradient-text)" }}
              >
                {n}
              </div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              <Sparkles className="h-3 w-3" /> Why Sprinters
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl lg:text-5xl">
              One trusted ID.{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                Every game.
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base lg:text-lg">
              India's most trusted online gaming & betting ID — cricket, casino, football, tennis
              and instant games on one verified login.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BadgeCheck, title: "Verified ID in 5 mins", body: "Unlocks Laser247, Tiger Exchange, Cricbet99 & 11xplay." },
              { icon: Trophy, title: "Live Sports Betting", body: "IPL, ICC, EPL, tennis & racing with Fancy + session odds." },
              { icon: Dice5, title: "Live Casino & Crash", body: "Teen patti, andar bahar, Aviator, JetX — running 24/7." },
              { icon: IndianRupee, title: "Instant UPI Deposits", body: "Fund in seconds. No hidden charges, no waiting." },
              { icon: Zap, title: "24-Hour Payouts", body: "Winnings in your bank within 24 hours, no cap." },
              { icon: Headphones, title: "24×7 Support", body: "Real humans on WhatsApp & Telegram in Hindi + English." },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary/60 hover:bg-white/[0.05]"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground md:text-base">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crash games */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              <Flame className="h-3 w-3" /> Crash Games
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl lg:text-5xl">
              Instant wins,{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                one-tap cashout.
              </span>
            </h2>
          </div>

          {(() => {
            const crashGames = [
              { title: "Aviator", tag: "Fly & Cash Out", multi: "×100", img: crashAviator },
              { title: "JetX", tag: "Rocket Launch", multi: "×200", img: crashJetx },
              { title: "Cash Show", tag: "Live Host", multi: "×50", img: crashCashshow },
              { title: "Rocketon", tag: "Space Ride", multi: "×500", img: crashRocketon },
              { title: "SpaceMan", tag: "Pragmatic", multi: "×5000", img: crashSpaceman },
              { title: "Crash", tag: "Classic", multi: "×1000", img: crashClassic },
              { title: "Balloon", tag: "Rise & Pop", multi: "×80", img: crashBalloon },
              { title: "Mines", tag: "Pick Safe", multi: "×24", img: crashMines },
              { title: "Plinko", tag: "Drop & Win", multi: "×1000", img: crashPlinko },
              { title: "Cricket X", tag: "Fly-away", multi: "×200", img: crashCricketx },
            ];
            return (
              <div className="group/marquee relative mt-8 -mx-6 overflow-hidden md:mx-0">
                <div className="marquee-track flex gap-4">
                  {[...crashGames, ...crashGames].map((g, i) => (
                    <a
                      key={`${g.title}-${i}`}
                      href={WHATSAPP}
                      className="group relative w-[170px] shrink-0 rounded-2xl p-[1.5px] transition hover:-translate-y-1 sm:w-[190px]"
                      style={{ background: "var(--gradient-hero)" }}
                    >
                      <div className="relative flex flex-col overflow-hidden rounded-[14px] bg-black">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={g.img}
                            alt={`${g.title} crash game`}
                            loading="lazy"
                            width={512}
                            height={512}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                          <span className="absolute right-2 top-2 rounded-full border border-primary/40 bg-black/70 px-2 py-0.5 text-[10px] font-bold text-primary backdrop-blur">
                            {g.multi}
                          </span>
                        </div>
                        <div className="p-3">
                          <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                            {g.tag}
                          </div>
                          <p className="mt-0.5 text-sm font-bold text-white group-hover:text-primary md:text-base">
                            {g.title}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />
              </div>
            );
          })()}
        </div>
      </section>

      {/* Instant games */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">
              <Zap className="h-3 w-3" /> Instant Games
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl lg:text-5xl">
              Quick rounds.{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                Bigger thrills.
              </span>
            </h2>
          </div>

          {(() => {
            const instantGames = [
              { title: "Dragon Tiger", tag: "1-Card Duel", multi: "1:1", img: instantDragonTiger },
              { title: "Teen Patti", tag: "3-Card Poker", multi: "×90", img: instantTeenPatti },
              { title: "Andar Bahar", tag: "Joker Card", multi: "×25", img: instantAndarBahar },
              { title: "Lucky 7", tag: "Up · Down · 7", multi: "×12", img: instantLucky7 },
              { title: "Roulette", tag: "Live Wheel", multi: "×36", img: instantRoulette },
              { title: "Baccarat", tag: "Banker · Player", multi: "×8", img: instantBaccarat },
              { title: "Sic Bo", tag: "3-Dice Bets", multi: "×180", img: instantSicbo },
              { title: "32 Cards", tag: "Player Battle", multi: "×11", img: instant32Cards },
            ];
            return (
              <div className="group/marquee relative mt-8 -mx-6 overflow-hidden md:mx-0">
                <div className="marquee-track-reverse flex gap-4">
                  {[...instantGames, ...instantGames].map((g, i) => (
                    <a
                      key={`${g.title}-${i}`}
                      href={WHATSAPP}
                      className="group relative w-[170px] shrink-0 rounded-2xl p-[1.5px] transition hover:-translate-y-1 sm:w-[190px]"
                      style={{ background: "var(--gradient-hero)" }}
                    >
                      <div className="relative flex flex-col overflow-hidden rounded-[14px] bg-black">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={g.img}
                            alt={`${g.title} instant game`}
                            loading="lazy"
                            width={512}
                            height={512}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                          <span className="absolute right-2 top-2 rounded-full border border-secondary/40 bg-black/70 px-2 py-0.5 text-[10px] font-bold text-secondary backdrop-blur">
                            {g.multi}
                          </span>
                        </div>
                        <div className="p-3">
                          <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                            {g.tag}
                          </div>
                          <p className="mt-0.5 text-sm font-bold text-white group-hover:text-secondary md:text-base">
                            {g.title}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />
              </div>
            );
          })()}
        </div>
      </section>

      {/* Live Casino */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              <Dice5 className="h-3 w-3" /> Live Casino
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl lg:text-5xl">
              Real dealers.{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                Real action.
              </span>
            </h2>
          </div>

          {(() => {
            const casinoGames = [
              { title: "Roulette", tag: "Live Wheel", multi: "×36", img: casinoRoulette },
              { title: "Blackjack", tag: "Beat the Dealer", multi: "×3", img: casinoBlackjack },
              { title: "Baccarat", tag: "Banker · Player", multi: "×8", img: casinoBaccarat },
              { title: "Sic Bo", tag: "3 Dice Bets", multi: "×180", img: casinoSicbo },
              { title: "Dragon Tiger", tag: "1-Card Duel", multi: "1:1", img: casinoDragonTiger },
              { title: "Andar Bahar", tag: "Joker Card", multi: "×25", img: casinoAndarBahar },
            ];
            return (
              <div className="group/marquee relative mt-8 -mx-6 overflow-hidden md:mx-0">
                <div className="marquee-track flex gap-4">
                  {[...casinoGames, ...casinoGames].map((g, i) => (
                    <a
                      key={`${g.title}-${i}`}
                      href={WHATSAPP}
                      className="group relative w-[170px] shrink-0 rounded-2xl p-[1.5px] transition hover:-translate-y-1 sm:w-[190px]"
                      style={{ background: "var(--gradient-hero)" }}
                    >
                      <div className="relative flex flex-col overflow-hidden rounded-[14px] bg-black">
                        <div className="relative aspect-square overflow-hidden">
                          <img src={g.img} alt={`${g.title} live casino`} loading="lazy" width={512} height={512} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                          <span className="absolute right-2 top-2 rounded-full border border-primary/40 bg-black/70 px-2 py-0.5 text-[10px] font-bold text-primary backdrop-blur">{g.multi}</span>
                        </div>
                        <div className="p-3">
                          <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{g.tag}</div>
                          <p className="mt-0.5 text-sm font-bold text-white group-hover:text-primary md:text-base">{g.title}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />
              </div>
            );
          })()}
        </div>
      </section>

      {/* Table Games */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              <Trophy className="h-3 w-3" /> Table Games
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl lg:text-5xl">
              Classic tables.{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                Modern odds.
              </span>
            </h2>
          </div>

          {(() => {
            const tableGames = [
              { title: "Poker", tag: "5-Card Draw", multi: "×800", img: tablePoker },
              { title: "Craps", tag: "Dice Roll", multi: "×30", img: tableCraps },
              { title: "Casino Hold'em", tag: "vs Dealer", multi: "×100", img: tableHoldem },
              { title: "3 Card Poker", tag: "Ante · Play", multi: "×40", img: table3CardPoker },
              { title: "Casino War", tag: "High Card", multi: "×10", img: tableWar },
            ];
            return (
              <div className="group/marquee relative mt-8 -mx-6 overflow-hidden md:mx-0">
                <div className="marquee-track flex gap-4">
                  {[...tableGames, ...tableGames, ...tableGames].map((g, i) => (
                    <a
                      key={`${g.title}-${i}`}
                      href={WHATSAPP}
                      className="group relative w-[170px] shrink-0 rounded-2xl p-[1.5px] transition hover:-translate-y-1 sm:w-[190px]"
                      style={{ background: "var(--gradient-hero)" }}
                    >
                      <div className="relative flex flex-col overflow-hidden rounded-[14px] bg-black">
                        <div className="relative aspect-square overflow-hidden">
                          <img src={g.img} alt={`${g.title} table game`} loading="lazy" width={512} height={512} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                          <span className="absolute right-2 top-2 rounded-full border border-primary/40 bg-black/70 px-2 py-0.5 text-[10px] font-bold text-primary backdrop-blur">{g.multi}</span>
                        </div>
                        <div className="p-3">
                          <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{g.tag}</div>
                          <p className="mt-0.5 text-sm font-bold text-white group-hover:text-primary md:text-base">{g.title}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />
              </div>
            );
          })()}
        </div>
      </section>


      {/* Slot Games */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">
              <Sparkles className="h-3 w-3" /> Slot Games
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl lg:text-5xl">
              Spin, win,{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                jackpot.
              </span>
            </h2>
          </div>

          {(() => {
            const slotGames = [
              { title: "Gates of Olympus", tag: "Pragmatic", multi: "×5000", img: slotOlympus },
              { title: "Sweet Bonanza", tag: "Candy Cluster", multi: "×21100", img: slotSweetBonanza },
              { title: "Book of Dead", tag: "Play'n GO", multi: "×5000", img: slotBook },
              { title: "Wild West Gold", tag: "Bounty Spins", multi: "×10000", img: slotWildWest },
              { title: "Starburst", tag: "NetEnt", multi: "×500", img: slotStarburst },
              { title: "Big Bass Bonanza", tag: "Free Spins", multi: "×2100", img: slotBigBass },
            ];
            return (
              <div className="group/marquee relative mt-8 -mx-6 overflow-hidden md:mx-0">
                <div className="marquee-track-reverse flex gap-4">
                  {[...slotGames, ...slotGames].map((g, i) => (
                    <a
                      key={`${g.title}-${i}`}
                      href={WHATSAPP}
                      className="group relative w-[170px] shrink-0 rounded-2xl p-[1.5px] transition hover:-translate-y-1 sm:w-[190px]"
                      style={{ background: "var(--gradient-hero)" }}
                    >
                      <div className="relative flex flex-col overflow-hidden rounded-[14px] bg-black">
                        <div className="relative aspect-square overflow-hidden">
                          <img src={g.img} alt={`${g.title} slot game`} loading="lazy" width={512} height={512} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                          <span className="absolute right-2 top-2 rounded-full border border-secondary/40 bg-black/70 px-2 py-0.5 text-[10px] font-bold text-secondary backdrop-blur">{g.multi}</span>
                        </div>
                        <div className="p-3">
                          <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{g.tag}</div>
                          <p className="mt-0.5 text-sm font-bold text-white group-hover:text-secondary md:text-base">{g.title}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />
              </div>
            );
          })()}
        </div>
      </section>

      {/* In-Play Matches */}
      <InPlayMatches />










      {/* Markets grid */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              <Trophy className="h-3 w-3" /> Betting Markets
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl lg:text-5xl">
              30+ sports,{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                100+ live markets.
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base lg:text-lg">
              30+ sports, 100+ live tables and every major cricket market — one verified Sprinters account.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map(({ title, tag, icon: Icon }) => (
              <a
                key={title}
                href={WHATSAPP}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary/60 hover:bg-white/[0.05]"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-foreground md:text-base">{title}</p>
                  <p className="mt-1 text-xs text-muted-foreground md:text-sm">{tag}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* How it works */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              <Zap className="h-3 w-3" /> How It Works
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl lg:text-5xl">
              Your Sprinters ID in{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                six simple steps.
              </span>
            </h2>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {howSteps.map((s) => (
              <div
                key={s.n}
                className="group relative flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary/60 hover:bg-white/[0.05]"
              >
                <div
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-sm font-black text-primary"
                >
                  {s.n}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground md:text-base">{s.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Sports coverage */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              <Trophy className="h-3 w-3" /> Sports Coverage
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl lg:text-5xl">
              Betting options{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                on Sprinters.
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base lg:text-lg">
              30+ sports and 100+ live games on a single verified ID.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sports.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary/60 hover:bg-white/[0.05]"
              >
                <p className="text-sm font-bold text-foreground md:text-base">{s.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cricket markets */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              <Trophy className="h-3 w-3" /> Cricket Markets
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl lg:text-5xl">
              Popular cricket markets{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                on Sprinters.
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base lg:text-lg">
              Fancy Bets to pre-match outrights across IPL, T20, ODI & Test.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cricketMarkets.map((m) => (
              <div
                key={m.title}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary/60 hover:bg-white/[0.05]"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Trophy className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold uppercase tracking-widest text-foreground">{m.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Exchanges marquee */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-card/60 via-background to-card/40 py-16">
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "radial-gradient(60% 60% at 50% 0%, hsl(var(--primary)/0.15), transparent 70%)" }} />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Trusted Network
          </span>
          <h2 className="mt-4 text-2xl font-black text-foreground md:text-4xl">
            Leading & Trusted <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Exchanges</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            One Sprinters ID · 10+ premium platforms · Instant switch between books
          </p>
        </div>
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-[marquee_35s_linear_infinite] gap-5 pr-5">
            {[...exchanges, ...exchanges].map((ex, i) => (
              <div
                key={`${ex.name}-${i}`}
                className="group relative flex h-20 min-w-[200px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-card/80 px-6 backdrop-blur transition hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.5)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-20"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${ex.accent}, transparent 70%)` }}
                />
                <div className="relative flex items-center gap-2.5">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${ex.gradient} text-base font-black text-white shadow-lg`}
                    style={{ boxShadow: `0 6px 20px -6px ${ex.accent}` }}
                  >
                    {ex.name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-lg font-black tracking-tight text-card-foreground whitespace-nowrap">
                    {ex.name}
                    <span
                      className={`bg-gradient-to-r ${ex.gradient} bg-clip-text text-transparent`}
                    >
                      {ex.suffix}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </section>


      {/* ID types */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Get Your ID
          </span>
          <h2 className="mt-3 text-3xl font-black text-foreground md:text-5xl">
            Pick the ID that fits how you play
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every ID is set up on WhatsApp in under five minutes.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ids.map((c, i) => (
            <div
              key={c.name}
              className={`relative rounded-3xl border p-8 transition hover:-translate-y-1 ${
                i === 0 ? "border-primary bg-card" : "border-border bg-card"
              }`}
            >
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                {c.badge}
              </span>
              <p className="mt-4 text-2xl font-black text-card-foreground">{c.name}</p>
              <ul className="mt-6 space-y-3">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Get ID via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              <Sparkles className="h-3 w-3" /> Why Sprinters
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl lg:text-5xl">
              Built for players who{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                demand better.
              </span>
            </h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {why.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary/60 hover:bg-white/[0.05]"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground md:text-base">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Payments */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
            <Wallet className="h-7 w-7" />
          </div>
          <h2 className="mt-4 text-3xl font-black text-foreground md:text-4xl">
            Safe payments, fast withdrawals
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every deposit and withdrawal uses trusted Indian payment methods — no complicated
            processes, no hidden charges. UPI reflects in seconds. Payouts land within 24 hours.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: IndianRupee, title: "Instant deposits", text: "UPI, GPay, PhonePe, Paytm, BHIM or bank transfer — balance shows in your wallet within seconds." },
            { icon: Clock, title: "24-hour payouts", text: "Request a withdrawal any time. Funds move straight to your UPI or bank account within 24 hours." },
            { icon: Lock, title: "Encrypted & secure", text: "Every transaction is encrypted end to end. OTP verification on every login keeps your account yours." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-border bg-card p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-5 text-lg font-semibold text-card-foreground">{title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {["UPI", "GPay", "PhonePe", "Paytm", "BHIM", "Bank Transfer"].map((p) => (
            <div
              key={p}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground"
            >
              <CreditCard className="h-4 w-4 text-primary" /> {p}
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div
          className="relative overflow-hidden rounded-[2rem] p-10 md:p-16"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px, 60px 60px",
            }}
            aria-hidden
          />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-black text-white md:text-5xl">
                Ready to start winning with Sprinters?
              </h2>
              <p className="mt-4 max-w-xl text-white/85">
                Verified ID in under five minutes on WhatsApp. Real support, 24-hour
                withdrawals, no drama.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={WHATSAPP}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Now
              </a>
              <a
                href={TELEGRAM}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Send className="h-5 w-5" /> Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Responsible */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <Shield className="h-8 w-8 text-primary" />
            <p className="mt-4 text-xl font-bold text-card-foreground">
              Legal context & customer support
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Online gaming laws in India vary by state — please understand the rules that
              apply where you live and play responsibly. Information on this site is for
              educational purposes only. For account access, login help or any platform
              question, our support desk is available round the clock on WhatsApp.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <BadgeCheck className="h-8 w-8 text-primary" />
            <p className="mt-4 text-xl font-bold text-card-foreground">Play responsibly</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• You must be 18 years or older to use Sprinters</li>
              <li>• Treat betting as entertainment, never as income</li>
              <li>• Set your own deposit and time limits</li>
              <li>• Seek help if gaming affects your wellbeing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl font-black text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-border bg-card p-5 open:border-primary"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-card-foreground">
                {q}
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-primary transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Latest from the blog */}
      <section className="border-t border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                From the Blog
              </span>
              <h2 className="mt-3 text-3xl font-black text-foreground md:text-5xl">
                Latest cricket & betting insights
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              View all posts <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...blogPosts]
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .slice(0, 6)
              .map((p) => (
                <article
                  key={p.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition hover:-translate-y-1 hover:border-primary"
                >
                  {p.image ? (
                    <img src={p.image} alt={p.title} loading="lazy" className="h-44 w-full object-cover" />
                  ) : (
                    <div className="h-44 w-full" style={{ background: "var(--gradient-hero)" }} />
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {p.date}
                    </span>
                    <p className="mt-2 line-clamp-3 text-lg font-bold text-card-foreground group-hover:text-primary">
                      <Link to="/post/$slug" params={{ slug: p.slug }}>{p.title}</Link>
                    </p>
                    {p.excerpt ? (
                      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
                    ) : null}
                    <Link
                      to="/post/$slug"
                      params={{ slug: p.slug }}
                      aria-label={`Read: ${p.title}`}
                      className="mt-auto pt-4 text-sm font-semibold text-primary"
                    >
                      Read post →
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
