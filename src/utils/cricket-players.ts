export type PlayerRole = "batter" | "keeper" | "allrounder" | "pace" | "spin";
export type CricketFormat = "T20" | "ODI" | "TEST";

export interface SquadPlayer {
  name: string;
  role: PlayerRole;
}

export interface WatchPlayer {
  name: string;
  team: string;
  roleLabel: string;
  impact: number;
}

export const TEAM_SQUADS: Record<string, SquadPlayer[]> = {
  India: [
    { name: "Rohit Sharma", role: "batter" },
    { name: "Virat Kohli", role: "batter" },
    { name: "Shubman Gill", role: "batter" },
    { name: "Yashasvi Jaiswal", role: "batter" },
    { name: "KL Rahul", role: "keeper" },
    { name: "Rishabh Pant", role: "keeper" },
    { name: "Hardik Pandya", role: "allrounder" },
    { name: "Ravindra Jadeja", role: "allrounder" },
    { name: "Jasprit Bumrah", role: "pace" },
    { name: "Mohammed Siraj", role: "pace" },
    { name: "Mohammed Shami", role: "pace" },
    { name: "Kuldeep Yadav", role: "spin" },
    { name: "Axar Patel", role: "spin" },
    { name: "Shreyas Iyer", role: "batter" },
  ],
  England: [
    { name: "Jos Buttler", role: "keeper" },
    { name: "Ben Stokes", role: "allrounder" },
    { name: "Joe Root", role: "batter" },
    { name: "Harry Brook", role: "batter" },
    { name: "Liam Livingstone", role: "allrounder" },
    { name: "Jonny Bairstow", role: "keeper" },
    { name: "Phil Salt", role: "batter" },
    { name: "Sam Curran", role: "allrounder" },
    { name: "Mark Wood", role: "pace" },
    { name: "Jofra Archer", role: "pace" },
    { name: "Adil Rashid", role: "spin" },
    { name: "Reece Topley", role: "pace" },
    { name: "Chris Woakes", role: "pace" },
    { name: "Moeen Ali", role: "spin" },
  ],
  Australia: [
    { name: "Pat Cummins", role: "pace" },
    { name: "Travis Head", role: "batter" },
    { name: "Mitchell Marsh", role: "allrounder" },
    { name: "Glenn Maxwell", role: "allrounder" },
    { name: "Steve Smith", role: "batter" },
    { name: "Marnus Labuschagne", role: "batter" },
    { name: "Alex Carey", role: "keeper" },
    { name: "Josh Inglis", role: "keeper" },
    { name: "Mitchell Starc", role: "pace" },
    { name: "Josh Hazlewood", role: "pace" },
    { name: "Adam Zampa", role: "spin" },
    { name: "Marcus Stoinis", role: "allrounder" },
    { name: "Cameron Green", role: "allrounder" },
    { name: "David Warner", role: "batter" },
  ],
  Pakistan: [
    { name: "Babar Azam", role: "batter" },
    { name: "Mohammad Rizwan", role: "keeper" },
    { name: "Shaheen Afridi", role: "pace" },
    { name: "Naseem Shah", role: "pace" },
    { name: "Haris Rauf", role: "pace" },
    { name: "Shadab Khan", role: "allrounder" },
    { name: "Fakhar Zaman", role: "batter" },
    { name: "Iftikhar Ahmed", role: "allrounder" },
    { name: "Imad Wasim", role: "spin" },
    { name: "Usama Mir", role: "spin" },
    { name: "Saim Ayub", role: "batter" },
    { name: "Azam Khan", role: "keeper" },
    { name: "Mohammad Amir", role: "pace" },
  ],
  "South Africa": [
    { name: "Aiden Markram", role: "batter" },
    { name: "Quinton de Kock", role: "keeper" },
    { name: "Heinrich Klaasen", role: "keeper" },
    { name: "David Miller", role: "batter" },
    { name: "Kagiso Rabada", role: "pace" },
    { name: "Anrich Nortje", role: "pace" },
    { name: "Keshav Maharaj", role: "spin" },
    { name: "Tabraiz Shamsi", role: "spin" },
    { name: "Marco Jansen", role: "allrounder" },
    { name: "Tristan Stubbs", role: "batter" },
    { name: "Reeza Hendricks", role: "batter" },
    { name: "Lungi Ngidi", role: "pace" },
  ],
  "New Zealand": [
    { name: "Kane Williamson", role: "batter" },
    { name: "Daryl Mitchell", role: "allrounder" },
    { name: "Rachin Ravindra", role: "allrounder" },
    { name: "Glenn Phillips", role: "batter" },
    { name: "Devon Conway", role: "keeper" },
    { name: "Mitchell Santner", role: "spin" },
    { name: "Trent Boult", role: "pace" },
    { name: "Tim Southee", role: "pace" },
    { name: "Matt Henry", role: "pace" },
    { name: "Lockie Ferguson", role: "pace" },
    { name: "Ish Sodhi", role: "spin" },
    { name: "Finn Allen", role: "batter" },
  ],
  "Sri Lanka": [
    { name: "Wanindu Hasaranga", role: "spin" },
    { name: "Kusal Mendis", role: "keeper" },
    { name: "Pathum Nissanka", role: "batter" },
    { name: "Sadeera Samarawickrama", role: "keeper" },
    { name: "Charith Asalanka", role: "batter" },
    { name: "Angelo Mathews", role: "allrounder" },
    { name: "Maheesh Theekshana", role: "spin" },
    { name: "Matheesha Pathirana", role: "pace" },
    { name: "Dilshan Madushanka", role: "pace" },
    { name: "Dushmantha Chameera", role: "pace" },
  ],
  "West Indies": [
    { name: "Nicholas Pooran", role: "keeper" },
    { name: "Andre Russell", role: "allrounder" },
    { name: "Rovman Powell", role: "batter" },
    { name: "Shai Hope", role: "keeper" },
    { name: "Jason Holder", role: "allrounder" },
    { name: "Alzarri Joseph", role: "pace" },
    { name: "Akeal Hosein", role: "spin" },
    { name: "Brandon King", role: "batter" },
    { name: "Kyle Mayers", role: "allrounder" },
    { name: "Sherfane Rutherford", role: "batter" },
  ],
  Bangladesh: [
    { name: "Shakib Al Hasan", role: "allrounder" },
    { name: "Litton Das", role: "keeper" },
    { name: "Najmul Hossain Shanto", role: "batter" },
    { name: "Mushfiqur Rahim", role: "keeper" },
    { name: "Mahmudullah", role: "allrounder" },
    { name: "Mustafizur Rahman", role: "pace" },
    { name: "Taskin Ahmed", role: "pace" },
    { name: "Shoriful Islam", role: "pace" },
    { name: "Mehidy Hasan Miraz", role: "spin" },
  ],
  Afghanistan: [
    { name: "Rashid Khan", role: "spin" },
    { name: "Rahmanullah Gurbaz", role: "keeper" },
    { name: "Ibrahim Zadran", role: "batter" },
    { name: "Mohammad Nabi", role: "allrounder" },
    { name: "Azmatullah Omarzai", role: "allrounder" },
    { name: "Fazalhaq Farooqi", role: "pace" },
    { name: "Naveen-ul-Haq", role: "pace" },
    { name: "Mujeeb Ur Rahman", role: "spin" },
    { name: "Gulbadin Naib", role: "allrounder" },
  ],
  Ireland: [
    { name: "Paul Stirling", role: "batter" },
    { name: "Lorcan Tucker", role: "keeper" },
    { name: "Harry Tector", role: "batter" },
    { name: "Andy Balbirnie", role: "batter" },
    { name: "Curtis Campher", role: "allrounder" },
    { name: "Mark Adair", role: "pace" },
    { name: "Josh Little", role: "pace" },
    { name: "Barry McCarthy", role: "pace" },
    { name: "Gareth Delany", role: "spin" },
  ],
  Zimbabwe: [
    { name: "Sikandar Raza", role: "allrounder" },
    { name: "Ryan Burl", role: "allrounder" },
    { name: "Blessing Muzarabani", role: "pace" },
    { name: "Craig Ervine", role: "batter" },
    { name: "Sean Williams", role: "allrounder" },
    { name: "Wessly Madhevere", role: "batter" },
    { name: "Richard Ngarava", role: "pace" },
    { name: "Brian Bennett", role: "batter" },
    { name: "Tadiwanashe Marumani", role: "keeper" },
  ],
};

