import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, BadgeCheck, Wallet, Trophy, Dice5, ShieldCheck, Headphones, Zap } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const whatFaqs: FAQItem[] = [
  { q: "What exactly does Mahadev Book do?", a: "It issues verified cricket IDs that unlock sports betting, live casino games and instant games under one login, with UPI deposits and withdrawals handled through the same WhatsApp support desk." },
  { q: "Is Mahadev Book an app, a website, or both?", a: "Both. It runs in any mobile browser without an install, and an APK is available on request for players who prefer an app." },
  { q: "What games and markets does one ID unlock?", a: "Cricket, football, tennis, kabaddi and horse racing on the sports side, plus live dealer tables, Teen Patti, Andar Bahar, Aviator and hundreds of slots on the casino side." },
  { q: "Who actually handles my deposits and withdrawals?", a: "The same in-house team that issues your ID. Deposits are confirmed and withdrawals are checked against your KYC, all on the official WhatsApp line." },
  { q: "Does Mahadev Book operate its own casino games?", a: "Live tables run through established studios like Evolution, Ezugi and Pragmatic Play. Mahadev Book handles the ID, wallet, odds and support layer around them." },
];

export const Route = createFileRoute("/what")({
  head: () => ({
    meta: [
      { title: "What Mahadev Book Does — Platform Explained" },
      { name: "description", content: "What Mahadev Book actually is — verified ID issuance, wallet and UPI payments, sports exchange, live casino and 24/7 support, explained in plain terms." },
      { property: "og:title", content: "What Mahadev Book Does — Platform Explained" },
        { name: "twitter:title", content: "What Mahadev Book Does — Platform Explained" },
      { property: "og:description", content: "A plain explanation of what Mahadev Book does — from ID setup to withdrawals." },
      { property: "og:url", content: "https://mahadevbookss.com/what" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "What Mahadev Book does — platform explained" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/what" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(whatFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://mahadevbookss.com/about" },
            { "@type": "ListItem", position: 3, name: "What We Do", item: "https://mahadevbookss.com/what" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/what",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: WhatPage,
});

const layers = [
  { icon: BadgeCheck, t: "ID issuance", d: "A verified cricket ID minted against real KYC over WhatsApp, usually in under five minutes." },
  { icon: Wallet, t: "Wallet & payments", d: "UPI, IMPS and e-wallet rails for deposits and withdrawals, confirmed by the same support team that set up your ID." },
  { icon: Trophy, t: "Sports exchange", d: "Cricket, football, tennis, kabaddi and horse racing, with bookmaker and exchange-style odds depending on the market." },
  { icon: Dice5, t: "Live casino", d: "Live dealer tables through established studios, plus Teen Patti, Andar Bahar, Aviator and slot titles." },
  { icon: ShieldCheck, t: "Security & fraud checks", d: "SSL encryption and account monitoring running underneath, so it doesn't add steps to placing a bet." },
  { icon: Headphones, t: "Support", d: "One WhatsApp desk for new IDs, deposits, withdrawals, KYC and general questions, staffed 24/7." },
];

function WhatPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> What We Do
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          What <span className="text-gradient-gold">Mahadev Book</span> actually does
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Strip away the branding and it's six moving parts working together — ID, wallet, sports
          exchange, casino, security and support. Here's what each one covers.
        </p>
        <div className="mt-8">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><Zap className="h-4 w-4" /> Get Started on WhatsApp</span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — What Mahadev Book Does"
        summary="Mahadev Book is an online cricket ID and betting platform built around six parts: verified ID issuance over WhatsApp, a UPI-based wallet for deposits and withdrawals, a sports exchange covering cricket, football, tennis, kabaddi and horse racing, a live casino floor running through established studios, background security and fraud monitoring, and a single 24/7 WhatsApp support desk tying it all together."
        points={[
          "Verified ID issued over WhatsApp in minutes",
          "UPI, IMPS and e-wallet deposits and withdrawals",
          "Sports exchange: cricket, football, tennis, kabaddi, horse racing",
          "Live casino through established dealer studios plus slots and Aviator",
          "SSL encryption and account fraud monitoring",
          "One WhatsApp desk for support, deposits, withdrawals and KYC",
        ]}
        keywords={["what is mahadev book", "mahadev book platform", "mahadev book explained", "mahadev book"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {layers.map((l) => (
            <div key={l.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <l.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{l.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{l.d}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection title="What Mahadev Book Does — FAQs" items={whatFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">See the platform in action</h2>
        <p className="mt-3 text-muted-foreground">Get a verified ID and try it on your next match.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Get My ID</span>
          </a>
          <Link to="/why" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Why players choose us
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Company"
        excludePath="/what"
        title="More about Mahadev Book"
        subtitle="Our story, safety practices, reviews and why players choose us."
      />
    </>
  );
}
