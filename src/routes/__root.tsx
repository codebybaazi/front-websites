import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Trophy, Swords, Gift, UserPlus, Menu, X, Shield, Send, BookOpen, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";


import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { PageInternalLinks } from "../components/PageInternalLinks";
import { PageBreadcrumbs } from "../components/PageBreadcrumbs";
import { WhatsAppNumberSync } from "../components/WhatsAppNumberSync";
import { WebMcpTools } from "../components/WebMcpTools";
import { getWhatsAppNumber, waLink, WHATSAPP_NUMBER_META_NAME } from "../lib/whatsapp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { name: "author", content: "Fairplay" },
      { name: WHATSAPP_NUMBER_META_NAME, content: getWhatsAppNumber() },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const megaMenu = [
  {
    title: "Sports Exchange",
    icon: Trophy,
    href: "/betting",
    description: "Ultra-fast exchange with the industry's highest liquidity.",
    sections: [
      {
        name: "Major Events",
        items: [
          { name: "IPL 2026", href: "/ipl-betting", badge: "Live" },
          { name: "T20 World Cup", href: "/t20-world-cup" },
          { name: "Champions Trophy", href: "/champions-trophy" },
          { name: "WPL 2026", href: "/wpl-betting" },
          { name: "2026–27 Match Schedule", href: "/schedule", badge: "New" },
          { name: "All Matches", href: "/matches", badge: "New" },
        ]
      },
      {
        name: "All Sports",
        items: [
          { name: "Cricket Hub", href: "/betting", search: { category: 'cricket' } },
          { name: "Football Elite", href: "/betting", search: { category: 'football' } },
          { name: "Tennis Pro", href: "/betting", search: { category: 'tennis' } },
          { name: "Horse Racing", href: "/horse-racing" },
          { name: "Kabaddi", href: "/kabaddi-betting" },
          { name: "eSports", href: "/esports-betting" },
          { name: "Basketball", href: "/basketball-betting" },
        ]
      }
    ]
  },
  {
    title: "Elite Casino",
    icon: Swords,
    href: "/casino",
    description: "Immersive HD live dealer action and premium slots.",
    sections: [
      {
        name: "Casino Lobby",
        items: [
          { name: "Live Casino", href: "/casino", search: { type: 'live' } },
          { name: "Indian Classics", href: "/casino", search: { type: 'indian' } },
          { name: "Crash Games", href: "/casino", search: { type: 'crash' } },
          { name: "Table Games", href: "/casino", search: { type: 'table' } },
        ]
      },
      {
        name: "Global Slots",
        items: [
          { name: "Popular Slots", href: "/casino", search: { type: 'slots' } },
          { name: "Bonus Buy", href: "/casino", search: { type: 'bonus-buy' } },
          { name: "Jackpots", href: "/casino", search: { type: 'jackpots' } },
        ]
      }
    ]
  },
  {
    title: "Intelligence Hub",
    icon: BookOpen,
    href: "/all-links",
    description: "Deep-dive technical analysis and comparison guides.",
    sections: [
      {
        name: "Comparison Guides",
        items: [
          { name: "vs Lotus365", href: "/fairplay-vs-lotus365" },
          { name: "vs Reddybook", href: "/fairplay-vs-reddybook" },
          { name: "vs Gold365", href: "/fairplay-vs-gold365" },
          { name: "vs Mahavir Book", href: "/fairplay-vs-mahavir-book" },
          { name: "vs Diamond Exch", href: "/fairplay-vs-diamond-exchange" },
          { name: "vs Laser247", href: "/fairplay-vs-laser247" },
          { name: "vs 11xplay", href: "/fairplay-vs-11xplay" },
          { name: "vs Skyexchange", href: "/fairplay-vs-skyexchange247" },
          { name: "vs Fairdeal", href: "/fairplay-vs-fairdeal" },
        ]
      },
      {
        name: "Partner Network",
        items: [
          { name: "Partner Overview", href: "/services" },
          { name: "Gold365", href: "/gold365" },
          { name: "11xplay", href: "/11xplay" },
          { name: "Laser247", href: "/laser247" },
          { name: "Cricbet99", href: "/cricbet99" },
          { name: "Fairdeal", href: "/fairdeal" },
        ]
      }
    ]
  },
  {
    title: "Our Ecosystem",
    icon: Shield,
    href: "/support",
    description: "Everything you need to succeed in the Fairplay network.",
    sections: [
      {
        name: "Help & VIP",
        items: [
          { name: "Support Hub", href: "/support" },
          { name: "Is Fairplay Real?", href: "/is-fairplay-real" },
          { name: "Is Fairplay Safe?", href: "/is-fairplay-safe" },
          { name: "Is Fairplay Legal?", href: "/is-fairplay-legal" },
          { name: "What is Fairplay?", href: "/what-is-fairplay" },
          { name: "Contact Us", href: "/contact-us" },
          { name: "Fairplay ID", href: "/fairplay-id" },
          { name: "Insights Blog", href: "/blog" },
          { name: "Writers", href: "/authors" },
          { name: "All Site Links", href: "/all-links", badge: "New" },
        ]
      },
      {
        name: "Quick Guides",
        items: [
          { name: "How to Register", href: "/register-guide" },
          { name: "How to Login", href: "/login-guide" },
          { name: "How to Deposit", href: "/deposit-guide" },
          { name: "Deposit number", href: "/fairplay-deposit-number" },
          { name: "How to Withdraw", href: "/withdrawal-guide" },
          { name: "Withdrawal number", href: "/fairplay-withdrawal-number" },
          { name: "Customer Care Number", href: "/fairplay-customer-care-number" },
          { name: "Security Center", href: "/security-safety" },
        ]
      }
    ]
  },
  {
    title: "Legal & Trust",
    icon: Star,
    href: "/all-links",
    description: "Our commitment to security, transparency, and elite gaming standards.",
    sections: [
      {
        name: "Core Policies",
        items: [
          { name: "Privacy Policy", href: "/privacy-policy" },
          { name: "Terms & Conditions", href: "/terms-conditions" },
          { name: "Responsible Gaming", href: "/responsible-gaming" },
          { name: "Legal Status", href: "/legal-status" },
        ]
      },
      {
        name: "Trust Audit",
        items: [
          { name: "Security & Safety", href: "/security-safety" },
          { name: "KYC Policy", href: "/kyc-verification-policy" },
          { name: "Refund Policy", href: "/refund-policy" },
          { name: "Rules & Regulations", href: "/rules-regulations" },
          { name: "Disclaimer", href: "/disclaimer" },
        ]
      }
    ]
  }
];


