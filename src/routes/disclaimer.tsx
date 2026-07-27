import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Cricbet99" },
      { name: "description", content: "Cricbet99 disclaimer covering entertainment purpose, financial risk, jurisdictional responsibility and information accuracy for Indian players." },
      { property: "og:title", content: "Cricbet99 Disclaimer" },
      { property: "og:description", content: "Important information about the entertainment purpose and risks of using Cricbet99." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Disclaimer,
});

const sections = [
  { title: "For entertainment only", body: "Cricbet99 is intended purely for entertainment. Nothing on this site constitutes financial advice or a guarantee of returns. Never treat betting as a source of income." },
  { title: "Financial risk", body: "All betting activity involves the risk of financial loss. Only stake amounts you can genuinely afford to lose and never bet with borrowed money or funds meant for essential expenses." },
  { title: "Local jurisdiction", body: "It is your responsibility to ensure that participation in online betting is legal in your specific jurisdiction. Cricbet99 does not offer services where such activity is prohibited by law." },
  { title: "Accuracy of information", body: "We work hard to keep odds, markets and content accurate, but occasional errors can occur. Cricbet99 reserves the right to void or correct any bet placed on a market with an obvious pricing or listing error." },
  { title: "Third-party content", body: "Some content — such as league logos, player names and match schedules — is owned by third parties. Their use is purely for identification and does not imply endorsement of Cricbet99 by those parties." },
];

function Disclaimer() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Disclaimer"
        title={<>Please read <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>before you bet.</span></>}
        subtitle="Cricbet99 is designed for adults who understand the risks and treat betting as entertainment. This page explains the key things you should know before using our platform."
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
