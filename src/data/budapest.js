// The Budapest Gambit — Black repertoire (1.d4 Nf6 2.c4 e5!?). A Tabia original:
// a punchy, low-theory weapon that ambushes 1.d4 players who expect a quiet game.
// Tuple form: [SAN, comment?]. You play every Black move.

export const repertoire = {
  id: 'budapest',
  name: 'Budapest Gambit',
  nameTr: 'Budapeşte Gambiti',
  color: 'b',
  eco: 'A52',
  tabiaOriginal: true,
  oneLiner: '1.d4 Nf6 2.c4 e5!? — sac a pawn for fast, active piece play and tricks on the dark squares.',
  oneLinerTr: '1.d4 Nf6 2.c4 e5!? — hızlı, aktif taş oyunu ve koyu karelerde hileler için bir piyon feda et.',
  offBook: ['The e5-pawn comes back by force — {exp} is how.', 'Lose the tempo and the gambit fizzles. {exp} keeps the pieces buzzing.', 'Off the dark-square plan — play {exp}.'],
  offBookTr: ['e5-piyonu zorunlu olarak geri gelir — nasıl olduğu {exp}.', 'Tempo kaybedersen gambit söner. {exp} taşları canlı tutar.', 'Koyu kare planından çıktın — {exp} oyna.'],
  trunk: '1.d4 Nf6 2.c4 e5 3.dxe5 Ng4',
  groups: {
    adler:  { label: 'Accepted · Ng4', blurb: 'The main road — win the pawn back', labelTr: 'Kabul · Ng4', blurbTr: 'Ana yol — piyonu geri kazan' },
    fajaro: { label: 'Fajarowicz · Ne4', blurb: 'The wild knight leap', labelTr: 'Fajarowicz · Ne4', blurbTr: 'Vahşi at sıçraması' },
    decl:   { label: 'Declined',        blurb: 'When White won’t take', labelTr: 'Red', blurbTr: 'Beyaz almayınca' },
  },
  lines: [
    // ---------------- ACCEPTED 3…Ng4 ----------------
    { id: 'adler-main', name: 'Adler Main (4.Bf4)', nameTr: 'Adler Ana Hat (4.Bf4)', group: 'adler', star: true,
      idea: 'The main line. Pin with …Bb4+, pile on e5 with …Qe7, and regain the pawn with a comfortable, active game.',
      ideaTr: 'Ana hat. …Bb4+ ile pinle, …Qe7 ile e5’e yüklen, ve rahat, aktif bir oyunla piyonu geri kazan.',
      moves: [
        ['d4'], ['Nf6'], ['c4'], ['e5', '2…e5! — the gambit; offer the pawn for activity.'],
        ['dxe5'], ['Ng4', '3…Ng4 — hop back to round up the e5-pawn.'],
        ['Bf4', '4.Bf4 — White clings to the extra pawn.'], ['Nc6'],
        ['Nf3'], ['Bb4+', '5…Bb4+ — develop with check and add a defender of …Ngxe5.'],
        ['Nbd2'], ['Qe7', '6…Qe7 — triple the pressure on e5.'],
        ['a3'], ['Ngxe5', '7…Ngxe5 — the pawn comes back; Black is fully equal and active.'],
        ['Nxe5'], ['Nxe5'], ['e3'], ['Bxd2+'], ['Qxd2'],
      ],
      movesTr: [
        null, null, null, '2…e5! — gambit; aktivite için piyonu teklif et.',
        null, '3…Ng4 — e5 piyonunu toplamak için geri sıçra.',
        '4.Bf4 — beyaz fazla piyona yapışıyor.', null,
        null, '5…Bb4+ — şahla geliş ve …Ngxe5’in savunucusunu ekle.',
        null, '6…Qe7 — e5 üzerindeki baskıyı üçle.',
        null, '7…Ngxe5 — piyon geri geliyor; siyah tamamen eşit ve aktif.',
        null, null, null, null, null,
      ] },
    { id: 'rubinstein', name: 'Rubinstein (…Bc5)', nameTr: 'Rubinstein (…Bc5)', group: 'adler',
      idea: 'A sharper try: …Bc5 hits f2. White must watch the …Ng4xf2 and …Bxf2+ tricks while you round up e5.',
      ideaTr: 'Daha keskin bir deneme: …Bc5 f2’ye vurur. Sen e5’i toplarken beyaz …Ng4xf2 ve …Bxf2+ hilelerine dikkat etmek zorunda.',
      moves: [
        ['d4'], ['Nf6'], ['c4'], ['e5'], ['dxe5'], ['Ng4'],
        ['Nf3'], ['Bc5', '4…Bc5 — train the bishop on f2; tactics loom.'],
        ['e3'], ['Nc6'], ['Be2'], ['Ngxe5', '6…Ngxe5 — recapture; the dark-squared pressure persists.'],
        ['Nxe5'], ['Nxe5'], ['Nc3'], ['O-O'], ['O-O'], ['Re8'],
      ],
      movesTr: [
        null, null, null, null, null, null,
        null, '4…Bc5 — fili f2’ye çevir; taktikler yaklaşıyor.',
        null, null, null, '6…Ngxe5 — geri al; koyu kare baskısı devam ediyor.',
        null, null, null, null, null, null,
      ] },
    { id: 'alekhine-e4', name: 'Alekhine 4.e4', nameTr: 'Alekhine 4.e4', group: 'adler',
      idea: 'White grabs the centre with 4.e4. Take on e5 at once and harass the big pawns with …Bb4+ and …d6.',
      ideaTr: 'Beyaz 4.e4 ile merkezi ele geçirir. Hemen e5’i al ve …Bb4+ ile …d6 ile büyük piyonları taciz et.',
      moves: [
        ['d4'], ['Nf6'], ['c4'], ['e5'], ['dxe5'], ['Ng4'],
        ['e4', '4.e4 — the Alekhine line, a broad centre.'], ['Nxe5'],
        ['Nf3'], ['Nbc6', '5…Nbc6 — develop the second knight.'],
        ['Be2'], ['Bb4+'], ['Nc3'], ['Bxc3+'], ['bxc3'], ['d6'],
      ],
      movesTr: [
        null, null, null, null, null, null,
        '4.e4 — Alekhine hattı, geniş bir merkez.', null,
        null, '5…Nbc6 — ikinci atı geliştir.',
        null, null, null, null, null, null,
      ] },

    // ---------------- FAJAROWICZ 3…Ne4 ----------------
    { id: 'fajarowicz', name: 'Fajarowicz (3…Ne4)', nameTr: 'Fajarowicz (3…Ne4)', group: 'fajaro',
      idea: 'The bold cousin: the knight leaps to e4. Quick development with …Bc5 and …Nc6 sets nasty tricks against an unprepared White.',
      ideaTr: 'Cesur kuzen: at e4’e sıçrar. …Bc5 ve …Nc6 ile hızlı gelişim, hazırlıksız bir beyaza karşı sinsi hileler kurar.',
      moves: [
        ['d4'], ['Nf6'], ['c4'], ['e5'], ['dxe5'], ['Ne4', '3…Ne4!? — the Fajarowicz, daring and tricky.'],
        ['Nf3'], ['Bc5', '4…Bc5 — eye f2 and develop fast.'],
        ['e3'], ['Nc6'], ['Be2'], ['d6', '6…d6 — strike back at e5 before White consolidates.'],
        ['exd6'], ['Bxd6'],
      ],
      movesTr: [
        null, null, null, null, null, '3…Ne4!? — Fajarowicz, cesur ve hileli.',
        null, '4…Bc5 — f2’yi gözetle ve hızlı geliş.',
        null, null, null, '6…d6 — beyaz toparlanmadan e5’e geri vur.',
        null, null,
      ] },

    // ---------------- DECLINED ----------------
    { id: 'declined-d5', name: 'Declined 3.d5', nameTr: 'Red 3.d5', group: 'decl',
      idea: 'White locks the centre with 3.d5 instead of taking. Treat it like a Czech Benoni in reverse: clamp with …Bc5 and …d6.',
      ideaTr: 'Beyaz almak yerine 3.d5 ile merkezi kilitler. Bunu tersine çevrilmiş bir Çek Benoni gibi ele al: …Bc5 ve …d6 ile sıkıştır.',
      moves: [
        ['d4'], ['Nf6'], ['c4'], ['e5'], ['d5', '3.d5 — White declines and grabs space.'], ['Bc5'],
        ['Nc3'], ['d6'], ['e4'], ['O-O'], ['Nf3'], ['Ng4', '6…Ng4 — provoke a weakening or trade dark-squared bishops.'],
      ],
      movesTr: [
        null, null, null, null, '3.d5 — beyaz reddeder ve alan kazanır.', null,
        null, null, null, null, null, '6…Ng4 — bir zayıflama kışkırt ya da koyu kareli filleri değiş.',
      ] },
    { id: 'declined-nf3', name: 'Declined 3.Nf3', nameTr: 'Red 3.Nf3', group: 'decl',
      idea: 'White holds the centre with 3.Nf3. Push …e4 to gain space and chase the knight; Black gets a pleasant game.',
      ideaTr: 'Beyaz 3.Nf3 ile merkezi tutar. Alan kazanmak ve atı kovalamak için …e4 it; siyah keyifli bir oyun elde eder.',
      moves: [
        ['d4'], ['Nf6'], ['c4'], ['e5'], ['Nf3'], ['e4', '3…e4 — gain space and kick the knight.'],
        ['Nfd2'], ['Nc6'], ['Nc3'], ['Bb4'], ['a3'], ['Bxc3'], ['bxc3'], ['d6'],
      ],
      movesTr: [
        null, null, null, null, null, '3…e4 — alan kazan ve atı kov.',
        null, null, null, null, null, null, null, null,
      ] },
  ],
};
