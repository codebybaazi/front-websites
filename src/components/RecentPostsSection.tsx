import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { parse, compareDesc } from "date-fns";
import { blogArticles } from "@/lib/blog-data";
import { BlogPostList } from "@/components/blog/BlogPostList";
import { toBlogPostState } from "@/components/blog/blog-post-context";

export function RecentPostsSection() {
  const posts = useMemo(() => {
    return [...blogArticles]
      .sort((a, b) => {
        const dateA = parse(a.date, "MMM dd, yyyy", new Date());
        const dateB = parse(b.date, "MMM dd, yyyy", new Date());
        return compareDesc(dateA, dateB);
      })
      .slice(0, 6)
      .map(toBlogPostState);
  }, []);

  if (posts.length === 0) return null;

  return (
    <section className="relative overflow-hidden border-t border-white/8 py-16 sm:py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[11px] font-semibold tabular-nums text-flame">06</span>
              <span className="h-[2px] w-8 brand-rule" />
              <span className="kicker">Guides & match notes</span>
            </div>
            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl">
              Latest from the <span className="text-primary">Fairplay desk</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              How IDs, IPL books and deposits actually work — plus match notes when a fixture is live.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 self-start rounded-md border border-white/10 bg-card px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary/40"
          >
            All guides
            <ArrowRight className="h-4 w-4 text-primary" />
          </Link>
        </div>

        <BlogPostList.Recent posts={posts} />
      </div>
    </section>
  );
}
