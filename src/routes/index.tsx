import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FairPlayIndia" },
      { name: "description", content: "FairPlayIndia — coming soon." },
      { property: "og:title", content: "FairPlayIndia" },
      { property: "og:description", content: "FairPlayIndia — coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          FairPlayIndia
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Something fair is coming soon.
        </p>
      </div>
    </div>
  );
}
