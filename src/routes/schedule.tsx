import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "2026 Match Schedule — IPL, T20 World Cup, FIFA | Cricbet99" },
      { name: "description", content: "Complete 2026 sports schedule: IPL 2026 fixtures, ICC T20 World Cup, WPL, FIFA World Cup and Pro Kabaddi — dates, venues and live betting markets on Cricbet99." },
      { property: "og:title", content: "2026 Match Schedule — Cricbet99" },
      { property: "og:description", content: "Every major 2026 cricket, football and tennis fixture, in one place." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/schedule" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/schedule" }],
  }),
  component: Schedule,
});

const rows = [
  { m: "Mar 2026", e: "IPL 2026 — Season Opener", v: "Ahmedabad" },
  { m: "Mar–May 2026", e: "IPL 2026 League Stage (74 games)", v: "Pan-India" },
  { m: "May 2026", e: "IPL 2026 Playoffs & Final", v: "Kolkata / Mumbai" },
  { m: "Jun 2026", e: "FIFA World Cup 2026 kicks off", v: "USA · Canada · Mexico" },
  { m: "Jun–Jul 2026", e: "FIFA WC Group + Knockouts", v: "16 host cities" },
  { m: "Jun–Jul 2026", e: "Wimbledon Championships", v: "London (SW19)" },
  { m: "Jul 2026", e: "The Hundred 2026", v: "England" },
  { m: "Aug–Sep 2026", e: "Asia Cup 2026", v: "India / UAE" },
  { m: "Sep 2026", e: "US Open Tennis 2026", v: "New York" },
  { m: "Oct–Nov 2026", e: "ICC T20 World Cup 2026", v: "India & Sri Lanka" },
  { m: "Nov 2026", e: "WPL 2026", v: "India" },
  { m: "Dec 2026", e: "Pro Kabaddi Season 13 Final", v: "TBA" },
];

function Schedule() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="2026 Schedule"
        title={<>Every big sports event of <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>2026, mapped.</span></>}
        subtitle="Plan your season. From IPL 2026 to the FIFA World Cup and the ICC T20 World Cup, here's the master 2026 sports calendar with live betting markets on Cricbet99."
      />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="overflow-hidden rounded-2xl border border-primary/20">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary/10 text-xs uppercase tracking-widest text-primary">
              <tr>
                <th className="px-5 py-4">Month</th>
                <th className="px-5 py-4">Event</th>
                <th className="px-5 py-4">Venue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10">
              {rows.map((r) => (
                <tr key={r.e} className="bg-background/60">
                  <td className="px-5 py-4 font-semibold text-foreground">{r.m}</td>
                  <td className="px-5 py-4 text-foreground/85">{r.e}</td>
                  <td className="px-5 py-4 text-foreground/70">{r.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <CTABand heading="Never miss a big match." sub="Get your Cricbet99 ID today and be ready when the toss happens." />
    </SiteLayout>
  );
}
