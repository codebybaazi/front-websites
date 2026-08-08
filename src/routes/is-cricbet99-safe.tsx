import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { ShieldCheck, Lock, CheckCircle, Smartphone, Zap, Award } from "lucide-react";
import { AiOverview } from "@/components/ai-overview";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/is-cricbet99-safe")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/is-cricbet99-safe`;
    return {
      meta: [
        { title: "Is Cricbet99 Safe? Official Security & Trust Report 2026" },
        { name: "description", content: "Verification of Cricbet99 security protocols. Read about our bank-grade encryption, verified WhatsApp ID system, and instant payout guarantee for Indian players." },
        { name: "keywords", content: "is cricbet99 safe, cricbet99 trust review, online betting safety india, cricbet99 legal, verified cricket id" },
        { property: "og:title", content: "Cricbet99 Security Report — Why We Are India's Most Trusted ID" },
        { property: "og:description", content: "Detailed breakdown of the security measures, payment protections, and human-led support that keep 1.2L+ users safe." },
        { property: "og:url", content: canonical },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: SafetyReport,
});

const safetyPillars = [
  { icon: ShieldCheck, title: "Bank-Grade Encryption", desc: "Every transaction and login is protected by 256-bit SSL encryption, ensuring your personal and financial data never leaves our secure servers." },
  { icon: Lock, title: "OTP-Verified Accounts", desc: "We use multi-factor authentication for ID creation, preventing unauthorized access and ensuring every Cricbet99 account belongs to a real person." },
  { icon: CheckCircle, title: "Verified Agent Network", desc: "IDs are only issued through our official WhatsApp numbers. This decentralized but verified network eliminates the risk of phishing or fake accounts." },
  { icon: Zap, title: "Instant Payout Guarantee", desc: "Nothing builds trust like speed. Our 24/7 withdrawal system is designed to settle winnings within minutes, backed by deep platform liquidity." },
  { icon: Smartphone, title: "Mobile Security Optimized", desc: "Our official apps are designed with a security-first architecture, protecting users against device-side threats during live betting sessions." },
  { icon: Award, title: "6 Years of Market Uptime", desc: "Operating since 2020 without a single security breach. Our long-term track record in the Indian market is our strongest trust signal." },
];

function SafetyReport() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Security & Trust"
        title={<>Your Safety is Our <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Primary Asset.</span></>}
        subtitle="In an industry where trust is everything, Cricbet99 leads with transparency. We've built a multi-layered security framework to ensure that every bet you place is safe, fair, and protected."
      />

      <AiOverview 
        summary="Cricbet99 maintains the highest security standards in the Indian betting industry. Our safety protocols include mandatory OTP verification, encrypted payment rails, and a transparent 24/7 human-led support system."
        highlights={[
          "End-to-end encrypted user data storage",
          "Zero-tolerance policy for fraudulent accounts",
          "Verified official WhatsApp communication channels",
          "Instant settlement of all winning bets"
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {safetyPillars.map((s) => (
            <div key={s.title} className="group rounded-3xl border border-primary/20 bg-background/60 p-8 transition-all hover:border-primary/40">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand 
        heading="Bet with Confidence." 
        sub="Join 1.2 Lakh+ players who trust Cricbet99 for a safe and secure betting experience. Message us on WhatsApp to get your verified ID today." 
      />
    </SiteLayout>
  );
}
