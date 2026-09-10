import { MessageCircle, Phone } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { formatWhatsAppDisplay } from "@/lib/whatsapp";
import { OFFICE_ADDRESS_LINE } from "@/lib/seo";

export function OfficialNumberCard({
  heading,
  blurb,
  showAddress = false,
}: {
  heading: string;
  blurb: string;
  showAddress?: boolean;
}) {
  const { number, whatsappUrl } = useWhatsApp();
  const display = formatWhatsAppDisplay(number);

  return (
    <div className="mt-8 max-w-md rounded-2xl border border-primary/30 bg-primary/5 p-6">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{heading}</div>
      {display ? (
        <p className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            {display}
          </a>
        </p>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">Fetching the current Mahadev Book line…</p>
      )}
      <p className="mt-2 text-sm text-muted-foreground">{blurb}</p>
      {showAddress && (
        <p className="mt-2 text-sm text-muted-foreground">Office: {OFFICE_ADDRESS_LINE}</p>
      )}
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          <span className="btn-glow-content flex items-center gap-2">
            <MessageCircle className="h-4 w-4" /> WhatsApp {display || ""}
          </span>
        </a>
        {number ? (
          <a
            href={`tel:+${number}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary/50"
          >
            <Phone className="h-4 w-4" /> Call {display}
          </a>
        ) : null}
      </div>
    </div>
  );
}
