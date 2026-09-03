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

**The light must fall naturally across the client's body. This is a
must-have in every composition, not a preference.**

It is the thing that reads as photography rather than as a render, and it is
what the cupping and Korean scrub frames got right. The specification, so it
can be asked for rather than hoped for:

> Directional daylight comes in from one side and **rakes along the length**
> of the back, so the light describes the anatomy — a bright band along the
> ridge of the spine and over the shoulder blade, the far side of the ribs and
> the small of the back falling gently into soft shade, a clearly lit side and
> a clearly shaded side to the body. Oil or cream gives a broad soft specular
> sheen where the light strikes. It must look like real daylight discovering a
> real body, never like flat even studio fill, and never as if the body were
> lit separately from the room.

**Soft is not flat.** This is the trap. A diffused or overcast frame still has
to be *directional* — large soft source, gradual shadow edges, no hard sun
pool, but coming from one side and still modelling the body. An earlier potli
frame read as fully diffused and lost the fall of light entirely, which is
what made the set feel synthetic. Ask for both properties separately: soft
edges AND a lit side.

This rule also carries the whole contrast structure. The raking fall is what
makes the client's back the brightest thing in the frame while the wall sits
two steps below it — so it is not only how the pictures look right, it is how
the type stays legible without a scrim.

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

**The client lies flat, prone, face in the cradle.** Chest, ribs and hips all
resting flat on the padded top, shoulders relaxed and low, forehead and
cheekbones in the padded horseshoe. Never propped on the elbows, never with
the torso raised or arched, never with the head lifted or the chest turned
toward the camera. One earlier scrub frame had her elevated on her forearms
and it is simply not how the treatment is given. A small natural bend in one
knee is fine; a lift is not.

**And the headrest must be visible and in use.** It disappeared once when a
raised-arm pose was asked for — the arm displaced it. If a pose puts anything
near the head end, say explicitly that the cradle, its paper sheet and the
face in it must still read.

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
trolley, no bowls of petals, no candles, no signage.

**Plants are now allowed, singly.** The original ban existed to keep spa
dressing out, and it over-corrected: a single large-leaved houseplant in a
plain terracotta pot is one of the strongest *home* signals available, which
is exactly what this brief has always been short of. One ordinary living-room
plant, cropped at a frame edge, softly out of focus. Still banned: a cluster of
plants, an orchid, bamboo, ferns, anything arranged or styled.

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

### The autumn set in Figma

Row **E** at the bottom of the canvas (y = 6608), labelled "E · Autumn palette
— one family, three rooms". Three frames, cloned from row A so they inherit
the whole layer structure, then:

- top scrim set to **0% on all three** — the autumn walls carry the type
- the campaign cream as the single headline colour
- the approved copy, unchanged
- the frosted-glass footer

**The photographs are the one thing left, and they have to be dragged in.**
Each photo rectangle is renamed to name its own file, so the layers panel
says what to do:

```
Image / photo  ←  DROP autumn/1-cupping-therapy.jpg
Image / photo  ←  DROP autumn/2-herbal-potli-massage.jpg
Image / photo  ←  DROP autumn/3-korean-body-scrub.jpg
```

The files are in `figma-drop/autumn/`. Until they land, each rectangle holds a
flat mid-tone of its own wall colour, so the row reads on-palette rather than
broken — and deliberately *not* the inherited row A photograph, which with the
scrim at zero would have looked like a mistake.

**Why this can't be automated from here**, checked rather than assumed:

| Route | Result |
|---|---|
| `upload_assets` → POST `mcp.figma.com` | **403 on the CONNECT.** Network policy. Tested five times across the project. |
| `fetch` / `XMLHttpRequest` in the plugin sandbox | **Both `undefined`.** So no in-Figma download either. |
| `figma.base64Decode` + `figma.createImage` | Both exist and work — but the bytes have to arrive as text in the script, and the script cap is 50,000 characters. Three images at near-native size is ~590,000 characters of base64 over 13 calls. |

That last row is why the answer is "drag them in" rather than "it's
impossible". The API route genuinely works; what makes it unusable is that the
base64 would have to be reproduced by hand, byte-perfect, and a single slip
would yield a corrupt image with no way to tell which chunk broke it. A
manual drag is thirty seconds and lossless.

Adding `mcp.figma.com` to the environment's **Network access: Custom** allowed
domains removes the whole problem for future sessions.


