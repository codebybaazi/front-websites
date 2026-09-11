import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHeadFor, SITE_ORIGIN } from "@/utils/page-seo";
import { Mail, Send, MessageCircle, ArrowRight, Lock, Wallet, Banknote, Gift, UserRound } from "lucide-react";
import { AIOverview } from "@/components/AIOverview";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { howToJsonLd } from "@/utils/howto-schema";
import { waLink } from "@/lib/whatsapp";

const SUPPORT_EMAIL = "support@fairplayindia.com";

export const Route = createFileRoute("/contact-us")({
  component: ContactUs,
  head: () => pageHeadFor("/contact-us"),
});

function ContactUs() {
  const steps = [
    {
      title: "Open the matching issue page",
      desc: "Login, deposit, withdrawal, bonus or locked ID pages list the usual checks. Try those before you message so the desk is not repeating the same steps.",
    },
    {
      title: "Message official WhatsApp",
      desc: "Use the WhatsApp button on this site. Send the Fairplay ID, the mobile on the ID, and a screenshot. Never share OTP.",
    },
    {
      title: "Email only for a written trail",
      desc: "Use support@fairplayindia.com when you need a copy of the request. Wallet and OTP issues still move faster on WhatsApp.",
    },
  ];

  const howTo = howToJsonLd({
    path: "/contact-us",
    name: "How to contact Fairplay support",
    description:
      "Read the matching issue page, then message official WhatsApp with your Fairplay ID and a screenshot. Email is for a written trail, not ID creation.",
    totalTime: "PT5M",
    steps: steps.map((step) => ({ name: step.title, text: step.desc })),
  });

  const channels = [
    {
      title: "WhatsApp",
      body: "Fastest desk for a new Fairplay ID, OTP login, UPI deposits and payouts. Have the ID and a screenshot ready.",
      href: waLink("Hello Fairplay Support! I need help with my account."),
      external: true,
      cta: "Message WhatsApp",
      icon: MessageCircle,
      accent: true,
    },
    {
      title: "Email",
      body: `Same brand as ${SITE_ORIGIN.replace("https://", "")}. Use email when you need a written copy. WhatsApp still handles live ID and wallet chats.`,
      href: `mailto:${SUPPORT_EMAIL}`,
      external: true,
      cta: SUPPORT_EMAIL,
      icon: Mail,
      accent: false,
    },
    {
      title: "Telegram",
      body: "Fixture notes and pointers only. Do not send UPI or OTP in Telegram. IDs and deposits stay on WhatsApp.",
      href: "/telegram-channel",
      external: false,
      cta: "Telegram channel",
      icon: Send,
      accent: false,
    },
  ];

  const issueHubs = [
    { to: "/login-issues", label: "Login / OTP", desc: "OTP delay, lockout, login loop", icon: Lock },
    { to: "/fairplay-deposit-number", label: "Deposit number", desc: "Official WhatsApp for UPI", icon: Wallet },
    { to: "/deposit-issues", label: "Deposits", desc: "Pending UPI, missing UTR", icon: Wallet },
    { to: "/fairplay-withdrawal-number", label: "Withdrawal number", desc: "Official WhatsApp for payouts", icon: Banknote },
    { to: "/withdrawal-issues", label: "Withdrawals", desc: "Stuck payout, KYC hold", icon: Banknote },
    { to: "/bonus-issues", label: "Bonuses", desc: "Missing credit, wagering", icon: Gift },
    { to: "/account-issues", label: "Locked ID", desc: "KYC pending, access reset", icon: UserRound },
    { to: "/fairplay-customer-care-number", label: "Customer Care Number", desc: "Official WhatsApp for Fairplay", icon: MessageCircle },
    { to: "/whatsapp-support", label: "WhatsApp desk", desc: "How to message the official number", icon: MessageCircle },
  ];

  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      <JsonLd data={howTo} />
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">Official channels only</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9] uppercase">
              Contact <span className="text-primary not-italic">Fairplay</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              WhatsApp is the working desk for Fairplay ID, login and UPI. There is no contact form on this page — a form that does not send a ticket wastes time.
            </p>
          </div>
          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="AI Overview: Contact Us" />
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {channels.map((channel) => (
              <div
                key={channel.title}
                className={`glass-card p-8 border-l-4 flex flex-col ${channel.accent ? "border-l-primary" : "border-l-white/20"}`}
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-5">
                  <channel.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-black text-xl italic uppercase tracking-wider mb-3">{channel.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{channel.body}</p>
                {channel.external ? (
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={channel.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all w-fit"
                  >
                    {channel.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={channel.href}
                    className="inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 rounded-lg font-bold text-sm hover:border-primary/50 transition-all w-fit"
                  >
                    {channel.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 text-center">
            How to get <span className="text-primary not-italic">help</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Three steps that match what the desk actually needs. Skip ads that paste a different number.
          </p>
          <div className="grid gap-6 max-w-3xl mx-auto mb-24">
            {steps.map((step, i) => (
              <div
                key={step.title}
                id={`step-${i + 1}`}
                className="glass-card p-8 flex gap-6 items-start border-white/5"
              >
                <span className="text-primary font-black text-2xl italic tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-black italic uppercase mb-2 tracking-tighter">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 text-center">
            Issue <span className="text-primary not-italic">hubs</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Open the page that matches the problem, then WhatsApp if it is still stuck.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {issueHubs.map((hub) => (
              <Link
                key={hub.to}
                to={hub.to}
                className="glass-card p-6 border border-white/5 hover:border-primary/40 transition-all group"
              >
                <hub.icon className="w-7 h-7 text-primary mb-4" />
                <h3 className="font-black italic uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">
                  {hub.label}
                </h3>
                <p className="text-sm text-muted-foreground">{hub.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="Contact Fairplay FAQ"
        faqs={[
          {
            q: "What is the fastest way to reach Fairplay?",
            a: "Official WhatsApp with your Fairplay ID and a screenshot. That beats repeating the story in email.",
          },
          {
            q: "Is there a contact form on this page?",
            a: "No. A form that does not create a ticket is not used. WhatsApp is the desk; email is only for a written copy.",
          },
          {
            q: "What should I include in a message?",
            a: "Fairplay ID, mobile on the ID, amount, UTR, and what you already tried. Missing UTR slows deposits.",
          },
          {
            q: "Is phone support available?",
            a: "WhatsApp is the published channel. Do not call numbers you found on ads.",
          },
        ]}
      />
    </div>
  );
}
