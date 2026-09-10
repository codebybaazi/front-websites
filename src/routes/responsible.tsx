import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, Clock, PauseCircle, HeartHandshake } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const responsibleFaqs: FAQItem[] = [
  { q: "How do I set a deposit limit on Mahadev Book?", a: "Message support on WhatsApp and ask for a daily, weekly or monthly deposit cap. It's applied to your account and can only be raised after a short cooling-off period, not removed instantly." },
  { q: "Can I take a break from betting without closing my account?", a: "Yes. A cooling-off period pauses your account for a set number of days without deleting it, so you can step away and come back later." },
  { q: "How do I self-exclude permanently?", a: "Message support and confirm you want a permanent self-exclusion. Once set, it isn't reversible on request — it's designed to be a real stop, not a pause you can undo the next day." },
  { q: "What are the signs of a gambling problem?", a: "Chasing losses, betting more than you planned, hiding betting activity from family, or feeling anxious when you can't place a bet are common warning signs worth taking seriously." },
  { q: "Is Mahadev Book only for adults?", a: "Yes. A Mahadev Book ID is for individuals aged 18 and over only. Accounts found to belong to a minor are closed and any balance is handled according to our terms." },
  { q: "Where can I get help for problem gambling in India?", a: "Support organizations and helplines exist in most states, and your family doctor is also a reasonable starting point. Mahadev Book support can point you toward account-level tools like limits and self-exclusion, but isn't a substitute for professional help." },
];

export const Route = createFileRoute("/responsible")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Responsible Gaming" },
      { name: "description", content: "Responsible gaming tools on Mahadev Book — deposit limits, cooling-off periods, self-exclusion and how to spot the signs of a gambling problem." },
      { property: "og:title", content: "Mahadev Book Responsible Gaming" },
        { name: "twitter:title", content: "Mahadev Book Responsible Gaming" },
      { property: "og:description", content: "Deposit limits, cooling-off periods and self-exclusion on Mahadev Book — play in control." },
      { property: "og:url", content: "https://mahadevbookss.com/responsible" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book Responsible Gaming" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/responsible" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(responsibleFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Policies", item: "https://mahadevbookss.com/policies" },
            { "@type": "ListItem", position: 3, name: "Responsible Gaming", item: "https://mahadevbookss.com/responsible" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/responsible",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: ResponsiblePage,
});

const tools = [
  { icon: ShieldCheck, t: "Deposit limits", d: "Set a daily, weekly or monthly cap on how much you can add to your wallet. Raising it later takes a cooling-off period, so it can't be undone on impulse." },
  { icon: PauseCircle, t: "Cooling-off period", d: "Pause your account for a set number of days without closing it. A short break, not a permanent decision." },
  { icon: Clock, t: "Session reminders", d: "Ask support to enable reminders after a set amount of time playing, so a session doesn't run longer than you intended." },
  { icon: HeartHandshake, t: "Self-exclusion", d: "A longer-term or permanent block on your account for players who want to stop altogether. Once confirmed, it isn't reversed on request." },
];

function ResponsiblePage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Policies
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Responsible Gaming</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Betting should stay entertainment. Here are the account tools available if you want to
          set limits, take a break, or stop altogether, plus the signs worth paying attention to.
        </p>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Responsible Gaming"
        summary="Mahadev Book offers deposit limits, cooling-off periods, session reminders and self-exclusion as account-level tools for players who want more control over their betting. A Mahadev Book ID is for individuals aged 18 and over only. These tools are set up by messaging support on WhatsApp, and self-exclusion, once confirmed, isn't reversed on request."
        points={[
          "18+ only, no exceptions",
          "Deposit limits can be set daily, weekly or monthly",
          "Cooling-off periods pause an account temporarily",
          "Self-exclusion is a longer-term or permanent block",
          "Limits are raised only after a cooling-off period, not instantly",
          "All tools are set up on the official WhatsApp support line",
        ]}
        keywords={["mahadev book responsible gaming", "mahadev book self exclusion", "mahadev book deposit limit", "play responsibly mahadev book"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Tools you can ask for</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {tools.map((c) => (
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

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="font-display text-2xl font-bold text-foreground">Signs worth paying attention to</h2>
        <p className="mt-3 text-foreground/85 leading-relaxed">
          Betting more than you planned, chasing losses, hiding activity from family, or feeling
          anxious when you can't place a bet are common warning signs. None of these mean
          something is permanently wrong, but they're worth acting on early rather than waiting
          for things to get worse. Setting a limit or taking a cooling-off period costs nothing
          and can be arranged in the same WhatsApp chat you already use for support.
        </p>
      </section>

      <FAQSection title="Mahadev Book Responsible Gaming — FAQs" items={responsibleFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Want to set a limit or take a break?</h2>
        <p className="mt-3 text-muted-foreground">Message support on WhatsApp and it's arranged the same day.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Talk to Support</span>
          </a>
          <Link to="/terms" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Read the terms
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Policies"
        excludePath="/responsible"
        title="Related policies"
        subtitle="Terms, privacy and everything else you agree to when you play."
      />
    </>
  );
}
