// tabia — the coach. Speaks before/after moves. Messages are user-configurable
// and stored in the browser; these are just the defaults.
import { Store } from './store.js?v=52';
import { getLang } from './i18n.js?v=52';

const DEFAULT_MESSAGES_EN = {
  start:    ['Let\'s drill. Play the repertoire move.', 'Board\'s set. Show me the line.', 'Warm up those reflexes — your move.'],
  correct:  ['Clean.', 'That\'s the one.', 'Exactly right.', 'Booked.', 'Crisp move.'],
  wrong:    ['Not quite — look again.', 'That\'s off-book. The move was {exp}.', 'Close, but {exp} is the line.', 'Reset and feel it: {exp}.'],
  done:     ['Line complete. Filed away.', 'Whole line, clean. Nice.', 'Done — that one\'s in the muscle now.'],
  doneMiss: ['Logged — we\'ll see this one again soon.', 'A slip in there; it comes back sooner.', 'Not clean, but you\'ll get it next pass.'],
  learn:    ['Watch how it flows.', 'Here\'s the idea — follow the plan.', 'Study the shape, then you\'ll drill it.'],
  offBook:  ['That leaves your prep — {exp} keeps you in the lines.', 'Off your repertoire here. The move is {exp}.', 'Not in your book — play {exp}.'],
};
const DEFAULT_MESSAGES_TR = {
  start:    ['Haydi antrenman yapalım. Repertuvar hamleni oyna.', 'Tahta hazır. Hattı göster bana.', 'Reflekslerini ısıt — sıra sende.'],
  correct:  ['Temiz.', 'İşte bu.', 'Tam isabet.', 'Kitaba uygun.', 'Keskin hamle.'],
  wrong:    ['Tam değil — tekrar bak.', 'Bu kitap dışı. Doğru hamle {exp} idi.', 'Yakın, ama hat {exp}.', 'Sıfırla ve hisset: {exp}.'],
  done:     ['Hat tamamlandı. Kayda geçti.', 'Bütün hat, tertemiz. Güzel.', 'Bitti — o artık kasında.'],
  doneMiss: ['Kaydedildi — bunu yakında tekrar göreceğiz.', 'Küçük bir hata oldu; daha çabuk geri gelecek.', 'Temiz değildi, ama bir dahaki sefere yakalarsın.'],
  learn:    ['Nasıl aktığını izle.', 'İşte fikir — planı takip et.', 'Şekli incele, sonra antrenman yaparsın.'],
  offBook:  ['Bu hazırlığının dışına çıkıyor — {exp} seni hatta tutar.', 'Burada repertuvarının dışındasın. Doğru hamle {exp}.', 'Kitabında yok — {exp} oyna.'],
};
const DEFAULT_MESSAGES = () => (getLang() === 'tr' ? DEFAULT_MESSAGES_TR : DEFAULT_MESSAGES_EN);

export const MSG_FIELDS_EN = [
  { key: 'start',   label: 'Session start' },
  { key: 'correct', label: 'Correct move' },
  { key: 'wrong',   label: 'Wrong move ({exp} = right move)' },
  { key: 'done',    label: 'Line finished clean' },
  { key: 'doneMiss',label: 'Line finished with a slip' },
  { key: 'offBook', label: 'Off-book in Hyper ({exp} = right move)' },
];
const MSG_FIELDS_TR = [
  { key: 'start',   label: 'Oturum başlangıcı' },
  { key: 'correct', label: 'Doğru hamle' },
  { key: 'wrong',   label: 'Yanlış hamle ({exp} = doğru hamle)' },
  { key: 'done',    label: 'Hat temiz bitti' },
  { key: 'doneMiss',label: 'Hat bir hatayla bitti' },
  { key: 'offBook', label: 'Hyper’da kitap dışı ({exp} = doğru hamle)' },
];
export function MSG_FIELDS() { return getLang() === 'tr' ? MSG_FIELDS_TR : MSG_FIELDS_EN; }

export function messagesFor(key) {
  const custom = Store.prefs().messages || {};
  const defaults = DEFAULT_MESSAGES();
  const list = (custom[key] && custom[key].length) ? custom[key] : defaults[key];
  return list && list.length ? list : defaults[key] || [''];
}
export function coachSay(key, vars = {}, lineMsgs = null) {
  const list = (lineMsgs && lineMsgs[key] && lineMsgs[key].length) ? lineMsgs[key] : messagesFor(key);
  let m = list[Math.floor(Math.random() * list.length)] || '';
  return m.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
}
export function saveMessages(key, text) {
  const p = Store.prefs();
  p.messages ||= {};
  const lines = text.split('\n').map(s => s.trim()).filter(Boolean);
  if (lines.length) p.messages[key] = lines; else delete p.messages[key];
  Store.setPref('messages', p.messages);
}
