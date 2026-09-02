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
| Cupping | bed, subject and hands entirely in the **bottom 45%**; clear wall across the **top 50%** |
| Potli | poultice, hand **and the steam** all inside the **right third**; clear wall across the **left two thirds** down to **60%**, and **no window or curtain** in that region |
| Korean scrub | bed and subject in the **bottom 55%**; clear wall across the **top 42%** |

Type must never cross the treatment itself. The numbers above are the
type blocks plus a margin, so a photo that meets them needs no nudging.
Note the potli line is the tightest: `sinks in` sets 591px wide — 59% of
the canvas — so that photo has to keep more than half the frame clear.

All three share a brief: an **Indian home**, and an Urban Company therapist
who has carried the bed in with them.

**The bed is the same on every banner, for every service, and it is LOCKED.**

`reference/massage-bed-reference.jpg` is the canonical rendering of the bed.
It is the only version signed off. Do not re-derive it from a written
description and do not let a new generation reinterpret it — pass that file
to the image model as an image reference on every shot, and say in the prompt
that the reference governs the bed and nothing else.

What it shows, for the record: a portable folding massage table with a black
padded top and an **attached black padded face-cradle headrest**; **two
separate** disposable paper sheets, one over the main table top and a second
smaller one over the headrest pad; the paper thin, matte, lightly crinkled
non-woven stock, porous enough to be semi-translucent, so the black padding
reads through it as soft irregular dark grey patches — darker where the paper
is pressed flat, paler where it lifts; cut edges hanging loose over the sides
with the black upholstery edge and black frame visible beneath.

Earlier passes described the bed in words and got three different beds across
three banners. Two of them were wrong. The reference exists so that cannot
happen again.

**The room does the work of saying "home", because the bed cannot.** And the
home is an **upmarket urban Indian apartment** — a well-off metro family in
Mumbai or Gurgaon. Smooth, flat, putty-finished walls in matte emulsion,
evenly painted and immaculately kept. A large window with a **slim** modern
frame and a floor-length sheer white curtain. A sliver of pale large-format
vitrified tile or light marble floor.

Not rustic and not heritage. No hand-plastered patina, no water stains, no
lime-wash mottling, no chunky wooden window, no iron grille, no red-oxide
floor — an earlier pass used all of those and the rooms read as South Indian
courtyard houses rather than city apartments. And nothing from a treatment
room either: no rolled towels, no stacked linens, no bolsters, no uniform, no
trolley, no bowls of petals, no candles, no plants, no signage.

Walls are **muted pastels** — neither bright nor dull, and never beige or
ivory. The colour is chosen per service to complement the therapy without
competing with it; the treatment stays the subject and the room only has to
have a personality:

| Service | Cast | Wall | Why that colour |
|---|---|---|---|
| Cupping therapy | male therapist, male client | muted eucalyptus teal | The only cool room in the set, and the only cool-vs-warm play: teal is the complement of warm brown skin, so it makes the back, the glass cups and the pink cup marks come forward. Cool also reads as relief, which is what cupping sells. Deepest of the three, so it needs the least scrim. |
| Herbal potli massage | female therapist, female client | muted apricot-clay | A warm dusty peach that carries the turmeric of the muslin. **One** poultice, never two, on the shoulder blade rather than the neck, with a visible steam plume placed to rise into empty wall. (A muted mustard was tried first and came out olive-drab.) |
| Korean body scrub | female therapist, female client | muted blush pink | Pastel pink, doing double duty: blush walls are as Indian as they are Korean. Worked with **bare hands** — no mitt, no cloth — with the scrub cream visibly spread on the back. |

The Korean note on the scrub is deliberately small: the blush palette, a
hanji-like glow through the sheer curtain, and **one** celadon-green ceramic
bowl holding the cream. Celadon reads as Korean to anyone who knows it and as
a nice bowl to anyone who doesn't, which is the right weight. No screens, no
hanbok, no Seoul-spa dressing — the environment must never pull attention off
the treatment.

Therapist enters from the right on all three, and the window sits right on all
three. That, plus the identical bed, is what holds the set together — more
than the cream or the grain does.

### The photography

Generated in Magnific with Seedream 5 Pro at 3:4, **with
`reference/massage-bed-reference.jpg` passed as an image reference on every
shot** so the bed is identical across the set, then composited under each
hierarchy and judged as a finished banner rather than as a loose photograph.
The chosen three are committed in `assets/`, so no CDN fetch is needed to
render.

| Service | Chosen | Notes |
|---|---|---|
| Cupping therapy | `5337408681` | Lighter, dustier teal than the alternate, and the therapist's second hand rests on the back rather than the client's head. |
| Herbal potli massage | `5337452358` | Strongest steam plume of any version, rising into the gap between the type and the curtain. Warmer apricot than the alternate, which sat too close to the scrub's pink. |
| Korean body scrub | `5337415785` | Bare hands, cream on the fingers, celadon bowl in frame. The bed reference came from this service, so it matches by construction. |

If the photographs are ever missing, each banner falls back to an on-theme wall
gradient so the type and copy can still be reviewed. Generating or re-fetching
them needs the Magnific asset CDN (`pikaso.cdnpk.net`, `*.cdnpk.net`) on the
environment's **Network access: Custom** allowed-domains list; on the default
**Trusted** level the fetch fails with a proxy 403.

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
