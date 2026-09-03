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

**Two casting rules are LOCKED and override everything else.**

1. **The client is 25 to 30 years old.** Always. No older casting — no grey at
   the temples, no lines, no middle-aged build. An earlier round used a man in
   his fifties and a woman in her mid-forties on the reasoning that they are
   the people who actually book a bad-back treatment. That reasoning is not
   available: the age band is the rule.

2. **The therapist is not in the picture. Only their bare hands are visible.**
   No head, no face, no hair, no neck, no shoulder, no upper arm, no torso, no
   clothing, no sleeve. The hands enter from the right edge and are cropped by
   that edge at the wrist or low forearm. Nobody is standing in the room.

The second rule solves a problem as well as setting a look. When the therapist
was in frame standing upright, their head landed in the top-right — exactly
where the centred hierarchies set their type — so the headline crossed the
head. Removing the body clears the type zone by construction rather than by
hoping the framing behaves.

It also changes what casting can vary. With the therapist gone and the age band
fixed, the levers left are build, hair, skin tone and small details: a buzz
cut, a large coiled bun, a fuller body, a deeper brown skin tone, freckles
across the shoulders, a fine-line tattoo, a gold waist chain at the towel line.
Gender still reads off the hands, so the service pairing holds — a man's hands
on the male client for cupping, a woman's on the female client for the other
two.

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

Walls are **mid-tones**, one per service, each in its own hue family and all
three clearly different from one another. Mid-tone is not a style choice — it
is what makes the type work. The colour is chosen per service to complement
the therapy without competing with it; the treatment stays the subject and
the room only has to have a personality:

| Service | Cast | Wall | Why that colour |
|---|---|---|---|
| Cupping therapy | male therapist, male client | dusty sage-teal, `#5f766c` in the type zone | The only cool room in the set, and the only cool-against-warm play: teal is the complement of warm brown skin, so the back, the glass cups and the pink cup marks all come forward. Cool also reads as relief, which is what cupping sells. This wall was a mid-tone from the first pass, which is the whole reason cupping worked while the other two did not. |
| Herbal potli massage | female therapist, female client | caramel-amber, `#8d6b47` in the type zone | Strong masala chai rather than marigold-in-cream — the same honey hue two stops down, carrying the turmeric of the muslin. **One** poultice, a neat sphere with a short twisted handle, held in a cupped hand with a bent elbow, swept across the shoulder blade with a turmeric trail behind it and the free hand braced flat on the back. Steam wisp rising into empty wall. |
| Korean body scrub | female therapist, female client | dusty old-rose, `#7c5b5c` in the type zone | The same pink two stops down — a dried-rose clay rather than a blush pastel. Still does the double duty: rose walls are as Indian as they are Korean. Worked with **bare hands**, whole flat palm gliding, and the client's hair in a **bun**. |

Colour notes learned the hard way: a muted mustard came out olive-drab; an
apricot-clay sat so close to the scrub's blush that the two banners read as
the same room; and pushed toward mauve, the rose goes plum and stops reading
as pink at all. Amber and old-rose separate cleanly from each other and from
the teal.

### The scrim, and why there almost isn't one

The set used to carry a black scrim over the headline — 0.14 on cupping, 0.28
on potli, 0.30 on scrub. It is now 0.14, **zero and zero**.

The scrim was doing the work the wall should have been doing. Measured raw,
with the scrim switched off, on the old set:

| | wall behind the type | contrast, no scrim | scrim it needed |
|---|---|---|---|
| Cupping | `#5f766c` deep sage | 2.84 – 4.08 : 1 | 0.14 — invisible |
| Potli | `#c4b99a` pale oat | **1.70 : 1** | 0.28 |
| Scrub | `#c8b3ad` pale rose | **1.67 : 1** | 0.30 |

