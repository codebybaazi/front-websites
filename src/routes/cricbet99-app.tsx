import { createFileRoute } from "@tanstack/react-router";
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
  { t: "Lightweight APK", d: "Under 25 MB. Installs in seconds, opens instantly, runs smoothly on 3G / 4G / 5G." },
  { t: "Live cricket odds", d: "Ball-by-ball IPL, T20 World Cup and international cricket markets — refreshed in real time." },
  { t: "One-tap UPI", d: "Deposit via Google Pay, PhonePe, Paytm or any UPI app. Wallet credits inside 30 seconds." },
  { t: "Minute-fast withdrawals", d: "Cash-out requests are pushed to UPI in minutes, not days. IMPS/bank options too." },
  { t: "Bank-grade security", d: "SSL encryption, device fingerprinting and 24/7 fraud monitoring on every session." },
  { t: "24/7 WhatsApp help", d: "Real humans, not chatbots. English and Hindi support any time you need it." },
];

const steps = [
  "Message the Cricbet99 team on WhatsApp for the official APK link.",
  "On your Android device, tap Settings → Security → Enable 'Install from unknown sources'.",
  "Open the APK, tap Install and wait a few seconds.",
  "Launch the app, log in with your Cricbet99 ID and start betting.",
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
      <CTABand heading="Get the Cricbet99 APK on WhatsApp." sub="Our team sends the verified install link and helps you set it up in under 5 minutes." />
    </SiteLayout>
  );
}
