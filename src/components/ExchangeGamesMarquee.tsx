import { whatsappUrl } from "@/data/site";
import { Sparkles, Radio } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import teenPattiImg from "@/assets/exchange/teen-patti.jpg";
import teenPatti2020Img from "@/assets/exchange/teen-patti-2020.jpg";
import andarBaharImg from "@/assets/exchange/andar-bahar.jpg";
import dragonTigerImg from "@/assets/exchange/dragon-tiger.jpg";
import lucky7Img from "@/assets/exchange/lucky-7.jpg";
import cards32Img from "@/assets/exchange/32-cards.jpg";
import casinoWarImg from "@/assets/exchange/casino-war.jpg";
import pokerImg from "@/assets/exchange/poker.jpg";
import baccaratImg from "@/assets/exchange/baccarat.jpg";
import aaaImg from "@/assets/exchange/aaa.jpg";
import bollywoodCasinoImg from "@/assets/exchange/bollywood-casino.jpg";
import muflisImg from "@/assets/exchange/muflis.jpg";
import race2020Img from "@/assets/exchange/race-2020.jpg";
import sicboImg from "@/assets/exchange/sicbo.jpg";
import worliMatkaImg from "@/assets/exchange/worli-matka.jpg";
import rouletteImg from "@/assets/exchange/roulette.jpg";

type ExGame = {
  name: string;
  tag: string;
  image: string;
  back: string;
  lay: string;
  hot?: boolean;
};

const EXCHANGE: ExGame[] = [
  { name: "Teen Patti", tag: "1 Day", image: teenPattiImg, back: "1.98", lay: "2.02", hot: true },
  { name: "20-20 Teen Patti", tag: "Fast", image: teenPatti2020Img, back: "1.92", lay: "1.96" },
  { name: "Andar Bahar", tag: "Live", image: andarBaharImg, back: "2.04", lay: "2.08", hot: true },
  { name: "Dragon Tiger", tag: "1 Min", image: dragonTigerImg, back: "1.95", lay: "1.99" },
  { name: "Lucky 7", tag: "A / B", image: lucky7Img, back: "2.10", lay: "2.14" },
  { name: "32 Cards", tag: "Casino", image: cards32Img, back: "3.50", lay: "3.60" },
  { name: "Casino War", tag: "Live", image: casinoWarImg, back: "1.90", lay: "1.94" },
  { name: "Poker", tag: "6 Player", image: pokerImg, back: "2.25", lay: "2.30" },
  { name: "Baccarat", tag: "VIP", image: baccaratImg, back: "1.97", lay: "2.01", hot: true },
  { name: "AAA", tag: "Amar Akbar Anthony", image: aaaImg, back: "2.85", lay: "2.95" },
  { name: "Bollywood Casino", tag: "Live", image: bollywoodCasinoImg, back: "2.10", lay: "2.15" },
  { name: "Muflis Teen Patti", tag: "Twist", image: muflisImg, back: "2.00", lay: "2.05" },
  { name: "Race 20-20", tag: "Live", image: race2020Img, back: "3.20", lay: "3.30" },
  { name: "Sicbo", tag: "Dice", image: sicboImg, back: "5.80", lay: "6.00" },
  { name: "Worli Matka", tag: "Classic", image: worliMatkaImg, back: "9.00", lay: "9.50", hot: true },
  { name: "Roulette", tag: "European", image: rouletteImg, back: "2.94", lay: "3.00" },
];

