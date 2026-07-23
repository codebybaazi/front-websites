import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ShieldCheck, Zap, Wallet, Trophy, MessageCircle, BadgeCheck, Smartphone, Dice5 } from "lucide-react";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, type FAQItem } from "@/components/FAQSection";
import { whatsappUrl } from "@/data/site";

const appFaqs: FAQItem[] = [
  { q: "What is the Mahadev betting app?", a: "The Mahadev betting app is India's trusted online betting and gaming platform — cricket, football, tennis, live casino, Aviator and Teen Patti under a single verified Mahadev ID." },
  { q: "Mahadev app kya hai?", a: "Mahadev app ek online betting aur gaming platform hai jahan IPL cricket, live casino aur Aviator jaise games khel sakte hain. Mahadev ID WhatsApp par 60 second me milti hai." },
  { q: "How do I download the Mahadev app?", a: "Message us on WhatsApp. Our team will send the official Mahadev app download link (Android APK / iOS profile) along with your verified Mahadev ID." },
  { q: "Is the Mahadev app safe?", a: "Yes. Bank-grade SSL, KYC-verified IDs, encrypted UPI rails and 24/7 human support keep every account and rupee protected." },
  { q: "Does the Mahadev app work on iPhone?", a: "Yes — we provide an iOS-friendly install profile plus a fast Progressive Web App version that runs on Safari without any download." },
  { q: "How fast are withdrawals on the Mahadev app?", a: "Withdrawals over UPI, IMPS or e-wallet typically settle in 5–30 minutes, 24/7, including IPL nights and public holidays." },
];

