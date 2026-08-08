import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/responsible-gaming")({
  head: () => ({
    meta: [
      { title: "Responsible Gaming at Cricbet99 — Play Safe, Play Smart" },
      { name: "description", content: "Cricbet99's commitment to responsible gaming: deposit limits, session timers, self-exclusion, age verification and support resources for Indian players." },
      { property: "og:title", content: "Responsible Gaming at Cricbet99" },
      { property: "og:description", content: "Deposit limits, self-exclusion and support resources to help you play safely." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResponsibleGaming,
});

const sections = [
  { title: "You must be 18 or older", body: "Cricbet99 is strictly for adults aged 18 and above. We verify age at ID setup and reserve the right to request additional documentation at any time." },
  { title: "Set deposit limits", body: "Decide upfront how much you're willing to deposit each day, week or month — and stick to it. Our support team can help you set and adjust these limits on your account." },
  { title: "Manage session time", body: "Betting should never feel like a job. Take breaks, avoid chasing losses and never let a session run longer than you planned. Session timers can be enabled on request." },
  { title: "Self-exclusion", body: "If you ever feel you need a break, contact our support team on WhatsApp. We can pause your account for a period you choose — no questions asked." },
  { title: "Never bet with borrowed money", body: "Only stake money you can genuinely afford to lose. Betting is entertainment, not an investment strategy, and it should never impact essential expenses." },
  { title: "Support and helplines", body: "If gambling is affecting your wellbeing, please reach out to a professional. Organisations such as GamCare and BeGambleAware offer free, confidential help globally." },
];

function ResponsibleGaming() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Responsible Gaming"
        title={<>Bet for fun. <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Bet responsibly.</span></>}
        subtitle="Cricbet99 is built for entertainment. We take player wellbeing seriously and give every user the tools — deposit limits, session timers, self-exclusion and support access — to keep their play safe and enjoyable."
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