function ExchangeTile({ g }: { g: ExGame }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Trade ${g.name} on Lotus365 exchange`}
      className="group relative w-48 sm:w-52 md:w-56 flex-shrink-0"
    >
      {/* gold aura on hover */}
      <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,oklch(0.82_0.15_88/0.4),transparent_70%)] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

      <div
        className="relative rounded-2xl overflow-hidden bg-emerald-950 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[-0.5deg]"
        style={{
          boxShadow:
            "0 18px 40px -14px rgb(0 0 0 / 0.7), inset 0 0 0 1px oklch(0.82 0.15 88 / 0.35)",
        }}
      >
        {/* image */}
        <div className="relative h-40 sm:h-44 overflow-hidden">
          <img
            src={g.image}
            alt={g.name}
            loading="lazy"
            width={512}
            height={512}
            className="h-full w-full object-cover saturate-[1.1] transition-transform duration-700 group-hover:scale-110"
          />
          {/* corner ornaments */}
          <div className="absolute top-2 left-2 h-3 w-3 border-t-2 border-l-2 border-primary/80 rounded-tl-md" />
          <div className="absolute top-2 right-2 h-3 w-3 border-t-2 border-r-2 border-primary/80 rounded-tr-md" />
          {/* bottom fade into card body */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-transparent" />

          {/* tag chip */}
          <span
            className="absolute top-2.5 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full whitespace-nowrap"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.9 0.13 90), oklch(0.76 0.16 82))",
              color: "rgb(13 66 55)",
              boxShadow: "0 4px 12px -3px oklch(0.82 0.15 88 / 0.7)",
            }}
          >
            {g.tag}
          </span>

          {/* LIVE badge */}
          {g.hot && (
            <span className="absolute bottom-2 left-2 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-600 text-white shadow-lg shadow-red-900/50">
              <Radio className="h-2.5 w-2.5 animate-pulse" />
              Live
            </span>
          )}
        </div>

        {/* info body */}
        <div className="relative px-3 pb-3 pt-1">
          <h3 className="font-display text-white font-bold text-sm sm:text-base leading-tight text-center truncate">
            {g.name}
          </h3>

          {/* back / lay odds — exchange signature */}
          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
            <div
              className="rounded-md py-1.5 text-center transition-transform duration-300 group-hover:scale-[1.04]"
              style={{
                background:
                  "linear-gradient(180deg, rgb(129 199 255) 0%, rgb(85 170 245) 100%)",
                boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.4), 0 2px 6px -2px rgb(0 0 0 / 0.4)",
              }}
            >
              <div className="text-[8px] font-black uppercase tracking-[0.15em] text-sky-950/80 leading-none">Back</div>
              <div className="text-[13px] font-black text-sky-950 leading-tight mt-0.5">{g.back}</div>
            </div>
            <div
              className="rounded-md py-1.5 text-center transition-transform duration-300 group-hover:scale-[1.04]"
              style={{
                background:
                  "linear-gradient(180deg, rgb(255 178 200) 0%, rgb(250 140 175) 100%)",
                boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.4), 0 2px 6px -2px rgb(0 0 0 / 0.4)",
              }}
            >
              <div className="text-[8px] font-black uppercase tracking-[0.15em] text-rose-950/80 leading-none">Lay</div>
              <div className="text-[13px] font-black text-rose-950 leading-tight mt-0.5">{g.lay}</div>
            </div>
          </div>
        </div>

        {/* gold shine sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[140%] skew-x-[-20deg] group-hover:animate-[gold-shine_1.1s_ease-out]" />
        </div>

        {/* gold frame on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/70 transition-all duration-500" />
      </div>
    </a>
  );
}

function Row({ reverse = false }: { reverse?: boolean }) {
  const loop = [...EXCHANGE, ...EXCHANGE];
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className={`flex gap-5 sm:gap-6 py-6 w-max hover:[animation-play-state:paused] ${
          reverse ? "animate-game-marquee-rev" : "animate-game-marquee"
        }`}
      >
        {loop.map((g, i) => (
          <ExchangeTile key={`${g.name}-${i}`} g={g} />
        ))}
      </div>
    </div>
  );
}

export function ExchangeGamesMarquee() {
  return (
    <section
      aria-label="Exchange games"
      className="relative py-16 overflow-hidden"
    >
      {/* emerald backdrop with gold vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 500px at 50% 100%, oklch(0.82 0.15 88 / 0.14), transparent 60%), linear-gradient(180deg, rgb(13 66 55) 0%, rgb(17 84 70) 50%, rgb(13 66 55) 100%)",
        }}
      />
      {/* diagonal gold weave pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.82 0.15 88) 0 1px, transparent 1px 22px)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Header — centered elite */}
      <header className="relative mx-auto max-w-5xl px-6 text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.32em] text-primary font-bold">
            <Sparkles className="h-3 w-3" /> Exchange Trading
          </div>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          Back &amp; Lay Across <span className="gold-text">Live Exchange Tables</span>
        </h2>
        <p className="mt-3 text-primary/70 text-[11px] uppercase tracking-[0.35em] font-medium">
          Real Time · Best Odds · 1000+ Markets
        </p>
      </header>

      {/* Two rows */}
      <div className="relative space-y-2">
        <Row />
        <Row reverse />
      </div>

      {/* CTA */}
      <div className="relative mt-10 flex flex-col items-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-whatsapp-green cursor-pointer inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-[0.2em]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Get your Exchange ID on WhatsApp
        </a>
        <div className="flex items-center gap-3 opacity-50">
          <div className="w-8 h-px bg-primary" />
          <span className="text-primary text-[9px] tracking-[0.5em] uppercase">Instant Activation</span>
          <div className="w-8 h-px bg-primary" />
        </div>
      </div>
    </section>
  );
}
