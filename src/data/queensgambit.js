// The Queen's Gambit — White repertoire (1.d4 d5 2.c4). Covers every major Black
// defence: QGD, QGA, Slav, Semi-Slav, Tarrasch, Chigorin, Albin, Baltic.
// Mainline theory. Tuple form: [SAN, comment?]. You play every White move.

export const repertoire = {
  id: 'qg',
  name: "Queen's Gambit",
  nameTr: 'Vezir Gambiti',
  color: 'w',
  eco: 'D06',
  oneLiner: '1.d4 d5 2.c4 — the classical bid for the centre; meet every defence with a clean main line.',
  oneLinerTr: '1.d4 d5 2.c4 — merkez için klasik teklif; her savunmaya temiz bir ana hatla karşılık ver.',
  trunk: '1.d4 d5 2.c4',
  groups: {
    declined: { label: 'Declined · 2…e6', blurb: 'The QGD — Black holds the centre', labelTr: 'Red · 2…e6', blurbTr: 'Vezir Gambiti Reddi — siyah merkezi tutar' },
    accepted: { label: 'Accepted · 2…dxc4', blurb: 'Black takes; you take the centre', labelTr: 'Kabul · 2…dxc4', blurbTr: 'Siyah alır; sen merkezi alırsın' },
    slav:     { label: 'Slav · 2…c6', blurb: 'Slav & Semi-Slav structures', labelTr: 'Slav · 2…c6', blurbTr: 'Slav ve Yarı-Slav yapıları' },
    sideline: { label: 'Sidelines', blurb: 'Tarrasch, Chigorin, Albin, Baltic', labelTr: 'Yan hatlar', blurbTr: 'Tarrasch, Chigorin, Albin, Baltik' },
  },
  lines: [
    // ---------------- QUEEN'S GAMBIT DECLINED ----------------
    { id: 'qgd-main', name: 'QGD Main (4.Bg5)', nameTr: 'Vezir Gambiti Reddi Ana Hat (4.Bg5)', group: 'declined', star: true,
      idea: 'The classical QGD. Pin with Bg5, trade off on d5, and play with the slightly freer game and the c-file.',
      ideaTr: 'Klasik Vezir Gambiti Reddi. Bg5 ile pinle, d5’te değiş, ve biraz daha özgür oyunla ve c-sütunuyla oyna.',
      moves: [
        ['d4'], ['d5'], ['c4'], ['e6', '2…e6 — the Queen’s Gambit Declined.'], ['Nc3'], ['Nf6'],
        ['Bg5', '4.Bg5 — the classical pin on the f6-knight.'], ['Be7'], ['e3'], ['O-O'], ['Nf3'], ['h6'],
        ['Bh4', '7.Bh4 — keep the pin.'], ['b6', '7…b6 — the Tartakower, the soundest defence.'],
        ['cxd5'], ['Nxd5'], ['Bxe7'], ['Qxe7'], ['Nxd5'], ['exd5'],
        ['Rc1', '11.Rc1 — pressure down the half-open c-file; a tiny, durable edge.'],
      ],
      movesTr: [
        null, null, null, '2…e6 — Vezir Gambiti Reddi.', null, null,
        '4.Bg5 — f6 atı üzerinde klasik pin.', null, null, null, null, null,
        '7.Bh4 — pini koru.', '7…b6 — Tartakower, en sağlam savunma.',
        null, null, null, null, null, null,
        '11.Rc1 — yarı açık c-sütununda baskı; küçük, kalıcı bir avantaj.',
      ] },
    { id: 'qgd-exchange', name: 'QGD Exchange (Minority Attack)', nameTr: 'Vezir Gambiti Reddi Değişimi (Azınlık Saldırısı)', group: 'declined',
      idea: 'Trade on d5 early and launch the minority attack: b4–b5 to gouge a weakness on c6.',
      ideaTr: 'd5’te erkenden değiş ve azınlık saldırısını başlat: c6’da bir zayıflık oymak için b4–b5.',
      moves: [
        ['d4'], ['d5'], ['c4'], ['e6'], ['Nc3'], ['Nf6'],
        ['cxd5', '4.cxd5 — the Exchange; fix the structure for a queenside plan.'], ['exd5'],
        ['Bg5'], ['c6'], ['e3'], ['Be7'], ['Bd3'], ['O-O'], ['Qc2'], ['Re8'], ['Nge2'], ['Nbd7'],
        ['O-O'], ['Nf8'], ['Rab1', '11.Rab1 — preparing b4–b5, the minority attack.'],
      ],
      movesTr: [
        null, null, null, null, null, null,
        '4.cxd5 — Değişim; vezir kanadı planı için yapıyı sabitle.', null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, '11.Rab1 — b4–b5’e, azınlık saldırısına hazırlanıyor.',
      ] },
    { id: 'qgd-cambridge', name: 'Cambridge Springs (6…Qa5)', nameTr: 'Cambridge Springs (6…Qa5)', group: 'declined',
      idea: 'Black’s tricky …Qa5 hits the pinned knight. Calmly unpin with Nd2 and the pin backfires.',
      ideaTr: 'Siyahın hileli …Qa5’i pinlenmiş ata vurur. Nd2 ile sakince pini çöz, pin geri teper.',
      moves: [
        ['d4'], ['d5'], ['c4'], ['e6'], ['Nc3'], ['Nf6'], ['Bg5'], ['Nbd7'], ['Nf3'], ['c6'], ['e3'],
        ['Qa5', '6…Qa5 — the Cambridge Springs, eyeing the pin and c3.'],
        ['Nd2', '7.Nd2! — unpin and defend; the queen sortie loses its sting.'], ['Bb4'],
        ['Qc2'], ['O-O'], ['Be2', '9.Be2 — calmly finish development with a comfortable game.'],
      ],
      movesTr: [
        null, null, null, null, null, null, null, null, null, null, null,
        '6…Qa5 — Cambridge Springs, pini ve c3’ü gözetliyor.',
        '7.Nd2! — pini çöz ve savun; vezir çıkışı etkisini kaybediyor.', null,
        null, null, '9.Be2 — gelişimi sakince bitir, rahat bir oyun.',
      ] },

    // ---------------- QUEEN'S GAMBIT ACCEPTED ----------------
    { id: 'qga-main', name: 'QGA Main (3.Nf3)', nameTr: 'Vezir Gambiti Kabulü Ana Hat (3.Nf3)', group: 'accepted', star: true,
      idea: 'Don’t rush to regain the pawn — develop, recapture on c4, and enjoy a free, central game.',
      ideaTr: 'Piyonu geri almak için acele etme — geliş, c4’te geri al, ve özgür, merkezi bir oyunun tadını çıkar.',
      moves: [
        ['d4'], ['d5'], ['c4'], ['dxc4', '2…dxc4 — the Queen’s Gambit Accepted.'],
        ['Nf3', '3.Nf3 — stop …e5 first; the pawn isn’t running away.'], ['Nf6'], ['e3'], ['e6'],
        ['Bxc4', '5.Bxc4 — calmly regain the pawn.'], ['c5'], ['O-O'], ['a6'],
        ['dxc5'], ['Qxd1'], ['Rxd1'], ['Bxc5'], ['Nbd2', '9.Nbd2 — a pleasant edge in a queenless middlegame.'],
      ],
      movesTr: [
        null, null, null, '2…dxc4 — Vezir Gambiti Kabulü.',
        '3.Nf3 — önce …e5’i durdur; piyon kaçmıyor.', null, null, null,
        '5.Bxc4 — sakince piyonu geri al.', null, null, null,
        null, null, null, null, '9.Nbd2 — vezirsiz bir orta oyunda keyifli bir avantaj.',
      ] },
    { id: 'qga-central', name: 'QGA Central (3.e4)', nameTr: 'Vezir Gambiti Kabulü Merkezi (3.e4)', group: 'accepted',
      idea: 'The ambitious 3.e4 grabs a big centre at once. If Black hits it with …e5, don’t rush to regain d4 — develop and hit f7/b7 with Qb3, standing clearly better (≈ +1.1).',
      ideaTr: 'İddialı 3.e4 hemen büyük bir merkez ele geçirir. Siyah …e5 ile vurursa, d4’ü geri almak için acele etme — geliş ve Qb3 ile f7/b7’ye vur, açıkça daha iyi dur (≈ +1.1).',
      moves: [
        ['d4'], ['d5'], ['c4'], ['dxc4'], ['e4', '3.e4 — the central QGA, a broad pawn front.'],
        ['e5', '3…e5 — the principled strike.'], ['Nf3'], ['exd4'], ['Bxc4'], ['Nc6'],
        ['O-O'], ['Be7'], ['Qb3', '7.Qb3! — hit f7 and b7. Not 7.Nxd4?? Qxd4 (the d4-knight has two attackers, one defender — Black wins a piece). White is clearly better.'],
      ],
      movesTr: [
        null, null, null, null, '3.e4 — merkezi Vezir Gambiti Kabulü, geniş bir piyon cephesi.',
        '3…e5 — ilkeli vuruş.', null, null, null, null,
        null, null, '7.Qb3! — f7 ve b7’ye vur. 7.Nxd4?? Qxd4 değil (d4-atının iki saldırganı, bir savunucusu var — siyah bir taş kazanır). Beyaz açıkça daha iyi.',
      ] },

    // ---------------- SLAV / SEMI-SLAV ----------------
    { id: 'slav-main', name: 'Slav Main (5.a4 Bf5)', nameTr: 'Slav Ana Hat (5.a4 Bf5)', group: 'slav',
      idea: 'Black keeps the c8-bishop active with …Bf5. Clamp with a4, regain the pawn on c4, and develop smoothly.',
      ideaTr: 'Siyah …Bf5 ile c8-filini aktif tutar. a4 ile sıkıştır, c4’te piyonu geri al, ve rahatça geliş.',
      moves: [
        ['d4'], ['d5'], ['c4'], ['c6', '2…c6 — the rock-solid Slav.'], ['Nf3'], ['Nf6'], ['Nc3'], ['dxc4'],
        ['a4', '5.a4 — stop …b5 and prepare to round up c4.'], ['Bf5'], ['e3'], ['e6'], ['Bxc4'], ['Bb4'],
        ['O-O'], ['O-O'], ['Qe2', '9.Qe2 — connect the rooks, aim e3–e4.'],
      ],
      movesTr: [
        null, null, null, '2…c6 — kaya gibi sağlam Slav.', null, null, null, null,
        '5.a4 — …b5’i durdur ve c4’ü toplamaya hazırlan.', null, null, null, null, null,
        null, null, '9.Qe2 — kaleleri bağla, e3–e4’ü hedefle.',
      ] },
    { id: 'semi-slav-meran', name: 'Semi-Slav Meran (7…b5 8.Bd3)', nameTr: 'Yarı-Slav Meran (7…b5 8.Bd3)', group: 'slav',
      idea: 'The Meran: let Black grab queenside space, then blow open the centre with e3–e4.',
      ideaTr: 'Meran: siyahın vezir kanadı alanı kapmasına izin ver, sonra e3–e4 ile merkezi parçala.',
      moves: [
        ['d4'], ['d5'], ['c4'], ['c6'], ['Nf3'], ['Nf6'], ['Nc3'], ['e6', '4…e6 — the Semi-Slav.'], ['e3'], ['Nbd7'],
        ['Bd3'], ['dxc4'], ['Bxc4'], ['b5'], ['Bd3'], ['a6'],
        ['e4', '9.e4! — the Meran break; a rich, fighting centre.'],
      ],
      movesTr: [
        null, null, null, null, null, null, null, '4…e6 — Yarı-Slav.', null, null,
        null, null, null, null, null, null,
        '9.e4! — Meran kırılması; zengin, kavgacı bir merkez.',
      ] },

    // ---------------- SIDELINES ----------------
    { id: 'tarrasch', name: 'Tarrasch (3…c5)', nameTr: 'Tarrasch (3…c5)', group: 'sideline',
      idea: 'Black accepts an isolated d-pawn for activity. Fianchetto with g3/Bg2 to blockade and press d5 long-term.',
      ideaTr: 'Siyah aktivite için izole bir d-piyonunu kabul eder. Uzun vadede d5’i bloklamak ve baskı yapmak için g3/Bg2 ile fianşetto yap.',
      moves: [
        ['d4'], ['d5'], ['c4'], ['e6'], ['Nc3'], ['c5', '3…c5 — the Tarrasch Defence.'],
        ['cxd5'], ['exd5'], ['Nf3'], ['Nc6'], ['g3', '6.g3 — the Rubinstein system; the bishop will eye d5.'],
        ['Nf6'], ['Bg2'], ['Be7'], ['O-O'], ['O-O'], ['Bg5', '9.Bg5 — pile up on the isolated d5-pawn.'],
      ],
      movesTr: [
        null, null, null, null, null, '3…c5 — Tarrasch Savunması.',
        null, null, null, null, '6.g3 — Rubinstein sistemi; fil d5’i gözetleyecek.',
        null, null, null, null, null, '9.Bg5 — izole d5-piyonuna yüklen.',
      ] },
    { id: 'chigorin', name: 'Chigorin (2…Nc6)', nameTr: 'Chigorin (2…Nc6)', group: 'sideline',
      idea: 'Black’s offbeat …Nc6. Take the bishop pair, prop the centre with e3 (note: e4? drops d4 to …Nxd4), and the doubled f-pawns are a small price (≈ +0.5).',
      ideaTr: 'Siyahın sıra dışı …Nc6’sı. Fil çiftini al, merkezi e3 ile destekle (not: e4? d4’ü …Nxd4’e bırakır), ve ikili f-piyonları küçük bir bedel (≈ +0.5).',
      moves: [
        ['d4'], ['d5'], ['c4'], ['Nc6', '2…Nc6 — the Chigorin, piece play over structure.'], ['Nf3'], ['Bg4'],
        ['cxd5'], ['Bxf3'], ['gxf3', '5.gxf3 — grab the bishop pair; the doubled f-pawns are fine.'], ['Qxd5'],
        ['e3', '6.e3 — solid: defend d4 first (6.Nc3? Qd6 7.e4?? Nxd4 wins the pawn).'], ['e5'],
        ['Nc3'], ['Bb4'], ['Bd2'], ['Bxc3'], ['bxc3', '9.bxc3 — two bishops, a broad centre, the long-term pull.'],
      ],
      movesTr: [
        null, null, null, '2…Nc6 — Chigorin, yapı yerine taş oyunu.', null, null,
        null, null, '5.gxf3 — fil çiftini al; ikili f-piyonları sorun değil.', null,
        '6.e3 — sağlam: önce d4’ü savun (6.Nc3? Qd6 7.e4?? Nxd4 piyonu kazanır).', null,
        null, null, null, null, '9.bxc3 — iki fil, geniş bir merkez, uzun vadeli çekiş.',
      ] },
    { id: 'albin', name: 'Albin Counter-Gambit (2…e5)', nameTr: 'Albin Karşı Gambiti (2…e5)', group: 'sideline',
      idea: 'A gambit reply. Take on e5, blockade the advanced d4-pawn, fianchetto, and just be up a pawn.',
      ideaTr: 'Bir gambit cevabı. e5’i al, ilerlemiş d4-piyonunu blokla, fianşetto yap, ve sadece bir piyon fazla ol.',
      moves: [
        ['d4'], ['d5'], ['c4'], ['e5', '2…e5!? — the Albin Counter-Gambit.'], ['dxe5'], ['d4'],
        ['Nf3'], ['Nc6'], ['g3', '5.g3 — the modern antidote; bishop to g2 and round up d4.'], ['Be6'],
        ['Nbd2'], ['Qd7'], ['Bg2'], ['O-O-O'], ['O-O', '8.O-O — castled, a clean extra pawn, no counterplay.'],
      ],
      movesTr: [
        null, null, null, '2…e5!? — Albin Karşı Gambiti.', null, null,
        null, null, '5.g3 — modern panzehir; fil g2’ye ve d4’ü topla.', null,
        null, null, null, null, '8.O-O — rok oldu, temiz bir fazla piyon, karşı oyun yok.',
      ] },
    { id: 'baltic', name: 'Baltic (2…Bf5)', nameTr: 'Baltık (2…Bf5)', group: 'sideline',
      idea: 'The …Bf5 sideline. Take on d5, win the bishop back with the Qa4+/Rxb1 trick, and emerge with the bishop pair and a pleasant space edge (≈ +0.5).',
      ideaTr: '…Bf5 yan hattı. d5’te al, Qa4+/Rxb1 hilesiyle fili geri kazan, ve fil çifti ile keyifli bir alan avantajıyla çık (≈ +0.5).',
      moves: [
        ['d4'], ['d5'], ['c4'], ['Bf5', '2…Bf5?! — developing the bishop before …e6 traps it in.'],
        ['cxd5', '3.cxd5 — the bishop on f5 is now loose.'], ['Bxb1'],
        ['Qa4+', '4.Qa4+! — the in-between check that rounds the bishop up.'], ['c6'],
        ['Rxb1', '5.Rxb1 — regaining the piece.'], ['Qxd5'],
        ['Nf3'], ['e6'], ['b4', '7.b4 — grab queenside space; a comfortable, lasting edge.'],
      ],
      movesTr: [
        null, null, null, '2…Bf5?! — …e6 onu hapsetmeden fili geliştiriyor.',
        '3.cxd5 — f5’teki fil artık boşta.', null,
        '4.Qa4+! — fili toplayan ara şah.', null,
        '5.Rxb1 — taşı geri kazan.', null,
        null, null, '7.b4 — vezir kanadı alanını kap; rahat, kalıcı bir avantaj.',
      ] },
  ],
};
