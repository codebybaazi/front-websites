import { Link } from "@tanstack/react-router";
import { ChevronRight, Trophy, Dice5, KeyRound, LifeBuoy } from "lucide-react";

type QuickLink = { label: string; to: string };
type QuickGroup = {
  heading: string;
  icon: React.ComponentType<{ className?: string }>;
  links: QuickLink[];
};

const GROUPS: QuickGroup[] = [
  {
    heading: "Sports & Cricket",
    icon: Trophy,
    links: [
      { label: "Lotus365 Cricket Betting", to: "/lotus365-cricket" },
      { label: "IPL 2026 Betting", to: "/ipl-betting" },
      { label: "WPL 2026 Betting", to: "/wpl-2026-betting-lotus365-book" },
      { label: "ICC T20 World Cup", to: "/icc-t20-world-cup-betting" },
      { label: "Football Betting", to: "/football-betting" },
      { label: "Tennis Betting", to: "/tennis-betting" },
      { label: "Kabaddi Betting", to: "/kabaddi-betting" },
    ],
  },
  {
    heading: "Casino & Exchange",
    icon: Dice5,
    links: [
      { label: "Lotus365 Exchange", to: "/lotus365-exchange" },
      { label: "Live Casino", to: "/casino" },
      { label: "Indian Card Games", to: "/indian-card-games" },
      { label: "Today's Best Odds", to: "/lotus365-todays-best-odds" },
      { label: "Match Predictions", to: "/lotus365-prediction" },
      { label: "Esports Betting", to: "/esports-betting" },
      { label: "Sports Book", to: "/lotus365-betting" },
    ],
  },
  {
    heading: "Get Your ID & Wallet",
    icon: KeyRound,
    links: [
      { label: "Get Lotus365 ID", to: "/lotus365-id" },
      { label: "Lotus365 Login", to: "/lotus365-login" },
      { label: "Register Account", to: "/lotus365-register" },
      { label: "Demo ID", to: "/lotus365-demo-id" },
      { label: "How to Deposit", to: "/how-to-deposit" },
      { label: "How to Withdraw Safely", to: "/how-to-withdraw-safely" },
      { label: "Bonuses & Promotions", to: "/lotus365-book-bonus" },
    ],
  },
  {
    heading: "Support & Trust",
    icon: LifeBuoy,
    links: [
      { label: "Support Hub", to: "/support" },
      { label: "WhatsApp Support", to: "/lotus365-whatsapp-support" },
      { label: "Telegram Channel", to: "/lotus365-telegram-channel" },
      { label: "Is Lotus365 Safe?", to: "/is-lotus365-safe" },
      { label: "Is Lotus365 Legal?", to: "/is-lotus365-legal" },
      { label: "Responsible Gaming", to: "/responsible-gaming" },
      { label: "Reviews", to: "/lotus365-reviews" },
    ],
  },
];

const READS: QuickLink[] = [
  { label: "Blog Hub", to: "/blog" },
  { label: "Betting Guides", to: "/betting-guides" },
  { label: "Case Studies", to: "/case-study" },
  { label: "Big Win Stories", to: "/lotus365-big-win-stories" },
  { label: "Why Choose Lotus365", to: "/why-choose-lotus365-book" },
  { label: "About Lotus365", to: "/about-us" },
];

export function QuickLinks({
  currentPath,
  heading = "Explore more on Lotus365",
  subheading = "Fast paths across cricket betting, live casino, exchange odds, Lotus IDs and payouts — jump straight to the market you want.",
}: {
  currentPath?: string;
  heading?: string;
  subheading?: string;
}) {
  return (
    <section
      aria-label="Quick links"
      className="border-y border-white/10"
      style={{
        background:
          "radial-gradient(1200px 400px at 50% 0%, oklch(0.82 0.15 88 / 0.12), transparent 60%), linear-gradient(180deg, rgb(13 66 55) 0%, rgb(17 84 70) 100%)",
      }}
    >
      <nav className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-primary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Quick Links
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-white">
            {heading}
          </h2>
          <p className="max-w-2xl text-sm md:text-base text-white/70">
            {subheading}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g, idx) => {
            const Icon = g.icon;
            const items = g.links.filter((l) => l.to !== currentPath);
            return (
              <div
                key={g.heading}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-primary/30 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                    Group 0{idx + 1}
                  </span>
                </div>
                <h3 className="mb-4 font-display text-lg text-white">
                  {g.heading}
                </h3>
                <ul className="space-y-2.5">
                  {items.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="group/link inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors hover:text-primary"
                      >
                        <ChevronRight className="h-3.5 w-3.5 text-primary/70 transition-transform group-hover/link:translate-x-0.5" />
                        <span>{l.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.25em] text-white/50">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Explore all
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary/90">
              Popular Reads
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <ul className="flex flex-wrap gap-2">
            {READS.filter((l) => l.to !== currentPath).map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5 text-xs text-white/85 transition-colors hover:bg-primary/15 hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}
