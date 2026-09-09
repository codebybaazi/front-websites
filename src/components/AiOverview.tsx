import { Sparkles } from "lucide-react";

export type AiOverviewProps = {
  title?: string;
  summary: string;
  points: string[];
  sources?: { label: string; to: string }[];
};

export function AiOverview({
  title = "AI Overview",
  summary,
  points,
  sources,
}: AiOverviewProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-8">
      <div className="glass-card rounded-2xl p-6 md:p-7 border border-primary/25 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(600px 200px at 0% 0%, oklch(0.82 0.15 88 / 0.12), transparent 60%)",
          }}
        />
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/15 text-primary">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/90">
            {title}
          </div>
          <span className="ml-auto text-[10px] uppercase tracking-widest text-foreground/85">
            Generated summary
          </span>
        </div>

        <p
          id="ai-overview-summary"
          className="text-sm md:text-base text-foreground/95 leading-relaxed mb-4"
        >
          {summary}
        </p>

        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-3">
          {points.map((p) => (
            <li
              key={p}
              className="text-sm text-foreground/90 leading-relaxed pl-4 relative"
            >
              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
              {p}
            </li>
          ))}
        </ul>

        {sources && sources.length > 0 && (
          <div className="mt-4 pt-3 border-t border-primary/15 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[10px] uppercase tracking-widest text-foreground/85">
              Sources
            </span>
            {sources.map((s) => {
              const isExternal = /^https?:\/\//i.test(s.to);
              return (
                <a
                  key={s.to}
                  href={s.to}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-xs text-primary hover:underline underline-offset-4"
                >
                  {s.label}
                  {isExternal && <span aria-hidden> ↗</span>}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}