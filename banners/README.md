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
| B | Potli | `.h-editorial` | hairline rule → 88px sans line → **208px script**, ranged left |
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
| Cupping | bed, subject and hands entirely in the **bottom 45%**; clear wall across the **top 50%**, with the window and curtain kept clear of the centred type |
| Potli | clear wall across the **left two thirds** down to **40%**; treatment, hand and steam all below **45%** |
| Korean scrub | bed and subject in the **bottom 55%**; clear wall across the **top 42%** |

All three headlines now start at the same height (76–84px). Hierarchy B is
distinguished by being ranged **left**, not by sitting lower — earlier drafts
dropped it to mid-frame and then to `top: 370px` to dodge the treatment, which
just made the set look misaligned. Framing the treatment low is the better fix.

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

Walls are **muted pastels** — neither bright nor dull, never beige or ivory,
and all three clearly different from one another. The colour is chosen per
service to complement the therapy without competing with it; the treatment
stays the subject and the room only has to have a personality:

| Service | Cast | Wall | Why that colour |
|---|---|---|---|
| Cupping therapy | male therapist, male client | muted dusty sage-teal | The only cool room in the set, and the only cool-against-warm play: teal is the complement of warm brown skin, so the back, the glass cups and the pink cup marks all come forward. Cool also reads as relief, which is what cupping sells. Deepest wall, so it needs the least scrim. |
| Herbal potli massage | female therapist, female client | muted honey-gold | A soft warm gold — marigold stirred into cream — carrying the turmeric of the muslin. **One** poultice, a neat sphere with a short twisted handle, on the shoulder blade rather than the neck, with a steam wisp rising into empty wall. |
| Korean body scrub | female therapist, female client | muted blush pink | Pastel pink doing double duty: blush walls are as Indian as they are Korean. Worked with **bare hands** and the client's hair in a **bun**. |

Two colour notes learned the hard way: a muted mustard came out olive-drab,
and an apricot-clay sat so close to the scrub's blush that the two banners
read as the same room. Honey-gold separates cleanly from both the teal and
the pink.

**Where the scrim is unavoidable.** Cream type on a brightly-lit pale wall
cannot reach 3:1 on its own — measured across every candidate shot, the best
bright-room frame tops out around 2.9:1 for cupping and 1.5-2:1 for the blush
scrub. Bright rooms and an invisible scrim are in direct tension, and one of
three things has to give: the wall goes deeper (iteration 3), the scrim goes
up, or the type sits slightly under the legibility line. Iteration 1 takes the
minimum scrim that clears 3:1 everywhere except the scrub's `HEAD TO TOE`,
which sits at 2.8:1.

**Otherwise light does the work the scrim used to do.** In every shot the light rakes
in low so the wall is brightest down near the bed and falls off into soft
shadow toward the top of the frame. That puts the headline on a naturally
darker wall, which is why the scrim can sit low enough to be invisible.
Flat, evenly-lit walls force the scrim up until it reads as a grey veil over
the photograph — relight the shot instead.

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

Generated in Magnific with Seedream 5 Pro at 3:4, with
`reference/massage-bed-reference.jpg` passed as an image reference on every
shot so the bed is identical across the set, then composited under each
hierarchy and judged as a finished banner rather than as a loose photograph.
The chosen three are committed in `assets/`, so no CDN fetch is needed to
render.

| Service | Chosen | Notes |
|---|---|---|
| Cupping therapy | `5338020102` | Client's arms along his sides on the table. Window a curtain sliver at the left, clear of the centred type. |
| Herbal potli massage | `5338502663` | Poultice lemon-sized, tilted and pressed in mid-stroke, free hand braced on the back, turmeric trail behind it. No window in frame. |
| Korean body scrub | `5338446791` | Full flat palm spreading the scrub in a broad sweep, fingers together. Hair in a bun. Window right and set back. |

Three details took several rounds each and are worth not re-litigating:

- **The poultice grip.** Held by the twisted stalk, fingers closed round
  it, the ball below the hand and pressed into the shoulder blade. Naming a
  familiar object — "the way you hold a small mallet" — landed it where
  describing finger positions did not.
