import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { AiOverview } from "@/components/AiOverview";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { whatsappUrl } from "@/data/site";
import {
  Smartphone,
  Download,
  ShieldCheck,
  Zap,
  Apple,
  Cpu,
  Wifi,
  Fingerprint,
  Trophy,
  Dice5,
  Wallet,
  Bell,
} from "lucide-react";

const URL = "https://lotus365id.com/lotus365-app-download";

const STEPS_ANDROID = [
  { t: "Message the concierge on WhatsApp", d: "Tap the WhatsApp button — our team sends you the latest official Lotus365 APK link directly, verified and signed." },
  { t: "Allow install from unknown sources", d: "Android → Settings → Security (or Apps) → enable Install unknown apps for your browser. Required because betting apps are restricted on Google Play." },
  { t: "Install the Lotus365 app APK", d: "Open the downloaded APK, tap Install. The Lotus 365 app installs in under 30 seconds on 4G / 5G / Wi-Fi." },
  { t: "Log in with your Lotus365 ID", d: "Sign in with your Lotus365 login, enable biometric unlock, and start playing cricket, casino and live sports." },
];

const STEPS_IOS = [
  { t: "Open Lotus365 in Safari", d: "iOS blocks betting apps on the App Store, so we use a fast, secure PWA (Progressive Web App) install instead." },
  { t: "Tap the Share icon", d: "In Safari, tap the share button at the bottom of the screen." },
  { t: "Add to Home Screen", d: "Choose 'Add to Home Screen'. The Lotus365 icon appears just like a native iOS app." },
  { t: "Launch and log in", d: "Open Lotus365 from your home screen, log in with your Lotus ID, and enable Face ID for one-tap access." },
];

const FEATURES = [
  { Icon: Trophy, t: "40+ cricket fancy markets", d: "Session, over, batsman runs, method-of-dismissal — every IPL and international match, all inside the Lotus365 app." },
  { Icon: Dice5, t: "Live casino & Teen Patti", d: "Evolution, Ezugi and Indian dealers streaming 24/7. Roulette, Andar Bahar, Dragon Tiger and Teen Patti in HD." },
  { Icon: Wallet, t: "UPI in, UPI out — under 3 min", d: "GPay, PhonePe, Paytm and net-banking. Instant deposits, verified 3-minute payouts to your account." },
  { Icon: Fingerprint, t: "Biometric login & secure wallet", d: "Face ID / fingerprint unlock, encrypted wallet, session timers and 2FA — bank-grade security in the Lotus 365 app." },
  { Icon: Bell, t: "Live push alerts", d: "Wicket alerts, price drifts, cash-out reminders and casino promo drops — never miss an in-play moment." },
  { Icon: Wifi, t: "Works on 2G / low-data mode", d: "Optimised for Indian networks — the Lotus365 app APK runs smoothly even on entry-level Android phones with 2 GB RAM." },
];

const SPECS = [
  { k: "App size", v: "18 MB (Android APK)" },
  { k: "Android version", v: "6.0 (Marshmallow) and above" },
  { k: "iOS version", v: "iOS 13+ (Safari PWA)" },
  { k: "RAM required", v: "2 GB minimum" },
  { k: "Data usage", v: "Optimised for 2G / 3G / 4G / 5G" },
  { k: "Languages", v: "English, Hindi, Telugu, Tamil, Bengali" },
  { k: "Latest version", v: "v11.4 · 2026" },
  { k: "Price", v: "Free — no subscription" },
];

