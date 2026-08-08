import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { IdCard, Wallet, Headset, ShieldCheck, LineChart, Gamepad2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Services — ID Setup, Payments, Support & More" },
      { name: "description", content: "Cricbet99 services include instant ID creation, UPI deposits and withdrawals, 24/7 support, account managers and live odds. India's trusted provider since 2020." },
      { property: "og:title", content: "Cricbet99 Services" },
      { property: "og:description", content: "Everything Cricbet99 does for its players — from setup to payouts." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: IdCard, title: "Instant ID creation", desc: "Verified betting IDs delivered on WhatsApp in under five minutes with full OTP verification." },
  { icon: Wallet, title: "UPI deposits & withdrawals", desc: "Google Pay, PhonePe, Paytm, BHIM and bank transfer — deposits reflect in seconds, withdrawals settle the same day." },
  { icon: Headset, title: "24/7 human support", desc: "Real agents on WhatsApp, phone and email round the clock — never a chatbot when you need real help." },
  { icon: ShieldCheck, title: "Account security", desc: "Encrypted logins, OTP verification and dedicated fraud monitoring keep your Cricbet99 ID safe." },
  { icon: LineChart, title: "Live odds & fancy bets", desc: "Ball-by-ball cricket odds, in-play football markets, session bets and player-specific fancy bets on every major match." },
  { icon: Gamepad2, title: "Premium casino access", desc: "Live Teen Patti, Andar Bahar, Roulette, Baccarat, Blackjack and Dragon Tiger with HD streams and Hindi-speaking dealers." },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title={<>Everything you need to bet on <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Cricbet99.</span></>}
        subtitle="Cricbet99 is more than a login — it's a full player experience. From WhatsApp-assisted ID setup and instant UPI payments to 24/7 human support, live in-play odds and premium casino tables, everything is designed to keep your play smooth and stress-free."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground" style={{ background: "var(--gradient-green)" }}>
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand heading="Experience the Cricbet99 service." sub="Message us on WhatsApp and see how a premium betting ID should really work." />
    </SiteLayout>
  );
}
