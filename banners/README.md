# Spa service banners

Portrait promo banners for spa services, built to match the existing
"Relax / Body & Mind" deep-tissue banner (`reference/deep-tissue-reference.png`).

Draft 1 covers **cupping therapy**, **potli massage** and **Korean scrub**.

```
banners/
  index.html        all three banners, side by side — edit copy here
  banner.css        the design system (canvas, type scale, themes, footer)
  copy.md           copy options per service + the rules behind them
  render.mjs        export each banner to out/<name>.png at 2x
  fonts/            self-hosted Pinyon Script / Poppins / Outfit / Inter
  assets/           the photography (see below)
  reference/        the banner this set is derived from
  out/              rendered PNGs
```

## Canvas and anatomy

1000 × 1372, 44px radius — the reference's proportions.

| Layer | |
|---|---|
| `.banner__photo` | full-bleed photograph; a matching studio gradient stands in until one is set |
| `.banner__headline` | Pinyon Script verb at 172px over a Poppins Medium stack at 178px (158px for 7+ character lines) |
| `.banner__footer` | bottom scrim, service + price on the left, white `Book now` pill on the right |

All headline type is one cream, `--cream: #F8EED6`, across every theme.

Each service has a theme that sets three backdrop tones (`--tone-lift`,
`--tone-mid`, `--tone-deep`):

| Theme | Backdrop |
|---|---|
| `cupping` | deep clay-terracotta, closest to the reference |
| `potli` | amber / ochre — warm oil and turmeric |
| `scrub` | sage-eucalyptus — cool and steamy, the one contrast in the set |

## Adding the photography

Drop three JPGs into `assets/`, named to match `index.html`:

```
assets/cupping-therapy.jpg
assets/potli-massage.jpg
assets/korean-scrub.jpg
```

They need the same shape as the reference shot: subject in the lower two
thirds, a plain single-tone backdrop, and **clean empty space across the top
45%** for the headline. Light rakes in from the upper right.

Two candidates per service were generated in Magnific and are waiting in the
Personal project there:

| Service | Candidates |
|---|---|
| Cupping therapy | magnific.com/app/creation/rgyRVIYxtc · magnific.com/app/creation/lJ6zdafgv9 |
| Potli massage | magnific.com/app/creation/N2cdCxr6D9 · magnific.com/app/creation/TdmQLNhVNR |
| Korean scrub | magnific.com/app/creation/8aHxyVJIrU · magnific.com/app/creation/xSPZMFvjfW |

They could not be pulled into this repo automatically — the image CDN
(`pikaso.cdnpk.net`) is blocked by the network egress policy in the environment
these were generated from. Download the picks from Magnific and save them under
the names above.

## Rendering

```
npm install playwright        # once
node render.mjs               # -> out/cupping.png, out/potli.png, out/scrub.png
node render.mjs cupping       # just one
```

Exports at `deviceScaleFactor: 2`, so 2000 × 2744 PNGs.

If Chromium is already on the machine and Playwright's own download was
skipped, point at it: `CHROMIUM_PATH=/path/to/chrome node render.mjs`.

## Changing copy

Edit `index.html` — the three banners are plain markup, one block each.
`copy.md` holds two alternate routes per service plus the naming rules.
