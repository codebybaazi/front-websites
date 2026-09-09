import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How to Start on Cricbet99 | 5-Minute ID Activation" },
      { name: "description", content: "Learn how to get your official Cricbet99 ID in minutes. Our step-by-step guide covers WhatsApp activation, OTP verification, and instant UPI deposits." },
      { property: "og:title", content: "Start Your Cricbet99 Journey | Step-by-Step Guide" },
      { property: "og:description", content: "Joining Cricbet99 is simple and secure. Follow our guided process to activate your premium sports ID on WhatsApp today." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/how-it-works" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/how-it-works" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/how-it-works", "How to Start on Cricbet99")),
      },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  { title: "Contact official WhatsApp support", desc: "Tap the WhatsApp button on any Cricbet99 page. Always use links from cricbet99 official pages to make sure you're speaking to our verified team. Replies come in within seconds, 24 hours a day." },
  { title: "Share your basic details", desc: "Send us your full name and the mobile number you want linked to the account. This is used only for OTP verification and ID setup — your details are never sold or shared with third parties." },
  { title: "Complete OTP verification", desc: "You'll receive a one-time password on your registered mobile. Share the code with support so we can confirm your identity and start account activation. This step protects your account from misuse." },
  { title: "Make your first deposit", desc: "Deposit a small minimum via UPI, Google Pay, PhonePe, Paytm, BHIM or bank transfer. Most deposits reflect in your wallet within seconds — no waiting before you place a bet." },
  { title: "Receive your Cricbet99 ID and password", desc: "Your unique username and password are sent to you on WhatsApp the moment your deposit clears. Keep your credentials private and never share them with anyone." },
  { title: "Log in and start betting", desc: "Sign in on any device — desktop, mobile browser or the Cricbet99 app experience — and explore live IPL 2026 cricket, football, tennis and live casino markets." },
];

const perks = [
  { title: "Guided setup", desc: "You're never left alone with a complicated form. A real support agent walks you through everything." },
  { title: "Same-day payouts", desc: "Withdrawal requests are processed within 24 hours — usually much faster during working hours." },
  { title: "Multiple exchanges, one login", desc: "Your Cricbet99 ID unlocks a curated set of premium sports and casino platforms without new signups." },
];

function HowItWorks() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="How It Works"
        title={<>Professional Onboarding in <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>5 Minutes.</span></>}
        subtitle="Cricbet99 streamlines your entry into professional sports trading. Through our human-led WhatsApp activation process, we ensure your ID is secure, verified, and ready for action without complex forms or delays."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter">Onboarding Phases</h2>
        <h3 className="text-xs font-black text-accent/60 uppercase tracking-[0.3em] mb-10">Systematic User Integration</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <div className="text-5xl font-black" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Phase {i + 1}
              </div>
              <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-foreground/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-black md:text-4xl mb-2 uppercase tracking-tighter">Why the WhatsApp-first flow works</h2>
        <h3 className="text-xs font-black text-primary/60 uppercase tracking-[0.4em] mb-10">Advanced Communication Architecture</h3>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand heading="Ready in five minutes." sub="Tap through to WhatsApp and our team will set up your Cricbet99 ID right now." />
    </SiteLayout>
  );
}
