import { MessageCircle } from "lucide-react";

export function WhatsAppNumberCard({
  href,
  displayNumber,
  kicker,
}: {
  href: string;
  displayNumber: string;
  kicker: string;
}) {
  if (!displayNumber) {
    return (
      <a
        href={href}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3 font-semibold text-secondary-foreground transition hover:opacity-90"
      >
        <MessageCircle className="h-5 w-5" />
        Chat on WhatsApp
      </a>
    );
  }

  return (
    <a
      href={href}
      className="mx-auto mt-8 inline-flex flex-col items-center gap-2 rounded-3xl border border-border bg-card/80 px-8 py-5 backdrop-blur transition hover:border-secondary"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        {kicker}
      </span>
      <span className="text-3xl font-black tracking-wide text-foreground md:text-4xl">
        {displayNumber}
      </span>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
        <MessageCircle className="h-4 w-4" />
        Chat on WhatsApp
      </span>
    </a>
  );
}
