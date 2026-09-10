import {
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  Trophy,
  Dice5,
  Zap,
  Wallet,
  Headphones,
  BookOpen,
  FileText,
  Users,
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
    to: "/about",
    label: "About",
    mega: {
      groups: [
        {
          heading: "Company",
          items: [
            { label: "About Us", desc: "Our story since 2010", to: "/about", icon: Sparkles },
            { label: "Why Choose Us", desc: "Since 2010, KYC-only IDs", to: "/why", icon: BadgeCheck },
            { label: "What We Do", desc: "The platform explained", to: "/what", icon: BookOpen },
            { label: "Trusted Provider", desc: "Verified & regulated", to: "/trusted", icon: ShieldCheck },
          ],
        },
        {
          heading: "Trust & Safety",
          items: [
            { label: "Legal", desc: "Compliance explained", to: "/legal", icon: ShieldCheck },
            { label: "Safety", desc: "Security first", to: "/safety", icon: ShieldCheck },
            { label: "Real Reviews", desc: "Verified truth", to: "/reviews", icon: BadgeCheck },
            { label: "Awards", desc: "Real feedback", to: "/awards", icon: Award },
          ],
        },
      ],
    },
  },
  {
    to: "/sports",
    label: "Sports",
    mega: {
      groups: [
        {
          heading: "Cricket",
          items: [
            { label: "IPL", desc: "IPL markets", to: "/ipl-betting", icon: Trophy },
            { label: "T20 World Cup", desc: "ICC odds", to: "/t20-world-cup-betting", icon: Trophy },
            { label: "Champions Trophy", desc: "Live coverage", to: "/champions-trophy-betting", icon: Trophy },
            { label: "WPL", desc: "Women's Premier League", to: "/wpl-betting", icon: Trophy },
          ],
        },
        {
          heading: "Other Sports",
          items: [
            { label: "Football", desc: "Top leagues & live odds", to: "/football-betting", icon: Trophy },
            { label: "Kabaddi", desc: "PKL & internationals", to: "/kabaddi-betting", icon: Zap },
            { label: "Basketball", desc: "NBA & Euroleague", to: "/basketball-betting", icon: Zap },
            { label: "Horse Racing", desc: "Global race meets", to: "/horse-racing-betting", icon: Zap },
            { label: "Esports", desc: "CS, Dota, Valorant", to: "/esports-betting", icon: Zap },
          ],
        },
      ],
    },
  },
  {
    to: "/platforms",
    label: "Platforms",
    mega: {
      groups: [
        {
          heading: "Top Exchanges",
          items: [
            { label: "11Xplay", desc: "Deepest cricket markets", to: "/11xplay", icon: Globe },
            { label: "Cricbet99", desc: "Fastest session pricing", to: "/cricbet99", icon: Globe },
            { label: "Gold365", desc: "Sports + full casino", to: "/gold365", icon: Globe },
            { label: "Laser247", desc: "Live betting, low stakes", to: "/laser247", icon: Globe },
          ],
        },
        {
          heading: "More Platforms",
          items: [
            { label: "Mahadev Book Exchange", desc: "Our in-house exchange", to: "/mahadev-exchange", icon: Sparkles },
            { label: "All Platforms", desc: "Compare every exchange", to: "/platforms", icon: BookOpen },
          ],
        },
        {
          heading: "Apps & Access",
          items: [
            { label: "Mobile App", desc: "Android & iOS", to: "/mahadev-betting-app", icon: Smartphone },
            { label: "Login", desc: "Access your ID", to: "/login", icon: KeyRound },
            { label: "Register", desc: "Create your ID", to: "/register", icon: BadgeCheck },
            { label: "Demo ID", desc: "Try before you deposit", to: "/mahadev-demo-id", icon: Zap },
          ],
        },
      ],
    },
  },
  {
    to: "/betting-guides",
    label: "Guides",
    mega: {
      groups: [
        {
          heading: "Betting Guides",
          items: [
            { label: "Place a Bet", desc: "Step-by-step", to: "/betting-guides/how-to-place-a-cricket-bet", icon: BookOpen },
            { label: "Session Betting", desc: "Overs & sessions", to: "/betting-guides/how-to-bet-on-session-betting", icon: BookOpen },
            { label: "Toss Market", desc: "Fast-turn bets", to: "/betting-guides/how-to-bet-on-toss-market", icon: BookOpen },
            { label: "Live Betting", desc: "In-play strategy", to: "/betting-guides/how-to-place-a-live-bet", icon: BookOpen },
            { label: "Set Limits", desc: "Play responsibly", to: "/betting-guides/how-to-set-betting-limits", icon: ShieldCheck },
            { label: "The Margin", desc: "How bookies earn", to: "/betting-guides/how-bookmakers-make-money", icon: BookOpen },
          ],
        },
        {
          heading: "Case Studies",
          items: [
            { label: "5K → 25K Profit", desc: "Real journey", to: "/case-study/ipl-5000-to-25000-profit", icon: TrendingUp },
            { label: "Live 3x Returns", desc: "Case study", to: "/case-study/live-betting-3x-returns", icon: TrendingUp },
            { label: "Small Budget", desc: "Smart bankroll", to: "/case-study/small-budget-betting-strategy", icon: Target },
            { label: "Toss Profit", desc: "10-minute win", to: "/case-study/toss-market-10-minute-profit", icon: Target },
            { label: "High-Odds", desc: "Value hunting", to: "/case-study/high-odds-value-hunting", icon: TrendingUp },
            { label: "Big Wins", desc: "Player wins", to: "/case-study/big-wins", icon: Award },
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
          heading: "Wallet",
          items: [
            { label: "Deposit", desc: "UPI, bank, wallets", to: "/mahadev-book-deposit-methods", icon: Wallet },
            { label: "Deposit Number", desc: "Official WhatsApp line", to: "/mahadev-book-deposit-number", icon: Wallet },
            { label: "Withdraw", desc: "Payout in minutes", to: "/mahadev-book-withdrawal-guide", icon: Wallet },
            { label: "Withdrawal Number", desc: "Official WhatsApp line", to: "/mahadev-book-withdrawal-number", icon: Wallet },
            { label: "Limits", desc: "Caps explained", to: "/mahadev-book-limits", icon: Wallet },
            { label: "Bonuses", desc: "Welcome & reload", to: "/mahadev-book-bonuses", icon: Gift },
            { label: "Referral", desc: "Earn on invites", to: "/mahadev-book-referral-program", icon: Gift },
          ],
        },
        {
          heading: "Support Desk",
          items: [
            { label: "24/7 Support", desc: "Always online", to: "/contact", icon: LifeBuoy },
            { label: "WhatsApp", desc: "Chat instantly", to: "/mahadev-book-customer-care-number", icon: MessageCircle },
            { label: "Customer Care Number", desc: "Official WhatsApp line", to: "/mahadev-book-customer-care-number", icon: Headphones },
            { label: "Priority Desk", desc: "For VIPs", to: "/mahadev-book-priority-support", icon: Headphones },
            { label: "Telegram", desc: "Odds & updates", to: "/mahadev-book-telegram", icon: Send },
          ],
        },
        {
          heading: "Common Issues",
          items: [
            { label: "Login Issues", desc: "Fix access", to: "/mahadev-book-login-issues", icon: KeyRound },
            { label: "Deposit Issues", desc: "Troubleshoot", to: "/mahadev-book-deposit-issues", icon: Wallet },
            { label: "Withdrawal Delay", desc: "What to check", to: "/mahadev-book-withdrawal-delay", icon: Wallet },
            { label: "KYC", desc: "Verify your ID", to: "/mahadev-book-kyc", icon: BadgeCheck },
          ],
        },
      ],
    },
  },
  {
    to: "/more",
    label: "More",
    mega: {
      groups: [
        {
          heading: "Compare Platforms",
          items: [
            { label: "Mahadev Book vs Skyexchange 247", desc: "Fees, markets & payouts", to: "/mahadev-book-vs-skyexchange-247", icon: TrendingUp },
            { label: "Mahadev Book vs Lotus 365", desc: "Head-to-head comparison", to: "/mahadev-book-vs-lotus-365", icon: TrendingUp },
            { label: "Mahadev Betting App", desc: "App overview & features", to: "/mahadev-betting-app", icon: Smartphone },
          ],
        },
        {
          heading: "Blog & Contact",
          items: [
            { label: "Predictions", desc: "Daily match tips", to: "/predictions", icon: Award },
            { label: "2026 Schedule", desc: "FIFA World Cup fixtures", to: "/schedule", icon: Award },
            { label: "All Matches", desc: "Fixtures by tournament", to: "/matches", icon: Trophy },
            { label: "Blog", desc: "Latest posts", to: "/blog", icon: BookOpen },
            { label: "Contact", desc: "Get in touch", to: "/contact", icon: MessageCircle },
          ],
        },
        {
          heading: "Policies",
          items: [
            { label: "Terms", desc: "The fine print", to: "/terms", icon: FileText },
            { label: "Privacy", desc: "Your data, protected", to: "/privacy", icon: FileText },
            { label: "Responsible Gaming", desc: "Play in control", to: "/responsible", icon: ShieldCheck },
            { label: "All Policies", desc: "Browse everything", to: "/policies", icon: FileText },
          ],
        },
      ],
    },
  },
];

export const siteName = "Mahadev Book";
export const supportLine = "Verified. Instant. Trusted 24/7.";