export const TEAM_PLAYERS: Record<string, string[]> = Object.fromEntries(
  Object.entries(TEAM_SQUADS).map(([team, squad]) => [team, squad.map((p) => p.name)]),
);

function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let n = Math.imul(t ^ (t >>> 15), t | 1);
    n ^= n + Math.imul(n ^ (n >>> 7), n | 61);
    return ((n ^ (n >>> 14)) >>> 0) / 4294967296;
  };
}

function resolveSquad(teamName: string): { team: string; squad: SquadPlayer[] } {
  const normalizedTeam = Object.keys(TEAM_SQUADS).find(
    (t) => teamName.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(teamName.toLowerCase()),
  );
  if (normalizedTeam) {
    const squad = TEAM_SQUADS[normalizedTeam];
    if (squad && squad.length > 0) {
      return { team: normalizedTeam, squad };
    }
  }
  return {
    team: teamName,
    squad: [
      { name: `${teamName} Opener`, role: "batter" },
      { name: `${teamName} Finisher`, role: "batter" },
      { name: `${teamName} All-rounder`, role: "allrounder" },
      { name: `${teamName} Seamer`, role: "pace" },
      { name: `${teamName} Spinner`, role: "spin" },
      { name: `${teamName} Keeper`, role: "keeper" },
    ],
  };
}

