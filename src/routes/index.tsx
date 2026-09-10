import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { posts } from "@/data/posts";
import { BlogHeroBanner } from "@/components/BlogHeroBanner";

const reviews = [
  {
    n: "Aditya Rao",
    city: "Bengaluru",
    q: "Been betting on IPL for three seasons now and Mahadev Book is the only ID where I've never had to chase a withdrawal. Messaged on WhatsApp, had my ID in under five minutes, and my first cash-out of ₹15,000 hit UPI before I'd finished watching the highlights.",
  },
  {
    n: "Meera Joshi",
    city: "Indore",
    q: "Switched here after a friend's recommendation and stayed for the support. Had a deposit go through twice by mistake, messaged them at midnight, and it was sorted before I woke up. That kind of thing matters more to me than any bonus.",
  },
  {
    n: "Karthik Subramaniam",
    city: "Coimbatore",
    q: "I mostly play the live casino tables, not cricket, and the tables here run without the lag I got used to on other apps. Withdrawals have been consistent too, usually under half an hour on UPI regardless of the amount.",
  },
  {
    n: "Farah Sheikh",
    city: "Lucknow",
    q: "First time betting online and I was nervous about getting scammed. The KYC process felt proper, not rushed, and the WhatsApp team actually explained the odds format to me instead of just sending links. Two months in and withdrawals still work exactly as promised.",
  },
];

const homeFaqs: FAQItem[] = [
  { q: "What is Mahadev Book?", a: "Mahadev Book is India's trusted online betting app and cricket ID provider — one verified ID unlocks IPL cricket, football, live casino, Aviator and Teen Patti with instant UPI payouts." },
  { q: "How do I get a Mahadev Book ID?", a: "Message us on WhatsApp with your name and preferred deposit method. You'll receive a verified Mahadev Book ID with login URL, user ID and password in under 60 seconds." },
  { q: "Is Mahadev Book safe to use?", a: "Every account is KYC-verified, payments run on SSL and PCI-DSS-aligned rails, and casino games are RNG-audited. The platform has been issuing IDs since 2010." },
  { q: "How fast are UPI withdrawals?", a: "UPI withdrawals settle in minutes, not days. IMPS and bank transfers land the same working day. No hidden delays." },
  { q: "What sports and games can I play?", a: "IPL, T20 World Cup, EPL, La Liga, tennis, kabaddi, horse racing, live-dealer casino, Aviator, Teen Patti, Andar Bahar and 500+ slots — all under one login." },
  { q: "Is there a Mahadev Book app or APK?", a: "Yes — you can play from any mobile browser, and the official Mahadev betting app APK is available on request via WhatsApp." },
];
import heroTrophy from "@/assets/hero-trophy.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import betCricket from "@/assets/bet-options/cricket.jpg";
import betFootball from "@/assets/bet-options/football.jpg";
import betTennis from "@/assets/bet-options/tennis.jpg";
import betKabaddi from "@/assets/bet-options/kabaddi.jpg";
import betHorse from "@/assets/bet-options/horse-racing.jpg";
import betCasino from "@/assets/bet-options/live-casino.jpg";
import betTeenPatti from "@/assets/bet-options/teen-patti.jpg";
import betFancy from "@/assets/bet-options/fancy-bets.jpg";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Wallet,
  Trophy,
  Dice5,
  Headphones,
  ThumbsUp,
  BadgeCheck,
  MessageCircle,
  Star,
} from "lucide-react";
import InPlayEvents, { fetchInPlayEvents, type ApiEvent } from "@/components/InPlayEvents";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahadev Book — Official Online Betting App & Cricket ID" },
      { name: "description", content: "India's trusted online betting app. Get a verified Mahadev ID on WhatsApp in 60 seconds for IPL cricket, live casino, Aviator & Teen Patti with UPI payouts." },
      { property: "og:title", content: "Mahadev Book — Official Online Betting App & Cricket ID" },
        { name: "twitter:title", content: "Mahadev Book — Official Online Betting App & Cricket ID" },
      { property: "og:description", content: "Mahadev Book: verified Mahadev IDs on WhatsApp in 60 seconds. IPL cricket, live casino, Aviator, Teen Patti — instant UPI payouts 24/7." },
      { property: "og:url", content: "https://mahadevbookss.com/" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book — Online Betting App with Instant UPI Payouts" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(homeFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to get started with Mahadev Book",
          description: "The 5-step process to get a verified Mahadev Book ID and start betting.",
          step: steps.map((s) => ({
            "@type": "HowToStep",
            position: Number(s.n),
            name: s.t,
            text: s.d,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
      ...reviews.map((r) => ({
        type: "application/ld+json" as const,
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          reviewBody: r.q,
          author: { "@type": "Person", name: r.n },
          itemReviewed: { "@type": "Organization", name: "Mahadev Book", url: "https://mahadevbookss.com/" },
        }),
      })),
    ],
  }),
  loader: async (): Promise<{ inPlayEvents: ApiEvent[] }> => ({
    inPlayEvents: await fetchInPlayEvents(),
  }),
  staleTime: 30_000,
  component: Index,
});


