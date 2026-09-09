import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, KeyRound, ShieldCheck, Smartphone, AlertTriangle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const loginFaqs: FAQItem[] = [
  { q: "Why can't I log into my Mahadev Book ID?", a: "The most common causes are a mistyped password, an expired session after a long gap between logins, or a temporary hold placed on the account after several failed attempts. All three are fixed on WhatsApp in a few minutes." },
  { q: "I forgot my Mahadev Book password. What do I do?", a: "Message the support team on WhatsApp from your registered mobile number. Once your identity is confirmed against your KYC, a fresh password is issued straight away." },
  { q: "My account says it's locked. Why?", a: "Accounts lock automatically after repeated failed login attempts, as a fraud-prevention measure. It's not a ban — a quick identity check on WhatsApp unlocks it." },
  { q: "Can I log in from a new phone or browser?", a: "Yes. Mahadev Book doesn't tie your ID to one device. If a new device asks for extra verification, that's normal and clears once you confirm your identity." },
  { q: "I changed my number and now I can't log in. What now?", a: "Message support from your new number and mention your old registered number and any recent deposit or withdrawal for verification. The team updates your contact details after confirming it's really you." },
  { q: "Is it safe to share my login details to fix an issue?", a: "Never share your password with anyone, including someone claiming to be Mahadev Book support. Our team verifies you through KYC details and OTP-style checks, never by asking for your password directly." },
  { q: "How long does it take to restore access?", a: "Most login issues are resolved within the same WhatsApp conversation, typically under 10 minutes once identity is confirmed." },
];

export const Route = createFileRoute("/mahadev-book-login-issues")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Login Issues — Fix Access on WhatsApp" },
      { name: "description", content: "Can't log into your Mahadev Book ID? See the common causes of login issues and get access restored fast through the official Mahadev Book WhatsApp support line." },
      { property: "og:title", content: "Mahadev Book Login Issues — Fix Access on WhatsApp" },
      { property: "og:description", content: "Locked out, forgot your password, or your Mahadev Book ID won't load? Get it fixed on the official WhatsApp support line." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-login-issues" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book login issues — fix access on WhatsApp" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-login-issues" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(loginFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Login Issues", item: "https://mahadevbookss.com/mahadev-book-login-issues" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-login-issues",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: LoginIssuesPage,
});

const causes = [
  { icon: KeyRound, t: "Wrong or expired password", d: "The most common cause. Passwords don't expire on a timer, but a mistyped one after weeks away can look that way." },
  { icon: ShieldCheck, t: "Account temporarily held", d: "Several failed login attempts in a row trigger an automatic hold to block brute-force attempts, not a punishment." },
  { icon: Smartphone, t: "New device or browser", d: "Logging in from an unfamiliar phone or browser can prompt an extra identity check before access is granted." },
  { icon: AlertTriangle, t: "Changed mobile number", d: "If your registered number is no longer active, the account can't be reached for verification until it's updated." },
];

const fixSteps = [
  { n: "01", t: "Open WhatsApp", d: "Tap the WhatsApp button below to message the official Mahadev Book support line." },
  { n: "02", t: "Confirm your identity", d: "Share your registered mobile number and answer a quick KYC check so the team knows it's really you." },
  { n: "03", t: "Get a fresh login", d: "Support resets your password or clears the account hold and sends you back in." },
  { n: "04", t: "Log in again", d: "Use the new details straight away. If anything still looks off, stay on the same chat and flag it." },
];

function LoginIssuesPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Account Access
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Login Issues</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Locked out of your Mahadev Book ID, forgot your password, or the login page just won't
          accept your details? Here's what usually causes it and how to get back in, all through
          the official WhatsApp support line.
        </p>
        <div className="mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <span className="btn-glow-content flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Fix My Login on WhatsApp
            </span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Login Issues"
        summary="Mahadev Book login issues are almost always one of four things: a mistyped or forgotten password, an automatic hold after failed attempts, an unfamiliar device asking for extra verification, or a changed mobile number the account can't reach. All four are resolved on the official WhatsApp support line after a quick identity check against KYC details, usually within 10 minutes."
        points={[
          "Most login issues resolve in one WhatsApp chat",
          "Password resets require identity verification, not just a request",
          "Account holds after failed attempts are automatic, not a ban",
          "New devices may trigger an extra verification step",
          "Changed mobile numbers need updating before access returns",
          "Support never asks for your password directly",
        ]}
        keywords={["mahadev book login issues", "mahadev book login problem", "mahadev book account locked", "mahadev book password reset"]}
      />

      {/* Common causes */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Common causes</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Four things account for nearly every login problem we see.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {causes.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fix steps */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How to fix it</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Four steps, usually done inside one WhatsApp chat.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {fixSteps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-2xl font-bold text-gradient-gold">{s.n}</span>
              <h3 className="mt-3 font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety note */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <div className="rounded-2xl border border-warning/40 bg-warning/5 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-bold text-foreground">Never share your password to "fix" a login issue</h2>
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Mahadev Book support verifies you through KYC details, not by asking for your password.
            If anyone, including someone claiming to be from our team, asks for your password
            directly, treat it as a red flag and report the chat to us on the official WhatsApp
            line below.
          </p>
        </div>
      </section>

      <FAQSection title="Mahadev Book Login Issues — FAQs" items={loginFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Still can't get in?</h2>
        <p className="mt-3 text-muted-foreground">Message support and most access issues are cleared within minutes.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Chat Now</span>
          </a>
          <Link to="/contact" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Other ways to reach us
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-login-issues"
        title="Keep exploring"
        subtitle="Deposits, withdrawals, KYC and everything else on the support desk."
      />
    </>
  );
}
