// The King's Indian Defence — Black repertoire (1.d4 Nf6 2.c4 g6 3.Nc3 Bg7).
// Hand White the centre, fianchetto, castle, then blow it open with ...e5/...f5.
export const repertoire = {
  id: 'kingsindian', name: "King's Indian Defence", color: 'b', eco: 'E60',
  oneLiner: '1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 — give White the centre, then smash it open with ...e5 and ...f5.',
  trunk: '1.d4 Nf6 2.c4 g6 3.Nc3 Bg7',
  groups: {
    classical: { label: 'Classical (4.e4)', blurb: 'Mar del Plata & Petrosian main lines' },
    systems:   { label: 'White Systems', blurb: 'Fianchetto & Sämisch' },
  },
  lines: [
    { id: 'mardelplata', name: 'Mar del Plata (7...Nc6 8.d5 Ne7)', group: 'classical', star: true,
      idea: 'The classic King’s Indian middlegame. Hand White the centre, castle, and reroute the knight toward a kingside pawn storm with ...f5.',
      moves: [
        ['d4'], ['Nf6'], ['c4'], ['g6'], ['Nc3'], ['Bg7'], ['e4'], ['d6', '4...d6 — the Classical/Mar del Plata setup.'],
        ['Nf3'], ['O-O'], ['Be2'], ['e5', '6...e5 — strike the centre; the classic King’s Indian pawn-storm plan begins.'],
        ['O-O'], ['Nc6'], ['d5'], ['Ne7', '8...Ne7 — reroute the knight toward ...Nd7/...f5.'],
        ['Nd2'], ['a5', 'Stop b4 and prepare the ...f5 break.'],
      ] },
    { id: 'petrosian', name: 'Petrosian (7.d5)', group: 'classical',
      idea: 'White closes the centre before ...Nc6. Blockade with ...Nc5 and queenside play before switching to the kingside.',
      moves: [
        ['d4'], ['Nf6'], ['c4'], ['g6'], ['Nc3'], ['Bg7'], ['e4'], ['d6'],
        ['Nf3'], ['O-O'], ['Be2'], ['e5'],
        ['d5', '7.d5 — the Petrosian Variation, closing the centre early.'], ['Nbd7'],
        ['O-O'], ['a5', 'Prepare ...Nc5, a strong blockading post.'],
        ['Rb1'], ['Nc5', 'A great outpost; ...f5 still to come.'],
      ] },
    { id: 'fianchetto-kid', name: 'Fianchetto (3.g3)', group: 'systems',
      idea: 'White blunts your bishop with a fianchetto of their own. Develop solidly; the central space fight continues with ...e5.',
      moves: [
        ['d4'], ['Nf6'], ['c4'], ['g6'], ['g3', '3.g3 — the Fianchetto Variation.'], ['Bg7'],
        ['Bg2'], ['O-O'], ['Nc3'], ['d6'], ['Nf3'], ['Nc6'],
        ['O-O'], ['e5', '7...e5 — central space fight; typical King’s Indian counterplay even against the fianchetto.'],
      ] },
    { id: 'samisch', name: 'Sämisch (5.f3)', group: 'systems',
      idea: 'White locks e4 and prepares Be3/Qd2/O-O-O for a quick attack. Counter with queenside play (...a6/...Rb8/...b5) or the thematic ...f5.',
      moves: [
        ['d4'], ['Nf6'], ['c4'], ['g6'], ['Nc3'], ['Bg7'], ['e4'], ['d6'],
        ['f3', '5.f3 — the Sämisch Variation.'], ['O-O'], ['Be3'], ['e5'],
        ['Nge2'], ['Nbd7', 'Classic Sämisch setup: race with ...a6/...b5 or ...f5 before White’s g4-storm.'],
      ] },
  ],
};
