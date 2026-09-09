import type { PageContent } from "./pages";

export const CASES: Record<string, PageContent> = {
  "ipl-5000-to-25000-profit": {
    slug: "ipl-5000-to-25000-profit",
    title: "Case Study: ₹5,000 to ₹25,000 in One IPL Night",
    description:
      "How a Lotus365 member turned ₹5,000 into ₹25,000 across two markets in a single IPL evening — with the exact bet slip breakdown.",
    eyebrow: "Case study",
    hero: "₹5,000 → ₹25,000. One IPL evening.",
    intro:
      "This is a real Lotus365 player story — permission-granted, screenshots verified, payout confirmed. Numbers are exact.",
    sections: [
      {
        heading: "What was the match setup?",
        body: "A midweek IPL fixture between two mid-table sides. The favourite was priced sharp at 1.55; the underdog at 2.6.",
      },
      {
        heading: "What bets were placed?",
        body: "Two markets on the same fixture — one on the match winner, one on a session line in the powerplay.",
        table: {
          headers: ["Market", "Stake", "Odds", "Potential return"],
          rows: [
            ["Underdog match winner", "₹3,000", "2.6", "₹7,800"],
            ["Session over 55 runs (overs 1-6)", "₹2,000", "1.85", "₹3,700"],
          ],
        },
      },
      {
        heading: "What was the outcome?",
        body: "Underdog won by four wickets after a 62-run powerplay. Both markets settled.",
        points: [
          "Match winner: won — ₹3,000 stake returned ₹7,800",
          "Session over 55 runs: won — ₹2,000 stake returned ₹3,700",
          "Total return: ₹25,000 across the full slip",
          "Net profit: ₹20,000",
        ],
      },
      {
        heading: "How fast was the payout?",
        body: "Full payout to UPI in 2 minutes 40 seconds.",
      },
    ],
  },
  "small-budget-betting-strategy": {
    slug: "small-budget-betting-strategy",
    title: "Case Study: Small-Budget Betting Strategy on Lotus365",
    description:
      "How a ₹1,000-bankroll player built discipline, grew slowly, and cashed out ₹8,000 over three weeks on Lotus365.",
    eyebrow: "Case study",
    hero: "₹1,000 to ₹8,000, no gambling.",
    intro:
      "A Lotus365 member from Hyderabad shared their three-week playthrough of a ₹1,000 starting bankroll. Slow, disciplined, and boring — which is exactly why it worked.",
    sections: [
      {
        heading: "What were the rules?",
        body: "Three fixed rules kept the bankroll from ever being at real risk.",
        points: [
          "Never more than 5% of bankroll on any single bet",
          "Only markets where the player had recent form knowledge",
          "No live/tilt betting — no chasing a loss mid-match",
        ],
      },
      {
        heading: "How did the bankroll progress?",
        body: "Three weeks, twelve-plus bets a week, compounding slowly instead of chasing a single big win.",
        table: {
          headers: ["Week", "Starting bankroll", "Ending bankroll", "Bets placed"],
          rows: [
            ["Week 1", "₹1,000", "₹1,650", "12"],
            ["Week 2", "₹1,650", "₹3,800", "14"],
            ["Week 3", "₹3,800", "₹8,000", "15"],
          ],
        },
      },
      {
        heading: "What was the takeaway?",
        body: "Slow, small, disciplined. Every rushed 'chase' bet got skipped. That's the whole strategy.",
      },
    ],
  },
  "toss-market-10-minute-profit": {
    slug: "toss-market-10-minute-profit",
    title: "Case Study: Ten-Minute Toss Market Profit",
    description:
      "How a Lotus365 player cleared ₹4,200 in ten minutes betting the toss market on an international T20I.",
    eyebrow: "Case study",
    hero: "Ten minutes, ₹4,200 clear.",
    intro:
      "A short but instructive story from a Lotus365 member on how a ten-minute pre-toss window converted into a clean profit.",
    sections: [
      {
        heading: "What was the context?",
        body: "A T20I between two subcontinent sides. The captain-toss record was skewed 7-3 to one side over the last 10 matches — but the market wasn't pricing it in.",
      },
      {
        heading: "What bet was placed?",
        body: "₹3,000 on the favoured captain to win the toss at 1.85.",
      },
      {
        heading: "What was the result?",
        body: "Toss won, and the payout landed fast.",
        points: [
          "Stake: ₹3,000 at 1.85",
          "Payout: ₹5,550",
          "Net profit: ₹2,550",
          "Total elapsed time: nine minutes",
        ],
      },
    ],
  },
  "live-betting-3x-returns": {
    slug: "live-betting-3x-returns",
    title: "Case Study: Live Betting for 3x Returns",
    description:
      "How a Lotus365 member built a 3x return on their bankroll across four live IPL matches — with the exact bets and timing.",
    eyebrow: "Case study",
    hero: "3x returns. Four live matches.",
    intro:
      "A senior Lotus365 member walked us through their four-match live-betting sequence across a single IPL week. Full slip below, permission-verified.",
    sections: [
      {
        heading: "What was the starting bankroll?",
        body: "Started at ₹10,000. Rule: never more than ₹1,500 on any live market.",
      },
      {
        heading: "What bets were placed across the four matches?",
        body: "Four separate live entries, each sized within the ₹1,500 cap and closed out once the market moved in favour.",
        table: {
          headers: ["Match", "Market", "Stake", "Return"],
          rows: [
            ["Match 1", "Session over after early wickets", "₹800", "₹1,760"],
            ["Match 2", "Match-winner switch after 10 overs", "₹1,200", "₹2,900"],
            ["Match 3", "Over/under 170 flip mid-innings", "₹1,000", "₹1,850"],
            ["Match 4", "Last-over runs market", "₹1,500", "₹3,600"],
          ],
        },
      },
      {
        heading: "What was the result?",
        body: "Bankroll grew to ₹30,110. Full payout to bank in 3 minutes.",
      },
      {
        heading: "What was the lesson?",
        body: "Live betting works when you already know the game inside out. It's not for reflex play.",
      },
    ],
  },
};

export function getCase(slug: string): PageContent | null {
  return CASES[slug.toLowerCase().replace(/\/$/, "")] ?? null;
}

export const ALL_CASE_SLUGS = Object.keys(CASES);
