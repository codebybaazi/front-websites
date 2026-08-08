import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { ShieldCheck, Zap, Wallet, Headset } from "lucide-react";

export const Route = createFileRoute("/sports-id")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Sports ID — One Login for Cricket, Football, Tennis & Casino" },
      { name: "description", content: "Get your official Cricbet99 Sports ID on WhatsApp — one verified login for cricket, football, tennis, horse racing and live casino with instant UPI payouts." },
      { property: "og:title", content: "Cricbet99 Sports ID" },
      { property: "og:description", content: "One verified ID for every sport and casino table Cricbet99 offers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
        title={<>One Cricbet99 ID, <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>every sport,</span> every market.</>}
        subtitle="Your Cricbet99 Sports ID is a single verified login that unlocks live cricket, football, tennis, horse racing, kabaddi and the full live casino — all with the same wallet, one support team and instant UPI payouts."
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
