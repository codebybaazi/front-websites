import { useRouterState } from "@tanstack/react-router";
import { PAGE_FAQS } from "@/data/pageFaqs";

/**
 * Renders a unique FAQ block for the current route (if one is defined in
 * PAGE_FAQS). The matching FAQPage JSON-LD is emitted server-side by the
 * route's own `head()` via `buildPageFaqLd()`, not from this component, so
 * it's present in the initial HTML for crawlers that don't execute JS.
 *
 * Pages that already ship their own FAQ block (home, casino, cricket pages)
 * are intentionally omitted from PAGE_FAQS to avoid duplicates.
 */
export function PageFaqs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const faqs = PAGE_FAQS[pathname];

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-6 pb-16">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
          FAQ
        </span>
        <h2 className="mt-3 text-2xl font-bold text-card-foreground md:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-xl border border-border/70 bg-background/60 p-4 open:border-primary/60"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-foreground md:text-base">
                <h3 className="faq-question text-sm font-semibold text-foreground md:text-base">{q}</h3>
              </summary>
              <p className="faq-answer mt-2 text-sm leading-relaxed text-muted-foreground">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
