import { Mail, MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import {
  formatPhoneDisplay,
  LIVE_WA_NUMBER_SLUGS,
  SUPPORT_EMAIL,
} from "@/lib/whatsapp";

export function LiveWhatsAppNumber({
  text,
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const { number, url, urlWithText } = useWhatsApp();
  const display = formatPhoneDisplay(number);
  if (!display) return null;
  const href = text ? urlWithText(text) : url;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full gold-border bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/15 ${className}`}
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      <span>
        {display}
        <span className="text-foreground/80 font-normal"> · Chat on WhatsApp</span>
      </span>
    </a>
  );
}

export function LiveSupportEmail({ className = "" }: { className?: string }) {
  return (
    <a
      href={`mailto:${SUPPORT_EMAIL}`}
      className={`inline-flex items-center gap-2 rounded-full gold-border bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/15 ${className}`}
    >
      <Mail className="h-4 w-4 shrink-0" />
      {SUPPORT_EMAIL}
    </a>
  );
}

export function shouldShowLiveWaNumber(slug: string): boolean {
  return LIVE_WA_NUMBER_SLUGS.has(slug);
}
