import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";

export const Route = createFileRoute("/cricbet99-app")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Betting App 2026 — Download APK for Android" },
      { name: "description", content: "Download the official Cricbet99 betting app for Android. Lightweight APK, live cricket odds, instant UPI deposits and minute-fast withdrawals. Safe install guide." },
      { property: "og:title", content: "Cricbet99 Betting App — Android APK" },
      { property: "og:description", content: "The official Cricbet99 Android app: fast odds, secure logins and instant UPI payouts." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cricbet99-app" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cricbet99-app" }],
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
        eyebrow="Cricbet99 App"
        title={<>The official <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Cricbet99</span> app for Android.</>}
        subtitle="Install the official Cricbet99 APK for lightning-fast in-play cricket odds, one-tap UPI deposits and instant withdrawals — engineered for Indian networks and Indian bettors."
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
