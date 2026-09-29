// Renders og.jpg (link preview), icon-180.png, icon-512.png and favicon.svg from the site's own assets.
//   NODE_PATH=$(npm root -g) node tools/render-images.js
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const svgSrc = fs.readFileSync(path.join(__dirname, 'svg.py'), 'utf8');
const mark = svgSrc.match(/MONO = '''([\s\S]*?)'''/)[1];
const standalone = mark.replace('<svg viewBox="0 0 64 64" aria-hidden="true" class="mark">', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">');
fs.writeFileSync(path.join(root, 'favicon.svg'), standalone + '\n');

const u = f => 'file://' + path.join(root, f);
const og = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:IS;src:url(${u('fonts/instrument-serif.woff2')})}@font-face{font-family:IS;font-style:italic;src:url(${u('fonts/instrument-serif-italic.woff2')})}
@font-face{font-family:MR;font-weight:200 800;src:url(${u('fonts/manrope.woff2')})}
html,body{margin:0}body{width:1200px;height:630px;overflow:hidden;position:relative;font-family:MR;color:#F7F2E8;background:#060607}
.bg{position:absolute;inset:0;background:url(${u('assets/img/vito-night.webp')}) 70% 45%/cover}
.bg::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(6,6,7,.96) 0%,rgba(6,6,7,.75) 45%,rgba(6,6,7,.1) 100%)}
.in{position:absolute;left:70px;top:64px;right:70px}
.brand{display:flex;align-items:center;gap:14px}.brand svg{width:62px;height:62px}
.brand b{display:block;font-weight:800;letter-spacing:.22em;font-size:24px}.brand small{display:block;margin-top:6px;font-size:12px;letter-spacing:.38em;color:#F5B82E;font-weight:700}
h1{margin:70px 0 0;font-family:IS;font-weight:400;font-size:108px;line-height:.92;letter-spacing:-.02em}
h1 em{background:linear-gradient(135deg,#FFE9A8,#F5B82E 45%,#D9951B 75%,#B7811A);-webkit-background-clip:text;color:transparent}
.row{position:absolute;left:70px;bottom:62px;display:flex;gap:14px;align-items:center}
.pill{padding:12px 20px;border-radius:999px;font-weight:700;font-size:20px;background:rgba(255,255,255,.08);border:1px solid rgba(255,236,196,.2)}
.gold{background:linear-gradient(135deg,#FFE9A8,#F5B82E 45%,#D9951B);color:#1B1204;border:0}
</style></head><body><div class="bg"></div><div class="in">
<div class="brand">${mark}<div><b>VITO TAXI</b><small>BY CHARBEL</small></div></div>
<h1>Your comfort,<br><em>our priority.</em></h1></div>
<div class="row"><span class="pill gold">WhatsApp +961 70 609 211</span><span class="pill">24/7 · Mercedes Vito · ★ 4.9</span></div>
</body></html>`;
const icon = `<!doctype html><html><head><style>html,body{margin:0}body{width:512px;height:512px;display:grid;place-items:center;background:radial-gradient(circle at 50% 40%,#1a1407,#060607 70%)}svg{width:420px;height:420px}</style></head><body>${mark}</body></html>`;

(async () => {
  const b = await chromium.launch();
  fs.writeFileSync(path.join(__dirname, '.og.html'), og);
  fs.writeFileSync(path.join(__dirname, '.icon.html'), icon);
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await p.goto(u('tools/.og.html')); await p.waitForTimeout(600);
  await p.screenshot({ path: path.join(root, 'og.jpg'), type: 'jpeg', quality: 86 });
  for (const s of [512, 180]) {
    const q = await b.newPage({ viewport: { width: 512, height: 512 }, deviceScaleFactor: s / 512 });
    await q.goto(u('tools/.icon.html')); await q.waitForTimeout(200);
    await q.screenshot({ path: path.join(root, 'icon-' + s + '.png') });
  }
  await b.close();
  fs.unlinkSync(path.join(__dirname, '.og.html')); fs.unlinkSync(path.join(__dirname, '.icon.html'));
})();
