import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageCircle,
  Trophy,
  Zap,
  ShieldCheck,
  Wallet,
  Headphones,
  Sparkles,
  ChevronRight,
  BadgeCheck,
  Rocket,
  Users,
  Gamepad2,
  Radio,
  CircleDollarSign,
  Star,
  Lock,
  Gift,
  ClipboardCheck,
  KeyRound,
  TrendingUp,
  Flame,
  Target,
  Award,
  CheckCircle2,
  Smartphone,
  HelpCircle,
  Plus,
} from "lucide-react";
import { SiteLayout, WA, CTABand } from "@/components/site-layout";
import { LiveDashboard } from "@/components/live-dashboard";
import { blogPosts } from "@/data/blog-posts";
import { getRequestOrigin } from "@/lib/origin.functions";
import { getAiOverview } from "@/lib/ai-overview.functions";
import logo from "@/assets/logo.png";
import heroBanner from "@/assets/hero-banner.jpg";
import launchAviator from "@/assets/launch/aviator.jpg";
import launchLightning from "@/assets/launch/lightning.jpg";
import launchDragonTiger from "@/assets/launch/dragon-tiger.jpg";
import launchTeenPatti from "@/assets/launch/teen-patti.jpg";
import launchMines from "@/assets/launch/mines.jpg";
import launchCrash from "@/assets/launch/crash.jpg";
import launchAndarBahar from "@/assets/launch/andar-bahar.jpg";
import launchDuckRace from "@/assets/launch/duck-race.jpg";
import casinoSlots from "@/assets/casino/slots.jpg";
import casinoTeenPatti from "@/assets/casino/teen-patti.jpg";
import casinoAndarBahar from "@/assets/casino/andar-bahar.jpg";
import casinoRoulette from "@/assets/casino/roulette.jpg";
import casinoBaccarat from "@/assets/casino/baccarat.jpg";
import casinoBlackjack from "@/assets/casino/blackjack.jpg";

const launchGames = [
  { name: "Aviator", tag: "Crash · Hot", image: launchAviator, accent: "oklch(0.65 0.25 0)" },
  { name: "Lightning Roulette", tag: "Live · New", image: launchLightning, accent: "oklch(0.65 0.2 300)" },
  { name: "Dragon Tiger", tag: "Card · Trending", image: launchDragonTiger, accent: "oklch(0.7 0.2 40)" },
  { name: "Teen Patti Live", tag: "Live · India", image: launchTeenPatti, accent: "oklch(0.6 0.22 20)" },
  { name: "Mines", tag: "Instant · New", image: launchMines, accent: "oklch(0.7 0.2 200)" },
  { name: "Crash", tag: "Multiplier", image: launchCrash, accent: "oklch(0.7 0.22 140)" },
  { name: "Andar Bahar", tag: "Classic", image: launchAndarBahar, accent: "oklch(0.6 0.2 150)" },
  { name: "Duck Race", tag: "Fun · New", image: launchDuckRace, accent: "oklch(0.8 0.18 90)" },
];

const popularCasino = [
  { name: "Online Slots", tag: "Jackpot", stat: "45% picks", players: "2,384", rtp: "96.8%", image: casinoSlots },
  { name: "Teen Patti", tag: "India's Favourite", stat: "Live tables", players: "5,142", rtp: "97.2%", image: casinoTeenPatti },
  { name: "Andar Bahar", tag: "Fast Round", stat: "60% new users", players: "3,918", rtp: "96.5%", image: casinoAndarBahar },
  { name: "Roulette", tag: "Global Classic", stat: "1-in-37", players: "1,762", rtp: "97.3%", image: casinoRoulette },
  { name: "Baccarat", tag: "Low House Edge", stat: "Elegant play", players: "1,204", rtp: "98.9%", image: casinoBaccarat },
  { name: "Blackjack", tag: "Beat the Dealer", stat: "49% win rate", players: "2,051", rtp: "99.1%", image: casinoBlackjack },
];

const faqs = [
  {
    q: "Is Cricbet99 safe and legal in India?",
    a: "Cricbet99 is India's most trusted exchange, using 256-bit encryption and human-verified agents since 2020. Skill-based gaming is legal in most states; please check your local regulations before playing.",
    icon: "ShieldCheck",
  },
  {
    q: "How do I get my official Cricbet99 ID?",
    a: "It's simple: message us on WhatsApp, and a real human manager will activate your official ID in under 2 minutes. No forms, no bots, just instant access.",
    icon: "Zap",
  },
  {
    q: "What is the minimum deposit for new users?",
    a: "You can start your winning journey with as little as ₹100 via UPI. We believe in making professional betting accessible to every Indian fan.",
    icon: "Wallet",
  },
  {
    q: "Can I bet on IPL 2026 and other sports?",
    a: "Yes! One verified ID unlocks every match of IPL 2026, international cricket, football, tennis, and our premium 24/7 live casino suite.",
    icon: "Trophy",
  },
  {
    q: "How fast are UPI withdrawals processed?",
    a: "We lead the industry with lightning-fast payouts. Request your withdrawal on WhatsApp any time, and funds typically hit your bank account in minutes.",
    icon: "Gift",
  },
  {
    q: "Do you offer a Cricbet99 mobile app?",
    a: "Yes, we have a high-performance Android APK optimized for low-latency live betting. You can also play directly in your mobile browser with zero lag.",
    icon: "Smartphone",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  loader: async () => ({ 
    origin: await getRequestOrigin(),
    aiOverview: await getAiOverview()
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const image = `${origin}${heroBanner}`;
    return {
    meta: [
      { title: "Cricbet99 — Best Online Cricket ID 2026 | Verified Official Platform" },
      {
        name: "description",
        content:
          "Get your official Cricbet99 ID in 5 minutes on WhatsApp. India's most trusted exchange for IPL 2026, live casino, and sports betting with instant UPI payouts.",
      },
      { name: "keywords", content: "Cricbet99, cricbet99 id, online cricket id, ipl betting id, cricbet99 official app, live cricket betting india, cricket betting whatsapp number, cricbet99 login" },
      { property: "og:title", content: "Cricbet99 — India's #1 Online Cricket ID Since 2020" },
      {
        property: "og:description",
        content: "One verified ID for cricket, football, tennis, kabaddi and live casino. Instant UPI payouts, sharpest odds, 24/7 WhatsApp support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/" },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Cricbet99 — India's #1 online cricket ID" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cricbet99 — India's #1 Online Cricket ID" },
      { name: "twitter:description", content: "IPL, T20, football, tennis, kabaddi & live casino. Instant UPI payouts, 24/7 WhatsApp support." },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://cricbet99.co.in/"
            }
          ]
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Cricbet99",
          "url": "https://cricbet99.co.in/",
          "logo": "https://cricbet99.co.in/favicon.png",
          "description": "India's trusted online cricket ID platform since 2020.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "url": "https://cricbet99.co.in/whatsapp-support"
          }
        }),
      },
    ],
    };
  },
  component: Index,
});

