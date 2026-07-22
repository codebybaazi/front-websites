import { whatsappUrl } from "@/data/site";
import cricketImg from "@/assets/games/cricket.jpg";
import cricketFightImg from "@/assets/games/cricket-fight.jpg";
import footballImg from "@/assets/games/football.jpg";
import tennisImg from "@/assets/games/tennis.jpg";
import matkaImg from "@/assets/games/matka.jpg";
import teenPattiImg from "@/assets/games/teen-patti.jpg";
import andarBaharImg from "@/assets/games/andar-bahar.jpg";
import casinoImg from "@/assets/games/casino.jpg";
import slotsImg from "@/assets/games/slots.jpg";
import rouletteImg from "@/assets/games/roulette.jpg";
import fifaCupImg from "@/assets/games/fifa-cup.jpg";
import kabaddiImg from "@/assets/games/kabaddi.jpg";
import electionImg from "@/assets/games/election.jpg";
import virtualSportsImg from "@/assets/games/virtual-sports.jpg";
import esportsImg from "@/assets/games/esports.jpg";
import horseRacingImg from "@/assets/games/horse-racing.jpg";

type Game = {
  name: string;
  tag: string;
  image: string;
  hot?: boolean;
};

const GAMES: Game[] = [
  { name: "Cricket", tag: "Live", image: cricketImg, hot: true },
  { name: "Cricket Fight", tag: "1v1", image: cricketFightImg, hot: true },
  { name: "Football", tag: "Live", image: footballImg },
  { name: "Tennis", tag: "ATP · WTA", image: tennisImg },
  { name: "Matka", tag: "Classic", image: matkaImg, hot: true },
  { name: "Teen Patti", tag: "Card", image: teenPattiImg },
  { name: "Andar Bahar", tag: "Live", image: andarBaharImg },
  { name: "Casino", tag: "Live Dealers", image: casinoImg, hot: true },
  { name: "Slot Games", tag: "1200+", image: slotsImg },
  { name: "Roulette", tag: "European", image: rouletteImg },
  { name: "FIFA Cup", tag: "Winner", image: fifaCupImg },
  { name: "Kabaddi", tag: "Pro League", image: kabaddiImg },
  { name: "Election", tag: "Markets", image: electionImg },
  { name: "Virtual Sports", tag: "24/7", image: virtualSportsImg },
  { name: "Esports", tag: "Tournaments", image: esportsImg },
  { name: "Horse Racing", tag: "Live", image: horseRacingImg },
];

function ArchTile({ g, inverted = false }: { g: Game; inverted?: boolean }) {
  const shape = inverted
    ? "rounded-b-[110px] rounded-t-3xl"
    : "rounded-t-[110px] rounded-b-3xl";
  const gradient = inverted
    ? "bg-gradient-to-b from-emerald-950 via-transparent to-transparent"
    : "bg-gradient-to-t from-emerald-950 via-transparent to-transparent";
  const captionPos = inverted ? "top-6" : "bottom-6";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Play ${g.name} on Lotus365`}
      className={`group relative w-44 h-64 sm:w-52 sm:h-72 md:w-56 md:h-80 flex-shrink-0 bg-[#115446] ${shape} border border-primary/30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/80 hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]`}
    >
      {/* image */}
      <img
        src={g.image}
        alt={g.name}
        loading="lazy"
        width={400}
        height={600}
        className="absolute inset-0 h-full w-full object-cover saturate-[1.05] brightness-95 transition-all duration-700 group-hover:scale-[1.08] group-hover:brightness-110 group-hover:saturate-125"
      />
      {/* gradient wash */}
      <div className={`absolute inset-0 ${gradient} opacity-90 group-hover:opacity-70 transition-opacity`} />

      {/* HOT badge */}
      {g.hot && (
        <div className={`absolute ${inverted ? "bottom-6" : "top-8"} right-5 z-10`}>
          <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg border border-white/20 uppercase tracking-tight animate-pulse">
            HOT
          </span>
        </div>
      )}

      {/* caption */}
      <div className={`absolute ${captionPos} inset-x-0 px-3 text-center transition-transform duration-500 group-hover:scale-105`}>
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 backdrop-blur-md border border-primary/25 mb-2">
          <span className="text-primary text-[9px] font-bold uppercase tracking-widest whitespace-nowrap">
            {g.tag}
          </span>
        </div>
        <h3 className="font-display text-white font-bold text-lg sm:text-xl md:text-2xl leading-tight">
          {g.name}
        </h3>
      </div>

      {/* gold shine sweep */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[140%] skew-x-[-20deg] group-hover:animate-[gold-shine_1.1s_ease-out]" />
      </div>
    </a>
  );
}

function Row({ reverse = false, inverted = false }: { reverse?: boolean; inverted?: boolean }) {
  const loop = [...GAMES, ...GAMES];
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
        className={`flex gap-6 md:gap-8 py-4 w-max hover:[animation-play-state:paused] ${
          reverse ? "animate-game-marquee-rev" : "animate-game-marquee"
        }`}
      >
        {loop.map((g, i) => (
          <ArchTile key={`${g.name}-${i}`} g={g} inverted={inverted} />
        ))}
      </div>
    </div>
  );
}

export function GameCategoriesMarquee() {
  return (
    <section
      aria-label="Popular game categories"
      className="relative py-20 overflow-hidden"
    >
      {/* emerald backdrop with gold vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 400px at 50% 0%, oklch(0.82 0.15 88 / 0.12), transparent 60%), linear-gradient(180deg, rgb(17 84 70) 0%, rgb(13 66 55) 100%)",
        }}
      />
      {/* gold hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Section header — centered, elite */}
      <header className="relative mx-auto max-w-5xl px-6 text-center mb-14">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-primary leading-none">
          Elite Gaming
        </h2>
        <p className="mt-4 text-primary/70 text-[11px] uppercase tracking-[0.4em] font-medium">
          The Grand Casino Collection
        </p>
      </header>

      {/* Two arched rows */}
      <div className="relative space-y-8">
        <Row />
        <Row reverse inverted />
      </div>

      {/* CTA */}
      <div className="relative mt-14 flex flex-col items-center gap-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold uppercase tracking-[0.28em] text-xs sm:text-sm bg-[#25D366] text-white border-2 border-[#128C7E] transition-all duration-500 hover:bg-[#128C7E] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)]"
        >
          <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current transition-transform duration-500 group-hover:rotate-12" aria-hidden="true">
            <path d="M19.11 17.28c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38 0 1.4 1.02 2.76 1.17 2.95.14.19 2.02 3.08 4.89 4.32.68.29 1.21.47 1.63.6.68.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.43 5.34L5 27l5.79-1.52a10.66 10.66 0 0 0 5.23 1.36h.01c5.9 0 10.7-4.8 10.7-10.7s-4.81-10.71-10.71-10.81zM22.29 22.3a8.86 8.86 0 0 1-6.27 2.6h-.01a8.87 8.87 0 0 1-4.52-1.24l-.32-.19-3.34.88.89-3.26-.21-.33a8.87 8.87 0 1 1 13.78 1.54z"/>
          </svg>
          Join WhatsApp Royale
          <div className="absolute -inset-1 rounded-full border border-[#25D366] opacity-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 pointer-events-none" />

        </a>
        <div className="flex items-center gap-3 opacity-50">
          <div className="w-8 h-px bg-primary" />
          <span className="text-primary text-[9px] tracking-[0.5em] uppercase">Exclusive Access</span>
          <div className="w-8 h-px bg-primary" />
        </div>
      </div>
    </section>
  );
}
