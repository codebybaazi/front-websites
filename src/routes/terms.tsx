import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Cricbet99" },
      { name: "description", content: "Cricbet99 terms and conditions covering account use, deposits, withdrawals, fair play, prohibited activities and dispute resolution." },
      { property: "og:title", content: "Cricbet99 Terms & Conditions" },
      { property: "og:description", content: "The rules that govern your Cricbet99 account and its use." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

const sections = [
  { title: "Eligibility", body: "You must be at least 18 years old and legally allowed to participate in online gaming in your jurisdiction. Providing false information at signup may result in account closure and forfeiture of funds." },
  { title: "One account per user", body: "Each user is permitted a single Cricbet99 ID. Duplicate accounts, shared logins or accounts operated on behalf of another person are not allowed and may be suspended without notice." },
  { title: "Deposits and withdrawals", body: "Deposits must come from a payment method registered in your own name. Withdrawals are processed to the same source where possible, and settle within 24 hours during working days." },
  { title: "Fair play", body: "Any attempt at match-fixing, syndicate betting, arbitrage abuse, exploitation of pricing errors or use of automated software is strictly prohibited and may result in permanent account closure." },
  { title: "Account inactivity", body: "Accounts inactive for 12 consecutive months may be flagged for verification before further use. Cricbet99 will always make reasonable efforts to contact you before any such action." },
  { title: "Dispute resolution", body: "Any dispute regarding markets, settlement or account activity should be raised with our support team on WhatsApp within 7 days of the event. Our final decision on all such matters will be communicated in writing." },
  { title: "Changes to these terms", body: "Cricbet99 may update these terms from time to time. Material changes will be announced on the site and, where possible, communicated to active users directly." },
];

function Terms() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Terms & Conditions"
        title={<>Clear rules, <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>fair play.</span></>}
        subtitle="These terms govern how your Cricbet99 account works — from eligibility and payments to fair play and dispute resolution. By using Cricbet99, you agree to the terms outlined on this page."
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