const trustCards = [
  {
    icon: ShieldCheck,
    title: "Trusted & Verified Since 2020",
    points: [
      "15+ years serving Indian players — one of the country's oldest cricket ID platforms.",
      "Every ID is issued only through verified Cricbet99 agents — zero fakes.",
      "Bank-grade SSL protects your personal data and every rupee in your wallet.",
      "1 lakh+ active bettors have made Cricbet99 their permanent home.",
    ],
  },
  {
    icon: Wallet,
    title: "Instant Deposits & Same-Day Withdrawals",
    points: [
      "UPI, Google Pay, PhonePe, Paytm, IMPS and bank transfer — all supported 24/7.",
      "Deposits reflect in seconds; withdrawals settle in minutes, not days.",
      "Automated rails mean zero errors on payment amounts or IDs.",
      "Withdraw at 3 AM after an IPL match — the system never sleeps.",
    ],
  },
  {
    icon: Target,
    title: "The Widest Range of Markets",
    points: [
      "One ID unlocks cricket, football, tennis, kabaddi, horse racing and live casino.",
      "Real-time odds update ball-by-ball across every major event.",
      "Complete coverage of IPL 2026, T20 World Cup, Ashes, UCL and PKL.",
      "Switch sports and markets from a single Cricbet99 wallet.",
    ],
  },
  {
    icon: Lock,
    title: "Licensed & Advanced Platform",
    points: [
      "Operates under international gaming compliance standards.",
      "AI-based session monitoring blocks fraud attempts in real time.",
      "Modern odds engines power live prices with sub-second refresh.",
      "Frequent updates keep the Android and iOS apps buttery-smooth.",
    ],
  },
  {
    icon: Headphones,
    title: "24/7 Human Support on WhatsApp",
    points: [
      "Real people — not bots — on WhatsApp, Telegram and live chat.",
      "Verified managers walk you through ID setup, deposits and payouts.",
      "Average first-response time is under 60 seconds, any hour.",
      "Support in Hindi, English and regional languages.",
    ],
  },
  {
    icon: Gift,
    title: "Exclusive Bonuses & Promotions",
    points: [
      "100% welcome bonus up to ₹10,000 on your first deposit.",
      "Weekly cashback, refill bonuses and referral rewards for regulars.",
      "Special IPL, World Cup and festive boosts throughout the year.",
      "Every bonus term is transparent — no hidden rollover traps.",
    ],
  },
];

const stats = [
  { value: "15+", label: "Years of trust", icon: Award },
  { value: "1L+", label: "Active players", icon: Users },
  { value: "5 min", label: "ID activation", icon: Zap },
  { value: "24/7", label: "Withdrawals", icon: Wallet },
  { value: "4.8★", label: "Player rating", icon: Star },
];

const liveMatches = [
  { match: "India vs Australia", format: "T20 · 12th Over", live: "IND 98/2", markets: [["India Win", "1.72"], ["Australia Win", "2.10"], ["Over 165.5", "1.88"]] },
  { match: "Pakistan vs England", format: "ODI · 34.2 Overs", live: "PAK 212/5", markets: [["Pakistan Win", "1.95"], ["England Win", "1.92"], ["Next Wicket", "1.66"]] },
  { match: "South Africa vs West Indies", format: "T20 · 9th Over", live: "SA 74/1", markets: [["SA Win", "1.60"], ["WI Win", "2.40"], ["Over 158.5", "1.90"]] },
  { match: "Bangladesh vs Afghanistan", format: "ODI · 28 Overs", live: "BAN 167/4", markets: [["BAN Win", "1.85"], ["AFG Win", "2.00"], ["Next Wicket", "1.70"]] },
];

const upcoming = [
  { match: "India vs Pakistan", event: "Asia Cup", date: "Jan 18 · 8:00 PM", venue: "Dubai" },
  { match: "Australia vs England", event: "ODI Series", date: "Jan 20 · 3:30 PM", venue: "Melbourne" },
  { match: "England vs India", event: "Test Match", date: "Jan 28 · 10:30 AM", venue: "Lord's" },
];

const sports = [
  { icon: Trophy, title: "Cricket & IPL", desc: "IPL 2026, T20 & ODI World Cups, The Ashes, PSL, Ranji Trophy and every bilateral tour with ball-by-ball live odds and session markets." },
  { icon: CircleDollarSign, title: "Football", desc: "Premier League, La Liga, Bundesliga, Serie A, ISL, UEFA Champions League and FIFA fixtures with deep in-play markets and goal-scorer bets." },
  { icon: Star, title: "Tennis", desc: "Wimbledon, US Open, Australian Open and Roland Garros plus full ATP and WTA tours — set, game and total games markets." },
  { icon: Users, title: "Kabaddi", desc: "Pro Kabaddi League fully covered — raid points, super tackles, match winners and season-long team totals." },
  { icon: Rocket, title: "Horse Racing & More", desc: "International race cards, basketball, boxing, MMA, volleyball, badminton, table tennis and esports (CS2, Dota 2, Valorant)." },
  { icon: Gamepad2, title: "Live Casino", desc: "Teen Patti, Andar Bahar, Roulette, Baccarat, Blackjack, Dragon Tiger and 300+ HD slot titles streamed with real dealers." },
];

const casinoGames = [
  { rank: "01", title: "Online Slots", desc: "45% of players' daily go-to. Jackpots, free spins and dozens of themes — quick, casual, thrilling." },
  { rank: "02", title: "Teen Patti", desc: "India's favourite card game. Skill + luck, live tables with real players and juicy prize pools." },
  { rank: "03", title: "Andar Bahar", desc: "Fast, simple and instant. 60% of new casino players start here — win the moment a card matches." },
  { rank: "04", title: "Roulette", desc: "European and American wheels streamed in HD with pro dealers. Straight-up, split and column bets." },
  { rank: "05", title: "Blackjack", desc: "Beat the dealer at classic 21. Multi-hand and side-bet variants keep every session fresh." },
  { rank: "06", title: "Dragon Tiger", desc: "Two cards, one decision. The fastest live-casino format on Cricbet99 — perfect between overs." },
];

