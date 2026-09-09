export type Author = {
  slug: string;
  name: string;
  role: string;
  category: string;
  bio: string;
  background: string;
  personal: string;
};

export const authors: Author[] = [
  {
    slug: "priya-m",
    name: "Priya M.",
    role: "Payments & UPI Lead",
    category: "Deposits & UPI",
    bio: "Priya has spent years on the Mahadev Book payments desk, working directly with UPI rails, deposit limits and the day to day fixes players actually run into. She writes the Deposits & UPI guides so the steps match exactly what support sees on real accounts, not generic payment advice.",
    background: "Before she started writing the deposits guides, Priya spent two years answering payment tickets on the support line, mostly cases where a UPI transfer goes through on the player's end but never shows up on the account. That's largely what shaped how she explains things now. She would rather walk through why a deposit gets stuck than repeat the standard advice to just wait it out.",
    personal: "When she's not troubleshooting failed transfers, Priya follows the IPL auction closely and has strong, mostly wrong opinions about which franchise overspends every year.",
  },
  {
    slug: "arjun-k",
    name: "Arjun K.",
    role: "Football Markets Analyst",
    category: "Football",
    bio: "Arjun covers football markets on Mahadev Book, including league odds, in-play movement and how European and domestic competitions price up for Indian bettors. His guides are built from watching the same markets he writes about, match after match.",
    background: "Arjun grew up watching the Premier League on a delayed satellite feed and started tracking odds movement as a teenager, long before it became his job. He moved into match analysis after a few years of freelance writing for smaller sports blogs, and the football desk at Mahadev Book is where that habit finally paid rent.",
    personal: "He still can't watch a match without a second screen open to check live prices, a habit his friends find mildly annoying.",
  },
  {
    slug: "neha-t",
    name: "Neha T.",
    role: "Player Onboarding Specialist",
    category: "Getting Started",
    bio: "Neha handles first time player onboarding on the WhatsApp support desk, which means she's answered nearly every question a new Mahadev Book user has on day one. The Getting Started guides come straight out of those real conversations.",
    background: "Neha joined the WhatsApp support team a few years back and ended up specializing in first time users almost by accident. She was simply good at explaining things calmly to people who had never used a betting platform before, and that's still most of her day: answering the same handful of questions, patiently, for someone new every time.",
    personal: "Off the clock, she's usually the one explaining OTT show plots to her family a full season behind everyone else.",
  },
  {
    slug: "vikram-s",
    name: "Vikram S.",
    role: "Senior Content Strategist",
    category: "Guides",
    bio: "Vikram oversees the general Guides section, translating how Mahadev Book actually works into plain, practical walkthroughs for Indian players. No filler, no theory that doesn't map to a real step on the platform.",
    background: "Vikram has been writing about Indian betting platforms for a while now, first as a freelancer covering the space broadly, then full time once he joined Mahadev Book to build out the general guides section. He edits most of what the other writers on this list put out before it's published, which is part of why the Guides section reads more consistently than most competitors' blogs.",
    personal: "He keeps a running list of questions players ask on WhatsApp that don't have a guide yet, and slowly works through it.",
  },
  {
    slug: "rahul-d",
    name: "Rahul D.",
    role: "IPL & Cricket Markets Analyst",
    category: "IPL",
    bio: "Rahul focuses on IPL and cricket exchange markets year round, tracking how odds move across an over, a session and a full match. His IPL guides are written for bettors who want to understand the market, not just chase a tip.",
    background: "Rahul's interest in cricket odds started with fantasy leagues in college, then turned into actual market analysis once he realized he was better at reading price movement than picking winners outright. He's covered every IPL season since joining the desk and keeps notes on how markets moved during past tournaments to spot patterns before they repeat.",
    personal: "He supports Chennai Super Kings, which he says has taught him more about variance than any market ever has.",
  },
  {
    slug: "sanjay-r",
    name: "Sanjay R.",
    role: "KYC & Account Security Lead",
    category: "KYC & Security",
    bio: "Sanjay leads KYC and account security processes for Mahadev Book, including verification, recovery and fraud prevention steps. His guides exist to help players protect their own accounts, written from the same checks the security team runs every day.",
    background: "Sanjay came from a background in account verification at a payments company before moving over to Mahadev Book's security team. He handles the escalations that come in when something looks off on an account, and that's usually where his guide topics start.",
    personal: "He's the person in his friend group who always asks whether a link looks legitimate before anyone clicks it.",
  },
  {
    slug: "meera-j",
    name: "Meera J.",
    role: "Live Casino Games Specialist",
    category: "Live Casino",
    bio: "Meera covers the live casino floor, including table games, card variants and how the live dealer experience actually runs on Mahadev Book. She writes from hands on familiarity with the games themselves, not marketing copy about them.",
    background: "Meera worked as a floor coordinator for live dealer tables before moving into writing about them, so she knows the mechanics behind a live casino session from the operations side, not just as a player. That's usually the detail missing from most casino guides online, and it's what she tries to fix.",
    personal: "She's oddly competitive about Teen Patti, even when she's just watching someone else play.",
  },
  {
    slug: "aditya-n",
    name: "Aditya N.",
    role: "Match Prediction Analyst",
    category: "Match Predictions",
    bio: "Aditya works the daily prediction desk, blending team form, conditions and live exchange odds into match by match reads. Every prediction guide he writes carries the same disclaimer he gives players directly: analysis, never a guarantee.",
    background: "Aditya studied statistics before drifting into sports analysis, first for a fantasy sports app and later for the prediction desk at Mahadev Book. He builds his match reads from form, conditions and live odds movement, and is quick to say that none of it removes the uncertainty of an actual match.",
    personal: "He keeps a spreadsheet of his own predictions purely to see how often he's wrong, which he claims is more often than players probably assume.",
  },
  {
    slug: "kavya-b",
    name: "Kavya B.",
    role: "Mobile & App Support Lead",
    category: "Mobile & App",
    bio: "Kavya handles mobile and app support tickets, from install issues to login troubleshooting across Android devices. The Mobile & App guides are built directly from the fixes she gives players on WhatsApp every day.",
    background: "Kavya handles the mobile support queue, which means she's seen more or less every install issue, login error and app crash a Mahadev Book player has run into on Android. Her guides tend to start from a specific ticket she's answered more than once.",
    personal: "She switches phones often enough that her contacts have stopped being surprised when she asks to borrow one to test something.",
  },
  {
    slug: "rohan-v",
    name: "Rohan V.",
    role: "T20 & International Cricket Analyst",
    category: "T20 & World Cup",
    bio: "Rohan tracks T20 leagues and international tournaments, from squad news to venue trends across major cricket calendars. His T20 & World Cup guides are written for players following fast moving markets across a packed schedule.",
    background: "Rohan covers T20 leagues and international tournaments, tracking squad news and venue trends across a cricket calendar that barely has a gap in it anymore. He joined Mahadev Book after a stint covering domestic cricket for a smaller outlet, and still follows the domestic tournaments most casual fans skip.",
    personal: "He can name the toss winning captain's decision for most major matches from the last two years, which is a strange thing to be good at.",
  },
  {
    slug: "divya-p",
    name: "Divya P.",
    role: "Withdrawals & Payouts Specialist",
    category: "Withdrawals",
    bio: "Divya works the withdrawals desk, handling payout timing, limits and the occasional delay players ask about. Her guides explain withdrawals the way support actually resolves them, not how a generic FAQ page describes them.",
    background: "Divya works the withdrawals desk, where most of her time goes into explaining payout timing and the occasional delay when a bank flags a transaction for review. She moved into writing guides after noticing the same three or four questions kept coming up on support, over and over, in almost the same words.",
    personal: "She's become the go to person among her friends for anything to do with UPI limits, whether it's about betting or not.",
  },
];

export function getAuthorForCategory(category: string): Author | undefined {
  return authors.find((a) => a.category === category);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
