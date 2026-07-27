import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Cricbet99" },
      { name: "description", content: "How Cricbet99 collects, uses and protects your personal information, including OTP verification, payment data and communication preferences." },
      { property: "og:title", content: "Cricbet99 Privacy Policy" },
      { property: "og:description", content: "How Cricbet99 collects, uses and protects your personal data." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicy,
});

const sections = [
  { title: "What we collect", body: "We collect the minimum information needed to create and secure your Cricbet99 account: your name, mobile number, OTP verification data, deposit/withdrawal transaction references and communication logs from our WhatsApp and email support channels." },
  { title: "How we use your data", body: "Your data is used only to set up your account, process deposits and withdrawals, respond to your support queries and secure your login. We do not sell your data to third parties for advertising or marketing purposes." },
  { title: "Who we share data with", body: "We share limited data with our payment processing partners strictly for the purpose of settling deposits and withdrawals, and with regulatory or law enforcement authorities when legally required. Nothing else is shared without your explicit consent." },
  { title: "Data security", body: "All communication with Cricbet99 support and account systems is protected with industry-standard encryption. Your credentials are stored securely and access is restricted to authorised support personnel only." },
  { title: "Your rights", body: "You may request a copy of your data, correction of inaccurate information or deletion of your account at any time by contacting our support team on WhatsApp or email." },
  { title: "Contact us about privacy", body: "For any privacy-related questions or requests, reach out to our support team via WhatsApp or email — we respond to privacy queries within 48 hours." },
];

function PrivacyPolicy() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Privacy"
        title={<>Your data, <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>your control.</span></>}
        subtitle="We collect only what's necessary to run your Cricbet99 account, protect your logins and process your payments — and we never sell your personal information to third parties."
      />
      <section className="mx-auto max-w-4xl px-6 py-16 space-y-6">
        {sections.map((s) => (
          <div key={s.title} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
            <h2 className="text-xl font-bold">{s.title}</h2>
            <p className="mt-3 text-foreground/75">{s.body}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
