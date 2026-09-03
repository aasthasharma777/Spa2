// Does every headline line fit?
//
//   node tools/fit.mjs [page.html]        (default index.html)
//
// Reports, per banner on the page, the real INK width of each headline line
// against the type column, and how far down the frame the headline block ends.
// Ink width, not the layout box: a box can be 888px wide and still hold
// glyphs that overhang it, and it is the glyphs that read as "too close to
// the edge". See README, "Ink bounds, not layout boxes".
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const HERE = path.dirname(new URL('.', import.meta.url).pathname);
const page_ = process.argv[2] || 'index.html';

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ deviceScaleFactor: 1 });
await page.goto(pathToFileURL(path.join(HERE, page_)).href, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);

const rows = await page.evaluate(() => {
  const out = [];
  for (const ban of document.querySelectorAll('.banner')) {
    const br = ban.getBoundingClientRect();
    const block = ban.querySelector('.h-word, .h-editorial, .h-script, .h-stack, .h-rules');
    if (!block) continue;
    const blr = block.getBoundingClientRect();
    // The column is the BLOCK's own box, not a fixed margin: hierarchy B
    // (.h-editorial) is inset 56 left but 300 right, so a hardcoded 56 would
    // measure a column that does not exist.
    const col = blr.width;
    const lines = [...block.children].filter(c => c.textContent.trim()).map(c => {
      const range = document.createRange();
      range.selectNodeContents(c);
      const ink = range.getBoundingClientRect();   // real glyph bounds
      return {
        text: c.textContent.trim().slice(0, 20),
        ink: Math.round(ink.width),
        headroom: Math.round(col - ink.width),
        // Ink outside the block's own box. Positive = glyphs stick out. This
        // is usually a font side bearing rather than a layout fault -- Pinyon
        // Script's swashes hang ~10px left of their box at display sizes --
        // but it is exactly what reads as "the type is too near the edge",
        // so it is reported, not hidden.
        hangLeft: Math.round(blr.left - ink.left),
        hangRight: Math.round(ink.right - blr.right),
        // Distance from the glyphs to the frame edge, which is what the eye
        // actually judges.
        toFrameLeft: Math.round(ink.left - br.left),
        toFrameRight: Math.round(br.right - ink.right),
      };
    });
    out.push({
      id: ban.id, col: Math.round(col),
      endsAt: +(((blr.bottom - br.top) / br.height) * 100).toFixed(1),
      lines,
    });
  }
  return out;
});

let broken = 0;
for (const r of rows) {
  // A real fit failure: the glyphs are wider than the column they live in.
  const over = r.lines.filter(l => l.headroom < 0);
  broken += over.length;
  console.log(
    '\n' + r.id + '   column ' + r.col + 'px   block ends at ' + r.endsAt + '% of frame   ' +
    (over.length ? 'DOES NOT FIT: ' + over.map(l => `"${l.text}" by ${-l.headroom}px`).join(', ') : 'fits')
  );
  for (const l of r.lines) {
    const notes = [];
    if (l.hangLeft > 2) notes.push('hangs ' + l.hangLeft + 'px left of its box');
    if (l.hangRight > 2) notes.push('hangs ' + l.hangRight + 'px right of its box');
    console.log(
      '    ' + l.text.padEnd(22) +
      'ink ' + String(l.ink).padStart(4) + 'px' +
      '   headroom ' + String(l.headroom).padStart(4) + 'px' +
      '   to frame edge ' + String(l.toFrameLeft).padStart(3) + '/' + String(l.toFrameRight).padStart(3) +
      (notes.length ? '   (' + notes.join('; ') + ')' : '')
    );
  }
}
await browser.close();
process.exit(broken ? 1 : 0);
