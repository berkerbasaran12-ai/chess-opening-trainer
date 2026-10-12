// The Pirc Defence — Black repertoire (1.e4 d6 2.d4 Nf6 3.Nc3 g6).
// A hypermodern cousin of the King's Indian: concede the centre, fianchetto,
// and strike back with ...e5 or ...c5.
export const repertoire = {
  id: 'pirc', name: 'Pirc Defence', color: 'b', eco: 'B07',
  oneLiner: '1.e4 d6 2.d4 Nf6 3.Nc3 g6 — concede the centre, fianchetto, and hit back with ...e5/...c5.',
  trunk: '1.e4 d6 2.d4 Nf6 3.Nc3 g6',
  groups: {
    main:  { label: 'Classical & Quiet Systems', blurb: '4.Nf3 and 4.g3' },
    sharp: { label: 'Sharp Systems', blurb: 'Austrian Attack & 150 Attack' },
  },
  lines: [
    { id: 'classical-pirc', name: 'Classical (4.Nf3)', group: 'main', star: true,
      idea: 'White develops naturally. Castle, develop flexibly with ...Nc6, and fight for the centre with ...e5.',
      moves: [
        ['e4'], ['d6'], ['d4'], ['Nf6'], ['Nc3'], ['g6'], ['Nf3', '4.Nf3 — the Classical System.'], ['Bg7'],
        ['Be2'], ['O-O'], ['O-O'], ['Nc6', '6...Nc6 — flexible development, eyeing ...e5.'],
        ['h3'], ['e5', 'Central space fight, typical of the Pirc.'],
      ] },
    { id: 'quiet-g3', name: 'Quiet Fianchetto (4.g3)', group: 'main',
      idea: 'A slower White setup. Mirror the fianchetto, castle, and meet it with the same ...e5 central strike.',
      moves: [
        ['e4'], ['d6'], ['d4'], ['Nf6'], ['Nc3'], ['g6'], ['g3', '4.g3 — a quiet fianchetto system.'], ['Bg7'],
        ['Bg2'], ['O-O'], ['Nge2'], ['Nc6'],
        ['O-O'], ['e5', 'Central space fight, typical Pirc counterplay.'],
      ] },
    { id: 'austrian', name: 'Austrian Attack (4.f4)', group: 'sharp',
      idea: 'White grabs a big kingside pawn front. Strike the centre immediately with ...c5 before the attack gets rolling.',
      moves: [
        ['e4'], ['d6'], ['d4'], ['Nf6'], ['Nc3'], ['g6'], ['f4', '4.f4 — the Austrian Attack.'], ['Bg7'],
        ['Nf3'], ['O-O'], ['Bd3'], ['c5', '6...c5 — hit the centre at once before White’s attack gets going.'],
      ] },
    { id: '150attack', name: '150 Attack (4.Be3)', group: 'sharp',
      idea: 'A quick Qd2, f3 and O-O-O aimed straight at your king. Race back on the queenside with ...c6 and ...b5.',
      moves: [
        ['e4'], ['d6'], ['d4'], ['Nf6'], ['Nc3'], ['g6'], ['Be3', '4.Be3 — the "150 Attack": quick Qd2, f3 and O-O-O.'], ['Bg7'],
        ['Qd2'], ['c6'], ['f3'], ['b5', 'Counter on the queenside before White’s attack arrives — a thematic race.'],
      ] },
  ],
};
