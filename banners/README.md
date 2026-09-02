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
| B | Potli | `.h-editorial` | hairline rule → 88px sans line → **208px script**, ranged left, dropped clear of the top |
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

### Which candidate was chosen

Two candidates per service were downloaded and compared. The IDs below are the
Magnific render IDs from the asset URLs, which is what identifies each file;
the creation links in the table above are listed in the same order, but that
pairing wasn't independently confirmed.

| Service | Chosen | Why |
|---|---|---|
| Cupping therapy | **A** — `5336696934` | Cleanest top: wall runs clear to 57% of frame height, and the therapist's arm only clips the extreme right edge at 36%, outboard of the centred type. B put the same arm at 27%. |
| Herbal potli massage | **B** — `5336698804` | The only one of the pair with the subject genuinely in the right half. A placed the client's head at 41% from the left — directly under the script line. B also carries a wider linen-curtain sliver. |
| Korean body scrub | **B** — `5336699356` | A little more top clearance (40% vs 37.5%), a slightly less blown-out headline zone, the head fully inside the frame rather than cropped at the left, and the mitt reads unmistakably as a scrub mitt (A's reads as a folded flannel). |

The chosen renders are committed in `assets/`, so nothing needs downloading to
render the set. To fetch new candidates from Magnific, the session's environment
must allow the asset CDN: claude.ai/code -> the cloud icon above the message box
-> hover the environment -> gear -> **Network access: Custom**, with
`pikaso.cdnpk.net` and `*.cdnpk.net` in **Allowed domains** and **"Also include
default list of common package managers"** checked. The policy is fixed when a
session's VM starts, so it applies to new sessions, not a running one.

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
