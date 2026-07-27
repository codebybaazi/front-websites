import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Cricbet99 FAQ — Answers About IDs, Deposits & Payouts" },
      { name: "description", content: "Everything you need to know about Cricbet99: how to register, deposit and withdraw, supported games, legality, security and responsible gaming." },
      { property: "og:title", content: "Cricbet99 FAQ" },
      { property: "og:description", content: "Common questions about Cricbet99 IDs, deposits, withdrawals and support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "What is Cricbet99?", a: "Cricbet99 is a user-access platform that helps Indian players reach agent-assisted online cricket betting and gaming services. We've operated since 2020, offering guided access to cricket, IPL, live casino and other sports with a single verified ID and 24/7 support." },
  { q: "Is Cricbet99 legal in India?", a: "Online gaming in India is regulated at the state level, so rules vary by region. Cricbet99 is intended only for users who are 18 or older and who live in states where online gaming is legally permitted. Every player is responsible for checking their local laws before using the service." },
  { q: "How do I register on Cricbet99?", a: "Tap the WhatsApp button on any page. Registration is handled directly with our support team, who collect basic details, verify a one-time password and create your account for you." },
  { q: "How do I place bets?", a: "Once your ID is active, sign in through the Cricbet99 login, choose your sport or casino table, and follow the on-screen instructions. Cricket matches include Fancy Bets, session markets and match winner options." },
  { q: "How do I deposit funds?", a: "Deposits are handled with support. Supported methods include UPI, Google Pay, PhonePe, Paytm, BHIM, IMPS, RTGS, NEFT and bank transfer. Always confirm payment instructions directly with your account manager." },
  { q: "How do I withdraw?", a: "Withdrawal requests are processed within 24 hours through the same WhatsApp support channel. Funds go directly to your UPI ID or bank account in Indian Rupees." },
  { q: "Are there deposit or withdrawal fees?", a: "Cricbet99 does not charge platform-level fees on deposits or withdrawals. Your bank or payment provider may apply their own charges, which are outside our control." },
  { q: "What currencies are supported?", a: "Transactions are handled in Indian Rupees (INR). Any additional currency options in the future will be communicated to you during setup." },
  { q: "What if I forget my password?", a: "Message our WhatsApp support team and they'll guide you through account recovery after verifying your identity." },
  { q: "Are my personal and financial details secure?", a: "We follow strict data-handling practices, encrypt every transaction and never share your information with third parties. Always confirm instructions with our official support channel to stay safe." },
  { q: "Can I try Cricbet99 without depositing?", a: "New users can request a Cricbet99 Demo ID that lets you explore markets, session bets and Fancy Bets risk-free. You can upgrade to a Sports or Casino ID any time." },
  { q: "What measures are in place for responsible gaming?", a: "We encourage every player to set personal deposit and time limits, treat betting strictly as entertainment and reach out to us if participation starts to affect wellbeing. Support is always available." },
  { q: "Is there an age restriction?", a: "Yes. You must be 18 years or older — or the legal age in your jurisdiction — to use Cricbet99." },
  { q: "How can I contact customer support?", a: "The fastest way is WhatsApp. Tap any WhatsApp button on the site and a verified agent will respond within seconds, 24 hours a day." },
  { q: "Can I close my Cricbet99 account?", a: "Yes. Just message our support team and we'll guide you through the closure process." },
];

function FAQ() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Support"
        title={<>Frequently asked <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>questions.</span></>}
        subtitle="Answers to the questions Cricbet99 players ask us every day — from registration and deposits to withdrawals, security and responsible gaming."
      />
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-primary/20 bg-background/60 p-6 open:border-primary/60">
              <summary className="cursor-pointer list-none text-lg font-bold text-foreground marker:hidden">
                {f.q}
              </summary>
              <p className="mt-3 text-foreground/75">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CTABand heading="Still have questions?" sub="Our WhatsApp team is online 24/7 — send us a message and we'll get right back." />
    </SiteLayout>
  );
}
