export interface TennisPlayer {
  name: string;
  country: string;
  style: string;
  role: string;
  serve: string;
  leak: string;
}

export const ATP_PLAYERS: TennisPlayer[] = [
  { name: "Jannik Sinner", country: "ITA", style: "Flat aggressive baseliner", role: "Favourite", serve: "First-serve plus-one pattern", leak: "Backhand return vs heavy slice" },
  { name: "Carlos Alcaraz", country: "ESP", style: "All-court drop-shot artist", role: "Favourite", serve: "Wide serve into forehand finishes", leak: "Second-serve points under 48%" },
  { name: "Novak Djokovic", country: "SRB", style: "Counter-puncher", role: "Defender", serve: "Body serve + return depth", leak: "Short first-strike rallies" },
  { name: "Daniil Medvedev", country: "RUS", style: "Deep-court absorber", role: "Favourite", serve: "T-serve then backhand redirect", leak: "Net approaches on fast hard" },
  { name: "Alexander Zverev", country: "GER", style: "Serve-first baseliner", role: "Serve-first", serve: "First-serve % over 68%", leak: "Backhand pass vs chip-charge" },
  { name: "Taylor Fritz", country: "USA", style: "First-strike hard-court", role: "Serve-first", serve: "Ace clusters on first serve", leak: "Return games vs lefty slice" },
  { name: "Casper Ruud", country: "NOR", style: "Heavy topspin baseliner", role: "Favourite", serve: "Kick serve to the ad court", leak: "Low-bouncing grass patches" },
  { name: "Andrey Rublev", country: "RUS", style: "Forehand-first aggressor", role: "Dark horse", serve: "Body serve into forehand", leak: "Tie-break composure" },
  { name: "Holger Rune", country: "DEN", style: "All-court tempo changer", role: "Dark horse", serve: "Wide serve then inside-in", leak: "Service games after long sets" },
  { name: "Stefanos Tsitsipas", country: "GRE", style: "One-handed all-courter", role: "Favourite", serve: "Slice serve to the backhand", leak: "Return vs lefty wide serve" },
  { name: "Alex de Minaur", country: "AUS", style: "Speed counter-puncher", role: "Home wildcard", serve: "Placement over pace", leak: "Ace deficit on fast indoor" },
  { name: "Hubert Hurkacz", country: "POL", style: "Serve-and-volley lean", role: "Serve-and-volley", serve: "First-serve +1 at net", leak: "Second-serve return depth" },
  { name: "Tommy Paul", country: "USA", style: "Compact hard-court", role: "Dark horse", serve: "Body serve into backhand", leak: "Clay sliding points" },
  { name: "Frances Tiafoe", country: "USA", style: "Showman first-striker", role: "Wildcard", serve: "Kick serve then forehand", leak: "Return vs elite first serve" },
  { name: "Grigor Dimitrov", country: "BUL", style: "Fluid all-courter", role: "Veteran ace-machine", serve: "Slice serve variety", leak: "Physical load after 2h+" },
  { name: "Ben Shelton", country: "USA", style: "Lefty serve bomber", role: "Serve-first", serve: "Wide lefty slider", leak: "Backhand rally tolerance" },
  { name: "Jack Draper", country: "GBR", style: "Lefty first-strike", role: "Home wildcard", serve: "Ad-court slider + forehand", leak: "Second-serve double-fault clusters" },
  { name: "Lorenzo Musetti", country: "ITA", style: "One-handed clay artist", role: "Dark horse", serve: "Kick serve to the body", leak: "Fast indoor first-strike" },
  { name: "Felix Auger-Aliassime", country: "CAN", style: "Athletic serve-first", role: "Serve-first", serve: "First-serve % spikes indoors", leak: "Return games vs kick serve" },
  { name: "Karen Khachanov", country: "RUS", style: "Heavy first-strike", role: "Defender", serve: "Body serve into the hip", leak: "Drop-shot exchanges" },
  { name: "Alexander Bublik", country: "KAZ", style: "Trick-shot serve-volley", role: "Wildcard", serve: "Ace-or-error first serve", leak: "Predictable second serve" },
  { name: "Jiri Lehecka", country: "CZE", style: "Clean hard-court striker", role: "Dark horse", serve: "T-serve then inside-out", leak: "Physical best-of-five load" },
  { name: "Tomas Machac", country: "CZE", style: "Quiet counter-puncher", role: "Counter-puncher", serve: "Placement first serve", leak: "Tie-break first-strike" },
  { name: "Sebastian Korda", country: "USA", style: "All-court technician", role: "Dark horse", serve: "Wide serve into backhand", leak: "Injury-managed service games" },
  { name: "Cameron Norrie", country: "GBR", style: "Lefty grinder", role: "Defender", serve: "High-kicking lefty serve", leak: "Fast indoor ace deficit" },
  { name: "Ugo Humbert", country: "FRA", style: "Lefty indoor specialist", role: "Home wildcard", serve: "Slider plus backhand", leak: "Clay sliding defense" },
  { name: "Arthur Fils", country: "FRA", style: "Explosive first-striker", role: "Rising challenger", serve: "First-serve + inside-in", leak: "Error clusters on second serve" },
  { name: "Flavio Cobolli", country: "ITA", style: "Compact clay-hard hybrid", role: "Rising challenger", serve: "Kick serve to the body", leak: "Grass low bounce" },
  { name: "Francisco Cerundolo", country: "ARG", style: "Clay-court heavy ball", role: "Favourite", serve: "Kick serve then forehand", leak: "Fast hard serve returns" },
  { name: "Sebastian Baez", country: "ARG", style: "Clay counter-puncher", role: "Counter-puncher", serve: "High kick to the backhand", leak: "Ace deficit on grass" },
  { name: "Jordan Thompson", country: "AUS", style: "Serve-and-volley crossover", role: "Serve-and-volley", serve: "Chip-charge on second serve", leak: "Long baseline rallies" },
  { name: "Alexei Popyrin", country: "AUS", style: "First-serve punisher", role: "Home wildcard", serve: "Ace volume on hard", leak: "Return vs lefty slider" },
  { name: "Jan-Lennard Struff", country: "GER", style: "Veteran serve-first", role: "Veteran ace-machine", serve: "First-serve bombs", leak: "Movement on slow clay" },
  { name: "Matteo Berrettini", country: "ITA", style: "Grass serve-first", role: "Serve-first", serve: "First-serve % on grass", leak: "Backhand pass vs chip-charge" },
  { name: "Denis Shapovalov", country: "CAN", style: "Lefty highlight hunter", role: "Wildcard", serve: "Wide slider + forehand", leak: "Unforced-error spikes" },
  { name: "Brandon Nakashima", country: "USA", style: "Clean counter-striker", role: "Counter-puncher", serve: "Spot serving", leak: "Net approaches" },
  { name: "Alex Michelsen", country: "USA", style: "Young first-striker", role: "Rising challenger", serve: "T-serve then forehand", leak: "Physical third-set fade" },
  { name: "Jakub Mensik", country: "CZE", style: "Big-serve prospect", role: "Rising challenger", serve: "First-serve ace rate", leak: "Return consistency" },
  { name: "Giovanni Mpetshi Perricard", country: "FRA", style: "Serve-and-volley giant", role: "Serve-and-volley", serve: "Ace-first pattern", leak: "Second-serve return games" },
  { name: "Alejandro Tabilo", country: "CHI", style: "Lefty all-courter", role: "Dark horse", serve: "Ad-court slider", leak: "High-bouncing clay to the backhand" },
];

