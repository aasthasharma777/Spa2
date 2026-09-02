/**
 * Export each banner in index.html to a PNG in ./out/
 *
 *   node render.mjs            # all three
 *   node render.mjs cupping    # just one, by element id
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

await fs.mkdir(path.join(here, 'out'), { recursive: true });

// Use a preinstalled Chromium when the bundled build isn't downloaded
// (e.g. PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD environments). Override with
// CHROMIUM_PATH=/path/to/chrome.
const executablePath = process.env.CHROMIUM_PATH || undefined;
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.goto(pathToFileURL(path.join(here, 'index.html')).href, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);

for (const id of ids) {
  const el = page.locator(`#${id}`);
  const out = path.join(here, 'out', `${id}.png`);
  await el.screenshot({ path: out, omitBackground: true });
  console.log('wrote', path.relative(here, out));
}

await browser.close();
