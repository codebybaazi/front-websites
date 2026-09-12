import type { LucideIcon } from "lucide-react";
import { Trophy, Dice5, GitCompareArrows, LifeBuoy, ScrollText } from "lucide-react";

export type NavItem = {
  name: string;
  href: string;
  badge?: string;
  search?: Record<string, string>;
};

export type NavSection = {
  name: string;
  items: NavItem[];
};

export type MegaMenuItem = {
  title: string;
  icon: LucideIcon;
  href: string;
  description: string;
  sections: NavSection[];
};

export const megaMenu: MegaMenuItem[] = [
  {
    title: "Markets",
    icon: Trophy,
    href: "/betting",
    description: "Cricket first, then football, tennis and the rest — one wallet.",
    sections: [
      {
        name: "This season",
        items: [
          { name: "IPL 2026", href: "/ipl-betting", badge: "Live" },
          { name: "T20 World Cup", href: "/t20-world-cup" },
          { name: "Champions Trophy", href: "/champions-trophy" },
          { name: "WPL 2026", href: "/wpl-betting" },
          { name: "2026–27 fixture list", href: "/schedule", badge: "New" },
          { name: "Every match", href: "/matches", badge: "New" },
        ],
      },
      {
        name: "By sport",
        items: [
          { name: "Cricket", href: "/betting", search: { category: "cricket" } },
          { name: "Football", href: "/betting", search: { category: "football" } },
          { name: "Tennis", href: "/betting", search: { category: "tennis" } },
          { name: "Horse racing", href: "/horse-racing" },
          { name: "Kabaddi", href: "/kabaddi-betting" },
          { name: "eSports", href: "/esports-betting" },
          { name: "Basketball", href: "/basketball-betting" },
        ],
      },
    ],
  },
  {
    title: "Tables",
    icon: Dice5,
    href: "/casino",
    description: "Live dealers, Teen Patti, Andar Bahar and slots — same ID.",
    sections: [
      {
        name: "Tables",
        items: [
          { name: "Live dealers", href: "/casino", search: { type: "live" } },
          { name: "Indian card games", href: "/casino", search: { type: "indian" } },
          { name: "Crash games", href: "/casino", search: { type: "crash" } },
          { name: "Roulette & baccarat", href: "/casino", search: { type: "table" } },
        ],
      },
      {
        name: "Slots",
        items: [
          { name: "Most played", href: "/casino", search: { type: "slots" } },
          { name: "Bonus buy", href: "/casino", search: { type: "bonus-buy" } },
          { name: "Jackpots", href: "/casino", search: { type: "jackpots" } },
        ],
      },
    ],
  },
  {
    title: "Compare",
    icon: GitCompareArrows,
    href: "/all-links",
    description: "How Fairplay sits next to other cricket IDs — facts, not slogans.",
    sections: [
      {
        name: "Fairplay vs",
        items: [
          { name: "vs Lotus365", href: "/fairplay-vs-lotus365" },
          { name: "vs Reddybook", href: "/fairplay-vs-reddybook" },
          { name: "vs Gold365", href: "/fairplay-vs-gold365" },
          { name: "vs Mahavir Book", href: "/fairplay-vs-mahavir-book" },
          { name: "vs Diamond Exch", href: "/fairplay-vs-diamond-exchange" },
          { name: "vs Laser247", href: "/fairplay-vs-laser247" },
          { name: "vs 11xplay", href: "/fairplay-vs-11xplay" },
          { name: "vs Skyexchange", href: "/fairplay-vs-skyexchange247" },
          { name: "vs Fairdeal", href: "/fairplay-vs-fairdeal" },
        ],
      },
      {
        name: "Partner desks",
        items: [
          { name: "How partners work", href: "/services" },
          { name: "Gold365", href: "/gold365" },
          { name: "11xplay", href: "/11xplay" },
          { name: "Laser247", href: "/laser247" },
          { name: "Cricbet99", href: "/cricbet99" },
          { name: "Fairdeal", href: "/fairdeal" },
        ],
      },
    ],
  },
  {
    title: "Help",
    icon: LifeBuoy,
    href: "/support",
    description: "IDs, UPI, payouts and locked logins — written as the desk actually works.",
    sections: [
      {
        name: "Start here",
        items: [
          { name: "Support desk", href: "/support" },
          { name: "Is Fairplay real?", href: "/is-fairplay-real" },
          { name: "Is Fairplay safe?", href: "/is-fairplay-safe" },
          { name: "Is Fairplay legal?", href: "/is-fairplay-legal" },
          { name: "What is Fairplay?", href: "/what-is-fairplay" },
          { name: "Talk to us", href: "/contact-us" },
          { name: "Fairplay ID", href: "/fairplay-id" },
          { name: "Guides & match notes", href: "/blog" },
          { name: "Meet the writers", href: "/authors" },
          { name: "Every page on the site", href: "/all-links", badge: "New" },
        ],
      },
      {
        name: "How-to",
        items: [
          { name: "Create an ID", href: "/register-guide" },
          { name: "Sign in", href: "/login-guide" },
          { name: "Fund the wallet", href: "/deposit-guide" },
          { name: "Deposit Number", href: "/fairplay-deposit-number" },
          { name: "Withdraw", href: "/withdrawal-guide" },
          { name: "Withdrawal Number", href: "/fairplay-withdrawal-number" },
          { name: "Customer Care Number", href: "/fairplay-customer-care-number" },
          { name: "Lock down the ID", href: "/security-safety" },
        ],
      },
    ],
  },
  {
    title: "Policies",
    icon: ScrollText,
    href: "/all-links",
    description: "The rules on your ID, wallet and markets — in ordinary English.",
    sections: [
      {
        name: "Policies",
        items: [
          { name: "Privacy policy", href: "/privacy-policy" },
          { name: "Terms & conditions", href: "/terms-conditions" },
          { name: "Play within limits", href: "/responsible-gaming" },
          { name: "Legal notes", href: "/legal-status" },
        ],
      },
      {
        name: "Wallet & ID",
        items: [
          { name: "Security", href: "/security-safety" },
          { name: "KYC checks", href: "/kyc-verification-policy" },
          { name: "Refunds", href: "/refund-policy" },
          { name: "Betting rules", href: "/rules-regulations" },
          { name: "Disclaimer", href: "/disclaimer" },
        ],
      },
    ],
  },
];

