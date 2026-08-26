import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { AiOverview } from "@/components/AiOverview";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { useWhatsAppUrl } from "@/components/WhatsAppProvider";
import {
  KeyRound,
  ShieldCheck,
  Fingerprint,
  Lock,
  MessageCircle,
  Zap,
  Wallet,
  Headphones,
  BadgeCheck,
  UserCheck,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

const TITLE = "Lotus365 Login — Access Your Betting Account Securely";
const DESCRIPTION =
  "Sign in to Lotus365 safely with mobile, biometric or WhatsApp OTP. Manage your wallet, bet on cricket & casino, and get instant UPI payouts 24/7.";
const URL = "https://lotus365id.com/lotus365-login";

export const Route = createFileRoute("/lotus365-login")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: TITLE,
          description: DESCRIPTION,
          url: URL,
          isPartOf: { "@type": "WebSite", name: "Lotus365", url: "/" },
          about: {
            "@type": "Thing",
            name: "Lotus365 account login and security",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
            { "@type": "ListItem", position: 2, name: "Login", item: URL },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to log in to your Lotus365 account",
          description:
            "Step-by-step guide to sign in to Lotus365 and start betting on cricket, casino, and live sports.",
          step: [
            { "@type": "HowToStep", position: 1, name: "Open Lotus365", text: "Visit the official Lotus365 website or open the Lotus365 app on your phone." },
            { "@type": "HowToStep", position: 2, name: "Tap Login", text: "Tap the Login button in the top-right corner of the homepage." },
            { "@type": "HowToStep", position: 3, name: "Enter your credentials", text: "Enter the mobile number and temporary password shared over WhatsApp when you registered." },
            { "@type": "HowToStep", position: 4, name: "Set a strong password", text: "First-time users should replace the temporary password with a strong, unique one." },
            { "@type": "HowToStep", position: 5, name: "Access your wallet", text: "You're in — check your balance, deposit via UPI, and place your first bet." },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: LoginPage,
});

const FAQS = [
  {
    q: "How do I log in to my Lotus365 account?",
    a: "Open lotus365, tap Login, enter your registered mobile number and password (or use the WhatsApp OTP option), and you're in. New members receive a temporary password on WhatsApp — replace it with a strong one on first login.",
  },
  {
    q: "I forgot my Lotus365 password. What do I do?",
    a: "Tap 'Forgot Password' on the login screen, enter your registered mobile, receive a verification code on WhatsApp, and set a new password. Support can also reset it inside 5 minutes on chat.",
  },
  {
    q: "Is Lotus365 login safe?",
    a: "Yes — every session is protected by 256-bit SSL, optional two-factor authentication, biometric login on mobile, and continuous fraud monitoring on every device.",
  },
  {
    q: "Can I log in on both mobile and desktop?",
    a: "Yes. The same Lotus365 account works on the mobile app, mobile browser, and desktop. Concurrent sessions are allowed; we alert you if a new device signs in.",
  },
  {
    q: "What if my account is locked?",
    a: "Too many failed attempts trigger a temporary lock. Message our WhatsApp concierge with your registered number and we'll verify and unlock within minutes.",
  },
];

const BONUSES = [
  {
    name: "Welcome Bonus",
    who: "New members",
    reward: "Up to 400% on your first deposit — max ₹30,000",
  },
  {
    name: "Daily Login Reward",
    who: "All members",
    reward: "Daily cashback or free spins for logging in and playing",
  },
  {
    name: "Refer & Earn",
    who: "Existing members",
    reward: "Earn up to ₹500 for every friend who joins and deposits",
  },
  {
    name: "Deposit Bonus",
    who: "All verified members",
    reward: "10–50% bonus credits on qualifying deposits",
  },
  {
    name: "VIP Loyalty",
    who: "Long-term members",
    reward: "Priority payouts, personal manager, milestone gifts",
  },
];

const SECURITY = [
  {
    Icon: Fingerprint,
    title: "Two-Factor Authentication",
    body: "Add a one-time code on top of your password — either SMS, WhatsApp, or an authenticator app.",
  },
  {
    Icon: Lock,
    title: "256-Bit SSL Encryption",
    body: "Every byte between your device and our servers is bank-grade encrypted end to end.",
  },
  {
    Icon: UserCheck,
    title: "Device & Session Control",
    body: "See every active login, sign out remote devices, and revoke sessions in one tap.",
  },
  {
    Icon: ShieldCheck,
    title: "24/7 Fraud Monitoring",
    body: "Our risk desk watches for unusual behaviour and pauses suspicious activity before it reaches your wallet.",
  },
  {
    Icon: KeyRound,
    title: "Strong Password Rules",
    body: "Minimum 8 characters with mixed case and a number — reused, weak, or leaked passwords are rejected.",
  },
];

const STEPS = [
  {
    title: "Open Lotus365",
    body: "Head to the official Lotus365 website or open the app on Android or iOS. Bookmark the URL to avoid phishing lookalikes.",
  },
  {
    title: "Tap Login",
    body: "You'll find the Login button in the top-right corner on desktop and inside the menu on mobile.",
  },
  {
    title: "Enter your details",
    body: "Type your registered mobile number and the temporary password sent to your WhatsApp when you signed up.",
  },
  {
    title: "Create a new password",
    body: "First-time members must replace the temporary password with a fresh, strong one. Skip birthdays or phone numbers.",
  },
  {
    title: "Verify your device",
    body: "Approve the one-time device confirmation on WhatsApp — this stops anyone else from signing in as you.",
  },
  {
    title: "Play and cash out",
    body: "You're in. Top up via UPI, back your favourite team or table, and withdraw winnings straight to your bank.",
  },
];

const RESET_STEPS = [
  "Open the Lotus365 website or app.",
  "On the login screen, tap 'Forgot Password'.",
  "Enter your registered mobile number or username.",
  "Receive a 6-digit verification code on WhatsApp or SMS.",
  "Set a new, strong password (different from your last one).",
  "Sign in and continue betting — securely.",
];

const RULES = [
  {
    title: "18+ only",
    body: "You must be 18 or older to create and use a Lotus365 account. Underage accounts are closed on detection.",
  },
  {
    title: "Real information",
    body: "Register with your real name, phone, and KYC documents. False details block withdrawals.",
  },
  {
    title: "One account per person",
    body: "Duplicate accounts are automatically flagged. Bonuses, referrals, and payouts on duplicates are voided.",
  },
  {
    title: "Protect your credentials",
    body: "Never share your password, OTP, or WhatsApp code — not even with our staff. Real Lotus365 support will never ask.",
  },
  {
    title: "Play responsibly",
    body: "Use deposit limits, cool-off periods, and self-exclusion tools inside your account whenever you need a break.",
  },
];

function LoginPage() {
  const whatsappUrl = useWhatsAppUrl();
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      {/* Hero + WhatsApp CTA card */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 20% 0%, oklch(0.82 0.15 88 / 0.18), transparent 60%), radial-gradient(60% 60% at 80% 20%, oklch(0.55 0.09 165 / 0.4), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
              <KeyRound className="h-3.5 w-3.5" /> Lotus365 Login
            </div>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Lotus365 Login — <span className="gold-text">Get Your ID on WhatsApp</span> in 60 Seconds
            </h1>
            <p className="mt-5 text-lg text-foreground/90 max-w-xl">
              Sign in to your Lotus365 account or create a new Lotus ID in under a minute. Skip the forms — message our WhatsApp concierge to receive your secure Lotus365 login, welcome bonus and instant UPI wallet, set up personally by a real human, 24/7.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-foreground/95">
              {[
                { Icon: ShieldCheck, t: "256-bit encrypted" },
                { Icon: Zap, t: "Instant UPI payouts" },
                { Icon: Wallet, t: "Live wallet controls" },
                { Icon: Headphones, t: "24/7 WhatsApp concierge" },
              ].map(({ Icon, t }) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="glass-card gold-border rounded-3xl p-8 md:p-10 text-center relative overflow-hidden"
            aria-label="Get your Lotus365 ID on WhatsApp"
          >
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle, oklch(0.82 0.15 88 / 0.5), transparent 70%)" }}
            />
            <div className="relative">
              <div className="mx-auto mb-5 h-16 w-16 rounded-full grid place-items-center gold-border">
                <MessageCircle className="h-7 w-7 text-primary" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                Fastest way in
              </div>
              <h2 className="font-display text-2xl md:text-3xl mb-3">
                Login via <span className="gold-text">WhatsApp</span>
              </h2>
              <p className="text-sm text-foreground/90 mb-7 max-w-sm mx-auto">
                One tap. Talk to a real concierge. Get your ID, password, and
                welcome bonus delivered to your chat instantly.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full rounded-xl px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" /> Get my Lotus365 ID
              </a>

              <div className="mt-6 grid grid-cols-3 gap-3 text-[11px] text-foreground/90">
                <div className="flex flex-col items-center gap-1">
                  <Zap className="h-4 w-4 text-primary" /> 60-sec setup
                </div>
                <div className="flex flex-col items-center gap-1">
                  <BadgeCheck className="h-4 w-4 text-primary" /> Verified agents
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-primary" /> Fully secure
                </div>
              </div>

              <p className="mt-6 text-[11px] text-foreground/85">
                Already a member? Message the same concierge to recover your ID
                or reset your password.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AiOverview
        summary="Lotus365 login — access your betting ID via web, app or WhatsApp with 2-step verification, UPI-ready wallet and 24/7 concierge if you're locked out."
        points={[
          "Web, Android APK and iOS PWA login",
          "2-step OTP verification for every device",
          "Password reset via WhatsApp concierge in minutes",
          "Session timers and device management built in",
        ]}
        sources={[{ label: "Get Lotus ID", to: "/lotus365-id" }, { label: "Login issues", to: "/login-issues" }, { label: "App download", to: "/lotus365-app-download" }]}
      />


      {/* What is Lotus365 Login */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-5">
          What is <span className="gold-text">Lotus365 Login</span>?
        </h2>
        <p className="text-foreground/95 leading-relaxed">
          It's the official gateway to your betting account — the fastest way to
          check your balance, place a bet, and manage your wallet from any device.
          Built on 256-bit SSL encryption, biometric-ready sign-in, and 24/7 fraud
          monitoring, it gives you full control over your play with real-time
          updates on cricket, casino, and live sports. Whether you're on the app
          or the desktop site, the same secure credentials unlock instant UPI
          deposits, three-minute withdrawals, and a concierge team that's always
          one WhatsApp message away.
        </p>
      </section>

      {/* How to log in — 6 step */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-8">
          How to log in to your <span className="gold-text">account</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="glass-card rounded-2xl p-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary/70 mb-2">
                Step {i + 1}
              </div>
              <div className="font-display text-lg mb-2">{s.title}</div>
              <p className="text-sm text-foreground/90 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reset password */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-5">
          Reset or recover your <span className="gold-text">password</span>
        </h2>

        <p className="text-foreground/90 mb-6">
          Locked out? Follow these six quick steps to get back into your Lotus365
          account without losing your bonuses, wallet balance, or bet history.
        </p>
        <ol className="glass-card rounded-2xl p-6 space-y-3">
          {RESET_STEPS.map((r, i) => (
            <li key={r} className="flex gap-3 text-sm text-foreground/95">
              <span className="shrink-0 h-6 w-6 rounded-full grid place-items-center gold-border text-primary text-xs font-semibold">
                {i + 1}
              </span>
              <span>{r}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Bonuses */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-3">
          Exclusive <span className="gold-text">login rewards</span>
        </h2>
        <p className="text-foreground/90 mb-8 max-w-2xl">
          Every sign-in is a chance to earn — welcome credits, daily cashback,
          referral payouts, and VIP milestones stack on top of your play.
        </p>
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 gap-2 px-5 py-3 text-[10px] uppercase tracking-[0.25em] text-primary/80 border-b border-primary/15">
            <div>Reward</div>
            <div>Who qualifies</div>
            <div>What you get</div>
          </div>
          {BONUSES.map((b) => (
            <div
              key={b.name}
              className="grid grid-cols-3 gap-2 px-5 py-4 text-sm text-foreground/95 border-b border-primary/10 last:border-b-0"
            >
              <div className="font-medium">{b.name}</div>
              <div className="text-foreground/90">{b.who}</div>
              <div>{b.reward}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-8">
          Top security features protecting <span className="gold-text">your account</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECURITY.map(({ Icon, title, body }) => (
            <div key={title} className="glass-card rounded-2xl p-6">
              <Icon className="h-6 w-6 text-primary mb-3" />
              <div className="font-display text-lg mb-2">{title}</div>
              <p className="text-sm text-foreground/90 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rules */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="font-display text-3xl md:text-4xl mb-6">
          Important rules for a <span className="gold-text">safe sign-in</span>
        </h2>

        <div className="space-y-3">
          {RULES.map((r) => (
            <div key={r.title} className="glass-card rounded-2xl p-5 flex gap-4">
              <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-display text-lg mb-1">{r.title}</div>
                <p className="text-sm text-foreground/90">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="glass-card gold-border rounded-3xl p-8 md:p-10">
          <div className="flex items-start gap-4">
            <Headphones className="h-7 w-7 text-primary shrink-0 mt-1" />
            <div>
              <h2 className="font-display text-2xl md:text-3xl mb-3">
                Login trouble? Our concierge is on WhatsApp 24/7.
              </h2>
              <p className="text-foreground/90 mb-5">
                From locked accounts to forgotten passwords, one message and our
                team verifies you and gets you back in — usually inside five
                minutes. Live chat, WhatsApp, and email support round the clock.
              </p>
              <a
                href={whatsappUrl}
                className="btn-whatsapp inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em]"
              >
                <MessageCircle className="h-4 w-4" /> Chat with support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="font-display text-3xl md:text-4xl mb-6">
          Sign-in <span className="gold-text">questions, answered</span>
        </h2>

        <div className="space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="glass-card rounded-2xl p-5 group"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
                <span className="font-display text-base md:text-lg pr-2">{f.q}</span>
                <ChevronRight className="h-4 w-4 text-primary transition-transform group-open:rotate-90 shrink-0" />
              </summary>
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-8 flex items-start gap-3 text-xs text-foreground/95">
          <AlertTriangle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
          <p>
            Play responsibly. Lotus365 is intended for members aged 18 and above.
            Only bet what you can afford to lose and use the deposit-limit and
            cool-off tools inside your account whenever you need a break.
          </p>
        </div>
      </section>

      <QuickLinks
        currentPath={URL}
        heading="Explore more of the Lotus365 hub"
        subheading="From your wallet to live cricket odds — every tool your Lotus365 account unlocks."
      />
      <SiteFooter />
    </div>
  );
}
