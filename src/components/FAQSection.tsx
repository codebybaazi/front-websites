import { HelpCircle } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

export function FAQSection({ title = "Frequently Asked Questions", items }: FAQSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      <div className="mt-8 space-y-4">
        {items.map((f) => (
          <details key={f.q} className="rounded-xl border border-border bg-card p-5 group">
            <summary className="cursor-pointer font-semibold flex items-start gap-2 list-none">
              <HelpCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
              <span>{f.q}</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground pl-6">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
