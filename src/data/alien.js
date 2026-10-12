// The Alien Gambit — White vs the Caro-Kann (1.e4 c6 2.d4 d5 3.Nd2 dxe4 4.Nxe4
// Nf6 5.Ng5 h6 6.Nxf7!?). A Tabia original: objectively losing, practically lethal.
export const repertoire = {
  id: 'alien', name: 'Alien Gambit', nameTr: 'Alien Gambiti', color: 'w', eco: 'B10', tabiaOriginal: true,
  oneLiner: '1.e4 c6 … 6.Nxf7!? — sacrifice the knight on f7 and hunt the king. 👽 Engine says no, the 1500s say yes.',
  oneLinerTr: '1.e4 c6 … 6.Nxf7!? — atı f7’de feda et ve şahı avla. 👽 Motor hayır diyor, 1500 seviyesi evet diyor.',
  offBook: ['The hunt only works on the rails — {exp} keeps the king cornered.', 'Drift here and Black consolidates. {exp} keeps the fire lit.', 'Off the abduction route 👽 — {exp} is the move.'],
  offBookTr: ['Avlanma ancak rayında işler — {exp} şahı köşeye sıkıştırmaya devam eder.', 'Burada sapılırsa siyah toparlanır. {exp} ateşi canlı tutar.', 'Kaçırma rotasından çıktın 👽 — doğru hamle {exp}.'],
  trunk: '1.e4 c6 2.d4 d5 3.Nd2 dxe4 4.Nxe4 Nf6 5.Ng5 h6 6.Nxf7',
  groups: { hunt: { label: 'The Sacrifice', labelTr: 'Fedakârlık', blurb: '6.Nxf7 and the king-hunt', blurbTr: '6.Nxf7 ve şah avı' } },
  lines: [
    { id: 'alien-main', name: 'Main King-Hunt (7…e6)', nameTr: 'Ana Şah Avı (7…e6)', group: 'hunt', star: true,
      idea: 'Objectively a knight down — Stockfish gives Black ≈ −2.7. But f7 is shattered, the king is stranded in the centre, and below ~1500 White scores around 60%. Pure chaos: Black has to find only-moves to survive.',
      ideaTr: 'Objektif olarak at eksiğisin — Stockfish siyaha ≈ −2.7 veriyor. Ama f7 parçalanmış, şah merkezde mahsur kalmış, ve ~1500 altında beyaz yaklaşık %60 kazanıyor. Tam bir kaos: siyah hayatta kalmak için her seferinde tek doğru hamleyi bulmak zorunda.',
      messages: { done: ['The aliens have landed. 👽', 'A knight down and winning — that’s the Alien Gambit.'] },
      messagesTr: { done: ['Uzaylılar indi. 👽', 'At eksik ama kazanıyorsun — işte Alien Gambiti bu.'] },
      moves: [
        ['e4'], ['c6'], ['d4'], ['d5'], ['Nd2'], ['dxe4'], ['Nxe4'], ['Nf6'],
        ['Ng5', '5.Ng5 — the knight leaps toward f7.'], ['h6', '5…h6 — “shooing” the knight, straight into the trap.'],
        ['Nxf7', '6.Nxf7!? — the Alien Gambit. The fork on d8/h8 makes …Kxf7 forced (else the queen falls to Nxd8).'], ['Kxf7'],
        ['Bc4+', '7.Bc4+ — drag the king into the open; the checks begin.'], ['e6'],
        ['Qf3', '8.Qf3 — pile on f6 and e6 (Qxf6+ and Bxe6+ loom). The king has no shelter.'],
      ],
      movesTr: [
        null, null, null, null, null, null, null, null,
        '5.Ng5 — at f7’ye doğru sıçrıyor.', '5…h6 — atı “kovalamaya” çalışıyor, ama tam tuzağa düşüyor.',
        '6.Nxf7!? — Alien Gambiti. d8/h8 çatalı …Kxf7’yi zorunlu kılıyor (yoksa vezir Nxd8’e düşer).', null,
        '7.Bc4+ — şahı açık alana sürükle; şahlar başlıyor.', null,
        '8.Qf3 — f6 ve e6 üzerine yüklen (Qxf6+ ve Bxe6+ tehdit ediyor). Şahın sığınacak yeri yok.',
      ] },
    { id: 'alien-ke8', name: 'King retreats (7…Ke8)', nameTr: 'Şah geri çekilir (7…Ke8)', group: 'hunt',
      idea: 'If Black scurries the king back to e8 instead of blocking, develop fast. Nf3, Ne5 and Qf3/Qe2 keep the king stuck in the centre with no castling and a lasting initiative for the piece.',
      ideaTr: 'Siyah engellemek yerine şahı e8’e geri kaçırırsa, hızlıca geliştir. Nf3, Ne5 ve Qf3/Qe2 şahı merkezde, roksuz ve sürekli bir inisiyatifle sıkışık tutar.',
      moves: [
        ['e4'], ['c6'], ['d4'], ['d5'], ['Nd2'], ['dxe4'], ['Nxe4'], ['Nf6'], ['Ng5'], ['h6'], ['Nxf7'], ['Kxf7'],
        ['Bc4+', '7.Bc4+ — the bishop joins the hunt.'], ['Ke8', '7…Ke8 — retreating, but castling rights are gone for good.'],
        ['Nf3', '8.Nf3 — the last piece; Ne5 and Qe2 keep the king in the crossfire.'],
      ],
      movesTr: [
        null, null, null, null, null, null, null, null, null, null, null, null,
        '7.Bc4+ — fil ava katılıyor.', '7…Ke8 — geri çekiliyor, ama rok hakkı sonsuza dek gitti.',
        '8.Nf3 — son taş; Ne5 ve Qe2 şahı çapraz ateşte tutuyor.',
      ] },
  ],
};
