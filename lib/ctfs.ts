// CTF data — events from ctftime.org/team/425304 + manual entries
// To add a manual event, just add an entry to the ctfEvents array below.

export interface CTFEvent {
  year: number;
  event: string;
  ratingPoints: number;
  place: number;
  ctftimeEventUrl?: string;
  source: "ctftime" | "manual";
}

export interface TeamMember {
  name: string;
  ctftimeUrl?: string;
}

export const teamInfo = {
  name: "adjac3nt_n0d3",
  ctftimeUrl: "https://ctftime.org/team/425304",
  type: "Academic team",
  affiliation: "MITS",
  leader: "cytrus.exe",
};

export const teamMembers: TeamMember[] = [
  { name: "cytrus.exe", ctftimeUrl: "https://ctftime.org/user/205736" },
  { name: "leesec", ctftimeUrl: "https://ctftime.org/user/247716" },
  { name: "Pinaka", ctftimeUrl: "https://ctftime.org/user/252758" },
];

// ═══════════════════════════════════════════════════════════
// All CTF events — add manual entries by setting source: "manual"
// Events from ctftime are pre-populated below
// ═══════════════════════════════════════════════════════════
export const ctfEvents: CTFEvent[] = [
  // ── 2026 (from ctftime) ──
  {
    year: 2026,
    event: "RITSEC CTF 2026",
    ratingPoints: 0.344,
    place: 410,
    ctftimeEventUrl: "https://ctftime.org/event/3096",
    source: "ctftime",
  },
  {
    year: 2026,
    event: "Kashi CTF 2026",
    ratingPoints: 4.184,
    place: 156,
    ctftimeEventUrl: "https://ctftime.org/event/3150",
    source: "ctftime",
  },
  {
    year: 2026,
    event: "EHAX CTF 2026",
    ratingPoints: 0.155,
    place: 736,
    ctftimeEventUrl: "https://ctftime.org/event/3127",
    source: "ctftime",
  },
  {
    year: 2026,
    event: "Batman's Kitchen CTF 2026",
    ratingPoints: 0.840,
    place: 375,
    ctftimeEventUrl: "https://ctftime.org/event/3098",
    source: "ctftime",
  },
  {
    year: 2026,
    event: "BITSCTF 2026",
    ratingPoints: 1.461,
    place: 447,
    ctftimeEventUrl: "https://ctftime.org/event/3122",
    source: "ctftime",
  },
  {
    year: 2026,
    event: "TaipanByte's Chart CTF",
    ratingPoints: 1.134,
    place: 357,
    ctftimeEventUrl: "https://ctftime.org/event/3086",
    source: "ctftime",
  },
  {
    year: 2026,
    event: "XploitX 2026",
    ratingPoints: 17.4,
    place: 8,
    ctftimeEventUrl: "https://drive.google.com/file/d/1KC3yFDRBZ7OnQRmjml6LtA4NZGpeLMLc/view?usp=sharing",
    source: "manual",
  },
  {
    year: 2026,
    event: "DFIR Supraja Technologies CTF",
    ratingPoints: 12.5,
    place: 1,
    ctftimeEventUrl: "https://drive.google.com/file/d/1yTVej9qP3Tosly30r4ehMGQ_z_w2RMDT/view?usp=sharing",
    source: "manual",
  },

  // ══════════════════════════════════════════════════════
  // ── Manual entries — ADD YOUR OWN HERE ──
  // ══════════════════════════════════════════════════════
  // Example:
  // {
  //   year: 2025,
  //   event: "My Local CTF",
  //   ratingPoints: 0,
  //   place: 5,
  //   source: "manual",
  // },
];

// Helper: get events grouped by year
export function getEventsByYear(events: CTFEvent[]): Record<number, CTFEvent[]> {
  const result: Record<number, CTFEvent[]> = {};
  for (const e of events) {
    if (!result[e.year]) result[e.year] = [];
    result[e.year].push(e);
  }
  return result;
}

// Helper: get all years sorted descending
export function getYears(events: CTFEvent[]): number[] {
  return [...new Set(events.map(e => e.year))].sort((a, b) => b - a);
}