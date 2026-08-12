import { Sparkles, CheckCircle2, Zap, ShieldCheck, Target } from "lucide-react";

interface AiOverviewProps {
  summary: string;
  highlights: string[];
}

export function AiOverview({ summary, highlights }: AiOverviewProps) {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[oklch(0.08_0.01_260)] min-h-[400px] content-visibility-auto">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          
          {/* Left: Branding & Status */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 backdrop-blur-md">
              <div className="relative">
                <Sparkles className="h-5 w-5 text-accent animate-pulse" />
                <div className="absolute inset-0 blur-sm bg-accent/40 animate-pulse" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-primary">Intelligence Hub</span>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
                Verified 
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                  Platform Insights
                </span>
              </h2>
              <p className="mt-6 text-lg text-foreground/60 leading-relaxed font-medium">
                Real-time analysis of services, trust signals, and performance metrics for the 2026 season.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, label: "Encrypted" },
                { icon: Zap, label: "Verified" },
                { icon: Target, label: "Live" }
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-[10px] font-bold uppercase tracking-wider text-foreground/50">
                  <badge.icon className="h-3 w-3 text-accent" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Summary Card */}
            <div className="group relative sm:col-span-2 overflow-hidden rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 transition-all hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Sparkles className="h-24 w-24" />
              </div>
              <div className="relative">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-4">Executive Brief</div>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90 italic">
                  "{summary}"
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="sm:col-span-2 grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-3xl border border-foreground/5 bg-foreground/[0.02] backdrop-blur-sm hover:bg-foreground/[0.04] transition-colors">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 ring-1 ring-accent/30">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/80 leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
