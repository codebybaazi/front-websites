export interface CricketSeries {
  name: string;
  details: string;
  matches: {
    match: string;
    teams: string;
    date: string;
    venue: string;
    details: string;
    slug: string;
  }[];
}

export const cricketFixtures: CricketSeries[] = [
  {
    name: "South Africa vs Pakistan, 2024-25",
    details: "Pakistan tour of South Africa - 3 T20Is, 3 ODIs, 2 Tests",
    matches: [
      {
        match: "1st T20I",
        teams: "South Africa vs Pakistan",
        date: "Dec 10, Tue",
        venue: "Kingsmead, Durban",
        details: "Pakistan won by 4 wickets",
        slug: "sa-vs-pak-1st-t20i-2024"
      },
      {
        match: "2nd T20I",
        teams: "South Africa vs Pakistan",
        date: "Dec 13, Fri",
        venue: "SuperSport Park, Centurion",
        details: "Pakistan won by 27 runs",
        slug: "sa-vs-pak-2nd-t20i-2024"
      },
      {
        match: "3rd T20I",
        teams: "South Africa vs Pakistan",
        date: "Dec 14, Sat",
        venue: "The Wanderers Stadium, Johannesburg",
        details: "South Africa won by 10 wickets",
        slug: "sa-vs-pak-3rd-t20i-2024"
      }
    ]
  },
  {
    name: "ICC Champions Trophy 2025",
    details: "Elite 8-team tournament featuring the top ODI nations.",
    matches: [
      {
        match: "Match 1",
        teams: "Pakistan vs New Zealand",
        date: "Feb 19, Wed",
        venue: "National Stadium, Karachi",
        details: "Group A",
        slug: "pak-vs-nz-ct-2025"
      },
      {
        match: "Match 2",
        teams: "India vs Bangladesh",
        date: "Feb 20, Thu",
        venue: "Gaddafi Stadium, Lahore",
        details: "Group A",
        slug: "ind-vs-ban-ct-2025"
      },
      {
        match: "Match 3",
        teams: "Afghanistan vs South Africa",
        date: "Feb 21, Fri",
        venue: "Rawalpindi Cricket Stadium, Rawalpindi",
        details: "Group B",
        slug: "afg-vs-sa-ct-2025"
      },
      {
        match: "Match 4",
        teams: "Australia vs England",
        date: "Feb 22, Sat",
        venue: "Gaddafi Stadium, Lahore",
        details: "Group B",
        slug: "aus-vs-eng-ct-2025"
      },
      {
        match: "Match 9",
        teams: "India vs Pakistan",
        date: "Mar 01, Sat",
        venue: "Gaddafi Stadium, Lahore",
        details: "Group A",
        slug: "ind-vs-pak-ct-2025"
      }
    ]
  },
  {
    name: "Indian Premier League 2026",
    details: "The 19th edition of the world's premier T20 league.",
    matches: [
      {
        match: "Match 1",
        teams: "Chennai Super Kings vs Mumbai Indians",
        date: "Mar 22, Sun",
        venue: "MA Chidambaram Stadium, Chennai",
        details: "IPL 2026 Opener",
        slug: "csk-vs-mi-ipl-2026"
      },
      {
        match: "Match 2",
        teams: "Royal Challengers Bengaluru vs Kolkata Knight Riders",
        date: "Mar 23, Mon",
        venue: "M. Chinnaswamy Stadium, Bengaluru",
        details: "League Match",
        slug: "rcb-vs-kkr-ipl-2026"
      }
    ]
  },
  {
    name: "India vs Australia ODI Series 2026",
    details: "3-match ODI series ahead of the T20 World Cup.",
    matches: [
      {
        match: "3rd ODI",
        teams: "India vs Australia",
        date: "Feb 08, Sun",
        venue: "Wankhede Stadium, Mumbai",
        details: "Live Analysis",
        slug: "india-vs-australia-3rd-odi-2026"
      }
    ]
  },
  {
    name: "England vs South Africa Test Series 2026",
    details: "Iconic Test series played across English grounds.",
    matches: [
      {
        match: "1st Test",
        teams: "England vs South Africa",
        date: "Jul 10, Fri",
        venue: "Lord's, London",
        details: "Day 1",
        slug: "england-vs-south-africa-test-2026"
      }
    ]
  },
  {
    name: "ICC T20 World Cup 2026",
    details: "Co-hosted by India & Sri Lanka. 20 teams competing for glory.",
    matches: [
      {
        match: "Group Stage",
        teams: "India vs Pakistan",
        date: "Oct 24, Sat",
        venue: "Eden Gardens, Kolkata",
        details: "High-Voltage Clash",
        slug: "india-vs-pakistan-t20-world-cup-2026"
      }
    ]
  }
];