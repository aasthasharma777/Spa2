# Spa service banners

Portrait promo banners for at-home spa services, derived from the existing
"Relax / Body & Mind" deep-tissue banner (`reference/deep-tissue-reference.png`).

Draft 2 covers **cupping therapy**, **potli massage** and **Korean scrub**, each
with its own headline hierarchy.

```
banners/
  index.html        all three banners, side by side — edit copy here
  banner.css        the design system: canvas, grain, three hierarchies, footer
  copy.md           the copy, the reasoning, and alternates per service
  render.mjs        export each banner to out/<name>.png at 2x
  fonts/            self-hosted Pinyon Script / Poppins / Outfit / Inter
  assets/           the photography — see "Adding the photography"
  reference/        the banner this set is derived from
  out/              rendered PNGs
```

## Canvas

1000 × 1372, 44px radius — the reference's proportions. Every banner carries a
fine SVG grain at 5.5% overlay so the plaster wall never goes flat, and the same
cream, `#F8EED6`.

## The three hierarchies

The reference has one construction. Reusing it three times made the set read as
a template, so each service now leads with something different.

| | Service | Class | Construction |
|---|---|---|---|
| A | Cupping | `.h-word` | 31px tracked kicker → **244px sans word** → 142px script tail |
| B | Potli | `.h-editorial` | hairline rule → 88px sans line → **208px script**, ranged left, mid-frame |
| C | Korean scrub | `.h-script` | **336px script word** → 43px tracked micro-line |

The footer — service, price, `Book now` pill — is identical on all three. That,
the canvas and the cream are what make it one campaign.

## Adding the photography

Drop three JPGs into `assets/`, named to match `index.html`:

```
assets/cupping-therapy.jpg
assets/potli-massage.jpg
assets/korean-scrub.jpg
```

Each hierarchy needs its negative space in a different place, so the three shots
are **not** interchangeable:

| Banner | Composition the photo must have |
|---|---|
| Cupping | subject in the lower half; clear wall across the **top 48%** |
| Potli | subject in the **right half**; clear wall down the **left 45%**, mid-frame |
| Korean scrub | clear wall across the **top 34%** only — subject can sit higher |

All three share a brief: an at-home room, not a spa. A limewash plaster wall
with faint trowel texture, a narrow sliver of linen curtain at one edge, and the
soft diffused shadow of window light across the wall. No furniture, no decor, no
plants, no candles. Light rakes in at 45°.

Two candidates per service were generated in Magnific and are in the Personal
project there:

| Service | Candidates |
|---|---|
| Cupping therapy | magnific.com/app/creation/rgyRksAxtc · magnific.com/app/creation/lJ6zLwmgv9 |
| Potli massage | magnific.com/app/creation/lJ6zLNsgv9 · magnific.com/app/creation/gOinsicSXO |
| Korean scrub | magnific.com/app/creation/WD8Cnf3cXe · magnific.com/app/creation/XmukekQBfo |

They could not be pulled into this repo automatically: the image CDN
(`pikaso.cdnpk.net`) is blocked by the network egress policy in the environment
they were generated from, and the MCP channel returns metadata only. Download
the picks from Magnific and save them under the names above.

Until then every banner falls back to an on-theme wall gradient, so the type and
copy can still be reviewed.

## Rendering

```
npm install playwright        # once
node render.mjs               # -> out/cupping.png, out/potli.png, out/scrub.png
node render.mjs cupping       # just one
```

Exports at `deviceScaleFactor: 2`, so 2000 × 2744 PNGs.

If Chromium is already on the machine and Playwright's own download was skipped:
`CHROMIUM_PATH=/path/to/chrome node render.mjs`.

## Changing copy

Edit `index.html` — three plain blocks, one per banner. `copy.md` holds the
reasoning and two alternates per service.
