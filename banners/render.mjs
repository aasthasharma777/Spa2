/**
 * Export each banner in index.html to a PNG in ./out/
 *
 *   node render.mjs                  # all three, primary photography
 *   node render.mjs cupping          # just one, by element id
 *   ITERATION=2 node render.mjs      # all three, using assets/iteration-2/
 *
 * Iterations are alternate photography for the same three layouts. The
 * primary set lives in assets/; iteration N lives in assets/iteration-N/
 * under the same filenames, and renders to out/iteration-N/.
 *
 * Chromium ships with this environment; elsewhere run `npx playwright install chromium`.
 */
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const here = path.dirname(fileURLToPath(import.meta.url));
const only = process.argv.slice(2);
const ids = only.length ? only : ['cupping', 'potli', 'scrub'];

// An iteration swaps the photography without touching the layout: point the
// banners at assets/iteration-N/ and write into out/iteration-N/.
const iteration = process.env.ITERATION || '';
const outDir = iteration ? path.join(here, 'out', `iteration-${iteration}`) : path.join(here, 'out');
await fs.mkdir(outDir, { recursive: true });

// Use a preinstalled Chromium when the bundled build isn't downloaded
// (e.g. PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD environments). Override with
// CHROMIUM_PATH=/path/to/chrome.
const executablePath = process.env.CHROMIUM_PATH || undefined;
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.goto(pathToFileURL(path.join(here, 'index.html')).href, { waitUntil: 'load' });
// How much scrim each photograph needs is a property of that photograph's
// exposure, not of the layout, so it travels with the iteration. A brightly
// lit pale wall needs real help to carry cream type; a deep colour-drenched
// wall needs almost none. banner.css holds the primary set's values.
const SCRIM = {
  '2': { cupping: '.16', potli: '.22', scrub: '.28' },
  '3': { cupping: '.08', potli: '.06', scrub: '.06' },
};

if (iteration) {
  await page.evaluate(({ it, scrim }) => {
    for (const el of document.querySelectorAll('.banner__photo')) {
      const url = el.style.getPropertyValue('--photo');
      el.style.setProperty('--photo', url.replace('assets/', `assets/iteration-${it}/`));
    }
    if (scrim) {
      for (const [theme, a] of Object.entries(scrim)) {
        document.querySelector(`.banner[data-theme="${theme}"]`)?.style.setProperty('--scrim-a', a);
      }
    }
  }, { it: iteration, scrim: SCRIM[iteration] });
}
await page.evaluate(() => document.fonts.ready);

for (const id of ids) {
  const el = page.locator(`#${id}`);
  const out = path.join(outDir, `${id}.png`);
  await el.screenshot({ path: out, omitBackground: true });
  console.log('wrote', path.relative(here, out));
}

await browser.close();
