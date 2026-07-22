import { createFileRoute } from "@tanstack/react-router";
import { AiOverview } from "@/components/AiOverview";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { Lotus365Content } from "@/components/Lotus365Content";
import { AboutSection } from "@/components/AboutSection";
import { HeroBanner } from "@/components/HeroBanner";
import { GameCategoriesMarquee } from "@/components/GameCategoriesMarquee";
import { ExchangeGamesMarquee } from "@/components/ExchangeGamesMarquee";
import { Reveal } from "@/components/Reveal";
import { LiveTicker, AuroraBackdrop } from "@/components/LandingFx";
import { whatsappUrl } from "@/data/site";


import {
  Shield,
  Zap,
  Trophy,
  Gamepad2,
  Headphones,
  Wallet,
  ChevronRight,
  Check,
  Crown,
  Sparkles,
  Gem,
  Star,
} from "lucide-react";
import vipLounge from "@/assets/vip-lounge.jpg";


const faqs = [
  { q: "How do I get a Lotus365 betting ID?", a: "Tap Sign Up or message us on WhatsApp — share your name and mobile, and your verified Lotus365 ID lands in under a minute." },
  { q: "Which sports and casino games can I bet on?", a: "Cricket (IPL, T20 World Cup, WPL, bilateral series), football, tennis, kabaddi and esports — plus live Teen Patti, Andar Bahar, Dragon Tiger, Baccarat and Roulette on the casino floor." },
  { q: "How fast are UPI withdrawals?", a: "Most cricket and casino payouts settle to UPI, IMPS or NEFT in under 3 minutes. VIP members are prioritised inside 60 seconds." },
  { q: "Is Lotus365 safe and legal to play?", a: "Yes — bank-grade 256-bit encryption, verified payment rails, KYC-backed wallets and 24/7 human support. Play responsibly, 18+." },
  { q: "What is the minimum deposit and withdrawal?", a: "Deposits start at just ₹100 via UPI, IMPS, NEFT and popular wallets. Minimum withdrawal is ₹500 — no hidden fees, no daily caps for verified members." },
  { q: "Do you offer a welcome bonus for new players?", a: "Yes — a 400% first-deposit bonus up to ₹30,000, plus weekly cashback, refer-and-earn credits and festival boosters. Auto-credited, no promo code required." },
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lotus365 — Official Login, App Download & Sign Up" },
      {
        name: "description",
        content:
          "Lotus365 official site — get your ID in 60 seconds. Cricket betting, live casino, app & APK download, instant UPI payouts and 24/7 WhatsApp support.",
      },
      { property: "og:title", content: "Lotus365 — Official Login, App Download & Sign Up" },
      {
        property: "og:description",
        content:
          "Lotus365 official — cricket, casino, live sports. Instant IDs, UPI payouts, VIP rewards, 24/7 concierge. India's most trusted since 2016.",
      },
      { property: "og:url", content: "https://lotus365id.com/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://lotus365id.com/og-lotus365.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://lotus365id.com/og-lotus365.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://lotus365id.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://lotus365id.com/#webpage",
          url: "https://lotus365id.com/",
          name: "Lotus365 — India's Most Trusted Online Gaming Platform",
          isPartOf: { "@id": "https://lotus365id.com/#website" },
          about: { "@id": "https://lotus365id.com/#organization" },
          inLanguage: "en-IN",
        }),
      },
    ],
  }),
  component: Landing,
});

function LotusMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.95 0.09 92)" />
          <stop offset="1" stopColor="oklch(0.76 0.16 82)" />
        </linearGradient>
      </defs>
      <g fill="url(#lg)" opacity="0.95">
        <path d="M32 8c3 8 3 16 0 24-3-8-3-16 0-24z" />
        <path d="M32 56c-3-8-3-16 0-24 3 8 3 16 0 24z" transform="rotate(180 32 44)" />
        <path d="M14 20c8 2 14 6 18 12-8-2-14-6-18-12z" />
        <path d="M50 20c-8 2-14 6-18 12 8-2 14-6 18-12z" />
        <path d="M14 44c8-2 14-6 18-12-8 2-14 6-18 12z" />
        <path d="M50 44c-8-2-14-6-18-12 8 2 14 6 18 12z" />
      </g>
      <circle cx="32" cy="32" r="3.5" fill="oklch(0.95 0.09 92)" />
    </svg>
  );
}

function Landing() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      {/* HERO */}
      <HeroBanner />

      <LiveTicker />

      {/* Editorial intro — keyword-rich H1 as a content section */}
      <section className="relative mx-auto max-w-7xl px-4 md:px-6 pt-8 md:pt-12 pb-6 md:pb-10 overflow-hidden">
        <AuroraBackdrop />
        <Reveal className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">


          {/* LEFT: eyebrow + H1 */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-primary/60" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/90">
                India's #1 Betting ID · Since 2016
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] sm:leading-[1.05] tracking-tight">
              Official <span className="gold-text">Lotus365</span> — Login, App
              Download &amp; Sign Up for{" "}
              <span className="italic font-normal text-foreground/90">
                Cricket Betting
              </span>{" "}
              &amp; <span className="gold-text">Live Casino</span>.
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-widest text-foreground/95">
              <span className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-primary" /> IPL &amp; T20
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-primary" /> Teen Patti
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-primary" /> Andar Bahar
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-primary" /> Exchange Sports
              </span>
            </div>
          </div>

          {/* RIGHT: prose + inline highlights */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-primary/20 relative">
            <span className="hidden lg:block absolute -left-px top-0 h-16 w-px bg-gradient-to-b from-primary to-transparent" />

            <p className="text-base md:text-lg text-foreground/95 leading-relaxed">
              Lotus365 is India's most trusted online betting ID for IPL &amp; T20
              cricket, live casino and exchange sports. Sign up in{" "}
              <span className="text-primary font-semibold">60 seconds</span> on
              WhatsApp, grab the official app or APK, and cash out via UPI in under{" "}
              <span className="text-primary font-semibold">3 minutes</span>, 24/7 —
              trusted by 2 million+ Indian players since 2016.
            </p>

            <dl className="mt-7 divide-y divide-primary/15 border-y border-primary/15">
              {[
                { k: "Sign-up time", v: "60 seconds on WhatsApp" },
                { k: "UPI payouts", v: "Under 3 minutes, 24/7" },
                { k: "Welcome bonus", v: "400% up to ₹30,000" },
                { k: "Trusted by", v: "2M+ Indian players" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-4 py-3"
                >
                  <dt className="text-[11px] uppercase tracking-widest text-foreground/85">
                    {row.k}
                  </dt>
                  <dd className="text-sm md:text-base font-semibold text-foreground text-right">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp cta-pulse px-5 py-3 rounded-lg font-bold uppercase tracking-wide text-xs inline-flex items-center gap-2 cursor-pointer"
              >
                Get your ID <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="/lotus365-app-download"
                className="px-5 py-3 rounded-lg text-primary font-bold uppercase tracking-wide text-xs inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                Download App →
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <GameCategoriesMarquee />

      {/* ABOUT */}
      <AboutSection />

      <ExchangeGamesMarquee />



      {/* Rephrased content ported from source, rebranded to Lotus365 */}
      <Lotus365Content />

      <AiOverview
        summary="Lotus365 is India's trusted online betting ID for cricket, live casino and exchange sports — sign up in 60 seconds on WhatsApp and cash out on UPI in under 3 minutes."
        points={[
          "60-second WhatsApp onboarding with human concierge",
          "IPL, T20 World Cup, WPL and 40+ fancy markets per match",
          "Live Teen Patti, Andar Bahar, Baccarat and Roulette",
          "UPI/IMPS/NEFT payouts, ₹100 min deposit, 24/7 support",
        ]}
        sources={[{ label: "Get your Lotus ID", to: "/lotus365-id" }, { label: "App download", to: "/lotus365-app-download" }, { label: "Compare", to: "/lotus365-vs-skyexchange" }]}
      />

      {/* WHY */}
      <section id="why" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Why Lotus365
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            Built for players who expect <span className="gold-text">more</span>.
          </h2>
          <p className="text-foreground/90 mt-5 leading-relaxed">
            Six reasons India's sharpest bettors choose Lotus365 — from 60-second IDs and 3-minute
            UPI payouts to a WhatsApp concierge that actually picks up. Every feature, live 24/7.
          </p>
        </div>

        {(() => {
          const features = [
            { n: "01", icon: Zap, t: "Instant Lotus ID", d: "From WhatsApp to your first cricket bet in under 60 seconds — no forms, no wait." },
            { n: "02", icon: Shield, t: "Secure exchange wallet", d: "256-bit encryption, KYC-verified UPI rails and audited settlement on every stake." },
            { n: "03", icon: Wallet, t: "3-minute UPI payouts", d: "Cricket winnings, casino cash-outs and exchange settlements land in minutes, 24/7." },
            { n: "04", icon: Trophy, t: "IPL & VIP rewards", d: "Weekly cashback up to 20%, IPL boosters and invitation-only high-roller tables." },
            { n: "05", icon: Headphones, t: "WhatsApp concierge", d: "Real humans on WhatsApp for IDs, deposits and withdrawal help — every hour, every day." },
            { n: "06", icon: Gamepad2, t: "Cricket + casino, curated", d: "Only sharp markets and top live-dealer tables. No dead odds, no filler slots." },
          ];
          return (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ n, icon: Icon, t, d }, i) => (
                <Reveal
                  key={t}
                  delay={i * 90}
                  className="glass-card hover-lift rounded-2xl p-7 relative overflow-hidden group hover:border-primary/40"
                >

                  {i === 0 && (
                    <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/90 text-white shadow-lg shadow-red-900/40">
                      Popular
                    </span>
                  )}
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/70 mb-3">
                    Feature {n}
                  </div>
                  <div className="font-display text-2xl mb-2 group-hover:gold-text transition-colors flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary shrink-0" />
                    {t}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed mb-5">{d}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-primary/15">
                    <span className="text-[11px] uppercase tracking-wider text-foreground/95">
                      Included
                    </span>
                    <span className="ml-auto text-xs text-primary font-semibold">Learn more →</span>
                  </div>
                </Reveal>

              ))}
            </div>
          );
        })()}
      </section>


      {/* VIP */}
      <section id="vip" className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 400px at 50% 0%, oklch(0.82 0.15 88 / 0.12), transparent 60%), linear-gradient(180deg, rgb(13 66 55) 0%, rgb(17 84 70) 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent -z-10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent -z-10" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: content */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/90 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                VIP Program
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-5">
                An <span className="gold-text">elevated</span> way to play.
              </h2>
              <p className="text-white/75 leading-relaxed mb-8 max-w-xl">
                Lotus365 VIP is an invitation-only tier for India's most active cricket, casino and
                exchange players. Personal managers, higher table limits, private tournaments and
                priority payouts — a private lounge, not a queue.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Crown, t: "Dedicated relationship manager", d: "1:1 WhatsApp line, 24/7." },
                  { icon: Sparkles, t: "Weekly cashback up to 20%", d: "Auto-credited every Monday." },
                  { icon: Gem, t: "Invitation-only tournaments", d: "IPL, festival and high-roller." },
                  { icon: Zap, t: "Priority withdrawals < 60s", d: "Front of the UPI queue." },
                  { icon: Trophy, t: "Higher table & session limits", d: "Cricket, casino and exchange." },
                  { icon: Star, t: "Birthday & milestone gifts", d: "Bespoke bonuses, real gifts." },
                ].map(({ icon: Icon, t, d }) => (
                  <div
                    key={t}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="h-4 w-4 text-primary shrink-0" />
                      <div className="text-sm font-semibold text-white">{t}</div>
                    </div>
                    <p className="text-xs text-white/65 leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-8 mb-8">
                {[
                  { k: "20%", v: "Weekly cashback" },
                  { k: "<60s", v: "VIP payouts" },
                  { k: "3", v: "Elite tiers" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="font-display text-3xl gold-text">{s.k}</div>
                    <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{s.v}</div>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp px-7 py-3.5 rounded-full inline-flex items-center gap-2 cursor-pointer"
              >
                Apply for VIP <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* RIGHT: image */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] opacity-40 blur-2xl -z-10"
                   style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.82 0.15 88 / 0.5), transparent 70%)" }} />
              <div className="rounded-3xl overflow-hidden gold-border shadow-2xl">
                <img
                  src={vipLounge}
                  alt="Lotus365 VIP Lounge with premium cards, gold chips and lotus emblem"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-primary/30 bg-black/60 backdrop-blur px-4 py-3 flex items-center gap-3">
                <Crown className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-primary/80">Member since</div>
                  <div className="text-sm text-white font-semibold">2016 · Gold Tier</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ + CTA */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Questions & Next Steps
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            Everything you need before your <span className="gold-text">first bet</span>.
          </h2>
          <p className="text-foreground/90 mt-5 leading-relaxed">
            Straight answers on IDs, payouts, security and support — then a one-tap path to your
            seat at the gold table. Over two million Indian players have already made the move.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="glass-card rounded-2xl p-7 relative overflow-hidden group hover:border-primary/40 transition-colors"
            >
              {i === 0 && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/90 text-white shadow-lg shadow-red-900/40">
                  Popular
                </span>
              )}
              <summary className="cursor-pointer list-none">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/70 mb-3">
                  Question {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-xl mb-2 group-hover:gold-text transition-colors flex items-start gap-2 pr-6">
                  <Sparkles className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>{f.q}</span>
                </div>
              </summary>
              <p className="text-sm text-foreground/90 leading-relaxed mt-3 mb-5">{f.a}</p>
              <div className="flex items-center gap-2 pt-4 border-t border-primary/15">
                <span className="text-[11px] uppercase tracking-wider text-foreground/95">
                  Verified answer
                </span>
                <span className="ml-auto text-xs text-primary font-semibold">Chat on WhatsApp →</span>
              </div>
            </details>
          ))}

        </div>

        {/* Your Next Move — sleek full-width band under the 6 FAQs */}
        <div className="mt-10 relative overflow-hidden rounded-2xl gold-border">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(600px 200px at 15% 50%, oklch(0.82 0.15 88 / 0.25), transparent 60%), linear-gradient(120deg, oklch(0.32 0.08 165) 0%, oklch(0.22 0.06 165) 100%)",
            }}
          />
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-6 md:px-10 md:py-7">
            <div className="flex items-center gap-4 min-w-0">
              <LotusMark className="h-10 w-10 shrink-0" />
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/90 mb-1">
                  Your Next Move
                </div>
                <div className="font-display text-xl md:text-2xl text-white leading-snug">
                  Your seat at the <span className="gold-text">gold table</span> is waiting.
                </div>
              </div>
            </div>
            <div className="hidden md:block h-12 w-px bg-white/15" />
            <p className="text-sm text-white/75 leading-relaxed md:flex-1">
              Join 2M+ Indian players. Lotus ID in 60 seconds, first deposit bonus auto-credited.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 text-sm cursor-pointer shrink-0"
            >
              Create your account <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>



      <QuickLinks currentPath="/" heading="Jump into the Lotus365 hub" />
      <SiteFooter />


    </div>
  );
}