One row explains it: cupping's wall was 2.4x darker in luminance than the
other two. Cream on a pale pastel cannot reach 3:1 at any exposure — it is
not a grading problem, it is a paint problem. So potli and scrub were reshot
onto mid-tone walls and the scrim went to zero:

| | wall behind the type | contrast, no scrim |
|---|---|---|
| Potli | `#7c6142` caramel | **4.91 : 1** (3.81 at the brightest 5%) |
| Scrub | `#7d5c5d` old-rose | **4.24 : 1** (3.71 at the brightest 5%) |

Cupping keeps its 0.14 — the value it was signed off at. Its sage wall is the
lightest of the three in the tail zone (`#6e817a`), so it is now the weakest
line in the set at 3.32:1, and dropping the scrim to 0.10 bought nothing
visible while costing 0.2:1. If cupping is ever reshot, that wall wants to
come down into the same band and the scrim can go to zero too.

**The real point is not the number, it is where the number comes from.** The
reference banner this set was measured against only reaches about 3.3–5.4:1
itself — no more than ours. What makes it look good is that its contrast comes
from a mid-tone backdrop rather than from black at low opacity. A scrim
desaturates everything under it, which is exactly the dullness it was added to
prevent. A mid-tone wall keeps its chroma.

### Bright picture, dark-enough type zone

Deepening the wall is only half of it — the picture still has to feel bright,
and the naive read of "deeper wall" is a moody room. It took three passes to
separate the two:

| pass | wall asked for | what came back | result |
|---|---|---|---|
| 1 | `#8A6A42` plus "two stops darker, deep shade, no fill" | `#503b1d`, frame at 13% mean luminance | 9:1 contrast and a dim, low-key room — the opposite of the brief |
| 2 | `#A8845A` plus "bright, airy, high-key" | `#997a58`, frame at 27% | bright, but only 3.4:1 — the target hex was simply too light |
| 3 | `#8A6C48` as an exact paint spec, brightness moved onto the skin, sheet and floor | `#8d6b47`, frame at 26% | both: 5.02:1 and bright |

The instruction that made it work is the split. Brightness is carried by the
**subject** — the client's oiled back is the brightest thing in the frame,
with the white paper sheet the brightest white and the sunlit tile floor
bouncing light back up. The wall sits two clear steps below the skin and is
lit flat and evenly. Measured, the final frames run **subject zone at 33%
mean luminance against a type zone at 20%** — a 13-point spread, where the
old bright-room shots ran the subject *darker* than the wall.

Two prompt lessons worth keeping: "the wall is two stops darker" darkens the
whole room, because the model has no way to darken one surface in isolation —
say instead that the brightness comes from the skin and the sheet and never
from lifting the wall. And a hex is worth more than an adjective, but only if
it is checked: `#A8845A` sounds like a mid-tone caramel and measures 3.4:1.

The Korean note on the scrub is deliberately small: the rose palette, a
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
| Herbal potli massage | `5340444681` | Caramel wall. Poultice cupped, elbow bent, tilted and pressed in mid-stroke, free hand braced flat on the back, turmeric trail behind it. Window a bright sheer sliver at the far right. |
| Korean body scrub | `5340462104` | Old-rose wall. Full flat palm spreading the scrub in a broad sweep, fingers together. Hair in a neat low bun. Celadon bowl on the table. Window right and set back. |

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
Pinyon Script / Poppins / Inter text layers. Image and text are separate
layers in every banner:

```
1 · Cupping therapy
    Image / photo            the photograph (image fill)
    Image / scrim top        gradient behind the headline — 14% on cupping,
                             0% on potli and scrub
    Image / footer glass     240px band, Background Blur + light tint
    Text / headline          one editable text layer per line
    Text / footer            service + price, and the Book now pill
```

`Image / footer glass` is the Figma equivalent of the CSS `backdrop-filter`:
a rectangle with a **Background Blur** effect plus the same bottom-weighted
tint, not a gradient. It replaced a 430px gradient to 74% black that was
greying out the lower third of every shot.

