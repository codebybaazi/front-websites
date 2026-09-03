import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Spade, Dice5, Crown } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

import teenPattiImg from "@/assets/betting/teen-patti.jpg";
import andarBaharImg from "@/assets/play/andar-bahar.jpg";
import dragonTigerImg from "@/assets/play/dragon-tiger.jpg";
import baccaratImg from "@/assets/play/baccarat.jpg";
import lucky7Img from "@/assets/play/lucky-7.jpg";
import cards32Img from "@/assets/play/32-cards.jpg";
import liveCasinoImg from "@/assets/betting/live-casino.jpg";
import rouletteImg from "@/assets/play/roulette.jpg";
import blackjackImg from "@/assets/play/blackjack.jpg";
import wheelShowImg from "@/assets/play/wheel-show.jpg";
import sicBoImg from "@/assets/play/sic-bo.jpg";
import slotsImg from "@/assets/play/slots.jpg";

type Tile = {
  name: string;
  tag: string;
  note: string;
  image: string;
  to: string;
  search?: Record<string, string>;
};

const partners = [
  { name: "World777", logo: "https://khaiwali.in/assets/exchange-1-C1L5-VKh.png", url: "world777.now" },
  { name: "MiBook9", logo: "https://khaiwali.in/assets/exchange-2-YWaV63VG.png", url: "mibook9.com" },
  { name: "LotusBook", logo: "https://khaiwali.in/assets/exchange-3-BL7xnTAS.png", url: "lotusbook.cricket" },
  { name: "RockyBook", logo: "https://khaiwali.in/assets/exchange-4-DKMdAOch.png", url: "rockybook.com" },
  { name: "TigerExch", logo: "https://khaiwali.in/assets/tigerexch-B-BwGAg9.png", url: "tigerexch.com" },
  { name: "DiamondExch", logo: "https://khaiwali.in/assets/diamondexch-mWek921j.png", url: "diamondexch.com" },
  { name: "SkyExch", logo: "https://khaiwali.in/assets/skyexch-DnP70ctn.png", url: "skyexch.art" },
  { name: "LaserBhai", logo: "https://khaiwali.in/assets/laserbhai-C4iWU4_a.gif", url: "laserbhai.com" },
];

const liveCards: Tile[] = [
  { name: "Teen Patti", tag: "Dealt live", note: "Two-hand classic, side bets open", image: teenPattiImg, to: "/casino", search: { type: "indian" } },
  { name: "Andar Bahar", tag: "Fast round", note: "Cut card, pick a side, settle", image: andarBaharImg, to: "/casino", search: { type: "indian" } },
  { name: "Dragon Tiger", tag: "One card", note: "Quickest table on the ID", image: dragonTigerImg, to: "/casino", search: { type: "indian" } },
  { name: "Baccarat", tag: "Studio", note: "Player, banker or tie", image: baccaratImg, to: "/casino", search: { type: "live" } },
  { name: "Lucky 7", tag: "High / low", note: "Single-card call, instant result", image: lucky7Img, to: "/casino", search: { type: "indian" } },
  { name: "32 Cards", tag: "Desi table", note: "Four players, running score", image: cards32Img, to: "/casino", search: { type: "indian" } },
];

const liveCasino: Tile[] = [
  { name: "Live dealer floor", tag: "HD stream", note: "Real tables, real croupiers", image: liveCasinoImg, to: "/casino", search: { type: "live" } },
  { name: "Roulette", tag: "European", note: "Inside, outside and neighbours", image: rouletteImg, to: "/casino", search: { type: "live" } },
  { name: "Blackjack", tag: "Seat open", note: "Split, double, insurance", image: blackjackImg, to: "/casino", search: { type: "live" } },
  { name: "Wheel shows", tag: "Game show", note: "Multiplier spins with a host", image: wheelShowImg, to: "/casino", search: { type: "live" } },
  { name: "Sic Bo", tag: "Dice", note: "Three dice, spread your stake", image: sicBoImg, to: "/casino", search: { type: "live" } },
  { name: "Slots", tag: "Reels", note: "Jackpot and buy-bonus reels", image: slotsImg, to: "/casino", search: { type: "slots" } },
];

function TableTile({ tile, i }: { tile: Tile; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: i * 0.04 }}
    >
      <Link
        to={tile.to}
        search={tile.search ?? {}}
        aria-label={`${tile.name} — ${tile.note}`}
        className="group relative block h-52 overflow-hidden rounded-xl border border-white/8 bg-card transition-colors hover:border-primary/45 sm:h-60"
      >
        <img
          src={tile.image}
          alt={`${tile.name} table on Fairplay`}
          loading="lazy"
          width={768}
          height={768}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/50 to-transparent" />
        <div className="absolute inset-0 rounded-xl ring-0 ring-primary/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/50" />

        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-deep/70 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-primary backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          {tile.tag}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="flex items-center gap-1.5 text-[16px] font-semibold tracking-tight group-hover:text-primary">
            {tile.name}
            <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
          </h3>
          <p className="mt-1 text-[11.5px] leading-snug text-white/55 group-hover:text-white/80">{tile.note}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export function LiveTablesSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/8 px-4 py-16 sm:px-6 sm:py-24" id="live-tables">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-flame/10 blur-[110px]" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[11px] font-semibold tabular-nums text-flame">02</span>
            <span className="h-[2px] w-8 brand-rule" />
            <span className="kicker">Dealt on stream</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight leading-[1.08] sm:text-4xl md:text-5xl">
            Live cards and the <span className="text-primary">live casino floor</span>
          </h2>
          <p className="mt-5 max-w-xl border-l-2 border-primary/50 pl-5 text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
            Indian card tables and studio casino games run around the clock on the same Fairplay ID — one wallet, one login, dealers on camera.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-ink-deep/60 text-primary">
              <Spade className="h-4 w-4" />
            </span>
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">Live cards</h3>
          </div>
          <Link to="/casino" search={{ type: "indian" }} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-flame">
            All card tables <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {liveCards.map((t, i) => (
            <TableTile key={t.name} tile={t} i={i} />
          ))}
        </div>

        <div className="mb-6 mt-14 flex flex-wrap items-end justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-ink-deep/60 text-flame">
              <Dice5 className="h-4 w-4" />
            </span>
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">Live casino</h3>
          </div>
          <Link to="/casino" search={{ type: "live" }} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-flame hover:text-primary">
            All live tables <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {liveCasino.map((t, i) => (
            <TableTile key={t.name} tile={t} i={i} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/8 bg-card/70 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Take a seat in about two minutes</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Ask the desk for a Fairplay ID, fund it over UPI and the tables open straight away — sports and casino on the same balance.
            </p>
          </div>
          <a
            href={waLink("I want a Fairplay ID for the live casino tables")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-flame hover:text-flame-foreground"
          >
            Get an ID on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>


      </div>
    </section>
  );
}
