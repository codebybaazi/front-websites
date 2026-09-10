import { abs, ogImageMeta } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { Shield, Zap, Headphones, Trophy, Sparkles, Wallet, MessageCircle, Send } from "lucide-react";
import { SiteHeader, TELEGRAM } from "@/components/SiteHeader";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";
import { SiteFooter } from "@/components/SiteFooter";
import { PageFaqs } from "@/components/PageFaqs";
import { AiOverviewSection } from "@/components/AiOverviewSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sprinters Online Gaming — Our Story & Mission" },
      {
        name: "description",
        content:
          "Learn about Sprinters Book — India's trusted online betting ID provider built on security, transparency, and 24/7 support.",
      },
      { property: "og:title", content: "About Sprinters Online Gaming" },
      {
        property: "og:description",
        content: "Our story, mission, and what sets Sprinters Book apart in Indian online gaming.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: abs("/about") },
      ...ogImageMeta("About Sprinters Online Gaming — our story and mission"),
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
        ...(buildPageFaqLd("/about") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/about")) }] : []),
    ],
  }),
  component: AboutPage,
});

const perks = [
  { icon: Shield, title: "Secure Transactions", text: "Encrypted deposits and withdrawals via UPI, GPay, PhonePe, Paytm and bank transfer." },
  { icon: Headphones, title: "24/7 Customer Support", text: "A dedicated team ready around the clock to resolve every query — instantly." },
  { icon: Trophy, title: "Best-in-Class Odds", text: "Sharpest odds across sports and casino, engineered for higher winning potential." },
  { icon: Sparkles, title: "Wide Range of Options", text: "From cricket and football to live casino, everything sits under one clean roof." },
  { icon: Zap, title: "Instant Withdrawals", text: "Zero-limit payouts that land in minutes, powered by cutting-edge infrastructure." },
  { icon: Wallet, title: "One ID, Every Exchange", text: "A single verified Sprinters ID unlocks Laser247, Tiger Exchange, Cricbet99, 11xplay and more." },
];

function AboutPage() {
  const whatsapp = useWhatsAppHref();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            About Us
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight text-foreground md:text-6xl">
            About <span className="text-primary">Sprinters Online Gaming</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Sprinters Book is India's trusted online betting ID provider — engineered on
            security, transparency, and a relentless focus on the player experience.
          </p>
        </div>
      </section>

      <Suspense fallback={null}>
        <AiOverviewSection />
      </Suspense>


      {/* Story + Mission */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
        {[
          {
            tag: "Our Story",
            title: "A vision to reshape Indian betting.",
            body: "We started with one goal — give Indian punters a safe, no-fuss way to get on the top betting exchanges without KYC headaches or payout delays. Today, Sprinters Book is a trusted name for cricket, casino and sports IDs across India.",
          },
          {
            tag: "Our Mission",
            title: "Reliable. Enjoyable. Rewarding.",
            body: "We deliver a secure, seamless betting experience with the sharpest odds, the widest range of markets, and support that genuinely helps — every hour of every day.",
          },
        ].map((c) => (
          <div
            key={c.tag}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition hover:border-primary"
          >
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{c.tag}</div>
            <h2 className="mt-3 text-2xl font-bold text-card-foreground md:text-3xl">{c.title}</h2>
            <p className="mt-4 text-muted-foreground">{c.body}</p>
            <div
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition group-hover:opacity-40"
              style={{ background: "var(--gradient-hero)" }}
              aria-hidden
            />
          </div>
        ))}
      </section>

      {/* What sets us apart */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black text-foreground md:text-4xl">What Sets Us Apart</h2>
          <p className="mt-4 text-muted-foreground">
            Six commitments that shape every bet you place with a Sprinters ID.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {perks.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div
          className="rounded-3xl p-10 text-center md:p-14"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="text-3xl font-black text-white md:text-4xl">Our Commitment</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            We champion responsible gaming. Our platform actively prevents underage betting and
            gives every player the tools to stay in control — because winning only counts when
            it's fun.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsapp}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" /> Get Your ID
            </a>
            <a
              href={TELEGRAM}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Send className="h-5 w-5" /> Telegram
            </a>
          </div>
        </div>
      </section>

      <PageFaqs />
      <SiteFooter />
    </div>
  );
}
