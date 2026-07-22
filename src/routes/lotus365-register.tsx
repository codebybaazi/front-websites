import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { AiOverview } from "@/components/AiOverview";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { whatsappUrl } from "@/data/site";
import {
  UserPlus,
  ShieldCheck,
  Zap,
  Gift,
  Wallet,
  KeyRound,
  MessageCircle,
  BadgeCheck,
} from "lucide-react";

const URL = "https://lotus365id.com/lotus365-register";

const STEPS = [
  { t: "Message our concierge on WhatsApp", d: "Tap the WhatsApp button and say 'New Lotus365 ID'. Our verified agent replies within 60 seconds — no forms, no email spam." },
  { t: "Share basic details", d: "Send your name, mobile number and preferred currency (INR). KYC is only requested at your first withdrawal above ₹50,000 — signup itself needs nothing." },
  { t: "Receive your Lotus365 ID & password", d: "You get a private Lotus365 login (username + one-time password) on WhatsApp within 2–3 minutes. Change the password on first login." },
  { t: "Fund the wallet & claim 400% bonus", d: "Deposit any amount over ₹100 via UPI (GPay, PhonePe, Paytm) and your welcome bonus is credited instantly. Start playing cricket, casino or live sports." },
];

const BENEFITS = [
  { Icon: Gift, t: "400% welcome bonus", d: "Deposit ₹1,000, play with ₹5,000. India's biggest verified signup bonus, credited within 60 seconds of your first UPI deposit." },
  { Icon: Zap, t: "Register in under 3 minutes", d: "No email verification, no OTP loops. Concierge signup on WhatsApp is the fastest way to create a Lotus365 account." },
  { Icon: ShieldCheck, t: "Private & secure", d: "Your Lotus365 ID is not visible on any public form. Bank-grade encryption, 2FA login and session timers protect every account." },
  { Icon: Wallet, t: "Instant UPI in / out", d: "Deposits land in under 30 seconds, withdrawals to your bank in under 3 minutes — 24/7, including festivals and weekends." },
  { Icon: BadgeCheck, t: "Trusted since 2016", d: "Over 2 million verified Indian accounts, licensed operator, 4.8★ across 18,000+ reviews. Signup with confidence." },
  { Icon: KeyRound, t: "One ID for everything", d: "The same Lotus365 login works across cricket exchange, live casino, Teen Patti, sports book and the mobile app." },
];

const FAQ = [
  { q: "How do I register on Lotus365?", a: "The fastest way to create a Lotus365 account is via our WhatsApp concierge. Tap the WhatsApp button on this page, message 'New ID', share your name and mobile number, and you'll receive your Lotus365 login within 2–3 minutes. There is no public signup form — this is by design, for account security." },
  { q: "Is Lotus365 registration free?", a: "Yes — creating a Lotus365 ID is 100% free. You only fund your wallet when you're ready to play. No signup fee, no subscription, no hidden charge." },
  { q: "Do I need KYC to register?", a: "No — signup only needs your name and mobile number. KYC (Aadhaar / PAN) is requested only at your first withdrawal above ₹50,000, in line with Indian AML rules." },
  { q: "What documents do I need to sign up?", a: "None for signup. For higher-tier withdrawals, keep an Aadhaar or PAN card and a bank passbook / cancelled cheque ready — the concierge collects these securely over WhatsApp when needed." },
  { q: "How long does Lotus365 registration take?", a: "Typically 2–3 minutes end-to-end. Message the concierge, share your name and mobile, receive your Lotus365 ID and one-time password on WhatsApp, log in, and change the password." },
  { q: "Can I have multiple Lotus365 accounts?", a: "No — one Lotus365 ID per person, per mobile number. Duplicate accounts are flagged during withdrawal and bonuses on secondary accounts are forfeited." },
  { q: "Is there a Lotus365 registration bonus?", a: "Yes — new accounts get a 400% welcome bonus on the first deposit (min ₹100, max bonus ₹1,00,000). Bonus funds are playable across the exchange, sports book and live casino, subject to standard rollover." },
  { q: "I registered but can't log in — what do I do?", a: "Message the concierge on WhatsApp with your registered mobile number. They'll reset your password securely within 60 seconds. Never share your Lotus365 password with anyone except the official WhatsApp concierge." },
  { q: "Is Lotus365 signup legal in India?", a: "Betting law in India is state-specific. Lotus365 operates under an international licence and is used by 2M+ Indian players. Read our detailed legal guide linked below." },
  { q: "Can I register on the Lotus365 app?", a: "Yes — install the Lotus365 app first (Android APK or iOS PWA), tap 'New user' and it opens the WhatsApp concierge directly. Same 3-minute flow." },
];

