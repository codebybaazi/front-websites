import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, ArrowRight, ShieldCheck, Smartphone, Gift, Trophy, Swords, PlayCircle, Star, TrendingUp, Clock, Users, Flame, Activity, Crown, Spade, Dices } from "lucide-react";
import cricketImg from "@/assets/betting/cricket.jpg";
import footballImg from "@/assets/betting/football.jpg";
import tennisImg from "@/assets/betting/tennis.jpg";
import kabaddiImg from "@/assets/betting/kabaddi.jpg";
import horseRacingImg from "@/assets/betting/horse-racing.jpg";
import liveCasinoImg from "@/assets/betting/live-casino.jpg";
import teenPattiImg from "@/assets/betting/teen-patti.jpg";
import fancyBetsImg from "@/assets/betting/fancy-bets.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { OverviewSection } from "@/components/OverviewSection";
import { HeroBanner } from "@/components/HeroBanner";

import { TrustedExchangesSection } from "@/components/TrustedExchangesSection";
import { InPlaySection } from "@/components/InPlaySection";
import { PlayOptionsSection } from "@/components/PlayOptionsSection";
import { BettingStepsSection } from "@/components/BettingStepsSection";
import { RecentPostsSection } from "@/components/RecentPostsSection";
import { FAQSection } from "@/components/FAQSection";
import { OG_IMAGE, SITE_ORIGIN } from "@/utils/page-seo";
import { waLink } from "@/lib/whatsapp";