const FAQ = [
  { q: "Is the Lotus365 app free to download?", a: "Yes — the Lotus365 app download and APK are 100% free. You only fund your wallet when you're ready to play. There is no subscription, no in-app purchase, and no hidden charge." },
  { q: "Is the Lotus365 APK safe for Android?", a: "The official Lotus365 app is signed, virus-scanned and released only through our WhatsApp concierge. Never install a Lotus 365 apk from unknown Telegram groups — always request the link from our verified concierge number." },
  { q: "Does Lotus365 have an iOS app for iPhone?", a: "Yes — iPhone and iPad users get a fully-featured Lotus365 PWA that installs to the home screen from Safari in one tap. It behaves exactly like a native iOS app with Face ID login and push notifications." },
  { q: "Why is the Lotus365 app not on the Google Play Store?", a: "Google Play restricts real-money betting apps in India. That's why the official Lotus365 app is distributed as a signed APK directly — the same approach used by every major Indian betting exchange." },
  { q: "How big is the Lotus365 app download?", a: "Around 18 MB. The Lotus 365 app runs smoothly even on entry-level Android phones with 2 GB RAM and works on 2G / 3G / 4G / 5G networks." },
  { q: "How do I update the Lotus365 app?", a: "The app checks for updates on launch and prompts you to install. You can also request the latest Lotus365 download apk link on WhatsApp any time — updates are free forever." },
  { q: "Can I use the Lotus365 app on desktop or laptop?", a: "Yes — visit lotus365id.com in any modern browser (Chrome, Edge, Safari, Firefox). The desktop experience mirrors the app one-to-one, with the same live odds and wallet." },
  { q: "How do I login to the Lotus365 app?", a: "Open the app, tap Login, and enter your Lotus365 ID and password. Enable biometric unlock so future logins take one tap. Forgot password? Ask the concierge on WhatsApp." },
  { q: "How do I deposit and withdraw in the Lotus365 app?", a: "Deposits accept UPI (GPay, PhonePe, Paytm), IMPS, net-banking and USDT. Withdrawals process to your bank in under 3 minutes on verified accounts, 24/7." },
  { q: "Is the Lotus365 app legal in India?", a: "Betting law in India is state-specific. Lotus365 operates under an international licence and is used by 2M+ Indian players. Read our detailed guide: Is Lotus365 legal in India?" },
];

export const Route = createFileRoute("/lotus365-app-download")({
  head: () => ({
    meta: [
      { title: "Lotus365 App — Official APK Download for Android & iOS (2026)" },
      {
        name: "description",
        content:
          "Download the official Lotus365 app & APK for Android and iPhone. 18 MB install, UPI deposits, live cricket, casino and IPL betting — latest link on WhatsApp.",
      },
      { property: "og:title", content: "Lotus365 App — Official APK Download for Android & iOS" },
      {
        property: "og:description",
        content:
          "Get the official Lotus365 app and APK. Cricket, casino, live sports, biometric login and 3-minute UPI payouts inside one 18 MB app.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://lotus365id.com/og-lotus365.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://lotus365id.com/og-lotus365.jpg" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Lotus365 App",
          alternateName: ["Lotus 365 App", "Lotus365 APK", "Lotus 365 apk"],
          operatingSystem: "Android, iOS",
          applicationCategory: "GameApplication",
          fileSize: "18MB",
          softwareVersion: "11.4",
          url: URL,
          downloadUrl: URL,
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "18420", bestRating: "5" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to download the Lotus365 app on Android",
          totalTime: "PT2M",
          step: STEPS_ANDROID.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.t,
            text: s.d,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
            { "@type": "ListItem", position: 2, name: "Lotus365 App", item: URL },
          ],
        }),
      },
    ],
  }),
  component: AppDownloadPage,
});

