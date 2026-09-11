import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Headphones, MessageCircle, Wallet, Banknote } from "lucide-react";
import {
  formatWhatsAppDisplay,
  getWhatsAppNumber,
  subscribeWhatsAppNumber,
  waLink,
} from "@/lib/whatsapp";

const lines = [
  {
    to: "/fairplay-deposit-number" as const,
    title: "Deposit number",
    desc: "WhatsApp help when a Fairplay UPI credit is pending. Pay in the wallet first, then tap this number with the UTR.",
    waText: "Hi Fairplay, I need help with a deposit. Here is my Fairplay ID, amount and UTR screenshot.",
    icon: Wallet,
    cta: "Read deposit guide",
  },
  {
    to: "/fairplay-withdrawal-number" as const,
    title: "Withdrawal number",
    desc: "WhatsApp help when a Fairplay payout is late. Request Withdraw in the wallet, then message this number with the UTR.",
    waText: "Hi Fairplay, I need help with a withdrawal. Here is my Fairplay ID, amount and UTR.",
    icon: Banknote,
    cta: "Read withdrawal guide",
  },
  {
    to: "/fairplay-customer-care-number" as const,
    title: "Customer Care Number",
    desc: "Official Fairplay WhatsApp for ID, login OTP, deposits and payouts. Use this line, not a number from an ad.",
    waText: "Hi Fairplay customer care, I need help with my Fairplay ID. I will send the details and a screenshot.",
    icon: Headphones,
    cta: "Read care number guide",
  },
];

function useLiveWhatsAppNumber() {
  const [number, setNumber] = useState(getWhatsAppNumber);
  useEffect(() => subscribeWhatsAppNumber(setNumber), []);
  return number;
}

export function HomeOfficialNumbers() {
  const number = useLiveWhatsAppNumber();
  const display = formatWhatsAppDisplay(number);

  return (
    <section
      className="px-4 py-10 md:py-14 relative overflow-hidden border-y-4 border-[#25D366] bg-[#0b1a12]"
      aria-labelledby="official-numbers-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[28rem] h-[28rem] bg-[#25D366]/25 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 right-1/5 w-[22rem] h-[22rem] bg-primary/20 blur-[90px] rounded-full" />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <p className="text-[#25D366] text-xs font-black tracking-[0.25em] uppercase mb-3">Official WhatsApp</p>
            <h2 id="official-numbers-heading" className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9] text-white">
              Fairplay numbers
            </h2>
          </div>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            Live deposit, withdrawal and customer care numbers for this site. Same digits as the WhatsApp buttons. Tap the number to chat, or open the page for the full guide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {lines.map((line) => (
            <article
              key={line.to}
              className="rounded-3xl bg-[#25D366] text-[#052e16] p-6 md:p-7 shadow-[0_0_40px_rgba(37,211,102,0.35)] ring-2 ring-white/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <line.icon className="w-5 h-5" />
                <h3 className="text-lg font-black italic uppercase tracking-tight">{line.title}</h3>
              </div>
              <a
                href={waLink(line.waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl bg-[#052e16] text-[#25D366] px-4 py-3 mb-4 hover:bg-black transition-colors"
              >
                <span className="text-xl md:text-2xl font-black tracking-tight tabular-nums">{display}</span>
                <MessageCircle className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
              </a>
              <p className="text-sm leading-relaxed text-[#052e16]/80 mb-5">{line.desc}</p>
              <Link
                to={line.to}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#052e16] text-[#25D366] px-4 py-2 text-sm font-black tracking-tight hover:bg-black hover:text-[#25D366] transition-colors"
              >
                {line.cta}
                <ChevronRight className="w-4 h-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
