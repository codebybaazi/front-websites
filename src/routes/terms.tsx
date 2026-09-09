import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, FileText, AlertTriangle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Terms & Conditions" },
      { name: "description", content: "The terms that govern using a Mahadev Book cricket ID — eligibility, account rules, betting and settlement, deposits and withdrawals, and account suspension." },
      { property: "og:title", content: "Mahadev Book Terms & Conditions" },
      { property: "og:description", content: "Eligibility, account rules, betting and settlement, and payment terms for Mahadev Book." },
      { property: "og:url", content: "https://mahadevbookss.com/terms" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book Terms & Conditions" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/terms" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Policies", item: "https://mahadevbookss.com/policies" },
            { "@type": "ListItem", position: 3, name: "Terms & Conditions", item: "https://mahadevbookss.com/terms" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/terms",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    t: "Eligibility",
    d: "A Mahadev Book ID is for individuals aged 18 and over. Each ID belongs to one verified person — sharing, reselling or operating an account on someone else's behalf isn't permitted, and accounts found doing this can be suspended pending review.",
  },
  {
    t: "Account setup and KYC",
    d: "An ID is issued after basic identity checks on WhatsApp. Full KYC, including a government photo ID, is required before withdrawals are released. Details provided at setup should match the payment method actually used for deposits and withdrawals.",
  },
  {
    t: "Deposits and withdrawals",
    d: "Deposits are confirmed through the official WhatsApp deposit line only. Withdrawals are checked against verified KYC and released once confirmed, typically within minutes for UPI and longer for bank transfer, subject to bank processing times outside our control.",
  },
  {
    t: "Betting and settlement",
    d: "Bets are settled based on official results from the relevant sporting body or event organizer. Once a bet is placed and accepted, it stands as final unless a genuine pricing or technical error is identified, in which case it's corrected and communicated on WhatsApp.",
  },
  {
    t: "Bonuses and promotions",
    d: "Welcome bonuses, reload bonuses and cashback carry a turnover requirement before the bonus amount becomes withdrawable, as described on the bonuses page. Bonus abuse, including multiple accounts to claim the same offer repeatedly, can result in forfeiture of the bonus and related winnings.",
  },
  {
    t: "Account suspension",
    d: "An account can be suspended or held for review if it shows signs of fraud, shared use, underage access or a mismatch between KYC and payment details. Suspensions are communicated on WhatsApp along with what's needed to resolve them.",
  },
  {
    t: "Limitation of liability",
    d: "Mahadev Book isn't responsible for delays caused by banks, payment networks or events outside our direct control, such as internet outages on the player's end. Betting involves financial risk, and outcomes aren't guaranteed.",
  },
  {
    t: "Changes to these terms",
    d: "These terms can be updated from time to time to reflect how the platform actually operates. The version on this page is the current one, and continuing to use a Mahadev Book ID after an update means accepting the revised terms.",
  },
];

function TermsPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Policies
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Terms & Conditions</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          The rules that govern using a Mahadev Book cricket ID — eligibility, account setup,
          betting and settlement, payments and what can lead to a suspension.
        </p>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Terms & Conditions"
        summary="Mahadev Book's terms cover who can hold an ID (18 and over, one verified person per account), how deposits and withdrawals are confirmed and settled, how bets are settled against official results, the turnover requirement on bonuses, and the conditions that can lead to an account being suspended or held for review."
        points={[
          "IDs are for individuals aged 18 and over",
          "One verified person per account, no sharing or reselling",
          "Withdrawals require completed KYC",
          "Bets settle against official event results",
          "Bonuses carry a turnover requirement before withdrawal",
          "Terms can be updated; the current version applies",
        ]}
        keywords={["mahadev book terms and conditions", "mahadev book terms", "mahadev book rules", "mahadev book policy"]}
      />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
        {sections.map((s) => (
          <div key={s.t} className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary shrink-0 mt-1.5" /> {s.t}
            </h2>
            <p className="mt-3 text-foreground/85 leading-relaxed">{s.d}</p>
          </div>
        ))}

        <div className="mt-10 rounded-2xl border border-warning/40 bg-warning/5 p-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <div className="font-semibold text-foreground">18+ only. Play responsibly.</div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Betting carries financial risk and may be regulated differently depending on where
            you live. See the <Link to="/responsible" className="text-primary hover:underline">responsible gaming page</Link> for limits and support.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
          <div className="font-display text-xl font-bold text-foreground">Questions about these terms?</div>
          <p className="mt-2 text-sm text-muted-foreground">Message support on WhatsApp and we'll walk you through any clause you're unsure about.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Ask on WhatsApp</span>
          </a>
        </div>
      </section>

      <QuickLinks
        pageCategory="Policies"
        excludePath="/terms"
        title="Related policies"
        subtitle="Privacy, responsible gaming and everything else you agree to when you play."
      />
    </>
  );
}
