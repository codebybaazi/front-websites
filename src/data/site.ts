import {
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  Trophy,
  Zap,
  Wallet,
  Headphones,
  BookOpen,
  FileText,
  LifeBuoy,
  Smartphone,
  Gift,
  KeyRound,
  Send,
  MessageCircle,
  TrendingUp,
  Target,
  Award,
  Globe,
  Dice5,
  Gamepad2,
  Crown,
  Users,
} from "lucide-react";

export type MegaItem = {
  label: string;
  desc?: string;
  to: string;
  icon?: React.ComponentType<{ className?: string }>;
};
export type MegaGroup = { heading: string; items: MegaItem[] };
export type NavItem = {
  to: string;
  label: string;
  mega?: {
    groups: MegaGroup[];
    feature?: { title: string; desc: string; cta: string; to: string };
  };
};

export const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/about-us",
    label: "About",
    mega: {
      groups: [
        {
          heading: "The Brand",
          items: [
            { label: "About Lotus365", to: "/about-us", icon: Sparkles },
            { label: "What is Lotus365", to: "/what-is-lotus365", icon: BadgeCheck },
            { label: "Why Choose Lotus365", to: "/why-choose-lotus365-book", icon: Crown },
            { label: "Big Win Stories", to: "/lotus365-big-win-stories", icon: Award },
          ],
        },
        {
          heading: "Trust & Safety",
          items: [
            { label: "Is Lotus365 Safe?", to: "/is-lotus365-safe", icon: ShieldCheck },
            { label: "Is Lotus365 Legal?", to: "/is-lotus365-legal", icon: ShieldCheck },
            { label: "Real or Fake", to: "/is-lotus365-real-or-fake", icon: BadgeCheck },
            { label: "Security Layers", to: "/lotus365-security", icon: ShieldCheck },
          ],
        },
      ],
    },
  },
  {
    to: "/services",
    label: "Services",
    mega: {
      groups: [
        {
          heading: "Cricket",
          items: [
            { label: "Cricket Betting", to: "/lotus365-cricket", icon: Trophy },
            { label: "IPL 2026", to: "/ipl-betting", icon: Trophy },
            { label: "WPL 2026", to: "/wpl-2026-betting-lotus365-book", icon: Trophy },
            { label: "T20 World Cup", to: "/icc-t20-world-cup-betting", icon: Award },
          ],
        },
        {
          heading: "Sports",
          items: [
            { label: "Football Betting", to: "/football-betting", icon: Trophy },
            { label: "Tennis Betting", to: "/tennis-betting", icon: Trophy },
            { label: "Basketball", to: "/basketball-betting", icon: Globe },
            { label: "Horse Racing", to: "/horse-race-betting", icon: TrendingUp },
          ],
        },
        {
          heading: "Casino & More",
          items: [
            { label: "Live Casino", to: "/casino", icon: Dice5 },
            { label: "Indian Card Games", to: "/indian-card-games", icon: Gamepad2 },
            { label: "Kabaddi", to: "/kabaddi-betting", icon: Zap },
            { label: "Esports", to: "/esports-betting", icon: Gamepad2 },
          ],
        },
      ],
    },
  },
  {
    to: "/lotus365-exchange",
    label: "Casino & Exchange",
    mega: {
      groups: [
        {
          heading: "Play",
          items: [
            { label: "Sports Book", to: "/lotus365-betting", icon: Trophy },
            { label: "Exchange", to: "/lotus365-exchange", icon: TrendingUp },
            { label: "Today's Best Odds", to: "/lotus365-todays-best-odds", icon: Target },
            { label: "Predictions", to: "/lotus365-prediction", icon: Award },
          ],
        },
        {
          heading: "Partner Platforms",
          items: [
            { label: "11XPlay", to: "/11xplay", icon: Dice5 },
            { label: "Gold365", to: "/gold365", icon: Crown },
            { label: "Cricbet99", to: "/cricbet99", icon: Trophy },
            { label: "Laser247", to: "/laser247", icon: Dice5 },
            { label: "All Platforms", to: "/platforms", icon: Globe },
          ],
        },
      ],
    },
  },
  {
    to: "/lotus365-id",
    label: "ID & Wallet",
    mega: {
      groups: [
        {
          heading: "Get Started",
          items: [
            { label: "Get Lotus365 ID", to: "/lotus365-id", icon: KeyRound },
            { label: "Login", to: "/lotus365-login", icon: KeyRound },
            { label: "Register", to: "/register", icon: BadgeCheck },
            { label: "Demo ID", to: "/lotus365-demo-id", icon: Sparkles },
          ],
        },
        {
          heading: "Wallet",
          items: [
            { label: "How to Deposit", to: "/how-to-deposit", icon: Wallet },
            { label: "How to Withdraw", to: "/how-to-withdraw-safely", icon: Wallet },
            { label: "Transaction Limits", to: "/lotus365-transaction-limits", icon: Wallet },
            { label: "Bonuses", to: "/lotus365-book-bonus", icon: Gift },
          ],
        },
      ],
    },
  },
  {
    to: "/support",
    label: "Support",
    mega: {
      groups: [
        {
          heading: "Contact",
          items: [
            { label: "Support Hub", to: "/support", icon: LifeBuoy },
            { label: "Contact Us", to: "/contact-us", icon: LifeBuoy },
            { label: "WhatsApp Number", to: "/lotus365-whatsapp-number", icon: MessageCircle },
            { label: "Deposit Number", to: "/lotus365-deposit-number", icon: Wallet },
            { label: "Withdrawal Number", to: "/lotus365-withdrawal-number", icon: Wallet },
            { label: "Customer Care Number", to: "/lotus365-customer-care-number", icon: Headphones },
            { label: "WhatsApp Support", to: "/lotus365-whatsapp-support", icon: Headphones },
            { label: "Telegram Channel", to: "/lotus365-telegram-channel", icon: Send },
          ],
        },
        {
          heading: "Help Center",
          items: [
            { label: "Login Issues", to: "/login-issues", icon: KeyRound },
            { label: "Deposit Issues", to: "/deposit-issues", icon: Wallet },
            { label: "Withdrawal Delay", to: "/withdrawal-delay", icon: Wallet },
            { label: "Bonus Issues", to: "/bonus-issues", icon: Gift },
            { label: "Account Blocked", to: "/account-blocked", icon: ShieldCheck },
          ],
        },
      ],
    },
  },
  {
    to: "/policies",
    label: "Policies",
    mega: {
      groups: [
        {
          heading: "Legal",
          items: [
            { label: "Policies Hub", to: "/policies", icon: FileText },
            { label: "Terms & Conditions", to: "/terms-conditions", icon: FileText },
            { label: "Privacy Policy", to: "/privacy-policy", icon: FileText },
            { label: "Disclaimer", to: "/disclaimer", icon: FileText },
            { label: "Refund Policy", to: "/refund-policy", icon: FileText },
          ],
        },
        {
          heading: "Fair Play",
          items: [
            { label: "Rules & Regulations", to: "/rules-regulations", icon: FileText },
            { label: "Community Guidelines", to: "/community-guidelines", icon: BadgeCheck },
            { label: "KYC Verification", to: "/kyc-verification-policy", icon: BadgeCheck },
            { label: "Fair Deal", to: "/fairdeal", icon: ShieldCheck },
            { label: "Responsible Gaming", to: "/responsible-gaming", icon: ShieldCheck },
          ],
        },
      ],
    },
  },
  {
    to: "/blog",
    label: "Blog",
    mega: {
      groups: [
        {
          heading: "Reads",
          items: [
            { label: "Blog Hub", to: "/blog", icon: BookOpen },
            { label: "Betting Guides", to: "/betting-guides", icon: BookOpen },
            { label: "Case Studies", to: "/case-study", icon: Award },
            { label: "Reviews", to: "/lotus365-reviews", icon: BadgeCheck },
            { label: "Meet the Authors", to: "/authors", icon: Users },
          ],
        },
      ],
    },
  },
  {
    to: "/lotus365-vs-skyexchange",
    label: "Compare",
    mega: {
      groups: [
        {
          heading: "Head-to-head",
          items: [
            { label: "Lotus365 vs Skyexchange 247", to: "/lotus365-vs-skyexchange", icon: Trophy },
            { label: "Lotus365 vs Diamondexch9", to: "/lotus365-vs-diamondexch", icon: Trophy },
            { label: "Lotus365 vs Betbhai9", to: "/lotus365-vs-betbhai9", icon: Trophy },
            { label: "Lotus365 vs Lords Exchange", to: "/lotus365-vs-lords-exchange", icon: Trophy },
            { label: "Lotus365 vs Fairplay", to: "/lotus365-vs-fairplay", icon: Trophy },
            { label: "Lotus365 vs Betbook247", to: "/lotus365-vs-betbook247", icon: Trophy },
          ],
        },
      ],
    },
  },
];

export const siteName = "Lotus365";
export const siteUrl = "https://lotus365id.com";
export const supportLine = "Instant payouts · Verified · 24/7 concierge";
export const supportEmail = "help@lotus365id.com";

/**
 * Article schema dates for the static pages/guides/case-studies that don't
 * carry their own per-item `date` field (unlike blog posts). Sourced from
 * real git history, not invented: `git log` shows pages.ts/guides.ts/cases.ts
 * first landed on 2026-07-22, and CONTENT_MODIFIED_DATE tracks the most
 * recent site-wide content revision to that data.
 */
export const CONTENT_PUBLISHED_DATE = "2026-07-22";
export const CONTENT_MODIFIED_DATE = "2026-09-08";

/** Static fallback until the live JSON number hydrates. Prefer `useWhatsAppUrl()`. */
export const whatsappUrl =
  "https://wa.me/918294924767?text=" +
  encodeURIComponent("Hi Lotus365, I want to get started.");