function AppDownloadPage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
          <Smartphone className="h-3.5 w-3.5" /> Official app · v11.4 · 2026
        </div>
        <h1 className="font-display text-4xl md:text-6xl mb-5">
          Lotus365 <span className="gold-text">App</span> — Official APK Download for Android &amp; iOS
        </h1>
        <p className="text-lg text-foreground/90 max-w-2xl">
          Download the official <strong>Lotus365 app</strong> and latest <strong>Lotus 365 apk</strong> for Android, or install the iOS web app to your iPhone in one tap. Bet on IPL cricket, live casino, Teen Patti and exchange sports with instant UPI deposits and 3-minute payouts — all inside a single 18 MB app.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-green inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
          >
            <WhatsAppIcon className="h-4 w-4" /> Get Lotus365 APK on WhatsApp
          </a>
          <a
            href="#ios"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition"
          >
            <Apple className="h-4 w-4" /> Install on iPhone
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-xs text-foreground/70">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Signed &amp; virus-scanned</span>
          <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-primary" /> 18 MB · installs in 30s</span>
          <span className="inline-flex items-center gap-1.5"><Wallet className="h-3.5 w-3.5 text-primary" /> UPI in / out in &lt; 3 min</span>
          <span className="inline-flex items-center gap-1.5">★ 4.8 · 18,420 ratings</span>
        </div>
      </section>

      <AiOverview
        summary="Download the official Lotus365 app — Android APK direct install, iOS PWA and desktop web, with instant UPI, biometric login and 40+ cricket fancy markets."
        points={[
          "Android APK direct install (Play Store restricted category)",
          "iOS PWA — add to Home Screen in one tap",
          "Biometric login, encrypted wallet, session timers",
          "Push alerts for IPL, T20 World Cup and casino promos",
        ]}
        sources={[{ label: "APK", to: "/lotus365-apk" }, { label: "Login", to: "/lotus365-login" }, { label: "Get ID", to: "/lotus365-id" }]}
      />

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="font-display text-2xl md:text-3xl mb-6">Why 2M+ Indian players choose the Lotus 365 app</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map(({ Icon, t, d }) => (
            <div key={t} className="glass-card rounded-2xl p-5">
              <Icon className="h-5 w-5 text-primary mb-3" />
              <div className="font-display text-lg mb-1">{t}</div>
              <p className="text-sm text-foreground/90">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ANDROID INSTALL */}
      <section id="android" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="flex items-center gap-3 mb-6">
          <Download className="h-6 w-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl">How to download the Lotus365 app on Android</h2>
        </div>
        <ol className="space-y-3">
          {STEPS_ANDROID.map((s, i) => (
            <li key={s.t} className="glass-card rounded-2xl p-5 flex gap-4">
              <span className="font-display text-2xl text-primary shrink-0">{i + 1}</span>
              <div>
                <div className="font-semibold mb-1">{s.t}</div>
                <p className="text-sm text-foreground/90">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* IOS INSTALL */}
      <section id="ios" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="flex items-center gap-3 mb-6">
          <Apple className="h-6 w-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl">How to install the Lotus365 app on iPhone (iOS)</h2>
        </div>
        <ol className="space-y-3">
          {STEPS_IOS.map((s, i) => (
            <li key={s.t} className="glass-card rounded-2xl p-5 flex gap-4">
              <span className="font-display text-2xl text-primary shrink-0">{i + 1}</span>
              <div>
                <div className="font-semibold mb-1">{s.t}</div>
                <p className="text-sm text-foreground/90">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* SPECS */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="flex items-center gap-3 mb-6">
          <Cpu className="h-6 w-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl">Lotus365 app — system requirements</h2>
        </div>
        <div className="glass-card rounded-2xl p-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
          {SPECS.map((s) => (
            <div key={s.k} className="flex justify-between border-b border-white/5 pb-2 text-sm">
              <span className="text-foreground/70">{s.k}</span>
              <span className="font-semibold text-foreground">{s.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">Lotus365 app — frequently asked questions</h2>
        <div className="space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="glass-card rounded-2xl p-5 group">
              <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                {f.q}
                <span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-4xl mb-4">
            Ready to <span className="gold-text">install Lotus365</span>?
          </h2>
          <p className="text-sm text-foreground/80 max-w-xl mx-auto mb-6">
            Get the latest verified Lotus365 app APK link on WhatsApp from our concierge. Free, signed, and updated for 2026.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-green inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition"
          >
            <WhatsAppIcon className="h-4 w-4" /> Get download link on WhatsApp
          </a>
        </div>
      </section>

      <QuickLinks currentPath={URL} heading="More Lotus365 resources" />
      <SiteFooter />
    </div>
  );
}
