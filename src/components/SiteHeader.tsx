import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { navItems, siteName } from "@/data/site";
import { WhatsAppLink } from "@/components/WhatsAppProvider";
import lotusLogo from "@/assets/lotus365-main-logo.png";

const staticTickers: [string, string][] = [
  ["PAYOUT", "avg 47s"],
  ["ONLINE", "12,481 players"],
  ["BONUS", "up to ₹25,000"],
];

const ALLOWED_SPORTS = new Set(["Cricket", "Football", "Tennis"]);

type ApiEvent = {
  eventType: string;
  isInPlay?: boolean;
  event: { id: string; name: string; openDate: string };
  market?: { inPlay?: boolean };
};

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const [liveMatches, setLiveMatches] = useState<string[]>([]);
  const [liveIdx, setLiveIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(
          "https://b2b.max247.co/api/public/exchange/odds/inPlayAndPopularEvents",
        );
        const json = await res.json();
        if (cancelled) return;
        const rows: ApiEvent[] = json?.result?.inPlayEvents ?? [];
        const seen = new Set<string>();
        const names = rows
          .filter((r) => {
            if (!r?.event?.id || !ALLOWED_SPORTS.has(r.eventType)) return false;
            const name = r.event.name ?? "";
            if (!/\s+v(?:s\.?)?\s+/i.test(name)) return false;
            const live =
              !!(r.isInPlay || r.market?.inPlay) &&
              new Date(r.event.openDate).getTime() <= Date.now();
            if (!live) return false;
            if (seen.has(r.event.id)) return false;
            seen.add(r.event.id);
            return true;
          })
          .slice(0, 8)
          .map((r) => `${r.eventType === "Cricket" ? "🏏" : r.eventType === "Tennis" ? "🎾" : "⚽"} ${r.event.name}`);
        setLiveMatches(names);
        setLiveIdx(0);
      } catch (e) {
        if (!cancelled) setLiveMatches([]);
      }
    }
    load();
    const t = setInterval(load, 45000);
    return () => {
      cancelled = true;
      clearInterval(t);
    };
  }, []);

  useEffect(() => {
    if (liveMatches.length <= 1) return;
    const t = setInterval(
      () => setLiveIdx((i) => (i + 1) % liveMatches.length),
      3500,
    );
    return () => clearInterval(t);
  }, [liveMatches.length]);


  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  const closeMobile = () => {
    setMenuOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className="sticky top-0 z-40">
      {/* Ultra-thin ticker rail */}
      <div
        className="text-[10px] lg:text-[11px] tracking-[0.18em] lg:tracking-[0.22em] uppercase"
        style={{ background: "rgb(13 66 55)", color: "oklch(0.9 0.05 90 / 0.7)" }}
      >
        <div className="mx-auto max-w-[1400px] px-3 sm:px-4 xl:px-8 h-7 lg:h-8 flex items-center justify-between gap-3 min-w-0">
          <div className="flex items-center gap-4 lg:gap-8 min-w-0 flex-1">
            <span className="inline-flex items-center gap-2 min-w-0">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full animate-pulse shrink-0"
                style={{
                  background: liveMatches.length ? "#ef4444" : "#94a3b8",
                  boxShadow: liveMatches.length ? "0 0 8px #ef4444" : "none",
                }}
              />
              <span className={`${liveMatches.length ? "text-red-400" : "text-foreground/60"} font-semibold shrink-0`}>
                {liveMatches.length ? "LIVE" : "IDLE"}
              </span>
              <span className="relative inline-block h-4 overflow-hidden text-foreground/90 normal-case tracking-normal text-[11px] lg:text-xs min-w-[140px] lg:min-w-[190px]">
                {liveMatches.length === 0 ? (
                  <span className="absolute inset-0 whitespace-nowrap text-foreground/70">
                    No live matches right now — check back soon
                  </span>
                ) : (
                  liveMatches.map((m, idx) => (
                    <span
                      key={m}
                      className="absolute inset-0 transition-all duration-500 ease-out whitespace-nowrap"
                      style={{
                        opacity: idx === liveIdx ? 1 : 0,
                        transform:
                          idx === liveIdx ? "translateY(0)" : "translateY(6px)",
                      }}
                    >
                      {m}
                    </span>
                  ))
                )}
              </span>
            </span>
            {staticTickers.map(([k, v]) => (
              <span key={k} className="hidden lg:inline-flex items-center gap-2">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--gold)", boxShadow: "0 0 8px var(--gold)" }}
                />
                <span className="text-primary font-semibold">{k}</span>
                <span className="text-foreground/95 normal-case tracking-normal text-xs">{v}</span>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 lg:gap-6 shrink-0">
            <Link to="/lotus365-login" className="hover:text-primary transition-colors">Log in</Link>
            <span className="opacity-30 hidden lg:inline">/</span>
            <WhatsAppLink className="font-semibold text-primary hover:text-accent transition-colors">
              Concierge
            </WhatsAppLink>
          </div>
        </div>
      </div>


      {/* Main bar */}
      <div
        className={`transition-all duration-500 border-b backdrop-blur-2xl ${
          scrolled
            ? "bg-background/90 border-primary/20"
            : "bg-background/75 border-primary/10"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 h-16 sm:h-20">
            {/* Brand block */}
            <Link to="/" className="flex items-center shrink-0 min-w-0">
              <img src={lotusLogo} alt="Lotus365 — India's Most Trusted Online Gaming Platform" className="h-8 sm:h-10 lg:h-11 w-auto" />
            </Link>

            {/* Center nav — text only, gold hairline on hover */}
            <ul
              className="hidden xl:flex items-center gap-0 flex-1 justify-center min-w-0"
              onMouseLeave={() => setOpenMega(null)}
            >
              {navItems.map((item) => {
                const active = openMega === item.label;
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenMega(item.mega ? item.label : null)}
                  >
                    <Link
                      to={item.to}
                      className="relative flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-foreground/95 hover:text-primary transition-colors whitespace-nowrap"
                    >
                      {item.label}
                      {item.mega && (
                        <ChevronDown
                          className={`h-3 w-3 transition-transform duration-300 ${
                            active ? "rotate-180 text-primary" : "opacity-60"
                          }`}
                        />
                      )}
                      <span
                        aria-hidden
                        className={`pointer-events-none absolute left-4 right-4 -bottom-0.5 h-px origin-left transition-transform duration-500 ${
                          active ? "scale-x-100" : "scale-x-0"
                        }`}
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, var(--gold), transparent)",
                        }}
                      />
                    </Link>

                    {item.mega && (
                      <div
                        className={`absolute left-1/2 top-full pt-4 -translate-x-1/2 transition-all duration-300 ${
                          active
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-1 pointer-events-none"
                        }`}
                      >
                        <div
                          className="w-[520px] rounded-2xl p-6 backdrop-blur-2xl"
                          style={{
                            background:
                              "linear-gradient(180deg, rgb(20 104 86 / 0.98), rgb(13 66 55 / 0.98))",
                            border: "1px solid oklch(0.82 0.15 88 / 0.25)",
                            boxShadow:
                              "0 30px 80px -20px rgb(0 0 0 / 0.5), 0 0 0 1px oklch(0.82 0.15 88 / 0.05) inset",
                          }}
                        >
                          <div className="flex items-center justify-between mb-5">
                            <div className="font-display text-xs uppercase tracking-[0.35em] text-primary/80">
                              {item.label}
                            </div>
                            <div
                              className="h-px flex-1 mx-4"
                              style={{
                                background:
                                  "linear-gradient(90deg, oklch(0.82 0.15 88 / 0.4), transparent)",
                              }}
                            />
                            <div className="font-mono text-[10px] text-foreground/85">
                              — {item.mega.groups.length} sets
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                            {item.mega.groups.map((g) => (
                              <div key={g.heading}>
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
                                  {g.heading}
                                </div>
                                <ul className="space-y-2.5">
                                  {g.items.map((mi) => (
                                    <li key={mi.label}>
                                      <Link
                                        to={mi.to}
                                        onClick={() => setOpenMega(null)}
                                        className="group/mi flex items-baseline gap-2 text-sm text-foreground/95 hover:text-primary transition-colors"
                                      >
                                        <span
                                          className="h-px w-3 shrink-0 self-center transition-all duration-300 group-hover/mi:w-6"
                                          style={{ background: "var(--gold)" }}
                                        />
                                        <span className="font-medium">{mi.label}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/lotus365-login"
                className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-foreground/90 hover:text-primary border transition-colors"
                style={{ borderColor: "oklch(0.82 0.15 88 / 0.35)" }}
              >
                Log in
              </Link>
              <WhatsAppLink
                className="btn-whatsapp group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-emerald-deep transition-all hover:shadow-[0_10px_30px_-8px_oklch(0.82_0.15_88/0.6)] whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.9 0.11 92), oklch(0.78 0.16 82))",
                }}
              >
                <span className="hidden xs:inline sm:inline">Play now</span>
                <span className="xs:hidden sm:hidden">Play</span>
                <span className="inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-emerald-deep/15 transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </WhatsAppLink>
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((o) => !o)}
                className="xl:hidden h-9 w-9 sm:h-10 sm:w-10 shrink-0 grid place-items-center rounded-full border border-primary/25 text-primary"
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden fixed inset-0 top-16 sm:top-20 z-30 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background:
            "linear-gradient(180deg, rgb(13 66 55 / 0.98), rgb(17 84 70 / 0.98))",
          backdropFilter: "blur(24px)",
        }}
      >
        <div className="h-full overflow-y-auto overscroll-contain px-4 sm:px-8 py-6 sm:py-8 pb-32">
          <div className="flex items-center justify-between mb-6">
            <div className="text-[10px] font-mono uppercase tracking-[0.35em] text-primary/70">
              — Navigation
            </div>
            <div className="font-mono text-[10px] text-foreground/85">
              {navItems.length} sections
            </div>
          </div>

          <ul className="divide-y divide-primary/15">
            {navItems.map((item, i) => {
              const expanded = mobileExpanded === item.label;
              const hasMega = !!item.mega;
              return (
                <li key={item.label} className="py-1">
                  <div className="flex items-stretch">
                    <Link
                      to={item.to}
                      onClick={closeMobile}
                      className="flex-1 flex items-baseline gap-4 py-4 group min-w-0"
                    >
                      <span className="font-mono text-xs text-primary/60 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors truncate">
                        {item.label}
                      </span>
                    </Link>
                    {hasMega ? (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={expanded}
                        onClick={() =>
                          setMobileExpanded(expanded ? null : item.label)
                        }
                        className="shrink-0 h-10 w-10 my-auto grid place-items-center rounded-full border border-primary/25 text-primary transition-transform"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            expanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <span className="my-auto shrink-0 h-10 w-10 grid place-items-center">
                        <ArrowUpRight className="h-4 w-4 text-primary/60" />
                      </span>
                    )}
                  </div>

                  {hasMega && (
                    <div
                      className={`grid transition-all duration-300 ${
                        expanded
                          ? "grid-rows-[1fr] opacity-100 pb-5"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="rounded-2xl p-5 space-y-5"
                          style={{
                            background: "rgb(9 50 41 / 0.6)",
                            border: "1px solid oklch(0.82 0.15 88 / 0.18)",
                          }}
                        >
                          {item.mega!.groups.map((g) => (
                            <div key={g.heading}>
                              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
                                {g.heading}
                              </div>
                              <ul className="space-y-1">
                                {g.items.map((mi) => (
                                  <li key={mi.label}>
                                    <Link
                                      to={mi.to}
                                      onClick={closeMobile}
                                      className="flex items-center gap-3 py-2 text-sm text-foreground/95 hover:text-primary transition-colors"
                                    >
                                      <span
                                        className="h-px w-3 shrink-0"
                                        style={{ background: "var(--gold)" }}
                                      />
                                      <span className="font-medium truncate">
                                        {mi.label}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <Link
              to="/lotus365-login"
              onClick={closeMobile}
              className="text-center py-3 rounded-full border border-primary/35 text-sm font-semibold"
            >
              Log in
            </Link>
            <WhatsAppLink
              onClick={closeMobile}
              className="btn-whatsapp text-center py-3 rounded-full text-sm font-semibold text-emerald-deep"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.9 0.11 92), oklch(0.78 0.16 82))",
              }}
            >
              Play now
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </header>
  );
}