**The photographs are placed by hand, and two of them are pending.** The
reshot potli and scrub frames are in `figma-drop/` but not in the Figma file:
uploading image bytes needs a direct POST to `mcp.figma.com`, which this
environment's network policy blocks — the same class of block as the Magnific CDN above. Adding
`mcp.figma.com` to the environment's **Network access: Custom** allowed
domains would let a future session push them automatically.

Until then it is a 30-second job by hand. **`figma-drop/` holds the three
photographs renamed to match the Figma frame names**, so there is nothing to
work out — open a banner in the layers panel, click `Image / photo`, and drag
the matching file onto it. The rectangle is already sized and positioned, so
the photo crops exactly as designed.

With four colourway rows per service, fill row A and then copy the fill down
each column: select the filled rectangle, Cmd-C, select the other three in
that column, Cmd-Shift-V. (See **Propagating a placed photo** below for the
same move done in script.)

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

All twenty-four frames are filled, but the potli and scrub columns still hold
the **old pale-wall** photographs while their top scrims are already at 0%, so
those headlines read weak until the two files in `figma-drop/` are dragged in.
That is expected, and it fixes itself the moment the new photos land. The
canvas README in the file says the same thing.

Any new frame starts with a flat mid-tone of its wall colour as a placeholder,
so an unfilled banner still reads on-palette.

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

**The footer stays white in every colourway.** It sits on the footer glass
over the photograph rather than on the wall, so it is unaffected by the
headline colour. Measured on the glass it runs 4.8-6.8:1, dipping to 3.0:1
over the brightest patches of the paper sheet — comfortable for 44px type.

Not carried across: the 5.5% SVG grain overlay. It has no native Figma
equivalent and would need a tiled noise PNG — which is blocked by the same
upload restriction. At 5.5% the difference is very hard to see.

### Card size — 360 x 480

The file also holds twelve 360 x 480 copies, matching the "Spotlight 3:4"
reference card on the canvas. They sit in a 4 x 3 grid to the right of it, at
x 4111 / 4511 / 4911 and y 200 / 740 / 1280 / 1820 — same rows and columns as
the full-size grid, so colourway A card sits above colourway B card in each
service column.

Each copy is made by cloning the full-size frame, then:

1. `rescale(480 / 1372)` — Figma scales children, type sizes and corner radius
   together, so the whole banner comes down proportionally.
2. `resize(360, 480)` — the card is a true 3:4 (0.750) while the banner is
   0.729, so this widens the frame by ~10px.
3. The photograph is resized to fill the new 360 x 480 and the two scrims are
   stretched to the new width, so the **photo re-crops** into the wider frame
   instead of the type stretching with it. The headline block and footer bar
   are widened by the same delta and centred text is re-laid to the new width.

That order matters: rescaling first and widening second keeps the type at its
correct optical size for the card and absorbs the aspect difference in the
photograph, where a 10px crop is invisible.

### Propagating a placed photo

Once a photo is dragged into one frame, it does not need to be dragged into
the other three colourways of that service. Inside Figma the image paint can
be copied straight across, reusing the same `imageHash` — no re-upload and no
loss of quality:

```js
const paint = sourcePhoto.fills[0];   // the IMAGE paint
targetPhoto.fills = [paint];
```

All four colourway rows were filled this way from row A, and the card copies
inherit the fill from the frame they were cloned from.

## Iterations

Two extra pages sit alongside `index.html`, both built from the same CSS so
anything chosen here drops straight into the set:

| Page | Renders to | What it holds |
|---|---|---|
| `iterations.html` | `out/iterations/` | 3 services x 3 copy-and-type variants |
| `alternates.html` | `out/alternates/` | the same copy on new photography |

```
CHROMIUM_PATH=... node render-iterations.mjs iterations.html iterations
CHROMIUM_PATH=... node render-iterations.mjs alternates.html alternates
```

### Two new hierarchies

