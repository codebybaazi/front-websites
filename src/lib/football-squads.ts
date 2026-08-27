export interface FootballPlayer {
  name: string;
  role: string;
  note: string;
}

export const FOOTBALL_SQUADS: Record<string, FootballPlayer[]> = {
  Mexico: [
    { name: "Hirving Lozano", role: "Winger", note: "Captain & creator — anytime assist is prime value." },
    { name: "Raúl Jiménez", role: "Striker", note: "Number 9 — first and last goalscorer markets." },
    { name: "Jorge Sánchez", role: "Right-back", note: "Overlaps feed corners won and crossing lanes." },
  ],
  "South Africa": [
    { name: "Themba Zwane", role: "Attacking Midfielder", note: "Half-space playmaker — live BTTS trigger from set pieces." },
    { name: "Ronwen Williams", role: "Goalkeeper", note: "Second-half save spike — under 2.5 looks live if they trail." },
    { name: "Njabulo Ngcobo", role: "Centre-back", note: "Aerial leader — cards when tempo lifts past 70 minutes." },
  ],
  "Korea Republic": [
    { name: "Son Heung-min", role: "Forward", note: "Transition finisher — anytime scorer at short price." },
    { name: "Lee Kang-in", role: "Attacking Midfielder", note: "Set-piece delivery and late-box arrivals." },
    { name: "Kim Min-jae", role: "Centre-back", note: "Progressive passing from the back — cards low, duels high." },
  ],
  Czechia: [
    { name: "Patrik Schick", role: "Striker", note: "Target 9 — first goalscorer if they sit in a mid-block." },
    { name: "Tomáš Souček", role: "Midfielder", note: "Box arrivals and yellow-card volume." },
    { name: "Vladimír Coufal", role: "Right-back", note: "Crossing volume feeds corners and assists." },
  ],
  Canada: [
    { name: "Alphonso Davies", role: "Wing-back", note: "Transition engine — shots, assists, and cards in one profile." },
    { name: "Jonathan David", role: "Striker", note: "Pressing 9 — anytime scorer on the host bounce." },
    { name: "Stephen Eustáquio", role: "Midfielder", note: "Tempo setter — under-priced for assists." },
  ],
  "Bosnia and Herzegovina": [
    { name: "Edin Džeko", role: "Striker", note: "Hold-up 9 — last-goal markets if the game opens." },
    { name: "Ermin Bičakčić", role: "Centre-back", note: "Set-piece threat and card risk after 60." },
    { name: "Amer Gojak", role: "Attacking Midfielder", note: "Late shots from the edge — BTTS live trigger." },
  ],
  Spain: [
    { name: "Pedri", role: "Midfielder", note: "Progression hub — assist + under 2.5 midfield angle." },
    { name: "Álvaro Morata", role: "Striker", note: "Poacher — first goalscorer on territorial spells." },
    { name: "Lamine Yamal", role: "Winger", note: "1v1 creator — shots on target and corners won." },
  ],
  Algeria: [
    { name: "Riyad Mahrez", role: "Winger", note: "Dead-ball specialist — first goal + corners." },
    { name: "Islam Slimani", role: "Striker", note: "Aerial 9 — anytime scorer on crosses." },
    { name: "Aïssa Mandi", role: "Centre-back", note: "Line-stepper — cards if the press is broken." },
  ],
  Haiti: [
    { name: "Duckens Nazon", role: "Striker", note: "Channel runner — upset anytime scorer price." },
    { name: "Derrick Etienne", role: "Winger", note: "Transition threat — shots from the left half-space." },
    { name: "Johann Bonose", role: "Midfielder", note: "Press trigger — bookings if they chase the game." },
  ],
  Scotland: [
    { name: "John McGinn", role: "Midfielder", note: "Box-to-box — shots, cards, and late goals." },
    { name: "Lyndon Dykes", role: "Striker", note: "Aerial target — first goal if they load the box." },
    { name: "Andrew Robertson", role: "Left-back", note: "Crossing volume — assists and corners." },
  ],
  Brazil: [
    { name: "Vinícius Júnior", role: "Winger", note: "1v1 destroyer — anytime scorer at tournament price." },
    { name: "Rodrygo", role: "Forward", note: "Second-wave finisher — last-goal markets." },
    { name: "Bruno Guimarães", role: "Midfielder", note: "Progression + fouls drawn — cards under." },
  ],
  Morocco: [
    { name: "Achraf Hakimi", role: "Right-back", note: "Overlaps and shots — assist + corners." },
    { name: "Youssef En-Nesyri", role: "Striker", note: "Aerial 9 — first goalscorer on set pieces." },
    { name: "Sofyan Amrabat", role: "Midfielder", note: "Destroyer — yellows if the tempo lifts." },
  ],
  USA: [
    { name: "Christian Pulisic", role: "Winger", note: "Host talisman — anytime scorer and assists." },
    { name: "Weston McKennie", role: "Midfielder", note: "Box arrivals — shots and cards." },
    { name: "Tim Ream", role: "Centre-back", note: "Organiser — clean-sheet angle if they score first." },
  ],
  Paraguay: [
    { name: "Miguel Almirón", role: "Winger", note: "Transition runner — shots on target." },
    { name: "Antonio Sanabria", role: "Striker", note: "Poacher — anytime scorer if they sit deep." },
    { name: "Gustavo Gómez", role: "Centre-back", note: "Set-piece captain — cards and headed chances." },
  ],
  Australia: [
    { name: "Ajdin Hrustic", role: "Attacking Midfielder", note: "Shot from range — BTTS live if the block breaks." },
    { name: "Jamie Maclaren", role: "Striker", note: "Penalty-box 9 — first goalscorer." },
    { name: "Harry Souttar", role: "Centre-back", note: "Aerial magnet — clean sheet or card." },
  ],
  Turkey: [
    { name: "Hakan Çalhanoğlu", role: "Midfielder", note: "Set-piece captain — first goal + corners." },
    { name: "Cenk Tosun", role: "Striker", note: "Hold-up 9 — last-goal markets." },
    { name: "Kaan Ayhan", role: "Centre-back", note: "Progressive CB — yellows on counters." },
  ],
  Germany: [
    { name: "Jamal Musiala", role: "Attacking Midfielder", note: "Carry threat — anytime scorer at value." },
    { name: "Kai Havertz", role: "Forward", note: "Late box runs — last-goal markets." },
    { name: "Joshua Kimmich", role: "Midfielder", note: "Tempo + set pieces — assists and corners." },
  ],
  Ghana: [
    { name: "Mohammed Kudus", role: "Forward", note: "Dribble-and-shoot — anytime scorer." },
    { name: "Thomas Partey", role: "Midfielder", note: "Destroyer — cards if they chase." },
    { name: "Iñaki Williams", role: "Winger", note: "Transition lanes — shots on target." },
  ],
  Japan: [
    { name: "Takefusa Kubo", role: "Winger", note: "1v1 creator — assists and corners." },
    { name: "Ayase Ueda", role: "Striker", note: "Poacher — first goalscorer." },
    { name: "Wataru Endo", role: "Midfielder", note: "Screen — under 2.5 midfield angle." },
  ],
  Norway: [
    { name: "Erling Haaland", role: "Striker", note: "Elite 9 — anytime and first goalscorer." },
    { name: "Martin Ødegaard", role: "Attacking Midfielder", note: "Creator — assists at short price." },
    { name: "Alexander Sørloth", role: "Forward", note: "Second striker — last-goal markets." },
  ],
  France: [
    { name: "Kylian Mbappé", role: "Forward", note: "Tournament favourite scorer — anytime + first." },
    { name: "Ousmane Dembélé", role: "Winger", note: "Width and shots — corners won." },
    { name: "Aurélien Tchouaméni", role: "Midfielder", note: "Cover — cards low, duels high." },
  ],
  Senegal: [
    { name: "Sadio Mané", role: "Forward", note: "Pressing runner — anytime scorer." },
    { name: "Ismaïla Sarr", role: "Winger", note: "Transition — shots and assists." },
    { name: "Kalidou Koulibaly", role: "Centre-back", note: "Aerial wall — clean-sheet angle." },
  ],
  Ecuador: [
    { name: "Moises Caicedo", role: "Midfielder", note: "Destroyer — cards if the press is beaten." },
    { name: "Enner Valencia", role: "Striker", note: "Channel 9 — first goalscorer." },
    { name: "Piero Hincapié", role: "Centre-back", note: "Step-in CB — progressive carries." },
  ],
  Qatar: [
    { name: "Akram Afif", role: "Winger", note: "Creator — assists and corners." },
    { name: "Almoez Ali", role: "Striker", note: "Poacher — anytime scorer as underdog." },
    { name: "Boualem Khoukhi", role: "Centre-back", note: "Organiser — set-piece danger." },
  ],
  Argentina: [
    { name: "Lionel Messi", role: "Attacking Midfielder", note: "Creator-finisher — anytime + assist combo." },
    { name: "Julián Álvarez", role: "Striker", note: "Pressing 9 — last-goal markets." },
    { name: "Rodrigo De Paul", role: "Midfielder", note: "Tempo — fouls drawn and cards." },
  ],
  "Ivory Coast": [
    { name: "Sébastien Haller", role: "Striker", note: "Target 9 — first goalscorer." },
    { name: "Franck Kessié", role: "Midfielder", note: "Box-to-box — shots and yellows." },
    { name: "Nicolas Pépé", role: "Winger", note: "1v1 — corners and shots." },
  ],
  Netherlands: [
    { name: "Cody Gakpo", role: "Forward", note: "Half-space finisher — anytime scorer." },
    { name: "Frenkie de Jong", role: "Midfielder", note: "Progression — assists under the radar." },
    { name: "Virgil van Dijk", role: "Centre-back", note: "Set-piece captain — clean sheet or headed goal." },
  ],
  Uzbekistan: [
    { name: "Eldor Shomurodov", role: "Striker", note: "Runner 9 — upset anytime scorer." },
    { name: "Otabek Shukurov", role: "Midfielder", note: "Shots from range — BTTS live." },
    { name: "Husniddin Aliqulov", role: "Centre-back", note: "Aerial — cards after 70." },
  ],
  England: [
    { name: "Harry Kane", role: "Striker", note: "Complete 9 — anytime, first, and last." },
    { name: "Bukayo Saka", role: "Winger", note: "Creator — assists and corners." },
    { name: "Declan Rice", role: "Midfielder", note: "Screen — under 2.5 and cards under." },
  ],
  Egypt: [
    { name: "Mohamed Salah", role: "Forward", note: "Elite winger — anytime scorer." },
    { name: "Omar Marmoush", role: "Forward", note: "Second wave — last-goal markets." },
    { name: "Mohamed Elneny", role: "Midfielder", note: "Anchor — yellows if they sit in." },
  ],
  Colombia: [
    { name: "Luis Díaz", role: "Winger", note: "Carry threat — shots and assists." },
    { name: "James Rodríguez", role: "Attacking Midfielder", note: "Set pieces — first goal + corners." },
    { name: "Davinson Sánchez", role: "Centre-back", note: "Duels — cards on counters." },
  ],
  "New Zealand": [
    { name: "Chris Wood", role: "Striker", note: "Target 9 — first goalscorer as underdog." },
    { name: "Matthew Garbett", role: "Midfielder", note: "Late shots — BTTS live." },
    { name: "Winston Reid", role: "Centre-back", note: "Aerial — set-piece danger." },
  ],
  Portugal: [
    { name: "Cristiano Ronaldo", role: "Striker", note: "Penalty and poacher — anytime + last." },
    { name: "Bruno Fernandes", role: "Attacking Midfielder", note: "Creator — assists and shots." },
    { name: "Rúben Dias", role: "Centre-back", note: "Organiser — clean-sheet angle." },
  ],
  Nigeria: [
    { name: "Victor Osimhen", role: "Striker", note: "Elite 9 — anytime scorer." },
    { name: "Ademola Lookman", role: "Forward", note: "Inside forward — shots on target." },
    { name: "William Troost-Ekong", role: "Centre-back", note: "Aerial — cards and headed chances." },
  ],
  Uruguay: [
    { name: "Darwin Núñez", role: "Striker", note: "Channel runner — anytime scorer." },
    { name: "Federico Valverde", role: "Midfielder", note: "Range shots — BTTS live." },
    { name: "José María Giménez", role: "Centre-back", note: "Aggressive CB — yellows." },
  ],
  Iran: [
    { name: "Mehdi Taremi", role: "Striker", note: "Link 9 — first goalscorer." },
    { name: "Sardar Azmoun", role: "Forward", note: "Poacher — last-goal markets." },
    { name: "Alireza Jahanbakhsh", role: "Winger", note: "Set pieces — corners and shots." },
  ],
  Belgium: [
    { name: "Kevin De Bruyne", role: "Attacking Midfielder", note: "Creator — assists at tournament price." },
    { name: "Romelu Lukaku", role: "Striker", note: "Target 9 — anytime scorer." },
    { name: "Wout Faes", role: "Centre-back", note: "Duels — cards if they chase." },
  ],
  Panama: [
    { name: "Cecilio Waterman", role: "Striker", note: "Hold-up — upset anytime scorer." },
    { name: "Aníbal Godoy", role: "Midfielder", note: "Destroyer — yellows." },
    { name: "Michael Amir Murillo", role: "Right-back", note: "Overlaps — corners and shots." },
  ],
  Croatia: [
    { name: "Luka Modrić", role: "Midfielder", note: "Tempo — assists from deep." },
    { name: "Andrej Kramarić", role: "Forward", note: "Late runs — last-goal markets." },
    { name: "Josko Gvardiol", role: "Centre-back", note: "Progressive CB — clean sheet or carry." },
  ],
  "Saudi Arabia": [
    { name: "Salem Al-Dawsari", role: "Winger", note: "Upset creator — shots and assists." },
    { name: "Saleh Al-Shehri", role: "Striker", note: "Poacher — first goalscorer." },
    { name: "Ali Al-Bulaihi", role: "Centre-back", note: "Aerial — cards after 70." },
  ],
  Italy: [
    { name: "Nicolo Barella", role: "Midfielder", note: "Box-to-box — shots and cards." },
    { name: "Gianluca Scamacca", role: "Striker", note: "Target 9 — anytime scorer." },
    { name: "Alessandro Bastoni", role: "Centre-back", note: "Build-up CB — clean-sheet angle." },
  ],
  Jamaica: [
    { name: "Leon Bailey", role: "Winger", note: "Transition — shots on target." },
    { name: "Michail Antonio", role: "Striker", note: "Channel 9 — first goalscorer." },
    { name: "Ethan Pinnock", role: "Centre-back", note: "Aerial — set-piece danger." },
  ],
  Switzerland: [
    { name: "Granit Xhaka", role: "Midfielder", note: "Tempo — fouls and cards." },
    { name: "Breel Embolo", role: "Striker", note: "Runner 9 — anytime scorer." },
    { name: "Manuel Akanji", role: "Centre-back", note: "Cover — clean-sheet angle." },
  ],
  Jordan: [
    { name: "Musa Al-Taamari", role: "Winger", note: "1v1 — shots and corners." },
    { name: "Yazan Al-Naimat", role: "Striker", note: "Poacher — anytime scorer as underdog." },
    { name: "Yazan Al-Arab", role: "Centre-back", note: "Organiser — cards on counters." },
  ],
  Denmark: [
    { name: "Christian Eriksen", role: "Attacking Midfielder", note: "Creator — assists and set pieces." },
    { name: "Rasmus Højlund", role: "Striker", note: "Runner 9 — anytime scorer." },
    { name: "Andreas Christensen", role: "Centre-back", note: "Line CB — clean-sheet angle." },
  ],
  "Costa Rica": [
    { name: "Joel Campbell", role: "Forward", note: "Channel runner — shots." },
    { name: "Manfred Ugalde", role: "Striker", note: "Poacher — first goalscorer." },
    { name: "Óscar Duarte", role: "Centre-back", note: "Aerial — cards and headed chances." },
  ],
  Austria: [
    { name: "Marcel Sabitzer", role: "Midfielder", note: "Shots from range — BTTS live." },
    { name: "Marko Arnautović", role: "Striker", note: "Link 9 — anytime scorer." },
    { name: "David Alaba", role: "Centre-back", note: "Progressive CB — set pieces." },
  ],
  Tunisia: [
    { name: "Youssef Msakni", role: "Winger", note: "Creator — assists and corners." },
    { name: "Issam Jebali", role: "Striker", note: "Hold-up — first goalscorer." },
    { name: "Dylan Bronn", role: "Centre-back", note: "Duels — yellows." },
  ],
  "Man City": [
    { name: "Erling Haaland", role: "Striker", note: "Elite 9 — anytime and first goalscorer." },
    { name: "Phil Foden", role: "Attacking Midfielder", note: "Half-space — assists and shots." },
    { name: "Rodri", role: "Midfielder", note: "Control — under 2.5 if they score first." },
  ],
  Liverpool: [
    { name: "Mohamed Salah", role: "Forward", note: "Elite winger — anytime scorer." },
    { name: "Alexis Mac Allister", role: "Midfielder", note: "Progression — assists." },
    { name: "Virgil van Dijk", role: "Centre-back", note: "Set-piece captain — clean sheet." },
  ],
  Arsenal: [
    { name: "Bukayo Saka", role: "Winger", note: "Creator — assists and corners." },
    { name: "Kai Havertz", role: "Forward", note: "Late box — last-goal markets." },
    { name: "Declan Rice", role: "Midfielder", note: "Screen — cards under." },
  ],
  Chelsea: [
    { name: "Cole Palmer", role: "Attacking Midfielder", note: "Shot + set piece — anytime scorer." },
    { name: "Nicolas Jackson", role: "Striker", note: "Runner 9 — first goalscorer." },
    { name: "Moisés Caicedo", role: "Midfielder", note: "Destroyer — yellows." },
  ],
  "Man Utd": [
    { name: "Bruno Fernandes", role: "Attacking Midfielder", note: "Creator — assists and shots." },
    { name: "Rasmus Højlund", role: "Striker", note: "Channel 9 — anytime scorer." },
    { name: "Lisandro Martínez", role: "Centre-back", note: "Aggressive CB — cards." },
  ],
};

export function resolveFootballSquad(teamName: string): FootballPlayer[] {
  const exact = FOOTBALL_SQUADS[teamName];
  if (exact) return exact;
  const key = Object.keys(FOOTBALL_SQUADS).find(
    (name) => name.toLowerCase() === teamName.toLowerCase() || teamName.toLowerCase().includes(name.toLowerCase()),
  );
  if (key && FOOTBALL_SQUADS[key]) return FOOTBALL_SQUADS[key];
  return [
    { name: `${teamName} No. 9`, role: "Striker", note: "Primary finisher — anytime scorer market." },
    { name: `${teamName} No. 10`, role: "Attacking Midfielder", note: "Creator — assists and set pieces." },
    { name: `${teamName} No. 4`, role: "Centre-back", note: "Organiser — cards and aerials." },
  ];
}
