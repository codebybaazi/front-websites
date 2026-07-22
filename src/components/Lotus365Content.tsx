import { InPlayMatches } from "@/components/InPlayMatches";
import { POSTS } from "@/data/posts";

import {

  ClipboardCheck,
  ShieldCheck,
  Wallet,
  Gift,
  Target,
  TrendingUp,
  Smartphone,
  Apple,
  Lock,
  Fingerprint,
  CreditCard,
  FileLock2,
  ShieldAlert,
  BellRing,
  Trophy,
  Users,
  Star,
  Flame,
} from "lucide-react";

const startSteps = [
  {
    n: "01",
    icon: ClipboardCheck,
    t: "Create Your Free Account",
    d: "Head to the official Lotus365 site, tap Sign Up and share a few basics — name, email and mobile. Onboarding is fully free and secured end-to-end.",
  },
  {
    n: "02",
    icon: ShieldCheck,
    t: "Verify in Minutes",
    d: "Confirm the OTP sent to your phone or email and, if prompted, upload a valid ID. Once approved, every Lotus365 feature unlocks instantly.",
  },
  {
    n: "03",
    icon: Wallet,
    t: "Fund Your Wallet Securely",
    d: "Top up with UPI, net banking or trusted e-wallets. Choose your deposit amount and enjoy fast, encrypted transactions around the clock.",
  },
  {
    n: "04",
    icon: Gift,
    t: "Unlock the Welcome Bonus",
    d: "New members receive an exclusive first-deposit match. Use the bonus credit across live sports markets and premium casino tables.",
  },
  {
    n: "05",
    icon: Target,
    t: "Pick Your Game or Sport",
    d: "Explore cricket, football, tennis, kabaddi and a full live casino floor. Browse markets, follow live scores and back your instincts.",
  },
  {
    n: "06",
    icon: TrendingUp,
    t: "Play & Track Winnings",
    d: "Place single-tap bets, watch live updates and withdraw your winnings any time — payouts settle in minutes, not days.",
  },
];

const sports = [
  { t: "Cricket", d: "The centrepiece of Lotus365. Back IPL, T20 World Cup and every major league with live overs, ball-by-ball odds and deep player markets." },
  { t: "Football", d: "Follow the Premier League, La Liga, Serie A and the Champions League. Real-time odds, team stats and goal-scorer markets keep every 90 minutes electric." },
  { t: "Tennis", d: "Wimbledon, US Open and the full ATP/WTA calendar. Bet set winners, total games and live match momentum with sharp in-play pricing." },
  { t: "Basketball", d: "NBA, EuroLeague and international showdowns. Wager on points totals, quarter results and standout player props in real time." },
  { t: "Esports", d: "CS2, Dota 2, Valorant and PUBG Mobile. Live streams, live stats and instant markets built for a new generation of fans." },
  { t: "Horse Racing", d: "A classic reimagined. Track international meets, study going reports and place win, place and each-way bets with confidence." },
];

const casino = [
  { n: "01", t: "Online Slots", d: "Our most-played category. Bold themes, jackpots and free-spin features designed for quick, casual entertainment." },
  { n: "02", t: "Teen Patti", d: "India's favourite card game live 24/7. Real dealers, competitive tables and regular tournaments with sizeable prize pools." },
  { n: "03", t: "Andar Bahar", d: "Simple, snappy and instantly addictive. Pick a side, watch the card fall and collect — perfect for short, high-energy sessions." },
  { n: "04", t: "Roulette", d: "European, American and French wheels served by live hosts. Classic elegance with a modern, low-latency table experience." },
  { n: "05", t: "Baccarat", d: "The game of poise. Balanced odds, a low house edge and a rhythm that keeps seasoned players coming back." },
  { n: "06", t: "Blackjack", d: "Skill meets nerve. Beat the dealer to 21 across live tables with side bets, deep shoes and generous limits." },
];

