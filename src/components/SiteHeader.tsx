import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Gift, Menu, X } from "lucide-react";
import { megaMenu, type MegaMenuItem, type NavItem } from "@/lib/nav";

function NavLink({
  item,
  onNavigate,
  className,
}: {
  item: NavItem;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <Link
      to={item.href}
      {...(item.search ? { search: item.search as never } : {})}
      onClick={onNavigate}
      className={className}
    >
      <span className="min-w-0 truncate">{item.name}</span>
      {item.badge && (
        <span className="shrink-0 rounded-sm bg-flame/15 px-1.5 py-px text-[9px] font-bold uppercase tracking-wider text-flame">
          {item.badge}
        </span>
      )}
    </Link>
  );
}

function DesktopPanel({
  item,
  onNavigate,
}: {
  item: MegaMenuItem;
  onNavigate: () => void;
}) {
  return (
    <div className="border-t border-white/8 bg-ink-deep/98 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
      <div className="container mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-6">
        <div className="mb-4 flex flex-col gap-2 border-b border-white/8 pb-4 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold text-foreground">{item.title}</p>
            <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
          <Link
            to={item.href}
            onClick={onNavigate}
            className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-flame"
          >
            Open {item.title.toLowerCase()}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className={`grid gap-6 lg:gap-10 ${item.sections.length > 1 ? "md:grid-cols-2" : "grid-cols-1"}`}>
          {item.sections.map((section) => (
            <div key={section.name}>
              <h4 className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/70">
                {section.name}
              </h4>
              <div className={`grid gap-0.5 ${section.items.length > 4 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                {section.items.map((sub) => (
                  <NavLink
                    key={sub.name}
                    item={sub}
                    onNavigate={onNavigate}
                    className="group/sub flex items-center justify-between gap-3 rounded-md px-2.5 py-2 text-[13.5px] text-foreground/75 transition-colors hover:bg-primary/10 hover:text-primary"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeItem = megaMenu.find((item) => item.title === desktopMenu) ?? null;

  const openDesktop = (title: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopMenu(title);
  };

  const scheduleDesktopClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDesktopMenu(null), 140);
  };

  useEffect(() => {
    setMobileOpen(false);
    setDesktopMenu(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDesktopMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full bg-ink-deep/92 backdrop-blur-xl"
        onMouseLeave={scheduleDesktopClose}
      >
        <div className="h-[3px] w-full brand-rule" />

        <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-3 sm:px-4 md:h-[4.25rem] md:px-6">
          <div className="flex min-w-0 items-center gap-4 xl:gap-8">
            <Link to="/" className="flex shrink-0 items-center" aria-label="Fairplay home">
              <img src="/logo.png" alt="Fairplay" className="h-6 w-auto object-contain sm:h-7" />
            </Link>

            <nav
              className="hidden items-center lg:flex"
              onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}
            >
              {megaMenu.map((item) => (
                <div key={item.title} onMouseEnter={() => openDesktop(item.title)}>
                  <button
                    type="button"
                    className={`group/nav relative flex items-center gap-1 px-2 py-4 font-display text-[12.5px] font-semibold transition-colors xl:gap-1.5 xl:px-3 xl:text-[13px] ${
                      desktopMenu === item.title ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                    }`}
                    aria-expanded={desktopMenu === item.title}
                    onClick={() => setDesktopMenu(desktopMenu === item.title ? null : item.title)}
                  >
                    <item.icon className="hidden h-3.5 w-3.5 text-primary/80 xl:block" />
                    {item.title}
                    <ChevronDown
                      className={`h-3 w-3 text-muted-foreground transition-transform ${
                        desktopMenu === item.title ? "rotate-180 text-primary" : ""
                      }`}
                    />
                    <span
                      className={`absolute bottom-2 left-2 right-2 h-[2px] origin-left brand-rule transition-transform duration-300 ${
                        desktopMenu === item.title ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
              <Link
                to="/bonus"
                className="flex items-center gap-1.5 px-2 py-4 font-display text-[12.5px] font-semibold text-foreground/70 transition-colors hover:text-foreground xl:px-3 xl:text-[13px]"
              >
                <Gift className="hidden h-3.5 w-3.5 text-flame/80 xl:block" />
                Bonuses
              </Link>
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <Link
              to="/login-guide"
              className="group relative hidden items-center overflow-hidden rounded-md border border-white/15 bg-white/[0.03] px-4 py-2 font-display text-[12px] font-semibold text-foreground/90 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.08] hover:text-foreground hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] sm:inline-flex"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 opacity-70 transition-opacity group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                Sign in
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              to="/fairplay-id"
              className="group relative inline-flex items-center overflow-hidden rounded-md bg-gradient-to-r from-primary to-emerald-400 px-3 py-2 font-display text-[11.5px] font-bold text-primary-foreground shadow-[0_4px_14px_rgba(47,185,74,0.35)] transition-all duration-300 hover:from-emerald-400 hover:to-primary hover:shadow-[0_6px_25px_rgba(47,185,74,0.55)] hover:scale-[1.02] active:scale-[0.98] sm:gap-1.5 sm:px-5 sm:text-[12.5px]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="hidden min-[380px]:inline">Open an ID</span>
                <span className="min-[380px]:hidden">Open ID</span>
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 min-[380px]:block" />
              </span>
              <div className="absolute -inset-px rounded-md bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <button
              type="button"
              className="rounded-md border border-white/10 bg-white/[0.04] p-2 transition-colors hover:bg-white/[0.08] lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeItem && (
            <motion.div
              key={activeItem.title}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full hidden max-h-[min(70vh,640px)] overflow-y-auto lg:block"
              onMouseEnter={() => openDesktop(activeItem.title)}
            >
              <DesktopPanel item={activeItem} onNavigate={() => setDesktopMenu(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {activeItem && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 hidden cursor-default bg-black/20 lg:block"
          onClick={() => setDesktopMenu(null)}
        />
      )}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink-deep lg:hidden"
          >
            <div className="h-[3px] w-full shrink-0 brand-rule" />
            <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-6">
              <img src="/logo.png" alt="Fairplay" className="h-7 w-auto" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-md border border-white/10 p-2"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto px-4 py-3 sm:px-6">
              {megaMenu.map((item) => {
                const open = mobileSection === item.title;
                return (
                  <div key={item.title} className="border-b border-white/8">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 py-3.5 text-left"
                      onClick={() => setMobileSection(open ? null : item.title)}
                      aria-expanded={open}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                          <item.icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-display text-[15px] font-semibold">{item.title}</span>
                          <span className="mt-0.5 block text-[12px] leading-snug text-muted-foreground">{item.description}</span>
                        </span>
                      </span>
                      <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4 pb-4 pl-0 min-[420px]:pl-12">
                            {item.sections.map((section) => (
                              <div key={section.name}>
                                <h4 className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground/70">
                                  {section.name}
                                </h4>
                                <div className="grid grid-cols-1 gap-0.5 min-[480px]:grid-cols-2">
                                  {section.items.map((sub) => (
                                    <NavLink
                                      key={sub.name}
                                      item={sub}
                                      onNavigate={() => setMobileOpen(false)}
                                      className="flex items-center justify-between gap-2 rounded-md px-2 py-2.5 text-[14px] text-foreground/80 hover:bg-primary/10 hover:text-primary"
                                    />
                                  ))}
                                </div>
                              </div>
                            ))}
                            <Link
                              to={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary"
                            >
                              View all {item.title.toLowerCase()}
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <Link
                to="/bonus"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center gap-3 rounded-md border border-white/8 bg-white/[0.03] p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-flame/12 text-flame">
                  <Gift className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <span className="block font-semibold">Bonuses</span>
                  <span className="text-[12px] text-muted-foreground">Welcome offer and promo codes</span>
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6">
              <Link
                to="/login-guide"
                onClick={() => setMobileOpen(false)}
                className="rounded-md border border-white/12 py-3.5 text-center font-display text-[13px] font-semibold"
              >
                Sign in
              </Link>
              <Link
                to="/fairplay-id"
                onClick={() => setMobileOpen(false)}
                className="rounded-md bg-primary py-3.5 text-center font-display text-[13px] font-bold text-primary-foreground"
              >
                Open an ID
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
