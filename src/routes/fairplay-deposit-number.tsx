import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHeadFor } from "@/utils/page-seo";
import { MessageCircle, Phone, ShieldCheck, Wallet, AlertTriangle } from "lucide-react";
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

export const Route = createFileRoute("/fairplay-deposit-number")({
  component: FairplayDepositNumber,
  head: () => pageHeadFor("/fairplay-deposit-number"),
});

const DEPOSIT_WA_TEXT =
  "Hi Fairplay, I need help with a deposit. Here is my Fairplay ID, amount and UTR screenshot.";

function useLiveWhatsAppNumber() {
  const [number, setNumber] = useState(getWhatsAppNumber);
  useEffect(() => subscribeWhatsAppNumber(setNumber), []);
  return number;
}

function FairplayDepositNumber() {
  const number = useLiveWhatsAppNumber();
  const display = formatWhatsAppDisplay(number);
  const href = waLink(DEPOSIT_WA_TEXT);

  const steps = [
    {
      title: "Log in with your Fairplay ID",
      desc: "The Fairplay Deposit number is for players who already have an ID. Open the wallet on the site or app first. New players start on WhatsApp for ID creation, then come back here for deposits.",
    },
    {
      title: "Pay inside the Fairplay wallet",
      desc: "Choose UPI (GPay, PhonePe, Paytm), complete the transfer, and keep the UTR. The deposit number Fairplay publishes is a WhatsApp line, not a UPI ID you type into your bank app.",
    },
    {
      title: "Tap the Fairplay Deposit number if credit is slow",
      desc: "Open the WhatsApp link on this page. Send the Fairplay ID, the amount, and a screenshot of the UTR. One message is enough. Do not send a second payment while the first is pending.",
    },
  ];

  const howTo = howToJsonLd({
    path: "/fairplay-deposit-number",
    name: "How to use the Fairplay Deposit number",
    description:
      "Fund the Fairplay wallet with UPI, then message the official Fairplay Deposit number on WhatsApp if the credit is pending.",
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
              Fairplay <span className="text-[#25D366] not-italic">Deposit number</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Official Fairplay Deposit number on WhatsApp. This is the deposit number Fairplay uses for UPI wallet help, pending credits, and Fairplay ID checks. The digits come from the published number list for this domain, so they match the buttons elsewhere on the site.
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
                Fairplay Deposit number
              </p>
              <p className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">{display}</p>
              <p className="text-sm text-muted-foreground mb-8">
                Tap to open WhatsApp with a deposit message. Ask for UPI help only on this line.
              </p>
              <span className="inline-flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-black italic uppercase tracking-widest">
                <MessageCircle className="w-5 h-5" /> WhatsApp this number
              </span>
            </a>
          </div>

          <div className="container max-w-5xl mx-auto px-4">
            <AIOverview title="AI Overview: Fairplay Deposit Number" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4 space-y-8">
          <article className="glass-card p-8 md:p-12 border-primary/20 rounded-[40px]">
            <h2 className="text-2xl font-black italic uppercase mb-4">What the Fairplay Deposit number is</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fairplay is the cricket ID and sports exchange this site covers: IPL, football, tennis, and live casino on one login. People searching Fairplay Deposit number or deposit number Fairplay usually want the WhatsApp desk that handles UPI, not a personal bank account pasted in a Telegram ad.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The number on this page is the same WhatsApp contact loaded for fairplayindia.com. When the desk rotates the line, this page updates with it. If a flyer, Instagram bio, or friend shows a different Fairplay Deposit number, ignore it and use the WhatsApp link here.
            </p>
          </article>

          <article className="glass-card p-8 md:p-12 border-primary/20 rounded-[40px]">
            <h2 className="text-2xl font-black italic uppercase mb-8 flex items-center gap-3">
              <Wallet className="w-6 h-6 text-primary" /> How to use the deposit number Fairplay publishes
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
                Fairplay ID, registered mobile, amount, UTR, and a payment screenshot. That is enough for the desk to match a pending Fairplay deposit.
              </p>
            </article>
            <article className="glass-card p-8 border-primary/20">
              <h2 className="text-xl font-black italic uppercase mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" /> What not to send
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Password, OTP, or money to a UPI ID that arrived only in chat. Fairplay support will not ask you to read the OTP aloud. Deposit through the wallet screen, then chase credit on this number.
              </p>
            </article>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed text-center px-4">
            Step-by-step UPI is on the <Link to="/deposit-guide" className="text-primary underline underline-offset-4">Fairplay deposit guide</Link>
            . Pending credits: <Link to="/deposit-issues" className="text-primary underline underline-offset-4">deposit issues</Link>
            . Same WhatsApp line for ID and login: <Link to="/whatsapp-support" className="text-primary underline underline-offset-4">Fairplay WhatsApp support</Link>.
          </p>
        </div>
      </section>

      <FAQSection
        title="Fairplay Deposit number questions"
        faqs={[
          {
            q: "What is the Fairplay Deposit number?",
            a: "It is the official WhatsApp number published on this site for Fairplay UPI help. The digits shown above are the live Fairplay Deposit number for this domain.",
          },
          {
            q: "Is deposit number Fairplay the same as WhatsApp support?",
            a: "Yes. Fairplay uses one official WhatsApp line. This page is for people who searched Fairplay Deposit number. The WhatsApp support page covers ID creation and login as well.",
          },
          {
            q: "Can I deposit by sending money to this number?",
            a: "No. Open the Fairplay wallet, pay UPI there, then message this number only if the credit is missing. A chat UPI ID is not the Fairplay Deposit number.",
          },
          {
            q: "Why might the Fairplay Deposit number look different from an old screenshot?",
            a: "The desk can rotate the line. This page reads the current number for fairplayindia.com. Use the WhatsApp button here, not a number saved from last season.",
          },
          {
            q: "Do I need a Fairplay ID before I use the deposit number?",
            a: "Yes. Get the Fairplay ID first, fund the wallet, then bet cricket or casino. Paying a random UPI before you have an ID is how people lose the transfer.",
          },
        ]}
      />
    </div>
  );
}
