import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "fairplayin" },
      { name: "description", content: "fairplayin blank project" },
      { property: "og:title", content: "fairplayin" },
      { property: "og:description", content: "fairplayin blank project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        fairplayin
      </h1>
    </main>
  );
}