export const WTA_PLAYERS: TennisPlayer[] = [
  { name: "Iga Swiatek", country: "POL", style: "Heavy-topspin enforcer", role: "Favourite", serve: "Kick serve then inside-out", leak: "Fast indoor first-strike" },
  { name: "Aryna Sabalenka", country: "BLR", style: "First-strike power", role: "Favourite", serve: "Ace-first hard-court", leak: "Second-serve double faults" },
  { name: "Coco Gauff", country: "USA", style: "Athletic all-courter", role: "Favourite", serve: "First-serve + return depth", leak: "Forehand miss on fast hard" },
  { name: "Jessica Pegula", country: "USA", style: "Compact counter-striker", role: "Defender", serve: "Placement first serve", leak: "Ace deficit vs bombers" },
  { name: "Jasmine Paolini", country: "ITA", style: "Compact clay-hard hybrid", role: "Dark horse", serve: "Body serve into backhand", leak: "Grass low-bounce points" },
  { name: "Elena Rybakina", country: "KAZ", style: "Serve-first power", role: "Serve-first", serve: "First-serve % over 70%", leak: "Long physical clay sets" },
  { name: "Madison Keys", country: "USA", style: "Forehand-first aggressor", role: "Dark horse", serve: "T-serve then inside-in", leak: "Backhand pass vs drop shot" },
  { name: "Amanda Anisimova", country: "USA", style: "Clean first-striker", role: "Rising challenger", serve: "First-serve + flat backhand", leak: "Error clusters under scoreboard heat" },
  { name: "Qinwen Zheng", country: "CHN", style: "Serve-plus-forehand", role: "Serve-first", serve: "Ace clusters on hard", leak: "Return vs elite kick serve" },
  { name: "Jelena Ostapenko", country: "LAT", style: "Winner-or-error aggressor", role: "Wildcard", serve: "First-strike returns", leak: "Second-serve consistency" },
  { name: "Karolina Muchova", country: "CZE", style: "All-court magician", role: "Dark horse", serve: "Slice variety + drop shot", leak: "Physical load after 2h" },
  { name: "Mirra Andreeva", country: "RUS", style: "Teen counter-puncher", role: "Rising challenger", serve: "Placement then redirection", leak: "First-serve pop on indoor" },
  { name: "Emma Navarro", country: "USA", style: "Counter-punch technician", role: "Counter-puncher", serve: "Spot serving", leak: "Ace deficit vs WTA bombers" },
  { name: "Danielle Collins", country: "USA", style: "First-strike veteran", role: "Veteran ace-machine", serve: "Body serve + forehand", leak: "Movement on slow clay" },
  { name: "Paula Badosa", country: "ESP", style: "Tall hard-court striker", role: "Dark horse", serve: "First-serve + inside-out", leak: "Physical management" },
  { name: "Liudmila Samsonova", country: "RUS", style: "Flat indoor striker", role: "Serve-first", serve: "First-serve bombs", leak: "Clay sliding defense" },
  { name: "Beatriz Haddad Maia", country: "BRA", style: "Lefty heavy-ball", role: "Defender", serve: "High lefty kick", leak: "Fast indoor first-strike" },
  { name: "Daria Kasatkina", country: "RUS", style: "Slice counter-puncher", role: "Counter-puncher", serve: "Spin variety", leak: "Ace deficit on fast hard" },
  { name: "Maria Sakkari", country: "GRE", style: "Athletic defender", role: "Defender", serve: "Body serve + fight", leak: "First-strike winners vs her" },
  { name: "Ons Jabeur", country: "TUN", style: "Drop-shot all-courter", role: "Wildcard", serve: "Slice serve variety", leak: "First-serve pop vs bombers" },
  { name: "Donna Vekic", country: "CRO", style: "Flat hard-court striker", role: "Dark horse", serve: "T-serve then backhand", leak: "Long physical clay sets" },
  { name: "Marta Kostyuk", country: "UKR", style: "Fighting first-striker", role: "Dark horse", serve: "First-serve + fight", leak: "Error spikes in tie-breaks" },
  { name: "Diana Shnaider", country: "RUS", style: "Lefty first-strike", role: "Rising challenger", serve: "Ad-court slider", leak: "Second-serve return depth" },
  { name: "Magda Linette", country: "POL", style: "Veteran counter-striker", role: "Veteran ace-machine", serve: "Placement first serve", leak: "Power deficit vs top-5" },
  { name: "Sofia Kenin", country: "USA", style: "Compact Slam fighter", role: "Wildcard", serve: "Body serve into backhand", leak: "First-serve pop" },
  { name: "Naomi Osaka", country: "JPN", style: "Serve-first power", role: "Serve-first", serve: "Ace-first hard-court", leak: "Return games vs kick serve" },
  { name: "Emma Raducanu", country: "GBR", style: "Clean first-striker", role: "Home wildcard", serve: "T-serve then backhand", leak: "Physical third-set load" },
  { name: "Sorana Cirstea", country: "ROU", style: "Veteran first-strike", role: "Veteran ace-machine", serve: "Placement + fight", leak: "Movement vs drop shots" },
  { name: "Anna Kalinskaya", country: "RUS", style: "Compact all-courter", role: "Dark horse", serve: "Spot serving", leak: "Ace deficit" },
  { name: "Elise Mertens", country: "BEL", style: "Doubles-crossover singles", role: "Serve-and-volley", serve: "Chip-charge patterns", leak: "Baseline power deficit" },
  { name: "Ekaterina Alexandrova", country: "RUS", style: "Flat indoor bomber", role: "Serve-first", serve: "First-serve winners", leak: "Clay sliding points" },
  { name: "Leylah Fernandez", country: "CAN", style: "Lefty fighter", role: "Dark horse", serve: "Slider + fight", leak: "First-serve pop vs bombers" },
  { name: "Yulia Putintseva", country: "KAZ", style: "Grinder counter-puncher", role: "Counter-puncher", serve: "Placement over pace", leak: "Ace deficit on grass" },
  { name: "Clara Tauson", country: "DEN", style: "Heavy first-strike", role: "Rising challenger", serve: "First-serve + forehand", leak: "Error clusters" },
  { name: "Linda Noskova", country: "CZE", style: "Clean hard-court striker", role: "Rising challenger", serve: "T-serve then inside-out", leak: "Physical clay load" },
  { name: "Alexandra Eala", country: "PHI", style: "Rising all-courter", role: "Rising challenger", serve: "Placement then redirection", leak: "First-serve pop" },
  { name: "Katie Boulter", country: "GBR", style: "Home hard-court striker", role: "Home wildcard", serve: "First-serve + fight", leak: "Clay sliding defense" },
  { name: "Mccartney Kessler", country: "USA", style: "American hard-court", role: "Wildcard", serve: "Body serve + fight", leak: "Ace deficit vs top serve" },
  { name: "Ashlyn Krueger", country: "USA", style: "First-strike hard-court", role: "Rising challenger", serve: "T-serve then forehand", leak: "Return vs lefty slider" },
  { name: "Diana Marcinkevica", country: "LAT", style: "Qualifier fighter", role: "Wildcard", serve: "Placement first serve", leak: "Power deficit vs top-10" },
];

export function playerCode(name: string): string {
  const parts = name.trim().split(/\s+/);
  const last = parts[parts.length - 1] ?? name;
  const first = parts[0] ?? "";
  const letters = `${first.charAt(0)}${last.slice(0, 2)}`.replace(/[^A-Za-z]/g, "");
  return letters.toUpperCase().slice(0, 3) || "TBD";
}