const bonuses = [
  { n: "01", t: "Welcome Bonus", d: "A 100% match on your first deposit — put in ₹1,000 or more and instantly double your play balance." },
  { n: "02", t: "Loyalty Rewards", d: "Regular players climb loyalty tiers to unlock cashback, free bets and members-only promotions each month." },
  { n: "03", t: "Reload Bonus", d: "A 50% top-up on your second and third deposits keeps momentum going through the week." },
  { n: "04", t: "Referral Bonus", d: "Invite a friend and receive ₹500 the moment they register and make their first deposit — no cap on referrals." },
  { n: "05", t: "Weekly Cashback", d: "Get 10% back on net weekly losses, credited automatically every Monday morning." },
  { n: "06", t: "Festival Boosts", d: "Seasonal offers around IPL, Diwali and the World Cup — deposit boosts, free spins and limited-edition coupons." },
];

const security = [
  { icon: Lock, t: "256-bit SSL Encryption", d: "Every deposit, withdrawal and personal detail is protected by bank-grade encryption end to end." },
  { icon: Fingerprint, t: "Two-Factor Authentication", d: "Enable 2FA to receive a verification code on login or withdrawal — a second lock on your account." },
  { icon: CreditCard, t: "Verified Payment Rails", d: "All money movement flows through trusted, licensed gateways with real-time fraud monitoring." },
  { icon: FileLock2, t: "Data Privacy by Default", d: "Your information is stored under strict privacy protocols and never shared with third parties." },
  { icon: ShieldAlert, t: "Regular Security Audits", d: "Independent audits stress-test the platform frequently, so vulnerabilities get patched before they matter." },
  { icon: BellRing, t: "Live Account Alerts", d: "Any unusual activity triggers an instant notification, so you stay in control at every moment." },
];

const stats = [
  { icon: Users, n: "2M+", l: "Verified Players" },
  { icon: Smartphone, n: "840K+", l: "App Installs" },
  { icon: Star, n: "4.8/5", l: "Member Rating" },
  { icon: Flame, n: "34K+", l: "Daily Active Bettors" },
];