export const footerColumns: Array<{ title: string; links: Array<{ name: string; href: string }> }> = [
  {
    title: "Play",
    links: [
      { name: "Live markets", href: "/betting" },
      { name: "Live tables", href: "/casino" },
      { name: "IPL books", href: "/ipl-betting" },
      { name: "Fairplay ID", href: "/fairplay-id" },
      { name: "Guides", href: "/blog" },
    ],
  },
  {
    title: "Fixtures",
    links: [
      { name: "2026–27 calendar", href: "/schedule" },
      { name: "Match index", href: "/matches" },
      { name: "T20 World Cup", href: "/t20-world-cup" },
      { name: "WPL 2026", href: "/wpl-betting" },
      { name: "Champions Trophy", href: "/champions-trophy" },
    ],
  },
  {
    title: "Desk",
    links: [
      { name: "Support", href: "/support" },
      { name: "Sign in help", href: "/login-guide" },
      { name: "UPI deposit", href: "/deposit-guide" },
      { name: "Contact", href: "/contact-us" },
      { name: "Mobile app", href: "/app" },
      { name: "Authors", href: "/authors" },
    ],
  },
  {
    title: "House rules",
    links: [
      { name: "About Fairplay", href: "/about" },
      { name: "Play within limits", href: "/responsible-gaming" },
      { name: "Privacy", href: "/privacy-policy" },
      { name: "Terms", href: "/terms-conditions" },
      { name: "All pages", href: "/all-links" },
    ],
  },
];

export const footerExploreGroups: Array<{ title: string; links: Array<{ name: string; href: string }> }> = [
  {
    title: "Other sports",
    links: [
      { name: "Basketball", href: "/basketball-betting" },
      { name: "eSports", href: "/esports-betting" },
      { name: "Kabaddi", href: "/kabaddi-betting" },
      { name: "Horse racing", href: "/horse-racing" },
    ],
  },
  {
    title: "Fairplay compared",
    links: [
      { name: "vs Lotus365", href: "/fairplay-vs-lotus365" },
      { name: "vs Reddybook", href: "/fairplay-vs-reddybook" },
      { name: "vs Gold365", href: "/fairplay-vs-gold365" },
      { name: "vs Laser247", href: "/fairplay-vs-laser247" },
      { name: "vs 11xplay", href: "/fairplay-vs-11xplay" },
      { name: "vs Fairdeal", href: "/fairplay-vs-fairdeal" },
    ],
  },
  {
    title: "If something sticks",
    links: [
      { name: "Account trouble", href: "/account-issues" },
      { name: "Can't log in", href: "/login-issues" },
      { name: "Deposit not showing", href: "/deposit-issues" },
      { name: "Withdrawal delayed", href: "/withdrawal-issues" },
      { name: "WhatsApp desk", href: "/whatsapp-support" },
    ],
  },
  {
    title: "Before you stake",
    links: [
      { name: "Is Fairplay legal?", href: "/is-fairplay-legal" },
      { name: "Is Fairplay safe?", href: "/is-fairplay-safe" },
      { name: "Is Fairplay real?", href: "/is-fairplay-real" },
      { name: "KYC checks", href: "/kyc-verification-policy" },
      { name: "Betting rules", href: "/rules-regulations" },
    ],
  },
];
