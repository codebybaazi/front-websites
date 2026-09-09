import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, Headphones, Clock, AlertTriangle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const careFaqs: FAQItem[] = [
  { q: "What is the Mahadev Book customer care number?", a: "It's the official WhatsApp line Mahadev Book uses for support — new IDs, deposits, withdrawals, KYC and general account help. We only publish it as a click-to-chat link, not a printed digit, since the line can rotate for security." },
  { q: "How do I reach Mahadev Book customer care?", a: "Tap the WhatsApp button on this page and describe your issue in a line or two. A real person picks it up, not a bot menu, and most queries get a first reply in under a minute." },
  { q: "Is Mahadev Book customer care available 24/7?", a: "Yes. The desk runs around the clock, including IPL nights, Diwali and cup finals, so a match running late doesn't mean waiting until morning for help." },
  { q: "Does the same customer care number handle deposits and withdrawals?", a: "Yes. One WhatsApp line covers new ID creation, deposits, withdrawal requests, KYC verification and account issues, so you're not bounced between different numbers for different problems." },
  { q: "Which languages does Mahadev Book customer care support?", a: "English and Hindi on every chat, with regional-language agents available on request for Marathi, Gujarati, Tamil and Telugu." },
  { q: "Why does the Mahadev Book customer care number keep changing?", a: "The line is rotated periodically as a security measure, the same as the deposit and withdrawal lines. That's why this page never prints a fixed digit and instead links straight to the current, active chat." },
  { q: "What should I do if an old customer care number stops replying?", a: "Come back to this page and use the WhatsApp button here instead of guessing at an old saved contact. Numbers from old screenshots or forwarded messages can be inactive or, in some cases, belong to someone else entirely." },
  { q: "Can customer care help if I forgot my Mahadev Book login details?", a: "Yes. Message the WhatsApp line with your registered mobile number, and the team verifies your identity against your KYC before resetting access." },
];

export const Route = createFileRoute("/mahadev-book-customer-care-number")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Customer Care Number — Official WhatsApp Support Line" },
      { name: "description", content: "Reach the official Mahadev Book customer care number on WhatsApp for IDs, deposits, withdrawals and KYC help. One tap chat link, no numbers to copy, with real 24/7 human support." },
      { property: "og:title", content: "Mahadev Book Customer Care Number — Official WhatsApp Support Line" },
      { property: "og:description", content: "Chat with the official Mahadev Book customer care line on WhatsApp. Real human support 24/7 for IDs, deposits, withdrawals and account issues." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-customer-care-number" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book Customer Care Number — official WhatsApp support line" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-customer-care-number" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(careFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Mahadev Book Customer Care Number", item: "https://mahadevbookss.com/mahadev-book-customer-care-number" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-customer-care-number",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: CustomerCareNumberPage,
});

const careSteps = [
  { n: "01", t: "Open WhatsApp", d: "Tap the WhatsApp button on this page to start a chat with the official Mahadev Book customer care line." },
  { n: "02", t: "Describe your issue", d: "New ID, stuck deposit, delayed withdrawal, KYC, login trouble — just say what's going on." },
  { n: "03", t: "A real person replies", d: "No bot menu to click through. An agent picks up the chat and works the issue with you directly." },
  { n: "04", t: "Issue gets resolved", d: "Most requests are closed out in the same conversation, often within minutes." },
];

const careTopics = [
  { icon: Headphones, t: "New ID & onboarding", d: "Get a verified Mahadev Book ID and walkthrough on how the platform works." },
  { icon: ShieldCheck, t: "KYC & account safety", d: "Verify your identity, update details, or flag suspicious activity on your account." },
  { icon: Clock, t: "Deposit & withdrawal help", d: "Chase a stuck payment, confirm a withdrawal, or ask about processing times." },
  { icon: MessageCircle, t: "General questions", d: "Odds, markets, bonuses, or anything else about using Mahadev Book day to day." },
];

function CustomerCareNumberPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Customer Care
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Customer Care Number</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          The Mahadev Book customer care number is the official WhatsApp line our team uses for
          support — new IDs, deposits, withdrawals, KYC and account issues. We don't print it as a
          digit anywhere on this site, since the line can rotate for security. Use the button
          below to open a chat with the current, verified support line.
        </p>

        <div className="mt-8 max-w-md rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Official support line</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Tap below to chat directly with the verified Mahadev Book customer care number on WhatsApp.
          </p>
          <div className="mt-5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <span className="btn-glow-content flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Customer Care Number"
        summary="The Mahadev Book customer care number is the official WhatsApp line used for support on a Mahadev Book cricket ID. It covers new ID creation, deposits, withdrawals, KYC verification and general account help, staffed by real people 24 hours a day in English and Hindi. It's only shared as a click-to-chat WhatsApp link on this page, never printed as a fixed digit, since the line is rotated periodically for account security."
        points={[
          "Click-to-chat WhatsApp link, not a printed digit",
          "24/7 human support, not a bot menu",
          "Handles IDs, deposits, withdrawals, KYC and account issues",
          "English and Hindi, with regional languages on request",
          "First replies typically land in under a minute",
          "Always start from the WhatsApp button on this page",
        ]}
        keywords={["mahadev book customer care number", "customer care number mahadev book", "mahadev book", "mahadev book support number"]}
      />

      {/* What care handles */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What this number can help with</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">One WhatsApp line, four kinds of requests.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {careTopics.map((c) => (
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

      {/* How to reach */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How to reach customer care</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Four steps, usually done inside one WhatsApp chat.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {careSteps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-2xl font-bold text-gradient-gold">{s.n}</span>
              <h3 className="mt-3 font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <div className="rounded-2xl border border-warning/40 bg-warning/5 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-bold text-foreground">Only message the WhatsApp button on this page</h2>
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Mahadev Book rotates its customer care line from time to time to keep accounts secure.
            That's why we never print it as a number anywhere on this site. Screenshots of old
            numbers circulate on social media and forwarded messages, and some of them are no
            longer active or, worse, belong to someone else entirely. Always start your chat from
            the WhatsApp button above rather than a number saved from an old post or message.
          </p>
          <div className="mt-5 flex flex-wrap gap-6 text-sm text-foreground">
            <div className="flex items-center gap-2"><Headphones className="h-4 w-4 text-primary" /> Real people, not a bot menu</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> KYC-checked before account changes</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Support around the clock</div>
          </div>
        </div>
      </section>

      <FAQSection title="Mahadev Book Customer Care Number — FAQs" items={careFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Need help right now?</h2>
        <p className="mt-3 text-muted-foreground">Chat with customer care above and get a reply from a real person, usually in under a minute.</p>
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
        excludePath="/mahadev-book-customer-care-number"
        title="Keep exploring"
        subtitle="Deposits, withdrawals, KYC and everything else on the support desk."
      />
    </>
  );
}
