// What contrast does the type actually get from the photograph underneath it?
//
//   node tools/contrast.mjs [page.html]           as shipped
//   NOSCRIM=1 node tools/contrast.mjs [page.html] with the scrim switched off
//
// Method, and why it is done this way: it renders the real page, measures
// where each headline line's GLYPHS land, then hides the type and samples the
// photograph inside exactly those rectangles. Sampling a guessed box, or the
// whole top third, averages in wall the type never touches and flatters the
// result. What comes back is the mean relative luminance of the bed and the
// WCAG contrast ratio of cream (#F8EED6) against it.
//
// Read the MEAN against the reference banner, which lands at roughly
// 3.3-5.4:1. That is the bar. Below ~3:1 the fix is to repaint the wall in
// the next shoot, not to add a scrim -- a scrim buys contrast by desaturating
// the whole frame, which is the "dull banner" problem this campaign started
// with. The "lightest patch" column is a crop warning, not a contrast
// verdict: it says part of the line is passing over something bright, which
// is usually fixed by moving the crop, not the wall.
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const HERE = path.dirname(new URL('.', import.meta.url).pathname);
const page_ = process.argv[2] || 'index.html';
const noScrim = !!process.env.NOSCRIM;

const srgb = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
const CREAM = 0.2126 * srgb(0xF8) + 0.7152 * srgb(0xEE) + 0.0722 * srgb(0xD6);
const ratio = bed => (Math.max(CREAM, bed) + 0.05) / (Math.min(CREAM, bed) + 0.05);

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ deviceScaleFactor: 1 });
await page.goto(pathToFileURL(path.join(HERE, page_)).href, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);

// 1. Measure the glyph rectangles WHILE the type is visible.
const zones = await page.evaluate(() => {
  const out = {};
  for (const ban of document.querySelectorAll('.banner')) {
    const br = ban.getBoundingClientRect();
    const block = ban.querySelector('.h-word, .h-editorial, .h-script, .h-stack, .h-rules');
    if (!block) continue;
    out[ban.id] = [...block.children].filter(c => c.textContent.trim()).map(c => {
      const range = document.createRange();
      range.selectNodeContents(c);
      const k = range.getBoundingClientRect();
      return [c.textContent.trim().slice(0, 18),
              Math.round(k.left - br.left), Math.round(k.top - br.top),
              Math.round(k.width), Math.round(k.height)];
    });
  }
  return out;
});

// 2. Hide the type (visibility, not display -- display would reflow nothing
//    here but visibility is the honest "same layout, no glyphs" state).
await page.addStyleTag({ content:
  '.h-word, .h-editorial, .h-script, .h-stack, .h-rules { visibility: hidden !important; }' });
if (noScrim) await page.addStyleTag({ content: '.banner__topscrim { display: none !important; }' });
await page.waitForTimeout(250);

console.log(noScrim ? 'SCRIM OFF (raw photograph)' : 'SCRIM ON (as shipped)');
for (const [id, boxes] of Object.entries(zones)) {
  const shot = (await page.locator('#' + id).screenshot()).toString('base64');
  const rows = await page.evaluate(async ({ b64, boxes }) => {
    const img = new Image(); img.src = 'data:image/png;base64,' + b64; await img.decode();
    const c = document.createElement('canvas');
    c.width = img.width; c.height = img.height;
    const ctx = c.getContext('2d'); ctx.drawImage(img, 0, 0);
    const sr = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return boxes.map(([name, x, y, w, h]) => {
      if (w < 1 || h < 1) return { name, bed: null };
      const d = ctx.getImageData(x, y, w, h).data;
      let sum = 0, R = 0, G = 0, B = 0, n = 0; const L = [];
      for (let i = 0; i < d.length; i += 4) {
        const v = 0.2126 * sr(d[i]) + 0.7152 * sr(d[i + 1]) + 0.0722 * sr(d[i + 2]);
        L.push(v); sum += v; R += d[i]; G += d[i + 1]; B += d[i + 2]; n++;
      }
      L.sort((a, b) => a - b);
      const hex = v => Math.round(v).toString(16).padStart(2, '0');
      return {
        name, bed: sum / n,
        // The lightest patch anywhere in the line's rectangle. Most of that
        // rectangle is the gaps BETWEEN letters, so this is an early warning
        // that part of the line crosses something bright (a window, a curtain)
        // -- not a verdict on the line. The mean is the number to judge by.
        p95: L[Math.floor(L.length * 0.95)],
        wall: '#' + hex(R / n) + hex(G / n) + hex(B / n),
      };
    });
  }, { b64: shot, boxes });

  console.log('\n' + id);
  for (const r of rows) {
    if (r.bed === null) { console.log('  ' + r.name.padEnd(20) + '(zero-area)'); continue; }
    const mean = ratio(r.bed), lightest = ratio(r.p95);
    console.log('  ' + r.name.padEnd(20) + r.wall +
      '   bed ' + (r.bed * 100).toFixed(1).padStart(5) + '%' +
      '   mean ' + mean.toFixed(2).padStart(5) + ':1' +
      '   lightest patch ' + lightest.toFixed(2).padStart(5) + ':1' +
      (mean < 3 ? '   <-- BELOW THE REFERENCE BAND, repaint the wall'
       : lightest < 2 ? '   <-- line crosses something bright, check the crop' : ''));
  }
}
await browser.close();