const offerings = [
  { t: "Sports", d: "Cricket, Football, Tennis, Basketball & Kabaddi with exchange-grade odds.", tag: "30+ sports", icon: Trophy },
  { t: "Live Casino", d: "Real dealers, real streams — Baccarat, Roulette, Dragon Tiger & more.", tag: "100+ tables", icon: Dice5 },
  { t: "Card Games", d: "Rummy, Poker, Teen Patti and Andar Bahar classics.", tag: "Instant play", icon: Dice5 },
  { t: "Casino Slots", d: "Aviator, Crash & top slot titles with fair-play RNG.", tag: "500+ slots", icon: Zap },
  { t: "Virtual Sports", d: "Football, Tennis & Horse Racing simulations, non-stop.", tag: "Always live", icon: Trophy },
];


const features = [
  { icon: ShieldCheck, t: "Bank-Grade Security", d: "SSL + PCI-DSS aligned payments protect every rupee, every login." },
  { icon: Zap, t: "Lightning UPI Payouts", d: "Withdrawals settle in minutes — not days. UPI, IMPS & e-wallets." },
  { icon: Trophy, t: "Sharpest Odds", d: "Exchange-grade cricket, football and tennis pricing — beat the bookies." },
  { icon: Dice5, t: "Live Casino Floor", d: "Real dealers, real streams, 100+ live tables running around the clock." },
  { icon: Headphones, t: "Human Support 24/7", d: "WhatsApp, Telegram & live chat in Hindi, English & regional languages." },
  { icon: ThumbsUp, t: "One ID, All Markets", d: "Sports, casino, cards, virtuals — a single verified Mahadev ID unlocks it all." },
];

const steps = [
  { n: "01", t: "Message on WhatsApp", d: "Ping our team on WhatsApp — no long forms, no waiting queue.", icon: MessageCircle },
  { n: "02", t: "Verify in 60 Seconds", d: "Share basic KYC and get a fully verified betting ID minted for you.", icon: BadgeCheck },
  { n: "03", t: "Deposit via UPI", d: "Fund your wallet instantly with UPI, IMPS or your favourite e-wallet.", icon: Wallet },
  { n: "04", t: "Claim Welcome Bonus", d: "Grab your joining bonus and daily reload offers before your first bet.", icon: Trophy },
  { n: "05", t: "Play & Withdraw", d: "Bet across 30+ sports and 500+ games. Cash out to UPI in minutes.", icon: Zap },
];

const services = [
  { t: "Verified ID Creation", d: "Every ID is minted against real KYC — no proxies, no shared logins.", icon: BadgeCheck },
  { t: "Agent Network", d: "A vetted pan-India agent grid for onboarding and settlements.", icon: Headphones },
  { t: "Wallet & Deposits", d: "UPI, IMPS and e-wallet rails with instant credit to your account.", icon: Wallet },
  { t: "Sports Exchange", d: "Cricket, football, tennis and kabaddi with back-lay exchange odds.", icon: Trophy },
  { t: "Live Casino Ops", d: "24/7 live tables, real dealers and audited RNG for fair play.", icon: Dice5 },
  { t: "Instant Payouts", d: "Settlement engine that pushes winnings to UPI in minutes.", icon: Zap },
  { t: "Fraud & Security", d: "Bank-grade encryption, device fingerprinting and 24/7 monitoring.", icon: ShieldCheck },
  { t: "Player Support", d: "Human agents on WhatsApp, Telegram and live chat — always on.", icon: MessageCircle },
];


