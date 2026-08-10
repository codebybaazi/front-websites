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
    name: "England tour of India, 2025",
    details: "England tour of India - 5 T20Is, 3 ODIs",
    matches: [
      {
        match: "1st T20I",
        teams: "India vs England",
        date: "Jan 22, Wed",
        venue: "Eden Gardens, Kolkata",
        details: "7:00 PM IST",
        slug: "ind-vs-eng-1st-t20i-2025"
      },
      {
        match: "2nd T20I",
        teams: "India vs England",
        date: "Jan 25, Sat",
        venue: "MA Chidambaram Stadium, Chennai",
        details: "7:00 PM IST",
        slug: "ind-vs-eng-2nd-t20i-2025"
      },
      {
        match: "3rd T20I",
        teams: "India vs England",
        date: "Jan 28, Tue",
        venue: "Arun Jaitley Stadium, Delhi",
        details: "7:00 PM IST",
        slug: "ind-vs-eng-3rd-t20i-2025"
      },
      {
        match: "4th T20I",
        teams: "India vs England",
        date: "Jan 31, Fri",
        venue: "Saurashtra Cricket Association Stadium, Rajkot",
        details: "7:00 PM IST",
        slug: "ind-vs-eng-4th-t20i-2025"
      },
      {
        match: "5th T20I",
        teams: "India vs England",
        date: "Feb 02, Sun",
        venue: "Wankhede Stadium, Mumbai",
        details: "7:00 PM IST",
        slug: "ind-vs-eng-5th-t20i-2025"
      },
      {
        match: "1st ODI",
        teams: "India vs England",
        date: "Feb 06, Thu",
        venue: "Vidarbha Cricket Association Stadium, Nagpur",
        details: "1:30 PM IST",
        slug: "ind-vs-eng-1st-odi-2025"
      },
      {
        match: "2nd ODI",
        teams: "India vs England",
        date: "Feb 09, Sun",
        venue: "Barabati Stadium, Cuttack",
        details: "1:30 PM IST",
        slug: "ind-vs-eng-2nd-odi-2025"
      },
      {
        match: "3rd ODI",
        teams: "India vs England",
        date: "Feb 12, Wed",
        venue: "Narendra Modi Stadium, Ahmedabad",
        details: "1:30 PM IST",
        slug: "ind-vs-eng-3rd-odi-2025"
      }
    ]
  },
  {
    name: "ICC Champions Trophy, 2025",
    details: "Feb 19 - Mar 09 • Elite 8-team ODI tournament",
    matches: [
      {
        match: "Match 1, Group A",
        teams: "Pakistan vs New Zealand",
        date: "Feb 19, Wed",
        venue: "National Stadium, Karachi",
        details: "2:30 PM IST",
        slug: "pak-vs-nz-ct25-m1"
      },
      {
        match: "Match 2, Group A",
        teams: "India vs Bangladesh",
        date: "Feb 20, Thu",
        venue: "Gaddafi Stadium, Lahore",
        details: "2:30 PM IST",
        slug: "ind-vs-ban-ct25-m2"
      },
      {
        match: "Match 3, Group B",
        teams: "Afghanistan vs South Africa",
        date: "Feb 21, Fri",
        venue: "Rawalpindi Cricket Stadium, Rawalpindi",
        details: "2:30 PM IST",
        slug: "afg-vs-sa-ct25-m3"
      },
      {
        match: "Match 4, Group B",
        teams: "Australia vs England",
        date: "Feb 22, Sat",
        venue: "Gaddafi Stadium, Lahore",
        details: "2:30 PM IST",
        slug: "aus-vs-eng-ct25-m4"
      },
      {
        match: "Match 9, Group A",
        teams: "India vs Pakistan",
        date: "Mar 01, Sat",
        venue: "Gaddafi Stadium, Lahore",
        details: "2:30 PM IST",
        slug: "ind-vs-pak-ct25-m9"
      },
      {
        match: "1st Semi-Final",
        teams: "TBC vs TBC",
        date: "Mar 05, Wed",
        venue: "National Stadium, Karachi",
        details: "2:30 PM IST",
        slug: "ct25-sf1"
      },
      {
        match: "2nd Semi-Final",
        teams: "TBC vs TBC",
        date: "Mar 06, Thu",
        venue: "Rawalpindi Cricket Stadium, Rawalpindi",
        details: "2:30 PM IST",
        slug: "ct25-sf2"
      },
      {
        match: "Final",
        teams: "TBC vs TBC",
        date: "Mar 09, Sun",
        venue: "Gaddafi Stadium, Lahore",
        details: "2:30 PM IST",
        slug: "ct25-final"
      }
    ]
  },
  {
    name: "Indian Premier League 2026",
    details: "Mar - May 2026 • 19th Edition of the IPL",
    matches: [
      {
        match: "Match 1",
        teams: "Chennai Super Kings vs Mumbai Indians",
        date: "Mar 22, Sun",
        venue: "MA Chidambaram Stadium, Chennai",
        details: "7:30 PM IST",
        slug: "csk-vs-mi-ipl-2026"
      },
      {
        match: "Match 2",
        teams: "Royal Challengers Bengaluru vs Kolkata Knight Riders",
        date: "Mar 23, Mon",
        venue: "M. Chinnaswamy Stadium, Bengaluru",
        details: "7:30 PM IST",
        slug: "rcb-vs-kkr-ipl-2026"
      }
    ]
  },
  {
    name: "ICC T20 World Cup 2026",
    details: "Oct - Nov 2026 • Co-hosted by India & Sri Lanka",
    matches: [
      {
        match: "Group Stage",
        teams: "India vs Pakistan",
        date: "Oct 24, Sat",
        venue: "Eden Gardens, Kolkata",
        details: "High-Voltage Clash",
        slug: "india-vs-pakistan-t20-world-cup-2026"
      },
      {
        match: "Final",
        teams: "TBC vs TBC",
        date: "Nov 15, Sun",
        venue: "Narendra Modi Stadium, Ahmedabad",
        details: "Championship Match",
        slug: "t20-wc-2026-final"
      }
    ]
  }
];