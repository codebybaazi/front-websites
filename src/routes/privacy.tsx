import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Lock, Database, Share2, Cookie, ShieldCheck } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Privacy Policy" },
      { name: "description", content: "How Mahadev Book collects, uses and protects account and KYC information — what's stored, who it's shared with, and how to request changes to your data." },
      { property: "og:title", content: "Mahadev Book Privacy Policy" },
      { property: "og:description", content: "What data Mahadev Book collects, how it's used, and how it's kept secure." },
      { property: "og:url", content: "https://mahadevbookss.com/privacy" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book Privacy Policy" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/privacy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Policies", item: "https://mahadevbookss.com/policies" },
            { "@type": "ListItem", position: 3, name: "Privacy Policy", item: "https://mahadevbookss.com/privacy" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/privacy",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    icon: Database,
    t: "What we collect",
    d: "Your name, mobile number, the payment method you deposit and withdraw with, and a government ID used for KYC verification. We also log basic betting and transaction activity tied to your account.",
  },
  {
    icon: Lock,
    t: "How it's used",
    d: "Account verification, fraud prevention, processing deposits and withdrawals, and providing support when you message us. KYC documents are used only to confirm identity and aren't repurposed for anything else.",
  },
  {
    icon: Share2,
    t: "Who it's shared with",
    d: "Your information isn't sold or shared with third parties for marketing. It may be disclosed where required by law, or to payment processors solely to complete a deposit or withdrawal you've requested.",
  },
  {
    icon: ShieldCheck,
    t: "How it's protected",
    d: "Account and payment data is handled under bank-grade SSL and PCI-DSS aligned practices. Access to KYC documents is limited to the team members who need it to verify accounts and process payouts.",
  },
  {
    icon: Cookie,
    t: "Cookies and analytics",
    d: "This site uses basic cookies to keep you logged in where applicable and to understand how pages are used, so we can fix what isn't working. These don't identify you personally on their own.",
  },
];

function PrivacyPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Policies
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Privacy Policy</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          What we collect when you use a Mahadev Book ID, why we collect it, and what we do — and
          don't do — with it.
        </p>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Privacy Policy"
        summary="Mahadev Book collects account details, payment information and KYC documents to verify identity, process deposits and withdrawals, and prevent fraud. Data isn't sold or shared with third parties for marketing, and is disclosed only where legally required or to payment processors completing a requested transaction. Account and payment data is handled under SSL and PCI-DSS aligned practices, and players can request changes to their data on WhatsApp."
        points={[
          "Data collected: name, mobile number, payment method, KYC ID",
          "Used for verification, fraud prevention and support",
          "Not sold or shared with third parties for marketing",
          "Bank-grade SSL and PCI-DSS aligned handling",
          "Basic cookies for login and site analytics only",
          "Data change or deletion requests handled on WhatsApp",
        ]}
        keywords={["mahadev book privacy policy", "mahadev book data protection", "mahadev book kyc privacy"]}
      />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
        {sections.map((s) => (
          <div key={s.t} className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground flex items-start gap-3">
              <s.icon className="h-5 w-5 text-primary shrink-0 mt-1.5" /> {s.t}
            </h2>
            <p className="mt-3 text-foreground/85 leading-relaxed">{s.d}</p>
          </div>
        ))}

        <div className="mb-8">
          <h2 className="font-display text-2xl font-bold text-foreground">Your data, your control</h2>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            You can ask what information we hold about you, request a correction, or ask for your
            account data to be deleted where it isn't needed for legal or fraud-prevention
            purposes. Message support on WhatsApp with your registered mobile number to start any
            of these requests.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
          <div className="font-display text-xl font-bold text-foreground">Have a privacy question?</div>
          <p className="mt-2 text-sm text-muted-foreground">Message support on WhatsApp and we'll answer it directly, no ticket queue.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Ask on WhatsApp</span>
          </a>
        </div>
      </section>

      <QuickLinks
        pageCategory="Policies"
        excludePath="/privacy"
        title="Related policies"
        subtitle="Terms, responsible gaming and everything else you agree to when you play."
      />
    </>
  );
}
