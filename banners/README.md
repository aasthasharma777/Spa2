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
| Cupping | subject and hands entirely in the **bottom 45%**; clear wall across the **top 50%** |
| Potli | treatment low and to the **right**; clear wall across the **left two thirds** down to **55%** |
| Korean scrub | subject in the **bottom 55%**; clear wall across the **top 42%** |

Type must never cross the treatment itself. The numbers above are the
type blocks plus a margin, so a photo that meets them needs no nudging.
Note the potli line is the tightest: `sinks in` sets 591px wide — 59% of
the canvas — so that photo has to keep more than half the frame clear.

All three share a brief: a minimal, aesthetic **bedroom**, not a spa. The
client lies on a low bed made up with rumpled natural linen — the bedding is
what keeps it reading as a home. A limewash plaster wall with faint trowel
texture, a narrow sliver of linen curtain at one edge, and the soft diffused
shadow of window light across the wall. Light rakes in at 45°.

Nothing that belongs to a treatment room: no massage table, no vinyl couch,
no face-cradle headrest, no rolled towels, no stacked linens, no bolsters, no
uniform, no trolley, no bowls, no candles, no plants, no petals.

Casting and technique are fixed per service:

| Service | Cast | Technique |
|---|---|---|
| Cupping therapy | male therapist, male client | glass cups set in a row along the upper back |
| Herbal potli massage | female therapist, female client | **one** poultice bundle, not two |
| Korean body scrub | female therapist, female client | **bare hands**, no mitt or cloth, with the scrub cream visibly spread on the back |

### The photography

Generated in Magnific with Seedream 5 Pro at 3:4, then composited under
each hierarchy and judged as a finished banner rather than as a loose
photograph. The chosen three are committed in `assets/`, so no CDN fetch
is needed to render.

| Service | Chosen | Notes |
|---|---|---|
| Cupping therapy | `5337111365` | Clearest bedroom read of the set — white pillows and duvet, not a couch. Five cups legible, both men, hands correct. Type clears the action by ~380px. |
| Herbal potli massage | `5337113454` | One poultice, female therapist, warm plaster with a clean window shadow. The treatment sits low and right; the whole left two thirds is bare wall. |
| Korean body scrub | `5337118648` | Bare hands with the cream visibly worked into the back, cream on the fingers and nails. Both women. Both hands resolve to four fingers and a thumb. |

Two rounds were generated for potli. The first round's composition won:
asking for the action to be confined to the right third pushed it right but
never far enough, because the model frames on the shoulder blade. What
actually solved it was moving the headline block up (`top: 520px -> 370px`)
so the type sits above the treatment instead of beside it.

If the photographs are ever missing, each banner falls back to an on-theme
wall gradient so the type and copy can still be reviewed. Generating or
re-fetching them needs the Magnific asset CDN (`pikaso.cdnpk.net`,
`*.cdnpk.net`) on the environment's **Network access: Custom** allowed-domains
list; on the default **Trusted** level the fetch fails with a proxy 403.

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
