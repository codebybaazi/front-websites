export type Author = {
  slug: string;
  name: string;
  role: string;
  category: string;
  expertise: string[];
  shortBio: string;
  longBio: string[];
  joined: string;
};

export const authors: Author[] = [
  {
    slug: "rohan-mehta",
    name: "Rohan Mehta",
    role: "Cricket Analyst",
    category: "Match Analysis & Predictions",
    expertise: ["Match Previews", "Player Form", "Pitch Reports"],
    shortBio:
      "Rohan has covered Indian domestic and international cricket for six years, focusing on match trends and player form.",
    longBio: [
      "Rohan started writing about cricket for a local sports blog in Pune in 2019, then moved into match-day reporting for regional outlets during IPL seasons and India's home tours.",
      "He watches most India matches ball by ball and keeps his own notes on team form and pitch behaviour across venues, which is where most of his match previews start.",
      "At Cricbet99 he writes match previews and post-match breakdowns, and tries to explain why a team is favoured rather than just stating the odds.",
      "Outside cricket writing, he plays club-level tennis on weekends.",
    ],
    joined: "2023",
  },
  {
    slug: "ananya-kapoor",
    name: "Ananya Kapoor",
    role: "Betting Strategy Writer",
    category: "Betting Strategy & Odds",
    expertise: ["Odds & Probability", "Market Analysis", "Betting Strategy"],
    shortBio: "Ananya writes about betting markets and odds, with a background in statistics.",
    longBio: [
      "Ananya studied statistics and spent two years at a data analytics firm building demand forecasting models before moving into sports betting content in 2021.",
      "She was drawn to it after noticing how much of the betting content aimed at Indian readers skipped the math behind odds and probability.",
      "At Cricbet99 she writes about how markets are priced, how to read odds movement, and where bettors tend to make avoidable mistakes.",
      "She isn't interested in tipster-style predictions and says so directly when readers ask for them.",
    ],
    joined: "2022",
  },
  {
    slug: "cricbet99-support-desk",
    name: "Cricbet99 Support Desk",
    role: "Support Team",
    category: "Platform & Account Guides",
    expertise: ["Account & KYC", "Deposits & Withdrawals", "App Support"],
    shortBio:
      "The Cricbet99 support desk writes practical, step-by-step guides based on the questions users ask most often.",
    longBio: [
      "The support desk handles account, ID, deposit, and withdrawal questions for Cricbet99 users every day over WhatsApp and live chat.",
      "The guides published under this byline come directly from those conversations, covering the login issues, KYC questions, and app problems that come up most.",
      "When something changes on the platform, whoever handled the related support tickets that week is usually the one who updates the guide.",
      "There's no single author here, because the material comes from the whole team rather than one writer's research.",
    ],
    joined: "2020",
  },
  {
    slug: "vikram-nair",
    name: "Vikram Nair",
    role: "Casino Games Writer",
    category: "Casino & Card Games",
    expertise: ["Casino Games", "Card Games", "Game Rules & Odds"],
    shortBio: "Vikram writes about casino games and table game rules, from teen patti to roulette.",
    longBio: [
      "Vikram worked as a card room dealer for four years before switching to writing full time.",
      "He learned the house-edge math behind most casino games from explaining it to players across the table, not just from reading about it.",
      "His guides focus on rules, odds, and where a game's variance actually comes from, rather than tips promising guaranteed wins.",
      "He still plays teen patti with friends most weekends, for low stakes.",
    ],
    joined: "2023",
  },
  {
    slug: "farhan-sheikh",
    name: "Farhan Sheikh",
    role: "Sports Betting Writer",
    category: "Other Sports Betting",
    expertise: ["Football Betting", "Tennis & Golf Markets", "Horse Racing"],
    shortBio:
      "Farhan covers football, tennis, golf, and horse racing betting markets outside cricket.",
    longBio: [
      "Farhan grew up following English football and started out writing match previews for a fan site before broadening into other sports.",
      "He has covered football transfer windows, Grand Slam tennis, and major golf tournaments for various outlets since 2018.",
      "At Cricbet99 he writes previews and market guides for the non-cricket sports on the platform, aimed at readers who mainly bet on cricket and want enough context to follow a football or tennis market without feeling lost.",
      "He follows the Premier League closely and admits his match predictions for his own team are the least reliable thing he writes.",
    ],
    joined: "2024",
  },
  {
    slug: "priya-iyer",
    name: "Priya Iyer",
    role: "Trust & Compliance Writer",
    category: "Responsible Gaming & Trust",
    expertise: ["Responsible Gaming", "Account Security", "Betting Tax & Compliance"],
    shortBio:
      "Priya writes about account security, responsible gambling, and how betting taxation works in India.",
    longBio: [
      "Priya worked in compliance at a fintech company for three years, reviewing KYC processes and the tax rules most people skip past.",
      "She moved into writing after answering the same TDS questions from friends every cricket season.",
      "Her articles cover account safety, spending limits, and the tax side of betting winnings, areas she thinks get ignored or oversimplified on most betting sites.",
      "She keeps a running list of reader questions and folds the recurring ones into whatever she writes next.",
    ],
    joined: "2022",
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
