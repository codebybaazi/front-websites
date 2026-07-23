import { createFileRoute, Link, Outlet, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getTennisEvent } from "@/data/tennis-2026";

export const Route = createFileRoute("/tennis-schedule/$slug")({
  loader: ({ params }) => {
    const t = getTennisEvent(params.slug);
    if (!t) throw notFound();
    return t;
  },
  component: () => <Outlet />,
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