const steps = [
  { icon: MessageCircle, title: "Message us on WhatsApp", desc: <>Tap the WhatsApp button. A verified Cricbet99 manager responds within 60 seconds. Learn more about our <Link to="/whatsapp-number" className="text-primary font-bold hover:underline">official numbers</Link> and <Link to="/whatsapp-support" className="text-primary font-bold hover:underline">human support</Link>.</> },
  { icon: KeyRound, title: "Share basic details", desc: <>Full name and mobile number is all we need. Read our <Link to="/privacy-policy" className="text-primary font-bold hover:underline">Privacy Policy</Link> for data safety details and <Link to="/kyc-policy" className="text-primary font-bold hover:underline">KYC requirements</Link>.</> },
  { icon: Wallet, title: "Make your first deposit", desc: <>Add funds via UPI or bank transfer. Check <Link to="/how-to-deposit" className="text-primary font-bold hover:underline">Deposit Guide</Link> and <Link to="/bonus" className="text-primary font-bold hover:underline">Bonus Offers</Link> for step-by-step help.</> },
  { icon: BadgeCheck, title: "Receive your ID", desc: <>Your verified <Link to="/cricbet99-id" className="text-primary font-bold hover:underline">Cricbet99 ID</Link> username and password land on WhatsApp instantly. New to the platform? Read our <Link to="/what-is-cricbet99" className="text-primary font-bold hover:underline">intro guide</Link>.</> },
  { icon: Gift, title: "Claim your welcome bonus", desc: <>Activate your 100% bonus up to ₹10,000. View all <Link to="/bonus" className="text-primary font-bold hover:underline">Promotions</Link> here or check <Link to="/bonus-issues" className="text-primary font-bold hover:underline">Help</Link> if you have questions.</> },
  { icon: TrendingUp, title: "Log in & start winning", desc: <>Sign in and dive into live markets. Having trouble? Visit <Link to="/login-issues" className="text-primary font-bold hover:underline">Login Help</Link> or the <Link to="/faq" className="text-primary font-bold hover:underline">FAQ</Link> for instant troubleshooting.</> },
];

function Index() {
  const { aiOverview } = Route.useLoaderData();
  return (
    <IndexInner aiOverview={aiOverview} />
  );
}