import imgTeenPatti from "@/assets/games-local/teenpatti.jpg";
import imgAndarBahar from "@/assets/games-local/andarbahar.jpg";
import imgRoulette from "@/assets/games-local/roulette.jpg";
import imgBaccarat from "@/assets/games-local/baccarat.jpg";
import imgBaccarat29 from "@/assets/games-local/baccarat29.jpg";
import imgDragonTiger from "@/assets/games-local/dragontiger.jpg";
import imgDragonTigerLion from "@/assets/games-local/dragontigerlion.jpg";
import imgDragonTigerOneDay from "@/assets/games-local/dragontigeroneday.jpg";
import imgDragonTiger2 from "@/assets/games-local/dragontiger2.jpg";
import imgPoker from "@/assets/games-local/poker.jpg";
import imgPoker2020 from "@/assets/games-local/poker2020.jpg";
import imgPoker6P from "@/assets/games-local/poker6p.jpg";
import imgRummy from "@/assets/games-local/rummy.jpg";
import imgSicBo from "@/assets/games-local/sicbo.jpg";
import imgLucky7 from "@/assets/games-local/lucky7.jpg";
import imgLottery from "@/assets/games-local/lottery.jpg";
import imgBollywood from "@/assets/games-local/bollywood.jpg";
import imgQueenRace from "@/assets/games-local/queenrace.jpg";
import imgRace20 from "@/assets/games-local/race20.jpg";
import imgRace17 from "@/assets/games-local/race17.jpg";
import imgCasinoWar from "@/assets/games-local/casinowar.jpg";
import img32Cards from "@/assets/games-local/cards32.jpg";
import imgHiLow from "@/assets/games-local/hilow.jpg";
import imgTeenPatti2Card from "@/assets/games-local/teenpatti2card.jpg";
import imgTeenPattiT20 from "@/assets/games-local/teenpattit20.jpg";
import imgAmarAkbar from "@/assets/games-local/amarakbar.jpg";
import imgTeenPattiTest from "@/assets/games-local/teenpattitest.jpg";
import imgMuflis from "@/assets/games-local/muflis.jpg";
import imgTeenPatti2020_2 from "@/assets/games-local/teenpatti2020_2.jpg";
import imgTeenPatti2020 from "@/assets/games-local/teenpatti2020.jpg";
import imgOneDayTeenPatti from "@/assets/games-local/onedayteenpatti.jpg";
import imgMuflisOneDay from "@/assets/games-local/muflisoneday.jpg";
import imgTeenPatti2Card1Day from "@/assets/games-local/teenpatti2card1day.jpg";
import imgOpenTeenPatti from "@/assets/games-local/openteenpatti.jpg";
import imgJudgement3Card from "@/assets/games-local/judgement3card.jpg";
import imgWorliMatka from "@/assets/games-local/worlimatka.jpg";
import imgTrap from "@/assets/games-local/trap.jpg";
import imgTrio from "@/assets/games-local/trio.jpg";
import imgKaDum10 from "@/assets/games-local/kadum10.jpg";
import imgCard1_2020 from "@/assets/games-local/card1_2020.jpg";
import imgOneCardOneDay from "@/assets/games-local/onecardoneday.jpg";
import imgNoteNumber from "@/assets/games-local/notenumber.jpg";
import imgJokerTeenPatti1Day from "@/assets/games-local/jokerteenpatti1day.jpg";
import imgTeenPattiJoker from "@/assets/games-local/teenpattijoker.jpg";
import imgUniqueTeenPatti from "@/assets/games-local/uniqueteenpatti.jpg";
import imgSuperOver from "@/assets/games-local/superover.jpg";
import imgFiveCricket from "@/assets/games-local/fivecricket.jpg";
import imgCricket2020 from "@/assets/games-local/cricket2020.jpg";
import imgCricket1010 from "@/assets/games-local/cricket1010.jpg";

const cardGames: { t: string; img: string }[] = [
  { t: "Teen Patti", img: imgTeenPatti },
  { t: "Andar Bahar", img: imgAndarBahar },
  { t: "Roulette", img: imgRoulette },
  { t: "Casino War", img: imgCasinoWar },
  { t: "Hi-Low", img: imgHiLow },
  { t: "2 Cards Teen Patti", img: imgTeenPatti2Card },
  { t: "Teen Patti T20", img: imgTeenPattiT20 },
  { t: "Amar Akbar Anthony", img: imgAmarAkbar },
  { t: "32 Cards Casino", img: img32Cards },
  { t: "Teen Patti Test", img: imgTeenPattiTest },
  { t: "20-20 Poker", img: imgPoker2020 },
  { t: "Muflis Teen Patti", img: imgMuflis },
];