export const Route = createFileRoute("/lotus365-register")({
  head: () => ({
    meta: [
      { title: "Lotus365 Register — Create Your Lotus365 ID in 3 Minutes (2026)" },
      {
        name: "description",
        content:
          "Register on Lotus365 via WhatsApp concierge — new Lotus365 ID in under 3 minutes, no forms, 400% welcome bonus, instant UPI deposits. Official signup guide.",
      },
      { property: "og:title", content: "Lotus365 Register — Create Your Lotus365 ID in 3 Minutes" },
      {
        property: "og:description",
        content:
          "Sign up on Lotus365 through our WhatsApp concierge. New Lotus365 login in 3 minutes, 400% welcome bonus, instant UPI in/out.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://lotus365id.com/og-lotus365.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://lotus365id.com/og-lotus365.jpg" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to register on Lotus365",
          totalTime: "PT3M",
          step: STEPS.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.t,
            text: s.d,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
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
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
            { "@type": "ListItem", position: 2, name: "Register", item: URL },
          ],
        }),
      },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
          <UserPlus className="h-3.5 w-3.5" /> Free signup · 3 minutes · 2026
        </div>
        <h1 className="font-display text-4xl md:text-6xl mb-5">
          Lotus365 <span className="gold-text">Register</span> — Create Your Lotus365 ID in Under 3 Minutes
        </h1>
        <p className="text-lg text-foreground/90 max-w-2xl">
          The fastest way to <strong>sign up on Lotus365</strong> is through our WhatsApp concierge. No public form, no email OTP loops — just message us, get your <strong>Lotus365 login</strong> in 2–3 minutes, deposit any amount over ₹100 via UPI and claim the <strong>400% welcome bonus</strong>.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-green inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
          >
            <WhatsAppIcon className="h-4 w-4" /> Register on WhatsApp now
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-xs text-foreground/70">
          <span className="inline-flex items-center gap-1.5"><Gift className="h-3.5 w-3.5 text-primary" /> 400% welcome bonus</span>
          <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-primary" /> ID in &lt; 3 minutes</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Trusted since 2016</span>
          <span className="inline-flex items-center gap-1.5">★ 4.8 · 18,420 ratings</span>
        </div>
      </section>

      <AiOverview
        summary="Register on Lotus365 via WhatsApp concierge — new Lotus365 ID in 3 minutes, 400% welcome bonus and instant UPI deposits."
        points={[
          "No public signup form — concierge-issued IDs only for security",
          "No email OTP loops or KYC at signup",
          "400% welcome bonus on first deposit (min ₹100)",
          "Works across exchange, casino, sports book and the app",
        ]}
        sources={[{ label: "Login", to: "/lotus365-login" }, { label: "App", to: "/lotus365-app-download" }, { label: "Get ID", to: "/lotus365-id" }]}
      />

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="font-display text-2xl md:text-3xl mb-6">Why register with Lotus365</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map(({ Icon, t, d }) => (
            <div key={t} className="glass-card rounded-2xl p-5">
              <Icon className="h-5 w-5 text-primary mb-3" />
              <div className="font-display text-lg mb-1">{t}</div>
              <p className="text-sm text-foreground/90">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="flex items-center gap-3 mb-6">
          <MessageCircle className="h-6 w-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl">How to register on Lotus365 — step by step</h2>
        </div>
        <ol className="space-y-3">
          {STEPS.map((s, i) => (
            <li key={s.t} className="glass-card rounded-2xl p-5 flex gap-4">
              <span className="font-display text-2xl text-primary shrink-0">{i + 1}</span>
              <div>
                <div className="font-semibold mb-1">{s.t}</div>
                <p className="text-sm text-foreground/90">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">Lotus365 registration — frequently asked questions</h2>
        <div className="space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="glass-card rounded-2xl p-5 group">
              <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                {f.q}
                <span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-4xl mb-4">
            Ready to <span className="gold-text">create your Lotus365 ID</span>?
          </h2>
          <p className="text-sm text-foreground/80 max-w-xl mx-auto mb-6">
            Message our concierge on WhatsApp — new Lotus365 login in under 3 minutes, plus your 400% welcome bonus.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-green inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition"
          >
            <WhatsAppIcon className="h-4 w-4" /> Register on WhatsApp
          </a>
        </div>
      </section>

      <QuickLinks currentPath={URL} heading="More Lotus365 resources" />
      <SiteFooter />
    </div>
  );
}
