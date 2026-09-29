// Renders og.png, icon-180.png and icon-512.png from tools/og.html and tools/icon.html.
//   NODE_PATH=$(npm root -g) node tools/render-images.js
const { chromium } = require('playwright');
const path = require('path');
const root = path.resolve(__dirname, '..');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await p.goto('file://' + path.join(root, 'tools/og.html')); await p.waitForTimeout(400);
  await p.screenshot({ path: path.join(root, 'og.png') });
  for (const s of [512, 180]) {
    const q = await b.newPage({ viewport: { width: 512, height: 512 }, deviceScaleFactor: s / 512 });
    await q.goto('file://' + path.join(root, 'tools/icon.html')); await q.waitForTimeout(200);
    await q.screenshot({ path: path.join(root, 'icon-' + s + '.png') });
  }
  await b.close();
})();
