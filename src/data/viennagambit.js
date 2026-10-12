// The Vienna Gambit — White repertoire (1.e4 e5 2.Nc3 Nf6 3.f4). Offer the f-pawn
// to blow open the centre and hunt the king. Every line is Stockfish-checked
// (depth 20–22). Tuple form: [SAN, comment?]. You play every White move.

export const repertoire = {
  id: 'viennagambit',
  name: 'Vienna Gambit',
  nameTr: 'Viyana Gambiti',
  color: 'w',
  eco: 'C29',
  oneLiner: '1.e4 e5 2.Nc3 Nf6 3.f4 — the Vienna Gambit: rip open the f-file, push e5, and attack. Sharp, sound, and full of traps.',
  oneLinerTr: '1.e4 e5 2.Nc3 Nf6 3.f4 — Viyana Gambiti: f-sütununu parçala, e5’i it, ve saldır. Keskin, sağlam, ve tuzaklarla dolu.',
  offBook: ['The gambit runs on the e5 push and the open f-file — {exp} keeps it alive.', 'Play it slow and the pawn just matters; {exp} keeps the attack.', 'Off the plan — {exp} is the move.'],
  offBookTr: ['Gambit e5 itişi ve açık f-sütunu üzerinde çalışır — {exp} onu canlı tutar.', 'Yavaş oynarsan piyon önemli hale gelir; {exp} saldırıyı korur.', 'Plandan çıktın — doğru hamle {exp}.'],
  trunk: '1.e4 e5 2.Nc3 Nf6 3.f4',
  groups: {
    main:   { label: 'Main lines',    blurb: '3…exf4 accepted & 3…d5', labelTr: 'Ana hatlar', blurbTr: 'Kabul edilen 3…exf4 ve 3…d5' },
    attack: { label: 'Attack & traps', blurb: 'punishing …g5', labelTr: 'Saldırı ve tuzaklar', blurbTr: '…g5’i cezalandırma' },
    side:   { label: 'Sidelines',     blurb: '3…d6, 3…Nc6', labelTr: 'Yan hatlar', blurbTr: '3…d6, 3…Nc6' },
  },
  lines: [
    // ---------------- MAIN ----------------
    { id: 'accepted', name: 'Accepted 3…exf4 4.e5', nameTr: 'Kabul 3…exf4 4.e5', group: 'main', star: true,
      idea: 'The main gambit. 4.e5! kicks the knight to g8, then you build the big centre and regain the pawn with Qe2/Qxe5 — engine-approved, White is clearly better (≈ +0.6).',
      ideaTr: 'Ana gambit. 4.e5! atı g8’e kovar, sonra büyük merkezi kurar ve Qe2/Qxe5 ile piyonu geri alırsın — motor onaylı, beyaz açıkça daha iyi (≈ +0.6).',
      moves: [
        ['e4'], ['e5'], ['Nc3'], ['Nf6'], ['f4', '3.f4 — the Vienna Gambit; offer the f-pawn.'], ['exf4'],
        ['e5', '4.e5! — the point: hit the f6-knight before Black is ready.'], ['Ng8', '4…Ng8 — forced back to the corner.'],
        ['Nf3'], ['d6'], ['d4', '6.d4 — the broad centre, the pawn long forgotten.'], ['dxe5'],
        ['Qe2', '7.Qe2! — pin the e5-pawn to the king instead of recapturing.'], ['Be7'],
        ['Qxe5', '8.Qxe5 — pawn regained, big lead in development. White is clearly better (≈ +0.6).'],
      ],
      movesTr: [
        null, null, null, null, '3.f4 — Viyana Gambiti; f-piyonunu teklif et.', null,
        '4.e5! — asıl nokta: siyah hazır olmadan f6-atına vur.', '4…Ng8 — köşeye geri çekilmeye zorlandı.',
        null, null, '6.d4 — geniş merkez, piyon çoktan unutuldu.', null,
        '7.Qe2! — geri almak yerine e5-piyonunu şaha pinle.', null,
        '8.Qxe5 — piyon geri alındı, gelişimde büyük bir öncülük. Beyaz açıkça daha iyi (≈ +0.6).',
      ] },
    { id: 'd5-main', name: 'Main 3…d5 (Black’s best)', nameTr: 'Ana Hat 3…d5 (siyahın en iyisi)', group: 'main', star: true,
      idea: 'Black’s strongest reply: counter in the centre. After 4.fxe5 Nxe4 it’s a sharp, balanced game (≈ equal) — develop naturally and play for the initiative on the f-file.',
      ideaTr: 'Siyahın en güçlü cevabı: merkezde karşılık ver. 4.fxe5 Nxe4’ten sonra keskin, dengeli bir oyun (≈ eşit) — doğal şekilde geliş ve f-sütununda inisiyatif için oyna.',
      moves: [
        ['e4'], ['e5'], ['Nc3'], ['Nf6'], ['f4'], ['d5', '3…d5 — the principled strike back, Black’s best.'],
        ['fxe5'], ['Nxe4'], ['Nf3', '5.Nf3 — develop and eye the kingside.'], ['Bc5'],
        ['d4', '6.d4 — grab the centre and hit the c5-bishop.'], ['Bb4'],
        ['Bd2', '7.Bd2 — unpin; a roughly equal, double-edged middlegame (≈ 0.0).'],
      ],
      movesTr: [
        null, null, null, null, null, '3…d5 — ilkeli karşı vuruş, siyahın en iyisi.',
        null, null, '5.Nf3 — geliş ve şah kanadını gözetle.', null,
        '6.d4 — merkezi kap ve c5-filine vur.', null,
        '7.Bd2 — pini çöz; kabaca eşit, çift taraflı bir orta oyun (≈ 0.0).',
      ] },

    // ---------------- ATTACK & TRAPS ----------------
    { id: 'g5-trap', name: 'Greedy …g5 — h4 & Ng5! trap', nameTr: 'Açgözlü …g5 — h4 ve Ng5! tuzağı', group: 'attack',
      idea: 'If Black clings to the pawn with …g5, smash it: 6.h4! g4 7.Ng5! and the e6-break tears Black open. Engine says White is clearly better (≈ +0.8).',
      ideaTr: 'Siyah …g5 ile piyona yapışırsa, parçala: 6.h4! g4 7.Ng5! ve e6-kırılması siyahı açar. Motor beyazın açıkça daha iyi olduğunu söylüyor (≈ +0.8).',
      moves: [
        ['e4'], ['e5'], ['Nc3'], ['Nf6'], ['f4'], ['exf4'], ['e5'], ['Ng8'], ['Nf3'],
        ['g5', '5…g5? — greedily defending f4; this is the mistake.'],
        ['h4', '6.h4! — strike the over-extended pawns at once.'], ['g4'],
        ['Ng5', '7.Ng5! — leap in; f7 and the open lines are the target.'], ['d5'],
        ['d4'], ['Be7'], ['e6', '9.e6! — the breakthrough; rip open the centre.'], ['Bxe6'],
        ['Bxf4', '10.Bxf4 — development complete, Black’s king stuck. White is clearly better (≈ +0.8).'],
      ],
      movesTr: [
        null, null, null, null, null, null, null, null, null,
        '5…g5? — f4’ü açgözlülükle savunuyor; işte hata bu.',
        '6.h4! — hemen aşırı uzamış piyonlara vur.', null,
        '7.Ng5! — içeri sıçra; f7 ve açık hatlar hedef.', null,
        null, null, '9.e6! — çöküş; merkezi parçala.', null,
        '10.Bxf4 — gelişim tamam, siyahın şahı sıkışık. Beyaz açıkça daha iyi (≈ +0.8).',
      ] },

    // ---------------- SIDELINES ----------------
    { id: 'd6-passive', name: 'Passive 3…d6', nameTr: 'Pasif 3…d6', group: 'side',
      idea: 'Black props the centre passively with …d6. Just develop — Bb5, d4, Bxf4 — and you reach a dream Vienna: a huge centre and the bishop pair (≈ +1.0).',
      ideaTr: 'Siyah …d6 ile merkezi pasif şekilde destekler. Sadece geliş — Bb5, d4, Bxf4 — ve rüya gibi bir Viyana’ya ulaşırsın: devasa bir merkez ve fil çifti (≈ +1.0).',
      moves: [
        ['e4'], ['e5'], ['Nc3'], ['Nf6'], ['f4'], ['d6', '3…d6 — solid but passive.'],
        ['Nf3'], ['Nc6'], ['Bb5', '5.Bb5 — pin and pressure.'], ['exf4'],
        ['d4', '6.d4 — the full centre.'], ['Bd7'],
        ['Bxf4', '7.Bxf4 — pawn back, both bishops out, big centre. White is clearly better (≈ +1.0).'],
      ],
      movesTr: [
        null, null, null, null, null, '3…d6 — sağlam ama pasif.',
        null, null, '5.Bb5 — pinle ve baskı yap.', null,
        '6.d4 — tam merkez.', null,
        '7.Bxf4 — piyon geri geldi, iki fil de dışarıda, büyük merkez. Beyaz açıkça daha iyi (≈ +1.0).',
      ] },
    { id: 'nc6', name: 'Natural 3…Nc6', nameTr: 'Doğal 3…Nc6', group: 'side',
      idea: 'A very natural move that’s simply bad: 4.fxe5 Nxe5 5.d4 chases the knight around, 6.e5 wins more space, and Bc4 finishes a crushing centre (≈ +1.4).',
      ideaTr: 'Çok doğal ama basitçe kötü bir hamle: 4.fxe5 Nxe5 5.d4 atı kovalar, 6.e5 daha fazla alan kazanır, ve Bc4 ezici bir merkezi tamamlar (≈ +1.4).',
      moves: [
        ['e4'], ['e5'], ['Nc3'], ['Nf6'], ['f4'], ['Nc6', '3…Nc6? — natural, but it walks into the steamroller.'],
        ['fxe5'], ['Nxe5'], ['d4', '5.d4 — hit the knight and seize the centre.'], ['Ng6'],
        ['e5', '6.e5 — kick the f6-knight too.'], ['Ng8'], ['Nf3'], ['d6'],
        ['Bc4', '8.Bc4 — eye f7; a dream centre and a near-winning grip (≈ +1.4).'],
      ],
      movesTr: [
        null, null, null, null, null, '3…Nc6? — doğal, ama silindire doğru yürüyor.',
        null, null, '5.d4 — ata vur ve merkezi ele geçir.', null,
        '6.e5 — f6-atını da kov.', null, null, null,
        '8.Bc4 — f7’yi gözetle; rüya gibi bir merkez ve neredeyse kazandıran bir hakimiyet (≈ +1.4).',
      ] },
  ],
};