- **But the grip is not the action.** With the grip correct the picture
  still read as someone holding an object over a surface, because the pose
  was wrong: straight horizontal arm, wrist cocked at a right angle, bundle
  hanging vertically like a plumb bob, and nothing else touching the client.
  What makes it read as a treatment is the body mechanics — therapist
  leaning in, **elbow bent**, forearm angled down and in, the bundle
  **tilted** the way the stroke travels and pressed in so the flesh gives,
  caught **mid-stroke** along the muscle, a faint **turmeric trail** showing
  where it has already been, and — the single biggest change — **the free
  hand resting flat on the client's back**. A therapist always braces with
  the other hand; one hand alone in frame always looks like a demonstration.
- **The poultice size.** Lemon-sized, and explicitly *smaller than the fist
  holding it*. Given a free hand the model inflates it to a grapefruit.
- **The scrub gesture.** The entire palm flat against the back, spreading,
  fingers together. Earlier attempts at making the work look effortful —
  fingers dug in, a bank of product shoved ahead of the palm, furrows raked
  behind — all read as sculpting clay rather than scrubbing. Flat palm,
  thin granular layer.

Also: the client's arms lie **along their sides on the table**, hands on the
paper sheet. Left unspecified they hang off the edge toward the floor.

- **Female therapists' hands.** Generic hand-realism prompting asks for
  "visible tendons and veins on the backs of the hands" — good advice in
  general, and wrong here: it gave both women ropey, muscular, masculine
  hands. For the two female-therapist banners ask instead for slender
  tapered fingers, a smooth even back of the hand, a fine wrist and neat
  short nails, and negate veins, tendons, cords and sinew explicitly.
  Keep the tendon language for the male therapist on cupping.
- **But keep the skin tone anchored while you do it.** Removing the vein
  detail without restating the tone made the model render pale, European
  hands on Indian women. The therapist's hands need their own explicit
  "warm medium-brown South Asian, same tone family as the client" line —
  describing the client's skin alone is not enough.

#### Iterations that were tried and rejected

Two alternate sets were generated and cut, recorded here so they aren't
proposed again:

- **Re-blocked rooms** — same palette, but window behind the bed with a
  head-end three-quarter for cupping, a below-bed camera for potli, and a
  doorway with a high angle for scrub. The rooms read wrong and the scrub
  gesture regressed.
- **Colour-drenched rooms** — deep petrol teal, terracotta-rust and
  mauve-plum with a head-end perspective, a near-macro detail and a wide
  environmental shot. Measured beautifully (6.4-13.9:1 cream contrast on
  almost no scrim) but the angles and the wall colours were both wrong for
  the brand. Worth knowing the measurement result: deep walls carry cream
  type effortlessly, which is why the bright-room set needs a scrim at all.

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
NOTEXT=1 node render.mjs      # -> out/no-text/  (same plates, no lettering)
```

`NOTEXT=1` hides the headline and the footer wording but keeps the canvas,
the crop, the grain and both scrims, so the output registers with the
lettered version pixel for pixel — use it as a drop-in plate for other
copy, or for a version that has to carry no words at all. Note the scrims
are still in it, since they exist to serve the type; for the untouched
source frames at 1728 x 2304, use `assets/` directly.

Exports at `deviceScaleFactor: 2`, so 2000 × 2744 PNGs.

If Chromium is already on the machine and Playwright's own download was skipped:
`CHROMIUM_PATH=/path/to/chrome node render.mjs`.

## Figma

A layered Figma version lives here, in **UC Design Team**:

https://www.figma.com/design/6TTvUxKDWjXZdpCLsQuQyH

Built to the same spec as `banner.css` — 1000 x 1372, 44px radius, real
Pinyon Script / Poppins / Inter text layers, and the scrims as gradient
fills. Image and text are separate layers in every banner:

```
1 · Cupping therapy
    Image / photo            the photograph (image fill)
    Image / scrim top        gradient that carries the headline
    Image / scrim footer     gradient that carries the footer
    Text / headline          one editable text layer per line
    Text / footer            service + price, and the Book now pill