export const Route = createFileRoute("/")({
  head: ({ loaderData }) => {
    const matches = loaderData?.matchKeywords || [];
    const liveBit = matches.length > 0 ? ` Live: ${matches.slice(0, 3).join(", ")}.` : "";
    const title = "Fairplay | Cricket ID, sports betting and live casino";
    const description = matches.length > 0
      ? `Fairplay cricket ID and sports exchange. Bet live on ${matches.slice(0, 5).join(", ")}. UPI deposits and withdrawals that usually settle in 180 minutes.${liveBit}`
      : "Fairplay is a cricket ID and sports exchange for IPL, football and tennis, plus live casino. UPI deposits and withdrawals that usually settle in 180 minutes.";
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

const quickLinks = [
  { title: "Bonuses", desc: "Welcome offer and codes", icon: Gift, color: "text-orange-500", href: "/bonus" },
  { title: "Casino", desc: "Teen Patti and live tables", icon: Swords, color: "text-blue-500", href: "/casino" },
  { title: "Sports", desc: "Cricket, football, tennis", icon: Trophy, color: "text-green-500", href: "/betting" },
  { title: "Fairplay ID", desc: "Get a cricket ID", icon: ShieldCheck, color: "text-yellow-500", href: "/fairplay-id" },
];

function Index() {
  return (
    <div className="flex flex-col w-full overflow-hidden noise-bg">
      <HeroBanner />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 px-4 overflow-hidden">


        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" 
          />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-element" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '-3s' }} />


        <div className="container max-w-7xl mx-auto relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl relative"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Zap className="w-3 h-3 fill-current" /> Established 2017
            </motion.div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 italic overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block"
              >
                Fairplay
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-gradient-orange not-italic block py-2 relative"
              >
                Sports betting
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block"
              >
                exchange
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg sm:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl leading-relaxed"
            >
              India's cricket ID, live football and tennis markets, plus HD casino — UPI deposits and withdrawals that settle in 180 minutes.
            </motion.p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8">
              <a 
                href={waLink("Hello Fairplay! I want to Sign Up and get my Verified ID.")} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground font-black rounded-xl electric-pulse hover:scale-105 transition-all flex items-center justify-center gap-2 text-base sm:text-lg group w-full sm:w-auto"
              >
                SIGN UP NOW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/fairplay-id" className="px-6 sm:px-10 py-4 sm:py-5 bg-card border border-border text-foreground font-black rounded-xl hover:bg-accent hover:scale-105 transition-all flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto">
              Get a Fairplay ID
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links REMOVED */}

      {/* Expanded Overview Section - India's Trusted Online Cricket ID Platform */}
      <OverviewSection />

      {/* Leading & Trusted Exchange Section */}
      <TrustedExchangesSection />

 
      {/* Betting Options Available Section (Synchronized with Elite Standards) */}
      <section className="py-24 px-4 border-t border-white/5 bg-primary/[0.01] relative overflow-hidden" id="betting-options">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-[2px] w-12 bg-primary animate-width-reveal" />
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">One ID · All Markets</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
                BETTING OPTIONS <br />
                <span className="text-primary not-italic">AVAILABLE</span>
              </h2>
              <p className="text-muted-foreground text-xl border-l-2 border-primary/40 pl-8 italic max-w-xl">
                30+ sports, cricket exchange markets and 100+ live casino games on a single verified Fairplay ID.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "CRICKET", sub: "IPL · T20 · ODI · Test", icon: Trophy, color: "text-primary", href: "/betting", img: cricketImg },
              { title: "FOOTBALL", sub: "EPL · UCL · La Liga", icon: Flame, color: "text-blue-500", href: "/betting", img: footballImg },
              { title: "TENNIS", sub: "ATP · WTA · Grand Slams", icon: Activity, color: "text-green-500", href: "/betting", img: tennisImg },
              { title: "KABADDI", sub: "PKL & Internationals", icon: Swords, color: "text-orange-500", href: "/betting", img: kabaddiImg },
              { title: "HORSE RACING", sub: "Global Race Meets", icon: Crown, color: "text-yellow-500", href: "/betting", img: horseRacingImg },
              { title: "LIVE CASINO", sub: "Baccarat · Roulette · Dragon Tiger", icon: PlayCircle, color: "text-blue-400", href: "/casino", img: liveCasinoImg },
              { title: "TEEN PATTI", sub: "Andar Bahar · Rummy", icon: Spade, color: "text-red-500", href: "/casino", img: teenPattiImg },
              { title: "FANCY BETS", sub: "Session · Over Markets", icon: Dices, color: "text-primary", href: "/betting", img: fancyBetsImg },
            ].map((opt, i) => (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <Link 
                  to={opt.href} 
                  className="group relative h-80 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-700 block shine-effect glow-border shadow-2xl"
                  aria-label={`Betting Options: ${opt.title} - ${opt.sub}`}
                  title={`${opt.title} Betting Markets - Fairplay`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${opt.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Glass Header Tag for Categories */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-[8px] font-black uppercase tracking-[0.2em] text-white/70 group-hover:text-primary transition-colors">
                      Fairplay Elite
                    </div>
                  </div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <motion.div 
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className={`w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 ${opt.color}`}
                    >
                      <opt.icon className="w-7 h-7" />
                    </motion.div>
                    
                    <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                      <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors flex items-center gap-3">
                        {opt.title}
                        <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary" />
                      </h3>
                      <p className="text-[11px] text-white/40 font-black uppercase tracking-[0.25em] group-hover:text-white transition-colors">
                        {opt.sub}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-1000 ease-in-out" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Play Section */}
      <InPlaySection key="fresh-inplay-v2" />

      {/* What You Can Play Section */}
      <PlayOptionsSection />

      {/* Six Steps to Your First Bet Section */}
      <BettingStepsSection />

      {/* Recent Posts & Analysis Section */}
      <RecentPostsSection />

      <FAQSection 
        title="Fairplay questions"
        faqs={[
          { q: "What is Fairplay?", a: "Fairplay is a sports exchange and live casino. You get a Fairplay ID, deposit with UPI, and bet cricket (including IPL), football, tennis or tables — then withdraw after markets settle." },
          { q: "How do I get a Fairplay ID?", a: "Message official WhatsApp, complete a short check, then log in with OTP. The same ID works on the app and in a browser." },
          { q: "How long do Fairplay withdrawals take?", a: "Settled winnings usually reach the Fairplay wallet within 180 minutes of the official result. Payouts to UPI or bank follow after that, unless KYC is pending." },
          { q: "Can one Fairplay ID cover cricket and casino?", a: "Yes. Cricket, football, tennis and live casino share one Fairplay ID and one wallet. Partner exchanges are only added if the desk says so." }
        ]}
      />




      {/* Additional Markets & Casino Quick Access */}
      <section className="py-24 px-4 bg-background">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Link to="/casino" className="glass-card p-10 rounded-3xl relative overflow-hidden group border border-blue-500/20 shine-effect hover:border-blue-500/40 transition-all">
              <PlayCircle className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black italic uppercase mb-4">Live Casino</h3>
              <p className="text-muted-foreground text-sm">Experience real-time HD dealer action with Indian classics.</p>
            </Link>
            <Link to="/betting" className="glass-card p-10 rounded-3xl relative overflow-hidden group border border-primary/20 shine-effect hover:border-primary/40 transition-all">
              <Trophy className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black italic uppercase mb-4">Horse Racing</h3>
              <p className="text-muted-foreground text-sm">Win, place and in-running on the same Fairplay ID as cricket.</p>
            </Link>
            <Link to="/bonus" className="glass-card p-10 rounded-3xl relative overflow-hidden group border border-green-500/20 shine-effect hover:border-green-500/40 transition-all">
              <Gift className="w-12 h-12 text-green-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black italic uppercase mb-4">Fairplay bonuses</h3>
              <p className="text-muted-foreground text-sm">Welcome offer and promo codes after a qualifying UPI deposit.</p>
            </Link>
          </div>
        </div>
      </section>

        {/* In-Play & Popular Events Section moved to top */}


 
       {/* Login & Register Guide Section */}
       <section className="py-24 px-4 container max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-16"
            >
              <Link to="/login-guide" className="glass-card p-12 rounded-3xl hover:border-primary transition-all group block relative overflow-hidden shine-effect">
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-6 group-hover:text-primary transition-colors">How to Log In</h2>
                <p className="text-muted-foreground mb-6">Access your dashboard by entering your registered phone number. OTP verification ensures your funds and betting history remain secure.</p>
                <span className="text-primary font-black flex items-center gap-2">Login Now <ArrowRight className="group-hover:translate-x-2 transition-transform" /></span>
              </Link>
              <Link to="/register-guide" className="glass-card p-12 rounded-3xl hover:border-primary transition-all group block relative overflow-hidden shine-effect">
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-6 group-hover:text-primary transition-colors">How to Register</h2>
                <p className="text-muted-foreground mb-6">Create your account in under 2 minutes. All you need is a phone number to start your elite gaming journey.</p>
                <span className="text-primary font-black flex items-center gap-2">Create Account <ArrowRight className="group-hover:translate-x-2 transition-transform" /></span>
              </Link>
            </motion.div>

      </section>

      {/* Sports & Casino Sections */}
      <section className="py-24 px-4 container max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16"
        >
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card p-12 rounded-3xl relative overflow-hidden group border border-primary/20 shine-effect"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy className="w-32 h-32 text-primary" />
            </div>
            <Trophy className="w-16 h-16 text-primary mb-8 animate-pulse" />
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-6">Cricket & Sports</h2>
            <p className="text-lg text-muted-foreground mb-8">Home of premium cricket exchange betting. IPL, Test, ODI, T20 – experience market-leading liquidity and in-play precision with Match Winner, Toss, and Fancy bets.</p>
            <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
              <Link to="/ipl-betting" className="flex items-center gap-2 hover:text-primary transition-colors group/link"><div className="w-1.5 h-1.5 rounded-full bg-primary transition-transform group-hover/link:scale-150" /> IPL Special</Link>
              <Link to="/schedule" className="flex items-center gap-2 hover:text-primary transition-colors group/link"><div className="w-1.5 h-1.5 rounded-full bg-primary transition-transform group-hover/link:scale-150" /> 2026 Schedule</Link>
              <Link to="/fairplay-id" className="flex items-center gap-2 hover:text-primary transition-colors group/link"><div className="w-1.5 h-1.5 rounded-full bg-primary transition-transform group-hover/link:scale-150" /> Fairplay ID</Link>
              <Link to="/betting" search={{ category: 'tennis' }} className="flex items-center gap-2 hover:text-primary transition-colors group/link"><div className="w-1.5 h-1.5 rounded-full bg-primary transition-transform group-hover/link:scale-150" /> Tennis Exchange</Link>
            </div>
            <Link to="/betting" className="px-8 py-4 bg-primary text-primary-foreground font-black rounded-xl inline-flex items-center gap-2 group-hover:gap-4 transition-all">
              GO TO SPORTSBOOK <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card p-12 rounded-3xl relative overflow-hidden group border border-blue-500/20 shine-effect"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <PlayCircle className="w-32 h-32 text-blue-500" />
            </div>
            <PlayCircle className="w-16 h-16 text-blue-500 mb-8 animate-pulse" />
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-6">HD Casino Palace</h2>
            <p className="text-lg text-muted-foreground mb-8">Professional dealers, HD streams, 1000+ slots. Experience Indian classics like Andar Bahar and Teen Patti alongside global favorites like Roulette.</p>
            <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
              <Link to="/casino" search={{ type: 'indian' }} className="flex items-center gap-2 hover:text-blue-500 transition-colors group/link"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 transition-transform group-hover/link:scale-150" /> Andar Bahar</Link>
              <Link to="/casino" search={{ type: 'indian' }} className="flex items-center gap-2 hover:text-blue-500 transition-colors group/link"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 transition-transform group-hover/link:scale-150" /> Teen Patti</Link>
              <Link to="/casino" search={{ type: 'crash' }} className="flex items-center gap-2 hover:text-blue-500 transition-colors group/link"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 transition-transform group-hover/link:scale-150" /> Crash Games</Link>
              <Link to="/casino" search={{ type: 'live' }} className="flex items-center gap-2 hover:text-blue-500 transition-colors group/link"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 transition-transform group-hover/link:scale-150" /> Live Dealers</Link>
            </div>
            <Link to="/casino" className="px-8 py-4 bg-blue-600 text-white font-black rounded-xl inline-flex items-center gap-2 group-hover:gap-4 transition-all shadow-lg shadow-blue-600/20">
              OPEN CASINO <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

      </section>

      {/* Bonus Detailed Section */}
      <section className="py-24 px-4 bg-card/10">
        <div className="container max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-16">
              Welcome Bonus <br/> <span className="text-primary not-italic text-3xl sm:text-5xl md:text-7xl">Max 100,000 INR</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Referral Bonus", desc: "Earn daily rewards for every friend you invite to the FairPlay elite network." },
                { title: "Cashback", desc: "Mitigate losses with daily cashback programs for participating members." },
                { title: "No-Deposit", desc: "Occasional free bets and spins for our most loyal verified users." },
              ].map((b) => (
                <motion.div 
                  key={b.title} 
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="glass-card p-10 rounded-3xl border border-white/5"
                >
                  <h3 className="text-2xl font-black italic mb-4 uppercase">{b.title}</h3>
                  <p className="text-muted-foreground">{b.desc}</p>
                </motion.div>

              ))}
            </div>
            <div className="mt-16">
              <Link to="/bonus" className="px-12 py-6 bg-primary text-primary-foreground font-black rounded-2xl hover:scale-105 transition-all inline-flex items-center gap-3">
                CLAIM YOUR REWARDS <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Experience */}
      <section className="py-24 px-4 text-center">
        <div className="container max-w-4xl mx-auto">
          <Smartphone className="w-20 h-20 mx-auto mb-10 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter italic">
            Fairplay app <br/> <span className="text-primary not-italic">on your phone</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Same Fairplay ID as the website: cricket, IPL, casino, UPI deposits and WhatsApp help on Android and iOS.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/app" className="px-12 py-6 bg-card border border-border rounded-2xl font-black flex items-center gap-4 hover:bg-accent transition-all group">
              <div className="text-left leading-none">
                <span className="text-[10px] opacity-60 uppercase tracking-widest font-bold">Download on</span>
                <div className="text-xl italic">iOS & Android</div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-24 px-4 bg-primary/5">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold uppercase mb-4">Certified Safe</h3>
              <p className="text-muted-foreground text-sm">Holding the Curaçao 365/JAZ licence, ensuring a fair and regulated gaming environment since 2017.</p>
            </div>
            <div>
              <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold uppercase mb-4">Instant Access</h3>
              <p className="text-muted-foreground text-sm">One wallet, one login for all services. Transition seamlessly between sports and casino.</p>
            </div>
            <div>
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold uppercase mb-4">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">Reach out anytime via Live Chat, WhatsApp, or Email for professional assistance.</p>
            </div>
          </div>
        </div>
      </section>
    
      {/* SEO Friendly Quick Links Section */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-[2px] w-10 bg-primary" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">Quick Access</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-12">Fairplay ID, IPL and support</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { title: "Get a Fairplay ID", href: "/register-guide" },
              { title: "Fairplay login", href: "/login-guide" },
              { title: "IPL 2026", href: "/ipl-betting" },
              { title: "Live casino", href: "/casino" },
              { title: "Bonuses", href: "/bonus" },
              { title: "Partner books", href: "/services" },
              { title: "Support", href: "/support" },
              { title: "Fairplay app", href: "/app" },
              { title: "About Fairplay", href: "/about" },
              { title: "Privacy Policy", href: "/privacy-policy" },
              { title: "Terms of Service", href: "/terms-conditions" },
              { title: "Live Cricket", href: "/betting" },
            ].map((link, i) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  to={link.href} 
                  className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all text-center group block"
                >
                  <span className="text-sm font-bold uppercase tracking-tight group-hover:text-primary transition-colors">{link.title}</span>
                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
