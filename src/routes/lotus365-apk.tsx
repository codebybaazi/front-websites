import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { AiOverview } from "@/components/AiOverview";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { whatsappUrl } from "@/data/site";
import { Download, ShieldCheck, MessageCircle } from "lucide-react";

const URL = "https://lotus365id.com/lotus365-apk";

const FAQ = [
  { q: "Where can I download the Lotus365 APK?", a: "The official Lotus365 APK is sent by our WhatsApp concierge on request. We do not distribute the file on public download mirrors, because copycats regularly re-package tampered APKs under the Lotus365 name." },
  { q: "Is the Lotus365 APK safe?", a: "Yes — every Lotus365 APK build is signed with our production certificate and virus-scanned before release. If the installer signature does not match, Android will refuse to install." },
  { q: "What Android version do I need?", a: "Android 7.0 (Nougat) or newer. The Lotus365 APK is ~18 MB and runs smoothly on entry-level 2 GB RAM phones." },
  { q: "How do I update the Lotus365 APK?", a: "The app checks for updates on launch and prompts you when a new Lotus365 APK is ready. You can also request the latest link from WhatsApp anytime." },
];

export const Route = createFileRoute("/lotus365-apk")({
  head: () => ({
    meta: [
      { title: "Lotus365 APK — Official Android Download (2026)" },
      {
        name: "description",
        content:
          "Get the official Lotus365 APK for Android — signed, virus-scanned and 18 MB. Cricket, casino and live sports with instant UPI payouts. Latest 2026 release.",
      },
      { property: "og:title", content: "Lotus365 APK — Official Latest Download for Android" },
      {
        property: "og:description",
        content:
          "Signed, scanned Lotus365 APK for Android. Cricket, casino and instant UPI payouts inside one 18 MB app.",
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
          name: "Lotus365 APK",
          operatingSystem: "Android 7.0+",
          applicationCategory: "GameApplication",
          fileSize: "18 MB",
          url: URL,
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "18420" },
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
            { "@type": "ListItem", position: 2, name: "Lotus365 APK", item: URL },
          ],
        }),
      },
    ],
  }),
  component: ApkPage,
});

function ApkPage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
          <Download className="h-3.5 w-3.5" /> Android
        </div>
        <h1 className="font-display text-4xl md:text-6xl mb-5">
          Lotus365 <span className="gold-text">APK</span>
        </h1>
        <p className="text-lg text-foreground/90 max-w-2xl">
          The official Lotus365 APK — signed, virus-scanned and just 18 MB.
          Cricket, casino and live sports inside one Android app with instant
          UPI payouts.
        </p>
        <div className="mt-7">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-green inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
          >
            <WhatsAppIcon className="h-4 w-4" /> Get latest Lotus365 APK on WhatsApp
          </a>
        </div>
      </section>

      <AiOverview
        summary="Lotus365 APK — the official Android package for cricket betting and live casino, side-loaded because Google Play restricts real-money gaming apps in India."
        points={[
          "Signed official APK, verified checksum",
          "Enable install from unknown sources, one-tap update in-app",
          "Runs on Android 8+ with 45 MB footprint",
          "Same wallet and login as web and iOS PWA",
        ]}
        sources={[{ label: "App download", to: "/lotus365-app-download" }, { label: "Login", to: "/lotus365-login" }]}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">Why request the APK from us</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "Signed build", d: "Production certificate — Android refuses tampered installs." },
            { t: "Latest version", d: "Always the newest Lotus365 release, never an outdated mirror." },
            { t: "18 MB, quick install", d: "Runs on 2 GB RAM phones over 4G/5G in under 30 seconds." },
          ].map((x) => (
            <div key={x.t} className="glass-card rounded-2xl p-5">
              <ShieldCheck className="h-5 w-5 text-primary mb-3" />
              <div className="font-display text-lg mb-1">{x.t}</div>
              <p className="text-sm text-foreground/90">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">Lotus365 APK FAQ</h2>
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

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-4xl mb-4">
            Install <span className="gold-text">Lotus365</span> in 60 seconds
          </h2>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-green inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition"
          >
            <WhatsAppIcon className="h-4 w-4" /> Get APK link on WhatsApp
          </a>
        </div>
      </section>

      <QuickLinks currentPath={URL} heading="More Lotus365 resources" />
      <SiteFooter />
    </div>
  );
}
