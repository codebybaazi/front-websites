import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { AiOverview } from "@/components/ai-overview";
import { useWhatsApp } from "@/hooks/use-whatsapp";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Login: Official Site Access & Secure ID Recovery" },
      { name: "description", content: "Access your official Cricbet99 login URL securely. Get verified betting ID login links, reset passwords on WhatsApp, and protect your account from phishing. Available 24/7." },
      { name: "keywords", content: "cricbet99 login, cricbet99 official login, cricbet99 id login, cricbet99 login url, cricbet99 betting id access, cricbet99 password reset, online betting login india" },
      { property: "og:title", content: "Cricbet99 Official Login — Secure ID Access" },
      { property: "og:description", content: "Secure login guide and official access for all Cricbet99 betting ID users. Get your link on WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/login" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/login" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Cricbet99 Login",
          "description": "Official login access and security guide for Cricbet99 betting ID holders.",
          "url": "https://cricbet99.co.in/login",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cricbet99.co.in/" },
              { "@type": "ListItem", "position": 2, "name": "Login", "item": "https://cricbet99.co.in/login" }
            ]
          }
        })
      }
    ],
  }),
  component: LoginPage,
});

const tips = [
  { t: "Use only the official URL", d: "Always request your login link from Cricbet99 WhatsApp support. Never trust random Google ads or copy-paste links from strangers." },
  { t: "Never share your password", d: "Support will never ask for your full password. If someone does, they are not from Cricbet99 — block and report immediately." },
  { t: "Enable OTP-based recovery", d: "Keep your registered mobile active. All password resets require WhatsApp OTP to protect your wallet." },
  { t: "Log out on shared devices", d: "If you log in from a friend's phone or a café, always log out and clear the browser session before leaving." },
];

function LoginPage() {
  const { wa } = useWhatsApp();
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Login"
        title={<>Official <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Cricbet99 Login</span> & ID Access.</>}
        subtitle="To ensure maximum security, official Cricbet99 login URLs are issued personally by our verified team. Message us on WhatsApp to receive your official login link, reset your password, or recover a locked betting ID instantly."
      />
      <section className="mx-auto max-w-4xl px-6 py-8">
        <div className="rounded-3xl border border-primary/25 bg-background/60 p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-black">Official Cricbet99 Login Access via WhatsApp</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Our support team provides the verified Cricbet99 login URL, your unique username, and password help directly on WhatsApp to protect you from phishing and fake sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-10 py-5 text-lg font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.04]" style={{ background: "var(--gradient-gold)" }}>
              <MessageCircle className="h-6 w-6" /> Get Your Official Login Link
            </a>
            <p className="text-xs text-foreground/50">⚡ Instant response · 🔒 Secure & Private · 🕒 Open 24/7</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-primary/10">
        <h2 className="text-3xl font-black md:text-4xl text-center">Secure Your Cricbet99 Login</h2>
        <p className="mt-4 text-center text-foreground/60 max-w-2xl mx-auto mb-10">Follow these critical security tips to ensure your betting ID and wallet remain protected at all times.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {tips.map((t) => (
            <div key={t.t} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <h3 className="text-lg font-bold">{t.t}</h3>
              <p className="mt-2 text-sm text-foreground/75">{t.d}</p>
            </div>
          ))}
        </div>
      </section>
      <AiOverview 
        summary="Cricbet99 Official Login Access: Securely manage your betting ID with 24/7 human oversight and bank-grade encryption."
        highlights={[
          "Verified WhatsApp Login Links",
          "Instant Password Reset Service",
          "256-bit Session Encryption",
          "Anti-Phishing Security Protocols"
        ]}
      />
    </SiteLayout>
  );
}
