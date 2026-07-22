import { siteName, whatsappUrl } from "@/data/site";
import {
  Instagram,
  Send,
  MessageCircle,
  Youtube,
  Twitter,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import lotusLogo from "@/assets/lotus365-main-logo.png";
import { PageFaq } from "@/components/PageFaq";


const socials = [
  { label: "WhatsApp", href: whatsappUrl, Icon: MessageCircle },
  { label: "Telegram", href: "https://t.me/", Icon: Send },
  { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/", Icon: Youtube },
  { label: "Twitter", href: "https://twitter.com/", Icon: Twitter },
];

const cols: [string, [string, string, boolean?][]][] = [
  [
    "Bet & Play",
    [
      ["IPL 2026 Betting", "/ipl-betting"],
      ["2026–27 Match Schedule", "/schedule"],
      ["All Matches", "/matches"],
      ["Cricket Exchange", "/lotus365-exchange"],
      ["Live Casino", "/casino"],
      ["Teen Patti & Andar Bahar", "/indian-card-games"],
      ["Football & Tennis", "/football-betting"],
    ],
  ],
  [
    "Your Lotus ID",
    [
      ["Get Instant ID", "/lotus365-id"],
      ["VIP Program", "#vip"],
      ["Bonuses & Cashback", "/lotus365-book-bonus"],
      ["Big Win Stories", "/lotus365-big-win-stories"],
      ["Lotus365 App", "/lotus365-book-app"],
      ["Lotus365 vs Skyexchange", "/lotus365-vs-skyexchange"],
      ["Blog & Tips", "/blog"],
    ],
  ],
  [
    "Wallet & Support",
    [
      ["WhatsApp Concierge", whatsappUrl, true],
      ["UPI Deposits", "/how-to-deposit"],
      ["Instant Withdrawals", "/how-to-withdraw-safely"],
      ["KYC & Security", "/kyc-verification-policy"],
      ["Responsible Gaming", "/responsible-gaming"],
      ["All Links", "/all-links"],
    ],
  ],

];

const marqueeTags = [
  "Instant UPI Payouts",
  "Cricket · Casino · Exchange",
  "IPL 2026 Live Odds",
  "24/7 WhatsApp Concierge",
  "Verified Lotus365 IDs",
  "Play Responsibly · 18+",
];

export function SiteFooter() {
  return (
    <>
      <PageFaq />
      <footer className="relative mt-24 overflow-hidden">

      {/* Hairline top */}
      <div
        aria-hidden
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.82 0.15 88 / 0.55), transparent)",
        }}
      />

      {/* Giant outlined wordmark */}
      <div className="relative pt-16 pb-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <svg
            viewBox="0 0 900 180"
            className="w-full h-auto select-none"
            aria-hidden
          >
            <defs>
              <linearGradient id="lotusStroke" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="oklch(0.82 0.15 88 / 0.25)" />
                <stop offset="50%" stopColor="oklch(0.9 0.11 92 / 0.9)" />
                <stop offset="100%" stopColor="oklch(0.82 0.15 88 / 0.25)" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="'Playfair Display', serif"
              fontSize="180"
              fontWeight="700"
              letterSpacing="-6"
              fill="transparent"
              stroke="url(#lotusStroke)"
              strokeWidth="1.5"
            >
              LOTUS 365
            </text>
          </svg>
          <div className="mt-4 flex items-center gap-4 justify-center text-[10px] font-mono uppercase tracking-[0.35em] text-primary/70">
            <span className="h-px w-16" style={{ background: "oklch(0.82 0.15 88 / 0.4)" }} />
            Est. 2016 — Made for Players
            <span className="h-px w-16" style={{ background: "oklch(0.82 0.15 88 / 0.4)" }} />
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand block */}
          <div className="md:col-span-5">
            <img src={lotusLogo} alt="Lotus365 — India's Most Trusted Online Gaming Platform" className="h-10 w-auto" />
            <p className="mt-5 text-sm text-foreground/90 leading-relaxed max-w-md">
              India's premium online betting destination — cricket exchange, live
              casino, IPL markets and Teen Patti tables with instant UPI payouts
              and a 24/7 WhatsApp concierge.
            </p>

            {/* CTA card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp mt-8 inline-flex items-center justify-between gap-6 rounded-2xl pl-6 pr-3 py-3 group transition-all hover:shadow-[0_20px_50px_-15px_oklch(0.82_0.15_88/0.5)]"
              style={{
                border: "1px solid oklch(0.82 0.15 88 / 0.4)",
                background:
                  "linear-gradient(135deg, oklch(0.82 0.15 88 / 0.12), transparent)",
              }}
            >
              <span>
                <span className="block font-display text-lg leading-tight">
                  Claim your <span className="text-primary">gold seat</span>
                </span>
                <span className="block text-xs text-foreground/95 mt-0.5">
                  Welcome bonus up to ₹25,000 — instant.
                </span>
              </span>
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-emerald-deep"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.9 0.11 92), oklch(0.78 0.16 82))",
                }}
              >
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>

          {/* Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map(([title, links]) => (
              <div key={title}>
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="inline-block h-1 w-1 rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary/90">
                    {title}
                  </div>
                </div>
                <ul className="space-y-3">
                  {links.map(([label, href, external]) => (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="group inline-flex items-baseline gap-2 text-sm text-foreground/90 hover:text-primary transition-colors"
                      >
                        <span
                          className="h-px w-0 group-hover:w-4 transition-all duration-300 self-center"
                          style={{ background: "var(--gold)" }}
                        />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Meta strip */}
        <div
          className="mt-14 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-foreground/95"
          style={{ borderTop: "1px solid oklch(0.82 0.15 88 / 0.2)" }}
        >
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Regulated & audited — play responsibly, 18+ only.
          </div>
          <div className="flex md:justify-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-primary hover:text-emerald-deep hover:bg-primary transition-colors"
                style={{ border: "1px solid oklch(0.82 0.15 88 / 0.35)" }}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="md:text-right">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </div>
        </div>
      </div>

      {/* Marquee tape */}
      <div
        className="border-y overflow-hidden"
        style={{
          borderColor: "oklch(0.82 0.15 88 / 0.25)",
          background: "rgb(13 66 55)",
        }}
      >
        <div className="flex gap-10 py-3 whitespace-nowrap animate-[l365-marquee_35s_linear_infinite]">
          {Array.from({ length: 3 }).flatMap((_, i) =>
            marqueeTags.map((t) => (
              <span
                key={`${i}-${t}`}
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-foreground/90"
              >
                <span
                  className="inline-block h-1 w-1 rounded-full"
                  style={{ background: "var(--gold)" }}
                />
                {t}
              </span>
            ))
          )}
        </div>
      </div>

      <style>{`
        @keyframes l365-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </footer>
    </>
  );
}

