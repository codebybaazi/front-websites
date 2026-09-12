import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AUTHORS } from "@/lib/authors";
import { AuthorAvatar } from "@/components/AuthorAvatar";
import { JsonLd } from "@/components/JsonLd";
import { authorsCollectionJsonLd } from "@/utils/author-schema";
import { OG_IMAGE, absolutePageUrl } from "@/utils/page-seo";

const TITLE = "Fairplay authors | Who writes the guides and match notes";
const DESCRIPTION =
  "Meet the Fairplay editorial desk: the people behind the login guides, support pages, fixture previews, market analysis and staking articles on this site.";

export const Route = createFileRoute("/authors/")({
  head: () => {
    const url = absolutePageUrl("/authors");
    return {
      title: TITLE,
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: OG_IMAGE },
        { property: "og:locale", content: "en_IN" },
        { property: "og:site_name", content: "Fairplay" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: TITLE },
        { name: "twitter:description", content: DESCRIPTION },
        { name: "twitter:image", content: OG_IMAGE },
        { name: "robots", content: "index, follow" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: AuthorsIndex,
});

function AuthorsIndex() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      <JsonLd data={authorsCollectionJsonLd(AUTHORS)} />

      <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.705_0.198_142_/_0.08),transparent_55%)]" />
        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 brand-rule" />
              <span className="kicker">Editorial desk</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              Who writes this site
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Every guide, support page and match preview on Fairplay has a named writer behind it. Here is
              the desk, and what each person actually covers.
            </p>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground/70 leading-relaxed">
              Editorial note: each byline is a working identity for one specialist on the Fairplay content
              desk — a fixed person and voice assigned to that beat, not a rotating pool of ghostwriters.
              We publish the desk this way rather than with individual photos; the background and focus
              areas below are accurate to what that beat actually covers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {AUTHORS.map((author, i) => (
              <motion.div
                key={author.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to="/authors/$slug"
                  params={{ slug: author.slug }}
                  className="flex h-full flex-col gap-4 rounded-xl border border-white/8 bg-card/60 p-7 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start gap-4">
                    <AuthorAvatar name={author.name} className="size-14 text-base" />
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight">{author.name}</h2>
                      <p className="text-sm text-primary">{author.role}</p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground/60">
                        Writes: {author.category}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{author.shortBio}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read full bio <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