const casinoGames: { t: string; img: string }[] = [
  { t: "Dragon Tiger", img: imgDragonTiger },
  { t: "Dragon Tiger Lion", img: imgDragonTigerLion },
  { t: "Dragon Tiger One Day", img: imgDragonTigerOneDay },
  { t: "Dragon Tiger 2", img: imgDragonTiger2 },
  { t: "Baccarat", img: imgBaccarat },
  { t: "29 Baccarat", img: imgBaccarat29 },
  { t: "Sic Bo", img: imgSicBo },
  { t: "Poker", img: imgPoker },
  { t: "Lucky 7", img: imgLucky7 },
  { t: "Rummy", img: imgRummy },
  { t: "20-20 Teen Patti 2", img: imgTeenPatti2020_2 },
  { t: "One Day Teen Patti", img: imgOneDayTeenPatti },
  { t: "Muflis Teen Patti One Day", img: imgMuflisOneDay },
  { t: "20-20 Teen Patti", img: imgTeenPatti2020 },
  { t: "2 Card One Day Teen Patti", img: imgTeenPatti2Card1Day },
  { t: "Open Teen Patti", img: imgOpenTeenPatti },
  { t: "3 Card Judgement", img: imgJudgement3Card },
  { t: "Queen Race", img: imgQueenRace },
  { t: "Race 20", img: imgRace20 },
  { t: "Race 17", img: imgRace17 },
  { t: "Worli Matka", img: imgWorliMatka },
  { t: "Trap", img: imgTrap },
  { t: "Trio", img: imgTrio },
  { t: "Bollywood Casino", img: imgBollywood },
  { t: "10 Ka Dum", img: imgKaDum10 },
  { t: "1 Card 20-20", img: imgCard1_2020 },
  { t: "One Card One Day", img: imgOneCardOneDay },
  { t: "Note Number", img: imgNoteNumber },
  { t: "Joker Teen Patti 1 Day", img: imgJokerTeenPatti1Day },
  { t: "Teen Patti Joker", img: imgTeenPattiJoker },
  { t: "Unique Teen Patti", img: imgUniqueTeenPatti },
  { t: "Lottery", img: imgLottery },
  { t: "Super Over One Day", img: imgSuperOver },
  { t: "Five Cricket", img: imgFiveCricket },
  { t: "Cricket 20-20", img: imgCricket2020 },
  { t: "6 Player Poker", img: imgPoker6P },
  { t: "10-10 Cricket", img: imgCricket1010 },
];



const info: [string, string][] = [
  ["Platform Name", "Mahadev Book"],
  ["Founded", "2010"],
  ["Category", "Online Betting & Gaming Platform"],
  ["Specialization", "Cricket, Football, Tennis, Live Casino"],
  ["Licensing", "Licensed & Regulated (International Standards)"],
  ["Key Features", "Fast Withdrawals, Secure Payments, Verified IDs, 24/7 Help"],
  ["Availability", "Mobile, Tablet & Desktop across India"],
  ["Support", "WhatsApp, Telegram & Live Chat"],
];

