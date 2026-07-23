type Topic =
  | "football"
  | "cricket"
  | "mobile"
  | "security"
  | "wallet"
  | "casino"
  | "aviator"
  | "strategy"
  | "account";

function hashSlug(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Deterministic PRNG (mulberry32) seeded from slug hash — gives us many
// independent "random" values so every post gets a truly unique banner.
function makeRng(seed: number) {
  let a = seed || 1;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function inferTopic(title: string, category: string): Topic {
  const text = `${title} ${category}`.toLowerCase();
  if (/football|fifa|world cup|soccer/.test(text)) return "football";
  if (/aviator|plane/.test(text)) return "aviator";
  if (/casino|teen patti|roulette|baccarat|andar|bahar|card|slots?/.test(text)) return "casino";
  if (/apk|android|app|mobile|download/.test(text)) return "mobile";
  if (/safe|security|kyc|verified|trust|responsible/.test(text)) return "security";
  if (/upi|deposit|withdraw|wallet|payment|payout|bank|rupee|cash/.test(text)) return "wallet";
  if (/cricket|ipl|t20|wicket|satta|match|toss|fancy|session/.test(text)) return "cricket";
  if (/account|id|login|signup|start|create/.test(text)) return "account";
  if (/probability|odds|strategy|loss|tips|prediction|guide|explainer/.test(text)) return "strategy";
  return "account";
}

function titleKeywords(title: string): string[] {
  const stop = new Set(["the", "and", "with", "from", "book", "mahadev", "how", "what", "does", "work", "for", "your", "india", "online"]);
  return title
    .replace(/[—:()&]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !stop.has(w.toLowerCase()))
    .slice(0, 4);
}

function wrapTitle(title: string, maxChars: number): string[] {
  const words = title.split(/\s+/);
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > maxChars && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = (cur ? cur + " " : "") + w;
    }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 4);
}

type Props = {
  title: string;
  category: string;
  slug: string;
  className?: string;
  compact?: boolean;
};

