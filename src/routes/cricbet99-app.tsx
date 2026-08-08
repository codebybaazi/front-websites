import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";

export const Route = createFileRoute("/cricbet99-app")({
  head: () => ({
    meta: [
      { title: "Cricbet99 App Download 2026 | Official Android APK" },
      { name: "description", content: "Download the official Cricbet99 Android app for the fastest betting experience in India. Lightweight APK, real-time odds, and secure UPI transactions." },
      { property: "og:title", content: "Official Cricbet99 App | Premium Android APK" },
      { property: "og:description", content: "Elevate your game with the Cricbet99 mobile app. Fast, secure, and built for professional Indian traders." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/cricbet99-app" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/cricbet99-app" }],
  }),
  component: AppPage,
});

const features = [
  { t: "Official Cricbet99 Android APK", d: "A tiny 25MB file that packs a massive punch. Optimized for ultra-low latency, ensuring your live bets are placed before the odds shift." },
  { t: "Live Cricket Betting Markets", d: "Experience ball-by-ball updates for IPL 2026 and every major T20 league. Never miss a market movement with our live-sync technology." },
  { t: "Instant UPI Deposit & Withdrawal", d: "Deposit and withdraw via PhonePe, Google Pay, or Paytm in seconds. Our financial backend is tuned for high-speed Indian banking." },
  { t: "Lightning-Fast Payouts", d: "Win a bet and see the funds ready for withdrawal instantly. We process your cash-outs in minutes, delivering money directly to your UPI." },
  { t: "Fortified Security", d: "Bank-level encryption and biometric login options keep your funds and betting history invisible to prying eyes." },
  { t: "Premium Human Support", d: "A dedicated WhatsApp manager is integrated into your app experience, providing 24/7 help in Hindi and English." },
];

const steps = [
  "Connect with our official team on WhatsApp to receive the verified, high-security APK download link.",
  "Open your Android settings and toggle 'Allow installation from unknown sources' to prepare your device.",
  "Run the Cricbet99 APK and follow the simple on-screen prompts—it takes less than 30 seconds to install.",
  "Launch your new betting hub, log in with your verified ID, and start dominating the markets."
];

function AppPage() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Cricbet99 App"
        title={<>Official Cricbet99 <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Android App.</span></>}
        subtitle="Take the arena with you. The official Cricbet99 app delivers a high-performance betting experience with sub-second odds updates, biometric security, and streamlined UPI withdrawals — optimized for 5G connectivity."
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.t} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <h2 className="text-lg font-bold">{f.t}</h2>
              <p className="mt-2 text-sm text-foreground/75">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-black md:text-4xl">Safe install in 4 steps</h2>
        <ol className="mt-8 space-y-4">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-4 rounded-2xl border border-primary/20 bg-background/60 p-5">
              <span className="text-2xl font-black" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{i + 1}</span>
              <span className="text-foreground/85">{s}</span>
            </li>
          ))}
        </ol>
      </section>
      <section className="mx-auto max-w-4xl px-6 py-12 border-t border-primary/10">
        <h2 className="text-2xl font-black">Learn more about Cricbet99</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/how-it-works" className="text-sm font-bold text-primary hover:underline">How It Works</Link>
          <span className="text-foreground/20">|</span>
          <Link to="/is-cricbet99-legal" className="text-sm font-bold text-primary hover:underline">Is Cricbet99 Legal?</Link>
          <span className="text-foreground/20">|</span>
          <Link to="/about" className="text-sm font-bold text-primary hover:underline">About Us</Link>
          <span className="text-foreground/20">|</span>
          <Link to="/faq" className="text-sm font-bold text-primary hover:underline">Cricbet99 FAQ</Link>
        </div>
      </section>
      <CTABand heading="Get the Cricbet99 APK on WhatsApp." sub="Our team sends the verified install link and helps you set it up in under 5 minutes." />
    </SiteLayout>
  );
}
