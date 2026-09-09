import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Lock, Fingerprint, ShieldCheck, AlertTriangle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const safetyFaqs: FAQItem[] = [
  { q: "How does Mahadev Book protect my account?", a: "SSL encryption on every connection, PCI-DSS aligned payment handling, device fingerprinting to spot unusual logins, and mandatory KYC tying each account to one real person." },
  { q: "What can I do to keep my own account safe?", a: "Never share your password or OTP with anyone, including someone claiming to be Mahadev Book support, and only deposit or message through the official WhatsApp line linked from this site." },
  { q: "How does Mahadev Book detect fraud?", a: "Automated monitoring flags unusual patterns, like a sudden login from a new location or several failed password attempts, and holds the account for a quick manual check rather than letting it through unchecked." },
  { q: "What happens if someone else tries to access my account?", a: "Repeated failed login attempts trigger an automatic hold. Message support on WhatsApp to verify your identity and clear it, and mention the attempt so the team can look into it." },
  { q: "Are payment details stored safely?", a: "Payment information is handled under bank-grade encryption and isn't shared with third parties beyond what's needed to process a deposit or withdrawal you've requested." },
  { q: "How do I spot a fake Mahadev Book number or channel?", a: "Only trust the WhatsApp button and Telegram link published on this site. Screenshots of old numbers circulating on social media or forwarded messages can be inactive or belong to someone else entirely." },
];

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Safety — How Accounts Are Protected" },
      { name: "description", content: "How Mahadev Book protects accounts and payments — SSL encryption, device fingerprinting, fraud monitoring and mandatory KYC — plus how to protect yourself." },
      { property: "og:title", content: "Mahadev Book Safety — How Accounts Are Protected" },
      { property: "og:description", content: "The security measures behind Mahadev Book accounts, and what players can do to stay safe." },
      { property: "og:url", content: "https://mahadevbookss.com/safety" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book safety and account protection" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/safety" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(safetyFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://mahadevbookss.com/about" },
            { "@type": "ListItem", position: 3, name: "Safety", item: "https://mahadevbookss.com/safety" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/safety",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: SafetyPage,
});

const measures = [
  { icon: Lock, t: "SSL encryption everywhere", d: "Every connection, from login to payment confirmation, runs over encrypted channels." },
  { icon: Fingerprint, t: "Device & login monitoring", d: "Unusual logins or repeated failed attempts trigger an automatic hold rather than sailing through." },
  { icon: ShieldCheck, t: "Mandatory KYC", d: "Every account is tied to one verified person, which is also what protects withdrawals from going to the wrong place." },
  { icon: AlertTriangle, t: "Fraud monitoring", d: "Account and transaction patterns are watched for the kind of activity that usually signals account takeover or fraud." },
];

function SafetyPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Safety
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          How Mahadev Book keeps your <span className="text-gradient-gold">account safe</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Encryption, fraud monitoring and mandatory KYC on our end, and a few habits on yours.
          Here's how the two work together.
        </p>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Safety"
        summary="Mahadev Book protects accounts through SSL encryption on every connection, device and login monitoring that flags unusual activity, mandatory KYC tying each account to one verified person, and ongoing fraud monitoring on transactions. Players are advised to never share their password or OTP, and to only deposit or message through the official WhatsApp line and Telegram channel linked from this site, since impersonator numbers and channels do exist."
        points={[
          "SSL encryption on every connection",
          "Device and login monitoring flags unusual activity",
          "Mandatory KYC on every account",
          "Ongoing fraud monitoring on transactions",
          "Never share your password or OTP with anyone",
          "Only trust the official WhatsApp and Telegram links on this site",
        ]}
        keywords={["mahadev book safety", "mahadev book account security", "is mahadev book safe", "mahadev book fraud protection"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What we do</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {measures.map((m) => (
            <div key={m.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <m.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{m.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <div className="rounded-2xl border border-warning/40 bg-warning/5 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-bold text-foreground">What you can do</h2>
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Never share your password or OTP with anyone, including someone claiming to be
            Mahadev Book support. Only deposit or message through the official WhatsApp button and
            Telegram link published on this site, not a number saved from an old screenshot or
            forwarded message. If anything about a chat feels off, stop and confirm through the
            official channel before sending money or documents.
          </p>
        </div>
      </section>

      <FAQSection title="Mahadev Book Safety — FAQs" items={safetyFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Spot something suspicious?</h2>
        <p className="mt-3 text-muted-foreground">Message support on WhatsApp and let the team know right away.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Report on WhatsApp</span>
          </a>
          <Link to="/mahadev-book-kyc" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            About KYC verification
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Company"
        excludePath="/safety"
        title="More about Mahadev Book"
        subtitle="Our story, trust signals, reviews and why players choose us."
      />
    </>
  );
}
