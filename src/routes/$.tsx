import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { pagesByPath, pages, type SitePage } from "@/data/pages";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { QuickLinks } from "@/components/QuickLinks";
import heroCricket from "@/assets/hero-cricket.jpg";
import heroSports from "@/assets/hero-sports.jpg";
import heroWallet from "@/assets/hero-wallet.jpg";
import heroSecurity from "@/assets/hero-security.jpg";
import heroSupport from "@/assets/hero-support.jpg";
import heroPlatform from "@/assets/hero-platform.jpg";
import heroAgents from "@/assets/hero-agents.jpg";
import heroGuide from "@/assets/hero-guide.jpg";
import heroInsights from "@/assets/hero-insights.jpg";
import heroPolicy from "@/assets/hero-policy.jpg";
import heroCompany from "@/assets/hero-company.jpg";
import heroGeneral from "@/assets/hero-general.jpg";

const heroMap: Record<string, string> = {
  cricket: heroCricket,
  sports: heroSports,
  wallet: heroWallet,
  security: heroSecurity,
  support: heroSupport,
  platform: heroPlatform,
  agents: heroAgents,
  guide: heroGuide,
  insights: heroInsights,
  policy: heroPolicy,
  company: heroCompany,
  general: heroGeneral,
};

function findPage(splat: string): SitePage | undefined {
  const path = "/" + splat.replace(/\/$/, "");
  return pagesByPath.get(path);
}

export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const page = findPage(params._splat ?? "");
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page not found — Mahadev Book" }, { name: "robots", content: "noindex" }] };
    }
    const { page } = loaderData;
    const rawTitle = `${page.title} — Mahadev Book`;
    const shortTitle = rawTitle.length > 60 ? rawTitle.slice(0, 57).trimEnd() + "…" : rawTitle;
    return {
      meta: [
        { title: shortTitle },
        { name: "description", content: page.excerpt },
        { property: "og:title", content: shortTitle },
        { property: "og:description", content: page.excerpt },
        { property: "og:url", content: `https://mahadevbookss.com${page.path}` },
      ],
      links: [{ rel: "canonical", href: `https://mahadevbookss.com${page.path}` }],
    };
  },
  component: SitePageView,
  notFoundComponent: NotFoundView,
});

function NotFoundView() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">The link you followed may be broken or the page may have moved.</p>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
    </section>
  );
}

function SitePageView() {
  const { page } = Route.useLoaderData();
  const { whatsappUrl } = useWhatsApp();
  const hero = heroMap[page.hero] ?? heroGeneral;
  const related = pages.filter((p) => p.category === page.category && p.path !== page.path).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden border-b border-primary/20">
        <img
          src={hero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="eager"
          width={1600}
          height={700}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-16 sm:pt-24 pb-14 sm:pb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary font-semibold">
            {page.category}
          </div>
          <h1 className="mt-5 font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground">{page.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
              <span className="btn-glow-content">Get Mahadev ID</span>
              <span className="btn-glow-content grid place-items-center h-7 w-7 rounded-full bg-black/25">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <Link to="/blog" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold hover:border-primary/50 transition">
              Read the blog
            </Link>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
        {page.content.map((block: { heading?: string; body: string }, i: number) => (
          <div key={i} className="mb-8">
            {block.heading && (
              <h2 className="font-display text-2xl sm:text-3xl font-bold mt-4 mb-3 flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                {block.heading}
              </h2>
            )}
            <p className="text-foreground/85 leading-relaxed text-base sm:text-lg">{block.body}</p>
          </div>
        ))}

        <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8 text-center">
          <div className="font-display text-2xl font-bold">Ready to play with Mahadev Book?</div>
          <p className="mt-2 text-sm text-muted-foreground">Get your verified ID in under 5 minutes on WhatsApp.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow mt-5 inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content">Get your ID</span>
            <span className="btn-glow-content grid place-items-center h-7 w-7 rounded-full bg-black/25">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
          <h2 className="text-2xl font-bold">More on {page.category}</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((p) => (
              <Link
                key={p.path}
                to="/$"
                params={{ _splat: p.path.replace(/^\//, "") }}
                className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/50 transition"
              >
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">{p.category}</div>
                <h3 className="mt-2 font-display text-base font-bold leading-snug group-hover:text-primary transition">{p.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      <QuickLinks
        pageCategory={page.category}
        excludePath={page.path}
        title="Explore more of Mahadev Book"
        subtitle="Quick jumps to popular platforms, wallet help, cricket coverage and safety pages."
      />
    </>
  );
}
