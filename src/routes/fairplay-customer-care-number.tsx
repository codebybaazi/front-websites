import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHeadFor } from "@/utils/page-seo";
import { MessageCircle, Phone, ShieldCheck, Headphones, AlertTriangle } from "lucide-react";
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

export const Route = createFileRoute("/fairplay-customer-care-number")({
  component: FairplayCustomerCareNumber,
  head: () => pageHeadFor("/fairplay-customer-care-number"),
});

const CARE_WA_TEXT =
  "Hi Fairplay customer care, I need help with my Fairplay ID. I will send the details and a screenshot.";

function useLiveWhatsAppNumber() {
  const [number, setNumber] = useState(getWhatsAppNumber);
  useEffect(() => subscribeWhatsAppNumber(setNumber), []);
  return number;
}

function FairplayCustomerCareNumber() {
  const number = useLiveWhatsAppNumber();
  const display = formatWhatsAppDisplay(number);
  const href = waLink(CARE_WA_TEXT);

  const steps = [
    {
      title: "Keep the Fairplay ID at hand",
      desc: "The Fairplay Customer Care number handles ID, login OTP, deposits and payouts. If you do not have an ID yet, say so in the first WhatsApp message and share the mobile number you will log in with.",
    },
    {
      title: "Tap the Customer Care number Fairplay publishes here",
      desc: "Open the WhatsApp link on this page. The digits come from the published number list for this domain, so they match the other official buttons on the site.",
    },
    {
      title: "Send the issue once, with proof",
      desc: "Write the Fairplay ID, what is stuck (login, deposit, withdrawal), and a screenshot. One thread is enough. Do not share the OTP or password.",
    },
  ];

  const howTo = howToJsonLd({
    path: "/fairplay-customer-care-number",
    name: "How to use the Fairplay Customer Care number",
    description:
      "Open the official Fairplay Customer Care number on WhatsApp, send your Fairplay ID and a screenshot, and wait for the desk to reply.",
    totalTime: "PT5M",
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
              Fairplay <span className="text-[#25D366] not-italic">Customer Care number</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Official Fairplay Customer Care number on WhatsApp. This is the customer care number Fairplay uses for ID help, login OTP, UPI deposits and payouts. The digits come from the published number list for this domain.
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
                Fairplay Customer Care number
              </p>
              <p className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">{display}</p>
              <p className="text-sm text-muted-foreground mb-8">
                Tap to open WhatsApp with a customer care message. Use this line for Fairplay support.
              </p>
              <span className="inline-flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-black italic uppercase tracking-widest">
                <MessageCircle className="w-5 h-5" /> WhatsApp this number
              </span>
            </a>
          </div>

          <div className="container max-w-5xl mx-auto px-4">
            <AIOverview title="AI Overview: Fairplay Customer Care Number" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4 space-y-8">
          <article className="glass-card p-8 md:p-12 border-primary/20 rounded-[40px]">
            <h2 className="text-2xl font-black italic uppercase mb-4">What the Fairplay Customer Care number is</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fairplay is the cricket ID and sports exchange this site covers. People searching Fairplay Customer Care number or customer care number Fairplay usually want the WhatsApp desk, not a call centre that picks up on a landline.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The number on this page is the same WhatsApp contact loaded for fairplayindia.com. When the desk rotates the line, this page updates with it. If an ad, Telegram group or Instagram bio shows a different Fairplay Customer Care number, ignore it and use the WhatsApp link here.
            </p>
          </article>

          <article className="glass-card p-8 md:p-12 border-primary/20 rounded-[40px]">
            <h2 className="text-2xl font-black italic uppercase mb-8 flex items-center gap-3">
              <Headphones className="w-6 h-6 text-primary" /> How to use the customer care number Fairplay publishes
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
                Fairplay ID, registered mobile, and a screenshot of the login, deposit or withdrawal screen. Mention the amount and UTR if money is involved.
              </p>
            </article>
            <article className="glass-card p-8 border-primary/20">
              <h2 className="text-xl font-black italic uppercase mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" /> What not to send
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Password or OTP. Fairplay customer care will not ask you to read the OTP aloud. Do not pay a UPI ID that arrived only in chat.
              </p>
            </article>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed text-center px-4">
            Same WhatsApp line for wallet help:{" "}
            <Link to="/fairplay-deposit-number" className="text-primary underline underline-offset-4">
              Deposit number
            </Link>{" "}
            and{" "}
            <Link to="/fairplay-withdrawal-number" className="text-primary underline underline-offset-4">
              Withdrawal number
            </Link>
            . How the desk works:{" "}
            <Link to="/whatsapp-support" className="text-primary underline underline-offset-4">
              Fairplay WhatsApp support
            </Link>
            . Hub of issue pages:{" "}
            <Link to="/support" className="text-primary underline underline-offset-4">
              Fairplay support
            </Link>
            .
          </p>
        </div>
      </section>

      <FAQSection
        title="Fairplay Customer Care number questions"
        faqs={[
          {
            q: "What is the Fairplay Customer Care number?",
            a: "It is the official WhatsApp number published on this site for Fairplay ID, login and payment help. The digits shown above are the live Fairplay Customer Care number for this domain.",
          },
          {
            q: "Is customer care number Fairplay a phone line I can call?",
            a: "The working desk is WhatsApp. Tap the number on this page to open chat. There is no separate call-centre number listed on this site.",
          },
          {
            q: "Is the Fairplay Customer Care number the same as WhatsApp support?",
            a: "Yes. Fairplay uses one official WhatsApp line. This page is for people who searched Fairplay Customer Care number. The WhatsApp support page covers how to get an ID on that same line.",
          },
          {
            q: "Can Fairplay customer care create an ID?",
            a: "Yes. Share the mobile number you will log in with, complete OTP on your phone, then keep the Fairplay ID the desk sends.",
          },
          {
            q: "Why might the Fairplay Customer Care number look different from an old screenshot?",
            a: "The desk can rotate the line. This page reads the current number for fairplayindia.com. Use the WhatsApp button here, not a number saved from last season.",
          },
        ]}
      />
    </div>
  );
}
