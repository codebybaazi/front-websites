import type { PageContent } from "./pages";

export const GUIDES: Record<string, PageContent> = {
  "how-to-place-a-cricket-bet": {
    slug: "how-to-place-a-cricket-bet",
    title: "How to Place a Cricket Bet on Lotus365 — Step by Step",
    description:
      "A step-by-step walkthrough of placing your first cricket bet on Lotus365 — from picking a match to confirming the slip.",
    eyebrow: "Guide",
    hero: "Your first cricket bet, in five taps.",
    intro:
      "Placing a cricket bet on Lotus365 is fast, but there are a few small habits that separate a considered bet from a rushed one. Here's the whole flow.",
    sections: [
      {
        heading: "1. How do I pick the match?",
        body: "Open Sports → Cricket. Fixtures are grouped by league — pick IPL, international, or domestic T20.",
      },
      {
        heading: "2. How do I choose a market?",
        body: "Every market opens with a clear description before you commit to it.",
        points: ["Match-winner", "Top scorer", "Session runs", "Fancy"],
      },
      {
        heading: "3. How do I set my stake?",
        body: "Type an amount or tap a preset. The potential return shows live below.",
      },
      {
        heading: "4. How do I review the slip?",
        body: "Check odds, stake, and market before confirming. Odds may move between tap and confirm — Lotus365 always locks the price at confirmation.",
      },
      {
        heading: "5. How do I confirm the bet?",
        body: "Tap 'Place bet'. It's in — you'll see it under 'Open bets' immediately.",
      },
    ],
  },
  "how-to-place-a-live-bet": {
    slug: "how-to-place-a-live-bet",
    title: "How to Place a Live Bet on Lotus365 — In-Play Guide",
    description:
      "How to place a live in-play bet on Lotus365 — reading refreshed odds, timing your stake, and cashing out at the right moment.",
    eyebrow: "Guide",
    hero: "In-play bets, timed properly.",
    intro:
      "Live betting rewards preparation, not reflexes. Here's how to place in-play bets on Lotus365 without getting caught by moving odds.",
    sections: [
      {
        heading: "How do refreshed odds work?",
        body: "Live markets refresh delivery-by-delivery in cricket, second-by-second in football. Odds shown are the price at the moment of tap; final price is confirmed at submit.",
      },
      {
        heading: "When should I time my stake?",
        body: "The best moments are typically after a wicket (cricket) or a goal (football) when the market is still rebalancing — but discipline over speed always wins.",
      },
      {
        heading: "How does cash-out work?",
        body: "Most live markets support cash-out. Use it to lock in profit or cut losses before settlement.",
      },
    ],
  },
  "how-to-set-betting-limits": {
    slug: "how-to-set-betting-limits",
    title: "How to Set Betting Limits on Lotus365",
    description:
      "Set deposit, loss, and session limits on Lotus365 to keep your gaming in control. Configure caps from your profile in under a minute.",
    eyebrow: "Guide",
    hero: "Control that stays out of your way.",
    intro:
      "Setting a limit is a small, one-minute action that saves you far more than it costs. Every Lotus365 account supports deposit, loss, and session caps.",
    sections: [
      {
        heading: "How do I set a deposit limit?",
        body: "Cap daily, weekly, or monthly deposits from your profile → responsible gaming. Increases require 24 hours to apply.",
      },
      {
        heading: "How do I set a loss limit?",
        body: "Set a maximum net loss per period. Once hit, further stakes are blocked until the period rolls over.",
      },
      {
        heading: "What are session reminders?",
        body: "Enable a reality check to pause and reflect before continuing.",
        points: ["Every 30 minutes", "Every 60 minutes", "Every 120 minutes"],
      },
    ],
  },
  "how-to-bet-on-toss-market": {
    slug: "how-to-bet-on-toss-market",
    title: "How to Bet on the Toss Market — Lotus365 Cricket Guide",
    description:
      "How the cricket toss market works on Lotus365 — where the odds come from, when to bet, and common pitfalls.",
    eyebrow: "Guide",
    hero: "Toss market, understood properly.",
    intro:
      "The toss market is one of the most straightforward cricket markets, but also one of the most misunderstood. Here's how it really works on Lotus365.",
    sections: [
      {
        heading: "What am I actually betting on?",
        body: "Which captain wins the toss. Simple binary — but odds move sharply near the toss.",
      },
      {
        heading: "When should I bet?",
        body: "Best value usually appears 60-90 minutes before the toss, before crowd sentiment tilts the market.",
      },
      {
        heading: "What are the common pitfalls?",
        body: "Don't confuse toss winner with the choice to bat first. They're separate markets — check the label before you confirm.",
      },
    ],
  },
  "how-to-bet-on-session-betting": {
    slug: "how-to-bet-on-session-betting",
    title: "How to Bet on Session Betting — Lotus365 Cricket Guide",
    description:
      "A practical guide to session betting on Lotus365 — how sessions are defined, how odds move, and the discipline that keeps you profitable.",
    eyebrow: "Guide",
    hero: "Session betting, done properly.",
    intro:
      "Session betting is one of the most rewarding cricket markets, and one of the easiest to lose money on if you don't know what you're doing.",
    sections: [
      {
        heading: "What is a session?",
        body: "A session is a defined block of overs — usually 6, 10, or 15 in T20 formats. You bet on total runs scored in that block.",
      },
      {
        heading: "How do session odds move?",
        body: "Session odds move delivery-by-delivery. A dot ball drops the 'over' line; a boundary lifts it. Patience matters.",
      },
      {
        heading: "Why does discipline matter here?",
        body: "Cap session stakes at a fixed percentage of your bankroll. High variance demands strict rules.",
      },
    ],
  },
  "how-bookmakers-make-money": {
    slug: "how-bookmakers-make-money",
    title: "How Bookmakers Make Money — A Player's Guide",
    description:
      "Understand how bookmakers price odds, build margin, and stay profitable — with a clear read on where the edge is for a disciplined bettor.",
    eyebrow: "Guide",
    hero: "How the book actually earns.",
    intro:
      "Every bookmaker prices odds to earn a margin — the 'overround'. Understanding it is the first step to spotting value.",
    sections: [
      {
        heading: "What is the overround?",
        body: "If you add up the implied probabilities of every outcome, they exceed 100%. That excess is the book's margin.",
      },
      {
        heading: "How does line management work?",
        body: "Books move lines to balance action, not to predict outcomes. Sharp bettors profit from mispriced lines before they move.",
      },
      {
        heading: "Where is my edge as a bettor?",
        body: "Depth of knowledge on niche markets, discipline on bankroll, and patience to only bet at genuine value.",
        points: [
          "Depth of knowledge on niche markets",
          "Discipline on bankroll sizing",
          "Patience to only bet at genuine value",
        ],
      },
    ],
  },
};

export function getGuide(slug: string): PageContent | null {
  return GUIDES[slug.toLowerCase().replace(/\/$/, "")] ?? null;
}

export const ALL_GUIDE_SLUGS = Object.keys(GUIDES);