### The four rows, and the fourteen drops

The Figma file now carries four rows built to the current system — zero scrim,
approved copy, cream headline, frosted-glass footer — differing only in
photography:

| Row | y | What | Frames |
|---|---|---|---|
| **E** | 6608 | The autumn set — the current direction | 3 |
| **F** | 8160 | The same three **ungraded**, before the gamma lift | 3 |
| **G** | 9712 | The **wild six** — jewel walls, 269° of hue, two per service | 6 |
| **H** | 11264 | The **first dark reshoot** — moodiest in the project | 2 |

Row F is the useful one to sit next to E: identical rooms, poses and copy, so
it isolates exposure as the only variable. 20.6 / 19.0 / 20.0% frame
brightness against E's 22.2 / 22.0 / 23.5%, and 5.53 / 5.10 / 6.18:1 contrast
against 4.91 / 4.28 / 5.15:1. If the moodier read wins, it wins on its own
merits rather than on a different set of pictures.

Row G is given the approved copy and the cream headline deliberately, even
though those six shots were made with their own tinted inks. Two axes moving
at once is what made them read as a paint chart in the first place; with the
type held constant the row shows the colour thinking and nothing else. The
tinted headlines are one `--ink` declaration away.

**Row H breaks the casting brief and is labelled as such** — on the canvas and
in `figma-drop/README.txt`. Both frames predate the hands-only rule and show
the therapist in full. They are a lighting reference, not usable creative, and
saying so in the file is cheaper than someone discovering it in a review.

Every photo rectangle is renamed to name its own file, so the whole job is a
walk down the layers panel. `figma-drop/README.txt` lists all fourteen in row
order with the wall colour of each.


### The Spotlight 3:4 card spec

The section in the Figma file holds a `Spotlight 3:4` reference card, and the
six banners in that section are now rebuilt to it. The card is a real product
component, not a mock, so its spec is the authority — recorded here because it
lives in Figma and nothing in this repo would otherwise capture it.

**Frame** 360 x 480, white, horizontal auto-layout, clips content.
**Main frame** 328 x 448 inset 16px all round, radius 12, on `#0F0F0F`, clips.

| Layer | Spec |
|---|---|
| `Main Image` | rectangle, `scaleMode: FILL`. Resized to 328 x 448 at (0,0) so the photo fills the inner frame. |
| `Isolated` | a **cut-out of the subject** above the type, `DROP_SHADOW` radius 16, so the body overlaps the lettering. **Hidden in our cards** — we have no cut-outs. |
| headline | three text layers, centred, `#FFEDC8`. Script in **Kapakana Regular 72**; sans in **Open Sauce One Regular 56**, lh 100%, ls -2%. |
| `Blur overlay` | 360 x 86. Two fills: a `#141110` gradient 0 -> 1 alpha at 50% opacity, plus solid black at 50%. `BACKGROUND_BLUR` 8. |
| `Bottom` | frame 328 x 70, no clip. |
| `Bottom / BG` | the same two fills and the same `BACKGROUND_BLUR` 8 as the overlay. |
| `Service name` | **Open Sauce One Bold 12**, lh 16px, white, left. |
| `Price block` | horizontal auto-layout; `per Unit` and a strikethrough price sit in it hidden. |
| `Button` | **component instance**, 94 x 36, radius 8, white fill, `#E3E3E3` stroke. `Type=Secondary, Color=Default, Config=Text Only, Size=Default, isRounded=No, isDisabled=No`. Label Open Sauce One Bold 14/20 in `#0F0F0F`. |
| `Divider` | vector, gradient stroke white 0.25 -> 1 -> 0.25, layer opacity 10%. |

Two overlays, not one: the `Blur overlay` runs the full 360 width and bleeds
past the rounded inner frame, while `Bottom / BG` is 328 and sits inside it.
That is what stops the footer's edge cutting a visible line at the card's
corner radius.

#### How the six were built

Cloning the reference card rather than rebuilding it is the whole trick — the
Button stays a live component instance, and the overlay fills, blurs, radii
and divider gradient come across exactly. Per card: swap `Main Image`'s fill
for the banner's own image paint (same `imageHash`, so no upload), hide
`Isolated`, delete the reference's three text layers, then clone the banner's
`Text / headline` frame, `rescale(0.328)`, and drop it in at the scaled
position.

