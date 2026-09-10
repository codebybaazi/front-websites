import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Smartphone, Lock, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const loginFaqs: FAQItem[] = [
  { q: "How do I login to my Mahadev Book ID?", a: "You'll receive your login URL, user ID and password on WhatsApp from our team. Open the URL, enter your ID and password, and you're in. We recommend changing your password after first login." },
  { q: "I forgot my Mahadev Book password — what do I do?", a: "Just message our WhatsApp support with your user ID. We verify it's really you and reset the password in a few minutes. Available 24/7, IPL nights included." },
  { q: "Is the Mahadev Book login page safe?", a: "Yes. IDs are issued directly by verified operators, the login page runs on HTTPS, and only you know your password. We will never ask for your password on WhatsApp or phone." },
  { q: "How do I get a brand-new Mahadev Book cricket ID login?", a: "Message us on WhatsApp with your name and preferred deposit method (UPI, bank, etc.). You'll receive your login URL, ID and starting password within 5 minutes." },
  { q: "Can I login from mobile?", a: "Yes — the Mahadev Book login page is fully responsive. Works on Android, iPhone, tablets and desktop browsers. No app download needed." },
];

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Login | Official Cricket ID Access Page" },
      {
        name: "description",
        content:
          "Official Mahadev Book login page. Get your online cricket ID login on WhatsApp in 5 minutes — secure, verified, 24/7 support for IPL, casino & sports betting.",
      },
      { property: "og:title", content: "Mahadev Book Login | Official Cricket ID Login" },
        { name: "twitter:title", content: "Mahadev Book Login | Official Cricket ID Login" },
      {
        property: "og:description",
        content:
          "Login to your Mahadev Book cricket ID. New ID setup on WhatsApp in 5 minutes. 24/7 verified support.",
      },
      { property: "og:url", content: "https://mahadevbookss.com/login" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book Login — Official Cricket ID" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/login" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do I login to my Mahadev Book ID?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You'll receive your login URL, user ID and password on WhatsApp from our team. Open the URL, enter your ID and password, and you're in. Change your password on first login.",
              },
            },
            {
              "@type": "Question",
              name: "I forgot my Mahadev Book password — what do I do?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Message our WhatsApp support with your user ID. We verify it's you and reset the password within a few minutes, 24/7.",
              },
            },
            {
              "@type": "Question",
              name: "Is the Mahadev Book login page safe?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Every ID is issued directly by verified operators, sits on HTTPS, and is protected by a personal password only you know. We never ask for your password on WhatsApp.",
              },
            },
            {
              "@type": "Question",
              name: "How do I get a new Mahadev Book cricket ID login?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Message us on WhatsApp with your name and preferred deposit method. You'll receive your login URL, ID and password within 5 minutes.",
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
            { "@type": "ListItem", position: 2, name: "Login", item: "https://mahadevbookss.com/login" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/login",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),

  component: LoginPage,
});

function LoginPage() {
  const { whatsappUrl } = useWhatsApp();
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <Lock className="h-3 w-3" /> Official Login
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient-gold">Mahadev Book</span> Login
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Log in to your Mahadev Book online cricket ID for IPL, international cricket, casino and live sports.
          Every login URL is issued by our verified team — no fake mirror sites, no middlemen.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 mr-2" /> Get Login on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">
              Chat with support
            </Link>
          </Button>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Login"
        summary="Mahadev Book login credentials (URL, user ID, password) are issued personally over WhatsApp after ID setup. There is no public sign-up form — this prevents fake mirror sites and keeps every account verified. Password resets and login issues are handled 24/7 by human support."
        points={[
          "Login URL + ID + password delivered on WhatsApp in ~5 minutes",
          "First-login password change is enforced for security",
          "24/7 password reset & login recovery via WhatsApp",
          "HTTPS-only login page, no third-party trackers",
          "Never share your password — support never asks for it",
          "Works on mobile, tablet and desktop browsers",
        ]}
        keywords={[
          "mahadev book login",
          "mahadev book id login",
          "cricket id login",
          "online cricket id login",
          "betting id login",
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          How the Mahadev Book login works
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: MessageCircle,
              title: "1. Ping us on WhatsApp",
              body: "Send 'Hi' to our WhatsApp number. Tell us you need a new Mahadev Book cricket ID login or a password reset for an existing one.",
            },
            {
              icon: Smartphone,
              title: "2. Get your credentials",
              body: "Within 5 minutes you'll receive your personal login URL, user ID and one-time password directly in chat.",
            },
            {
              icon: ShieldCheck,
              title: "3. Login & change password",
              body: "Open the URL, log in, and set your own password. Your account is ready for IPL, casino and live sports.",
            },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <s.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Why players trust the Mahadev Book login
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Direct-from-operator login URLs — no fake mirror sites",
            "HTTPS-secured, no third-party trackers",
            "24/7 password reset on WhatsApp",
            "Instant UPI deposits & withdrawals from the same account",
            "Serving Indian players since 2014",
            "Personal support in Hindi & English",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">{point}</span>
            </div>
          ))}
        </div>
      </section>

      <FAQSection title="Mahadev Book Login FAQs" items={loginFaqs} />

      <QuickLinks pageCategory="support" excludePath="/login" />
    </>
  );
}
