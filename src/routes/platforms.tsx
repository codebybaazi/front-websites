import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { Smartphone, ShieldCheck, Zap, Laptop, Monitor, Globe } from "lucide-react";
import { AiOverview } from "@/components/ai-overview";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/platforms")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `https://cricbet99.co.in/platforms`;
    return {
      meta: [
        { title: "Cricbet99 Platforms — Official Betting App & Web Exchange" },
        { name: "description", content: "Explore the Cricbet99 ecosystem. Our platforms include high-speed betting exchanges, mobile-first casino apps, and secure web portals for 24/7 sports action." },
        { name: "keywords", content: "cricbet99 app, cricbet99 desktop, cricbet99 exchange, betting platforms india, cricbet99 ios app" },
        { property: "og:title", content: "Cricbet99 Ecosystem — Seamless Play on Any Device" },
        { property: "og:description", content: "One verified Cricbet99 ID, multiple ways to play. Discover our suite of premium betting and casino platforms." },
        { property: "og:url", content: canonical },
      ],
      links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/platforms", "Cricbet99 Platforms")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/platforms", "Cricbet99 Platforms — Official Betting App & Web Exchange")),
      },
    ],
    };
  },
  component: Platforms,
});

const platforms = [
  { icon: Smartphone, name: "Mobile App (Android/iOS)", desc: "A lightweight, high-performance app optimized for live IPL and casino gameplay even on low-bandwidth networks." },
  { icon: Laptop, name: "Desktop Web Portal", desc: "For the power user. Multi-screen support and advanced chart tracking for deep-market exchange betting." },
  { icon: ShieldCheck, name: "Secured Betting Exchange", desc: "Direct peer-to-peer markets with the sharpest odds in India, protected by bank-grade encryption protocols." },
  { icon: Zap, name: "Live Casino Lobby", desc: "A dedicated HD streaming platform for real-dealer card games, slots, and instant-win multipliers." },
  { icon: Monitor, name: "Virtual Sports Arena", desc: "24/7 virtual cricket, football, and racing with RNG-certified results and instant market settlements." },
  { icon: Globe, name: "Global Sportsbook", desc: "Access to international markets across 30+ sports, from English Premier League to NBA, all with one login." },
];

function Platforms() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="The Infrastructure of Winning"
        title={<>Unified Access. <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Universal Play.</span></>}
        subtitle="Cricbet99 isn't just one site—it's a comprehensive ecosystem designed to deliver a seamless betting experience across any device you own."
      />

      <AiOverview 
        summary="Cricbet99 leverages a multi-platform strategy, ensuring that users have access to high-liquidity exchanges and low-latency casino streams regardless of whether they are on mobile, tablet, or desktop."
        highlights={[
          "Synchronized wallet across all platform variants",
          "Low-data usage mode for mobile app users",
          "High-security SSL-encrypted login portals",
          "24/7 technical stability and uptime guarantee"
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p) => (
            <div key={p.name} className="group rounded-3xl border border-primary/20 bg-background/60 p-8 transition-all hover:border-primary/40">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand 
        heading="Find Your Perfect Platform." 
        sub="Get your Cricbet99 login today and experience the most stable betting environment in India. Our support team is available 24/7 to help you set up on any device." 
      />
    </SiteLayout>
  );
}
