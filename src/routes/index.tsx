import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, ArrowRight, ShieldCheck, Smartphone, Gift, Trophy, PlayCircle } from "lucide-react";
import { OverviewSection } from "@/components/OverviewSection";
import { EliteGamingSection } from "@/components/EliteGamingSection";
import { HeroBanner } from "@/components/HeroBanner";
import { InPlaySection } from "@/components/InPlaySection";
import { LiveTablesSection } from "@/components/LiveTablesSection";
import { BettingStepsSection } from "@/components/BettingStepsSection";
import { RecentPostsSection } from "@/components/RecentPostsSection";
import { FAQSection } from "@/components/FAQSection";
import { OG_IMAGE, SITE_ORIGIN } from "@/utils/page-seo";


export const Route = createFileRoute("/")({
  head: ({ loaderData }) => {
    const matches = loaderData?.matchKeywords || [];
    const title = "Fairplay | Cricket ID, IPL markets, app and UPI wallet";
    const description = matches.length > 0
      ? `Fairplay cricket ID for IPL, football and live tables. Live now: ${matches.slice(0, 4).join(", ")}. UPI deposits, WhatsApp desk, payouts after settlement.`
      : "Open a Fairplay cricket ID for IPL, football, tennis and live casino. UPI into the wallet, sign in with OTP, withdraw after the official result.";

    return {
      title,
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: SITE_ORIGIN },
        { property: "og:locale", content: "en_IN" },
        { property: "og:site_name", content: "Fairplay" },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: OG_IMAGE },
        { name: "robots", content: "index, follow" }
      ],
      links: [{ rel: "canonical", href: SITE_ORIGIN }],
    };
  },
  loader: async () => {
    try {
      const response = await fetch("https://b2b.max247.co/api/public/exchange/odds/inPlayAndPopularEvents");
      const data = await response.json();
      const combined = [
        ...(data.result?.inPlayEvents || []),
        ...(data.result?.popularEvents || [])
      ];
      const uniqueNames = Array.from(new Set(combined.map(e => e.event?.name).filter(Boolean)));
      return { matchKeywords: uniqueNames };
    } catch (e) {
      return { matchKeywords: [] };
    }
  },
  component: Index,
});



