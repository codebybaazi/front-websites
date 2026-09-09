import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { IdCard, Wallet, Headset, ShieldCheck, LineChart, Gamepad2, Sparkles, Zap } from "lucide-react";
import { AiOverview } from "@/components/ai-overview";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/services")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `https://cricbet99.co.in/services`;
    return {
      meta: [
        { title: "Cricbet99 Services — Premium Betting ID & 24/7 Support" },
        { name: "description", content: "Discover the full range of Cricbet99 services: instant ID creation, secure UPI payouts, 24/7 WhatsApp assistance, and real-time betting analytics for Indian players." },
        { property: "og:title", content: "Cricbet99 — India's Most Comprehensive Betting Service" },
        { property: "og:description", content: "From lightning-fast ID activation to dedicated account managers, see why 124,000+ players trust our service." },
        { property: "og:url", content: canonical },
      ],
      links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/services", "Cricbet99 Services — Premium Betting ID & 24/7 Support")),
      },
    ],
    };
  },
  component: Services,
});

const services = [
  { icon: IdCard, title: "Rapid ID Activation", desc: "Get your unique betting ID within 2-5 minutes of your first message. We prioritize speed and security to get you in the game faster." },
  { icon: Wallet, title: "Verified UPI Payments", desc: "Enjoy hassle-free deposits and withdrawals through Google Pay, PhonePe, and Paytm. Our automated system ensures instant settlement 24/7." },
  { icon: Headset, title: "Human-Led Support", desc: "No bots. Talk to real Cricbet99 account managers on WhatsApp who can solve issues and guide you through the betting process instantly." },
  { icon: ShieldCheck, title: "Elite Data Protection", desc: "Your privacy is our priority. We use bank-grade encryption to secure your transactions and personal details against all threats." },
  { icon: LineChart, title: "Live Market Intelligence", desc: "Access ball-by-ball odds, session fancy markets, and expert match analysis that gives you an edge in every sport." },
  { icon: Gamepad2, title: "Casino ID Provisioning", desc: "One ID unlocks it all. We provide seamless access to the world's best live dealer tables and HD-quality slot gaming environments." },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Beyond the Bet"
        title={<>A Full Spectrum of <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Premium Services.</span></>}
        subtitle="Cricbet99 isn't just a platform—it's a service-first ecosystem. We handle the technical and financial details so you can focus entirely on the game."
      />

      <AiOverview 
        summary="Cricbet99's service architecture is built on the pillars of speed, security, and human support. We facilitate the most reliable online cricket ID experience in India through a dedicated network of verified agents."
        highlights={[
          "Average ID delivery time: 180 seconds",
          "100% deposit protection guarantee",
          "Dedicated managers for high-volume players",
          "Real-time settlement for all sporting events"
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-3xl border border-primary/20 bg-background/60 p-8 transition-all hover:border-primary/40">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground shadow-md transition-all group-hover:rotate-6" style={{ background: "var(--gradient-gold)" }}>
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-accent/5 py-24 mb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Sparkles className="mx-auto h-12 w-12 text-accent mb-6" />
          <h2 className="text-3xl font-black md:text-4xl mb-6">Service Excellence Since 2020</h2>
          <p className="text-lg text-foreground/70 mb-8">
            We've spent over six years refining our processes to ensure that every Cricbet99 user receives the fastest payouts and the most accurate odds in the Indian market.
          </p>
          <div className="flex justify-center gap-6 text-sm font-bold uppercase tracking-widest text-primary">
            <div className="flex items-center gap-2"><Zap className="h-4 w-4" /> Fast</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Secure</div>
            <div className="flex items-center gap-2"><Headset className="h-4 w-4" /> Support</div>
          </div>
        </div>
      </div>

      <CTABand 
        heading="Experience the Cricbet99 Standard." 
        sub="Don't settle for slow IDs and delayed payouts. Message us on WhatsApp to get the service you deserve and start winning with India's #1 provider." 
      />
    </SiteLayout>
  );
}
