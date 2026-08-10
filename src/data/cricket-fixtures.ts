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
    name: "Afghanistan tour of Ireland, 2026",
    details: "Ireland vs Afghanistan - 1 Test, 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "Only Test",
        teams: "Ireland vs Afghanistan",
        date: "Apr 2026",
        venue: "Stormont, Belfast",
        details: "Upcoming",
        slug: "ire-vs-afg-test-2026"
      }
    ]
  },
  {
    name: "India tour of Zimbabwe, 2026",
    details: "Zimbabwe vs India - 1 Test, 3 ODIs",
    matches: [
      {
        match: "Only Test",
        teams: "Zimbabwe vs India",
        date: "Jun 2026",
        venue: "Harare Sports Club, Harare",
        details: "Upcoming",
        slug: "zim-vs-ind-test-2026"
      }
    ]
  },
  {
    name: "Pakistan tour of West Indies, 2026",
    details: "West Indies vs Pakistan - 3 Tests, 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st Test",
        teams: "West Indies vs Pakistan",
        date: "May 2026",
        venue: "Sabina Park, Kingston",
        details: "Upcoming",
        slug: "wi-vs-pak-1st-test-2026"
      }
    ]
  },
  {
    name: "India tour of England, 2026",
    details: "England vs India - 5 Tests (Pataudi Trophy)",
    matches: [
      {
        match: "1st Test",
        teams: "England vs India",
        date: "Jun 20, 2026",
        venue: "Lord's, London",
        details: "Upcoming",
        slug: "eng-vs-ind-1st-test-2026"
      },
      {
        match: "2nd Test",
        teams: "England vs India",
        date: "Jul 02, 2026",
        venue: "The Oval, London",
        details: "Upcoming",
        slug: "eng-vs-ind-2nd-test-2026"
      },
      {
        match: "3rd Test",
        teams: "England vs India",
        date: "Jul 15, 2026",
        venue: "Old Trafford, Manchester",
        details: "Upcoming",
        slug: "eng-vs-ind-3rd-test-2026"
      },
      {
        match: "4th Test",
        teams: "England vs India",
        date: "Jul 28, 2026",
        venue: "Trent Bridge, Nottingham",
        details: "Upcoming",
        slug: "eng-vs-ind-4th-test-2026"
      },
      {
        match: "5th Test",
        teams: "England vs India",
        date: "Aug 10, 2026",
        venue: "Edgbaston, Birmingham",
        details: "Upcoming",
        slug: "eng-vs-ind-5th-test-2026"
      }
    ]
  },
  {
    name: "West Indies tour of India, 2026",
    details: "India vs West Indies - 3 Tests, 5 ODIs",
    matches: [
      {
        match: "1st Test",
        teams: "India vs West Indies",
        date: "Sep 2026",
        venue: "Narendra Modi Stadium, Ahmedabad",
        details: "Upcoming",
        slug: "ind-vs-wi-1st-test-2026"
      }
    ]
  },
  {
    name: "Australia tour of South Africa, 2026",
    details: "South Africa vs Australia - 3 Tests, 3 ODIs",
    matches: [
      {
        match: "1st Test",
        teams: "South Africa vs Australia",
        date: "Sep 2026",
        venue: "Wanderers Stadium, Johannesburg",
        details: "Upcoming",
        slug: "sa-vs-aus-1st-test-2026"
      }
    ]
  },
  {
    name: "Pakistan tour of England, 2026",
    details: "England vs Pakistan - 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st ODI",
        teams: "England vs Pakistan",
        date: "May 2026",
        venue: "Old Trafford, Manchester",
        details: "Upcoming",
        slug: "eng-vs-pak-1st-odi-2026"
      }
    ]
  },
  {
    name: "India tour of Sri Lanka, 2026",
    details: "Sri Lanka vs India - 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st T20I",
        teams: "Sri Lanka vs India",
        date: "Jul 2026",
        venue: "R.Premadasa Stadium, Colombo",
        details: "Upcoming",
        slug: "sl-vs-ind-1st-t20i-2026"
      }
    ]
  },
  {
    name: "England tour of Australia, 2026-27 (The Ashes)",
    details: "Australia vs England - 5 Tests",
    matches: [
      {
        match: "1st Test",
        teams: "Australia vs England",
        date: "Nov 2026",
        venue: "The Gabba, Brisbane",
        details: "Upcoming",
        slug: "aus-vs-eng-1st-test-ashes-2026"
      }
    ]
  },
  {
    name: "India tour of New Zealand, 2026-27",
    details: "New Zealand vs India - 2 Tests, 3 ODIs, 5 T20Is",
    matches: [
      {
        match: "1st Test",
        teams: "New Zealand vs India",
        date: "Dec 2026",
        venue: "Eden Park, Auckland",
        details: "Upcoming",
        slug: "nz-vs-ind-1st-test-2026"
      }
    ]
  },
  {
    name: "Australia tour of India, 2027",
    details: "India vs Australia - 5 Tests (Border-Gavaskar Trophy)",
    matches: [
      {
        match: "1st Test",
        teams: "India vs Australia",
        date: "Feb 2027",
        venue: "Wankhede Stadium, Mumbai",
        details: "Upcoming",
        slug: "ind-vs-aus-1st-test-2027"
      }
    ]
  }
];