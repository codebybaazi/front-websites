import { useRouterState } from "@tanstack/react-router";
import { Sparkles, HelpCircle } from "lucide-react";
import { getPageFaqs } from "@/lib/page-faqs";
import { toFaqPageJsonLd } from "@/lib/derive-page-faqs";
import { ALL_PAGE_SLUGS } from "@/data/pages";
import { ALL_GUIDE_SLUGS } from "@/data/guides";
import { ALL_CASE_SLUGS } from "@/data/cases";

const PAGE_SLUG_SET = new Set(ALL_PAGE_SLUGS);
const GUIDE_SLUG_SET = new Set(ALL_GUIDE_SLUGS);
const CASE_SLUG_SET = new Set(ALL_CASE_SLUGS);

/**
 * Renders a page-specific FAQ section + FAQPage JSON-LD, but only as a
 * fallback for routes that have no real page content to derive FAQs from
 * (standalone .tsx routes like /lotus365-register or /matches).
 *
 * Skipped entirely for:
 * - the home page (own hand-authored FAQ)
 * - individual blog posts (own hand-authored FAQ + FAQPage schema)
 * - any /$page, /betting-guides/$slug or /case-study/$slug route — those now
 *   render a genuinely content-derived FaqBlock via ContentPage itself
 *   (see src/lib/derive-page-faqs.ts), so this generic version would double up.
 * - a handful of standalone pages that already ship their own hand-authored FAQ.
 */
export function PageFaq() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const clean = (pathname || "/").replace(/\/+$/, "") || "/";
  const segments = clean.split("/").filter(Boolean);

  const HANDWRITTEN_SKIP = new Set<string>([
    "/",
    "",
    "/lotus365-win",
    "/lotus365-blue",
    "/lotus365-customer-care",
    "/lotus365-apk",
    "/lotus365-app-download",
    "/lotus365-login",
    "/is-lotus365-legal-in-india",
    "/lotus365-vs-skyexchange",
    "/lotus365-vs-betbhai9",
    "/lotus365-vs-betbook247",
    "/lotus365-vs-diamondexch",
    "/lotus365-vs-fairplay",
    "/lotus365-vs-lords-exchange",
  ]);
  if (HANDWRITTEN_SKIP.has(clean)) return null;

  // Individual blog posts already own a unique FAQ + schema.
  if (segments[0] === "blog" && segments.length === 2 && segments[1] !== "category") {
    return null;
  }
  // Individual betting-guide / case-study pages now render their own derived FAQ.
  if (segments[0] === "betting-guides" && segments.length === 2 && GUIDE_SLUG_SET.has(segments[1])) {
    return null;
  }
  if (segments[0] === "case-study" && segments.length === 2 && CASE_SLUG_SET.has(segments[1])) {
    return null;
  }
  // Any /$page route backed by real PageContent now renders its own derived FAQ.
  if (segments.length === 1 && PAGE_SLUG_SET.has(segments[0])) {
    return null;
  }

  const { topic, faqs } = getPageFaqs(pathname);

  const jsonLd = toFaqPageJsonLd(faqs);

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
        <p className="text-foreground/90 mt-4 leading-relaxed">
          Straight, verified answers from the Lotus365 concierge — updated as
          policies and payouts evolve.
        </p>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
