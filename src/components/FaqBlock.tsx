import { HelpCircle, Sparkles } from "lucide-react";
import type { Faq } from "@/lib/derive-page-faqs";

/**
 * Pure presentational FAQ section — no schema injection, no data-fetching.
 * Callers are responsible for the FAQPage JSON-LD (usually in a route's
 * `head()`, where it's guaranteed to be server-rendered).
 */
export function FaqBlock({ topic, faqs }: { topic: string; faqs: Faq[] }) {
  if (faqs.length === 0) return null;
  return (
    <section
      aria-labelledby="page-faq-heading"
      className="mx-auto max-w-5xl px-6 py-16 md:py-20"
    >
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-primary/80 mb-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Frequently asked · {topic}
        </div>
        <h2
          id="page-faq-heading"
          className="font-display text-3xl md:text-4xl leading-[1.1]"
        >
          Quick answers about <span className="gold-text">{topic}</span>.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            className="group glass-card rounded-2xl p-6 relative overflow-hidden hover:border-primary/40 transition-colors"
          >
            <summary className="cursor-pointer list-none">
              <div className="flex items-start gap-3">
                <div className="grid place-items-center h-8 w-8 rounded-full bg-primary/10 border border-primary/30 shrink-0 mt-0.5">
                  <HelpCircle className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/60 mb-1.5">
                    Q{String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-display text-lg md:text-xl leading-snug group-hover:gold-text transition-colors pr-6">
                    {f.q}
                  </div>
                </div>
                <Sparkles className="h-4 w-4 text-primary/60 shrink-0 mt-2 transition-transform group-open:rotate-180" />
              </div>
            </summary>
            <p className="text-sm text-foreground/90 leading-relaxed mt-4 pl-11">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
