import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, ShieldCheck, Zap, Gift, ArrowRight, Facebook, Instagram, Twitter, Youtube, Send, Linkedin } from "lucide-react";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png";

import { WhatsAppFloat, GetIdSlider } from "./floating-widgets";
import { MegaMenuHeader } from "./mega-menu";



export const WA = "https://wa.me/919999999999";


export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Cricket", to: "/cricket" },
  { label: "Football", to: "/football" },
  { label: "Casino", to: "/casino" },
  { label: "Matches", to: "/matches" },
  { label: "Predictions", to: "/predictions" },
  { label: "Schedule", to: "/schedule" },
  { label: "App", to: "/cricbet99-app" },
  { label: "vs Lotus 365", to: "/cricbet99-vs-lotus365" },
  { label: "vs SkyExchange", to: "/cricbet99-vs-skyexchange247" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Login", to: "/login" },
  { label: "All Links", to: "/all-links" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/20 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Cricbet99 — Online Cricket ID" className="h-11 w-auto drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)]" />
        </Link>
        <nav className="hidden flex-wrap items-center gap-6 xl:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={WA}
          aria-label="WhatsApp Now"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp Now</span>
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/20 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-10 sm:px-6 sm:py-12 md:grid-cols-4 md:py-16">
        <div>
          <img src={logo} alt="Cricbet99 — Online Cricket ID" className="h-12 w-auto" />
          <p className="mt-4 text-sm text-foreground/70">
            India's premium cricket ID platform. Live in-play odds, instant UPI
            payouts and 24/7 human support — all from one verified account.
          </p>
          <div className="mt-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Follow Us</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { Icon: Facebook, label: "Facebook", href: "https://facebook.com/cricbet99" },
                { Icon: Instagram, label: "Instagram", href: "https://instagram.com/cricbet99" },
                { Icon: Twitter, label: "X (Twitter)", href: "https://twitter.com/cricbet99" },
                { Icon: Youtube, label: "YouTube", href: "https://youtube.com/@cricbet99" },
                { Icon: Send, label: "Telegram", href: "https://t.me/cricbet99" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/cricbet99" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-primary/25 bg-background/60 text-foreground/80 transition-all hover:scale-110 hover:border-primary hover:text-primary-foreground"
                  style={{ backgroundImage: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gradient-gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Sports</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/75">
            <li><Link to="/cricket" className="hover:text-primary">Cricket & IPL</Link></li>
            <li><Link to="/football" className="hover:text-primary">Football</Link></li>
            <li><Link to="/tennis" className="hover:text-primary">Tennis</Link></li>
            <li><Link to="/horse-racing" className="hover:text-primary">Horse Racing</Link></li>
            <li><Link to="/casino" className="hover:text-primary">Live Casino</Link></li>
            <li><Link to="/indian-card-games" className="hover:text-primary">Indian Card Games</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/75">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/platforms" className="hover:text-primary">Platforms</Link></li>
            <li><Link to="/sports-id" className="hover:text-primary">Sports ID</Link></li>
            <li><Link to="/how-it-works" className="hover:text-primary">How It Works</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/all-links" className="hover:text-primary">All Links</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Legal & Support</h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/75">
            <li><Link to="/responsible-gaming" className="hover:text-primary">Responsible Gaming</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer" className="hover:text-primary">Disclaimer</Link></li>
            <li className="flex items-center gap-2 pt-2"><MessageCircle className="h-4 w-4 text-accent" /> WhatsApp 24/7</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 99999 99999</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> support@cricbet99.co.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary/15 py-6 text-center text-xs text-foreground/55">
        © {new Date().getFullYear()} Cricbet99. 18+ only. Please play responsibly. Betting involves financial risk.
      </div>
    </footer>
  );
}

export function SiteBackdrop() {
  return (
    <>
      {/* Solid premium dark base */}
      <div className="fixed inset-0 -z-10 bg-[#07090c]" />
      {/* Subtle radial glows for depth */}
      <div
        className="fixed inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(60rem 40rem at 15% -10%, oklch(0.55 0.15 88 / 0.20), transparent 60%), radial-gradient(50rem 40rem at 100% 10%, oklch(0.55 0.18 148 / 0.14), transparent 60%), radial-gradient(60rem 50rem at 50% 110%, oklch(0.45 0.15 88 / 0.12), transparent 60%)",
        }}
      />
      {/* Fine grid texture, faded at edges */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.9 0.15 88) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0.15 88) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      {/* Grain */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {

  return (
    <div className="min-h-screen overflow-x-hidden text-foreground">
      <SiteBackdrop />
      <MegaMenuHeader />
      {children}
      <SiteFooter />
      <WhatsAppFloat />
      <GetIdSlider />
    </div>
  );
}



export function PageHero({ eyebrow, title, subtitle, wide = false }: { eyebrow: string; title: ReactNode; subtitle: string; wide?: boolean }) {
  return (
    <section className={`mx-auto px-4 pt-8 pb-8 sm:px-6 sm:pt-14 sm:pb-12 lg:pt-28 ${wide ? 'max-w-none' : 'max-w-7xl'}`}>
      <div className={wide ? 'mx-auto px-4 sm:px-6 lg:px-12 w-full' : ''}>
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:px-4 sm:py-1.5 sm:text-xs">
          {eyebrow}
        </span>
        <h1 className={`mt-4 font-black leading-[1.08] tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl ${wide ? 'w-full text-4xl' : 'max-w-4xl text-3xl'}`}>
          {title}
        </h1>
        <p className={`mt-4 text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-lg ${wide ? 'w-full max-w-4xl' : 'max-w-2xl'}`}>{subtitle}</p>
      </div>
    </section>
  );
}

export function CTABand({ heading, sub }: { heading: string; sub: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
      <div
        className="relative overflow-hidden rounded-[2rem] p-[1.5px]"
        style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-card)" }}
      >
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <div
          className="relative rounded-[calc(2rem-1.5px)] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-20"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
            {/* Left: copy + CTA */}
            <div className="text-center md:text-left">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Live onboarding · Open 24×7
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                {heading.split("Cricbet99")[0]}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-gold)" }}
                >
                  Cricbet99
                </span>
                {heading.includes("Cricbet99") ? heading.split("Cricbet99")[1] : ""}
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base md:mx-0">
                {sub}
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href={WA}
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground shadow-2xl transition-transform hover:scale-[1.04] sm:text-base"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <MessageCircle className="h-5 w-5" />
                  Claim Your ID on WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/40 px-6 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary hover:bg-background/60"
                >
                  <Phone className="h-4 w-4 text-primary" /> Call an Expert
                </a>
              </div>

              <p className="mt-5 text-xs text-foreground/60">
                ⚡ ID activated in under 5 minutes · 🔒 100% private &amp; secure · 💸 Instant deposits &amp; withdrawals
              </p>
            </div>

            {/* Right: perks */}
            <div className="grid gap-3">
              {[
                { icon: Gift, title: "₹10,000 Welcome Bonus", desc: "100% match on your first deposit — credited instantly." },
                { icon: Zap, title: "5-Minute Activation", desc: "Live agents onboard you the moment you message." },
                { icon: ShieldCheck, title: "Bank-Grade Privacy", desc: "Your details stay encrypted end-to-end. Always." },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-primary/20 bg-background/40 p-4 backdrop-blur transition-colors hover:border-primary/50"
                >
                  <div
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-primary-foreground"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{title}</div>
                    <div className="mt-0.5 text-xs text-foreground/70">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
