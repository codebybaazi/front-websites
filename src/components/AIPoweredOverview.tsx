import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Info, Sparkles } from "lucide-react";

export interface OverviewSource {
  label: string;
  to: string;
}

interface AIPoweredOverviewProps {
  title: string;
  summary: string;
  eyebrow?: string;
  badge?: string;
  highlights?: string[];
  sources?: OverviewSource[];
  footnote?: string;
  className?: string;
}

/**
 * Shared "AI overview" panel: summary, scannable highlights and the internal
 * pages the summary was built from. Used on /matches and /schedule, and meant
 * to be dropped on any hub that needs the same block.
 */
export function AIPoweredOverview({
  title,
  summary,
  eyebrow = "Page notes",
  badge = "From this site",
  highlights = [],
  sources = [],
  footnote = "Fairplay cricket desk summary — not a betting tip. Confirm the slip after you log in.",
  className = "",
}: AIPoweredOverviewProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      aria-labelledby="ai-overview-heading"
      className={`relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/[0.04] to-transparent ${className}`}
    >
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />

      <div className="relative z-10 p-8 md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-xl shrink-0">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-tight text-primary block mb-1">
                {eyebrow}
              </span>
              <h2
                id="ai-overview-heading"
                className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-none"
              >
                {title}
              </h2>
            </div>
          </div>
          {badge && (
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[9px] font-black uppercase tracking-[0.25em] text-white/50">
              {badge}
            </span>
          )}
        </div>

        <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium max-w-4xl">
          {summary}
        </p>

        {highlights.length > 0 && (
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/5 bg-background/40 px-4 py-3.5"
              >
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-white/70 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {sources.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mr-1">
              Sources
            </span>
            {sources.map((source) => (
              <Link
                key={`${source.to}-${source.label}`}
                to={source.to as never}
                className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-card/40 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-white/60 hover:border-primary/40 hover:text-primary transition-all"
              >
                {source.label}
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        )}

        <div className="pt-6 flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          <Info className="w-3 h-3" />
          {footnote}
        </div>
      </div>
    </motion.section>
  );
}
