import { Sparkles } from "lucide-react";

type Props = {
  title?: string;
  summary: string;
  points: string[];
  keywords?: string[];
};

/**
 * AI Overview / TL;DR block.
 * Machine- and human-readable summary optimized for AI search
 * (Google AI Overviews, ChatGPT, Perplexity) and featured snippets.
 * Uses a <section> with aria-label and a definition-style list so
 * crawlers can lift a clean answer.
 */
export function AIOverview({ title = "AI Overview", summary, points, keywords }: Props) {
  return (
    <section
      aria-label="AI overview and quick summary"
      className="mx-auto max-w-6xl px-6 py-6"
    >
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 md:p-5">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <h2 className="font-display text-base font-bold text-foreground">{title}</h2>
        </div>
        <p className="text-sm leading-relaxed text-foreground/90">{summary}</p>
        <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <li key={p} className="flex gap-2 text-sm text-foreground/80">
              <span className="text-primary mt-0.5">•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        {keywords && keywords.length > 0 && (
          <p className="mt-3 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground/70">Topics:</span>{" "}
            {keywords.join(" · ")}
          </p>
        )}
      </div>
    </section>
  );
}
