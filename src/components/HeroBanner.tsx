import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import heroBanner from "@/assets/hero-banner-v7.jpg";

export const HeroBanner = () => {
  return (
    <section className="relative px-2 pb-4 pt-2 sm:px-4 sm:pb-6 sm:pt-4" aria-label="Fairplay cricket ID">
      <h1 className="sr-only">
        Fairplay — cricket ID for IPL, live markets, football, tennis and casino. Sign in, fund with UPI, withdraw after settlement.
      </h1>

      <div className="container mx-auto max-w-[1180px]">
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hero-frame"
        >
          <Link
            to="/fairplay-id"
            className="group relative z-10 block aspect-[1440/928] w-full overflow-hidden rounded-[calc(1.25rem-2px)] bg-ink-deep"
            aria-label="Get your Fairplay cricket ID"
          >
            <img
              src={heroBanner}
              alt="Fairplay cricket ID — live cricket, casino, instant UPI deposit and withdrawal, and WhatsApp access."
              width={1440}
              height={928}
              fetchPriority="high"
              decoding="async"
              className="relative z-10 block h-full w-full object-cover object-center transition-[filter,transform] duration-700 ease-out group-hover:brightness-110"
            />

            <div className="pointer-events-none absolute inset-0 rounded-[calc(1.25rem-2px)] ring-1 ring-inset ring-white/10" />
            <div className="hero-ambient" style={{ backgroundImage: `url(${heroBanner})` }} />
            <div className="pointer-events-none absolute inset-y-0 -left-1/3 z-20 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-foreground/10 to-transparent opacity-0 transition-all duration-1000 group-hover:left-[110%] group-hover:opacity-100" />

            {/* travelling seam lights along the edges */}
            <span className="hero-runner hero-runner-top" />
            <span className="hero-runner hero-runner-bottom" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
