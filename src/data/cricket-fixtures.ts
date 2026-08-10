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
        match: "1st T20I",
        teams: "Ireland vs Afghanistan",
        date: "Aug 20, 2026",
        venue: "Stormont, Belfast",
        details: "Match Details",
        slug: "ire-vs-afg-1st-t20i-2026"
      },
      {
        match: "2nd T20I",
        teams: "Ireland vs Afghanistan",
        date: "Aug 22, 2026",
        venue: "Stormont, Belfast",
        details: "Match Details",
        slug: "ire-vs-afg-2nd-t20i-2026"
      },
      {
        match: "3rd T20I",
        teams: "Ireland vs Afghanistan",
        date: "Aug 24, 2026",
        venue: "Stormont, Belfast",
        details: "Match Details",
        slug: "ire-vs-afg-3rd-t20i-2026"
      },
      {
        match: "1st ODI",
        teams: "Ireland vs Afghanistan",
        date: "Aug 27, 2026",
        venue: "Stormont, Belfast",
        details: "Match Details",
        slug: "ire-vs-afg-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "Ireland vs Afghanistan",
        date: "Aug 29, 2026",
        venue: "Stormont, Belfast",
        details: "Match Details",
        slug: "ire-vs-afg-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "Ireland vs Afghanistan",
        date: "Aug 31, 2026",
        venue: "Stormont, Belfast",
        details: "Match Details",
        slug: "ire-vs-afg-3rd-odi-2026"
      },
      {
        match: "Only Test",
        teams: "Ireland vs Afghanistan",
        date: "Sep 04-08, 2026",
        venue: "Stormont, Belfast",
        details: "Match Details",
        slug: "ire-vs-afg-test-2026"
      }
    ]
  },
  {
    name: "India tour of Zimbabwe, 2026",
    details: "Zimbabwe vs India - 5 ODIs",
    matches: [
      {
        match: "1st ODI",
        teams: "Zimbabwe vs India",
        date: "Jul 11, 2026",
        venue: "Harare Sports Club, Harare",
        details: "Match Details",
        slug: "zim-vs-ind-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "Zimbabwe vs India",
        date: "Jul 13, 2026",
        venue: "Harare Sports Club, Harare",
        details: "Match Details",
        slug: "zim-vs-ind-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "Zimbabwe vs India",
        date: "Jul 15, 2026",
        venue: "Harare Sports Club, Harare",
        details: "Match Details",
        slug: "zim-vs-ind-3rd-odi-2026"
      },
      {
        match: "4th ODI",
        teams: "Zimbabwe vs India",
        date: "Jul 17, 2026",
        venue: "Harare Sports Club, Harare",
        details: "Match Details",
        slug: "zim-vs-ind-4th-odi-2026"
      },
      {
        match: "5th ODI",
        teams: "Zimbabwe vs India",
        date: "Jul 19, 2026",
        venue: "Harare Sports Club, Harare",
        details: "Match Details",
        slug: "zim-vs-ind-5th-odi-2026"
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
        details: "Upcoming Series",
        slug: "wi-vs-pak-1st-test-2026"
      }
    ]
  },
  {
    name: "Bangladesh tour of Zimbabwe, 2026",
    details: "Zimbabwe vs Bangladesh - 2 Tests, 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st Test",
        teams: "Zimbabwe vs Bangladesh",
        date: "Jul 2026",
        venue: "Queens Sports Club, Bulawayo",
        details: "Upcoming Series",
        slug: "zim-vs-ban-1st-test-2026"
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
        details: "Upcoming Series",
        slug: "eng-vs-ind-1st-test-2026"
      },
      {
        match: "2nd Test",
        teams: "England vs India",
        date: "Jul 02, 2026",
        venue: "The Oval, London",
        details: "Upcoming Series",
        slug: "eng-vs-ind-2nd-test-2026"
      },
      {
        match: "3rd Test",
        teams: "England vs India",
        date: "Jul 15, 2026",
        venue: "Old Trafford, Manchester",
        details: "Upcoming Series",
        slug: "eng-vs-ind-3rd-test-2026"
      },
      {
        match: "4th Test",
        teams: "England vs India",
        date: "Jul 28, 2026",
        venue: "Trent Bridge, Nottingham",
        details: "Upcoming Series",
        slug: "eng-vs-ind-4th-test-2026"
      },
      {
        match: "5th Test",
        teams: "England vs India",
        date: "Aug 10, 2026",
        venue: "Edgbaston, Birmingham",
        details: "Upcoming Series",
        slug: "eng-vs-ind-5th-test-2026"
      }
    ]
  },
  {
    name: "New Zealand tour of West Indies, 2026",
    details: "West Indies vs New Zealand - 2 Tests, 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st Test",
        teams: "West Indies vs New Zealand",
        date: "Jun 2026",
        venue: "Kensington Oval, Barbados",
        details: "Upcoming Series",
        slug: "wi-vs-nz-1st-test-2026"
      }
    ]
  },
  {
    name: "ICC T20 World Cup Europe Qualifier B, 2026",
    details: "Path to T20 World Cup 2028 Qualifiers",
    matches: [
      {
        match: "Group Stage",
        teams: "TBC vs TBC",
        date: "Jul 2026",
        venue: "Various, Germany",
        details: "Qualifier Event",
        slug: "t20-wc-eur-qual-b-2026"
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
        details: "Upcoming Series",
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
        details: "Upcoming Series",
        slug: "sa-vs-aus-1st-test-2026"
      }
    ]
  },
  {
    name: "Sri Lanka tour of England, 2026",
    details: "England vs Sri Lanka - 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st ODI",
        teams: "England vs Sri Lanka",
        date: "Sep 2026",
        venue: "The Rose Bowl, Southampton",
        details: "Upcoming Series",
        slug: "eng-vs-sl-1st-odi-2026"
      }
    ]
  },
  {
    name: "Australia tour of Zimbabwe, 2026",
    details: "Zimbabwe vs Australia - 3 ODIs",
    matches: [
      {
        match: "1st ODI",
        teams: "Zimbabwe vs Australia",
        date: "Oct 2026",
        venue: "Harare Sports Club, Harare",
        details: "Upcoming Series",
        slug: "zim-vs-aus-1st-odi-2026"
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
        details: "Upcoming Series",
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
        details: "Upcoming Series",
        slug: "sl-vs-ind-1st-t20i-2026"
      }
    ]
  },
  {
    name: "Bangladesh tour of Australia, 2026",
    details: "Australia vs Bangladesh - 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st ODI",
        teams: "Australia vs Bangladesh",
        date: "Aug 2026",
        venue: "TBC, Australia",
        details: "Upcoming Series",
        slug: "aus-vs-ban-1st-odi-2026"
      }
    ]
  },
  {
    name: "Bangladesh tour of South Africa, 2026",
    details: "South Africa vs Bangladesh - 2 Tests, 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st Test",
        teams: "South Africa vs Bangladesh",
        date: "Oct 2026",
        venue: "Kingsmead, Durban",
        details: "Upcoming Series",
        slug: "sa-vs-ban-1st-test-2026"
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
        details: "Upcoming Series",
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
        details: "Upcoming Series",
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
        details: "Upcoming Series",
        slug: "ind-vs-aus-1st-test-2027"
      }
    ]
  },
  {
    name: "Australia vs England 150th Anniversary Test, 2027",
    details: "One-off Test Match celebrating 150 years of Test Cricket",
    matches: [
      {
        match: "Anniversary Test",
        teams: "Australia vs England",
        date: "Mar 2027",
        venue: "MCG, Melbourne",
        details: "Historic Match",
        slug: "aus-vs-eng-150th-test-2027"
      }
    ]
  },
  {
    name: "Sri Lanka tour of New Zealand, 2027",
    details: "New Zealand vs Sri Lanka - 2 Tests, 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st Test",
        teams: "New Zealand vs Sri Lanka",
        date: "Mar 2027",
        venue: "Hagley Oval, Christchurch",
        details: "Upcoming Series",
        slug: "nz-vs-sl-1st-test-2027"
      }
    ]
  },
  {
    name: "Zimbabwe tour of India, 2027",
    details: "India vs Zimbabwe - 1 Test, 3 ODIs",
    matches: [
      {
        match: "Only Test",
        teams: "India vs Zimbabwe",
        date: "Mar 2027",
        venue: "TBC, India",
        details: "Upcoming Series",
        slug: "ind-vs-zim-test-2027"
      }
    ]
  },
  {
    name: "New Zealand tour of Australia, 2026-27",
    details: "Australia vs New Zealand - 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st ODI",
        teams: "Australia vs New Zealand",
        date: "Jan 2027",
        venue: "SCG, Sydney",
        details: "Upcoming Series",
        slug: "aus-vs-nz-1st-odi-2027"
      }
    ]
  },
  {
    name: "England tour of South Africa, 2026-27",
    details: "South Africa vs England - 3 Tests, 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st Test",
        teams: "South Africa vs England",
        date: "Dec 2026",
        venue: "Centurion, Pretoria",
        details: "Upcoming Series",
        slug: "sa-vs-eng-1st-test-2026"
      }
    ]
  },
  {
    name: "Sri Lanka tour of India, 2026",
    details: "India vs Sri Lanka - 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st T20I",
        teams: "India vs Sri Lanka",
        date: "Jan 2026",
        venue: "TBC, India",
        details: "Upcoming Series",
        slug: "ind-vs-sl-1st-t20i-2026"
      }
    ]
  }
];