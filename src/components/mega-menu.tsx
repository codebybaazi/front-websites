import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronDown, X, Menu as MenuIcon, Trophy, Dices, IdCard, Gift,
  Swords, BookOpen, Building2, Sparkles, MessageCircle, Phone, Zap, ShieldCheck, Radio,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { WA } from "./site-layout";

type Item = { label: string; to: string; desc?: string };
type Group = { title: string; items: Item[] };
type MenuKey = "sports" | "casino" | "ids" | "promos" | "compare" | "guides" | "company";

type MenuDef = {
  key: MenuKey;
  label: string;
  icon: typeof Trophy;
  accent: string;
  tagline: string;
  groups: Group[];
  feature: { title: string; sub: string; to: string };
};

const MENUS: MenuDef[] = [
  {
    key: "sports",
    label: "Sports",
    icon: Trophy,
    accent: "from-emerald-500/30 to-emerald-400/10",
    tagline: "12+ live markets, in-play odds",
    groups: [
      { title: "Cricket", items: [
        { label: "Cricket Home", to: "/cricket" },
        { label: "IPL Betting", to: "/ipl-betting" },
        { label: "WPL 2026", to: "/wpl-2026-betting" },
        { label: "T20 World Cup", to: "/t20-world-cup-betting" },
        { label: "Champions Trophy", to: "/champions-trophy-betting" },
        { label: "IPL 2026 Calendar", to: "/ipl-2026-calendar" },
      ]},
      { title: "Other Sports", items: [
        { label: "Football", to: "/football" },
        { label: "Tennis", to: "/tennis" },
        { label: "Basketball", to: "/basketball" },
        { label: "Kabaddi", to: "/kabaddi" },
        { label: "Horse Racing", to: "/horse-racing" },
        { label: "Esports", to: "/esports" },
      ]},
      { title: "Markets", items: [
        { label: "Today's Best Odds", to: "/todays-best-odds" },
        { label: "Exchange", to: "/exchange" },
        { label: "Sports Betting", to: "/sports-betting" },
        { label: "High Odds Strategy", to: "/high-odds-betting-strategy" },
      ]},
    ],
    feature: { title: "Live IPL 2026", sub: "Best in-play odds guaranteed", to: "/ipl-betting" },
  },
  {
    key: "casino",
    label: "Casino",
    icon: Dices,
    accent: "from-rose-500/30 to-orange-400/10",
    tagline: "Live dealers, 500+ slots",
    groups: [
      { title: "Live Casino", items: [
        { label: "Casino Home", to: "/casino" },
        { label: "Indian Card Games", to: "/indian-card-games" },
      ]},
      { title: "Platforms", items: [
        { label: "Platforms Overview", to: "/platforms" },
        { label: "Services", to: "/services" },
      ]},
    ],
    feature: { title: "24/7 Live Tables", sub: "Teen Patti, Andar Bahar, Roulette", to: "/casino" },
  },
  {
    key: "ids",
    label: "IDs",
    icon: IdCard,
    accent: "from-amber-500/30 to-yellow-400/10",
    tagline: "Instant ID on WhatsApp",
    groups: [
      { title: "Get Started", items: [
        { label: "Cricbet99 ID", to: "/cricbet99-id" },
        { label: "Sports ID", to: "/sports-id" },
        { label: "Demo ID", to: "/demo-id" },
        { label: "Register", to: "/register" },
        { label: "Login", to: "/login" },
      ]},
      { title: "Money", items: [
        { label: "How to Deposit", to: "/how-to-deposit" },
        { label: "How to Withdraw", to: "/how-to-withdraw" },
        { label: "Transaction Limits", to: "/transaction-limits" },
        { label: "KYC Policy", to: "/kyc-policy" },
      ]},
      { title: "Contact", items: [
        { label: "WhatsApp Number", to: "/whatsapp-number" },
        { label: "Telegram Channel", to: "/telegram-channel" },
        { label: "Support", to: "/support" },
        { label: "WhatsApp Support", to: "/whatsapp-support" },
      ]},
    ],
    feature: { title: "Get ID in 60 sec", sub: "One WhatsApp message, verified account", to: "/register" },
  },
  {
    key: "promos",
    label: "Promotions",
    icon: Gift,
    accent: "from-fuchsia-500/30 to-purple-400/10",
    tagline: "Bonuses, referrals & big wins",
    groups: [
      { title: "Offers", items: [
        { label: "Bonus", to: "/bonus" },
        { label: "Referral Code", to: "/referral-code" },
        { label: "Become an Agent", to: "/become-agent" },
      ]},
      { title: "Highlights", items: [
        { label: "Big Win Stories", to: "/big-win-stories" },
        { label: "Reviews", to: "/reviews" },
        { label: "Why Choose Cricbet99", to: "/why-choose-cricbet99" },
      ]},
    ],
    feature: { title: "Welcome Bonus", sub: "First deposit boost up to 300%", to: "/bonus" },
  },
  {
    key: "compare",
    label: "Compare",
    icon: Swords,
    accent: "from-sky-500/30 to-cyan-400/10",
    tagline: "Cricbet99 vs the field",
    groups: [
      { title: "Head to Head", items: [
        { label: "vs Lotus 365", to: "/cricbet99-vs-lotus365" },
        { label: "vs SkyExchange 247", to: "/cricbet99-vs-skyexchange247" },
        { label: "vs 11xPlay", to: "/cricbet99-vs-11xplay" },
        { label: "vs Reddy Book", to: "/cricbet99-vs-reddybook" },
      ]},
      { title: "More Rivals", items: [
        { label: "vs Laser 247", to: "/cricbet99-vs-laser247" },
        { label: "vs Gold 365", to: "/cricbet99-vs-gold365" },
        { label: "vs Fairdeal", to: "/cricbet99-vs-fairdeal" },
      ]},
    ],
    feature: { title: "Why we win", sub: "Faster payouts. Better odds. Real humans.", to: "/why-choose-cricbet99" },
  },
  {
    key: "guides",
    label: "Guides",
    icon: BookOpen,
    accent: "from-teal-500/30 to-emerald-400/10",
    tagline: "Learn, then earn",
    groups: [
      { title: "Betting Guides", items: [
        { label: "All Guides", to: "/betting-guides" },
        { label: "Place a Cricket Bet", to: "/betting-guides/how-to-place-a-cricket-bet" },
        { label: "Place a Live Bet", to: "/betting-guides/how-to-place-a-live-bet" },
        { label: "Toss Market", to: "/betting-guides/how-to-bet-on-toss-market" },
        { label: "Session Betting", to: "/betting-guides/how-to-bet-on-session-betting" },
      ]},
      { title: "Case Studies", items: [
        { label: "All Case Studies", to: "/case-studies" },
        { label: "₹5000 → ₹25000", to: "/case-studies/ipl-5000-to-25000-profit" },
        { label: "Small Budget Strategy", to: "/case-studies/small-budget-betting-strategy" },
        { label: "Toss Market 10-min", to: "/case-studies/toss-market-10-minute-profit" },
        { label: "Live 3x Returns", to: "/case-studies/live-betting-3x-returns" },
      ]},
      { title: "Help & Fixes", items: [
        { label: "FAQ", to: "/faq" },
        { label: "How It Works", to: "/how-it-works" },
        { label: "Login Issues", to: "/login-issues" },
        { label: "Deposit Issues", to: "/deposit-issues" },
        { label: "Withdrawal Delay", to: "/withdrawal-delay" },
        { label: "Account Blocked", to: "/account-blocked" },
      ]},
    ],
    feature: { title: "Start with Toss Market", sub: "Highest ROI for new bettors", to: "/betting-guides/how-to-bet-on-toss-market" },
  },
  {
    key: "company",
    label: "Company",
    icon: Building2,
    accent: "from-indigo-500/30 to-blue-400/10",
    tagline: "About Cricbet99",
    groups: [
      { title: "Cricbet99", items: [
        { label: "About Us", to: "/about" },
        { label: "What is Cricbet99", to: "/what-is-cricbet99" },
        { label: "Is Cricbet99 Real?", to: "/is-cricbet99-real" },
        { label: "Is Cricbet99 Safe?", to: "/is-cricbet99-safe" },
        { label: "Is Cricbet99 Legal?", to: "/is-cricbet99-legal" },
        { label: "Trusted Agent", to: "/trusted-betting-agent" },
      ]},
      { title: "Content", items: [
        { label: "Blog", to: "/blog" },
        { label: "All Links", to: "/all-links" },
        { label: "App", to: "/cricbet99-app" },
        { label: "Contact", to: "/contact" },
      ]},
      { title: "Policies", items: [
        { label: "All Policies", to: "/policies" },
        { label: "Privacy Policy", to: "/privacy-policy" },
        { label: "Terms & Conditions", to: "/terms" },
        { label: "Refund Policy", to: "/refund-policy" },
        { label: "Responsible Gaming", to: "/responsible-gaming" },
        { label: "Community Guidelines", to: "/community-guidelines" },
        { label: "Rules", to: "/rules" },
        { label: "Disclaimer", to: "/disclaimer" },
      ]},
    ],
    feature: { title: "Verified & Trusted", sub: "10,000+ verified IDs across India", to: "/trusted-betting-id-provider" },
  },
];

