/**
 * Export each banner in index.html to a PNG in ./out/
 *
 *   node render.mjs            # all three
 *   node render.mjs cupping    # just one, by element id
 *   NOTEXT=1 node render.mjs   # same plates with no lettering -> out/no-text/
 *
 * NOTEXT hides the headline and the footer wording but keeps the canvas,
 * the crop, the grain and both scrims, so the output lines up with the
 * lettered version pixel for pixel and can be used as a drop-in plate.
 * For the untouched source frames at 1728x2304, see assets/.
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

const noText = !!process.env.NOTEXT;
const outDir = noText ? path.join(here, 'out', 'no-text') : path.join(here, 'out');
await fs.mkdir(outDir, { recursive: true });

// Use a preinstalled Chromium when the bundled build isn't downloaded
// (e.g. PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD environments). Override with
// CHROMIUM_PATH=/path/to/chrome.
const executablePath = process.env.CHROMIUM_PATH || undefined;
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.goto(pathToFileURL(path.join(here, 'index.html')).href, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
if (noText) {
  await page.addStyleTag({ content: `
    .h-word, .h-editorial, .h-script,
    .banner__service, .banner__price, .banner__cta { visibility: hidden !important; }
  ` });
}

for (const id of ids) {
  const el = page.locator(`#${id}`);
  const out = path.join(outDir, `${id}.png`);
  await el.screenshot({ path: out, omitBackground: true });
  console.log('wrote', path.relative(here, out));
}

await browser.close();
