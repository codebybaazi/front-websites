import { createFileRoute, Link, Outlet, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getCricketSeries } from "@/data/cricket-series-2026";

export const Route = createFileRoute("/cricket-schedule/$slug")({
  loader: ({ params }) => {
    const s = getCricketSeries(params.slug);
    if (!s) throw notFound();
    return s;
  },
  component: () => <Outlet />,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Series not found</h1>
        <Link to="/cricket-schedule" className="mt-6 inline-block text-primary underline">
          Back to schedule
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
});
