// Render every banner on a given page by its element id, into out/<subdir>/.
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const page_ = process.argv[2] || 'iterations.html';
const sub = process.argv[3] || 'iterations';
const outDir = path.join(here, 'out', sub);
await fs.mkdir(outDir, { recursive: true });

const executablePath = process.env.CHROMIUM_PATH || undefined;
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.goto(pathToFileURL(path.join(here, page_)).href, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(500);

// NOCHROME=1 strips everything but the photograph
if (process.env.NOCHROME) {
  await page.addStyleTag({ content: `
    .h-word, .h-editorial, .h-script, .h-stack, .h-rules,
    .banner__topscrim, .banner__footer, .banner__grain { display: none !important; }
  ` });
  await page.waitForTimeout(200);
}

const ids = await page.evaluate(() => [...document.querySelectorAll('.banner')].map(b => b.id));
for (const id of ids) {
  const out = path.join(outDir, `${id}.png`);
  await page.locator('#' + id).screenshot({ path: out });
  console.log('wrote ' + path.relative(here, out));
}
await browser.close();
