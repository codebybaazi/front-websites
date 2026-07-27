import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteLayout, PageHero, WA } from "@/components/site-layout";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Login — Access Your Betting ID Safely" },
      { name: "description", content: "Log in to your Cricbet99 betting ID securely. Get your official login URL, reset your password on WhatsApp and stay safe from phishing sites — 24/7 human support." },
      { property: "og:title", content: "Cricbet99 Login" },
      { property: "og:description", content: "Secure login guide and password help for Cricbet99 users." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Login"
        title={<>Log in to your <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Cricbet99 ID.</span></>}
        subtitle="For safety, Cricbet99 login URLs are issued personally by our team. Message us on WhatsApp to get your official login link, reset your password or recover a locked account — no wait times."
      />
      <section className="mx-auto max-w-3xl px-6 py-8">
        <div className="rounded-2xl border border-primary/25 bg-background/60 p-8 text-center">
          <h2 className="text-2xl font-black">Get your login link on WhatsApp</h2>
          <p className="mt-3 text-foreground/75">Support sends your official Cricbet99 login URL, username and (if needed) a fresh password — verified and safe.</p>
          <a href={WA} className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-primary-foreground shadow-2xl transition-transform hover:scale-[1.03]" style={{ background: "var(--gradient-gold)" }}>
            <MessageCircle className="h-5 w-5" /> Request Login on WhatsApp
          </a>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-black md:text-4xl">Stay safe when logging in</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {tips.map((t) => (
            <div key={t.t} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <h3 className="text-lg font-bold">{t.t}</h3>
              <p className="mt-2 text-sm text-foreground/75">{t.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