**The geometry transfers almost 1:1, which is luck worth naming.** The card's
inner frame is 328 x 448 — an aspect of 0.732 — against the banner's
1000 x 1372 at 0.729. So one `rescale` carries a hierarchy over with no
re-layout, and all three survived: the headline blocks land at 33-35% of the
card's height, none wrapped.

Fonts are remapped on the way in — Pinyon Script to Kapakana Regular, and
Inter and Poppins to the matching Open Sauce One weight (note Figma writes
these without a space: `Semi Bold` becomes `SemiBold`). Colour goes to the
card's `#FFEDC8` rather than our `#F8EED6`.

Three decisions taken deliberately, in case they need revisiting:

- **The brand faces win over ours.** Open Sauce One and Kapakana are what the
  real component uses, so the cards drop into product surfaces unchanged. The
  cost is that they no longer match the 1000 x 1372 banners typographically,
  and Kapakana is a lighter, less editorial script than Pinyon.
- **The three hierarchies survive.** Each card keeps its own arrangement
  rather than adopting the reference's script-over-two-sans-lines, so the
  campaign's variety and the signed-off copy order are intact.
- **`Isolated` is hidden, not deleted.** The structure still matches the
  component, so a cut-out can be dropped in later without a rebuild. Doing it
  properly would mean a background-removal pass per photograph.

#### Spacing across a font swap: measure ink, not boxes

`rescale()` scaled the headline positions perfectly and the spacing still came
out wrong, which is worth understanding because it will recur.

`rescale` preserves **layout-box** relationships. But a text node's box is not
its glyphs — it is the font's full ascent-to-descent metric, and how much of
that box the ink actually fills varies enormously between faces. Swapping
Pinyon for Kapakana therefore changed both the apparent size and every gap,
while every number in the file stayed "correct".

Measured on these exact strings:

| Face | Ink height as a share of font size |
|---|---|
| Pinyon Script | **78%** |
| Kapakana | **62%** |
| Poppins (caps) | 71.5% |
| Open Sauce One (caps) | 78.9% |
| Inter (tracked caps) | 91.6% |
| Open Sauce One (tracked caps) | 94% |

Two consequences. Kapakana at a given size renders **21% smaller** than Pinyon,
so every script line was undersized. And because a script face parks most of
its box above and below the glyphs, box-based gaps drift the moment the face
changes — the potli and scrub script gaps were ~6.5px too loose at card scale,
which at 480px tall is very visible.

The fix is to stop using the layout box as the unit. `absoluteRenderBounds`
gives the real ink bounds where `absoluteBoundingBox` gives the layout box, so:

1. **Size by ink.** For each line, set `fontSize *= targetInkHeight /
   currentInkHeight`, where the target is the signed-off full-size ink height
   x 0.328. This makes the card's type *optically* the same size as the
   banner's, regardless of face.
2. **Position by ink.** Compute each node's `offsetInBox = ink.y - box.y`, then
   stack the lines so the **ink-to-ink** gaps equal the scaled originals, and
   set each node's `y = inkTop - offsetInBox`.

Resulting sizes, all derived rather than chosen: cupping 9.9 / 72.6 / 59.1,
potli 27.9 / 85.8, scrub 139.8 / 13.4. Every gap lands within 0.1px of target,
and the widest ink is 202px inside a 328px frame.

The general rule: **any time type crosses font families, re-derive size and
spacing from ink bounds.** Scaling the numbers only works while the face is
the same.


#### The card headline spec — everything on multiples of 8

Block at **x 16, y 24** inside the 328 x 448 Main frame. Every position,
dimension, font size and line-height is a whole number and a multiple of 8 —
the 2px hairline rule is the only exception.

| Hierarchy | Block | Line | x | y | size | line-height |
|---|---|---|---|---|---|---|
| Cupping | 296 x 152 | kicker | 0 | 0 | 8 | 32 |
| | | hero | 0 | 32 | 72 | 72 |
| | | script tail | 0 | 96 | 56 | 56 |
| Potli | 208 x 136 | rule (24 x 2) | 0 | 0 | — | — |
| | | sans line | 0 | 16 | 32 | 32 |
| | | script | 8 | 48 | 88 | 88 |
| Scrub | 296 x 144 | script hero | 0 | 0 | 144 | 136 |
| | | tracked sub | 0 | 128 | 16 | 16 |

