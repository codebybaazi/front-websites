import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Send, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { fetchWhatsAppNumber, formatWhatsAppDisplay } from "@/lib/whatsapp";
import { ogImageMeta, OFFICE_ADDRESS_LINE, postalAddressJsonLd, SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/lib/seo";
import { OfficialNumberCard } from "@/components/OfficialNumberCard";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const contactFaqs: FAQItem[] = [
  { q: "How do I get a Mahadev Book cricket ID?", a: "Message our WhatsApp with your name and preferred deposit method. You'll receive a verified online cricket ID with login URL, user ID and password in under 5 minutes." },
  { q: "Is support really available 24/7?", a: "Yes — human agents (not bots) staff WhatsApp, Telegram and phone 24 hours a day, including IPL nights, Diwali and cup finals." },
  { q: "What's the fastest way to reach Mahadev Book?", a: "WhatsApp. The live number is printed on this page with a wa.me chat link and a tel: call link. Replies typically land in under 60 seconds. For a written record, email support@mahadevbookss.com." },
  { q: "Which languages does Mahadev Book support?", a: "English and Hindi across every channel. Regional-language agents are available on request for Marathi, Gujarati, Tamil and Telugu." },
  { q: "Can I get help with deposits, withdrawals or KYC on the same channel?", a: "Yes — the same WhatsApp desk handles new IDs, UPI deposits, minute-scale withdrawals and KYC verification. No transfers, no ticket queues." },
];

export const Route = createFileRoute("/contact")({
  loader: async () => ({ waNumber: await fetchWhatsAppNumber() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Get a Cricket Betting ID on WhatsApp | Contact Mahadev Book" },
      { name: "description", content: "Get your online cricket ID or betting ID on WhatsApp in under 5 minutes. Message the Mahadev Book team on WhatsApp, Telegram, phone or email — 24/7." },
      { property: "og:title", content: "Get a Cricket Betting ID on WhatsApp | Contact Mahadev Book" },
        { name: "twitter:title", content: "Get a Cricket Betting ID on WhatsApp | Contact Mahadev Book" },
      { property: "og:description", content: "Message us on WhatsApp for a verified cricket ID in under 5 minutes. 24/7 human support in Hindi and English." },
      { property: "og:url", content: "https://mahadevbookss.com/contact" },
      ...ogImageMeta("Contact Mahadev Book — Cricket Betting ID on WhatsApp, 24/7 Support"),
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/contact" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(contactFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://mahadevbookss.com/contact" },
          ],
        }),
      },
      // Name + phone (fetched from the same WhatsApp-number source used for wa.me
      // links). Address is a virtual office, not a walk-in location — flagged as
      // such rather than presented as a physical premises.
      ...(loaderData?.waNumber
        ? [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mahadev Book",
              telephone: `+${loaderData.waNumber}`,
              url: "https://mahadevbookss.com/contact",
              email: SUPPORT_EMAIL,
              address: postalAddressJsonLd(),
            }),
          }]
        : []),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/contact",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),

  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const { whatsappUrl, number } = useWhatsApp();
  const phoneDisplay = formatWhatsAppDisplay(number) || "+91 —";

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Contact
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Get your cricket ID in <span className="text-gradient-gold">5 minutes on WhatsApp</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          The fastest way to get your online cricket ID or betting ID is a WhatsApp message. Our team is on for you around the clock — every match, every night, every holiday. Office: {OFFICE_ADDRESS_LINE}.
        </p>
        <OfficialNumberCard
          heading="Official WhatsApp & phone"
          blurb="This is the live Mahadev Book line from our number list. Chat on WhatsApp or tap to call — same desk for IDs, deposits, withdrawals and KYC."
          showAddress
        />
      </section>

      <AIOverview
        title="AI Overview — Contact Mahadev Book"
        summary="The fastest way to get a Mahadev Book cricket ID is WhatsApp — most IDs are issued in under 5 minutes, 24 hours a day, 365 days a year. The support desk also handles deposits, withdrawals, KYC and account issues on Telegram, phone and email in English and Hindi."
        points={[
          "New cricket ID setup: ~5 minutes on WhatsApp",
          "24/7 human support — never a chatbot maze",
          "Channels: WhatsApp, Telegram, phone, email",
          "KYC, deposit & withdrawal help on the same desk",
          "English and Hindi support",
          "Priority desk for VIP and agent accounts",
        ]}
        keywords={["get cricket id on whatsapp", "mahadev book contact", "betting id support", "24/7 cricket id"]}
      />


      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: MessageCircle, t: "WhatsApp", d: phoneDisplay, cta: "Chat now", href: whatsappUrl },
            { icon: Send, t: "Telegram", d: "@mahadevbook_official", cta: "Open Telegram", href: "https://t.me/" },
            { icon: Phone, t: "Phone", d: phoneDisplay, cta: "Call us", href: number ? `tel:+${number}` : undefined },
            { icon: Mail, t: "Email", d: SUPPORT_EMAIL, cta: "Send email", href: SUPPORT_MAILTO },
          ].map((c) => {
            const inner = (
              <>
                <div className="h-11 w-11 rounded-lg bg-primary/15 text-primary grid place-items-center"><c.icon className="h-5 w-5" /></div>
                <div className="mt-4 font-semibold">{c.t}</div>
                <div className="text-sm text-muted-foreground mt-1 break-all">{c.d}</div>
                <div className="mt-4 text-xs uppercase tracking-widest text-primary font-semibold">{c.cta} →</div>
              </>
            );
            const className = "rounded-2xl border border-border bg-card p-6 block hover:border-primary/40 transition";
            return c.href ? (
              <a key={c.t} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className={className}>
                {inner}
              </a>
            ) : (
              <div key={c.t} className={className}>{inner}</div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8 pb-16">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <h2 className="text-2xl font-bold">Request a call back</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Prefer we reach out? Drop your details and a Mahadev Book manager will contact you within an hour.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="text-sm">
                <span className="block mb-1 text-muted-foreground">Your name</span>
                <input required className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 outline-none focus:border-primary" placeholder="e.g. Rohan" />
              </label>
              <label className="text-sm">
                <span className="block mb-1 text-muted-foreground">Mobile</span>
                <input required type="tel" className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 outline-none focus:border-primary" placeholder="+91" />
              </label>
              <label className="text-sm sm:col-span-2" htmlFor="preferred-contact">
                <span className="block mb-1 text-muted-foreground">Preferred contact</span>
                <select id="preferred-contact" className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 outline-none focus:border-primary">
                  <option>WhatsApp</option>
                  <option>Telegram</option>
                  <option>Phone call</option>
                </select>
              </label>
              <label className="text-sm sm:col-span-2">
                <span className="block mb-1 text-muted-foreground">Message (optional)</span>
                <textarea rows={4} className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 outline-none focus:border-primary" placeholder="Tell us what you're after." />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Send request
              </Button>
              {sent && (
                <span className="text-sm text-primary">Thanks — we'll be in touch shortly.</span>
              )}
            </div>
          </form>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div className="font-semibold">Support hours</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                24 hours a day, 7 days a week. Even on Diwali and cup finals.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <div className="font-semibold">Privacy</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Details you share are only used to set up your account. We never sell or forward your information to third parties.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FAQSection title="Contact & Support — FAQs" items={contactFaqs} />
      <QuickLinks
        pageCategory="Support"
        excludePath="/contact"
        title="Before you message us"
        subtitle="Common answers on deposits, withdrawals, KYC and account access."
      />
    </>
  );
}