```

**The photographs are not in the Figma file.** Uploading image bytes needs a
direct POST to `mcp.figma.com`, which this environment's network policy
blocks — the same class of block as the Magnific CDN above. Adding
`mcp.figma.com` to the environment's **Network access: Custom** allowed
domains would let a future session push them automatically.

Until then it is a 30-second job by hand. **`figma-drop/` holds the three
photographs renamed to match the Figma frame names**, so there is nothing to
work out — open a banner in the layers panel, click `Image / photo`, and drag
the matching file onto it. The rectangle is already sized and positioned, so
the photo crops exactly as designed.

With four colourway rows per service, fill row A and then copy the fill down
each column: select the filled rectangle, Cmd-C, select the other three in
that column, Cmd-Shift-V.

`figma-drop/` is the same three images as `assets/`, at full resolution; only
the filenames differ.

| File | Banner |
|---|---|
| `figma-drop/1-cupping-therapy.jpg` | 1 · Cupping therapy |
| `figma-drop/2-herbal-potli-massage.jpg` | 2 · Herbal potli massage |
| `figma-drop/3-korean-body-scrub.jpg` | 3 · Korean body scrub |

Why not automated: two routes were tried. `upload_assets` needs a direct POST
to `mcp.figma.com`, which the network policy blocks. Passing the bytes inside
a `use_figma` script works — `figma.base64Decode` and `figma.createImage` are
both available — but the script cap is 50,000 characters, so a frame-size JPEG
takes four chunked calls per image, twelve in all, and still lands at a
re-encoded ~q0.78 rather than the full-resolution original. Dragging the file
in is both faster and better quality.

Each photo rectangle currently holds a flat mid-tone of its wall colour as
a placeholder, so an unfilled banner still reads on-palette.

### Colourways

Four headline colourways sit in the file as a 4 x 3 grid — rows are
colourways, columns are services. Each row is labelled on canvas with its
hex values and its measured worst-case contrast. **All four use light type,
so the top scrim is on in every one.**

| | Colourway | Cupping | Potli | Scrub | Worst contrast |
|---|---|---|---|---|---|
| A | Cream (approved) | `#F8EED6` | `#F8EED6` | `#F8EED6` | 3.53 / 3.09 / 3.00 |
| B | Warm white | `#FBF7F0` | `#FBF7F0` | `#FBF7F0` | 3.82 / 3.34 / 3.24 |
| C | Complement tint | `#FCEBDD` peach | `#EAF2F4` sky | `#E9F2EA` mint | 3.51 / 3.14 / 3.03 |
| D | Unified cool | `#EAF2F4` | `#EAF2F4` | `#EAF2F4` | 3.59 / 3.14 / 3.05 |

C is the real hue shift: a light tint of the hue opposite each wall — peach
against teal, sky against gold, mint against pink. D is one cool tint across
all three for campaign unity.

Two constraints found by measuring eight tints against the real backdrops:

- **The tints have to stay gentle.** Light type on a light wall must stay
  high in lightness to hold contrast, and saturating a tint darkens it. So
  the hue reads clearly on cupping, whose wall is the darkest of the three,
  and much more softly on potli and scrub. There is no way to get a strongly
  saturated light type over a light wall without losing legibility.
- **Warm tints do not clear 3:1 on the pink scrub wall** — pale apricot,
  peach, blush and butter all land between 2.82 and 2.98 there. That is why
  there is no warm row, and why C uses a cool tint for scrub and potli while
  only cupping takes the warm one.

A tint of a wall's *own* hue was tried and dropped: on a light wall it sits
too close in value to work. Pale blush on the pink scrub wall measured
2.82:1.

**The footer stays white in every colourway.** It sits on the dark footer
gradient over the photograph rather than on the wall, so it is unaffected by
the headline colour.

Not carried across: the 5.5% SVG grain overlay. It has no native Figma
equivalent and would need a tiled noise PNG — which is blocked by the same
upload restriction. At 5.5% the difference is very hard to see.

## Changing copy

Edit `index.html` — three plain blocks, one per banner. `copy.md` holds the
reasoning and two alternates per service.
