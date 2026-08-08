import { Sparkles, CheckCircle2 } from "lucide-react";

interface AiOverviewProps {
  summary: string;
  highlights: string[];
}

export function AiOverview({ summary, highlights }: AiOverviewProps) {
  return (
    <section className="w-full py-8 sm:py-12">
      <div className="relative overflow-hidden border-y border-primary/30 bg-[oklch(0.12_0.02_260)] p-1 shadow-2xl">
        <div className="bg-gradient-to-b from-[oklch(0.15_0.03_260)] to-[oklch(0.1_0.02_260)] p-6 sm:p-12">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/20 ring-1 ring-accent/40">
                <Sparkles className="h-5 w-5 text-accent animate-pulse" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Intelligence</div>
                <h2 className="text-xl font-black text-foreground sm:text-2xl">AI Page Overview</h2>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
              {/* Summary */}
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">Executive Summary</div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {summary}
                </p>
              </div>

              {/* Highlights */}
              <div className="rounded-2xl border border-primary/20 bg-background/40 p-5 backdrop-blur-sm">
                <div className="text-[10px] font-black uppercase tracking-widest text-accent">Key Highlights</div>
                <ul className="mt-4 space-y-3">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-foreground/75 sm:text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Footer badge */}
            <div className="mt-8 flex items-center gap-2 border-t border-primary/10 pt-6">
              <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Verified by Cricbet99 AI · 2026 Edition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
