import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { createHash } from "crypto";
import { siteUrl, siteName } from "@/data/site";

type Skill = {
  name: string;
  description: string;
  path: string;
  content: string;
  tags: string[];
};

const skills: Skill[] = [
  {
    name: "lotus365-overview",
    description: `Comprehensive overview of ${siteName} — India's premium cricket ID and online gaming platform. Covers brand, trust signals, ambassador partnerships, licensed operations, and the full range of sports, exchange, and casino services offered.`,
    path: "/about-us",
    content: `# ${siteName} Overview\n\n${siteName} is India's premium licensed cricket ID and online gaming platform offering sports exchange, live casino, Indian card games, instant deposits/withdrawals, welcome bonuses up to ₹25,000, and 24/7 concierge support via WhatsApp and Telegram.`,
    tags: ["brand", "overview", "trust", "about"],
  },
  {
    name: "lotus365-get-id",
    description: "Step-by-step guide to creating a Lotus365 cricket ID in under 2 minutes via WhatsApp — including required details, instant activation, first deposit, and claiming the ₹25,000 welcome bonus.",
    path: "/lotus365-id",
    content: "# Get Lotus365 ID\n\n1. Message our WhatsApp concierge.\n2. Share name and mobile number.\n3. Receive ID + password within 2 minutes.\n4. Make first deposit via UPI/IMPS.\n5. Auto-credit ₹25,000 welcome bonus.",
    tags: ["onboarding", "signup", "whatsapp", "bonus"],
  },
  {
    name: "lotus365-deposit-withdraw",
    description: "Complete reference for Lotus365 wallet operations: supported deposit methods (UPI, IMPS, NEFT, RTGS, PhonePe, GPay, Paytm), minimum/maximum limits, withdrawal processing times, KYC requirements, and troubleshooting failed transactions.",
    path: "/how-to-deposit",
    content: "# Deposits & Withdrawals\n\nDeposits: UPI, IMPS, NEFT, RTGS, PhonePe, GPay, Paytm — instant credit. Min ₹100. Withdrawals: 24/7, processed within minutes to verified bank accounts. KYC required for withdrawals above ₹10,000.",
    tags: ["wallet", "deposit", "withdrawal", "upi", "payments"],
  },
  {
    name: "lotus365-support",
    description: "How to reach Lotus365's 24/7 concierge support: WhatsApp and Telegram channels, expected response times, and the categories of issues handled — login, deposits, withdrawals, bonuses, KYC, and account recovery.",
    path: "/support",
    content: "# Lotus365 Support\n\nWhatsApp: instant response 24/7. Telegram channel for updates and support. Email backup for KYC docs. Handles ID creation, login, deposits, withdrawals, bonuses, and account recovery.",
    tags: ["support", "help", "whatsapp", "telegram", "contact"],
  },
  {
    name: "lotus365-sports-betting",
    description: "Guide to sports betting markets on Lotus365 — cricket (IPL, WPL, T20 World Cup, international series), football, tennis, basketball, kabaddi, horse racing, and esports — with exchange odds, in-play markets, and cash-out options.",
    path: "/lotus365-betting",
    content: "# Sports Betting\n\nMarkets: cricket (IPL, WPL, T20 WC, bilateral series), football, tennis, basketball, kabaddi, horse racing, esports. Features: exchange odds, in-play betting, cash-out, best-odds guarantee.",
    tags: ["sports", "cricket", "ipl", "exchange", "betting"],
  },
  {
    name: "lotus365-casino",
    description: "Overview of Lotus365 live casino and Indian card games: Teen Patti, Andar Bahar, Roulette, Blackjack, Dragon Tiger, and slots — with live dealers, HD streaming, and low table minimums.",
    path: "/casino",
    content: "# Live Casino\n\nTeen Patti, Andar Bahar, Roulette, Blackjack, Dragon Tiger, Baccarat, and 500+ slots. Live HD-streamed dealers 24/7. Table minimums from ₹50.",
    tags: ["casino", "teen-patti", "andar-bahar", "live-dealer", "slots"],
  },
  {
    name: "lotus365-bonuses",
    description: "Complete bonus catalogue on Lotus365 — ₹25,000 welcome bonus, weekly cashback, referral rewards, loyalty tiers, and cricket-tournament promotions. Includes wagering requirements and eligibility rules.",
    path: "/lotus365-book-bonus",
    content: "# Bonuses\n\n₹25,000 welcome bonus on first deposit. Weekly cashback up to 5%. Refer-a-friend ₹500. Loyalty tiers with rakeback. Tournament-specific promos (IPL, WPL, T20 WC).",
    tags: ["bonus", "welcome", "cashback", "referral", "loyalty"],
  },
  {
    name: "lotus365-safety-legal",
    description: "Trust, safety, and legal information for Lotus365 — licensing jurisdiction, RNG certification, encryption standards, KYC/AML compliance, responsible-gaming tools, and applicability of Indian state gaming laws.",
    path: "/is-lotus365-safe",
    content: "# Safety & Legality\n\nLicensed and regulated internationally. 256-bit SSL encryption. RNG-certified games. Full KYC/AML. Responsible-gaming limits and self-exclusion available. Legal in states permitting skill-based gaming.",
    tags: ["safety", "legal", "kyc", "license", "responsible-gaming"],
  },
];

export const Route = createFileRoute("/.well-known/agent-skills/index.json")({
  server: {
    handlers: {
      GET: async () => {
        const body = {
          $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
          version: "0.2.0",
          publisher: {
            name: siteName,
            url: siteUrl,
            contact: `${siteUrl}/contact-us`,
            documentation: `${siteUrl}/faq`,
          },
          updated: "2026-07-22",
          languages: ["en", "hi"],
          skills: skills.map((s) => ({
            name: s.name,
            type: "skill-md" as const,
            description: s.description,
            url: `${siteUrl}/.well-known/agent-skills/${s.name}/SKILL.md`,
            digest: `sha256:${createHash("sha256").update(s.content, "utf8").digest("hex")}`,
            tags: s.tags,
            source: `${siteUrl}${s.path}`,
          })),
        };
        return new Response(JSON.stringify(body, null, 2), {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

export const skillContents: Record<string, string> = Object.fromEntries(
  skills.map((s) => [s.name, s.content]),
);