Sizes are the nearest multiple of 8 to the ink-matched value, chosen by which
side lands closer: kicker 8 (not 16 — 16 would be 63% oversized), hero 72,
script tail 56, potli sans 32, potli script 88, scrub hero 144, scrub sub 16.

#### Why the type was sitting too close to the edge

Two separate faults, both invisible in the numbers.

**Kapakana's ink overhangs its text box.** Measured on "sinks in", the ink
started **9.1px to the left of the box** — a first-glyph side bearing. So with
the box dutifully at x 16, the *visible* type sat **7.1px** from the frame
edge, not 16. Boxes were on the grid and the design still looked wrong.

**Line-heights were too tight to contain the ascenders.** The potli script's
ink poked 5.8px above its box and the scrub hero's 13.1px above. Figma does
not clip in that case, it just renders the glyph outside the box, so the type
crept upward into the margin.

The fixes, in order:

1. **Grow line-height until the ink is contained.** Search upward in 8s from
   the smallest value where `ink.y >= box.y` and `ink.bottom <= box.bottom`.
   This is why the scrub hero's line-height is 136 for 88.6 of ink — Kapakana
   needs that much box to hold its ascender and descender at 144.
2. **Offset left-ranged lines by their own overhang.** The potli script sits
   at x 8, not 0, so its ink lands at 14.9 from the frame edge instead of 7.1.
   x 8 rather than the exact 9.1 because the grid wins; the residual 1.1px is
   the quantisation and is not visible.
3. **Re-solve positions** with line-height now constrained.

Measured result: the minimum ink-to-edge distance is 14.9 on potli and 58+ on
the centred hierarchies, against 7.1 before.

**One thing is not fixable and should be known.** The potli script's ink still
falls 9.1px outside its own bounding box on the left. That is a font side
bearing, not a layout error — no geometry contains it, because the glyph's ink
simply begins left of the text origin. What was corrected is where the ink
sits relative to the *card*, which is what the eye reads. Selecting that layer
in Figma will always show glyphs outside the selection rectangle.

#### The three constraints fight each other

Worth being explicit, because the errors are not sloppiness:

| Constraint | What it fixes | What it costs |
|---|---|---|
| Font size on multiples of 8 | a clean type scale | ink height drifts up to 3px from the scaled original |
| Line-height must contain the ink | glyphs clipping out of the box | removes the half-grid nudge that was tuning the gaps |
| Positions on multiples of 8 | a clean inspector | up to 4px of gap quantisation |

All three together leave a worst-case ink-gap error of **2.7px** (cupping),
2.5px (potli) and 0.6px (scrub). Relaxing font sizes off the grid got that to
1.3px earlier; the grid is worth the 1.4px. Both cards of each hierarchy share
one canonical solution, solved once and copied, so a hierarchy never has two
answers.

#### Dropping a photo creates a second rectangle

Worth knowing, because it is invisible until something breaks: dragging an
image onto a card in Figma does **not** always replace the existing image
fill. It can add a *new* rectangle above the old one, at whatever size and
sub-pixel offset the drop lands on. Two of the six cards ended up with
stacked image rects, one with three.

They are harmless — the topmost wins visually — but they are the source of
every stray decimal, and they mean the layer named `Main Image` is not
necessarily the image you are looking at. Nothing was deleted; the stacks are
reported so they can be cleaned up by hand.


