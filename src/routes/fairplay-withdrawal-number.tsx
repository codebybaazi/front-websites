import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHeadFor } from "@/utils/page-seo";
import { MessageCircle, Phone, ShieldCheck, Banknote, AlertTriangle } from "lucide-react";
import { AIOverview } from "@/components/AIOverview";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { howToJsonLd } from "@/utils/howto-schema";
import {
  formatWhatsAppDisplay,
  getWhatsAppNumber,
  subscribeWhatsAppNumber,
  waLink,
} from "@/lib/whatsapp";

export const Route = createFileRoute("/fairplay-withdrawal-number")({
  component: FairplayWithdrawalNumber,
  head: () => pageHeadFor("/fairplay-withdrawal-number"),
});

const WITHDRAWAL_WA_TEXT =
  "Hi Fairplay, I need help with a withdrawal. Here is my Fairplay ID, amount and UTR.";

function useLiveWhatsAppNumber() {
  const [number, setNumber] = useState(getWhatsAppNumber);
  useEffect(() => subscribeWhatsAppNumber(setNumber), []);
  return number;
}

function FairplayWithdrawalNumber() {
  const number = useLiveWhatsAppNumber();
  const display = formatWhatsAppDisplay(number);
  const href = waLink(WITHDRAWAL_WA_TEXT);

  const steps = [
    {
      title: "Request payout in the Fairplay wallet",
      desc: "Wait until cricket or casino markets settle, then open Withdraw on your Fairplay ID. The Fairplay Withdrawal number is for tracking that request, not for sending a private UPI ID in chat.",
    },
    {
      title: "Use the UPI or bank saved on the ID",
      desc: "Pay out to the same name as the Fairplay account. Keep the UTR. Typical credit is about 180 minutes from the official result. KYC can add time.",
    },
    {
      title: "Tap the Fairplay Withdrawal number if the payout sits",
      desc: "Open the WhatsApp link on this page. Send the Fairplay ID, amount, and UTR. One message is enough. Do not open a second ID while you wait.",
    },
  ];

  const howTo = howToJsonLd({
    path: "/fairplay-withdrawal-number",
    name: "How to use the Fairplay Withdrawal number",
    description:
      "Request a Fairplay payout in the wallet, then message the official Fairplay Withdrawal number on WhatsApp if the UPI or bank credit is late.",
    totalTime: "PT10M",
    steps: steps.map((step) => ({ name: step.title, text: step.desc })),
  });

  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      <JsonLd data={howTo} />
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,211,102,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-bold tracking-widest uppercase mb-8">
              <Phone className="w-4 h-4" /> Live number from this site
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              Fairplay <span className="text-[#25D366] not-italic">Withdrawal number</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Official Fairplay Withdrawal number on WhatsApp. This is the withdrawal number Fairplay uses when a UPI or bank payout is late. The digits come from the published number list for this domain, so they match the other WhatsApp buttons on the site.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-16">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-card p-8 md:p-10 border-[#25D366]/40 bg-[#25D366]/5 text-center hover:border-[#25D366] transition-colors"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#25D366] mb-4">
                Fairplay Withdrawal number
              </p>
              <p className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">{display}</p>
              <p className="text-sm text-muted-foreground mb-8">
                Tap to open WhatsApp with a payout message. Use this line for Fairplay withdrawal help.
              </p>
              <span className="inline-flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-black italic uppercase tracking-widest">
                <MessageCircle className="w-5 h-5" /> WhatsApp this number
              </span>
            </a>
          </div>

          <div className="container max-w-5xl mx-auto px-4">
            <AIOverview title="AI Overview: Fairplay Withdrawal Number" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4 space-y-8">
          <article className="glass-card p-8 md:p-12 border-primary/20 rounded-[40px]">
            <h2 className="text-2xl font-black italic uppercase mb-4">What the Fairplay Withdrawal number is</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fairplay is the cricket ID and sports exchange this site covers. People searching Fairplay Withdrawal number or withdrawal number Fairplay usually want the WhatsApp desk that tracks UPI and bank payouts after they hit Withdraw in the wallet.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The number on this page is the same WhatsApp contact loaded for fairplayindia.com. When the desk rotates the line, this page updates with it. If an ad or Telegram chat shows a different Fairplay Withdrawal number, ignore it and use the WhatsApp link here.
            </p>
          </article>

          <article className="glass-card p-8 md:p-12 border-primary/20 rounded-[40px]">
            <h2 className="text-2xl font-black italic uppercase mb-8 flex items-center gap-3">
              <Banknote className="w-6 h-6 text-primary" /> How to use the withdrawal number Fairplay publishes
            </h2>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={step.title} id={`step-${i + 1}`} className="flex gap-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shrink-0 text-xs">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold italic uppercase mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="glass-card p-8 border-primary/20">
              <h2 className="text-xl font-black italic uppercase mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> What to send
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fairplay ID, amount, payout method (UPI or bank), and the UTR if you have one. That is enough for the desk to look up a pending Fairplay withdrawal.
              </p>
            </article>
            <article className="glass-card p-8 border-primary/20">
              <h2 className="text-xl font-black italic uppercase mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" /> What not to send
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Password or OTP. Fairplay support will not ask you to read the OTP aloud. Start the payout on the wallet screen. Message this number only if the credit is late.
              </p>
            </article>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed text-center px-4">
            Wallet steps: <Link to="/withdrawal-guide" className="text-primary underline underline-offset-4">Fairplay withdrawal guide</Link>
            . Stuck payouts: <Link to="/withdrawal-issues" className="text-primary underline underline-offset-4">withdrawal issues</Link>
            . Same WhatsApp line for UPI top-ups: <Link to="/fairplay-deposit-number" className="text-primary underline underline-offset-4">Fairplay Deposit number</Link>.
          </p>
        </div>
      </section>

      <FAQSection
        title="Fairplay Withdrawal number questions"
        faqs={[
          {
            q: "What is the Fairplay Withdrawal number?",
            a: "It is the official WhatsApp number published on this site for Fairplay payout help. The digits shown above are the live Fairplay Withdrawal number for this domain.",
          },
          {
            q: "Is withdrawal number Fairplay the same as WhatsApp support?",
            a: "Yes. Fairplay uses one official WhatsApp line. This page is for people who searched Fairplay Withdrawal number. The WhatsApp support page also covers ID creation and login.",
          },
          {
            q: "Can I withdraw by sending money to this number?",
            a: "No. Request the payout in the Fairplay wallet first. Message this number only if the UPI or bank credit is late. A chat UPI ID is not the Fairplay Withdrawal number.",
          },
          {
            q: "How long should I wait before using the Fairplay Withdrawal number?",
            a: "Wait until the market settles, then about 180 minutes from the official result for the UPI or bank credit. If it is still missing after that, WhatsApp the Fairplay ID, amount and UTR.",
          },
          {
            q: "Why might the Fairplay Withdrawal number look different from an old screenshot?",
            a: "The desk can rotate the line. This page reads the current number for fairplayindia.com. Use the WhatsApp button here, not a number saved from last season.",
          },
        ]}
      />
    </div>
  );
}