function Index() {
  return (
    <div className="flex w-full flex-col overflow-hidden noise-bg">
      <HeroBanner />

      <section className="border-b border-white/5 px-4 py-5 sm:px-6 sm:py-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { to: "/fairplay-id", label: "Open an ID", hint: "WhatsApp · ~2 min", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>, accent: "text-primary", bg: "bg-primary", bgSubtle: "bg-primary/10", border: "hover:border-primary/50" },
              { to: "/betting", label: "Live Markets", hint: "Cricket, football & tennis", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, accent: "text-emerald-400", bg: "bg-emerald-500", bgSubtle: "bg-emerald-500/10", border: "hover:border-emerald-500/50" },
              { to: "/casino", label: "Live Tables", hint: "Same wallet, 24/7", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>, accent: "text-orange-400", bg: "bg-orange-500", bgSubtle: "bg-orange-500/10", border: "hover:border-orange-500/50" },
              { to: "/deposit-guide", label: "Fund with UPI", hint: "Keep the UTR", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>, accent: "text-yellow-400", bg: "bg-yellow-500", bgSubtle: "bg-yellow-500/10", border: "hover:border-yellow-500/50" },
            ].map((item, idx) => (
              <Link
                key={item.to}
                to={item.to}
                className={`group relative overflow-hidden rounded-xl border border-white/[0.08] bg-card/50 backdrop-blur-sm px-3.5 py-3 transition-all duration-300 hover:bg-card/80 hover:border-white/15 ${item.border} cursor-pointer`}
              >
                {/* Subtle gradient overlay */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${item.bgSubtle} to-transparent`} />
                {/* Left accent bar */}
                <div className={`absolute left-0 top-3 bottom-3 w-[2px] rounded-full bg-gradient-to-b from-transparent ${item.bgSubtle.replace("/10", "")} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                {/* Icon badge */}
                <div className="relative mb-2.5 flex items-center gap-2.5">
                  <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.bgSubtle} ${item.accent} transition-transform duration-300 group-hover:scale-105`}>
                    {item.icon}
                  </div>
                  {idx < 2 && (
                    <span className={`absolute left-8 flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider backdrop-blur-sm ${item.accent}`}>
                      <span className={`relative flex h-1 w-1`}>
                        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${idx === 0 ? "bg-primary" : "bg-emerald-400"} opacity-70`} />
                        <span className={`relative inline-flex h-1 w-1 rounded-full ${idx === 0 ? "bg-primary" : "bg-emerald-400"}`} />
                      </span>
                      {idx === 0 ? "Instant" : "Live"}
                    </span>
                  )}
                </div>
                {/* Label */}
                <h3 className={`relative text-[13px] font-semibold tracking-tight transition-colors duration-300 ${item.accent} group-hover:brightness-110`}>
                  {item.label}
                </h3>
                {/* Hint */}
                <p className="relative mt-0.5 text-[10.5px] text-muted-foreground transition-colors duration-300 group-hover:text-white/60">
                  {item.hint}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <OverviewSection />

      <EliteGamingSection />

      <InPlaySection key="fresh-inplay-v2" />

      <LiveTablesSection />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="container mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-white/8 border-l-2 border-l-primary bg-card/70 p-6 sm:p-8">
            <Trophy className="mb-5 h-10 w-10 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Cricket & sports</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              IPL, Tests, ODIs and T20s on the exchange. Match winner, toss and fancy sessions sit next to football and tennis on the same ID.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
              <Link to="/ipl-betting" className="hover:text-primary">IPL books</Link>
              <Link to="/schedule" className="hover:text-primary">2026 calendar</Link>
              <Link to="/fairplay-id" className="hover:text-primary">Fairplay ID</Link>
              <Link to="/betting" search={{ category: "tennis" }} className="hover:text-primary">Tennis</Link>
            </div>
            <Link to="/betting" className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-flame hover:text-flame-foreground">
              Open markets <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-xl border border-white/8 border-l-2 border-l-flame bg-card/70 p-6 sm:p-8">
            <PlayCircle className="mb-5 h-10 w-10 text-flame" />
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Live casino</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Dealers on HD streams, Indian card games and slots. Andar Bahar and Teen Patti run beside roulette — same Fairplay wallet.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
              <Link to="/casino" search={{ type: "indian" }} className="hover:text-flame">Andar Bahar</Link>
              <Link to="/casino" search={{ type: "indian" }} className="hover:text-flame">Teen Patti</Link>
              <Link to="/casino" search={{ type: "crash" }} className="hover:text-flame">Crash</Link>
              <Link to="/casino" search={{ type: "live" }} className="hover:text-flame">Live dealers</Link>
            </div>
            <Link to="/casino" className="mt-7 inline-flex items-center gap-2 rounded-md bg-flame px-5 py-3 text-sm font-semibold text-flame-foreground hover:bg-flame/90">
              Open tables <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <BettingStepsSection />

      <RecentPostsSection />

      <FAQSection
        title="Fairplay, in a few questions"
        faqs={[
          { q: "What is Fairplay?", a: "Fairplay is a sports exchange plus live casino. You open a Fairplay ID, fund it with UPI, and bet cricket (including IPL), football, tennis or tables. Withdrawals wait for the official result." },
          { q: "How do I open a Fairplay ID?", a: "Message the official WhatsApp on this site. After a short check you sign in with that mobile number and an OTP. The same ID works in the app and in a browser." },
          { q: "How long do withdrawals take?", a: "Settled winnings usually reach the Fairplay wallet within 180 minutes of the official result. UPI or bank payout follows. KYC can pause a request." },
          { q: "Can one ID cover cricket and casino?", a: "Yes. Cricket, football, tennis and live tables share one Fairplay ID and one wallet. Partner exchanges are only added if the desk says so." }
        ]}
      />

      <section className="border-t border-white/8 px-4 py-16 sm:px-6 sm:py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-xl border border-white/8 bg-card/70 p-6 sm:p-8 lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                First-deposit match <span className="text-primary">up to ₹1,00,000</span>
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                Welcome offer, referral credit and cashback nights — terms sit on the bonus page. Read wagering before you opt in.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { title: "Referral credit", desc: "A cut when someone you send opens an ID and funds it." },
                  { title: "Cashback nights", desc: "Loss rebates on selected books. Check the window first." },
                  { title: "Occasional free bets", desc: "Issued now and then to IDs that have already passed KYC." },
                ].map((b) => (
                  <div key={b.title} className="rounded-lg border border-white/8 bg-ink-deep/40 p-4">
                    <h3 className="text-sm font-semibold">{b.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">{b.desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/bonus" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-flame hover:text-flame-foreground">
                See bonus terms <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col justify-between rounded-xl border border-white/8 bg-card/70 p-6 sm:p-8">
              <div>
                <Smartphone className="mb-4 h-9 w-9 text-primary" />
                <h2 className="text-xl font-bold tracking-tight">Same ID on your phone</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Android APK or iOS shortcut. Cricket, tables, UPI and WhatsApp — the login is the number you already use.
                </p>
              </div>
              <Link to="/app" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Get the app <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/8 bg-card/40 p-5 text-center sm:p-6">
              <ShieldCheck className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="font-semibold">Licensed exchange</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Curaçao 365/JAZ. Cricket IDs since 2017.</p>
            </div>
            <div className="rounded-xl border border-white/8 bg-card/40 p-5 text-center sm:p-6">
              <Zap className="mx-auto mb-3 h-8 w-8 text-flame" />
              <h3 className="font-semibold">One wallet</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Sports and tables share a login. No second registration.</p>
            </div>
            <div className="rounded-xl border border-white/8 bg-card/40 p-5 text-center sm:p-6">
              <Gift className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="font-semibold">Desk on WhatsApp</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">IDs, OTP and payouts go through the official chat.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 px-4 py-16 sm:px-6 sm:py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[2px] w-8 brand-rule" />
            <span className="kicker">Shortcuts</span>
          </div>
          <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-4xl">ID, IPL, wallet and help</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              { title: "Open an ID", href: "/register-guide" },
              { title: "Sign in", href: "/login-guide" },
              { title: "IPL 2026", href: "/ipl-betting" },
              { title: "Live tables", href: "/casino" },
              { title: "Bonuses", href: "/bonus" },
              { title: "Partner books", href: "/services" },
              { title: "Support", href: "/support" },
              { title: "Mobile app", href: "/app" },
              { title: "About", href: "/about" },
              { title: "Privacy", href: "/privacy-policy" },
              { title: "Terms", href: "/terms-conditions" },
              { title: "Live cricket", href: "/betting" },
            ].map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="rounded-md border border-white/8 bg-card px-3 py-3.5 text-center text-[13px] font-semibold transition-colors hover:border-primary/40 hover:text-primary sm:text-sm"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