export const Route = createFileRoute("/mahadev-betting-app")({
  head: () => ({
    meta: [
      { title: "Mahadev Betting App — Official Download for Cricket & Casino" },
      { name: "description", content: "Mahadev betting app — official download for IPL cricket, live casino, Aviator and Teen Patti. Get your ID on WhatsApp in 60 seconds with instant UPI payouts." },
      { property: "og:title", content: "Mahadev Betting App — Official Download & Cricket ID" },
      { property: "og:description", content: "Download the Mahadev betting app for cricket, casino, Aviator & Teen Patti. Verified Mahadev ID on WhatsApp in 60 seconds. Instant UPI payouts." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-betting-app" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev betting app download for Android and iOS" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-betting-app" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the Mahadev betting app?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The Mahadev betting app is India's trusted online betting platform for cricket, football, tennis, live casino, Aviator and Teen Patti. It works on Android, iOS and any modern browser using a single verified Mahadev ID.",
              },
            },
            {
              "@type": "Question",
              name: "Mahadev app kya hai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Mahadev app ek online betting aur gaming platform hai jahan aap IPL cricket, live casino, Aviator aur Teen Patti khel sakte hain. Mahadev ID WhatsApp par 60 second me milti hai aur withdrawals UPI se instant hote hain.",
              },
            },
            {
              "@type": "Question",
              name: "How do I download the Mahadev app?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Message us on WhatsApp to get the official Mahadev app download link along with your verified Mahadev ID. The app is not on the Play Store — official betting apps in India are distributed directly to protect users from clones.",
              },
            },
            {
              "@type": "Question",
              name: "Is the Mahadev betting app safe?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The Mahadev app uses bank-grade SSL, KYC verified IDs, encrypted UPI payouts and 24/7 human support on WhatsApp. Every account is manually reviewed before activation.",
              },
            },
            {
              "@type": "Question",
              name: "Which games can I play on the Mahadev app?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Cricket (IPL, T20, ODI, Test), Football, Tennis, Kabaddi, Horse Racing, plus live casino games — Teen Patti, Andar Bahar, Dragon Tiger, Baccarat, Roulette, Aviator and 500+ slots.",
              },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Mahadev Betting App", item: "https://mahadevbookss.com/mahadev-betting-app" },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

const features = [
  { icon: Smartphone, t: "Works on Any Device", d: "Native-quality app for Android & iOS, plus a fast web app for desktop and tablet." },
  { icon: Zap, t: "60-Second ID Setup", d: "Get your verified Mahadev betting ID on WhatsApp in under a minute — no long forms." },
  { icon: Wallet, t: "Instant UPI Withdrawals", d: "Cash out to any UPI app, IMPS or e-wallet — settlements in minutes, not days." },
  { icon: Trophy, t: "Sharp IPL Odds", d: "Exchange-grade cricket pricing with back/lay markets and 500+ in-play fancy bets." },
  { icon: Dice5, t: "Live Casino Lobby", d: "100+ live dealer tables plus Aviator, Teen Patti, Andar Bahar, Roulette and Dragon Tiger." },
  { icon: ShieldCheck, t: "Bank-Grade Security", d: "SSL encryption, KYC-verified IDs, device fingerprinting and 24/7 fraud monitoring." },
];

const steps = [
  { n: "01", t: "Ping WhatsApp", d: "Tap the WhatsApp button and say 'I want the Mahadev app'.", icon: MessageCircle },
  { n: "02", t: "Get the App Link", d: "Our team sends the official Mahadev betting app download link — Android APK or iOS profile.", icon: Download },
  { n: "03", t: "Verify Your ID", d: "Share basic KYC on WhatsApp and receive your verified Mahadev ID in 60 seconds.", icon: BadgeCheck },
  { n: "04", t: "Deposit via UPI", d: "Fund the wallet instantly via UPI, IMPS or e-wallet. Credit is real-time.", icon: Wallet },
  { n: "05", t: "Play & Withdraw", d: "Bet on IPL, casino, Aviator or Teen Patti. Withdraw winnings to UPI in minutes.", icon: Trophy },
];

function Page() {
  return (
    <>
      <section className="relative pt-4 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 py-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Official Mahadev App
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-foreground">
            Mahadev Betting App —<br />
            <span className="text-gradient-gold">Official Download</span><br />
            <span className="text-foreground/90">for Cricket, Casino & Aviator</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl">
            India's most-searched online betting platform. Get the official
            download link and a verified ID on WhatsApp in 60 seconds — bet on
            IPL cricket, play live casino, Aviator and Teen Patti with instant
            UPI payouts and 24/7 human support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
              <span className="btn-glow-content">Get Mahadev App on WhatsApp</span>
              <span className="btn-glow-content grid place-items-center h-7 w-7 rounded-full bg-black/25">
                <Download className="h-4 w-4" />
              </span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/50 transition">
              <MessageCircle className="h-4 w-4 text-primary" /> Chat for Download Link
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-8 pb-8">
        <AIOverview
          title="At a glance"
          summary="An India-focused online betting platform offering cricket, football, live casino, Aviator and Teen Patti. Get the official download link and a verified ID on WhatsApp in 60 seconds, with instant UPI withdrawals."
          points={[
            "Works on Android, iOS and web — no Play Store required.",
            "Verified ID delivered on WhatsApp in ~60 seconds.",
            "Instant UPI, IMPS and e-wallet withdrawals, 24/7.",
            "Exchange-grade IPL odds plus 100+ live casino tables and Aviator.",
            "KYC-verified accounts, bank-grade SSL, human support in Hindi and English.",
          ]}
          keywords={["mahadev betting app", "cricket id whatsapp", "online betting india", "aviator teen patti"]}
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-8 py-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Why players choose us</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5">
              <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-semibold text-foreground">{f.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-8 py-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">How to download</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">Official betting apps aren't listed on the Play Store in India. Follow these 5 steps to get the genuine install and your verified ID directly on WhatsApp.</p>
        <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-primary">{s.n}</span>
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-3 font-semibold text-foreground">{s.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <FAQSection title="Frequently asked questions" items={appFaqs} />

      <section className="mx-auto max-w-6xl px-4 sm:px-8 py-12">
        <QuickLinks pageCategory="Mahadev App" />
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-8 py-16 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Ready to play?</h2>
        <p className="mt-3 text-muted-foreground">Ping our team on WhatsApp — you'll get the official download link and a verified ID in 60 seconds.</p>
        <div className="mt-6 flex justify-center">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content">Get the Mahadev App</span>
            <span className="btn-glow-content grid place-items-center h-7 w-7 rounded-full bg-black/25">
              <MessageCircle className="h-4 w-4" />
            </span>
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Prefer a browser? <Link to="/" className="text-primary hover:underline">Play on the web version</Link>.
        </p>
      </section>
    </>
  );
}
