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
            { label: "About Us", desc: "Our story since 2014", to: "/about", icon: Sparkles },
            { label: "Why Choose Us", desc: "1M+ trusted players", to: "/why", icon: BadgeCheck },
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
            { label: "IPL", desc: "IPL markets", to: "/sports", icon: Trophy },
            { label: "T20 World Cup", desc: "ICC odds", to: "/sports", icon: Trophy },
            { label: "Champions Trophy", desc: "Live coverage", to: "/sports", icon: Trophy },
            { label: "WPL", desc: "Women's Premier League", to: "/sports", icon: Trophy },
          ],
        },
        {
          heading: "Other Sports",
          items: [
            { label: "Football", desc: "Top leagues & live odds", to: "/sports", icon: Trophy },
            { label: "Kabaddi", desc: "PKL & internationals", to: "/sports", icon: Zap },
            { label: "Basketball", desc: "NBA & Euroleague", to: "/sports", icon: Zap },
            { label: "Horse Racing", desc: "Global race meets", to: "/sports", icon: Zap },
            { label: "Esports", desc: "CS, Dota, Valorant", to: "/sports", icon: Zap },
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
            { label: "Flagship ID", desc: "Our flagship product", to: "/platforms", icon: Sparkles },
            { label: "Exchange", desc: "Full exchange access", to: "/platforms", icon: Sparkles },
            { label: "Partner A", desc: "Popular exchange", to: "/platforms", icon: Globe },
            { label: "Partner B", desc: "Fast & reliable", to: "/platforms", icon: Globe },
          ],
        },
        {
          heading: "More Platforms",
          items: [
            { label: "Partner C", desc: "Premium markets", to: "/platforms", icon: Globe },
            { label: "Partner D", desc: "Cricket specialist", to: "/platforms", icon: Globe },
            { label: "Partner E", desc: "Clean odds", to: "/platforms", icon: Globe },
            { label: "All Platforms", desc: "Browse the full list", to: "/platforms", icon: BookOpen },
          ],
        },
        {
          heading: "Apps & Access",
          items: [
            { label: "Mobile App", desc: "Android & iOS", to: "/app", icon: Smartphone },
            { label: "Login", desc: "Access your ID", to: "/login", icon: KeyRound },
            { label: "Register", desc: "Create your ID", to: "/register", icon: BadgeCheck },
            { label: "Demo ID", desc: "Try before you deposit", to: "/demo", icon: Zap },
          ],
        },
      ],
    },
  },
  {
    to: "/guides",
    label: "Guides",
    mega: {
      groups: [
        {
          heading: "Betting Guides",
          items: [
            { label: "Place a Bet", desc: "Step-by-step", to: "/guides", icon: BookOpen },
            { label: "Session Betting", desc: "Overs & sessions", to: "/guides", icon: BookOpen },
            { label: "Toss Market", desc: "Fast-turn bets", to: "/guides", icon: BookOpen },
            { label: "Live Betting", desc: "In-play strategy", to: "/guides", icon: BookOpen },
            { label: "Set Limits", desc: "Play responsibly", to: "/guides", icon: ShieldCheck },
            { label: "The Margin", desc: "How bookies earn", to: "/guides", icon: BookOpen },
          ],
        },
        {
          heading: "Case Studies",
          items: [
            { label: "5K → 25K Profit", desc: "Real journey", to: "/case-studies", icon: TrendingUp },
            { label: "Live 3x Returns", desc: "Case study", to: "/case-studies", icon: TrendingUp },
            { label: "Small Budget", desc: "Smart bankroll", to: "/case-studies", icon: Target },
            { label: "Toss Profit", desc: "10-minute win", to: "/case-studies", icon: Target },
            { label: "High-Odds", desc: "Value hunting", to: "/case-studies", icon: TrendingUp },
            { label: "Big Wins", desc: "Player wins", to: "/case-studies", icon: Award },
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
            { label: "Deposit", desc: "UPI, bank, wallets", to: "/support", icon: Wallet },
            { label: "Withdraw", desc: "Payout in minutes", to: "/support", icon: Wallet },
            { label: "Limits", desc: "Caps explained", to: "/support", icon: Wallet },
            { label: "Bonuses", desc: "Welcome & reload", to: "/support", icon: Gift },
            { label: "Referral", desc: "Earn on invites", to: "/support", icon: Gift },
          ],
        },
        {
          heading: "Support Desk",
          items: [
            { label: "24/7 Support", desc: "Always online", to: "/support", icon: LifeBuoy },
            { label: "WhatsApp", desc: "Chat instantly", to: "/support", icon: MessageCircle },
            { label: "Priority Desk", desc: "For VIPs", to: "/support", icon: Headphones },
            { label: "Telegram", desc: "Odds & updates", to: "/support", icon: Send },
          ],
        },
        {
          heading: "Common Issues",
          items: [
            { label: "Login Issues", desc: "Fix access", to: "/support", icon: KeyRound },
            { label: "Deposit Issues", desc: "Troubleshoot", to: "/support", icon: Wallet },
            { label: "Withdrawal Delay", desc: "What to check", to: "/support", icon: Wallet },
            { label: "KYC", desc: "Verify your ID", to: "/support", icon: BadgeCheck },
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
