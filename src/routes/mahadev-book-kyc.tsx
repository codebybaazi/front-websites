import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, BadgeCheck, ShieldCheck, FileText, AlertTriangle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";
import { howToJsonLd } from "@/lib/seo";

const kycFaqs: FAQItem[] = [
  { q: "What is KYC on Mahadev Book and why is it needed?", a: "KYC, or Know Your Customer, confirms that the person behind an ID is real and that it's tied to their own bank or UPI account. It protects your account from being used by someone else and keeps withdrawals going to the right person." },
  { q: "What documents do I need for Mahadev Book KYC?", a: "A government photo ID, such as Aadhaar, PAN or a driving licence, along with the mobile number and payment method you'll actually use. The WhatsApp team tells you exactly what's needed for your case." },
  { q: "How long does KYC verification take?", a: "Most KYC checks are completed within minutes once the documents are shared on WhatsApp. Occasionally a manual review takes a bit longer, and the team keeps you updated on the same chat." },
  { q: "Can I deposit or withdraw before completing KYC?", a: "Small deposits are usually possible before full KYC, but withdrawals require it. This is standard across the industry and exists specifically to protect your payout from going to the wrong account." },
  { q: "My KYC was rejected. What do I do?", a: "Message support on WhatsApp and ask what caused the rejection. It's often something simple, like a blurry photo or a name mismatch between the ID and the registered account, and it's fixed by resubmitting the correct document." },
  { q: "Is my KYC information safe with Mahadev Book?", a: "Documents are used only to verify your identity and are handled under the same security practices as your deposits and withdrawals. They're not shared with third parties." },
  { q: "Do I need to redo KYC if I change my phone number or bank account?", a: "Yes, a quick update is needed so your verified details match your active account. Message support on WhatsApp with the new details and any documents needed to confirm the change." },
  { q: "Can someone else complete KYC on my behalf?", a: "No. KYC has to be done by the account holder, since it's tied to your identity and your own payment method. This is also why an ID should never be shared with anyone else." },
];

export const Route = createFileRoute("/mahadev-book-kyc")({
  head: () => ({
    meta: [
      { title: "Mahadev Book KYC — Verify Your ID on WhatsApp" },
      { name: "description", content: "Understand how Mahadev Book KYC works, what documents you need, and how to complete or fix your verification on the official WhatsApp support line." },
      { property: "og:title", content: "Mahadev Book KYC — Verify Your ID on WhatsApp" },
        { name: "twitter:title", content: "Mahadev Book KYC — Verify Your ID on WhatsApp" },
      { property: "og:description", content: "New to Mahadev Book KYC, or stuck on a rejected verification? Get it sorted on the official WhatsApp support line." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-kyc" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book KYC — verify your ID on WhatsApp" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-kyc" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(kycFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          howToJsonLd("How to complete Mahadev Book KYC", "Verify a Mahadev Book ID on WhatsApp with a government photo ID and matching payout details.", [
            { name: "Message WhatsApp support", text: "Tell the desk you are completing or updating KYC from your registered mobile number." },
            { name: "Share your government ID", text: "Send a clear photo of Aadhaar, PAN or a driving licence plus the mobile number on the account." },
            { name: "Confirm payout details", text: "Give the UPI ID or bank account you will actually use. The name should match the ID." },
            { name: "Wait for verification", text: "Most checks finish within minutes. When it clears, withdrawals are unlocked." },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "KYC", item: "https://mahadevbookss.com/mahadev-book-kyc" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-kyc",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: KycPage,
});

const kycPoints = [
  { icon: FileText, t: "One government ID", d: "Aadhaar, PAN or a driving licence is enough to start. Support tells you if anything extra is needed for your case." },
  { icon: BadgeCheck, t: "Your own payment method", d: "The UPI ID or bank account you'll actually deposit and withdraw with should match the name on your KYC." },
  { icon: ShieldCheck, t: "A quick manual check", d: "Most documents are reviewed within minutes. A small number need a closer look, and you're kept updated throughout." },
  { icon: AlertTriangle, t: "No sharing, no proxies", d: "KYC ties an ID to one real person. It can't be completed on someone else's behalf or shared across accounts." },
];

const kycSteps = [
  { n: "01", t: "Message WhatsApp support", d: "Tap the WhatsApp button below and let the team know you're completing or updating KYC." },
  { n: "02", t: "Share your document", d: "Send a clear photo of your government ID along with your registered mobile number." },
  { n: "03", t: "Confirm payment details", d: "Provide the UPI ID or bank account you'll use, matching the name on your document." },
  { n: "04", t: "Verification clears", d: "Once checked, your account is marked verified and withdrawals are unlocked." },
];

function KycPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Account Verification
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">KYC</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          New to Mahadev Book KYC, unsure what documents you need, or dealing with a rejected
          verification? Here's how it works and how to get verified through the official WhatsApp
          support line.
        </p>
        <div className="mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <span className="btn-glow-content flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Complete KYC on WhatsApp
            </span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book KYC"
        summary="Mahadev Book KYC verifies that a cricket ID belongs to a real person and is tied to their own bank or UPI account, protecting the account and its withdrawals from misuse. It requires one government ID, such as Aadhaar, PAN or a driving licence, plus the payment method the account holder actually uses. Verification is usually completed within minutes on the official WhatsApp support line and is required before withdrawals are unlocked."
        points={[
          "One government photo ID is usually enough",
          "Payment method should match the name on the ID",
          "Most verifications clear within minutes",
          "Withdrawals require completed KYC",
          "Rejections are often a document quality or name mismatch issue",
          "KYC can't be completed on someone else's behalf",
        ]}
        keywords={["mahadev book kyc", "mahadev book verification", "mahadev book kyc documents", "mahadev book id verification"]}
      />

      {/* What's needed */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What KYC involves</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Four things worth knowing before you start.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {kycPoints.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How to complete KYC</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Four steps, usually done inside one WhatsApp chat.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {kycSteps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-2xl font-bold text-gradient-gold">{s.n}</span>
              <h3 className="mt-3 font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety note */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <div className="rounded-2xl border border-warning/40 bg-warning/5 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-bold text-foreground">Only send documents through the official WhatsApp line</h2>
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Your ID documents should only go to the official Mahadev Book WhatsApp chat, not a
            forwarded number or a third party offering to "speed up" verification. KYC exists to
            protect your account, and that protection only works if the process stays inside the
            official channel.
          </p>
        </div>
      </section>

      <FAQSection title="Mahadev Book KYC — FAQs" items={kycFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Ready to get verified?</h2>
        <p className="mt-3 text-muted-foreground">Message support and most KYC checks clear within minutes.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Chat Now</span>
          </a>
          <Link to="/contact" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Other ways to reach us
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-kyc"
        title="Keep exploring"
        subtitle="Deposits, withdrawals, login help and everything else on the support desk."
      />
    </>
  );
}
