import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Scale, FileText, ShieldCheck, Globe } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const legalFaqs: FAQItem[] = [
  { q: "Is online betting legal in India?", a: "It sits in a grey area under the Public Gambling Act 1867, a colonial-era law that doesn't clearly address online formats. Most states treat skill-based games differently from pure chance games, and a small number of states, including Sikkim, Nagaland and Meghalaya, have their own licensing frameworks for online betting." },
  { q: "Where is Mahadev Book based?", a: "Like most platforms serving the Indian market, Mahadev Book operates offshore, using licensed backend gaming software rather than being incorporated as an Indian gaming company." },
  { q: "Can I get in legal trouble for using Mahadev Book?", a: "Enforcement against individual players is rare in most Indian states, but laws vary by state and can change. If you're unsure about your local rules, it's worth checking before playing." },
  { q: "Does Mahadev Book follow anti-money-laundering practices?", a: "Yes. Mandatory KYC, payment matching to verified accounts, and monitoring for unusual account activity are standard parts of how deposits and withdrawals are handled." },
  { q: "Is there an age requirement?", a: "Yes, strictly 18 and over. Accounts found to belong to a minor are closed under the terms and conditions." },
  { q: "How does Mahadev Book handle disputes?", a: "Disputes are worked through the WhatsApp support desk first. Bets are settled against official results from the relevant sporting body, and pricing or technical errors are corrected and explained directly." },
];

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Mahadev Book — Legal Status & Compliance Explained" },
      { name: "description", content: "Where online betting stands legally in India, how Mahadev Book operates, and the compliance practices — KYC, AML checks and dispute handling — behind the platform." },
      { property: "og:title", content: "Mahadev Book — Legal Status & Compliance Explained" },
      { property: "og:description", content: "Online betting's legal status in India and how Mahadev Book handles compliance, KYC and disputes." },
      { property: "og:url", content: "https://mahadevbookss.com/legal" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book legal status and compliance" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/legal" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(legalFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://mahadevbookss.com/about" },
            { "@type": "ListItem", position: 3, name: "Legal", item: "https://mahadevbookss.com/legal" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/legal",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: LegalPage,
});

const points = [
  { icon: Scale, t: "A grey area, not a clear yes or no", d: "The Public Gambling Act 1867 predates online betting entirely, so states interpret and enforce it differently." },
  { icon: Globe, t: "Offshore operation", d: "Like most platforms serving Indian players, Mahadev Book operates outside India using licensed backend gaming software." },
  { icon: ShieldCheck, t: "AML and KYC built in", d: "Verified identity and payment matching aren't optional extras — they're how deposits and withdrawals are processed by default." },
  { icon: FileText, t: "Disputes handled directly", d: "No arbitration process to navigate — disputes go through the same WhatsApp desk that handles everything else." },
];

function LegalPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Legal
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Legal Status & Compliance</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Where online betting actually stands under Indian law, how Mahadev Book operates within
          that, and the compliance checks running behind every account.
        </p>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Legal Status"
        summary="Online betting in India sits in a grey area under the Public Gambling Act 1867, a law that predates online formats and is interpreted differently across states. Mahadev Book, like most platforms serving Indian players, operates offshore using licensed backend gaming software. KYC and anti-money-laundering checks are built into deposits and withdrawals, and disputes are handled directly through the WhatsApp support desk rather than a formal arbitration process."
        points={[
          "Legal status varies by state under a colonial-era law",
          "Some states (Sikkim, Nagaland, Meghalaya) license online betting directly",
          "Platform operates offshore with licensed backend software",
          "KYC and AML checks built into deposits and withdrawals",
          "18+ only, strictly enforced",
          "Disputes handled directly on WhatsApp",
        ]}
        keywords={["mahadev book legal", "is online betting legal in india", "mahadev book compliance", "mahadev book kyc aml"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {points.map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{p.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection title="Mahadev Book Legal & Compliance — FAQs" items={legalFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Have a compliance question?</h2>
        <p className="mt-3 text-muted-foreground">Message support on WhatsApp and we'll answer it directly.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Ask on WhatsApp</span>
          </a>
          <Link to="/terms" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Read the terms
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Company"
        excludePath="/legal"
        title="More about Mahadev Book"
        subtitle="Our story, safety practices, reviews and why players choose us."
      />
    </>
  );
}
