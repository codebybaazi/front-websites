import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { ShieldCheck, Users, Headphones, Wallet, Lock, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Cricbet99 — India's Trusted Cricket ID Since 2020" },
      { name: "description", content: "Learn how Cricbet99 has served over 1 lakh Indian sports fans since 2020 with guided access, verified IDs and 24/7 human support." },
      { property: "og:title", content: "About Cricbet99" },
      { property: "og:description", content: "India's most trusted cricket ID platform — one verified account for cricket, casino and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { icon: Users, title: "Trusted by a growing community", desc: "Over 1 lakh verified players have activated their ID with us since 2020, with tens of thousands joining every year." },
  { icon: ShieldCheck, title: "Guided, verified access", desc: "Every account is created through our official WhatsApp support — no shady links, no third-party middlemen." },
  { icon: Lock, title: "Your data stays private", desc: "We follow strict data-handling practices. Your personal details are never sold, shared or misused." },
  { icon: Headphones, title: "Round-the-clock human support", desc: "Real account managers on WhatsApp answer questions about deposits, withdrawals, markets and settlement — 24/7." },
  { icon: Wallet, title: "24-hour withdrawal assistance", desc: "Payout requests are processed within 24 hours, straight to your UPI ID or bank account with no surprise deductions." },
  { icon: Award, title: "Built for Indian players", desc: "Every part of the experience — payments, support, sports coverage — is tuned for cricket-loving India." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title={<>India's most trusted <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>cricket ID platform.</span></>}
        subtitle="Cricbet99 is a user-access platform that helps Indian players reach premium sports betting and gaming services through a single verified ID. Instead of navigating complicated apps alone, our members get guided setup, direct WhatsApp assistance and ongoing help with every transaction."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 rounded-3xl border border-primary/25 bg-background/50 p-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">Our story</h2>
            <p className="mt-4 text-foreground/80">
              Cricbet99 has been serving Indian sports fans since 2020. What started as a small support-driven service for cricket enthusiasts has grown into one of India's most trusted online cricket ID platforms, with more than one lakh active users across the country.
            </p>
            <p className="mt-4 text-foreground/80">
              We built Cricbet99 around a simple idea: online gaming should be clear, human and easy. That's why every ID is set up through a real person on WhatsApp, every deposit and withdrawal is guided, and every question gets a straightforward answer.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">What we stand for</h2>
            <p className="mt-4 text-foreground/80">
              We put responsible participation, transparent communication and reliable customer support at the centre of everything we do. Our platform is designed for players who value clarity, accessibility and real human assistance instead of anonymous automated systems.
            </p>
            <p className="mt-4 text-foreground/80">
              With one Cricbet99 ID, you get access to premium sports markets — cricket, football, tennis, kabaddi, horse racing and live casino — through a single verified account.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-black md:text-4xl">Why players choose Cricbet99</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand heading="Join a community of 1 lakh+ verified players." sub="Chat with our support team on WhatsApp and set up your Cricbet99 ID today." />
    </SiteLayout>
  );
}
