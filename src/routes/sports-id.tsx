import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { ShieldCheck, Zap, Wallet, Headset } from "lucide-react";

export const Route = createFileRoute("/sports-id")({
  head: () => ({
    meta: [
      { title: "Get Your Official Cricbet99 Sports ID | Verified & Secure" },
      { name: "description", content: "Secure your official Cricbet99 Sports ID today. One verified login for cricket, football, tennis, and live casino. Instant UPI activation via WhatsApp." },
      { property: "og:title", content: "Cricbet99 Sports ID | The Only ID You Need" },
      { property: "og:description", content: "Experience seamless multi-sport betting with a single verified Cricbet99 ID. Fast deposits, instant withdrawals, and 24/7 support." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/sports-id" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/sports-id" }],
  }),
  component: SportsID,
});

const perks = [
  { icon: ShieldCheck, title: "Verified & secure", desc: "OTP-verified account setup with strong encryption. Your ID stays with you and is never shared." },
  { icon: Zap, title: "Ready in 5 minutes", desc: "From WhatsApp message to first bet in under five minutes — no long forms, no waiting periods." },
  { icon: Wallet, title: "Instant UPI in/out", desc: "Deposit via UPI, Google Pay, PhonePe or Paytm. Withdrawals are processed the same day, often within minutes." },
  { icon: Headset, title: "Human support 24/7", desc: "Real Cricbet99 agents on WhatsApp round the clock — for setup, deposits, withdrawals or market questions." },
];

function SportsID() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Sports ID"
        title={<>Premium Cricbet99 ID: <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Universal Access.</span></>}
        subtitle="Your Cricbet99 Sports ID is a master key to the world of professional trading. One verified account grants you instant access to cricket, football, tennis, and our elite live casino — all managed through a single secure wallet."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand heading="Claim your Cricbet99 Sports ID." sub="One verified login, every sport, instant payouts — all through a WhatsApp message." />
    </SiteLayout>
  );
}