export const getPlayersForTeam = (teamName: string): string[] => {
  return resolveSquad(teamName).squad.map((p) => p.name);
};

function roleWeight(role: PlayerRole, format: CricketFormat, surface: string): number {
  const spinFriendly = surface.includes("SPIN");
  const seamFriendly = surface.includes("SEAM");
  if (format === "T20") {
    if (role === "pace" || role === "allrounder") return 1.3;
    if (role === "keeper" || role === "batter") return 1.15;
    return spinFriendly ? 1.2 : 0.95;
  }
  if (format === "TEST") {
    if (spinFriendly && role === "spin") return 1.45;
    if (seamFriendly && role === "pace") return 1.4;
    if (role === "batter") return 1.2;
    if (role === "pace") return 1.15;
    return 1;
  }
  if (role === "allrounder") return 1.2;
  if (role === "batter" || role === "pace") return 1.1;
  return 1;
}

function roleLabel(role: PlayerRole, format: CricketFormat, surface: string, pick: number): string {
  if (format === "T20") {
    if (role === "pace") return pick % 2 === 0 ? "Death Overs" : "New-Ball Burst";
    if (role === "spin") return "Middle-Overs Spin";
    if (role === "allrounder") return "Match-Up X-Factor";
    if (role === "keeper") return "Powerplay Strike";
    return pick % 2 === 0 ? "Top-Order Firepower" : "Finisher";
  }
  if (format === "TEST") {
    if (role === "pace") return seamFriendlyLabel(surface);
    if (role === "spin") return "Long-Spell Control";
    if (role === "allrounder") return "Red-Ball Balance";
    if (role === "keeper") return "Lower-Order Runs";
    return pick % 2 === 0 ? "First-Innings Pillar" : "Conversion Threat";
  }
  if (role === "pace") return "Death Overs";
  if (role === "spin") return "Middle-Overs Lock";
  if (role === "allrounder") return "Overs 25-40 Engine";
  return pick % 2 === 0 ? "Chase Anchor" : "Powerplay Tempo";
}

function seamFriendlyLabel(surface: string): string {
  return surface.includes("SEAM") ? "New-Ball Swing" : "Reverse & Length";
}

function pickFromSquad(
  squad: SquadPlayer[],
  format: CricketFormat,
  surface: string,
  seed: string,
  count: number,
): SquadPlayer[] {
  const rand = mulberry32(hashSeed(seed));
  const ranked = squad.map((player, index) => ({
    player,
    score: roleWeight(player.role, format, surface) * 10 + rand() * 8 + (index % 5) * 0.15,
  }));
  ranked.sort((a, b) => b.score - a.score);
  const picked: SquadPlayer[] = [];
  const usedRoles = new Set<PlayerRole>();
  for (const row of ranked) {
    if (picked.length >= count) break;
    if (usedRoles.has(row.player.role) && ranked.length > count) {
      continue;
    }
    picked.push(row.player);
    usedRoles.add(row.player.role);
  }
  for (const row of ranked) {
    if (picked.length >= count) break;
    if (!picked.some((p) => p.name === row.player.name)) {
      picked.push(row.player);
    }
  }
  return picked.slice(0, count);
}

export function getKeyWatchPlayers(input: {
  slug: string;
  teamA: string;
  teamB: string;
  format: CricketFormat;
  surface: string;
  venue: string;
}): WatchPlayer[] {
  const sideA = resolveSquad(input.teamA);
  const sideB = resolveSquad(input.teamB);
  const pickedA = pickFromSquad(
    sideA.squad,
    input.format,
    input.surface,
    `watch|a|${input.slug}|${input.venue}|${input.teamA}`,
    2,
  );
  const pickedB = pickFromSquad(
    sideB.squad,
    input.format,
    input.surface,
    `watch|b|${input.slug}|${input.venue}|${input.teamB}`,
    2,
  );

  const rand = mulberry32(hashSeed(`impact|${input.slug}|${input.venue}`));
  const toWatch = (player: SquadPlayer, team: string, index: number): WatchPlayer => ({
    name: player.name,
    team,
    roleLabel: roleLabel(player.role, input.format, input.surface, index),
    impact: Math.min(97, Math.max(76, Math.round(79 + rand() * 16 + index))),
  });

  return [
    ...pickedA.map((player, i) => toWatch(player, input.teamA, i)),
    ...pickedB.map((player, i) => toWatch(player, input.teamB, i + 2)),
  ];
}
