import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, WHATSAPP, TELEGRAM } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { tennis2026, getTennisEvent } from "@/data/tennis-2026";

export const Route = createFileRoute("/tennis-schedule/$slug/")({
  loader: ({ params }) => {
    const t = getTennisEvent(params.slug);
    if (!t) throw notFound();
    return t;
  },
  head: ({ params, loaderData }) => {
    const t = loaderData;
    if (!t) {
      return {
        meta: [
          { title: "Tennis event not found — Sprinters" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${t.name} — Schedule, Draws & Betting IDs`;
    const desc = `${t.name} full schedule (${t.category}, ${t.surface}, ${t.window}) at ${t.venue}, ${t.city} — round-by-round order of play, odds and Sprinters betting IDs.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: t.name },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/tennis-schedule/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/tennis-schedule/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            name: t.name,
            sport: "Tennis",
            startDate: t.startIso,
            description: t.summary,
            location: { "@type": "Place", name: t.venue, address: t.city },
          }),
        },
      ],
    };
  },
  component: TennisEventPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Tennis event not found</h1>
        <Link to="/schedule" className="mt-6 inline-block text-primary underline">
          Back to schedule
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
});

function TennisEventPage() {
  const t = Route.useLoaderData();
  const others = tennis2026.filter((x) => x.slug !== t.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section
        className="relative overflow-hidden border-b border-border/50"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            Tennis · {t.tour} · {t.category}
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight md:text-5xl">
            {t.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.window} · {t.surface} · {t.venue}, {t.city}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Get Betting ID on WhatsApp
            </a>
            <a href={TELEGRAM} className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold">
              Chat on Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold">About the event</h2>
          <p className="mt-3 text-muted-foreground">{t.summary}</p>
        </div>

        {t.rounds && t.rounds.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-xl font-bold">Round-by-round schedule</h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-background/60 text-xs uppercase tracking-widest text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Round</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {t.rounds.map((r: { label: string; date: string; detail: string }, i: number) => (
                    <tr key={i} className="border-t border-border/60">
                      <td className="px-4 py-3 font-semibold">{r.label}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.date}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Order of play updates day-by-day once draws are released.
            </p>
          </div>
        ) : null}

        <div className="mt-10">
          <Link to="/schedule" className="text-sm font-semibold text-primary">
            ← All 2026-27 fixtures
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            More tennis events
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((x) => (
              <li key={x.slug}>
                <Link
                  to="/tennis-schedule/$slug"
                  params={{ slug: x.slug }}
                  className="block rounded-lg border border-border bg-background px-4 py-3 text-sm hover:border-primary hover:text-primary"
                >
                  <span className="font-semibold">{x.short}</span>
                  <span className="ml-2 text-muted-foreground">· {x.window}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
