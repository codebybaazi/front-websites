import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Bookmark, BookOpen } from "lucide-react";
import { BlogPost } from "@/components/blog/BlogPost";
import { useBlogPost } from "@/components/blog/blog-post-context";

export function FeaturedBlogPost() {
  const { meta, state } = useBlogPost();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
    >
      <BlogPost.Frame>
        <BlogPost.Link className="relative block aspect-[16/9] overflow-hidden">
          {state.bannerSrc ? (
            <BlogPost.Media className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]" />
          ) : (
            <BookOpen className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 text-primary/20 transition-transform duration-700 group-hover:scale-110" />
          )}
        </BlogPost.Link>
        <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:gap-10 md:p-10">
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                Featured guide
              </span>
              <BlogPost.DateText className="text-[10px] font-bold uppercase tracking-widest text-white/30" />
            </div>
            <BlogPost.Title as="h2" className="sr-only" />
            <BlogPost.Description className="max-w-3xl font-medium leading-relaxed text-white/60" />
          </div>
          <Link
            to={meta.to}
            params={meta.params}
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-xs font-bold tracking-tight text-black transition-all hover:bg-primary hover:text-white"
          >
            Read the guide <ArrowRight className="size-4" />
          </Link>
        </div>
      </BlogPost.Frame>
    </motion.div>
  );
}

export function BlogPostCard() {
  const { meta, state } = useBlogPost();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min((meta.index % 10) * 0.05, 0.4) }}
    >
      <BlogPost.Frame className="group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] transition-all duration-500 hover:border-primary/30 hover:bg-white/[0.07]">
        <BlogPost.Link className="relative block aspect-[16/9] overflow-hidden bg-primary/5">
          <BlogPost.Media loading="lazy" className="transition-transform duration-700 group-hover:scale-[1.04]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <BlogPost.Category className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white" />
        </BlogPost.Link>

        <div className="flex flex-1 flex-col p-7">
          <div className="mb-4 flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-white/30">
            <BlogPost.Date />
            <BlogPost.ReadTime />
          </div>
          <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-tight tracking-tight transition-colors group-hover:text-primary">
            <BlogPost.Link>{state.title}</BlogPost.Link>
          </h3>
          <BlogPost.Description className="mb-6 line-clamp-3 text-sm font-medium leading-relaxed text-white/40" />

          <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-5">
            <BlogPost.Link className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/70 transition-colors group-hover:text-primary">
              Read the guide <ArrowRight className="size-3" />
            </BlogPost.Link>
            <button
              type="button"
              className="rounded-full bg-white/5 p-2 text-white/30 transition-all hover:bg-primary/20 hover:text-primary"
              aria-label="Save for later"
            >
              <Bookmark className="size-3.5" />
            </button>
          </div>
        </div>
      </BlogPost.Frame>
    </motion.div>
  );
}

export function CompactBlogPost({ rank }: { rank: number }) {
  return (
    <BlogPost.Link className="group block">
      <div className="flex items-center gap-4">
        <BlogPost.Banner className="h-14 w-20 shrink-0 rounded-xl border border-white/10 object-cover" />
        <div>
          <span className="mb-1 block text-[10px] font-bold text-primary">0{rank}</span>
          <BlogPost.Title
            as="h4"
            className="line-clamp-2 text-xs font-bold leading-tight tracking-tight transition-colors group-hover:text-primary"
          />
        </div>
      </div>
    </BlogPost.Link>
  );
}

export function SidebarBlogPost() {
  return (
    <BlogPost.Link className="group flex gap-3 rounded-xl p-1 transition-colors hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
      <BlogPost.Banner className="h-14 w-[4.5rem] shrink-0 rounded-lg object-cover" />
      <span className="min-w-0">
        <BlogPost.Title
          as="h3"
          className="line-clamp-2 text-[13px] font-semibold leading-snug tracking-tight text-white/90 group-hover:text-primary"
        />
        <BlogPost.DateText className="mt-1 block text-xs text-muted-foreground" />
      </span>
    </BlogPost.Link>
  );
}

export function RelatedBlogPost() {
  return (
    <BlogPost.Link className="group relative overflow-hidden rounded-xl border border-white/5 bg-card/40 p-8 transition-all hover:-translate-y-1 hover:border-primary/30">
      <div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
          <BlogPost.Date className="[&>svg]:size-3 [&>svg]:text-primary" />
        </div>
        <BlogPost.Title className="mb-4 line-clamp-3 text-lg font-black italic uppercase leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary" />
        <BlogPost.Description className="line-clamp-3 text-sm leading-relaxed text-muted-foreground/70" />
        <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-primary transition-all group-hover:gap-3">
          Read Guide <ArrowRight className="size-3" />
        </div>
      </div>
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </BlogPost.Link>
  );
}

export function RecentBlogPost() {
  const { meta } = useBlogPost();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.04 * meta.index }}
    >
      <BlogPost.Link className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/8 bg-card transition-colors hover:border-primary/40">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink-deep">
          <BlogPost.Banner className="transition-transform duration-500 group-hover:scale-[1.04]" />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground">
            <BlogPost.Date className="[&>svg]:size-3.5 [&>svg]:text-primary" />
          </p>
          <BlogPost.Title className="mt-2 line-clamp-2 text-[17px] font-semibold leading-snug tracking-tight group-hover:text-primary" />
          <BlogPost.Description className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground" />
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Read more
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </BlogPost.Link>
    </motion.div>
  );
}