export function Lotus365Content() {
  return (
    <>
      {/* Live betting overview */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            Live on Lotus365
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            IPL 2027 &amp; the <span className="gold-text">50-over World Cup</span> — trade every ball.
          </h2>
          <p className="text-foreground/90 mt-5 leading-relaxed">
            Two mega-tournaments. One gold-tier platform. From the IPL 2027 opener to the ICC Cricket
            World Cup 2027 final in South Africa, Lotus365 opens deep in-play markets, fancy odds and
            instant WhatsApp payouts — 24/7, 365.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              tag: "Mar – May 2027",
              t: "IPL 2027 In-Play",
              d: "Ball-by-ball markets, session odds, player props and lightning cash-out on every over of the 20th IPL season.",
              chip: "T20 · 74 Matches",
            },
            {
              tag: "Oct – Nov 2027",
              t: "ICC World Cup 2027",
              d: "50-over glory across South Africa, Zimbabwe & Namibia — back your nation with premium pricing and daily cashback.",
              chip: "ODI · 14 Nations",
              hot: true,
            },
            {
              tag: "All Season",
              t: "Bilateral & The Ashes",
              d: "India tours, Ashes 2027, T20 leagues and kabaddi run alongside — fresh markets drop every match-week.",
              chip: "365 Days Live",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="glass-card rounded-2xl p-7 relative overflow-hidden group hover:border-primary/40 transition-colors"
            >
              {c.hot && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/90 text-white shadow-lg shadow-red-900/40">
                  Marquee
                </span>
              )}
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/70 mb-3">
                {c.tag}
              </div>
              <div className="font-display text-2xl mb-2 group-hover:gold-text transition-colors">
                {c.t}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed mb-5">{c.d}</p>
              <div className="flex items-center gap-2 pt-4 border-t border-primary/15">
                <span className="text-[11px] uppercase tracking-wider text-foreground/95">
                  {c.chip}
                </span>
                <span className="ml-auto text-xs text-primary font-semibold">Live odds →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <InPlayMatches />

      {/* How to start */}

      <section id="start" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Get Started
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            Six steps to your <span className="gold-text">first bet on Lotus365</span>.
          </h2>
          <p className="text-foreground/90 mt-5 leading-relaxed">
            From WhatsApp onboarding to your first in-play punt — a guided, 10-minute path to a
            verified Lotus365 ID, funded wallet and live cricket, casino and slots at your fingertips.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {startSteps.map(({ n, icon: Icon, t, d }, i) => (
            <div
              key={n}
              className="glass-card rounded-2xl p-7 relative overflow-hidden group hover:border-primary/40 transition-colors"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/70 mb-3">
                Step {n} of {startSteps.length}
              </div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="font-display text-2xl group-hover:gold-text transition-colors">
                  {t}
                </div>
                <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed mb-5">{d}</p>
              <div className="flex items-center gap-2 pt-4 border-t border-primary/15">
                <span className="text-[11px] uppercase tracking-wider text-foreground/95">
                  {i === startSteps.length - 1 ? "You're live" : "≈ 2 min"}
                </span>
                <span className="ml-auto text-xs text-primary font-semibold">
                  {i === startSteps.length - 1 ? "Place first bet →" : "Next step →"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration + Login + Lotus365 ID — unified dark section */}
      <section id="id" aria-label="Account, login and Lotus365 ID" className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 400px at 50% 0%, oklch(0.82 0.15 88 / 0.12), transparent 60%), linear-gradient(180deg, rgb(13 66 55) 0%, rgb(17 84 70) 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-primary mb-3">
              <Fingerprint className="h-3.5 w-3.5" />
              Account · Login · Lotus365 ID
            </div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              One <span className="gold-text">Lotus365 identity</span> — sign up, sign in, and play every game.
            </h2>
            <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {/* Registration */}
            <div className="rounded-2xl p-8 border border-primary/25 bg-[rgb(9_54_45/0.55)] backdrop-blur-sm shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
              <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-primary/80 mb-3">Registration</div>
              <h3 className="font-display text-2xl mb-5">Creating a Lotus365 Account</h3>
              <ol className="space-y-3 text-sm text-foreground/95 leading-relaxed">
                {[
                  ["Visit Lotus365 official", "open the site or app and tap Register."],
                  ["Reach out over WhatsApp", "you'll meet a verified Lotus365 concierge."],
                  ["Share your details", "full name, mobile and email — kept private."],
                  ["Identity check", "our team confirms in 10–15 minutes."],
                  ["Receive credentials", "ID and temporary password sent to your phone."],
                  ["Log in and play", "unlock live sports, casino and VIP perks."],
                ].map(([h, d], i) => (
                  <li key={h} className="flex gap-3">
                    <span className="shrink-0 mt-0.5 h-6 w-6 grid place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span><span className="text-foreground font-medium">{h}</span> — {d}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Login */}
            <div className="rounded-2xl p-8 border border-primary/25 bg-[rgb(9_54_45/0.55)] backdrop-blur-sm shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
              <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-primary/80 mb-3">Login</div>
              <h3 className="font-display text-2xl mb-5">Signing in to Lotus365</h3>
              <ol className="space-y-3 text-sm text-foreground/95 leading-relaxed">
                {[
                  "Open the official Lotus365 site or app.",
                  "Tap Login in the top-right of the homepage.",
                  "Enter your Lotus365 ID and temporary password.",
                  "First time? Set a fresh, strong password.",
                  "Save and you're inside your account.",
                  "Head to the lobby and start placing bets.",
                ].map((line, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 mt-0.5 h-6 w-6 grid place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-5 rounded-xl border border-primary/25 bg-primary/5 p-3 text-xs text-foreground/95">
                Forgot password? Tap <span className="text-primary">Forgot Password</span>, verify via WhatsApp/SMS and reset in under a minute.
              </div>
            </div>

            {/* Lotus365 ID */}
            <div className="rounded-2xl p-8 border border-primary/30 bg-[linear-gradient(160deg,rgb(20_104_86)_0%,rgb(13_72_60)_55%,rgb(9_54_45)_100%)] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)] relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 10%, oklch(0.82 0.15 88 / 0.25), transparent 55%)",
                }}
              />
              <div className="relative">
                <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-primary mb-3">Your Lotus365 ID</div>
                <h3 className="font-display text-2xl mb-4">
                  One <span className="gold-text">identity</span> for every game.
                </h3>
                <p className="text-sm text-foreground/95 leading-relaxed mb-5">
                  Your Lotus365 ID is the unique username issued at sign-up — the key to logging in,
                  placing bets and unlocking every feature on the platform.
                </p>
                <ul className="space-y-3 text-sm">
                  {[
                    ["Secure & personal", "Only you can access your account."],
                    ["Instant verification", "Delivered by WhatsApp and SMS right after registration."],
                    ["Seamless payouts", "Every deposit, stake and withdrawal is tied to your ID."],
                    ["Easy to recall", "A memorable mix of letters and numbers."],
                  ].map(([h, d]) => (
                    <li key={h} className="flex gap-3">
                      <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span><span className="text-foreground font-medium">{h}</span> — <span className="text-foreground/90">{d}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Sports Book + Cricket Elevated — unified */}
      <section id="sports" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Sports Book · Cricket Elevated
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            Every sport you love — with a <span className="gold-text">Cricket ID</span> built for the pros.
          </h2>
          <p className="text-foreground/90 mt-5 leading-relaxed">
            From IPL sessions to Wimbledon deciders, Lotus365 opens sharp markets across every major sport —
            and a dedicated Cricket ID unlocks personalised in-play data, deeper odds and concierge-grade support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {sports.map((s) => (
            <div key={s.t} className="glass-card rounded-2xl p-7 group hover:border-primary/40 transition-colors">
              <div className="font-display text-2xl mb-2 group-hover:gold-text transition-colors">{s.t}</div>
              <p className="text-sm text-foreground/90 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="glass-card rounded-3xl p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/70 mb-3">
              Six-step onboarding
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-5">
              Bet on every over with a <span className="gold-text">Lotus365 Cricket ID</span>.
            </h3>
            <ul className="space-y-2.5 text-sm text-foreground/95">
              <li><span className="text-primary font-mono mr-2">01</span>Open Lotus365 and tap the WhatsApp button.</li>
              <li><span className="text-primary font-mono mr-2">02</span>Share your name and contact details for verification.</li>
              <li><span className="text-primary font-mono mr-2">03</span>Confirm registration with our concierge team.</li>
              <li><span className="text-primary font-mono mr-2">04</span>Receive your unique Cricket ID and password in minutes.</li>
              <li><span className="text-primary font-mono mr-2">05</span>Log in to explore live markets, odds and match stats.</li>
              <li><span className="text-primary font-mono mr-2">06</span>Enjoy 24/7 concierge support for logins and payments.</li>
            </ul>
          </div>
          <div className="glass-card rounded-3xl p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/70 mb-3">
              Marquee Tournaments
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-5">Where to place your bets</h3>
            <ul className="space-y-3 text-sm text-foreground/95 leading-relaxed">
              <li><span className="text-foreground font-medium">Indian Premier League:</span> live match-winner, top run-scorer and in-over markets.</li>
              <li><span className="text-foreground font-medium">ICC Cricket World Cup:</span> the world's biggest stage with deep player props.</li>
              <li><span className="text-foreground font-medium">Big Bash League:</span> high-octane Australian T20 nights, primed for quick swings.</li>
              <li><span className="text-foreground font-medium">Asia Cup:</span> classic subcontinental rivalries with sharp real-time pricing.</li>
              <li><span className="text-foreground font-medium">Pakistan Super League:</span> tight contests with reliable in-play liquidity.</li>
              <li><span className="text-foreground font-medium">The Ashes:</span> five-day Test cricket — ideal for long-form strategists.</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Casino Floor + Daily Insight — unified dark section */}
      <section id="casino" aria-label="Casino floor and daily insight" className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 400px at 50% 0%, oklch(0.82 0.15 88 / 0.12), transparent 60%), linear-gradient(180deg, rgb(13 66 55) 0%, rgb(17 84 70) 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-primary mb-3">
              <Flame className="h-3.5 w-3.5" />
              Casino Floor · Daily Insight
            </div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              A curated <span className="gold-text">casino floor</span> — paired with expert tips every morning.
            </h2>
            <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-full" />
          </div>

          {/* Casino grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {casino.map((g) => (
              <div
                key={g.t}
                className="rounded-2xl p-7 border border-primary/25 bg-[rgb(9_54_45/0.55)] backdrop-blur-sm shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-primary">{g.n}</span>
                  <span className="h-px flex-1 bg-primary/25" />
                </div>
                <div className="font-display text-xl mb-2">{g.t}</div>
                <p className="text-sm text-foreground/90 leading-relaxed">{g.d}</p>
              </div>
            ))}
          </div>

          {/* Daily Insight */}
          <div className="rounded-2xl p-8 md:p-10 border border-primary/30 bg-[linear-gradient(160deg,rgb(20_104_86)_0%,rgb(13_72_60)_55%,rgb(9_54_45)_100%)] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-60 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 85% 10%, oklch(0.82 0.15 88 / 0.22), transparent 55%)",
              }}
            />
            <div className="relative grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-primary mb-3">Daily Insight</div>
                <h3 className="font-display text-2xl md:text-3xl">Expert tips, delivered daily.</h3>
                <p className="text-sm text-foreground/95 mt-4 leading-relaxed">
                  Our analysts pore over form, injuries, conditions and match-ups to deliver reliable predictions
                  across cricket, football and tennis — refreshed every morning inside your Lotus365 account.
                </p>
              </div>
              <div>
                <div className="font-display text-lg mb-3">Why our tips work</div>
                <ul className="space-y-2 text-sm text-foreground/95">
                  <li>• Team form, player stats and venue conditions studied daily.</li>
                  <li>• Multi-sport coverage — cricket, football, tennis and beyond.</li>
                  <li>• A verified 75%+ accuracy rate on flagship matches.</li>
                  <li>• Live odds, injury updates and pitch reports in one feed.</li>
                </ul>
              </div>
              <div>
                <div className="font-display text-lg mb-3">Who it's for</div>
                <ul className="space-y-2 text-sm text-foreground/95">
                  <li>• Beginners looking for structured, low-risk starting points.</li>
                  <li>• Experienced bettors sharpening their edge.</li>
                  <li>• VIPs seeking bespoke pre-match briefings.</li>
                  <li>• 4.8 / 5 satisfaction from active Lotus365 members.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Bonuses */}
      <section id="bonuses" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Rewards on Lotus365
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            Bonuses that <span className="gold-text">actually</span> reward the way you play.
          </h2>
          <p className="text-foreground/90 mt-5 leading-relaxed">
            From your very first ₹1,000 deposit to weekly cashback, festival boosters and no-cap
            referrals — every Lotus365 promotion stretches your bankroll further across cricket,
            casino and exchange play. 24/7, credited automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bonuses.map((b, i) => (
            <div
              key={b.t}
              className="glass-card rounded-2xl p-7 relative overflow-hidden group hover:border-primary/40 transition-colors"
            >
              {i === 0 && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/90 text-white shadow-lg shadow-red-900/40">
                  Popular
                </span>
              )}
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/70 mb-3">
                Offer {b.n}
              </div>
              <div className="font-display text-2xl mb-2 group-hover:gold-text transition-colors flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary shrink-0" />
                {b.t}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed mb-5">{b.d}</p>
              <div className="flex items-center gap-2 pt-4 border-t border-primary/15">
                <span className="text-[11px] uppercase tracking-wider text-foreground/95">
                  Auto-credited
                </span>
                <span className="ml-auto text-xs text-primary font-semibold">Claim now →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wallet + Trust (unified dark section) */}
      <section id="wallet" className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 400px at 50% 0%, oklch(0.82 0.15 88 / 0.12), transparent 60%), linear-gradient(180deg, rgb(13 66 55) 0%, rgb(17 84 70) 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent -z-10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent -z-10" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/90 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Wallet & Trust
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              Move money <span className="gold-text">fast</span>. Play with{" "}
              <span className="gold-text">confidence</span>.
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              Instant deposits, lightning-fast withdrawals and the trust of millions of daily players — all in
              one wallet built for Indian bettors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            <div className="rounded-3xl p-8 border border-primary/20 bg-black/30 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Deposits</div>
              <h3 className="font-display text-2xl text-white mb-5">Add funds in seconds</h3>
              <ol className="space-y-3 text-sm text-white/80 leading-relaxed list-decimal list-inside">
                <li>Log in with your Lotus365 ID and password.</li>
                <li>Open the Deposit section from the dashboard.</li>
                <li>Choose UPI, net banking, Paytm or another supported rail.</li>
                <li>Enter the amount — deposits start from just ₹100.</li>
                <li>Confirm the transaction with your bank or wallet.</li>
                <li>Your balance updates in your Lotus365 wallet instantly.</li>
              </ol>
            </div>
            <div className="rounded-3xl p-8 border border-primary/20 bg-black/30 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Withdrawals</div>
              <h3 className="font-display text-2xl text-white mb-5">Cash out with confidence</h3>
              <ol className="space-y-3 text-sm text-white/80 leading-relaxed list-decimal list-inside">
                <li>Head to the Withdraw section inside your dashboard.</li>
                <li>Pick a payout method — bank transfer or UPI.</li>
                <li>Enter your withdrawal amount, respecting the minimum limit.</li>
                <li>Submit the request with the required account details.</li>
                <li>A quick verification step protects every payout.</li>
                <li>Funds settle to your account within 10–15 minutes.</li>
              </ol>
            </div>
          </div>

          <div className="rounded-3xl p-8 border border-primary/20 bg-black/30 backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Trusted daily</div>
              <h3 className="font-display text-3xl text-white">Millions choose Lotus365.</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map(({ icon: Icon, n, l }) => (
                <div
                  key={l}
                  className="rounded-2xl p-6 text-center border border-primary/15 bg-white/5 backdrop-blur-sm"
                >
                  <Icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <div className="font-display text-3xl gold-text">{n}</div>
                  <div className="text-xs text-white/70 uppercase tracking-widest mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Safety First
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            Security <span className="gold-text">engineered</span> into every layer.
          </h2>
          <p className="text-foreground/90 mt-5 leading-relaxed">
            Lotus365 pairs modern cryptography with proactive monitoring so you can focus on the play, not the
            plumbing. Every account, every transaction, every session — protected by design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {security.map(({ icon: Icon, t, d }, i) => (
            <div
              key={t}
              className="glass-card rounded-2xl p-7 relative overflow-hidden group hover:border-primary/40 transition-colors"
            >
              {i === 0 && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/90 text-white shadow-lg shadow-red-900/40">
                  Core
                </span>
              )}
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/70 mb-3">
                Layer {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-2xl mb-2 group-hover:gold-text transition-colors flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary shrink-0" />
                {t}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed mb-5">{d}</p>
              <div className="flex items-center gap-2 pt-4 border-t border-primary/15">
                <span className="text-[11px] uppercase tracking-wider text-foreground/95">
                  Always on
                </span>
                <span className="ml-auto text-xs text-primary font-semibold">Verified ✓</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Latest posts */}
      <section id="blog" aria-label="Latest from Lotus365" className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 400px at 50% 0%, oklch(0.82 0.15 88 / 0.12), transparent 60%), linear-gradient(180deg, rgb(13 66 55) 0%, rgb(17 84 70) 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-primary mb-3">
                <Flame className="h-3.5 w-3.5" />
                Latest from Lotus365
              </div>
              <h2 className="font-display text-3xl md:text-4xl leading-tight">
                Fresh reads for <span className="gold-text">smarter play</span>.
              </h2>
              <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...POSTS]
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .slice(0, 6)
              .map((p) => (
                <article
                  key={p.slug}
                  className="rounded-2xl p-7 flex flex-col border border-primary/25 bg-[rgb(9_54_45/0.55)] backdrop-blur-sm shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary">
                      {new Date(p.date).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="h-px flex-1 bg-primary/25" />
                    <span className="text-[10px] uppercase tracking-widest text-foreground/95">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl mb-3 leading-snug">{p.h1}</h3>
                  <p className="text-sm text-foreground/90 leading-relaxed flex-1">{p.excerpt}</p>
                  <a
                    href={`/blog/${p.slug}`}
                    className="mt-5 text-sm text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read more →
                  </a>
                </article>
              ))}
          </div>
        </div>
      </section>

    </>
  );
}
