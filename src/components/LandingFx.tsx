export function LiveTicker() {
  const items = [
    "🏏 IPL live markets open",
    "⚡ UPI payouts in <3 min",
    "🎰 Teen Patti tables hot",
    "🏆 400% welcome bonus",
    "🔥 2M+ players trust Lotus365",
    "💎 VIP cashback up to 20%",
    "📱 WhatsApp ID in 60 sec",
    "🎯 Andar Bahar live now",
  ];
  const loop = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden border-y border-primary/25 bg-emerald-950/40 backdrop-blur-sm"
      aria-label="Live updates"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-emerald-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-emerald-950 to-transparent z-10" />
      <div className="ticker-track py-2.5">
        {loop.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-6 text-xs sm:text-sm uppercase tracking-[0.22em] text-primary/90 whitespace-nowrap"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AuroraBackdrop() {
  const sparkles = Array.from({ length: 14 });
  return (
    <>
      <div className="aurora-wrap" aria-hidden>
        <span className="aurora-blob a" />
        <span className="aurora-blob b" />
        <span className="aurora-blob c" />
      </div>
      <div className="sparkle-layer" aria-hidden>
        {sparkles.map((_, i) => (
          <i
            key={i}
            style={{
              left: `${(i * 7 + 5) % 100}%`,
              top: `${70 + (i % 3) * 10}%`,
              animationDelay: `${(i * 0.6) % 6}s`,
              animationDuration: `${5 + (i % 4)}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