const footerExploreGroups: Array<{ title: string; links: Array<{ name: string; href: string }> }> = [
  {
    title: "More sports",
    links: [
      { name: "Basketball", href: "/basketball-betting" },
      { name: "eSports", href: "/esports-betting" },
      { name: "Kabaddi", href: "/kabaddi-betting" },
      { name: "Horse racing", href: "/horse-racing" },
      { name: "WPL 2026", href: "/wpl-betting" },
      { name: "Champions Trophy", href: "/champions-trophy" },
    ],
  },
  {
    title: "Compare Fairplay",
    links: [
      { name: "vs Lotus365", href: "/fairplay-vs-lotus365" },
      { name: "vs Reddybook", href: "/fairplay-vs-reddybook" },
      { name: "vs Gold365", href: "/fairplay-vs-gold365" },
      { name: "vs Mahavir Book", href: "/fairplay-vs-mahavir-book" },
      { name: "vs Diamond Exchange", href: "/fairplay-vs-diamond-exchange" },
      { name: "vs Laser247", href: "/fairplay-vs-laser247" },
      { name: "vs 11xplay", href: "/fairplay-vs-11xplay" },
      { name: "vs Skyexchange247", href: "/fairplay-vs-skyexchange247" },
      { name: "vs Fairdeal", href: "/fairplay-vs-fairdeal" },
    ],
  },
  {
    title: "Account help",
    links: [
      { name: "Account issues", href: "/account-issues" },
      { name: "Login issues", href: "/login-issues" },
      { name: "Deposit issues", href: "/deposit-issues" },
      { name: "Withdrawal issues", href: "/withdrawal-issues" },
      { name: "Bonus issues", href: "/bonus-issues" },
      { name: "Telegram channel", href: "/telegram-channel" },
      { name: "WhatsApp support", href: "/whatsapp-support" },
    ],
  },
  {
    title: "Trust & policies",
    links: [
      { name: "Is Fairplay legal?", href: "/is-fairplay-legal" },
      { name: "Is Fairplay safe?", href: "/is-fairplay-safe" },
      { name: "Is Fairplay real?", href: "/is-fairplay-real" },
      { name: "Security & safety", href: "/security-safety" },
      { name: "KYC policy", href: "/kyc-verification-policy" },
      { name: "Rules & regulations", href: "/rules-regulations" },
      { name: "Refund policy", href: "/refund-policy" },
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "Terms", href: "/terms-conditions" },
    ],
  },
];

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground flex flex-col relative">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
          style={{ scaleX }}
        />
        
        {/* Ultra-Premium Glass Header */}
        <header className="sticky top-0 z-50 w-full border-b border-white/[0.03] bg-[#0a0a0b]/60 backdrop-blur-xl transition-all duration-300">

          <div className="container flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-10">
              <Link to="/" className="flex items-center group relative">
                <img src="/logo.png" alt="Fairplay" className="h-7 w-auto object-contain transition-transform group-hover:scale-105" />
              </Link>
              
              <nav className="hidden lg:flex items-center space-x-1">
                {megaMenu.map((item) => (
                  <div 
                    key={item.title} 
                    className="relative"
                    onMouseEnter={() => setActiveSubmenu(item.title)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <Link
                      to={item.href}
                      className="px-4 py-1.5 rounded-lg text-[12px] font-bold tracking-tight transition-all hover:bg-white/5 hover:text-primary flex items-center gap-2 group/nav"
                    >
                      <item.icon className="w-3.5 h-3.5 opacity-60 group-hover/nav:opacity-100 transition-opacity" />
                      {item.title}
                      <motion.span 
                        animate={{ rotate: activeSubmenu === item.title ? 180 : 0 }}
                        className="text-[8px] opacity-30 group-hover/nav:opacity-100 ml-0.5"
                      >
                        ▼
                      </motion.span>
                    </Link>

                    <AnimatePresence>
                      {activeSubmenu === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
                        >
                          <div className="bg-[#0a0a0b]/98 border border-white/10 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-2xl p-5 min-w-[420px]">
                            <div className="mb-4 pb-4 border-b border-white/5">
                              <h3 className="text-[11px] font-black text-primary uppercase tracking-widest">{item.title}</h3>
                              <p className="text-[10px] text-white/30 mt-0.5">{item.description}</p>
                            </div>
                            <div className={`grid gap-6 ${item.sections.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                              {item.sections.map((section) => (
                                <div key={section.name} className="space-y-3">
                                  <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">{section.name}</h4>
                                  <div className="grid gap-1">
                                    {section.items.map((sub: any) => (
                                      <Link
                                        key={sub.name}
                                        to={sub.href}
                                        search={sub.search}
                                        className="group/sub flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5 transition-colors"
                                        onClick={() => setActiveSubmenu(null)}
                                      >
                                        <div className="flex items-center gap-2">
                                          <span className="text-[12px] font-medium text-white/60 group-hover/sub:text-primary transition-colors">{sub.name}</span>
                                          {sub.badge && (
                                            <span className="text-[7px] font-black px-1 py-0.5 rounded bg-primary text-black uppercase">{sub.badge}</span>
                                          )}
                                        </div>
                                        <span className="text-[10px] opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-primary">→</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link
                  to="/bonus"
                  className="px-4 py-1.5 rounded-lg text-[12px] font-bold tracking-tight transition-all hover:bg-white/5 hover:text-primary flex items-center gap-2"
                >
                  <Gift className="w-3.5 h-3.5 opacity-60" />
                  Promos
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <a
                  href={waLink("Hello Fairplay! I want to Join Now and get my ID.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group flex items-center justify-center px-10 py-3 rounded-full overflow-hidden bg-primary shadow-[0_0_30px_rgba(255,100,0,0.5)] transition-all hover:shadow-[0_0_50px_rgba(255,100,0,0.7)] hover:scale-105 active:scale-95 cursor-pointer"
                >
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 group-hover:opacity-40" />
                  
                  {/* Animated Shine */}
                  <motion.div 
                    animate={{ 
                      left: ['-150%', '150%'],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      repeatDelay: 0.5
                    }}
                    className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-35deg] z-20 pointer-events-none"
                  />

                  <div className="relative z-10 flex items-center gap-3">
                    <span className="text-[13px] font-black tracking-[0.25em] text-black drop-shadow-sm">JOIN NOW</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <UserPlus className="w-4 h-4 text-black stroke-[3]" />
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </a>
              </div>
              <button 
                className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-background/90 backdrop-blur-md lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed inset-y-0 right-0 z-50 w-full sm:w-[400px] bg-[#0a0a0b] border-l border-white/10 shadow-2xl lg:hidden flex flex-col"
              >
                <div className="p-6 flex items-center justify-between border-b border-white/5 bg-[#0a0a0b]">
                  <img src="/logo.png" alt="Fairplay" className="h-8 w-auto" />
                  <button 
                    onClick={() => setIsMenuOpen(false)} 
                    className="p-2 hover:bg-white/5 rounded-xl transition-colors border border-white/5"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                  {/* Primary Mobile Menu */}
                  <div className="space-y-6">
                    {megaMenu.map((item) => (
                      <div key={item.title} className="space-y-4">
                        <div className="flex items-center gap-4 group">
                          <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-all">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-black italic uppercase tracking-tighter text-white">{item.title}</h3>
                        </div>
                        
                        <div className="grid gap-4 pl-4 border-l border-white/5 ml-6">
                          {item.sections.map((section) => (
                            <div key={section.name} className="space-y-3">
                              <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">{section.name}</h4>
                              <div className="grid grid-cols-1 gap-2">
                                {section.items.map((sub: any) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.href}
                                    search={sub.search}
                                    className="flex items-center justify-between group/sub py-2 px-3 -mx-3 rounded-lg hover:bg-white/5 transition-all"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    <div className="flex items-center gap-3">
                                      <span className="text-sm font-bold text-white/70 group-hover/sub:text-primary transition-colors">
                                        {sub.name}
                                      </span>
                                      {sub.badge && (
                                        <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-primary text-black uppercase animate-pulse">
                                          {sub.badge}
                                        </span>
                                      )}
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-white/20 group-hover/sub:text-primary transition-all group-hover/sub:translate-x-1" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    {/* Standalone Mobile Links */}
                    <div className="space-y-4 pt-4 border-t border-white/5">
                      <Link
                        to="/bonus"
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                          <Gift className="w-6 h-6" />
                        </div>
                        <span className="text-lg font-black italic uppercase tracking-tighter text-white">Promos</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Bottom Actions */}
                <div className="p-6 border-t border-white/10 bg-[#0a0a0b] grid grid-cols-2 gap-4 pb-12">
                  <a
                    href={waLink("Hi Fairplay, I need help logging in to my Fairplay ID.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl border border-white/10 font-bold text-xs tracking-[0.2em] text-white hover:bg-white/5 transition-all text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    LOGIN
                  </a>
                  <a
                    href={waLink("Hello Fairplay! I want to Join Now and get my ID.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl bg-primary text-black font-black text-xs tracking-[0.2em] shadow-[0_10px_30px_rgba(255,100,0,0.3)] hover:scale-[1.02] active:scale-95 transition-all text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    JOIN NOW
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>


        <main className="flex-1">
          <PageBreadcrumbs />
          <Outlet />
          <PageInternalLinks />
          <FloatingWhatsApp />
          <WhatsAppNumberSync />
          <WebMcpTools />
        </main>

        {/* Ultra-Premium Cinematic Footer */}
        <footer className="relative bg-[#050505] pt-32 pb-12 overflow-hidden">
          {/* Subtle light leak for depth */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-14 gap-12 lg:gap-16 mb-20">
              <div className="md:col-span-2 lg:col-span-4 space-y-8">
                <Link to="/" className="inline-block group">
                  <img src="/logo.png" alt="Fairplay" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
                </Link>
                <p className="text-[15px] text-white/60 leading-relaxed font-medium">
                  Defining the future of elite sports exchange and cinematic casino experiences since 2017. Built on transparency, precision, and unrivaled performance.
                </p>
                <div className="flex items-center gap-4">
                  {[
                    { label: 'Instagram', path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                    { label: 'Telegram', icon: Send },
                    { label: 'Twitter', path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                    { label: 'Youtube', path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                    { label: 'Facebook', path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }
                  ].map((social) => (
                    <a 
                      key={social.label} 
                      href="#" 
                      className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1 group/social"
                    >
                      <span className="sr-only">{social.label}</span>
                      {social.icon ? (
                        <social.icon className="w-4 h-4 transition-transform group-hover/social:scale-110" />
                      ) : (
                        <svg className="w-4 h-4 transition-transform group-hover/social:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d={social.path} />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-8">Platforms</h4>
                <ul className="space-y-4 text-[14px] font-medium text-white/60">
                  <li><Link to="/betting" className="hover:text-white transition-colors">Sports exchange</Link></li>
                  <li><Link to="/casino" className="hover:text-white transition-colors">HD Casino</Link></li>
                  <li><Link to="/blog" className="hover:text-white transition-colors">Guides & blog</Link></li>
                  <li><Link to="/authors" className="hover:text-white transition-colors">Writers</Link></li>
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-8">Quick links</h4>
                <ul className="space-y-4 text-[14px] font-medium text-white/60">
                  <li><Link to="/schedule" className="hover:text-white transition-colors">2026–27 Match Schedule</Link></li>
                  <li><Link to="/matches" className="hover:text-white transition-colors">All matches</Link></li>
                  <li><Link to="/wpl-betting" className="hover:text-white transition-colors">WPL 2026 fixtures</Link></li>
                  <li><Link to="/champions-trophy" className="hover:text-white transition-colors">Champions Trophy</Link></li>
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-8">Markets</h4>
                <ul className="space-y-4 text-[14px] font-medium text-white/60">
                  <li><Link to="/ipl-betting" className="hover:text-white transition-colors">IPL betting</Link></li>
                  <li><Link to="/fairplay-id" className="hover:text-white transition-colors">Fairplay ID</Link></li>
                  <li><Link to="/t20-world-cup" className="hover:text-white transition-colors">T20 World Cup</Link></li>
                  <li><Link to="/deposit-guide" className="hover:text-white transition-colors">Deposit guide</Link></li>
                  <li><Link to="/fairplay-deposit-number" className="hover:text-white transition-colors">Deposit number</Link></li>
                  <li><Link to="/fairplay-withdrawal-number" className="hover:text-white transition-colors">Withdrawal number</Link></li>
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-8">Help</h4>
                <ul className="space-y-4 text-[14px] font-medium text-white/60">
                  <li><Link to="/support" className="hover:text-white transition-colors">Support hub</Link></li>
                  <li><Link to="/fairplay-customer-care-number" className="hover:text-white transition-colors">Customer Care Number</Link></li>
                  <li><Link to="/login-guide" className="hover:text-white transition-colors">Login guide</Link></li>
                  <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link to="/app" className="hover:text-white transition-colors">Download app</Link></li>
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-8">Compliance</h4>
                <ul className="space-y-4 text-[14px] font-medium text-white/60">
                  <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link to="/authors" className="hover:text-white transition-colors">Writers</Link></li>
                  <li><Link to="/responsible-gaming" className="hover:text-white transition-colors">Responsible gaming</Link></li>
                  <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link to="/all-links" className="hover:text-white transition-colors">Site index</Link></li>
                </ul>
              </div>
            </div>

            {/* Crawlable index of pages that otherwise only live in the hover mega menu. */}
            <nav aria-label="Explore Fairplay" className="pt-12 border-t border-white/5 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {footerExploreGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-4">{group.title}</h4>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[12px] font-medium text-white/45">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link to={link.href} className="hover:text-primary transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-wrap justify-center gap-8 text-[12px] font-bold text-white/50 uppercase tracking-widest">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms</Link>
                <Link to="/responsible-gaming" className="hover:text-white transition-colors">Responsible</Link>
                <Link to="/legal-status" className="hover:text-white transition-colors">Legal</Link>
                <Link to="/all-links" className="hover:text-white transition-colors">Site Index</Link>
              </div>
              
              <div className="flex flex-col items-center md:items-end gap-2">
                <p className="text-[12px] font-bold text-white/50 uppercase tracking-[0.2em]">© 2026 FAIRPLAY ELITE</p>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black px-2 py-0.5 rounded border border-white/20 text-white/50">18+</span>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded border border-white/20 text-white/50">SECURE SSL</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}