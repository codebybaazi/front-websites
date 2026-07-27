import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, WA } from "@/components/site-layout";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Cricbet99 — 24/7 WhatsApp Support for Players" },
      { name: "description", content: "Reach Cricbet99 customer care 24/7 on WhatsApp, phone or email. Get help with account access, deposits, withdrawals and general queries." },
      { property: "og:title", content: "Contact Cricbet99" },
      { property: "og:description", content: "Real humans on WhatsApp, phone and email — round the clock." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const channels = [
  { icon: MessageCircle, title: "WhatsApp (fastest)", value: "Message us anytime", href: WA, tag: "Recommended" },
  { icon: Phone, title: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
  { icon: Mail, title: "Email", value: "support@cricbet99.com", href: "mailto:support@cricbet99.com" },
  { icon: Clock, title: "Hours", value: "Open 24 hours × 7 days" },
];

function Contact() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={<>Contact Cricbet99 — <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>24/7 WhatsApp Support</span></>}
        subtitle="Whether you need help setting up your Cricbet99 ID, clarifying a deposit, chasing a withdrawal or understanding a market — our support team is available 24/7. WhatsApp is the fastest way to reach us."
      />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {channels.map((c) => {
            const inner = (
              <>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  {c.tag && <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">{c.tag}</span>}
                </div>
                <p className="mt-2 text-foreground/75">{c.value}</p>
              </>
            );
            return c.href ? (
              <a key={c.title} href={c.href} className="rounded-2xl border border-primary/20 bg-background/60 p-7 transition-all hover:-translate-y-1 hover:border-primary/60">
                {inner}
              </a>
            ) : (
              <div key={c.title} className="rounded-2xl border border-primary/20 bg-background/60 p-7">{inner}</div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-primary/25 bg-background/50 p-10">
          <h2 className="text-2xl font-black">Play responsibly</h2>
          <p className="mt-4 text-foreground/75">
            Online gaming involves financial risk and should be treated strictly as entertainment. You must be 18 years or older to use Cricbet99. Set personal deposit and time limits, and reach out to our support team if betting starts to affect your wellbeing — we're here to help you play safely.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
