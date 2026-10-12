import { openings } from '../src/data/index.js?v=51';
let bad = 0;
for (const op of openings) {
  for (const line of op.lines) {
    if (line.movesTr && line.movesTr.length !== line.moves.length) {
      console.log(`MISMATCH ${op.id}/${line.id}: moves=${line.moves.length} movesTr=${line.movesTr.length}`);
      bad++;
    }
  }
}
console.log(bad ? `${bad} MISMATCHES` : 'ALL movesTr ARRAYS ALIGNED ✓');
process.exit(bad ? 1 : 0);