function Index() {
  const { inPlayEvents } = Route.useLoaderData();
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      {/* Animated color bar right below the menu */}
      <div
        aria-hidden
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, #f59e0b, #fde047, #22c55e, #10b981, #f59e0b, #fde047, #22c55e, #10b981)",
          backgroundSize: "200% 100%",
          animation: "gradient-x 6s linear infinite",
        }}
      />

      {/* Hero — Full-width Premium Banner (natural aspect, never cropped) */}
      <section className="relative w-full bg-[oklch(0.10_0.02_155)]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mahadev Book — Get your Cricket ID on WhatsApp in 60 seconds"
          className="block w-full overflow-hidden border-b border-primary/20 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
        >
          <img
            src={heroBanner}
            alt="Mahadev Book — Online Cricket ID & Betting ID. Get your ID on WhatsApp in 60 seconds. IPL, Casino, Aviator, Teen Patti. Instant UPI withdrawal 24/7."
            width={1920}
            height={800}
            fetchPriority="high"
            className="block w-full object-contain object-center h-auto lg:h-[520px] lg:object-cover xl:h-[560px]"
          />

        </a>

        {/* Premium Feature Strip (replaces plain marquee) */}
        <div className="relative w-full overflow-hidden border-y border-primary/30 bg-gradient-to-r from-[oklch(0.14_0.04_155)] via-[oklch(0.18_0.06_150)] to-[oklch(0.14_0.04_155)]">
          {/* animated sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-1/3 opacity-30"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(253,224,71,0.35), transparent)",
              animation: "shine-sweep 5s linear infinite",
            }}
          />
          <div
            className="relative flex whitespace-nowrap py-3"
            style={{ animation: "marquee-x 45s linear infinite" }}
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 px-3 shrink-0">
                {[
                  { icon: "🏏", label: "IPL LIVE", tone: "from-amber-400/20 to-amber-500/10 text-amber-200 border-amber-400/40" },
                  { icon: "⚡", label: "Instant UPI Payout", tone: "from-emerald-400/20 to-emerald-500/10 text-emerald-200 border-emerald-400/40" },
                  { icon: "🎰", label: "500+ Casino Games", tone: "from-rose-400/20 to-rose-500/10 text-rose-200 border-rose-400/40" },
                  { icon: "✈️", label: "Aviator · Teen Patti", tone: "from-sky-400/20 to-sky-500/10 text-sky-200 border-sky-400/40" },
                  { icon: "🛡️", label: "100% Verified · KYC Secure", tone: "from-emerald-400/20 to-emerald-500/10 text-emerald-200 border-emerald-400/40" },
                  { icon: "💬", label: "24/7 WhatsApp Support", tone: "from-lime-400/20 to-lime-500/10 text-lime-200 border-lime-400/40" },
                  { icon: "🎁", label: "Welcome Bonus", tone: "from-fuchsia-400/20 to-fuchsia-500/10 text-fuchsia-200 border-fuchsia-400/40" },
                  { icon: "🏆", label: "KYC-only IDs since 2010", tone: "from-amber-400/20 to-amber-500/10 text-amber-200 border-amber-400/40" },
                ].map((p, idx) => (
                  <span
                    key={`${i}-${idx}`}
                    className={`inline-flex items-center gap-2 rounded-full border bg-gradient-to-r ${p.tone} px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm`}
                  >
                    <span className="text-base leading-none">{p.icon}</span>
                    {p.label}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* About */}
      <section id="about" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(closest-side, oklch(0.88 0.22 135 / 0.35), transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(closest-side, oklch(0.82 0.18 75 / 0.35), transparent)" }}
        />

        <div className="relative grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary text-[11px] tracking-[0.4em] uppercase font-semibold">
                Since 2010 · KYC-verified IDs
              </span>
            </div>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              India's most trusted <br className="hidden sm:block" />
              <span className="text-gradient-gold">betting ID</span>, refined for winners.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              A single verified ID unlocks sports exchanges, live casinos and instant games — engineered for razor-sharp odds, bank-grade security and payouts that actually land.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { k: "2010", v: "Operating since" },
                { k: "15Y", v: "Years Running" },
                { k: "24/7", v: "Live Support" },
                { k: "UPI", v: "In & out" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-border bg-card/60 backdrop-blur px-4 py-3">
                  <div className="font-display text-2xl font-bold text-gradient-gold">{s.k}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["SSL Encrypted", "PCI-DSS Payments", "Verified IDs Only", "Instant UPI", "Fair Play Audited"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary/90">
                  <ShieldCheck className="h-3.5 w-3.5" /> {b}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground"
              >
                <span className="btn-glow-content flex items-center gap-2">
                  Get Your ID Now <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                Read our story <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative rounded-2xl border border-primary/20 bg-card/80 backdrop-blur overflow-hidden shadow-[0_30px_80px_-30px_oklch(0.82_0.15_85_/_0.35)]">
              <span className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t border-l border-primary/60" />
              <span className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t border-r border-primary/60" />
              <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-primary/60" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-primary/60" />

              <div className="px-6 py-4 border-b border-border/70 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-primary" />
                  <span className="font-display font-semibold tracking-wide text-sm">Platform at a glance</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80">Live</span>
              </div>
              <dl className="divide-y divide-border/60">
                {info.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-3 px-6 py-3 text-sm hover:bg-primary/5 transition-colors">
                    <dt className="text-muted-foreground text-xs uppercase tracking-wider self-center">{k}</dt>
                    <dd className="col-span-2 font-medium text-foreground/95 break-words">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="px-6 py-4 border-t border-border/70 bg-warning/5 text-xs text-foreground/80 flex gap-2">
                <span className="text-warning">⚠</span>
                <span>18+ only. Play responsibly. Betting carries financial risk and may be regulated in your region.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Betting Options Available */}
      <section id="betting-options" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-xs tracking-[0.4em] uppercase font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              One ID · All Markets
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-primary tracking-wider text-center uppercase drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Betting Options Available
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-center text-sm sm:text-base">
            30+ sports, cricket exchange markets and 100+ live casino games on a single verified Mahadev ID.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            { t: "Cricket", d: "IPL · T20 · ODI · Test", icon: Trophy, img: betCricket },
            { t: "Football", d: "EPL · UCL · La Liga", icon: Trophy, img: betFootball },
            { t: "Tennis", d: "ATP · WTA · Grand Slams", icon: Trophy, img: betTennis },
            { t: "Kabaddi", d: "PKL & Internationals", icon: Zap, img: betKabaddi },
            { t: "Horse Racing", d: "Global race meets", icon: Zap, img: betHorse },
            { t: "Live Casino", d: "Baccarat · Roulette · Dragon Tiger", icon: Dice5, img: betCasino },
            { t: "Teen Patti", d: "Andar Bahar · Rummy", icon: Dice5, img: betTeenPatti },
            { t: "Fancy Bets", d: "Session · Over markets", icon: Zap, img: betFancy },
          ].map((o) => (
            <a
              key={o.t}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden border border-primary/20 bg-card aspect-[4/5] transition-all duration-500 hover:border-primary hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
            >
              <img
                src={o.img}
                alt={`${o.t} betting markets on Mahadev Book`}
                loading="lazy"
                width={768}
                height={768}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />

              <span className="pointer-events-none absolute top-2 left-2 h-3 w-3 border-t border-l border-primary/60 z-20" />
              <span className="pointer-events-none absolute top-2 right-2 h-3 w-3 border-t border-r border-primary/60 z-20" />
              <span className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-primary/60 z-20" />
              <span className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-primary/60 z-20" />

              <div className="absolute top-3 left-3 z-10 flex items-center justify-center h-10 w-10 rounded-full border border-primary/40 bg-background/70 backdrop-blur">
                <o.icon className="h-5 w-5 text-primary" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                <h3
                  className="text-foreground text-base sm:text-lg font-bold tracking-wide uppercase"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {o.t}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{o.d}</p>
                <div className="mt-2 h-0.5 w-0 group-hover:w-12 bg-primary transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>
      </section>


      {/* Indian Card Games */}
      <section id="indian-card-games" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-xs tracking-[0.4em] uppercase font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Exclusive Games
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-primary tracking-wider text-center uppercase drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Indian Card Games
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-center text-sm sm:text-base">
            Play the classics you grew up with — live dealers, real cards, instant rounds. One Mahadev ID unlocks them all.
          </p>
        </div>

        <div className="relative -mx-4 sm:-mx-6 px-4 sm:px-6 overflow-hidden group/rail">
          <div
            className="flex gap-5 sm:gap-6 w-max pb-4 pt-2 group-hover/rail:[animation-play-state:paused]"
            style={{ animation: "marquee-x 60s linear infinite" }}
          >
            {[...cardGames, ...cardGames].map((c, i) => (
              <a
                key={`${c.t}-${i}`}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative shrink-0 w-[220px] sm:w-[240px] aspect-[3/4] rounded-lg overflow-hidden border border-primary/20 bg-card shadow-2xl transition-all duration-500 hover:border-primary hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
              >
                <span className="pointer-events-none absolute top-2 left-2 h-4 w-4 border-t border-l border-primary/60 z-20" />
                <span className="pointer-events-none absolute top-2 right-2 h-4 w-4 border-t border-r border-primary/60 z-20" />
                <span className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b border-l border-primary/60 z-20" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b border-r border-primary/60 z-20" />

                <img
                  src={c.img}
                  alt={`${c.t} live casino game on Mahadev Book`}
                  loading="lazy"
                  width={640}
                  height={832}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />



                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-background/70 backdrop-blur px-2 py-0.5 border border-primary/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] font-bold tracking-widest uppercase text-primary">#{String((i % cardGames.length) + 1).padStart(2, "0")}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-center transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-1 font-bold">Live Dealer</p>
                  <h3
                    className="text-foreground text-base sm:text-lg font-bold tracking-wide uppercase leading-tight"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {c.t}
                  </h3>
                  <div className="mx-auto mt-2 h-0.5 w-0 group-hover:w-12 bg-primary transition-all duration-500" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center items-center gap-4">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary/40" />
          <div className="w-2 h-2 rotate-45 border border-primary" />
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary/40" />
        </div>
      </section>

      {/* Our Casinos */}
      <section id="our-casinos" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-xs tracking-[0.4em] uppercase font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Full Casino Lobby
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-primary tracking-wider text-center uppercase drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Our Casinos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-center text-sm sm:text-base">
            From Dragon Tiger and Baccarat to Bollywood Casino and Worli Matka — the complete live casino floor at your fingertips.
          </p>
        </div>

        <div className="relative -mx-4 sm:-mx-6 px-4 sm:px-6 overflow-hidden group/rail">
          <div
            className="flex gap-5 sm:gap-6 w-max pb-4 pt-2 group-hover/rail:[animation-play-state:paused]"
            style={{ animation: "marquee-x 90s linear infinite" }}
          >
            {[...casinoGames, ...casinoGames].map((c, i) => (
              <a
                key={`${c.t}-${i}`}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative shrink-0 w-[220px] sm:w-[240px] aspect-[3/4] rounded-lg overflow-hidden border border-primary/20 bg-card shadow-2xl transition-all duration-500 hover:border-primary hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
              >
                <span className="pointer-events-none absolute top-2 left-2 h-4 w-4 border-t border-l border-primary/60 z-20" />
                <span className="pointer-events-none absolute top-2 right-2 h-4 w-4 border-t border-r border-primary/60 z-20" />
                <span className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b border-l border-primary/60 z-20" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b border-r border-primary/60 z-20" />

                <img
                  src={c.img}
                  alt={`${c.t} live casino game on Mahadev Book`}
                  loading="lazy"
                  width={640}
                  height={832}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />



                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-background/70 backdrop-blur px-2 py-0.5 border border-primary/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] font-bold tracking-widest uppercase text-primary">#{String((i % casinoGames.length) + 1).padStart(2, "0")}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-center transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-1 font-bold">Live Table</p>
                  <h3
                    className="text-foreground text-base sm:text-lg font-bold tracking-wide uppercase leading-tight"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {c.t}
                  </h3>
                  <div className="mx-auto mt-2 h-0.5 w-0 group-hover:w-12 bg-primary transition-all duration-500" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center items-center gap-4">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary/40" />
          <div className="w-2 h-2 rotate-45 border border-primary" />
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary/40" />
        </div>
      </section>

      <InPlayEvents initialEvents={inPlayEvents} />

      {/* Offerings */}

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-[11px] tracking-[0.4em] uppercase font-semibold">Endless Action</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            What you can <span className="text-gradient-gold">play</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Five arenas, one verified ID. From cricket exchanges to live dealer floors — dive in wherever the action is hottest tonight.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {offerings.map((o) => (
            <div
              key={o.t}
              className="group relative rounded-2xl border border-primary/15 bg-card/70 backdrop-blur p-6 overflow-hidden hover:border-primary/60 hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_50px_-20px_oklch(0.82_0.15_85_/_0.5)]"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{ background: "radial-gradient(closest-side, oklch(0.82 0.15 85 / 0.55), transparent)" }}
              />
              <span className="pointer-events-none absolute top-2 left-2 h-3 w-3 border-t border-l border-primary/40" />
              <span className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-primary/40" />

              <div className="relative flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl grid place-items-center bg-primary/10 border border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <o.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-primary/80 border border-primary/30 rounded-full px-2 py-1">
                  {o.tag}
                </span>
              </div>
              <div className="relative mt-5 font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">{o.t}</div>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{o.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-[11px] tracking-[0.4em] uppercase font-semibold">The Engine Room</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            What we <span className="text-gradient-gold">actually do</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A full-stack betting ecosystem — ID minting, wallets, exchange, casino ops, payouts and support — engineered in-house so nothing breaks when you're mid-bet.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={s.t}
              className="group relative rounded-2xl border border-border bg-card/70 backdrop-blur p-6 hover:border-primary/60 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-gradient-gold">{String(i + 1).padStart(2, "0")}</span>
                <div className="h-9 w-9 rounded-lg grid place-items-center bg-primary/10 border border-primary/30 text-primary">
                  <s.icon className="h-4 w-4" />
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-foreground text-base">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Contact Numbers */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-14">
        <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/70 to-card/70 backdrop-blur p-6 sm:p-8 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(closest-side, oklch(0.82 0.15 85 / 0.6), transparent)" }}
          />
          <div className="relative flex flex-col items-center text-center mb-6">
            <span className="text-primary text-[11px] tracking-[0.3em] uppercase font-semibold">Need Help Right Now?</span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight">
              Official <span className="text-gradient-gold">Contact Numbers</span>
            </h3>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/mahadev-book-deposit-number"
              className="group relative rounded-xl border border-primary/30 bg-background/60 p-5 hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-primary/10 border border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Wallet className="h-5 w-5" />
                </div>
                <span className="font-display font-bold text-foreground group-hover:text-primary transition-colors">Deposit Number</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Official WhatsApp line to fund your wallet instantly via UPI, IMPS or e-wallet.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Chat now <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              to="/mahadev-book-withdrawal-number"
              className="group relative rounded-xl border border-primary/30 bg-background/60 p-5 hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-primary/10 border border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <span className="font-display font-bold text-foreground group-hover:text-primary transition-colors">Withdrawal Number</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Request a payout on WhatsApp and get UPI cash-outs settled in minutes.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Chat now <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              to="/mahadev-book-customer-care-number"
              className="group relative rounded-xl border border-primary/30 bg-background/60 p-5 hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-primary/10 border border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Headphones className="h-5 w-5" />
                </div>
                <span className="font-display font-bold text-foreground group-hover:text-primary transition-colors">Customer Care Number</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">24/7 support on WhatsApp for KYC, login issues, bonuses and account help.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Chat now <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-64 w-[36rem] max-w-full rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(closest-side, oklch(0.82 0.15 85 / 0.5), transparent)" }}
        />
        <div className="relative flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-[11px] tracking-[0.4em] uppercase font-semibold">The Mahadev Edge</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            Why bettors pick <span className="text-gradient-gold">Mahadev Book</span> first
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Six habits that keep Indian bettors coming back — no fake bonuses, no delayed payouts, no chatbot mazes.
          </p>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.t}
              className="group relative rounded-2xl border border-border bg-card/70 backdrop-blur p-7 overflow-hidden hover:border-primary/60 hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_25px_60px_-25px_oklch(0.82_0.15_85_/_0.5)]"
            >
              <span className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t border-r border-primary/40" />
              <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-primary/40" />
              <div className="relative h-12 w-12 rounded-xl grid place-items-center bg-gradient-to-br from-primary/25 to-primary/5 border border-primary/40 text-primary group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-display font-bold group-hover:text-primary transition-colors">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/40 via-transparent to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary text-[11px] tracking-[0.4em] uppercase font-semibold">Under 5 Minutes</span>
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Start betting in <span className="text-gradient-gold">5 steps</span>
            </h2>
            <p className="text-muted-foreground mt-5 max-w-md text-lg">
              From WhatsApp hello to your first UPI payout — the fastest onboarding in Indian betting. No paperwork. No waiting rooms.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["No forms", "Instant KYC", "UPI in minutes", "Welcome bonus"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary/90">
                  <BadgeCheck className="h-3.5 w-3.5" /> {b}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground"
              >
                <span className="btn-glow-content flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" /> Get ID on WhatsApp
                </span>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="rounded-full border-primary/40 hover:bg-primary/10">
                  Talk to Support <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 relative">
            <span
              aria-hidden
              className="hidden sm:block absolute left-7 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"
            />
            <div className="space-y-4">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="group relative flex gap-5 rounded-2xl border border-border bg-card/70 backdrop-blur p-5 sm:p-6 hover:border-primary/60 hover:translate-x-1 transition-all duration-500 overflow-hidden"
                >
                  <div className="relative shrink-0">
                    <div className="h-14 w-14 rounded-xl grid place-items-center bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/40 text-primary font-display font-bold text-lg group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all">
                      {s.n}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <s.icon className="h-4 w-4 text-primary" />
                      <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">{s.t}</h3>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.d}</div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-primary/50 opacity-0 group-hover:opacity-100 transition-opacity self-center" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <AIOverview
        title="AI Overview — Mahadev Book"
        summary="Mahadev Book is India's trusted online cricket ID and betting ID provider since 2010. One verified ID unlocks IPL and international cricket, football, tennis, kabaddi, live casino, Aviator and Teen Patti. Deposits and withdrawals settle over UPI in minutes and support runs 24/7 on WhatsApp, Telegram, phone and email."
        points={[
          "Verified online cricket ID issued in ~5 minutes",
          "IPL, T20 World Cup, WPL, football, tennis, kabaddi",
          "Live casino, Aviator, Teen Patti, Andar Bahar",
          "Instant UPI deposits & minute-scale withdrawals",
          "24/7 human support (English & Hindi)",
          "KYC-verified players since 2010",
        ]}
        keywords={["online cricket id", "cricket betting id", "cricket satta id", "ipl betting id", "mahadev book", "betting id"]}
      />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-12 text-center">
          <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(50% 60% at 50% 0%, oklch(0.88 0.22 135 / 0.25), transparent 70%)" }} />
          <h2 className="text-3xl sm:text-4xl font-bold max-w-2xl mx-auto">One ID. One Platform. Infinite Wins.</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Get your verified Mahadev Book ID today and step into non-stop betting action.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Mahadev ID <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/services">
              <Button size="lg" variant="outline">
                <Wallet className="mr-2 h-4 w-4" /> View Wallet Options
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">From the Blog</h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Fresh guides on IPL betting, UPI payouts, live casino tactics and account security.
            </p>
          </div>
          <Link to="/blog" className="hidden sm:inline-flex text-sm font-medium text-primary hover:underline">
            View all <ArrowRight className="ml-1 h-4 w-4 inline" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 6).map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
            >
              <BlogHeroBanner title={p.title} category={p.category} slug={p.slug} compact />
              <div className="p-5">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">{p.category}</div>
                <h3 className="mt-2 font-semibold text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link to="/blog" className="text-sm font-medium text-primary hover:underline">
            View all posts <ArrowRight className="ml-1 h-4 w-4 inline" />
          </Link>
        </div>
      </section>

      {/* Player Reviews */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-[11px] tracking-[0.4em] uppercase font-semibold">Player Reviews</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            What real <span className="text-gradient-gold">players say</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Unfiltered feedback from Mahadev Book users across India — on withdrawals, support and everyday betting.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div key={r.n} className="rounded-2xl border border-border bg-card/70 backdrop-blur p-6">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">"{r.q}"</p>
              <div className="mt-4 text-sm font-semibold text-foreground">{r.n}</div>
              <div className="text-xs text-muted-foreground">{r.city}</div>
            </div>
          ))}
        </div>
      </section>

      <FAQSection title="Mahadev Book — Frequently Asked Questions" items={homeFaqs} />
      <QuickLinks
        title="Explore Mahadev Book"
        subtitle="Jump into sports markets, platforms, wallet help and popular guides."
      />
    </>
  );
}
