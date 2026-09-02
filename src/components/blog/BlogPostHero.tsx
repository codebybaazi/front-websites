import { motion } from "framer-motion";
import { Calendar, ShieldCheck, Zap } from "lucide-react";
import type { ReactNode } from "react";
import { waLink } from "@/lib/whatsapp";
import { BlogPost } from "@/components/blog/BlogPost";
import { useBlogPost } from "@/components/blog/blog-post-context";

const LIVE_CASINO_SLUG = "fairplay-live-casino-features-and-services";

function HeroShell({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={className}>{children}</section>;
}

export function BannerBlogPostHero() {
  const { state } = useBlogPost();

  return (
    <HeroShell className="relative w-full overflow-hidden bg-[#0B1120] pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(47,185,74,0.12)_0%,transparent_65%)]" />
      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em]">
          <BlogPost.Category className="rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-primary" />
          <span className="text-white/30">Published {state.date}</span>
        </div>
        <BlogPost.Title
          as="h1"
          className="mb-5 text-3xl font-bold leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl"
        />
        <BlogPost.Description className="mb-10 max-w-3xl text-base font-medium leading-relaxed text-white/50 md:text-lg" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-xl border border-white/10 shadow-[0_0_100px_rgba(47,185,74,0.15)]"
        >
          <BlogPost.Media className="block h-auto w-full" />
        </motion.div>
      </div>
    </HeroShell>
  );
}

export function GuideBlogPostHero() {
  const { state } = useBlogPost();

  return (
    <HeroShell className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden md:h-[65vh]">
      <div className="absolute inset-0 bg-[#0B1120]">
        <div className="absolute top-0 right-0 h-full w-full bg-[radial-gradient(circle_at_70%_30%,rgba(47,185,74,0.15)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_80%,rgba(47,185,74,0.1)_0%,transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-1/4 -left-20 h-[2px] w-[600px] rotate-[35deg] animate-pulse bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-xl" />
        <div
          className="absolute bottom-1/3 -right-20 h-[2px] w-[800px] -rotate-[25deg] animate-pulse bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-2xl"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center gap-10 px-4 py-12 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
            <div className="size-2 animate-pulse rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-tight text-primary">Fairplay guide</span>
          </div>
          <BlogPost.Title
            as="h1"
            className="mb-6 text-4xl font-bold leading-[0.9] tracking-tight text-white drop-shadow-2xl md:text-6xl lg:text-7xl"
          />
          <BlogPost.Description className="mb-8 max-w-xl text-base font-medium leading-relaxed text-white/50 md:text-lg" />
          <div className="flex flex-wrap items-center justify-center gap-5 border-t border-white/5 pt-6 text-[10px] font-bold uppercase tracking-widest text-white/40 md:justify-start">
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-primary" />
              <span>Updated: {state.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              <span>Verified Content</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-primary" />
              <span>Fairplay</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden flex-1 lg:block"
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
            <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-[0_0_100px_rgba(47,185,74,0.1)] backdrop-blur-3xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596838132731-dd9fd7305951?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex items-start justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/20">
                    <Zap className="size-5 text-primary" />
                  </div>
                  <div className="rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-[9px] font-bold text-primary">
                    FAIRPLAY
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="h-3 w-1/3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 animate-[shimmer_2s_infinite] bg-primary" />
                  </div>
                  <div className="flex h-20 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-tight text-white/20">Live markets</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-9 flex-1 rounded-xl border border-primary/30 bg-primary/20" />
                    <div className="h-9 flex-1 rounded-xl border border-white/10 bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </HeroShell>
  );
}

export function CasinoBlogPostHero() {
  return (
    <HeroShell className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden md:h-[65vh]">
      <div className="absolute inset-0 bg-[#0B1120]">
        <div className="absolute top-0 right-0 h-full w-full bg-[radial-gradient(circle_at_70%_30%,rgba(47,185,74,0.15)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_80%,rgba(47,185,74,0.1)_0%,transparent_60%)]" />
      </div>
      <div className="container relative z-10 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative aspect-[16/9] w-full max-w-6xl overflow-hidden rounded-xl border border-white/10 shadow-[0_0_100px_rgba(47,185,74,0.2)] md:aspect-[21/9]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1596838132731-dd9fd7305951?auto=format&fit=crop&q=80&w=2000')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 flex max-w-2xl flex-col justify-center p-8 md:p-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black">
                LIVE CASINO
              </div>
              <div className="size-1 rounded-full bg-white/30" />
              <div className="text-[10px] font-bold uppercase tracking-tight text-white/60">Fairplay casino</div>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-[0.85] tracking-tight text-white md:text-6xl lg:text-7xl">
              Fairplay <br />
              <span className="text-primary not-italic">Live Casino</span> <br />
              <span className="text-white/80">Casino guide</span>
            </h1>
            <p className="mb-8 hidden max-w-md text-sm font-medium leading-relaxed text-white/50 sm:block md:text-lg">
              Teen Patti, Andar Bahar and live tables on the same Fairplay ID you use for cricket. Confirm the slip
              before you send.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-black transition-colors hover:bg-primary"
              >
                Get Started
              </a>
              <div className="cursor-pointer rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-black uppercase tracking-widest text-white backdrop-blur-md transition-colors hover:bg-white/20">
                Watch Live
              </div>
            </div>
          </div>
          <div className="absolute right-8 top-8 hidden flex-col items-end gap-2 md:flex">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
              <Zap className="size-4 text-primary" />
              <div className="text-[9px] font-black uppercase tracking-widest text-white">Low Latency HD</div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
              <ShieldCheck className="size-4 text-primary" />
              <div className="text-[9px] font-black uppercase tracking-widest text-white">Certified Dealers</div>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 hidden md:block">
            <div className="text-right">
              <div className="mb-1 text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">Fairplay</div>
              <div className="text-xs font-black uppercase text-white/60">Fairplay Gaming Group</div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </HeroShell>
  );
}

export const BlogPostHero = {
  Banner: BannerBlogPostHero,
  Guide: GuideBlogPostHero,
  Casino: CasinoBlogPostHero,
};

export function BlogPostDetailHero() {
  const { state } = useBlogPost();

  if (state.bannerSrc) {
    return <BannerBlogPostHero />;
  }

  if (state.slug === LIVE_CASINO_SLUG) {
    return <CasinoBlogPostHero />;
  }

  return <GuideBlogPostHero />;
}