One oddity in the section, left as found: it contains **two copies of the same
potli banner**, so there are two identical potli cards. The second is suffixed
`(dup)`.


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
CHROMIUM_PATH=... node render-iterations.mjs autumn.html autumn
```

### Three render modes

`render.mjs` and `render-iterations.mjs` both take the same two switches:

| | Shows | Writes to |
|---|---|---|
| *(default)* | the finished banner | `out/` |
| `NOTEXT=1` | photo, scrim and footer glass; **type hidden** | `out/no-text/` |
| `NOCHROME=1` | **photograph only** — no scrim, no footer glass, no grain, no type | `out/photo-only/` |

`NOTEXT` exists for contrast measurement: the scrim and glass stay, so what
gets sampled is exactly what sits under a glyph. `NOCHROME` exists for handing
the picture over on its own.

Note that `NOCHROME` is **not** the same as the raw source file. The frame
still crops to 1000 x 1372 (0.729) while the source is a 3:4 (0.750), so a
photo-only render is the photograph *as the banner crops it*. Use it when the
crop matters; use `assets/<set>/*.jpg` when you want the full original frame.

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
| Cupping | A · `DEEPER` / *than hands reach* | D · `TAKE / THE WEIGHT / OFF` | E · *Unknot* / `AT HOME` |
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


## The autumn palette

`autumn.html` -> `out/autumn/`. One palette across all three services, which
is the fix for a specific failure: six banners in six unrelated hues read as a
paint-brand advertisement rather than one campaign. The hue span is the whole
story.

| | hue span | luminance | reads as |
|---|---|---|---|
| the wild six | teal, terracotta, plum, olive, slate, ochre | **269 degrees** | 0.140-0.166 | a colour chart |
| autumn three | russet, ochre, brick rose | **35 degrees** | 0.143-0.158 | one campaign |

Both sets are equally consistent in *value* — that was never the problem.
Cohesion lives in hue, and six evenly-spread hues at matched luminance is
exactly what a paint swatch card looks like.

| Service | Wall | Hue | Cast | Contrast |
|---|---|---|---|---|
| Cupping | russet chestnut `#8A604A` | 21 deg | man, 27, broad back, very short crop | 5.05 : 1 |
| Herbal potli | ochre gold `#886A31` | 39 deg | woman, 26, thick coiled bun | 5.10 : 1 |
| Korean scrub | brick rose `#8A5F5C` | 4 deg | woman, 28, low bun, freckled shoulders | 4.54 : 1 |

Zero scrim on all three. Frame luminance runs 22.0-22.9%, the tightest the set
has ever been.

**The ink is unified too.** All three use the campaign cream `#F8EED6` rather
than a per-service tint. Unifying the type is half of what stops a set reading
as a chart — six walls in six hues each with its own tinted headline is two
axes of variation where the campaign only wants one. `--ink` is still there for
when a one-off genuinely needs it.

Of the three the ochre is the most saturated and sits furthest from the other
two; if the family needs to be tighter still, pulling it toward an amber-brown
around `#8A6A42` closes the gap to about 20 degrees.

### Three rooms, not one room three times

A palette that unifies can flatten. With the same bed, the same hands-only
rule, the same window-right habit and the same arms-at-both-sides pose, the
three banners came out reading as one room redressed — different massage
action, different wall colour, nothing else.

The fix is one distinct, deliberate choice per banner, in light, furniture and
pose rather than in colour:

| | Light | Room | Pose |
|---|---|---|---|
| Cupping | hard, low, direct sun with a crisp window-frame shadow — kept on the **lower** wall only | **no curtain anywhere**: bare black-framed window, clear glass, no fabric in the room at all | head **turned to camera**, cheek on the pad rather than in the cradle, **eyes closed**, brow smooth, jaw slack |
| Herbal potli | **soft but directional**: gradual shadow edges, no crisp sun pool, but still raking in from the left so it models the body | **no window in frame at all** — just wall and bed, light from off-frame left | **one arm bent flat beside the headrest**, forearm on the table alongside her head, the cradle still reading clearly |
| Korean scrub | **dappled** through leaves, broken shadow on the lower wall and floor | **a Korean lattice window** — fine dark-wood mullions backed with translucent hanji-like paper, glowing as one soft panel — plus **a houseplant**, one rubber plant in a terracotta pot cropped at the left edge, out of focus | **flat and prone**, face in the cradle, wider 35mm crop |

The lighting one needed two goes. Asked for as "fully diffused overcast" the
potli frame came back genuinely flat and lost the fall of light across the body
altogether — which is exactly the thing that reads as photography. Re-asked as
**soft AND directional** — two properties, stated separately: gradual shadow
edges and no sun pool, but still raking in from one side and still modelling
the back — it keeps its own soft character while holding the locked light rule.

**The Korean cue is now the window, not the bowl.** A slim wooden lattice grid
backed with translucent hanji-like paper, glowing as one soft warm panel: a
modern apartment's nod to a changhoji screen. It reads as Korean to anyone who
knows it and as a nice window to anyone who doesn't, which is the right weight
— and it does that job better than the celadon bowl, which took three rounds
to get into frame and is a prop rather than architecture. Both are in the shot
now. Explicitly out: carving, painted motifs, lacquer, ornament, anything
museum-like or themed.

**The face is the one real addition.** Cupping is now the only frame with a
person in it rather than a body: head turned out of the cradle, eyes closed,
expression released. It carries the promise in a way a back cannot, and it is
deliberately the *only* one — three calm faces would be a stock-photo set.

### An empty room reads as a studio

The potli frame was fixed twice and failed twice for opposite reasons, which
is the most useful thing in this file.

First it was a flat field of colour, so architecture was added — corner,
skirting board, receding tile floor. That made it a *room*, and it still read
as a **massage studio**. Architecturally correct and completely bare is exactly
what a treatment room looks like: **emptiness is the institutional signal.**
No amount of correct geometry fixes it.

Home comes from evidence that somebody lives there. Four cheap domestic
objects did it, all placed low and to the right, clear of the type zone:

| | Why it works |
|---|---|
| An **open doorway** at the right onto a brighter hallway | The flat continues somewhere. A treatment room is a destination; a home is a route through. Strongest single cue. |
| A plain white **light switch plate** on the wall | So mundane it cannot be read as styling. Nobody dresses a set with a switch. |
| A pair of **sandals kicked off** on the tile, one askew | Somebody was here a moment ago and took their shoes off. Domestic, and specifically Indian. |
| A **rug edge** under the near table legs | Soft flooring is domestic; bare hard floor is clinical. |

Note the shape of the rule this replaces. The original brief banned everything
— "no rolled towels, no linens, no bolsters, no trolley, no petals, no candles,
no plants" — to keep spa dressing out, and that ban is still right about all of
those. But it was silently also banning *domestic* objects, and that is what
made three rooms feel like a clinic. The distinction is not
object-versus-no-object, it is **whose object**: a folded-towel arrangement is
the salon's, a switch plate and a kicked-off sandal are the customer's.

The scrub frame was never accused of being a studio, and it is the one that
always had a houseplant in it. That should have been the clue two rounds
earlier.


### Making a wall read as a room

Banning the window from the potli frame to differentiate it had a cost nobody
asked for: with no window, no corner, no skirting and no floor line, the frame
became a flat field of colour with a bed in front of it — a studio sweep, not
a room. The differentiator was right; the consequence was not.

A wall needs architecture to read as an interior, and it takes four cheap
things, none of which is a window:

1. **A corner.** One soft vertical edge where a second wall plane comes
   forward, catching slightly more light. This is the single strongest cue.
2. **A skirting board.** A slim modern white one along the base.
3. **A floor with perspective.** A strip of tile with grout lines going away
   from the camera, not a flat band.
4. **Gentle falloff across the wall**, left to right, the way light in a real
   room behaves rather than a perfectly uniform field.

Put the corner on the side the type does *not* use — right, for the
left-ranged hierarchy — so the vertical edge never lands in a glyph box.

### Framing out what the model gets wrong

The scrub frame had genuinely malformed anatomy below the towel: an extra
torso and a limb that connected to nothing. Two lessons.

**The wide lens invited it.** At 35mm, pulled back for "more room", the frame
had space for her hips and legs, and that is the region the model resolved
badly. Back at 50mm the body simply ends at the towel.

**The cheapest fix for a region the model renders badly is to crop it out**,
not to describe it harder. The instruction that worked was positional, not
anatomical: "her body runs out of the LEFT edge of the frame at the towel;
nothing below the towel is in shot — no hips, no legs, no knees, no feet."
An explicit anatomy negative is worth adding alongside it (one body, one head,
two arms, no duplicated limbs, no second torso) but the crop is what actually
guarantees it.

The same round also cut the Korean window down to size. Asked for without a
scale it came back as a floor-to-ceiling temple screen. Specified as "a
normal, modest-sized window in the right-hand wall, sitting within a plain
plastered reveal, roughly the size of an ordinary domestic window", it reads
as an apartment.


### Two technique corrections

Both are now locked rules further up, but the failures are worth recording
because neither was a casting or lighting mistake — each was a *side effect* of
asking for variety.

**The scrub client was elevated.** Asking for "a knee drawn up so the hip rolls
toward the camera and the body is an S-curve" got her propped up on her
forearms with her torso raised and her head out of the cradle. That is not how
the treatment is given. The fix is to state the base position as an absolute
before adding any variation — flat and prone, chest, ribs and hips all resting
down, face in the cradle, nothing elevated — and then to keep the variation
small enough that it cannot fight it.

**The potli headrest vanished.** Asking for "one arm bent up above the head,
forearm resting beyond the headrest" displaced the headrest entirely: the model
resolved the conflict by removing the object. Re-specified as an arm bent
*beside* the cradle, with an explicit instruction that the cradle, its paper
sheet and the face in it must still read, and it came back correctly. When a
pose puts anything near the head end, name the headrest as a requirement in the
same breath.

### Matching the three after the fact

The new frames came back darker than the palette wanted — the "hard direct
sun" instruction pulled overall exposure down with it, and the diffused frame
came in flat and low. Rather than re-shoot, both were lifted with a **gamma
1.08** curve, which is small enough to carry no risk of washing out:

| | gamma | frame before | frame after | contrast after |
|---|---|---|---|---|
| Cupping | 1.08 | 20.9% | 22.2% | 4.91 : 1 |
| Potli | 1.21 | 15.3% | 19.5% | 4.17 : 1 |
| Scrub | 1.09 | 19.7% | 21.5% | 4.15 : 1 |

That is the argument for shooting with contrast headroom, and also its limit.
**A grade trades brightness against contrast; it cannot create both.** The
potli frame came in at 15.3% and 5.47:1. Lifting it to the set's 22% needed
gamma 1.34 and dropped it to 3.73:1, under target. Solving for *contrast*
instead of brightness landed gamma 1.21, 19.5% and 4.17:1 — so that frame stays
about two points darker than the other two, which is the honest cost of having
asked for soft light. Fixing it properly means re-shooting brighter, not
grading harder.

Final: frame luminance 22.2 / 22.0 / 23.5%, contrast 4.91 / 4.28 / 5.15 : 1 at
zero scrim, nothing below 3.43:1 at the brightest 5% of a glyph box. All three
frames are now within 1.5 points of each other on brightness, and the potli
frame got there by being re-shot in a brighter room rather than by being graded
harder — gamma 1.11, against the 1.34 an earlier attempt needed.


### Copy: back to the approved lines

The headlines are the signed-off set, with one later change to cupping:

| Service | Hierarchy | Copy |
|---|---|---|
| Cupping | A | `CUPPING, AT HOME` / `DEEPER` / *than hands reach* |
| Herbal potli | B | `Warmth that` / *sinks in* |
| Korean scrub | C | *Glow* / `HEAD TO TOE` |

**No durations.** An earlier round put "at home, in an hour" and "ninety
minutes, at home" in the kicker slots. Duration is a detail for the booking
flow, not a headline — it dates the creative the moment a service time changes,
and it spends the one line that should be carrying the proposition.

One thing to flag rather than silently resolve: cupping's kicker is `CUPPING,
AT HOME`, which does name the service. That sits against the "no service name
in the headline" note further up. It is kept because it is the approved line
and because the kicker is doing a different job from the hero — it states the
proposition, where `HEAT, / HERBS, / HANDS` was trying to *be* the headline.
Say the word if the kicker should lose it too.

**Cupping's hero changed.** It was `UNDO` / *every ache*, which was flagged as
needing to go — "undo every ache" is a claim any massage could make, so it did
not earn the banner. The replacement is `DEEPER` / *than hands reach*, and the
reason it works is that it is the one thing that is literally only true of
cupping: suction lifts the tissue instead of pressing it, so it reaches below
the depth a therapist's hands can work at. It says the mechanism's *benefit*
without naming the mechanism and without a therapeutic claim.

At the locked sizes (hero 244px Poppins 600, tail 142px Pinyon) the two lines
ink 803px and 852px in the 888px column — 85px and 36px of headroom. The tail
is the constrained line; a longer replacement needs the size dropped, not the
56px margins touched. In the Figma cards the same pair sits at 72px / 56px and
needed no refit.

### The casting error worth recording

An earlier cupping frame read as a woman. The cause was not the casting
instruction — the prompt said "man aged 29" — it was a *variation* instruction
sitting on top of it: "longer wavy hair pushed back off his face", added purely
to make that banner differ from the other. With the face in a headrest and the
therapist cropped out, hair is one of the only gender cues the picture has
left, so a hair note quietly outvoted the casting note.

The fix is to state the read rather than the attribute: "THE CLIENT IS
UNMISTAKABLY MALE, immediately obvious at a glance — broad muscular back, wide
shoulders tapering to the waist, VERY SHORT cropped hair, absolutely no long
hair, no wavy hair falling loose, no bun, nothing that could read as a woman."
And vary a male client on build, not on hair length.


## Changing copy

Edit `index.html` — three plain blocks, one per banner. `copy.md` holds the
reasoning and two alternates per service.
