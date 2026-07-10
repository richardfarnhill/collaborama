// Executes the REAL code shipped in reason.html — extracted from the file itself,
// not re-typed — against Codex's SELF_TEST_CASES plus adversarial cases for both
// the grounding verifier and the response parser. Run with: node test-reason.js
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'reason.html'), 'utf8');

const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) { console.error('No script block found in reason.html'); process.exit(1); }
const js = scriptMatch[1];

// Stub the DOM so the shipped code loads unmodified.
const listeners = {};
const elements = {};
function fakeEl(id) {
  if (!elements[id]) elements[id] = {
    id, textContent: '', innerHTML: '', className: '', value: '', checked: false, disabled: false,
    addEventListener: (ev, fn) => { listeners[id + ':' + ev] = fn; }
  };
  return elements[id];
}
global.document = { getElementById: fakeEl };
global.fetch = () => { throw new Error('network disabled in test'); };

const results = [];
eval(js + `
// --- harness runs in the same scope as the shipped functions ---

// 1. Codex's in-page self-test, executed for real:
const st = runGroundingSelfTest();
results.push(['runGroundingSelfTest', st.failures.length === 0,
  st.total + ' cases, ' + st.failures.length + ' failures' +
  (st.failures.length ? ': ' + st.failures.map(f => f.label).join(', ') : '')]);

// 2. Adversarial isGrounded cases beyond the in-page set:
const extra = [
  ['empty quote rejected', isGrounded('', 'anything') === false],
  ['whitespace-only quote rejected', isGrounded('   ', 'anything') === false],
  ['quote longer than source rejected', isGrounded('the entire agreement plus extra words', 'the entire agreement') === false],
  ['curly single quote normalized', isGrounded("don\\u2019t terminate", "You may not don't terminate early") === true],
  ['multiline source, single-line quote', isGrounded('due within 30 days', 'Payment is\\ndue within 30\\ndays of invoice') === true],
];
for (const [label, ok] of extra) results.push(['isGrounded: ' + label, ok, '']);

// 3. parseClaims against realistic model output shapes:
function tryParse(label, raw, expectCount) {
  try {
    const claims = parseClaims(raw);
    results.push(['parseClaims: ' + label, claims.length === expectCount,
      'got ' + claims.length + ', expected ' + expectCount]);
  } catch (e) {
    results.push(['parseClaims: ' + label, expectCount === -1, 'threw: ' + e.message.slice(0, 80)]);
  }
}
tryParse('clean JSON array', '[{"claim":"a","evidence":"b"}]', 1);
tryParse('markdown-fenced JSON', '\\u0060\\u0060\\u0060json\\n[{"claim":"a","evidence":"b"}]\\n\\u0060\\u0060\\u0060', 1);
tryParse('fenced with trailing newline', '\\u0060\\u0060\\u0060json\\n[{"claim":"a","evidence":"b"}]\\n\\u0060\\u0060\\u0060\\n', 1);
tryParse('preamble text before fence', 'Here are the claims:\\n\\u0060\\u0060\\u0060json\\n[{"claim":"a","evidence":"b"}]\\n\\u0060\\u0060\\u0060', 1);
tryParse('missing evidence key filtered', '[{"claim":"a"},{"claim":"b","evidence":"c"}]', 1);
tryParse('non-array rejected', '{"claim":"a"}', -1);

// 4. Consent is a real gate: an analysis request must not reach fetch until the
// user confirms the direct transfer to their selected provider.
document.getElementById('f-provider').value = 'openai';
document.getElementById('f-key').value = 'test-key';
document.getElementById('f-source').value = 'This is deliberately long enough source text to reach the consent check first.';
document.getElementById('f-share').checked = false;
let fetchCalled = false;
global.fetch = () => { fetchCalled = true; throw new Error('fetch must not run without consent'); };
listeners['analyze-btn:click']();
results.push(['consent blocks network request', !fetchCalled && elements['status'].textContent.includes('Confirm the direct transfer'), elements['status'].textContent]);

// 5. Local demo mode should run end to end without a key or fetch call.
document.getElementById('f-provider').value = 'mock';
document.getElementById('f-key').value = '';
document.getElementById('f-source').value = 'The service may change its price after 30 days. Additional context follows so the passage is long enough to exercise the demo path.';
document.getElementById('f-share').checked = false;
fetchCalled = false;
global.fetch = () => { fetchCalled = true; throw new Error('fetch must not run in mock mode'); };
listeners['analyze-btn:click']();
results.push([
  'local demo runs without a key',
  !fetchCalled && elements['status'].textContent.includes('local demo') && elements['claims'].innerHTML.includes('Grounded') && elements['claims'].innerHTML.includes('Not verified'),
  elements['status'].textContent
]);
`);

let pass = 0;
for (const [label, ok, detail] of results) {
  if (ok) pass++;
  console.log((ok ? 'PASS' : 'FAIL') + '  ' + label + (detail ? '  [' + detail + ']' : ''));
}
console.log('---');
console.log(pass + '/' + results.length + ' passed');
process.exit(pass === results.length ? 0 : 2);
