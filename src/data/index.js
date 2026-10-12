// Opening library. Each opening is a "folder"; its lines are the branches.
// Add a new opening by importing its module and pushing it here.
import { repertoire as bdg } from './bdg.js?v=52';
import { repertoire as jobava } from './jobava.js?v=52';
import { repertoire as budapest } from './budapest.js?v=52';
import { repertoire as qg } from './queensgambit.js?v=52';
import { repertoire as ruylopez } from './ruylopez.js?v=52';
import { repertoire as italian } from './italian.js?v=52';
import { repertoire as sicilian } from './sicilian.js?v=52';
import { repertoire as french } from './french.js?v=52';
import { repertoire as carokann } from './carokann.js?v=52';
import { repertoire as alien } from './alien.js?v=52';
import { repertoire as benoni } from './benoni.js?v=52';
import { repertoire as oldbenoni } from './benonigambit.js?v=52';
import { repertoire as scotchgambit } from './scotchgambit.js?v=52';
import { repertoire as viennagambit } from './viennagambit.js?v=52';
import { repertoire as kingsindian } from './kingsindian.js?v=52';
import { repertoire as pirc } from './pirc.js?v=52';

export const openings = [bdg, scotchgambit, viennagambit, jobava, budapest, alien, oldbenoni, benoni, qg, ruylopez, italian, sicilian, french, carokann, kingsindian, pirc];

// browse-by-category + which ones are tabia originals (curated, aggressive)
const CATEGORY = {
  bdg: 'Gambits', scotchgambit: 'Gambits', viennagambit: 'Gambits', budapest: 'Gambits', alien: 'Gambits', jobava: 'Systems', oldbenoni: 'Gambits',
  qg: 'Classical', ruylopez: 'Classical', italian: 'Classical',
  sicilian: 'Defences', french: 'Defences', carokann: 'Defences', benoni: 'Defences', kingsindian: 'Defences', pirc: 'Defences',
};
for (const o of openings) o.category = o.category || CATEGORY[o.id] || 'Other';
export const CATEGORIES = ['Gambits', 'Classical', 'Defences', 'Systems'];

// fallback labels for openings that don't carry their own group metadata
export const groupMeta = {
  accepted: { label: 'Accepted', blurb: 'Black takes the pawn', labelTr: 'Kabul', blurbTr: 'Siyah piyonu alır' },
  ryder:    { label: 'Ryder',    blurb: 'The double-pawn gambit', labelTr: 'Ryder', blurbTr: 'Çift piyon gambiti' },
  declined: { label: 'Declined', blurb: 'Black gives the pawn back', labelTr: 'Red', blurbTr: 'Siyah piyonu geri verir' },
};

export function openingById(id) { return openings.find(o => o.id === id); }
export function groupsOf(op) {
  const seen = [];
  for (const l of op.lines) if (!seen.includes(l.group)) seen.push(l.group);
  const meta = op.groups || groupMeta;
  return seen.map(g => ({ key: g, ...(meta[g] || groupMeta[g] || { label: g, blurb: '' }), lines: op.lines.filter(l => l.group === g) }));
}
// the signature position to show on an opening's preview board (a few plies in)
export function previewFen(op, plies = 7) {
  return { moves: (op.lines.find(l => l.star) || op.lines[0]).moves.slice(0, plies).map(m => m[0]) };
}
