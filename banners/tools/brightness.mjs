// Is a candidate photograph bright where it should be and dark where the
// type goes?
//
//   node tools/brightness.mjs assets/korean-scrub.jpg [more.jpg ...]
//
// The whole art direction of this set rests on one split: the SUBJECT carries
// the brightness (oiled back, white sheet, sunlit floor) while the WALL behind
// the type sits two steps below it. That is what lets the scrim go to zero and
// the banner stay bright. A frame that is uniformly bright needs a scrim and
// goes dull; a frame that is uniformly dark reads as a different campaign.
//
// The numbers to aim for, measured off the three approved autumn frames:
//   type zone     ~20%      subject zone   ~33%
// A type zone above ~24% is the warning sign. Judge the SPLIT, not the
// absolute values -- exposure varies, the relationship is the design.
//
// Zones are given in the 1000x1372 banner frame, cover-cropped exactly as CSS
// background-size: cover crops it, so what is measured is what ships -- not
// the whole 3:4 source, which includes pixels the banner never shows.
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const FW = 1000, FH = 1372;
const files = process.argv.slice(2);
if (!files.length) {
  console.error('usage: node tools/brightness.mjs <image> [image ...]');
  process.exit(2);
}

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage();
await page.setContent('<!doctype html><title>probe</title>');

console.log('file'.padEnd(30) + 'frame   type-zone  subject   split   wall hex');
for (const f of files) {
  if (!fs.existsSync(f)) { console.log(f.padEnd(30) + 'MISSING'); continue; }
  const ext = path.extname(f).toLowerCase();
  const mime = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';
  const url = 'data:' + mime + ';base64,' + fs.readFileSync(f).toString('base64');

  const r = await page.evaluate(async ({ url, FW, FH }) => {
    const img = new Image(); img.src = url; await img.decode();
    // Replicate background-size: cover + background-position: center.
    const s = Math.max(FW / img.width, FH / img.height);
    const dw = img.width * s, dh = img.height * s;
    const c = document.createElement('canvas'); c.width = FW; c.height = FH;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, (FW - dw) / 2, (FH - dh) / 2, dw, dh);

    const sr = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    const zone = (x, y, w, h) => {
      const d = ctx.getImageData(x, y, w, h).data;
      let sum = 0, R = 0, G = 0, B = 0, n = 0;
      for (let i = 0; i < d.length; i += 4) {
        sum += 0.2126 * sr(d[i]) + 0.7152 * sr(d[i + 1]) + 0.0722 * sr(d[i + 2]);
        R += d[i]; G += d[i + 1]; B += d[i + 2]; n++;
      }
      const hex = v => Math.round(v).toString(16).padStart(2, '0');
      return { lum: sum / n, hex: '#' + hex(R / n) + hex(G / n) + hex(B / n) };
    };
    return {
      all: zone(0, 0, FW, FH).lum,
      top: zone(0, 0, FW, 600).lum,          // where the headline sits
      bot: zone(0, 760, FW, 612).lum,        // where the treatment sits
      wall: zone(300, 140, 400, 240).hex,    // clear wall behind the headline
    };
  }, { url, FW, FH });

  const pc = v => (v * 100).toFixed(1) + '%';
  const split = ((r.bot - r.top) * 100).toFixed(1);
  console.log(
    path.basename(f).slice(0, 29).padEnd(30) +
    pc(r.all).padStart(6) + pc(r.top).padStart(11) + pc(r.bot).padStart(10) +
    (split + 'pt').padStart(9) + '   ' + r.wall +
    (r.top > 0.24 ? '   <-- type zone light' : '') +
    (r.bot <= r.top ? '   <-- subject not carrying the light' : '')
  );
}
await browser.close();
