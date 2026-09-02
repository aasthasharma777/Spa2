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
| Potli | treatment low and to the **right**; clear wall across the **left two thirds** down to **60%**, and **no window or grille** in that region |
| Korean scrub | bed and subject in the **bottom 55%**; clear wall across the **top 42%** |

Type must never cross the treatment itself. The numbers above are the
type blocks plus a margin, so a photo that meets them needs no nudging.
Note the potli line is the tightest: `sinks in` sets 591px wide — 59% of
the canvas — so that photo has to keep more than half the frame clear.

All three share a brief: an **Indian home**, and an Urban Company therapist
who has carried the bed in with them.

**The bed is the same on every banner, for every service.** A portable folding
massage table with a black padded top and an attached black face-cradle
headrest. Two separate disposable paper sheets go over it — one on the table,
one on the headrest pad. The paper is thin, matte, lightly crinkled non-woven
stock, porous enough to be slightly translucent, so the black padding reads
through it as soft irregular dark patches, darker where the paper is pressed
flat and paler where it lifts. The cut edges hang loose over the sides and the
black upholstery edge and frame show beneath. That mottling is the detail that
makes the bed look like the real thing rather than a spa couch, so it needs to
be visible in every shot.

**The room does the work of saying "home", because the bed cannot.** A
hand-plastered distemper wall with real patina, water-marks and chalky bloom —
not the flat European limewash that reads as spa. A wooden window with small
panes and a black-painted iron grille, light raking through it. A narrow sliver
of red-oxide or kota-stone floor at the bottom edge. Nothing that belongs to a
treatment room: no rolled towels, no stacked linens, no bolsters, no uniform,
no trolley, no bowls of petals, no candles, no plants, no signage.

The wall colour is chosen per service, to complement the therapy without
competing with it. The treatment stays the subject; the room only has to have
a personality:

| Service | Cast | Wall | Why that colour |
|---|---|---|---|
| Cupping therapy | male therapist, male client | deep geru red-ochre terracotta | Cupping is decompression and deep ache. Geru is a genuinely Indian wall finish; the warm clay picks up the glass cups and rhymes with the pink cup marks. Deepest of the three, so it carries cream type with the least scrim. |
| Herbal potli massage | female therapist, female client | turmeric-ochre | Matches the turmeric-stained muslin. **One** poultice, never two, and a visible wisp of steam — placed so it rises into empty wall rather than behind the type. |
| Korean body scrub | female therapist, female client | dusty blush pink | Pastel pink, and it does double duty: blush walls are as Indian as they are Korean. Worked with **bare hands** — no mitt, no cloth — with the scrub cream visibly spread on the back. |

The Korean note on the scrub is deliberately small: the blush palette, a
translucent hanji-like glow through the window, and **one** celadon-green
ceramic bowl holding the cream at the edge of frame. Celadon reads as Korean
to anyone who knows it and as a nice bowl to anyone who doesn't, which is the
right weight. No screens, no hanbok, no Seoul-spa dressing — the environment
must never pull attention off the treatment.

### The photography

Generated in Magnific with Seedream 5 Pro at 3:4, then composited under each
hierarchy and judged as a finished banner rather than as a loose photograph.
The chosen three are committed in `assets/`, so no CDN fetch is needed to
render.

| Service | Chosen | Notes |
|---|---|---|
| Cupping therapy | `5337297109` | The sheet mottling reads best of the set — big soft blotches through the paper on the table, and the headrest under the client's head carries its own sheet. Geru wall with real lime patina. |
| Herbal potli massage | `5337335659` | One poultice, steam rising into the empty wall between the type and the window. Window pushed to the far right so the left-ranged type has clean plaster. |
| Korean body scrub | `5337304669` | Bare hands, cream on the fingers, cream worked into the back. Celadon bowl just in frame at the bottom. Therapist enters from the right, matching the other two. |

Therapist enters from the right on all three, and the window sits right on all
three. That plus the identical bed is what holds the set together now — more
than the cream or the grain does.

Two rounds were needed for potli. The first put the window at the left, which
is where the left-ranged headline starts — the type landed on the grille. Same
frame with the window moved right solved it.

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