export function BlogHeroBanner({ title, category, slug, className, compact = false }: Props) {
  const seed = hashSlug(`${slug}-${title}`);
  const rng = makeRng(seed);

  const topic = inferTopic(title, category);
  const keywords = titleKeywords(title);
  const hueShift = Math.floor(rng() * 30) - 15;
  const accentA = `hsl(${(43 + hueShift + 360) % 360} 92% 58%)`;
  const accentB = `hsl(${(140 + hueShift + 360) % 360} 52% 34%)`;
  const accentC = `hsl(${(8 + hueShift + 360) % 360} 76% 46%)`;
  const baseTint = `hsl(${(155 + hueShift + 360) % 360} 28% 9%)`;
  const glowCx = 0.16 + rng() * 0.68;
  const glowCy = 0.14 + rng() * 0.58;
  const dotSize = 20 + Math.floor(rng() * 10);
  const artOffset = Math.floor(rng() * 120) - 60;
  const panelSkew = Math.floor(rng() * 40) - 20;

  const gradId = `bhb-grad-${seed}`;
  const maskId = `bhb-mask-${seed}`;
  const glowId = `bhb-glow-${seed}`;
  const dotsId = `bhb-dots-${seed}`;
  const stripeId = `bhb-stripes-${seed}`;

  const titleMax = compact ? 30 : 34;
  const lines = wrapTitle(title, titleMax);
  const titleSize = compact ? 36 : lines.length >= 4 ? 52 : lines.length === 3 ? 62 : 74;
  const lineHeight = titleSize * 1.05;
  const titleBlockH = lines.length * lineHeight;
  const titleStartY = compact ? 258 - titleBlockH / 2 + titleSize * 0.85 : 300 - titleBlockH / 2 + titleSize * 0.85;
  const marker = String((seed % 97) + 1).padStart(2, "0");

  const topicArt = {
    football: (
      <g transform={`translate(${760 + artOffset} 96)`}>
        <path d="M40 390 C160 270 300 268 420 390" fill="none" stroke={accentA} strokeOpacity="0.42" strokeWidth="5" />
        <rect x="80" y="258" width="300" height="120" rx="8" fill="#06100b" stroke={accentA} strokeOpacity="0.5" />
        <path d="M80 318 H380 M230 258 V378 M120 258 V378 M340 258 V378" stroke={accentB} strokeOpacity="0.38" />
        <circle cx="230" cy="318" r="42" fill="none" stroke={accentA} strokeOpacity="0.55" strokeWidth="3" />
        <circle cx="330" cy="228" r="54" fill="#f7f2dc" />
        <path d="M330 174 L358 197 L348 232 L312 232 L302 197 Z" fill="#121212" />
        <path d="M282 214 L312 232 L303 268 M378 214 L348 232 L357 268 M314 282 H346" stroke="#121212" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M178 72 H312 L292 128 H198 Z" fill={accentA} opacity="0.95" />
        <path d="M212 128 H278 V188 H212 Z" fill={accentA} opacity="0.85" />
        <path d="M168 188 H322 V218 H168 Z" fill={accentA} opacity="0.75" />
        <path d="M236 72 C238 30 276 30 278 72" fill="none" stroke={accentA} strokeWidth="10" />
      </g>
    ),
    cricket: (
      <g transform={`translate(${770 + artOffset} 80)`}>
        <ellipse cx="225" cy="405" rx="240" ry="44" fill={accentB} opacity="0.28" />
        <path d="M110 340 L348 102 C366 84 402 104 386 130 L176 390 Z" fill={accentA} opacity="0.95" />
        <path d="M116 350 L176 390" stroke="#fff3bf" strokeOpacity="0.65" strokeWidth="10" />
        <circle cx="358" cy="318" r="44" fill={accentC} />
        <path d="M332 292 C354 316 366 336 385 350" stroke="#fff3bf" strokeOpacity="0.7" strokeWidth="4" fill="none" />
        <g stroke={accentA} strokeWidth="8" strokeLinecap="round">
          <line x1="56" y1="234" x2="56" y2="398" />
          <line x1="88" y1="226" x2="88" y2="398" />
          <line x1="120" y1="234" x2="120" y2="398" />
          <line x1="44" y1="222" x2="132" y2="222" />
        </g>
        <path d="M18 150 C126 80 280 54 448 82" fill="none" stroke={accentA} strokeOpacity="0.2" strokeWidth="3" />
      </g>
    ),
    mobile: (
      <g transform={`translate(${810 + artOffset} 76) rotate(-6 160 230)`}>
        <rect x="82" y="22" width="250" height="454" rx="34" fill="#070b0b" stroke={accentA} strokeWidth="7" />
        <rect x="106" y="70" width="202" height="344" rx="16" fill="#0b1e15" />
        <rect x="134" y="98" width="146" height="42" rx="10" fill={accentA} opacity="0.86" />
        <rect x="132" y="170" width="70" height="54" rx="12" fill={accentB} opacity="0.7" />
        <rect x="218" y="170" width="62" height="54" rx="12" fill={accentA} opacity="0.24" />
        <rect x="132" y="248" width="148" height="18" rx="9" fill={accentA} opacity="0.36" />
        <rect x="132" y="286" width="112" height="18" rx="9" fill={accentA} opacity="0.24" />
        <rect x="152" y="354" width="108" height="38" rx="19" fill={accentA} />
        <circle cx="208" cy="444" r="13" fill={accentA} opacity="0.55" />
        <path d="M26 212 H82 M332 146 H418 M332 314 H398" stroke={accentA} strokeOpacity="0.55" strokeWidth="5" strokeLinecap="round" />
      </g>
    ),
    security: (
      <g transform={`translate(${790 + artOffset} 80)`}>
        <path d="M238 28 L438 104 V248 C438 356 354 426 238 470 C122 426 38 356 38 248 V104 Z" fill="#07130e" stroke={accentA} strokeWidth="8" />
        <path d="M238 82 L380 138 V250 C380 324 326 374 238 412 C150 374 96 324 96 250 V138 Z" fill={accentB} opacity="0.42" />
        <rect x="160" y="228" width="156" height="114" rx="16" fill={accentA} />
        <path d="M190 228 V190 C190 122 286 122 286 190 V228" fill="none" stroke={accentA} strokeWidth="24" strokeLinecap="round" />
        <circle cx="238" cy="278" r="16" fill="#102015" />
        <path d="M238 292 V320" stroke="#102015" strokeWidth="9" strokeLinecap="round" />
        <path d="M338 90 L392 42 M114 102 L58 54 M398 374 L444 418" stroke={accentA} strokeOpacity="0.35" strokeWidth="5" strokeLinecap="round" />
      </g>
    ),
    wallet: (
      <g transform={`translate(${772 + artOffset} 104)`}>
        <rect x="42" y="172" width="400" height="226" rx="28" fill="#08140e" stroke={accentA} strokeWidth="7" />
        <path d="M78 172 L350 74 C386 62 412 78 424 112 L442 172" fill={accentB} opacity="0.55" stroke={accentA} strokeOpacity="0.6" />
        <rect x="286" y="228" width="156" height="86" rx="22" fill={accentA} />
        <circle cx="332" cy="270" r="18" fill="#0b1410" />
        <text x="108" y="318" fontFamily="Georgia, serif" fontSize="112" fontWeight="700" fill={accentA}>₹</text>
        <path d="M210 256 H258 M210 302 H262 M210 348 H294" stroke={accentA} strokeOpacity="0.7" strokeWidth="8" strokeLinecap="round" />
        <path d="M32 84 C96 34 170 28 250 52" stroke={accentA} strokeOpacity="0.22" strokeWidth="4" fill="none" />
      </g>
    ),
    casino: (
      <g transform={`translate(${770 + artOffset} 92)`}>
        <rect x="54" y="124" width="184" height="276" rx="22" fill="#f8f1da" transform="rotate(-10 146 262)" />
        <rect x="204" y="104" width="184" height="276" rx="22" fill="#fff9e8" transform="rotate(8 296 242)" />
        <text x="98" y="184" fontFamily="Georgia, serif" fontSize="54" fontWeight="700" fill={accentC}>A</text>
        <text x="278" y="164" fontFamily="Georgia, serif" fontSize="54" fontWeight="700" fill="#111">K</text>
        <path d="M132 248 C106 216 162 192 162 230 C162 192 218 216 192 248 L162 282 Z" fill={accentC} />
        <path d="M296 226 L326 270 L296 314 L266 270 Z" fill="#111" />
        <circle cx="374" cy="342" r="58" fill={accentA} />
        <circle cx="374" cy="342" r="36" fill="#101510" stroke="#fff4c0" strokeOpacity="0.7" />
        <circle cx="438" cy="294" r="44" fill={accentC} />
        <circle cx="438" cy="294" r="26" fill="#101510" stroke="#fff4c0" strokeOpacity="0.7" />
      </g>
    ),
    aviator: (
      <g transform={`translate(${758 + artOffset} 92)`}>
        <path d="M48 270 C170 210 298 154 470 84 C438 164 380 248 314 326 L354 438 L302 462 L242 378 L132 410 L106 374 L194 322 Z" fill={accentA} />
        <path d="M182 318 L314 326" stroke="#fff1bc" strokeOpacity="0.75" strokeWidth="8" strokeLinecap="round" />
        <path d="M70 160 C182 74 330 48 474 64" stroke={accentC} strokeOpacity="0.52" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M52 202 C184 118 302 94 422 110" stroke={accentA} strokeOpacity="0.22" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="96" cy="356" r="22" fill={accentC} opacity="0.86" />
      </g>
    ),
    strategy: (
      <g transform={`translate(${768 + artOffset} 92)`}>
        <rect x="54" y="72" width="384" height="308" rx="18" fill="#07140e" stroke={accentA} strokeOpacity="0.8" strokeWidth="5" />
        <path d="M92 320 L164 250 L226 278 L302 166 L392 118" fill="none" stroke={accentA} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M92 126 H386 M92 180 H194 M92 230 H150" stroke={accentB} strokeOpacity="0.46" strokeWidth="6" strokeLinecap="round" />
        <circle cx="164" cy="250" r="16" fill={accentC} />
        <circle cx="302" cy="166" r="16" fill={accentC} />
        <path d="M386 118 L354 114 M386 118 L372 148" stroke={accentA} strokeWidth="9" strokeLinecap="round" />
        <g transform="translate(314 290)">
          <circle cx="0" cy="0" r="58" fill={accentA} opacity="0.22" />
          <circle cx="0" cy="0" r="34" fill="none" stroke={accentA} strokeWidth="5" />
          <line x1="-64" y1="0" x2="64" y2="0" stroke={accentA} strokeOpacity="0.55" />
          <line x1="0" y1="-64" x2="0" y2="64" stroke={accentA} strokeOpacity="0.55" />
        </g>
      </g>
    ),
    account: (
      <g transform={`translate(${790 + artOffset} 82)`}>
        <rect x="82" y="80" width="326" height="326" rx="30" fill="#07140e" stroke={accentA} strokeWidth="7" />
        <circle cx="245" cy="184" r="66" fill={accentA} />
        <path d="M134 352 C154 286 334 286 356 352" fill={accentB} opacity="0.8" />
        <rect x="146" y="46" width="198" height="66" rx="33" fill={accentA} opacity="0.92" />
        <text x="245" y="89" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="32" fontWeight="800" fill="#07140e">ID</text>
        <path d="M36 172 H82 M408 172 H462 M36 314 H82 M408 314 H462" stroke={accentA} strokeOpacity="0.5" strokeWidth="6" strokeLinecap="round" />
        <path d="M158 430 H332" stroke={accentA} strokeOpacity="0.45" strokeWidth="6" strokeLinecap="round" />
      </g>
    ),
  };

  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${title} — Mahadev Book`}
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b0b0f" />
          <stop offset="55%" stopColor={baseTint} />
          <stop offset="100%" stopColor="#0b0b0f" />
        </linearGradient>
        <radialGradient id={glowId} cx={glowCx} cy={glowCy} r="0.9">
          <stop offset="0%" stopColor={accentA} stopOpacity="0.55" />
          <stop offset="45%" stopColor={accentB} stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <pattern id={dotsId} width={dotSize} height={dotSize} patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1.2" fill={accentA} fillOpacity="0.18" />
        </pattern>
        <pattern id={stripeId} width="120" height="120" patternUnits="userSpaceOnUse" patternTransform={`rotate(${panelSkew})`}>
          <rect width="120" height="120" fill="transparent" />
          <path d="M0 0 H120" stroke={accentA} strokeOpacity="0.12" strokeWidth="6" />
          <path d="M0 58 H120" stroke={accentB} strokeOpacity="0.1" strokeWidth="2" />
        </pattern>
        <mask id={maskId}>
          <rect width="1200" height="600" fill="white" />
        </mask>
      </defs>

      {/* Base */}
      <rect width="1200" height="600" fill={`url(#${gradId})`} />
      <rect width="1200" height="600" fill={`url(#${glowId})`} />
      <rect width="1200" height="600" fill={`url(#${dotsId})`} opacity="0.5" />
      <rect width="1200" height="600" fill={`url(#${stripeId})`} opacity="0.65" />
      <path d={`M690 0 L1200 0 L1200 600 L${770 + panelSkew} 600 Z`} fill="#05100b" opacity="0.58" />
      <path d={`M720 0 L${760 + panelSkew} 0 L${860 + panelSkew} 600 L820 600 Z`} fill={accentA} opacity="0.08" />

      {/* Title-matched illustration */}
      <g opacity="0.98">{topicArt[topic]}</g>
      <g opacity="0.5">
        {Array.from({ length: 11 }).map((_, i) => (
          <circle key={i} cx={720 + i * 42 + (seed % 23)} cy={82 + ((i * 37 + seed) % 390)} r={2 + ((seed + i) % 4)} fill={i % 2 ? accentA : accentB} opacity="0.38" />
        ))}
      </g>

      {/* Brand bar */}
      <g>
        <rect x="60" y="60" width="252" height="44" rx="22" fill={accentA} fillOpacity="0.12" stroke={accentA} strokeOpacity="0.55" />
        <text x="86" y="90" fontFamily="Cinzel, Georgia, serif" fontSize="22" fontWeight="700" fill={accentA} letterSpacing="2">MAHADEV BOOK</text>
      </g>

      {/* Category chip */}
      <g>
        <rect x="60" y="128" width={category.length * 11 + 40} height="34" rx="17" fill={accentA} fillOpacity="0.18" stroke={accentA} strokeOpacity="0.4" />
        <text x="80" y="150" fontFamily="Inter, system-ui, sans-serif" fontSize="14" fontWeight="600" fill={accentA} letterSpacing="2">
          {category.toUpperCase()}
        </text>
      </g>

      {/* Title */}
      <g mask={`url(#${maskId})`}>
        {lines.map((ln, i) => (
          <text
            key={i}
            x="60"
            y={titleStartY + i * lineHeight}
            fontFamily="'Space Grotesk', Inter, system-ui, sans-serif"
            fontSize={titleSize}
            fontWeight="700"
            fill="#fdf6e3"
          >
            {ln}
          </text>
        ))}
      </g>

      {/* Underline accent */}
      <rect x="60" y={titleStartY + lines.length * lineHeight + 14} width="120" height="4" rx="2" fill={accentA} />

      {/* Brand URL — bottom */}
      <g>
        <line x1="60" y1="540" x2="1140" y2="540" stroke={accentA} strokeOpacity="0.25" />
        <text x="60" y="572" fontFamily="Inter, system-ui, sans-serif" fontSize="20" fontWeight="600" fill={accentA} letterSpacing="1">
          mahadevbookss.com
        </text>
        <text x="600" y="572" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#fdf6e3" fillOpacity="0.62" letterSpacing="3">
          {topic.toUpperCase()} · POST {marker} {keywords.length ? `· ${keywords.join(" · ").toUpperCase()}` : ""}
        </text>
        <text x="1140" y="572" textAnchor="end" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="500" fill={accentA} fillOpacity="0.7" letterSpacing="3">
          VERIFIED BETTING IDs · SINCE 2014
        </text>
      </g>
    </svg>
  );
}
