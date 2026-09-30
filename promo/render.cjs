// Renders promo/src/ad.html to promo/vito-taxi-ad.mp4 (1080×1920, 30 fps, H.264).
//   NODE_PATH=$(npm root -g) node promo/render.cjs      (needs Playwright + `pip install imageio-ffmpeg`)
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path');
const FPS = 30, SECONDS = 23;
const dir = __dirname, frames = path.join(dir, '.frames');
fs.rmSync(frames, { recursive: true, force: true }); fs.mkdirSync(frames);
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.join(dir, 'src', 'ad.html'), { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(500);
  await p.evaluate(() => document.getAnimations().forEach(a => a.pause()));
  const total = FPS * SECONDS;
  for (let i = 0; i < total; i++) {
    await p.evaluate(ms => document.getAnimations().forEach(a => { a.currentTime = ms }), (i / FPS) * 1000);
    await p.screenshot({ path: path.join(frames, String(i).padStart(4, '0') + '.jpg'), type: 'jpeg', quality: 92 });
    if (i % 90 === 0) process.stdout.write(`frame ${i}/${total}\n`);
  }
  await b.close();
  const ffmpeg = execFileSync('python3', ['-c', 'import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())']).toString().trim();
  execFileSync(ffmpeg, ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(frames, '%04d.jpg'),
    '-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=44100', '-shortest',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '19', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-c:a', 'aac', '-b:a', '96k',
    '-movflags', '+faststart', path.join(dir, 'vito-taxi-ad.mp4')]);
  fs.copyFileSync(path.join(frames, String(Math.round(FPS * 21.5)).padStart(4, '0') + '.jpg'), path.join(dir, 'vito-taxi-ad-cover.jpg'));
  fs.rmSync(frames, { recursive: true, force: true });
  console.log('Wrote promo/vito-taxi-ad.mp4');
})();
