// The Jobava London — White repertoire (1.d4 + Nc3 + Bf4). A Tabia original:
// our own curated, aggressive take on the most fashionable London sideline.
// Tuple form: [SAN, comment?]. You play every White move.

export const repertoire = {
  id: 'jobava',
  name: 'Jobava London',
  nameTr: 'Jobava Londra Sistemi',
  color: 'w',
  eco: 'D00',
  tabiaOriginal: true,
  oneLiner: '1.d4 d5 2.Nc3 Nf6 3.Bf4 — an offbeat, aggressive London. Objectively Black equalizes, but the Nb5 jumps and h4 storms force awkward play and score well below master level.',
  oneLinerTr: '1.d4 d5 2.Nc3 Nf6 3.Bf4 — sıra dışı, agresif bir Londra. Objektif olarak siyah eşitler, ama Nb5 sıçramaları ve h4 fırtınaları usta seviyesinin altında garip oyunlara zorlar ve iyi skor yapar.',
  offBook: ['The teeth are in the plan — {exp} keeps Nb5 and h4 live.', 'Play it straight and it’s just a dull London. {exp} keeps the bite.', 'Off the storm — {exp} is the move.'],
  offBookTr: ['Diş planın içinde — {exp} Nb5 ve h4’ü canlı tutar.', 'Düz oynarsan sadece sıkıcı bir Londra olur. {exp} ısırığı korur.', 'Fırtınadan çıktın — doğru hamle {exp}.'],
  trunk: '1.d4 d5 2.Nc3 Nf6 3.Bf4',
  groups: {
    main:   { label: 'Main · 3…e6', blurb: 'The classical centre', labelTr: 'Ana · 3…e6', blurbTr: 'Klasik merkez' },
    side:   { label: 'Sidelines',   blurb: '…a6, …Bf5, …c6', labelTr: 'Yan hatlar', blurbTr: '…a6, …Bf5, …c6' },
    attack: { label: 'Attack',      blurb: 'When Black invites a fight', labelTr: 'Saldırı', blurbTr: 'Siyah kavgaya davet ettiğinde' },
  },
  lines: [
    // ---------------- MAIN ----------------
    { id: 'nb5-jump', name: 'Nb5 Jump (3…e6)', nameTr: 'Nb5 Sıçraması (3…e6)', group: 'main', star: true,
      idea: 'The signature Jobava try: 4.Nb5 provokes …Na6 and dictates the setup. Honest: with best play Black is fine (≈ −0.3) — the knight reroutes via …Nb4 — but the awkward …Na6 trips up club opponents constantly.',
      ideaTr: 'Jobava’nın imza denemesi: 4.Nb5 …Na6’yı kışkırtır ve kuruluşu dikte eder. Dürüst olmak gerekirse: en iyi oyunla siyah iyidir (≈ −0.3) — at …Nb4 üzerinden yeniden yönlenir — ama garip …Na6 kulüp rakiplerini sürekli tökezletir.',
      moves: [
        ['d4'], ['d5'], ['Nc3'], ['Nf6'], ['Bf4', '3.Bf4 — the London bishop comes out before e3.'], ['e6'],
        ['Nb5', '4.Nb5!? — eyeing c7 and d6; Black must react.'], ['Na6', '4…Na6 — defends c7, but the knight sits offside for now.'],
        ['e3'], ['Be7'], ['Bd3'], ['O-O'], ['Nf3'], ['c6'],
        ['Nc3', '8.Nc3 — the knight returns. Roughly level (≈ −0.3): you’re playing for the practical awkwardness of Black’s Na6, not an objective edge.'],
      ],
      movesTr: [
        null, null, null, null, '3.Bf4 — Londra fili e3’ten önce dışarı çıkıyor.', null,
        '4.Nb5!? — c7 ve d6’yı gözetliyor; siyah tepki vermek zorunda.', '4…Na6 — c7’yi savunuyor, ama at şimdilik kenarda kalıyor.',
        null, null, null, null, null, null,
        '8.Nc3 — at geri dönüyor. Yaklaşık eşit (≈ −0.3): objektif bir avantaj için değil, siyahın Na6’sının pratik garipliği için oynuyorsun.',
      ] },
    { id: 'e6-classical', name: 'Classical 4.e3 Bd6', nameTr: 'Klasik 4.e3 Bd6', group: 'main',
      idea: 'Black challenges the bishop with …Bd6; you keep it with Bg3 and recapture toward the centre, opening the h-file.',
      ideaTr: 'Siyah …Bd6 ile file meydan okur; sen Bg3 ile onu tutar ve merkeze doğru geri alırsın, h-sütununu açarsın.',
      moves: [
        ['d4'], ['d5'], ['Nc3'], ['Nf6'], ['Bf4'], ['e6'], ['e3'], ['Bd6'],
        ['Bg3', '5.Bg3 — keep the good bishop.'], ['O-O'], ['Bd3'], ['Bxg3'],
        ['hxg3', '7.hxg3 — recapture toward the centre; the h-file is yours for the attack.'], ['c5'], ['Nf3'],
      ],
      movesTr: [
        null, null, null, null, null, null, null, null,
        '5.Bg3 — iyi fili tut.', null, null, null,
        '7.hxg3 — merkeze doğru geri al; h-sütunu saldırı için senin.', null, null,
      ] },

    // ---------------- SIDELINES ----------------
    { id: 'a6-antinb5', name: 'Anti-Nb5 (3…a6)', nameTr: 'Anti-Nb5 (3…a6)', group: 'side',
      idea: 'Black spends a tempo on …a6 to stop Nb5. Just build the London setup — it’s roughly level, with the extra …a6 a small practical plus for you.',
      ideaTr: 'Siyah Nb5’i durdurmak için …a6’ya bir tempo harcar. Sadece Londra kuruluşunu inşa et — kabaca eşit, fazladan …a6 senin için küçük bir pratik artı.',
      moves: [
        ['d4'], ['d5'], ['Nc3'], ['Nf6'], ['Bf4'], ['a6', '3…a6 — prophylaxis against Nb5.'], ['e3'], ['e6'],
        ['Bd3'], ['Bd6'], ['Bg3'], ['O-O'], ['Nf3'], ['c5'], ['Ne5'],
      ],
      movesTr: [
        null, null, null, null, null, '3…a6 — Nb5’e karşı önlem.', null, null,
        null, null, null, null, null, null, null,
      ] },
    { id: 'bf5', name: 'Early …Bf5', nameTr: 'Erken …Bf5', group: 'side',
      idea: 'Black mirrors with …Bf5. Play f3 and e4 to blast open the centre while Black’s bishop is offside.',
      ideaTr: 'Siyah …Bf5 ile yansıtır. Siyahın fili kenardayken merkezi f3 ve e4 ile parçala.',
      moves: [
        ['d4'], ['d5'], ['Nc3'], ['Nf6'], ['Bf4'], ['Bf5'], ['f3', '4.f3 — restrain …Ne4 and prepare e4.'], ['c6'],
        ['e4', '5.e4! — the central break, the whole point of f3.'], ['dxe4'], ['fxe4'], ['Bg6'],
        ['Bd3', '7.Bd3 — a big pawn centre and the bishop pair pointed at the king.'],
      ],
      movesTr: [
        null, null, null, null, null, null, '4.f3 — …Ne4’ü sınırla ve e4’e hazırlan.', null,
        '5.e4! — merkez kırılması, f3’ün tüm amacı bu.', null, null, null,
        '7.Bd3 — büyük bir piyon merkezi ve şaha yönelik fil çifti.',
      ] },

    // ---------------- ATTACK ----------------
    { id: 'c5-break', name: 'Aggressive …c5', nameTr: 'Agresif …c5', group: 'attack', star: true,
      idea: 'Black strikes with …c5. You grab it and jump Nb5, but Black recaptures cleanly with …Bxc5 and is comfortable (≈ −0.5). Play it as a sharp, fighting game — not a free pawn.',
      ideaTr: 'Siyah …c5 ile vurur. Onu kapar ve Nb5’e sıçrarsın, ama siyah …Bxc5 ile temiz şekilde geri alır ve rahattır (≈ −0.5). Bunu bedava bir piyon değil, keskin, kavgacı bir oyun olarak oyna.',
      moves: [
        ['d4'], ['d5'], ['Nc3'], ['Nf6'], ['Bf4'], ['c5'],
        ['dxc5', '4.dxc5 — grab it; the pawn comes back, but you get a lead in development.'], ['e6'],
        ['Nb5', '5.Nb5!? — heading for d6, hitting the loose dark squares.'], ['Bxc5'],
        ['Nf3'], ['O-O'], ['e3'], ['a6'], ['Nbd4', '8.Nbd4 — Black is comfortable (≈ −0.5); play actively for the initiative, the pawn was always coming back.'],
      ],
      movesTr: [
        null, null, null, null, null, null,
        '4.dxc5 — kap; piyon geri gelecek, ama gelişimde öne geçersin.', null,
        '5.Nb5!? — d6’ya yöneliyor, boşta kalan koyu karelere vuruyor.', null,
        null, null, null, null, '8.Nbd4 — siyah rahat (≈ −0.5); inisiyatif için aktif oyna, piyon zaten geri gelecekti.',
      ] },
    { id: 'kingside-g6', name: 'h4 vs …g6', nameTr: 'h4, …g6’ya karşı', group: 'attack',
      idea: 'Against the fianchetto, the Jobava bayonet: h4–h5 to pry at the king. Double-edged and very practical — sound for Black, dangerous over the board.',
      ideaTr: 'Fianşettoya karşı Jobava süngüsü: şaha yaklaşmak için h4–h5. Çift taraflı ve çok pratik — siyah için sağlam, tahtada tehlikeli.',
      moves: [
        ['d4'], ['Nf6'], ['Nc3'], ['g6'], ['Bf4'], ['Bg7'], ['e3'], ['d6'],
        ['h4', '5.h4!? — the bayonet; meet …h5 with a sharp game, or storm with h5 yourself.'], ['h5'], ['Nf3'], ['O-O'], ['Be2'], ['c5'], ['Qd2'],
      ],
      movesTr: [
        null, null, null, null, null, null, null, null,
        '5.h4!? — süngü; …h5’e keskin bir oyunla cevap ver, ya da kendin h5 ile fırtına estir.', null, null, null, null, null, null,
      ] },
  ],
};
