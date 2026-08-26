import { useEffect, useState } from "react";
import { ArrowUpRight, Send, ChevronLeft, ChevronRight } from "lucide-react";
import { TELEGRAM } from "@/components/SiteHeader";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";
import slide1 from "@/assets/hero-slide-1.jpg?w=640;960;1280;1600&format=webp&quality=70&as=srcset";
import slide2 from "@/assets/hero-slide-2.jpg?w=640;960;1280;1600&format=webp&quality=70&as=srcset";
import slide3 from "@/assets/hero-slide-3.jpg?w=640;960;1280;1600&format=webp&quality=70&as=srcset";
import slide1Fallback from "@/assets/hero-slide-1.jpg?w=960&format=webp&quality=70";
import slide2Fallback from "@/assets/hero-slide-2.jpg?w=960&format=webp&quality=70";
import slide3Fallback from "@/assets/hero-slide-3.jpg?w=960&format=webp&quality=70";

type Align = "left" | "right" | "center";

type Slide = {
  image: string;
  srcset: string;
  align: Align;
  kicker: string;
  title: string;
  highlight: string;
  titleTail?: string;
  text: string;
  alt: string;
};

const slides: Slide[] = [
  {
    image: slide1Fallback,
    srcset: slide1,
    align: "right",
    kicker: "Sprinters Online Gaming",
    title: "King of the",
    highlight: "Online World",
    text: "Your ultimate destination for secure online betting — best odds, exclusive markets, one verified Sprinters ID.",
    alt: "Sprinters Online Gaming — India's trusted online betting ID for cricket, casino and sports",
  },
  {
    image: slide2Fallback,
    srcset: slide2,
    align: "left",
    kicker: "Live Casino · Aviator · Teen Patti",
    title: "Play bold.",
    highlight: "Win bigger.",
    text: "100+ live tables, real dealers, instant payouts. The house that always pays you back — faster.",
    alt: "Live casino games on Sprinters — Aviator, Teen Patti, Andar Bahar and roulette with real dealers",
  },
  {
    image: slide3Fallback,
    srcset: slide3,
    align: "center",
    kicker: "IPL · EPL · UCL · ATP · Kabaddi",
    title: "One ID.",
    highlight: "Every game.",
    text: "30+ sports and India's top exchanges under a single verified account. Bet sharper, cash out in minutes.",
    alt: "Sprinters multi-sport betting — IPL cricket, EPL football, ATP tennis and Pro Kabaddi on one ID",
  },
];

const alignClass: Record<Align, string> = {
  left: "items-center text-center mx-auto md:items-start md:text-left md:mx-0",
  right: "items-center text-center mx-auto md:items-end md:text-right md:ml-auto md:mr-0",
  center: "items-center text-center mx-auto",
};

export function HeroSlider() {
  const [i, setI] = useState(0);
  const n = slides.length;
  const whatsapp = useWhatsAppHref();

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % n), 6500);
    return () => clearInterval(id);
  }, [n]);

  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 md:px-6 md:pt-12">
      <div className="relative">
        {/* Ambient glow behind frame */}
        <div
          className="pointer-events-none absolute -inset-6 -z-10 opacity-40 blur-3xl"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />

        {/* Asymmetric notched frame — diagonally opposite rounded corners */}
        <div
          className="relative overflow-hidden p-[2px]"
          style={{
            background: "var(--gradient-frame)",
            borderRadius: "2.75rem 0.75rem 2.75rem 0.75rem",
          }}
        >
          <div
            className="relative overflow-hidden bg-black"
            style={{
              borderRadius:
                "calc(2.75rem - 2px) calc(0.75rem - 2px) calc(2.75rem - 2px) calc(0.75rem - 2px)",
            }}
          >
            {/* Corner accent brackets */}
            <div
              className="pointer-events-none absolute left-4 top-4 z-20 h-8 w-8 border-l-2 border-t-2 border-primary/70"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-4 right-4 z-20 h-8 w-8 border-b-2 border-r-2 border-primary/70"
              aria-hidden
            />

            <div className="relative aspect-[16/9] min-h-[420px] w-full sm:min-h-[480px] md:aspect-[21/9] md:min-h-[560px]">
              {slides.map((s, idx) => {
                const active = idx === i;
                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      active ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                    aria-hidden={!active}
                  >
                    <img
                      src={s.image}
                      srcSet={s.srcset}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
                      alt={s.alt}
                      width={1920}
                      height={960}
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding={idx === 0 ? "sync" : "async"}
                      {...(idx === 0 ? { fetchPriority: "high" as const } : {})}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div
                      className="absolute inset-0 md:hidden"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 hidden md:block"
                      style={{
                        background:
                          s.align === "left"
                            ? "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.1) 75%)"
                            : s.align === "right"
                              ? "linear-gradient(270deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.1) 75%)"
                              : "radial-gradient(60% 70% at 50% 55%, rgba(0,0,0,0.75), rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.7))",
                      }}
                    />

                    <div className="relative flex h-full w-full items-center px-4 pb-16 pt-8 sm:px-10 sm:py-10 md:px-16">
                      <div
                        className={`flex w-full max-w-xl flex-col ${alignClass[s.align]}`}
                      >
                        {active && (
                          <>
                            <span
                              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-primary backdrop-blur animate-fade-in"
                              style={{ animationDelay: "0ms" }}
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {s.kicker}
                            </span>
                            <h2
                              className="mt-4 text-3xl font-black leading-[1.02] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in"
                              style={{ animationDelay: "150ms" }}
                            >
                              {s.title}
                              <br />
                              <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: "var(--gradient-text)" }}
                              >
                                {s.highlight}
                              </span>
                              {s.titleTail ? ` ${s.titleTail}` : ""}
                            </h2>

                            <p
                              className="mt-4 max-w-md text-sm text-white/85 sm:mt-5 sm:text-base animate-fade-in"
                              style={{ animationDelay: "280ms" }}
                            >
                              {s.text}
                            </p>
                            <div
                              className={`mt-6 flex flex-wrap justify-center gap-3 animate-fade-in sm:mt-7 ${
                                s.align === "right"
                                  ? "md:justify-end"
                                  : s.align === "center"
                                    ? "md:justify-center"
                                    : "md:justify-start"
                              }`}
                              style={{ animationDelay: "400ms" }}
                            >
                              <a
                                href={whatsapp}
                                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 sm:text-base"
                                style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow-secondary)" }}
                              >
                                Get Your Sprinters ID
                                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </a>
                              <a
                                href={TELEGRAM}
                                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-primary hover:text-primary sm:text-base"
                              >
                                <Send className="h-4 w-4" /> Telegram
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Top progress bar */}
              <div className="absolute inset-x-0 top-0 z-10 h-[3px] bg-white/10">
                <div
                  key={i}
                  className="h-full origin-left animate-[heroProgress_6500ms_linear]"
                  style={{ background: "var(--gradient-hero)" }}
                />
              </div>

              {/* Arrows */}
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur transition hover:border-primary hover:text-primary sm:inline-flex md:left-5 md:h-12 md:w-12"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur transition hover:border-primary hover:text-primary sm:inline-flex md:right-5 md:h-12 md:w-12"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Numbered slide rail */}
              <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/15 bg-black/50 px-4 py-2 backdrop-blur">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setI(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className="group flex items-center gap-2"
                  >
                    <span
                      className={`font-mono text-[10px] transition ${
                        idx === i ? "text-primary" : "text-white/50 group-hover:text-white"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`h-[2px] rounded-full transition-all ${
                        idx === i
                          ? "w-10 bg-primary"
                          : "w-4 bg-white/40 group-hover:bg-white/70"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
