import { enrichBlogArticle } from "@/utils/blog-seo";
import { BLOG_POST_DATES } from "@/utils/blog-post-dates";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Trophy, 
  Zap,
  Target,
  Crown,
  Star,
  ZapIcon,
  BookOpen,
  ShieldCheck,
  MessageCircle,
  Calendar,
  Clock
} from "lucide-react";

const RAW_BLOG_ARTICLES = [
  {
    "slug": "common-fairplay-login-id-issues-and-how-to-fix-them-easily",
    "title": "Common Fairplay Login Id Issues And How To Fix Them Easily",
    "category": "Support",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "ShieldCheck",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-add-money-in-fairplay-wallet-complete-beginner-guide",
    "title": "How To Add Money In Fairplay Wallet Complete Beginner Guide",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-bet-on-live-ipl-matches-using-fairplay-id",
    "title": "How To Bet On Live Ipl Matches Using Fairplay Id",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-check-bet-history-on-fairplay",
    "title": "How To Check Bet History On Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "step-by-step-guide-to-bet-on-icc-t20-world-cup-2026-with-fairplay-id",
    "title": "Step By Step Guide To Bet On Icc T20 World Cup 2026 With Fairplay Id",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "why-fairplay-is-a-top-choice-for-cricket-betting-in-india",
    "title": "Why Fairplay Is A Top Choice For Cricket Betting In India",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-fairplay-became-a-trusted-name-in-online-betting",
    "title": "How Fairplay Became A Trusted Name In Online Betting",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "things-to-check-before-buying-a-fairplay-id",
    "title": "Things To Check Before Buying A Fairplay Id",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "football-betting-guide-on-fairplay",
    "title": "Football Betting Guide On Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-verify-your-fairplay-account",
    "title": "How To Verify Your Fairplay Account",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-withdraw-money-from-fairplay-using-upi",
    "title": "How To Withdraw Money From Fairplay Using Upi",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "icc-mens-t20-world-cup-2026-betting-strategy-for-fairplay-users",
    "title": "Icc Mens T20 World Cup 2026 Betting Strategy For Fairplay Users",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-agent-system-explained",
    "title": "Fairplay Agent System Explained",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "top-5-safe-betting-strategies-for-wpl-matches-on-fairplay",
    "title": "Top 5 Safe Betting Strategies For Wpl Matches On Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-fairplay-works-login-id-creation-betting-process",
    "title": "How Fairplay Works Login Id Creation Betting Process",
    "category": "Support",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "ShieldCheck",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-app-vs-website",
    "title": "Fairplay App Vs Website",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-betting-options-bonuses-benefits",
    "title": "Fairplay Betting Options Bonuses Benefits",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-delhi-vs-up-warriors-women-match-analysis",
    "title": "Fairplay Delhi Vs Up Warriors Women Match Analysis",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-mumbai-vs-up-warriors-women-match-prediction",
    "title": "Fairplay Mumbai Vs Up Warriors Women Match Prediction",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-ipl-wpl-bbl-guide",
    "title": "Fairplay Ipl Wpl Bbl Guide",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-india-vs-new-zealand-3rd-odi-prediction",
    "title": "Fairplay India Vs New Zealand 3Rd Odi Prediction",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-whatsapp-support-service",
    "title": "Fairplay Whatsapp Support Service",
    "category": "Support",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "ShieldCheck",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-gg-w-vs-rcb-w-ipl-match-prediction",
    "title": "Fairplay Gg W Vs Rcb W Ipl Match Prediction",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-ind-vs-nz-t20-live-betting-strategy",
    "title": "Fairplay Ind Vs Nz T20 Live Betting Strategy",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "why-fairplay-trusted-ipl-t20-live-betting-india",
    "title": "Why Fairplay Trusted Ipl T20 Live Betting India",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-ind-vs-nz-2nd-t20-match-prediction",
    "title": "Fairplay Ind Vs Nz 2Nd T20 Match Prediction",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-online-gaming-guide",
    "title": "Fairplay Online Gaming Guide",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-id-in-5-easy-steps",
    "title": "Fairplay Id In 5 Easy Steps",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-id-for-online-betting",
    "title": "Fairplay Id For Online Betting",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "betting-history-using-fairplay-id",
    "title": "Betting History Using Fairplay Id",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "exclusive-bonuses-rewards-fairplay-id",
    "title": "Exclusive Bonuses Rewards Fairplay Id",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-india-vs-new-zealand-4th-t20-match-prediction",
    "title": "Fairplay India Vs New Zealand 4Th T20 Match Prediction",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-features-games-safe-betting",
    "title": "Fairplay Features Games Safe Betting",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-use-fairplay-on-mobile-india",
    "title": "How To Use Fairplay On Mobile India",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-money-transfer-guide",
    "title": "Fairplay Money Transfer Guide",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "ipl-live-match-betting-fairplay",
    "title": "Ipl Live Match Betting Fairplay",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-gaming-online-cricket-id",
    "title": "Fairplay Gaming Online Cricket Id",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "icc-t20-world-cup-2026-match-prediction-fairplay",
    "title": "Icc T20 World Cup 2026 Match Prediction Fairplay",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-online-betting-features-game-types",
    "title": "Fairplay Online Betting Features Game Types",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "ipl-betting-id-safe-signup-fairplay",
    "title": "Ipl Betting Id Safe Signup Fairplay",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-vs-other-betting-ids-2026",
    "title": "Fairplay Vs Other Betting Ids 2026",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "why-indian-gamers-prefer-fairplay",
    "title": "Why Indian Gamers Prefer Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-india-vs-usa-match-prediction-icc-t20-world-cup",
    "title": "Fairplay India Vs Usa Match Prediction Icc T20 World Cup",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-ipl-t20-world-cup-betting-guide",
    "title": "Fairplay Ipl T20 World Cup Betting Guide",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-best-time-to-place-bets",
    "title": "Fairplay Best Time To Place Bets",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-online-cricket-platform-india",
    "title": "Fairplay Online Cricket Platform India",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "casino-games-types-on-fairplay",
    "title": "Casino Games Types On Fairplay",
    "category": "Strategy",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Zap",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-t20-world-cup-predictions-betting-strategies",
    "title": "Fairplay T20 World Cup Predictions Betting Strategies",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-india-vs-pakistan-today-match-prediction",
    "title": "Fairplay India Vs Pakistan Today Match Prediction",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "live-match-betting-fairplay-winning-plan-t20-world-cup",
    "title": "Live Match Betting Fairplay Winning Plan T20 World Cup",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-safe-verified-ipl-online-cricket-id-2026",
    "title": "Fairplay Safe Verified Ipl Online Cricket Id 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "best-ipl-betting-tips-fairplay-users-2026",
    "title": "Best Ipl Betting Tips Fairplay Users 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-super-8-betting-strategy-t20-world-cup",
    "title": "Fairplay Super 8 Betting Strategy T20 World Cup",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-icc-t20-world-cup-2026-points-table-analysis",
    "title": "Fairplay Icc T20 World Cup 2026 Points Table Analysis",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "popular-cricket-football-prediction-markets-fairplay",
    "title": "Popular Cricket Football Prediction Markets Fairplay",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "new-zealand-vs-pakistan-super-8-match-prediction",
    "title": "New Zealand Vs Pakistan Super 8 Match Prediction",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-ind-vs-sa-match-prediction-who-will-win-today",
    "title": "Fairplay Ind Vs Sa Match Prediction Who Will Win Today",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-tds-betting-winnings-guide-2026",
    "title": "Fairplay Tds Betting Winnings Guide 2026",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-football-betting-bet-live-predict-smart-big-win",
    "title": "Fairplay Football Betting Bet Live Predict Smart Big Win",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "why-verification-matters-ipl-betting-id-fairplay-guide",
    "title": "Why Verification Matters Ipl Betting Id Fairplay Guide",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-whatsapp-vs-direct-login-withdrawals",
    "title": "Fairplay Whatsapp Vs Direct Login Withdrawals",
    "category": "Support",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "ShieldCheck",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-customer-support-24-7-help-for-betting-and-withdrawal-issues",
    "title": "Fairplay Customer Support 24 7 Help For Betting And Withdrawal Issues",
    "category": "Support",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "ShieldCheck",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "what-is-fairplay-a-complete-beginners-guide",
    "title": "What Is Fairplay A Complete Beginners Guide",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "why-fairplay-is-indias-most-popular-choice",
    "title": "Why Fairplay Is Indias Most Popular Choice",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-login-to-fairplay-a-step-by-step-beginners-guide",
    "title": "How To Login To Fairplay A Step By Step Beginners Guide",
    "category": "Support",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "ShieldCheck",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "ipl-betting-feels-different-from-regular-cricket-betting-on-fairplay",
    "title": "Ipl Betting Feels Different From Regular Cricket Betting On Fairplay",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-wi-vs-ind-elimination-match-today-prediction",
    "title": "Fairplay Wi Vs Ind Elimination Match Today Prediction",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-sa-vs-nz-semifinal-prediction",
    "title": "Fairplay Sa Vs Nz Semifinal Prediction",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-id-for-sa-vs-nz-semi-final-live-betting",
    "title": "Fairplay Id For Sa Vs Nz Semi Final Live Betting",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-app-guide-best-markets-1st-semi-final-2026",
    "title": "Fairplay App Guide Best Markets 1St Semi Final 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-india-vs-england-semifinal-match-prediction",
    "title": "Fairplay India Vs England Semifinal Match Prediction",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-t20-world-cup-final-betting-markets-odds-predictions",
    "title": "Fairplay T20 World Cup Final Betting Markets Odds Predictions",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-betting-id-guide-for-india-vs-new-zealand-final",
    "title": "Fairplay Betting Id Guide For India Vs New Zealand Final",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "india-vs-new-zealand-t20-world-cup-final-fairplay-match-prediction",
    "title": "India Vs New Zealand T20 World Cup Final Fairplay Match Prediction",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-ipl-betting-id-2026-prediction-guide",
    "title": "Fairplay Ipl Betting Id 2026 Prediction Guide",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-live-match-betting-works-fairplay",
    "title": "How Live Match Betting Works Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-vs-competitors-online-cricket-platform",
    "title": "Fairplay Vs Competitors Online Cricket Platform",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-how-to-withdraw-guide-money",
    "title": "Fairplay How To Withdraw Guide Money",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-deposit-money-on-fairplay",
    "title": "How To Deposit Money On Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-download-the-fairplay-app-safely",
    "title": "How To Download The Fairplay App Safely",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-login-problems-solutions",
    "title": "Fairplay Login Problems Solutions",
    "category": "Support",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "ShieldCheck",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-scam-or-real-full-review",
    "title": "Fairplay Scam Or Real Full Review",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-security-account-safety-guide",
    "title": "Fairplay Security Account Safety Guide",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-ipl-2026-betting-guide-every-match",
    "title": "Fairplay Ipl 2026 Betting Guide Every Match",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-live-casino-works-fairplay-guide",
    "title": "How Live Casino Works Fairplay Guide",
    "category": "Strategy",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Zap",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-play-cricket-games-on-fairplay",
    "title": "How To Play Cricket Games On Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "why-users-prefer-fairplay-app-for-ipl-betting",
    "title": "Why Users Prefer Fairplay App For Ipl Betting",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "ipl-2026-betting-avoid-mistakes-fairplay",
    "title": "Ipl 2026 Betting Avoid Mistakes Fairplay",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "complete-fairplay-guide-2026-login-id-features-how-it-works",
    "title": "Complete Fairplay Guide 2026 Login Id Features How It Works",
    "category": "Support",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "ShieldCheck",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-contact-fairplay-whatsapp-for-ipl-id",
    "title": "How To Contact Fairplay Whatsapp For Ipl Id",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "ipl-2026-betting-tips-on-fairplay-smart-strategies",
    "title": "Ipl 2026 Betting Tips On Fairplay Smart Strategies",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-id-ipl-2026-betting-guide",
    "title": "Fairplay Id Ipl 2026 Betting Guide",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-ipl-match-day-strategy-to-win-more",
    "title": "Fairplay Ipl Match Day Strategy To Win More",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "ipl-2026-season-guide-fairplay-strategies",
    "title": "Ipl 2026 Season Guide Fairplay Strategies",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-match-tips-and-betting-prediction",
    "title": "Fairplay Match Tips And Betting Prediction",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "rr-vs-rcb-toss-match-prediction-15th-match-ipl-2026",
    "title": "Rr Vs Rcb Toss Match Prediction 15Th Match Ipl 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "mi-vs-pbks-toss-and-match-prediction-24th-match-ipl-2026",
    "title": "Mi Vs Pbks Toss And Match Prediction 24Th Match Ipl 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-win-live-bets-in-ipl-2026-on-fairplay",
    "title": "How To Win Live Bets In Ipl 2026 On Fairplay",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "rcb-vs-dc-dream11-team-prediction-match-26th-ipl-2026",
    "title": "Rcb Vs Dc Dream11 Team Prediction Match 26Th Ipl 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "understanding-fairplay-online-betting-id-guide",
    "title": "Understanding Fairplay Online Betting Id Guide",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-app-guide-simple-ipl-betting-anytime-anywhere",
    "title": "Fairplay App Guide Simple Ipl Betting Anytime Anywhere",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-fairplay-is-becoming-popular-during-ipl-season",
    "title": "How Fairplay Is Becoming Popular During Ipl Season",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-deposit-funds-on-fairplay-using-upi",
    "title": "How To Deposit Funds On Fairplay Using Upi",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-trends-in-ipl-2026",
    "title": "Fairplay Trends In Ipl 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "ipl-2026-orange-cap-and-purple-cap-race-fairplay",
    "title": "Ipl 2026 Orange Cap And Purple Cap Race Fairplay",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "analyze-ipl-teams-before-betting-on-fairplay",
    "title": "Analyze Ipl Teams Before Betting On Fairplay",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-apk-fast-stable-low-end-phones",
    "title": "Fairplay Apk Fast Stable Low End Phones",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-explains-popular-ipl-2026-betting-markets",
    "title": "Fairplay Explains Popular Ipl 2026 Betting Markets",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "rr-vs-gt-dream11-prediction-today-match-52st-ipl-2026",
    "title": "Rr Vs Gt Dream11 Prediction Today Match 52St Ipl 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "rcb-vs-mi-dream11-prediction-today-match54-ipl-2026",
    "title": "Rcb Vs Mi Dream11 Prediction Today Match54 Ipl 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "srh-vs-gt-dream11-prediction-today-match-56-ipl-2026",
    "title": "Srh Vs Gt Dream11 Prediction Today Match 56 Ipl 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "rcb-vs-kkr-ipl-2026-dream11-prediction-today-match57",
    "title": "Rcb Vs Kkr Ipl 2026 Dream11 Prediction Today Match57",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "mi-vs-pbks-dream11-prediction-today-match",
    "title": "Mi Vs Pbks Dream11 Prediction Today Match",
    "category": "Analysis",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "TrendingUp",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-id-not-working-quick-solutions-guide",
    "title": "Fairplay Id Not Working Quick Solutions Guide",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-growing-craze-for-cricket-platforms-ipl-2026",
    "title": "Fairplay Growing Craze For Cricket Platforms Ipl 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "why-ipl-fans-are-looking-for-fairplay-id",
    "title": "Why Ipl Fans Are Looking For Fairplay Id",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-2026-online-cricket-gaming-features",
    "title": "Fairplay 2026 Online Cricket Gaming Features",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "top-mobile-betting-features-on-fairplay",
    "title": "Top Mobile Betting Features On Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-login-not-working-fix-guide",
    "title": "Fairplay Login Not Working Fix Guide",
    "category": "Support",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "ShieldCheck",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-works-behind-the-scenes-during-ipl-2026",
    "title": "Fairplay Works Behind The Scenes During Ipl 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-top-features-and-benefits-of-ipl-betting-id-in-india",
    "title": "Fairplay Top Features And Benefits Of Ipl Betting Id In India",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "why-choose-fairplay-for-ipl-betting",
    "title": "Why Choose Fairplay For Ipl Betting",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-account-a-quick-guide-to-kyc",
    "title": "Fairplay Account A Quick Guide To Kyc",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-add-funds-to-your-fairplay-id",
    "title": "How To Add Funds To Your Fairplay Id",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-teen-patti-rules-and-gameplay-explained",
    "title": "Fairplay Teen Patti Rules And Gameplay Explained",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "india-top-mobile-betting-features-on-fairplay",
    "title": "India Top Mobile Betting Features On Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "why-ipl-cricket-fans-prefer-fairplay-for-mobile-cricket-updates",
    "title": "Why Ipl Cricket Fans Prefer Fairplay For Mobile Cricket Updates",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-rcb-continue-title-defense-in-ipl-2026-final",
    "title": "Fairplay Rcb Continue Title Defense In Ipl 2026 Final",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-fifa-world-cup-2026-football-fan-betting-guide",
    "title": "Fairplay Fifa World Cup 2026 Football Fan Betting Guide",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "enjoy-real-casino-gaming-on-fairplay",
    "title": "Enjoy Real Casino Gaming On Fairplay",
    "category": "Strategy",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Zap",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fifa-world-cup-2026-fairplay-betting-tips",
    "title": "Fifa World Cup 2026 Fairplay Betting Tips",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-casino-best-online-casino-sports-betting-platform",
    "title": "Fairplay Casino Best Online Casino Sports Betting Platform",
    "category": "Strategy",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Zap",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-fifa-world-cup-2026-complete-tournament-guide",
    "title": "Fairplay Fifa World Cup 2026 Complete Tournament Guide",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-card-game-zone-gaming-fan",
    "title": "Fairplay Card Game Zone Gaming Fan",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "womens-t20-world-cup-2026-betting-guide-fairplay-expert-analysis",
    "title": "Womens T20 World Cup 2026 Betting Guide Fairplay Expert Analysis",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-ball-by-ball-betting-works-on-fairplay",
    "title": "How Ball By Ball Betting Works On Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "online-casino-vs-sports-betting-guide",
    "title": "Online Casino Vs Sports Betting Guide",
    "category": "Strategy",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Zap",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fifa-world-cup-2026-fairplay-live-betting-id-guide",
    "title": "Fifa World Cup 2026 Fairplay Live Betting Id Guide",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fifa-world-cup-and-womens-t20-world-cup-2026-guide",
    "title": "Fifa World Cup And Womens T20 World Cup 2026 Guide",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "bet-on-ipl-t20-odi-and-test-cricket-with-fairplay",
    "title": "Bet On Ipl T20 Odi And Test Cricket With Fairplay",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-casino-slots-guide-rtp-free-spins-winning-tips-2026",
    "title": "Fairplay Casino Slots Guide Rtp Free Spins Winning Tips 2026",
    "category": "Strategy",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Zap",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-play-roulette-on-fairplay",
    "title": "How To Play Roulette On Fairplay",
    "category": "Strategy",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Zap",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-best-platforms-fifa-world-cup-2026-betting-in-india",
    "title": "Fairplay Best Platforms Fifa World Cup 2026 Betting In India",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-online-betting-id-and-services",
    "title": "Fairplay Online Betting Id And Services",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-app-indias-trusted-mobile-betting-platform",
    "title": "Fairplay App Indias Trusted Mobile Betting Platform",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-mobile-features-for-t20-cricket-betting",
    "title": "Fairplay Mobile Features For T20 Cricket Betting",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-helps-new-users-navigate-online-sports-platforms",
    "title": "Fairplay Helps New Users Navigate Online Sports Platforms",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-football-world-cup-odds-work-fairplay",
    "title": "How Football World Cup Odds Work Fairplay",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-id-fast-verified-id-for-online-sports-betting",
    "title": "Fairplay Id Fast Verified Id For Online Sports Betting",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "create-a-fairplay-account-for-sports-betting",
    "title": "Create A Fairplay Account For Sports Betting",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-cricket-betting-id-and-how-does-it-work",
    "title": "Fairplay Cricket Betting Id And How Does It Work",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-stop-cricket-betting-losses-using-smart-strategies",
    "title": "Fairplay Stop Cricket Betting Losses Using Smart Strategies",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-cricket-id-vs-traditional-online-account-access-difference",
    "title": "Fairplay Cricket Id Vs Traditional Online Account Access Difference",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-get-started-with-fairplay-apk-for-android",
    "title": "How To Get Started With Fairplay Apk For Android",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-explains-probability-in-sports-betting",
    "title": "Fairplay Explains Probability In Sports Betting",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-free-demo-id",
    "title": "Fairplay Free Demo Id",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-club-complete-features-benefits-security",
    "title": "Fairplay Club Complete Features Benefits Security",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-safe-security-features-explained",
    "title": "Fairplay Safe Security Features Explained",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-fifa-world-cup-knockout-betting-tips-live-strategies",
    "title": "Fairplay Fifa World Cup Knockout Betting Tips Live Strategies",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-play-dream11-fantasy-cricket-with-fairplay",
    "title": "How To Play Dream11 Fantasy Cricket With Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-best-dream11-fantasy-football-team-final",
    "title": "Fairplay Best Dream11 Fantasy Football Team Final",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "receive-fairplay-id-on-whatsapp",
    "title": "Receive Fairplay Id On Whatsapp",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-argentina-vs-spain-fifa-world-cup-final-2026",
    "title": "Fairplay Argentina Vs Spain Fifa World Cup Final 2026",
    "category": "Events",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Trophy",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-football-betting-id-features-benefits-how-it-works",
    "title": "Fairplay Football Betting Id Features Benefits How It Works",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-access-your-fairplay-account-from-any-device",
    "title": "How To Access Your Fairplay Account From Any Device",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-does-fairplay-login-work",
    "title": "How Does Fairplay Login Work",
    "category": "Support",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "ShieldCheck",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "how-to-download-latest-fairplay-app-apk",
    "title": "How To Download Latest Fairplay App Apk",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "free-casino-gaming-experience-fairplay",
    "title": "Free Casino Gaming Experience Fairplay",
    "category": "Strategy",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Zap",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "benefits-of-fairplay-sports-id-for-online",
    "title": "Benefits Of Fairplay Sports Id For Online",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-top-sports-tournaments-betting-opportunities",
    "title": "Fairplay Top Sports Tournaments Betting Opportunities",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "experience-safe-secure-horse-race-betting-with-fairplay",
    "title": "Experience Safe Secure Horse Race Betting With Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-safe-online-blackjack-casino-deposit-money-guide",
    "title": "Fairplay Safe Online Blackjack Casino Deposit Money Guide",
    "category": "Strategy",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Zap",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "top-cricket-tournaments-to-bet-on-using-fairplay-in-2026",
    "title": "Top Cricket Tournaments To Bet On Using Fairplay In 2026",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "deposit-and-withdrawal-limits-on-fairplay-explained",
    "title": "Deposit And Withdrawal Limits On Fairplay Explained",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-customer-care-guide-contact-support-for-login",
    "title": "Fairplay Customer Care Guide Contact Support For Login",
    "category": "Support",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "ShieldCheck",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "types-of-fairplay-cricket-betting-markets-explained",
    "title": "Types Of Fairplay Cricket Betting Markets Explained",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-free-demo-id-step-by-step-registration",
    "title": "Fairplay Free Demo Id Step By Step Registration",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-features-and-services-2026-explained",
    "title": "Fairplay Features And Services 2026 Explained",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "top-sports-to-bet-on-fairplay",
    "title": "Top Sports To Bet On Fairplay",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "reddy-anan-book-club-membership-features-benefits",
    "title": "Reddy Anan Book Club Membership Features Benefits",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-how-to-play-andar-bahar-guide",
    "title": "Fairplay How To Play Andar Bahar Guide",
    "category": "Guide",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Star",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-live-casino-features-and-services",
    "title": "Fairplay Live Casino: Premium Features & Services Guide 2026",
    "category": "Strategy",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Zap",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "slug": "fairplay-poker-guide-for-new-players",
    "title": "Fairplay poker guide",
    "category": "Strategy",
    "desc": "Fairplay guide in plain language: Fairplay ID, UPI wallet, and the exchange.",
    "date": "Jan 05, 2026",
    "icon": "Zap",
    "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  }
];

export const blogArticles = RAW_BLOG_ARTICLES.map((article) =>
  enrichBlogArticle({
    ...article,
    date: BLOG_POST_DATES[article.slug] ?? article.date,
  })
);

export const ICON_MAP: Record<string, any> = {
  TrendingUp,
  Trophy,
  Zap,
  Target,
  Crown,
  Star,
  ZapIcon,
  BookOpen,
  ShieldCheck,
  MessageCircle,
  Calendar,
  Clock
};