`banner.css` now carries five, not three. The two additions exist because A, B
and C are all cream-script-editorial and start to read as one idea:

- **D — caps stack.** No script at all: three short all-caps lines in mixed
  weight, tight-leaded, ranged left. The contemporary-DTC outlier. Poppins 200
  holds up as the thin line only because the walls are mid-tones now — on the
  old pale walls a 200 weight vanished.
- **E — ruled script.** A centred script hero framed by two hairline rules with
  a tracked micro-line. The most formal of the five and the closest to the
  reference banner.

`.h-rules__hero` is `white-space: nowrap` on purpose. At 240px a two-word
script hero wraps silently and pushes the block 235px deeper — straight into
the treatment. "Brand new" did exactly that and ran the scrub block to 51.7%
of the frame against a 42% clear zone. Better that it overflows the frame,
where `fit.mjs`-style checking catches it. Keep the hero to one short word.

### Copy options

| | V1 (current) | V2 | V3 |
|---|---|---|---|
| Cupping | A · `UNDO` / *every ache* | D · `TAKE / THE WEIGHT / OFF` | E · *Unknot* / `AT HOME` |
| Potli | B · `Warmth that` / *sinks in* | D · `HEAT, / HERBS, / HANDS` | B · `Heat that` / *melts it* |
| Scrub | C · *Glow* / `HEAD TO TOE` | A · `SHED` / *the dull layer* | E · *Reborn* / `IN ONE HOUR` |

Every variant is checked to fit inside its type block and to end above its
photograph's clear zone — all nine land between 31.6% and 36.3% of frame
height.

### Image alternates

`assets/alt/` holds one alternate per service, generated under the same locked
rules — same bed reference, same casting, same wall hue band, same
bright-subject / darker-type-zone structure — varying only camera and window:

| Service | Variation | Contrast | Note |
|---|---|---|---|
| Cupping | low, close, along the back; window **left** | **5.12 : 1** | The teal wall is finally a true mid-tone, so this alternate needs **no scrim at all** — it fixes the one weak line left in the set. |
| Potli | shot from the **head end**, looking down the body | **4.97 : 1** | Strongest angle of the three, but the braced hand shows more vein and tendon than the brief allows, and the therapist's arm reads a shade paler than the client's. |
| Scrub | **high overhead**, bed as a diagonal band | **4.75 : 1** | Biggest clear type zone of the set. No celadon bowl in frame, and the cream is pastier than the thin film specified. |

Two candidates were rejected on a measurement rather than a look: cupping `c1`
and `c3` scored 4.58 and 4.72 on the mean but only 1.41 and 1.75 at the
brightest 5% of the hierarchy-D type box — a bright intrusion at the top left
that a mean hides completely. Worth measuring the *brightest* patch of a type
zone, not just its average.


## The wild set

`wild.html` -> `out/wild/`. Six directions that change the room, the casting
and the type colour, not just the camera. An earlier round varied camera and
window only and the result was fairly described as the same picture from a
different tripod — variation has to come from the things the eye reads first.

What is still locked in every one: the bed reference, the casting pairs (male
on male for cupping, female on female for the other two), the technique, the
bright-subject / darker-type-zone structure, the clear type zone, and the
upmarket-urban-Indian-apartment brief. What moves: everything else.