function MenuItem({ m, isOpen, setOpen }: { m: MenuDef; isOpen: boolean; setOpen: React.Dispatch<React.SetStateAction<MenuKey | null>> }) {
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setOpen((cur) => (cur === m.key ? null : cur));
    }, 180);
  };
  useEffect(() => () => cancelClose(), []);
  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(m.key); }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onClick={() => setOpen(isOpen ? null : m.key)}
        className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-semibold transition-all ${
          isOpen ? "bg-primary/15 text-primary" : "text-foreground/85 hover:bg-primary/10 hover:text-primary"
        }`}
        aria-expanded={isOpen}
      >
        {m.label}
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <Panel
          menu={m}
          onNavigate={() => { cancelClose(); setOpen(null); }}
          anchorRef={ref}
          onPanelEnter={cancelClose}
          onPanelLeave={scheduleClose}
        />
      )}
    </div>
  );
}

function Panel({ menu, onNavigate, anchorRef, onPanelEnter, onPanelLeave }: { menu: MenuDef; onNavigate: () => void; anchorRef: React.RefObject<HTMLDivElement | null>; onPanelEnter: () => void; onPanelLeave: () => void }) {

  const Icon = menu.icon;
  const cols = Math.min(menu.groups.length, 3);
  const width = cols === 1 ? 320 : cols === 2 ? 540 : 760;
  const [pos, setPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 });
  useEffect(() => {
    const el = anchorRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setPos({ left: r.left + r.width / 2, top: r.bottom });
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [anchorRef]);
  return (
    <div
      className="fixed z-[100] -translate-x-1/2 pt-2"
      style={{ left: pos.left, top: pos.top, width: `min(${width}px, 92vw)` }}
      onMouseEnter={onPanelEnter}
      onMouseLeave={onPanelLeave}
    >

    <div
      className="overflow-hidden rounded-xl border border-primary/30"
      style={{
        background: "hsl(var(--background))",
        backgroundColor: "oklch(0.14 0.02 160)",
        boxShadow: "0 20px 50px -15px rgba(0,0,0,0.7), 0 0 0 1px color-mix(in oklab, var(--primary) 22%, transparent)",
      }}
    >


      <div className="flex items-center gap-2.5 border-b border-primary/15 bg-primary/5 px-4 py-2.5">
        <span className={`grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br ${menu.accent} ring-1 ring-primary/25`}>
          <Icon className="h-3.5 w-3.5 text-primary" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-black uppercase tracking-wider text-primary">{menu.label}</div>
          <div className="truncate text-[10px] text-foreground/60">{menu.tagline}</div>
        </div>
        <Link
          to={menu.feature.to}
          onClick={onNavigate}
          className="shrink-0 rounded-full px-3 py-1 text-[10px] font-bold text-primary-foreground shadow"
          style={{ background: "var(--gradient-gold)" }}
        >
          {menu.feature.title}
        </Link>
      </div>
      <div className={`grid gap-x-4 gap-y-3 p-4 ${cols === 1 ? "grid-cols-1" : cols === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {menu.groups.map((g) => (
          <div key={g.title}>
            <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
              {g.title}
            </div>
            <ul className="space-y-0.5">
              {g.items.map((it) => (
                <li key={it.to}>
                  <Link
                    to={it.to}
                    onClick={onNavigate}
                    className="group/link flex items-center gap-1.5 rounded-md px-2 py-1 text-[13px] text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary/40 transition-all group-hover/link:w-2 group-hover/link:bg-accent" />
                    <span className="truncate">{it.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}



export function MegaMenuHeader() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<MenuKey | null>(null);

  useEffect(() => {
    if (mobile) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobile]);

  return (
    <header className="sticky top-0 z-40">
      {/* ================= TIER 1 — Utility strip ================= */}
      <div className="relative hidden border-b border-primary/15 bg-[oklch(0.08_0.015_260)] text-[11px] text-foreground/70 md:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[oklch(0.82_0.21_148)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.82_0.21_148)] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.82_0.21_148)]" />
              </span>
              LIVE · Cricket Odds
            </span>
            <span className="hidden items-center gap-1.5 lg:inline-flex">
              <ShieldCheck className="h-3 w-3 text-accent" /> 100% Verified IDs
            </span>
            <span className="hidden items-center gap-1.5 lg:inline-flex">
              <Zap className="h-3 w-3 text-accent" /> Instant Withdrawals
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
              <Phone className="h-3 w-3" /> 24/7 WhatsApp Support
            </a>
            <Link to="/login" className="hidden transition-colors hover:text-accent sm:inline">Login</Link>
            <Link to="/register" className="hidden transition-colors hover:text-accent sm:inline">Register</Link>
          </div>
        </div>
      </div>

      {/* ================= TIER 2 — Main bar ================= */}
      <div className="relative border-b border-primary/25 bg-[linear-gradient(180deg,oklch(0.12_0.02_260/0.95),oklch(0.09_0.02_260/0.95))] backdrop-blur-xl shadow-[0_10px_40px_-18px_rgba(0,0,0,0.9)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(80% 120% at 50% 0%, oklch(0.85 0.17 88 / 0.12), transparent 60%)" }}
        />
        <div className="relative mx-auto flex h-[76px] max-w-7xl items-center gap-4 px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="group relative flex shrink-0 items-center gap-3">
            <span
              aria-hidden
              className="absolute -inset-2 -z-10 rounded-full opacity-60 blur-lg transition-opacity group-hover:opacity-100"
              style={{ background: "radial-gradient(closest-side, oklch(0.85 0.17 88 / 0.4), transparent 70%)" }}
            />
            <img src={logo} alt="Cricbet99 — Online Cricket ID" className="h-11 w-auto drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)] sm:h-12" />
          </Link>

          {/* Vertical divider */}
          <div aria-hidden className="hidden h-10 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block" />

          {/* Desktop nav — pill container */}
          <nav className="relative hidden flex-1 items-center justify-start gap-0.5 lg:flex">
            <Link
              to="/"
              className="rounded-lg px-3 py-2 text-[13px] font-semibold text-foreground/85 transition-all hover:bg-primary/10 hover:text-primary"
              activeProps={{ className: "!text-accent bg-primary/10" }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>
            {MENUS.map((m) => {
              const isOpen = open === m.key;
              return <MenuItem key={m.key} m={m} isOpen={isOpen} setOpen={setOpen} />;
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            {/* Live match ticker chip — desktop */}
            <div className="hidden items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 text-[11px] font-semibold text-accent xl:inline-flex">
              <Radio className="h-3 w-3 animate-pulse" />
              <span className="text-foreground/75">MI vs CSK · </span>
              <span>Live now</span>
            </div>

            {/* Premium Get ID CTA */}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get your Cricbet99 ID on WhatsApp"
              className="cta-pulse group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-4 py-2.5 text-sm font-extrabold uppercase tracking-wider text-accent-foreground transition-transform hover:scale-[1.04] sm:px-5 sm:py-3"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.82 0.21 148) 0%, oklch(0.6 0.19 150) 55%, oklch(0.82 0.21 148) 100%)",
                boxShadow:
                  "inset 0 1px 0 oklch(1 0 0 / 0.4), inset 0 -2px 0 oklch(0 0 0 / 0.25), 0 10px 30px -8px oklch(0.74 0.2 148 / 0.55)",
              }}
            >
              <span aria-hidden className="absolute inset-0 rounded-lg ring-1 ring-inset ring-[oklch(1_0_0/0.35)]" />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_35%,oklch(1_0_0/0.55)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/95 shadow-inner">
                <MessageCircle className="h-3.5 w-3.5 text-[oklch(0.42_0.15_150)]" />
              </span>
              <span className="relative">
                <span className="hidden sm:inline">Get Your ID</span>
                <span className="sm:hidden">Get ID</span>
              </span>
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobile(true)}
              className="relative grid h-11 w-11 place-items-center rounded-lg border border-primary/40 bg-[linear-gradient(180deg,oklch(0.85_0.17_88/0.18),oklch(0.85_0.17_88/0.06))] text-primary shadow-[inset_0_1px_0_oklch(1_0_0/0.15),0_6px_16px_-8px_oklch(0.85_0.17_88/0.6)] transition-colors hover:text-accent lg:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div aria-hidden className="gold-underline h-px w-full" />
      </div>

      {/* Mobile drawer — portaled to body to escape header's backdrop-filter containing block */}
      {mobile && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setMobile(false)}
          />
          <div
            className="absolute right-0 top-0 flex h-full w-[90vw] max-w-md flex-col border-l border-primary/30 shadow-[0_0_60px_-10px_rgba(0,0,0,0.9)] animate-slide-in-right"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.12 0.02 260) 0%, oklch(0.09 0.02 260) 100%)",
            }}
          >
            {/* Ambient gold glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-50 blur-2xl"
              style={{ background: "radial-gradient(80% 100% at 50% 0%, oklch(0.85 0.17 88 / 0.35), transparent 70%)" }}
            />

            {/* Header of drawer */}
            <div className="relative flex items-center justify-between border-b border-primary/25 bg-[linear-gradient(180deg,oklch(0.13_0.02_260/0.9),oklch(0.10_0.02_260/0.9))] px-4 py-3.5">
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="Cricbet99 — Online Cricket ID" className="h-9 w-auto drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)]" />
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setMobile(false)}
                className="grid h-10 w-10 place-items-center rounded-lg border border-primary/40 bg-[linear-gradient(180deg,oklch(0.85_0.17_88/0.18),oklch(0.85_0.17_88/0.06))] text-primary shadow-[inset_0_1px_0_oklch(1_0_0/0.15)] transition-colors hover:text-accent"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div aria-hidden className="gold-underline h-px w-full" />

            {/* Utility strip */}
            <div className="relative flex items-center justify-between gap-3 border-b border-primary/15 bg-[oklch(0.08_0.015_260)] px-4 py-2 text-[11px]">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[oklch(0.82_0.21_148)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.82_0.21_148)] opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.82_0.21_148)]" />
                </span>
                LIVE · Cricket Odds
              </span>
              <span className="inline-flex items-center gap-1.5 text-foreground/70">
                <ShieldCheck className="h-3 w-3 text-accent" /> Verified IDs
              </span>
            </div>

            {/* Scrollable body */}
            <div className="relative flex-1 overflow-y-auto px-3 py-4">
              <Link
                to="/"
                onClick={() => setMobile(false)}
                className="flex items-center justify-between rounded-xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-bold text-primary shadow-[inset_0_0_0_1px_oklch(0.85_0.17_88/0.15)]"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary/25 to-accent/15 ring-1 ring-primary/30">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </span>
                  Home
                </span>
              </Link>

              <div className="mt-3 space-y-2">
                {MENUS.map((m) => {
                  const Icon = m.icon;
                  const isOpen = mobileOpen === m.key;
                  return (
                    <div
                      key={m.key}
                      className={`overflow-hidden rounded-xl border transition-colors ${
                        isOpen
                          ? "border-primary/40 bg-primary/10 shadow-[inset_0_0_0_1px_oklch(0.85_0.17_88/0.2)]"
                          : "border-primary/15 bg-[oklch(0.11_0.02_260/0.6)]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileOpen(isOpen ? null : m.key)}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                      >
                        <span className="flex items-center gap-3">
                          <span className={`grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br ${m.accent} ring-1 ring-primary/30`}>
                            <Icon className="h-4 w-4 text-primary" />
                          </span>
                          <span>
                            <span className="block text-sm font-bold text-foreground">{m.label}</span>
                            <span className="block text-[10px] text-foreground/55">{m.tagline}</span>
                          </span>
                        </span>
                        <ChevronDown className={`h-4 w-4 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="space-y-4 border-t border-primary/20 bg-[oklch(0.09_0.02_260/0.6)] px-4 py-4">
                          <Link
                            to={m.feature.to}
                            onClick={() => setMobile(false)}
                            className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-[11px] font-bold text-primary-foreground shadow"
                            style={{ background: "var(--gradient-gold)" }}
                          >
                            <span className="truncate">{m.feature.title}</span>
                            <span className="shrink-0 opacity-80">→</span>
                          </Link>
                          {m.groups.map((g) => (
                            <div key={g.title}>
                              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                                {g.title}
                              </div>
                              <ul className="grid grid-cols-1 gap-0.5">
                                {g.items.map((it) => (
                                  <li key={it.to}>
                                    <Link
                                      to={it.to}
                                      onClick={() => setMobile(false)}
                                      className="group/link flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                                    >
                                      <span className="h-1 w-1 shrink-0 rounded-full bg-primary/40 transition-all group-hover/link:w-2 group-hover/link:bg-accent" />
                                      <span className="truncate">{it.label}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sticky footer CTA */}
            <div className="relative border-t border-primary/25 bg-[linear-gradient(180deg,oklch(0.10_0.02_260/0.9),oklch(0.08_0.02_260/0.95))] p-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobile(false)}
                className="cta-pulse group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-accent-foreground"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.82 0.21 148) 0%, oklch(0.6 0.19 150) 55%, oklch(0.82 0.21 148) 100%)",
                  boxShadow:
                    "inset 0 1px 0 oklch(1 0 0 / 0.4), inset 0 -2px 0 oklch(0 0 0 / 0.25), 0 10px 30px -8px oklch(0.74 0.2 148 / 0.55)",
                }}
              >
                <span aria-hidden className="absolute inset-0 rounded-lg ring-1 ring-inset ring-[oklch(1_0_0/0.35)]" />
                <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/95 shadow-inner">
                  <MessageCircle className="h-3.5 w-3.5 text-[oklch(0.42_0.15_150)]" />
                </span>
                <span className="relative">Get Your ID on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