function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const IconMap = { ShieldCheck, Zap, Wallet, Trophy, Gift, Smartphone } as const;
  return (
    <section className="relative overflow-hidden py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px circle at 50% 0%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 55%), radial-gradient(500px circle at 90% 100%, color-mix(in oklab, var(--accent) 8%, transparent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            <HelpCircle className="h-3.5 w-3.5" /> Support · 24/7 on WhatsApp
          </div>
          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
            Everything about
            <span className="ml-2 bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
              your Cricbet99 ID.
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/65 md:text-base">
            Everything you need to know about India's most trusted betting family, explained by humans, for humans. No bots, no fine print.
          </p>
        </div>

        <div
          className="mt-14 rounded-3xl p-[1.5px]"
          style={{
            backgroundImage:
              "linear-gradient(160deg, color-mix(in oklab, var(--primary) 50%, transparent), color-mix(in oklab, var(--accent) 40%, transparent) 45%, color-mix(in oklab, var(--primary) 30%, transparent))",
          }}
        >
          <div className="rounded-[calc(1.5rem-1.5px)] bg-background/95 backdrop-blur-xl">
            {faqs.map((f, i) => {
              const Icon = IconMap[f.icon as keyof typeof IconMap] ?? HelpCircle;
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`relative ${i !== 0 ? "border-t border-primary/10" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-5 px-6 py-6 text-left transition-colors hover:bg-primary/5 md:px-8"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isOpen
                          ? "border-accent/60 text-background shadow-lg"
                          : "border-primary/25 bg-primary/5 text-primary group-hover:border-primary/50"
                      }`}
                      style={isOpen ? { background: "var(--gradient-gold)" } : undefined}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-foreground/40">
                        Question {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-1 text-base font-bold leading-snug text-foreground md:text-[17px]">
                        {f.q}
                      </h3>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-accent/60 bg-accent/15 text-accent"
                          : "border-primary/30 bg-background text-primary group-hover:border-primary/60"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="flex gap-4 px-6 pb-7 pl-[4.75rem] pr-8 md:px-8 md:pl-[5.25rem]">
                        <div
                          className="w-0.5 shrink-0 rounded-full"
                          style={{ background: "var(--gradient-gold)" }}
                        />
                        <p className="text-sm leading-relaxed text-foreground/75 md:text-[15px]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-background/60 p-6 text-center backdrop-blur-sm md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full text-background shadow-lg"
              style={{ background: "var(--gradient-gold)" }}
            >
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Still have questions?</div>
              <div className="text-xs text-foreground/60">
                Chat with a verified account manager — average reply time under 60 seconds.
              </div>
            </div>
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-background shadow-lg transition-transform hover:scale-[1.03]"
            style={{ background: "var(--gradient-gold)" }}
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import { AiOverview } from "@/components/ai-overview";

function IndexInner({ aiOverview }: { aiOverview: any }) {

  return (
    <SiteLayout>
      {/* HERO BANNER */}
      <section className="relative w-full overflow-hidden border-b border-primary/20">
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get your Cricbet99 ID on WhatsApp"
          className="group block w-full"
        >
          <img
            src={heroBanner}
            alt="Cricbet99 — India's #1 online cricket ID with 100% welcome bonus up to ₹10,000"
            width={1920}
            height={784}
            fetchPriority="high"
            className="block h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
          />
        </a>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Ambient gradients */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl float-slower" style={{ background: "var(--gradient-gold)" }} />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl float-slow" style={{ background: "var(--gradient-green)" }} />
        {/* Subtle grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.85 0.17 88 / 0.4) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.85 0.17 88 / 0.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />

        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-8 sm:py-12 lg:grid-cols-[1.15fr_1fr] lg:py-28">
          {/* LEFT — headline */}
          <div className="flex flex-col justify-center">
            <span className="group inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.82_0.21_148)] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.82_0.21_148)]" />
              </span>
              India's #1 Cricket ID · Live Since 2020
            </span>
            <h1 className="mt-6 text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-6xl">
              <span className="block">Cricbet99 —</span>
              <span
                className="gradient-pan block bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, oklch(0.85 0.17 88), oklch(0.95 0.15 95), oklch(0.75 0.19 148), oklch(0.85 0.17 88))" }}
              >
                India's #1 Online Cricket ID for Sports & Casino
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
              One verified ID. Every game that matters. Bet on IPL 2026, T20 World Cup, football, tennis, kabaddi and live casino with lightning-fast UPI payouts and a real human on WhatsApp — trusted by 1 lakh+ Indian players.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pulse group inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-bold text-accent-foreground shadow-2xl transition-transform hover:scale-[1.03]"
                style={{ background: "var(--gradient-green)", boxShadow: "var(--shadow-gold)" }}
              >
                <MessageCircle className="h-5 w-5" /> Get Your Cricbet99 ID
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link to="/how-it-works" className="group/link text-sm font-bold text-foreground/80 transition-colors hover:text-primary">
                See how it works <ChevronRight className="inline h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {stats.map((s) => (
                <div key={s.label} className="group flex h-full flex-col rounded-xl border border-primary/20 bg-background/40 px-3 py-3 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_10px_30px_-15px_oklch(0.85_0.17_88/0.5)]">
                  <s.icon className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                  <div className="mt-2 whitespace-nowrap text-2xl font-black leading-none" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-foreground/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Premium 3-step onboarding card */}
          <div className="relative flex items-center justify-center">
            {/* Rotating gold conic aura */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] opacity-40 blur-2xl ring-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, oklch(0.85 0.17 88 / 0.6), oklch(0.75 0.19 148 / 0.4), oklch(0.85 0.17 88 / 0.6), transparent 70%, oklch(0.85 0.17 88 / 0.6))",
              }}
            />
            {/* Floating decorative chips */}
            <div className="pointer-events-none absolute -top-3 left-6 z-20 hidden rounded-full border border-primary/40 bg-background/90 px-3 py-1.5 text-[11px] font-bold text-primary shadow-lg backdrop-blur float-slow md:flex md:items-center md:gap-1.5">
              <Flame className="h-3 w-3 text-accent" /> Live Cricket Odds
            </div>
            <div className="pointer-events-none absolute -bottom-3 right-6 z-20 hidden rounded-full border border-accent/40 bg-background/90 px-3 py-1.5 text-[11px] font-bold text-accent shadow-lg backdrop-blur float-slower md:flex md:items-center md:gap-1.5">
              <Zap className="h-3 w-3" /> UPI in 30 sec
            </div>

            <div
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-primary/40 p-1"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.85 0.17 88 / 0.45), oklch(0.75 0.19 148 / 0.25), oklch(0.85 0.17 88 / 0.45))",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Inner card */}
              <div
                className="relative overflow-hidden rounded-[calc(1.5rem-4px)] p-7"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.13 0.02 260 / 0.98), oklch(0.09 0.02 260 / 0.98))",
                }}
              >
                {/* Shine sweep */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 shine-sweep"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.08), transparent)",
                  }}
                />

                {/* Header row */}
                <div className="flex items-center justify-between gap-3">
                  <img src={logo} alt="Cricbet99 official logo" className="h-7 w-auto shrink-0 drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)] sm:h-8" />
                  <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-accent">
                    <BadgeCheck className="h-3 w-3" /> Verified · 2 min
                  </div>
                </div>

                <h2 className="mt-5 text-2xl font-black tracking-tight">
                  Your ID, ready in
                  <span
                    className="ml-1.5 bg-clip-text text-transparent"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  >
                    3 quick steps.
                  </span>
                </h2>
                <p className="mt-2 text-sm text-foreground/70">
                  No forms. No wait. Just message us on WhatsApp and start playing on India's most trusted platform.
                </p>

                {/* Steps */}
                <ol className="relative mt-6 space-y-3">
                  {[
                    { icon: MessageCircle, title: "Ping us on WhatsApp", desc: "One tap opens a chat with a real Cricbet99 manager." },
                    { icon: KeyRound, title: "Get your verified ID", desc: "Personalised Sports, Casino or Demo ID — delivered in minutes." },
                    { icon: Wallet, title: "Deposit & start winning", desc: "Instant UPI top-up, live odds, and 24/7 withdrawals." },
                  ].map((s, i) => (
                    <li
                      key={s.title}
                      className="group relative flex items-start gap-3 rounded-xl border border-primary/20 bg-[oklch(0.11_0.02_260/0.6)] p-3 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10"
                    >
                      <span
                        className="relative grid h-10 w-10 shrink-0 place-items-center rounded-lg text-primary-foreground shadow-[inset_0_1px_0_oklch(1_0_0/0.3)]"
                        style={{ background: "var(--gradient-gold)" }}
                      >
                        <s.icon className="h-4 w-4" />
                        <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-[oklch(0.09_0.02_260)] text-[9px] font-black text-accent ring-1 ring-accent/40">
                          {i + 1}
                        </span>
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-bold text-foreground">{s.title}</div>
                        <div className="mt-0.5 text-xs text-foreground/65">{s.desc}</div>
                      </div>
                      <ChevronRight className="mt-2 h-4 w-4 shrink-0 text-primary/60 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                    </li>
                  ))}
                </ol>

                {/* CTA */}
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-pulse group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-sm font-extrabold uppercase tracking-wider text-accent-foreground"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.82 0.21 148) 0%, oklch(0.6 0.19 150) 55%, oklch(0.82 0.21 148) 100%)",
                    boxShadow:
                      "inset 0 1px 0 oklch(1 0 0 / 0.4), inset 0 -2px 0 oklch(0 0 0 / 0.25), 0 10px 30px -8px oklch(0.74 0.2 148 / 0.55)",
                  }}
                >
                  <span aria-hidden className="absolute inset-0 rounded-xl ring-1 ring-inset ring-[oklch(1_0_0/0.35)]" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_35%,oklch(1_0_0/0.55)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                  <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/95 shadow-inner">
                    <MessageCircle className="h-3.5 w-3.5 text-[oklch(0.42_0.15_150)]" />
                  </span>
                  <span className="relative">Claim My ID Now</span>
                </a>

                {/* Trust footer */}
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-primary/15 pt-3 text-[10px] text-foreground/55">
                  <span className="inline-flex items-center gap-1.5"><Lock className="h-3 w-3 text-primary" /> 256-bit SSL</span>
                  <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3 w-3 text-primary" /> KYC Verified</span>
                  <span className="inline-flex items-center gap-1.5"><Star className="h-3 w-3 text-accent" /> 4.9/5 · 12k+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="relative overflow-hidden border-y border-primary/15 py-28">
        {/* Ambient premium background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(60rem 32rem at 15% 0%, oklch(0.62 0.18 88 / 0.18), transparent 60%), radial-gradient(50rem 30rem at 100% 100%, oklch(0.55 0.18 148 / 0.14), transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.9 0.15 88) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0.15 88) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-[0_0_40px_-10px_oklch(0.74_0.2_88/0.6)]"
              style={{ background: "linear-gradient(135deg, oklch(0.62 0.18 88 / 0.14), oklch(0.55 0.18 148 / 0.10))" }}
            >
              <Trophy className="h-3.5 w-3.5" /> Why Indian Players Trust Cricbet99
            </div>
            <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              A premium, secure & rewarding
              <br className="hidden sm:block" />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                online betting experience.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-foreground/70 md:text-lg">
              Sharper odds. Faster payouts. A support team that actually picks up — every single time. Here's what 1 lakh+ Indian bettors already know.
            </p>

            {/* Trust chips */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-semibold">
              {[
                { icon: ShieldCheck, label: "SSL Secured" },
                { icon: Lock, label: "KYC Verified" },
                { icon: Zap, label: "5-min Activation" },
                { icon: Star, label: "4.9/5 · 12k+ Reviews" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-background/60 px-3 py-1.5 text-foreground/75 backdrop-blur"
                >
                  <chip.icon className="h-3.5 w-3.5 text-primary" />
                  {chip.label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trustCards.map((c, i) => (
              <div
                key={c.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-[1px] transition-transform duration-300 hover:-translate-y-1.5"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.74 0.2 88 / 0.55), oklch(0.55 0.18 148 / 0.25) 40%, oklch(1 0 0 / 0.05) 70%, oklch(0.74 0.2 88 / 0.4))",
                }}
              >
                <div className="relative flex h-full flex-col rounded-2xl bg-[oklch(0.14_0.02_260)]/85 p-7 backdrop-blur-xl">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(24rem 14rem at 50% 0%, oklch(0.74 0.2 88 / 0.18), transparent 70%)",
                    }}
                  />
                  <span className="absolute right-5 top-5 text-[10px] font-black tracking-widest text-primary/40">
                    0{i + 1}
                  </span>

                  <div
                    className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.74_0.2_88/0.7)] ring-1 ring-inset ring-white/25"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <c.icon className="h-6 w-6" />
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-2xl opacity-60"
                      style={{
                        background:
                          "linear-gradient(180deg, oklch(1 0 0 / 0.35), transparent 45%)",
                      }}
                    />
                  </div>

                  <h3 className="relative text-lg font-extrabold tracking-tight">{c.title}</h3>
                  <div
                    aria-hidden
                    className="relative mt-3 h-px w-10 opacity-70"
                    style={{ background: "var(--gradient-gold)" }}
                  />

                  <ul className="relative mt-4 space-y-2.5">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-foreground/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW LAUNCH — premium game showcase */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Ambient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-x-0 top-0 h-[520px] opacity-90"
            style={{
              background:
                "radial-gradient(50rem 30rem at 20% 0%, oklch(0.55 0.22 20 / 0.28), transparent 60%), radial-gradient(45rem 30rem at 85% 10%, oklch(0.55 0.2 300 / 0.24), transparent 60%), radial-gradient(50rem 30rem at 50% 100%, oklch(0.7 0.2 88 / 0.18), transparent 65%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Ribbon-style attention header */}
          <div className="mx-auto mb-10 flex max-w-4xl flex-col items-center text-center">
            <span
              className="cta-pulse inline-flex items-center gap-2 rounded-full border border-accent/50 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.28em] text-accent-foreground"
              style={{ background: "var(--gradient-green)" }}
            >
              <Sparkles className="h-3.5 w-3.5" /> Just Launched
            </span>

            <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                New Launch
              </span>
              <br className="hidden sm:block" />
              <span className="text-foreground/90">Games on Cricbet99.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-foreground/70 md:text-lg">
              Fresh titles, live dealers and instant-win crash favourites — the hottest tables on the platform, all playable from your existing Cricbet99 ID.
            </p>
          </div>

          {/* Premium red ribbon banner — marquee */}
          <div
            className="relative mx-auto mb-10 overflow-hidden rounded-2xl border border-primary/40"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.45 0.22 25) 0%, oklch(0.55 0.24 15) 50%, oklch(0.45 0.22 25) 100%)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div aria-hidden className="absolute inset-0 gold-sheen opacity-70" />
            <div className="relative flex overflow-hidden py-4">
              <div className="marquee-track flex items-center gap-8 whitespace-nowrap px-6 text-sm font-black uppercase tracking-[0.35em] text-primary-foreground md:text-base">
                {Array.from({ length: 2 }).map((_, k) => (
                  <div key={k} className="flex items-center gap-8">
                    {["Aviator", "Lightning Roulette", "Dragon Tiger", "Teen Patti Live", "Mines", "Crash", "Duck Race"].map((n) => (
                      <span key={n} className="flex items-center gap-3">
                        <Rocket className="h-4 w-4 text-primary drop-shadow-[0_0_10px_oklch(0.9_0.2_88/0.9)]" />
                        <span>★ {n} — Play Now</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Games grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {launchGames.map((g, i) => (
              <a
                key={g.name}
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block overflow-hidden rounded-2xl border border-primary/25 bg-background/40 shadow-[0_20px_50px_-30px_oklch(0_0_0/0.9)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/70 ${i % 2 === 0 ? "float-slow" : "float-slower"}`}
                style={{
                  boxShadow: `0 0 0 0 ${g.accent}`,
                  animationDelay: `${(i % 4) * 0.35}s`,
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={g.image}
                    alt={`${g.name} — new launch game on Cricbet99`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Bottom gradient */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-2/3"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 0%, oklch(0.1 0.02 260 / 0.6) 55%, oklch(0.08 0.02 260 / 0.95) 100%)",
                    }}
                  />
                  {/* Glossy sweep on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-1 top-0 h-full -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-[220%]"
                  />
                  {/* NEW badge */}
                  <div
                    className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-accent-foreground shadow-lg ring-1 ring-inset ring-white/30"
                    style={{ background: "var(--gradient-green)" }}
                  >
                    <Sparkles className="h-2.5 w-2.5" /> New
                  </div>
                  {/* Index number */}
                  <div className="absolute right-2.5 top-2.5 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-black tracking-widest text-primary backdrop-blur">
                    0{i + 1}
                  </div>

                  {/* Bottom content */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/90">
                      {g.tag}
                    </div>
                    <h3 className="mt-1 text-base font-black leading-tight text-white drop-shadow-md sm:text-lg">
                      {g.name}
                    </h3>
                    <div
                      aria-hidden
                      className="mt-2 h-px w-8 opacity-80"
                      style={{ background: "var(--gradient-gold)" }}
                    />
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-white/70">
                        Live · Instant Play
                      </span>
                      <span
                        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-black text-primary-foreground shadow-md transition-transform group-hover:translate-x-0.5"
                        style={{ background: "var(--gradient-gold)" }}
                      >
                        Play <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-black uppercase tracking-widest text-primary-foreground shadow-2xl transition-transform hover:scale-[1.04] sm:text-base"
              style={{ background: "var(--gradient-gold)" }}
            >
              <MessageCircle className="h-5 w-5" /> Unlock New Launch Games
            </a>
            <p className="text-xs text-foreground/60">
              1 ID · 500+ games · Instant UPI payouts · 24/7 support
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR CASINO GAMES — bento, emerald theme, live counters */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* Ambient emerald/gold glow, distinct from New Launch */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 30rem at 50% -10%, oklch(0.55 0.22 148 / 0.22), transparent 60%), radial-gradient(45rem 30rem at 90% 110%, oklch(0.75 0.18 85 / 0.14), transparent 60%)",
          }}
        />
        {/* Subtle diagonal grid to differentiate from New Launch section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(0.85 0.17 88 / 0.6) 0 1px, transparent 1px 22px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Live jackpot ticker — unique to this section */}
          <div className="mx-auto mb-6 flex max-w-3xl items-center justify-center gap-2 rounded-full border border-accent/40 bg-background/50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/80 backdrop-blur">
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
            <span className="text-accent">Live Jackpot</span>
            <span className="text-foreground/50">·</span>
            <span
              className="count-blink bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              ₹ 87,42,915
            </span>
            <span className="text-foreground/50">·</span>
            <span>12,461 playing now</span>
          </div>

          {/* Header */}
          <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-accent">
              <Gamepad2 className="h-3 w-3" /> Player Favourites
            </span>
            <h2 className="mt-4 text-3xl font-black leading-[1.1] tracking-tight md:text-5xl">
              <span className="text-foreground/90">Popular </span>
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                Casino Games
              </span>
              <span className="text-foreground/90"> on Cricbet99</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-foreground/70 md:text-base">
              Six all-time hits played daily by our members — smooth gameplay, fair odds and instant payouts on every table.
            </p>
          </div>

          {/* BENTO layout — mobile: 1 big + 2 + 2 + 1 full ; desktop: featured left (2×2) + 4 right (2×2) + 1 full-width strip */}
          <div className="grid grid-cols-2 gap-3 auto-rows-[minmax(150px,auto)] sm:auto-rows-[minmax(180px,auto)] sm:gap-4 md:grid-cols-4 md:auto-rows-[260px] lg:auto-rows-[280px]">
            {popularCasino.map((g, i) => {
              const featured = i === 0;
              const wideStrip = i === 5;
              return (
                <a
                  key={g.name}
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative block overflow-hidden bg-background/40 transition-all duration-500 hover:-translate-y-1 ${
                    featured
                      ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2 rounded-[28px] border-0"
                      : wideStrip
                        ? "col-span-2 md:col-span-4 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md border border-accent/25 hover:border-accent/70 hover:shadow-[0_20px_50px_-20px_oklch(0.55_0.22_148/0.45)]"
                        : "rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md border border-accent/25 hover:border-accent/70 hover:shadow-[0_20px_50px_-20px_oklch(0.55_0.22_148/0.45)]"
                  }`}
                >
                  {/* Featured: rotating conic gradient border */}
                  {featured && (
                    <>
                      <span
                        aria-hidden
                        className="conic-spin absolute -inset-[40%] z-0"
                        style={{
                          background:
                            "conic-gradient(from 0deg, oklch(0.85 0.17 88 / 0.9), transparent 25%, oklch(0.7 0.22 148 / 0.9) 50%, transparent 75%, oklch(0.85 0.17 88 / 0.9))",
                        }}
                      />
                      <span
                        aria-hidden
                        className="absolute inset-[2px] z-[1] rounded-[26px] bg-background"
                      />
                    </>
                  )}

                  <div
                    className={`relative z-[2] overflow-hidden h-full ${
                      featured
                        ? "rounded-[24px]"
                        : "aspect-[5/4] md:aspect-auto rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md"
                    }`}
                  >
                    <img
                      src={g.image}
                      alt={`${g.name} casino game on Cricbet99`}
                      width={featured ? 1200 : 800}
                      height={featured ? 1000 : 640}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                    />
                    {/* dark vignette */}
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, oklch(0.08 0.02 260 / 0.15) 0%, oklch(0.08 0.02 260 / 0.55) 55%, oklch(0.06 0.02 260 / 0.95) 100%)",
                      }}
                    />
                    {/* Continuous emerald shine sweep — not just on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] shine-sweep"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, oklch(0.85 0.17 148 / 0.28), transparent)",
                      }}
                    />

                    {/* LIVE chip — unique to Popular section */}
                    <div className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-accent backdrop-blur ring-1 ring-accent/40">
                      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
                      LIVE
                    </div>
                    {/* RTP badge — unique to Popular section */}
                    <div
                      className="absolute right-2.5 top-2.5 rounded-md px-2 py-0.5 text-[9px] font-black tracking-wider text-primary-foreground shadow-md"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      RTP {g.rtp}
                    </div>

                    {/* Featured — extra rating row */}
                    {featured && (
                      <div className="absolute right-3 top-12 flex flex-col items-end gap-1">
                        <div className="inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[10px] font-bold text-primary backdrop-blur">
                          <Star className="h-3 w-3 fill-primary text-primary" /> 4.9
                        </div>
                        <div className="inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[10px] font-bold text-accent backdrop-blur">
                          <Trophy className="h-3 w-3" /> #1 Pick
                        </div>
                      </div>
                    )}

                    <div className={`absolute inset-x-0 bottom-0 ${featured ? "p-5" : "p-3"}`}>
                      <div className={`font-bold uppercase tracking-[0.22em] text-accent ${featured ? "text-xs" : "text-[9px]"}`}>
                        {g.tag}
                      </div>
                      <h3
                        className={`mt-0.5 font-black leading-tight text-white drop-shadow-md ${
                          featured ? "text-2xl md:text-3xl" : "text-base sm:text-lg"
                        }`}
                      >
                        {g.name}
                      </h3>

                      {/* Live players row — key differentiator */}
                      <div className={`mt-2 flex items-center gap-2 ${featured ? "text-xs" : "text-[10px]"}`}>
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 font-bold text-white/85 backdrop-blur">
                          <Users className="h-3 w-3 text-accent" />
                          <span className="count-blink">{g.players}</span> playing
                        </span>
                        {featured && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 font-bold text-white/85 backdrop-blur">
                            <Flame className="h-3 w-3 text-primary" /> {g.stat}
                          </span>
                        )}
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div
                          aria-hidden
                          className={`h-px opacity-80 ${featured ? "w-16" : "w-8"}`}
                          style={{ background: "var(--gradient-gold)" }}
                        />
                        <span
                          className={`inline-flex items-center gap-1 rounded-full font-black text-accent-foreground shadow-md transition-transform group-hover:translate-x-1 ${
                            featured ? "px-4 py-1.5 text-xs" : "px-2 py-0.5 text-[9px]"
                          }`}
                          style={{ background: "var(--gradient-green)" }}
                        >
                          {featured ? "Play Featured" : "Play"} <ChevronRight className={featured ? "h-3.5 w-3.5" : "h-2.5 w-2.5"} />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* CTA row */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-black uppercase tracking-widest text-accent-foreground shadow-xl transition-transform hover:scale-[1.04] sm:text-sm"
              style={{ background: "var(--gradient-green)" }}
            >
              <MessageCircle className="h-4 w-4" /> Open Casino on WhatsApp
            </a>
            <p className="text-[11px] text-foreground/60">
              Live dealers · Fair play certified · Withdraw anytime
            </p>
          </div>
        </div>
      </section>


      {/* LIVE MATCH DASHBOARD — dynamic, sport-grouped, filterable */}
      <LiveDashboard />

      {/* SPORTS — premium redesign */}
      <section className="relative overflow-hidden border-t border-primary/15 py-24">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ background: "radial-gradient(1200px 500px at 15% 0%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(900px 400px at 100% 100%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 60%), linear-gradient(180deg, oklch(0.16 0.03 155 / 0.6), oklch(0.10 0.02 155 / 0.9))" }} />
          <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-green)", animation: "orb-drift-a 18s ease-in-out infinite" }} />
          <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-gold)", animation: "orb-drift-b 22s ease-in-out infinite" }} />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)", backgroundSize: "48px 48px", color: "var(--primary)" }} />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              30+ Sports · 100+ Live Markets
            </div>
            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
              One ID.{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Every sport</span>
              <br />
              <span className="text-foreground/90">you love.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-foreground/70 md:text-lg">
              From an IPL run-chase to a Grand Slam final — deep coverage, sharp odds, and buttery-fast in-play action across every sport that matters.
            </p>
            <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sports.map((s, i) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl p-[1.5px] transition-all duration-500 hover:-translate-y-1.5"
                style={{ background: "linear-gradient(140deg, color-mix(in oklab, var(--primary) 55%, transparent), transparent 40%, color-mix(in oklab, var(--accent) 55%, transparent))" }}
              >
                {/* Rotating conic border on hover */}
                <div className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "conic-gradient(from 0deg, color-mix(in oklab, var(--accent) 60%, transparent), transparent 30%, color-mix(in oklab, var(--primary) 60%, transparent), transparent 70%)", animation: "spin 6s linear infinite", filter: "blur(14px)" }} />

                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[oklch(0.16_0.03_155)] via-[oklch(0.12_0.02_155)] to-[oklch(0.09_0.02_155)] p-7">
                  {/* Diagonal gloss sweep */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {/* Big index numeral */}
                  <div className="pointer-events-none absolute -right-2 -top-4 text-[92px] font-black leading-none tracking-tighter opacity-[0.06]" style={{ color: "var(--primary)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Icon tile */}
                  <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-lg ring-1 ring-white/10 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110" style={{ background: "var(--gradient-green)", boxShadow: "0 12px 30px -8px color-mix(in oklab, var(--primary) 45%, transparent)" }}>
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                    <span className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "var(--gradient-gold)", mixBlendMode: "overlay" }} />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">{s.desc}</p>

                  {/* Footer chip */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-foreground/50">
                      <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: "var(--gradient-gold)" }} />
                      Live markets
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary transition-transform group-hover:translate-x-1">
                      Explore
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO START — 6 STEPS · premium redesign */}
      <section className="relative overflow-hidden py-24">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ background: "radial-gradient(900px 400px at 85% 0%, color-mix(in oklab, var(--accent) 16%, transparent), transparent 60%), radial-gradient(1000px 500px at 0% 100%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 60%), linear-gradient(180deg, oklch(0.10 0.02 155 / 0.9), oklch(0.14 0.03 155 / 0.7))" }} />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)", backgroundSize: "56px 56px", color: "var(--accent)" }} />
          <div className="absolute left-1/2 top-8 h-64 w-[60%] -translate-x-1/2 rounded-full opacity-25 blur-3xl" style={{ background: "var(--gradient-gold)", animation: "orb-drift-c 20s ease-in-out infinite" }} />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              How To Start
            </div>
            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
              Your Cricbet99 ID in{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>six easy steps.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-foreground/70 md:text-lg">
              From your first WhatsApp hello to your first winning withdrawal — a guided journey that's safe, fast, and rewarding at every stage.
            </p>
            <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          </div>

          {/* Timeline grid */}
          <div className="relative mt-16">
            {/* Desktop connective spine */}
            <div className="pointer-events-none absolute inset-x-0 top-8 hidden lg:block">
              <div className="mx-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="group relative rounded-2xl p-[1.5px] transition-all duration-500 hover:-translate-y-1.5"
                  style={{ background: "linear-gradient(140deg, color-mix(in oklab, var(--accent) 55%, transparent), transparent 45%, color-mix(in oklab, var(--primary) 55%, transparent))" }}
                >
                  {/* Rotating hover glow */}
                  <div className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "conic-gradient(from 0deg, color-mix(in oklab, var(--accent) 60%, transparent), transparent 30%, color-mix(in oklab, var(--primary) 60%, transparent), transparent 70%)", animation: "spin 7s linear infinite", filter: "blur(14px)" }} />

                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[oklch(0.16_0.03_155)] via-[oklch(0.11_0.02_155)] to-[oklch(0.08_0.02_155)] p-7">
                    {/* Gloss sweep */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    {/* Top row — step badge + huge numeral */}
                    <div className="flex items-start justify-between">
                      <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-lg ring-1 ring-white/10 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110" style={{ background: "var(--gradient-gold)", boxShadow: "0 12px 30px -8px color-mix(in oklab, var(--accent) 45%, transparent)" }}>
                        <s.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/40">Step</div>
                        <div className="-mt-1 text-5xl font-black leading-none tracking-tighter" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-6 text-lg font-bold tracking-tight">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">{s.desc}</p>

                    {/* Progress bar */}
                    <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${((i + 1) / steps.length) * 100}%`, background: "var(--gradient-gold)" }}
                      />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-widest text-foreground/50">
                      <span>{i === 0 ? "Start here" : i === steps.length - 1 ? "You're in" : "In progress"}</span>
                      <span>{i + 1} / {steps.length}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 flex justify-center">
            <a href="#top" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-2xl transition-transform hover:scale-105" style={{ background: "var(--gradient-gold)" }}>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Get your ID on WhatsApp</span>
              <span aria-hidden className="relative transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CASINO — premium redesign */}
      <section className="relative overflow-hidden border-t border-primary/15 py-24">
        {/* Ambient background: casino red/gold/emerald */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ background: "radial-gradient(1100px 500px at 10% 0%, color-mix(in oklab, oklch(0.55 0.20 25) 22%, transparent), transparent 60%), radial-gradient(900px 500px at 100% 100%, color-mix(in oklab, var(--accent) 20%, transparent), transparent 60%), linear-gradient(180deg, oklch(0.09 0.02 25 / 0.85), oklch(0.11 0.03 155 / 0.85))" }} />
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-gold)", animation: "orb-drift-a 22s ease-in-out infinite" }} />
          <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.60 0.22 25), transparent 70%)", animation: "orb-drift-b 24s ease-in-out infinite" }} />
          {/* Playing-card suit pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, currentColor 1.5px, transparent 2px), radial-gradient(circle at 75% 75%, currentColor 1.5px, transparent 2px)", backgroundSize: "60px 60px", color: "var(--accent)" }} />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent backdrop-blur">
              <Gamepad2 className="h-3.5 w-3.5" />
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Live Casino · HD Streaming
            </div>
            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
              India's most-loved{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>casino tables</span>
              <br />
              <span className="text-foreground/90">— streaming live, 24/7.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-foreground/70 md:text-lg">
              Real dealers. Real stakes. Real wins. Every table is broadcast in crystal-clear HD with certified fair-play RNG and near-zero latency — one Cricbet99 wallet, endless action.
            </p>

            {/* Trust chips */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {["HD Live Dealers", "RNG Certified", "24/7 Tables", "Instant Payouts"].map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-foreground/60 backdrop-blur">
                  {chip}
                </span>
              ))}
            </div>
            <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {casinoGames.map((g, i) => (
              <div
                key={g.title}
                className="group relative overflow-hidden rounded-2xl p-[1.5px] transition-all duration-500 hover:-translate-y-1.5"
                style={{ background: "linear-gradient(140deg, color-mix(in oklab, var(--accent) 60%, transparent), transparent 45%, color-mix(in oklab, oklch(0.55 0.20 25) 55%, transparent))" }}
              >
                <div className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "conic-gradient(from 0deg, color-mix(in oklab, var(--accent) 70%, transparent), transparent 30%, color-mix(in oklab, oklch(0.60 0.22 25) 70%, transparent), transparent 70%)", animation: "spin 6s linear infinite", filter: "blur(14px)" }} />

                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[oklch(0.14_0.03_25)] via-[oklch(0.10_0.02_25)] to-[oklch(0.08_0.02_155)] p-7">
                  {/* Gloss sweep */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {/* Rank ribbon */}
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-accent backdrop-blur">
                    Top {i + 1}
                  </div>

                  <div className="text-6xl font-black leading-none tracking-tighter" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 4px 12px color-mix(in oklab, var(--accent) 30%, transparent))" }}>
                    {g.rank}
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight">{g.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">{g.desc}</p>

                  {/* Live pulse footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-foreground/60">
                      <span className="relative inline-flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                      </span>
                      Live now
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-accent transition-transform group-hover:translate-x-1">
                      Play table
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex justify-center">
            <a href="#top" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-2xl transition-transform hover:scale-105" style={{ background: "var(--gradient-gold)" }}>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Take a seat at the table</span>
              <span aria-hidden className="relative transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* RECENT POSTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <Flame className="h-3.5 w-3.5" /> Cricbet99 Journal
              </div>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Recent
                <span className="ml-2 bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>posts & analysis.</span>
              </h2>
              <p className="mt-4 text-foreground/75">
                Sharp match previews, IPL storylines, betting strategy and platform guides — refreshed by our editorial desk every week.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/50 bg-background/60 px-5 py-2.5 text-sm font-bold text-foreground transition-transform hover:scale-105"
            >
              View all posts <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {[...blogPosts]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 6)
              .map((post) => (
                <Link
                  key={post.slug}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-1.5"
                  style={{ background: "linear-gradient(140deg, color-mix(in oklab, var(--primary) 55%, transparent), color-mix(in oklab, var(--accent) 25%, transparent) 45%, color-mix(in oklab, var(--primary) 10%, transparent))" }}
                >
                 <div className="relative flex h-full flex-col overflow-hidden rounded-[15px] bg-[hsl(var(--background))]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {post.hero ? (
                      <img
                        src={post.hero}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div
                        className="h-full w-full"
                        style={{ background: "var(--gradient-hero)" }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <span
                      className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary-foreground shadow-[0_8px_24px_-8px_rgba(0,0,0,0.9)]"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      {post.tag}
                    </span>
                  </div>
                  <div className="relative flex flex-1 flex-col p-6">
                    <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary/90">
                      <span className="h-px w-6 bg-gradient-to-r from-primary to-transparent" />
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                    <h3 className="mt-3 text-lg font-black leading-snug text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/65">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-primary/15 pt-4">
                      <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
                        Read article
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground transition-transform group-hover:translate-x-1 group-hover:scale-110" style={{ background: "var(--gradient-gold)" }}>
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                 </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* PROOF / TESTIMONIALS */}
      <section className="relative overflow-hidden border-t border-primary/15 py-28">
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: "radial-gradient(600px circle at 15% 20%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%), radial-gradient(500px circle at 85% 80%, color-mix(in oklab, var(--accent) 10%, transparent), transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <ClipboardCheck className="h-3.5 w-3.5" /> Verified Winners · Real Payouts
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Trusted by punters who
              <span className="ml-2 bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>actually win.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/65 md:text-base">
              Unedited words from real Cricbet99 members — verified IDs, verified withdrawals, straight from WhatsApp.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {[
              { name: "Ravi K.", city: "Mumbai", role: "IPL Regular", initials: "RK", payout: "₹18,400", quote: "ID activated in under 3 minutes. First IPL bet placed, first withdrawal in my bank the same night. Zero friction, zero excuses." },
              { name: "Aditya S.", city: "Bengaluru", role: "Session Specialist", initials: "AS", payout: "₹42,900", quote: "Tried four platforms before this. Cricbet99 has the sharpest session odds and a WhatsApp manager who actually understands cricket." },
              { name: "Neha P.", city: "Delhi", role: "Live Casino Player", initials: "NP", payout: "₹27,150", quote: "The Teen Patti live tables are elite — crisp HD stream, zero lag, and my withdrawal hit my account inside 8 minutes flat." },
            ].map((t, idx) => (
              <div key={t.name} className="group relative rounded-3xl p-[1.5px] transition-all duration-500 hover:-translate-y-2" style={{ backgroundImage: "linear-gradient(140deg, color-mix(in oklab, var(--primary) 55%, transparent), color-mix(in oklab, var(--accent) 50%, transparent) 45%, transparent 80%)" }}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-background/95 p-8 backdrop-blur-xl">
                  {/* Ambient glow on hover */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" style={{ background: "var(--gradient-gold)" }} />

                  {/* Quote glyph */}
                  <div className="absolute right-6 top-5 font-serif text-7xl leading-none text-primary/15 transition-colors duration-500 group-hover:text-primary/25">"</div>

                  {/* Rating + verified */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex gap-0.5 text-accent">
                      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
                      <ClipboardCheck className="h-3 w-3" /> Verified
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="relative mt-6 text-[15px] leading-relaxed text-foreground/85">
                    {t.quote}
                  </p>

                  {/* Divider */}
                  <div className="relative mt-6 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 40%, transparent), transparent)" }} />

                  {/* Footer: avatar + payout */}
                  <div className="relative mt-5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-black text-background shadow-lg" style={{ background: "var(--gradient-gold)" }}>
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground">{t.name}</div>
                        <div className="text-[11px] font-medium uppercase tracking-wider text-foreground/55">{t.city} · {t.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-foreground/50">Withdrew</div>
                      <div className="bg-clip-text text-sm font-black text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>{t.payout}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      <CTABand
        heading="Your winning session starts on Cricbet99."
        sub="Skip the sign-up forms. Message us on WhatsApp, verify in one tap, and go live with a loaded Cricbet99 ID — welcome bonus already in your wallet."
      />

      {/* AI Overview at the end of page */}
      {aiOverview && (
        <AiOverview 
          summary={aiOverview.summary} 
          highlights={aiOverview.keyFeatures} 
        />
      )}

    </SiteLayout>
  );
}