| | Wall | Client | Type | Hierarchy | Copy | Measured |
|---|---|---|---|---|---|---|
| 1 | ink petrol `#52717B` | man, 27, slim, short crop | ice blue `#E8F1F4` | A | `RESET` / *your back* | 5.44 : 1 |
| 2 | burnt terracotta `#9A6450` | man, 29, heavier build, longer wavy hair, fine-line shoulder tattoo | blush `#FBE9E4` | E | *Unclench* / `DEEP RELIEF` | 3.83 : 1 |
| 3 | violet plum `#7C5E86` | woman, 26, thick coiled bun, gold waist chain | butter gold `#FBF0CE` | B | `Old heat,` / *new ease* | 4.82 : 1 |
| 4 | deep olive `#74743F` | woman, 25, cropped buzz cut, gold ear stud | pale pink `#FCEDF0` | D | `THE HEAT / GETS IN / DEEPER` | 5.30 : 1 |
| 5 | slate blue `#5F6E7C` | woman, 30, fuller build, large coiled low bun | pale mint `#E6F2EC` | C | *Silk* / `IN AN HOUR` | 4.32 : 1 |
| 6 | ochre gold `#8A6B2E` | woman, 28, deeper brown skin tone, freckled shoulders | warm white `#FDF6EC` | A | `WASH` / *the week off* | 4.29 : 1 |

In all six the therapist is absent — two bare hands enter from the right edge
and are cropped there. Every client is 25 to 30.

Every one runs **zero scrim**. The figures are measured on the real render
with each banner's own tint against its own wall, and none drops below 3.47:1
even at the brightest 5% of a glyph box.

### `--ink`

Recolouring the type is now one declaration. `--ink` is the headline colour
and defaults to `--cream`; the kicker, hero, script, rules and micro-lines all
resolve through it, so `style="--ink: #E8F1F4"` on a banner recolours the whole
headline including the hairlines. `--cream` stays the campaign constant.

Two rules for choosing one. Keep the tint close to white — saturating a tint
darkens it, and the wall is already doing the contrast work, so there is no
headroom to spend. And pick the tint from the wall's *complement*, not its own
hue: mint on slate and butter-gold on plum separate cleanly, while a tint of
the wall's own hue sits too close in value to read as a decision.

### The copy rule

**No service name in the headline.** The footer already says "Herbal potli
massage"; repeating it above is dead space, and the abbreviations get worse
the harder you push them. An earlier attempt at `HEAT, / HERBS, / HANDS` was
three fragments pretending to be a line.

The fix for hierarchy D was to make the three lines one sentence broken across
them — `THE HEAT / GETS IN / DEEPER` — so the stack reads as language rather
than as a list. Everything else leads on the feeling or the outcome: *Unclench*,
`Old heat, / new ease`, `WASH / the week off`.

### Two character ceilings, both learned by overflowing

The script heroes are set very large, so they hold far fewer characters than
they look like they should. Both are now `white-space: nowrap` so an overrun
shows up as an overflow a fit check catches, instead of silently wrapping and
pushing the block down into the treatment.

| Hierarchy | Hero size | Holds | Broke on |
|---|---|---|---|
| C `.h-script__hero` | 336px | ~4 characters | "Brighter" — overran the frame by 157px |
| E `.h-rules__hero` | 240px | ~8 characters | "Brand new" — wrapped, pushing the block to 51.7% of frame height against a 42% clear zone |

### What removing the therapist bought

The first version of this set had the therapist standing in frame, and in the
two centred hierarchies their head landed in the top-right — the headline
crossed it. Cutting them to hands did more than satisfy the casting rule: it
clears the type zone by construction instead of by hoping the framing behaves,
and it pushed contrast up across the board, because a head and a t-shirt in
the type zone were the brightest and darkest intrusions in it. Compare 1:
4.45:1 with the therapist in shot, 5.44:1 with only hands.

### Known flaws in the six

Worth stating rather than discovering later:

- **5 and 6.** No celadon bowl in shot, across two rounds of asking for it
  "fully in shot, clearly visible and not cropped". The cream also still reads
  patchier than the thin milky film specified, though better than the paste it
  was. If the bowl matters it probably needs compositing rather than another
  prompt.
- The cool walls (ink, slate) sit at 19-25% frame luminance against 22-25% for
  the warm ones — closer than in the first version, but deep cool paint is
  still darker at the same chroma. If the set has to feel uniformly bright, the
  warm four are safer.


## Changing copy

Edit `index.html` — three plain blocks, one per banner. `copy.md` holds the
reasoning and two alternates per service.
