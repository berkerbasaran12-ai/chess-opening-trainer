// The Scotch Gambit — White repertoire (1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Bc4).
// Offer the d4-pawn for a fast, attacking initiative against f7. Every move is
// engine-checked (Stockfish d20–22). Tuple form: [SAN, comment?].

export const repertoire = {
  id: 'scotchgambit',
  name: 'Scotch Gambit',
  nameTr: 'Scotch Gambiti',
  color: 'w',
  eco: 'C44',
  oneLiner: '1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Bc4 — sac the centre pawn for a screaming initiative on f7. Sound, sharp, and full of traps.',
  oneLinerTr: '1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Bc4 — f7 üzerinde çığlık atan bir inisiyatif için merkez piyonunu feda et. Sağlam, keskin, ve tuzaklarla dolu.',
  offBook: ['The gambit lives on the initiative — {exp} keeps the fire on f7.', 'Slow down and the pawn just matters; {exp} keeps it sharp.', 'Off the attack — {exp} is the move.'],
  offBookTr: ['Gambit inisiyatifle yaşar — {exp} ateşi f7’de tutar.', 'Yavaşlarsan piyon önemli hale gelir; {exp} keskinliği korur.', 'Saldırıdan çıktın — doğru hamle {exp}.'],
  trunk: '1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Bc4',
  groups: {
    main:     { label: 'Main lines',  blurb: '4…Bc5 and 4…Nf6', labelTr: 'Ana hatlar', blurbTr: '4…Bc5 ve 4…Nf6' },
    attack:   { label: 'Attack & traps', blurb: 'Max Lange + the f7 traps', labelTr: 'Saldırı ve tuzaklar', blurbTr: 'Max Lange ve f7 tuzakları' },
    declined: { label: 'Declined',    blurb: 'Black plays it safe', labelTr: 'Red', blurbTr: 'Siyah güvenli oynar' },
  },
  lines: [
    // ---------------- MAIN ----------------
    { id: 'classical-main', name: 'Classical 4…Bc5 5.c3', nameTr: 'Klasik 4…Bc5 5.c3', group: 'main', star: true,
      idea: 'The main line. You sac a piece with 9.d5! for a raging attack and full compensation — engine-perfect, it’s dynamic equality (≈ 0.0) but a nightmare for Black to defend.',
      ideaTr: 'Ana hat. 9.d5! ile çılgın bir saldırı ve tam telafi için bir taş feda edersin — motor açısından mükemmel, dinamik eşitlik (≈ 0.0) ama siyahın savunması için bir kâbus.',
      moves: [
        ['e4'], ['e5'], ['Nf3'], ['Nc6'], ['d4'], ['exd4'],
        ['Bc4', '4.Bc4 — the Scotch Gambit: develop and aim at f7 instead of recapturing.'], ['Bc5'],
        ['c3', '5.c3 — challenge the d4-pawn and open lines.'], ['Nf6'],
        ['cxd4'], ['Bb4+'], ['Nc3', '7.Nc3 — the sharp choice; block with the knight.'], ['Nxe4'],
        ['O-O', '8.O-O — ignore the pawns, get the king safe and the rook to e1.'], ['Bxc3'],
        ['d5', '9.d5! — the point: sac the piece, hit the Nc6, and open everything.'], ['Bf6'],
        ['Re1', '10.Re1 — pin the e4-knight to the king.'], ['Ne7'],
        ['Rxe4', '11.Rxe4 — win the knight back; you’re a pawn down with a crushing initiative (≈ 0.0).'], ['d6'],
        ['Bg5', '12.Bg5 — pile on the pins; full comp and a dangerous attack.'],
      ],
      movesTr: [
        null, null, null, null, null, null,
        '4.Bc4 — Scotch Gambiti: geri almak yerine geliş ve f7’yi hedefle.', null,
        '5.c3 — d4-piyonuna meydan oku ve hatları aç.', null,
        null, null, '7.Nc3 — keskin seçim; atla blokla.', null,
        '8.O-O — piyonları görmezden gel, şahı güvene al ve kaleyi e1’e getir.', null,
        '9.d5! — asıl nokta: taşı feda et, Nc6’ya vur, ve her şeyi aç.', null,
        '10.Re1 — e4-atını şaha pinle.', null,
        '11.Rxe4 — atı geri kazan; bir piyon eksiksin ama ezici bir inisiyatifin var (≈ 0.0).', null,
        '12.Bg5 — pinlere yüklen; tam telafi ve tehlikeli bir saldırı.',
      ] },
    { id: 'nf6-e5', name: '4…Nf6 5.e5', nameTr: '4…Nf6 5.e5', group: 'main',
      idea: 'If Black develops with …Nf6, kick it with 5.e5 and regain the pawn with Nxd4. A normal, sound game (≈ equal) — no fireworks, just a pleasant Italian-style centre.',
      ideaTr: 'Siyah …Nf6 ile geliştirirse, 5.e5 ile kov ve Nxd4 ile piyonu geri al. Normal, sağlam bir oyun (≈ eşit) — gösteri yok, sadece keyifli bir İtalyan tarzı merkez.',
      moves: [
        ['e4'], ['e5'], ['Nf3'], ['Nc6'], ['d4'], ['exd4'], ['Bc4'], ['Nf6'],
        ['e5', '5.e5 — gain space and chase the knight.'], ['d5'],
        ['Bb5', '6.Bb5 — pin the c6-knight before it’s defended.'], ['Ne4'], ['Nxd4'], ['Bd7'],
        ['Bxc6'], ['bxc6'], ['O-O'], ['Bc5'], ['Be3', '10.Be3 — develop, trade if invited; a balanced middlegame (≈ equal).'],
      ],
      movesTr: [
        null, null, null, null, null, null, null, null,
        '5.e5 — alan kazan ve atı kovala.', null,
        '6.Bb5 — c6-atını savunulmadan önce pinle.', null, null, null,
        null, null, null, null, '10.Be3 — geliş, davet edilirse değiş; dengeli bir orta oyun (≈ eşit).',
      ] },

    // ---------------- ATTACK & TRAPS ----------------
    { id: 'max-lange', name: 'Max Lange Attack', nameTr: 'Max Lange Saldırısı', group: 'attack', star: true,
      idea: 'The legendary Max Lange: 6.e5! and a forced storm down the e-file and at f7. Engine-approved — White is a touch better (≈ +0.2) with a ferocious initiative.',
      ideaTr: 'Efsanevi Max Lange: 6.e5! ve e-sütunu boyunca ve f7’ye zorunlu bir fırtına. Motor onaylı — beyaz biraz daha iyi (≈ +0.2) ve azgın bir inisiyatife sahip.',
      moves: [
        ['e4'], ['e5'], ['Nf3'], ['Nc6'], ['d4'], ['exd4'], ['Bc4'], ['Nf6'],
        ['O-O', '5.O-O — invite …Bc5 and the Max Lange.'], ['Bc5'],
        ['e5', '6.e5! — the Max Lange Attack; the f6-knight is hit.'], ['d5'],
        ['exf6', '7.exf6 — open the e-file with tempo.'], ['dxc4'], ['Re1+', '8.Re1+ — the check that powers the attack.'], ['Be6'],
        ['Ng5', '9.Ng5 — hit the pinned bishop on e6.'], ['Qd5'], ['Nc3', '10.Nc3 — develop with tempo on the queen.'], ['Qf5'],
        ['Nce4', '11.Nce4 — the knights swarm the kingside.'], ['Bf8'], ['fxg7'], ['Bxg7', 'White is slightly better (≈ +0.2) with a raging attack; Nxf7! is in the air.'],
      ],
      movesTr: [
        null, null, null, null, null, null, null, null,
        '5.O-O — …Bc5’i ve Max Lange’ı davet et.', null,
        '6.e5! — Max Lange Saldırısı; f6-atı vuruldu.', null,
        '7.exf6 — tempo’yla e-sütununu aç.', null, '8.Re1+ — saldırıyı güçlendiren şah.', null,
        '9.Ng5 — e6’daki pinlenmiş file vur.', null, '10.Nc3 — vezire tempo’yla geliş.', null,
        '11.Nce4 — atlar şah kanadını sarıyor.', null, null, 'Beyaz çılgın bir saldırıyla biraz daha iyi (≈ +0.2); Nxf7! havada.',
      ] },
    { id: 'dxc3-trap', name: 'Greedy 5…dxc3 — Bxf7+ trap', nameTr: 'Açgözlü 5…dxc3 — Bxf7+ tuzağı', group: 'attack',
      idea: 'If Black gets greedy and grabs 5…dxc3, punish it: 6.Bxf7+! rips open the king. After the forced sequence White is clearly better (≈ +0.7), Black castle-less and exposed.',
      ideaTr: 'Siyah açgözlü olup 5…dxc3’ü kaparsa, cezalandır: 6.Bxf7+! şahı parçalar. Zorunlu dizilimden sonra beyaz açıkça daha iyi (≈ +0.7), siyah roksuz ve açıkta.',
      moves: [
        ['e4'], ['e5'], ['Nf3'], ['Nc6'], ['d4'], ['exd4'], ['Bc4'], ['Bc5'], ['c3'],
        ['dxc3', '5…dxc3? — too greedy; the second pawn costs Black the king’s safety.'],
        ['Bxf7+', '6.Bxf7+! — the trap. Blow open f7.'], ['Kxf7'],
        ['Qd5+', '7.Qd5+ — fork the king and the Bc5.'], ['Kf8'],
        ['Qxc5+', '8.Qxc5+ — collect the bishop with check.'], ['d6'],
        ['Qxc3', '8…d6 9.Qxc3 — material is level but Black has lost castling and is passive (≈ +0.7). Develop and attack.'],
      ],
      movesTr: [
        null, null, null, null, null, null, null, null, null,
        '5…dxc3? — çok açgözlü; ikinci piyon siyaha şahın güvenliğine mal oluyor.',
        '6.Bxf7+! — tuzak. f7’yi parçala.', null,
        '7.Qd5+ — şahı ve Bc5’i çatalla.', null,
        '8.Qxc5+ — fili şahla topla.', null,
        '8…d6 9.Qxc3 — materyal eşit ama siyah rok hakkını kaybetti ve pasif (≈ +0.7). Geliş ve saldır.',
      ] },

    // ---------------- DECLINED ----------------
    { id: 'be7-declined', name: 'Solid 4…Be7', nameTr: 'Sağlam 4…Be7', group: 'declined',
      idea: 'Black sidesteps the fireworks with …Be7. Just take the pawn back with Nxd4 and enjoy a comfortable, better centre (≈ +0.4) — no gambit needed.',
      ideaTr: 'Siyah …Be7 ile gösteriden kaçınır. Sadece Nxd4 ile piyonu geri al ve rahat, daha iyi bir merkezin (≈ +0.4) tadını çıkar — gambit gerekmez.',
      moves: [
        ['e4'], ['e5'], ['Nf3'], ['Nc6'], ['d4'], ['exd4'], ['Bc4'], ['Be7', '4…Be7 — the safe, solid try.'],
        ['Nxd4', '5.Nxd4 — no need to gamble; regain the pawn with a fine position.'], ['Nf6'],
        ['Nc3'], ['O-O'], ['O-O'], ['d6'], ['h3', '8.h3 — tuck the bishop’s retreat in; White is comfortably better (≈ +0.4).'],
      ],
      movesTr: [
        null, null, null, null, null, null, null, '4…Be7 — güvenli, sağlam deneme.',
        '5.Nxd4 — kumar oynamaya gerek yok; piyonu güzel bir pozisyonla geri al.', null,
        null, null, null, null, '8.h3 — filin geri çekilme yerini hazırla; beyaz rahatça daha iyi (≈ +0.4).',
      ] },
  ],
};
