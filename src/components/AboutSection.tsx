import { ShieldCheck, Trophy, Users, Zap, Sparkles, ChevronRight } from "lucide-react";

function LotusMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="about-lg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.95 0.09 92)" />
          <stop offset="1" stopColor="oklch(0.76 0.16 82)" />
        </linearGradient>
      </defs>
      <g fill="url(#about-lg)" opacity="0.95">
        <path d="M32 8c3 8 3 16 0 24-3-8-3-16 0-24z" />
        <path d="M32 56c-3-8-3-16 0-24 3 8 3 16 0 24z" transform="rotate(180 32 44)" />
        <path d="M14 20c8 2 14 6 18 12-8-2-14-6-18-12z" />
        <path d="M50 20c-8 2-14 6-18 12 8-2 14-6 18-12z" />
        <path d="M14 44c8-2 14-6 18-12-8 2-14 6-18 12z" />
        <path d="M50 44c-8-2-14-6-18-12 8 2 14 6 18 12z" />
      </g>
      <circle cx="32" cy="32" r="3.5" fill="oklch(0.95 0.09 92)" />
    </svg>
  );
}

const stats = [
  { icon: Users, k: "2M+", l: "Verified Players" },
  { icon: Trophy, k: "500+", l: "Games & Markets" },
  { icon: Zap, k: "<3 min", l: "Avg Payouts" },
  { icon: ShieldCheck, k: "24/7", l: "Human Support" },
];

const pillars = [
  {
    icon: ShieldCheck,
    t: "Trust, engineered in",
    d: "Bank-grade encryption, verified payment rails and licensed operators — every play protected from tap to withdrawal.",
  },
  {
    icon: Trophy,
    t: "A legacy of winners",
    d: "Since 2016, Lotus365 has been India's home for cricket, casino and live sports — powering millions of legendary sessions.",
  },
  {
    icon: Sparkles,
    t: "Premium, always",
    d: "Curated markets, VIP concierge and instant IDs. No filler, no friction — just the gold standard of online play.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Ambient background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, oklch(0.82 0.15 88 / 0.15), transparent 45%), radial-gradient(circle at 85% 80%, oklch(0.45 0.1 165 / 0.35), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: brand story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 gold-border rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-primary/90 mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              About Lotus365
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              India's <span className="gold-text">most trusted</span> gaming brand
              <span className="block text-foreground/90 text-2xl md:text-3xl font-normal mt-4">
                Most Trusted Since <span className="gold-text font-semibold">2016</span>
              </span>
            </h2>

            <p className="text-foreground/90 leading-relaxed mt-7 text-lg max-w-2xl">
              Lotus365 is the premium destination for online cricket, casino and sports betting —
              built for players who expect more. From IPL to live roulette, we bring you sharper
              odds, instant IDs and lightning-fast payouts, all wrapped in a bank-grade secure
              experience trusted by over 2 million players.
            </p>

            {/* Pillars */}
            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              {pillars.map(({ icon: Icon, t, d }) => (
                <div
                  key={t}
                  className="glass-card rounded-2xl p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_10px_40px_-15px_oklch(0.82_0.15_88/0.4)]"
                >
                  <div
                    className="h-10 w-10 rounded-xl grid place-items-center mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.88 0.14 90 / 0.25), oklch(0.72 0.17 78 / 0.1))",
                    }}
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-display text-base mb-1.5">{t}</div>
                  <p className="text-xs text-foreground/85 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <a
                href="/about-us"
                className="btn-gold btn-gold-hover px-7 py-3.5 rounded-full inline-flex items-center gap-2 text-sm"
              >
                Discover our story <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919000012345?text=Hi%20Lotus365%2C%20I%20want%20to%20get%20my%20Lotus%20ID."
                target="_blank"
                rel="noreferrer"
                className="gold-border px-7 py-3.5 rounded-full inline-flex items-center gap-2 text-sm text-primary hover:bg-primary/5 transition-colors cursor-pointer"
              >
                Get your Lotus ID
              </a>
            </div>
          </div>

          {/* Right: brand card + stats */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main brand card */}
              <div
                className="relative rounded-3xl p-8 md:p-10 overflow-hidden gold-border"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.36 0.08 165), oklch(0.22 0.05 165))",
                }}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 80% 10%, oklch(0.82 0.15 88 / 0.5), transparent 55%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <LotusMark className="h-12 w-12" />
                    <span className="text-[10px] tracking-[0.25em] text-primary gold-border rounded-full px-3 py-1 uppercase">
                      Est · 2016
                    </span>
                  </div>

                  <div className="text-xs uppercase tracking-[0.28em] text-primary/80">
                    Lotus365
                  </div>
                  <div className="font-display text-3xl md:text-4xl mt-2 leading-tight">
                    Play like a <span className="gold-text">winner</span>.
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed mt-4">
                    A decade of building India's most loved gaming platform — one instant payout at
                    a time.
                  </p>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3 mt-8">
                    {stats.map(({ icon: Icon, k, l }) => (
                      <div
                        key={l}
                        className="rounded-2xl p-4 bg-background/30 backdrop-blur-sm border border-primary/10 transition-colors duration-300 hover:border-primary/30"
                      >
                        <Icon className="h-4 w-4 text-primary mb-2" />
                        <div className="font-display text-2xl gold-text leading-none">{k}</div>
                        <div className="text-[11px] text-foreground/85 mt-1.5 uppercase tracking-wider">
                          {l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating tagline chip */}
              <div className="absolute -bottom-5 -left-5 glass-card rounded-2xl px-5 py-3 hidden md:flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-foreground/95">
                    Trusted since
                  </div>
                  <div className="font-display text-lg gold-text leading-none">2016</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
