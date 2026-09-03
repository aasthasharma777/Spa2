# Handover — UC at-home spa banners

Written to hand this project from a Claude Code web session to a local one.
Everything below is committed on `claude/massage-banners-copy-gj5zxs`.

Three portrait banners, 1000×1372, for at-home spa services: **cupping
therapy**, **herbal potli massage**, **Korean body scrub**. Built as static
HTML/CSS and rendered to PNG, with a layered Figma deliverable alongside.

## Start here

```bash
git clone <repo> && cd Spa2/banners
git checkout claude/massage-banners-copy-gj5zxs
npm install                      # pulls Playwright + downloads Chromium
npm run render                   # -> out/{cupping,potli,scrub}.png
npm run check                    # fit + contrast on the shipping page
```

`node_modules/` is gitignored and there was no `package.json` until this
handover, so a fresh clone genuinely could not run the render before now.

Then point your Claude session at `banners/README.md` — it is long and it is the
real spec. This file is the map; that file is the territory.

## The rules that are locked

Do not relax these without asking. Each one cost a round to learn.

**Casting**
- Age 25–30. Not older. This was stated as a constraint, not a preference.
- The massage professional is **never shown**. Bare hands only, nothing else
  of them in frame — no forearm, sleeve, shoulder or torso.
- Cupping is cast **male**. It was rendered as a woman once and rejected.

**Light**
- Natural light must fall on the client in **every** composition. This started
  as praise for the cupping and scrub frames and was promoted to a must-have.
- The picture carries its own brightness: subject bright, wall behind the type
  two steps below. Do not reach for a scrim.
- Cupping runs a 0.14 scrim; potli and scrub run at **zero**. If type on a new
  photograph reads weak, **repaint the wall** in the next shoot.

**Palette**
- One hue family. Three differently-hued walls read as a paint chart — the
  actual note was "these look like Asian paint ads". The wild six spanned 269°
  of hue and failed; the autumn three sit inside 33° and work.
- Cohesion is **hue**, not value. Both sets matched on luminance.

**Rooms**
- Domestic, not a studio. A bare but architecturally correct room reads
  institutional; the fix is domestic objects. The distinction is not
  object-versus-no-object, it is whose object.
- The three rooms must differ: diffused light in one, no curtain in another, a
  plant visible in a third, and the clients in different positions.
- Soft is not flat — a diffused frame still needs direction or it loses the
  fall of light.

**Copy**
- No durations. Duration belongs in the booking flow.
- Don't name the massage in the headline ("potli", "cupping") — the kicker is
  where "at home" gets said.
- No therapeutic claims: no detox, no toxins, no "improves circulation".
- A line has to be true of *this* service specifically. `UNDO / every ache` was
  cut for being a claim any massage could make.

## Where things are

```
banners/
  index.html          the shipping three (C1 / P1 / S1)
  autumn.html         autumn palette set
  iterations.html     text + copy variants, 9 banners
  alternates.html     alternate hierarchies
  wild.html           the wild six (jewel walls — palette rejected, kept for reference)
  banner.css          the whole design system, heavily commented
  copy.md             headline copy with rationale and alternates
  README.md           THE SPEC. Read it.
  render.mjs          -> out/  |  NOTEXT=1 -> out/no-text/  |  NOCHROME=1 -> out/photo-only/
  render-iterations.mjs   render every banner on any page
  tools/              fit / contrast / brightness measurement — see tools/README.md
  assets/             C1 P1 S1 + alt/ autumn/ wild/ archive/ + PHOTO-INDEX.md
  downloads/          all 19 photos code-named, plus photo-only and finished banners
  figma-drop/         14 image drops prepared for Figma
  reference/          the marked reference banner this was calibrated against
  fonts/              self-hosted woff2
```

**Photo code names** are in `assets/PHOTO-INDEX.md` — C1–C4, P1–P5, S1–S4,
W1–W6. Use them. Two rounds were lost to "these are the previous version
images" because I described photographs in prose instead of by code.

The chosen set is **C1 / P1 / S1**, which is what `index.html` renders.

## Type: three hierarchies, one per service

Each service gets its own construction so the set does not look like one
template filled in three times. What holds the campaign together is the canvas,
the cream, the grain and the footer.

| | Service | Hierarchy | Copy |
|---|---|---|---|
| A | Cupping | word-dominant | `CUPPING, AT HOME` / `DEEPER` / *than hands reach* |
| B | Potli | left-ranged editorial | rule / `Warmth that` / *sinks in* |
| C | Scrub | script-led minimal | *Glow* / `HEAD TO TOE` |

Recolour type by setting **one** token: `style="--ink: #E8F1F4"` on the banner.
The kicker, hero, script, rules and micro-lines all resolve through it.

## Figma

File **`6TTvUxKDWjXZdpCLsQuQyH`** — "UC Spa Banners", single page.

`Section 1` (`61:179`) is the live section. Everything else is history.

| what | node |
|---|---|
| **Reference card** — the spec to conform to | `44:100` "Spotlight 3:4", 360×480 |
| Cupping full-size, autumn russet | `46:3` |
| Cupping full-size, wild ink petrol | `44:64` |
| Potli full-size, autumn ochre | `46:17` (and a duplicate at `61:162`) |
| Scrub full-size, autumn brick rose | `46:31` |
| Scrub full-size, first dark mauve plum | `61:135` |
| **Spec cards** cupping | `68:4`, `70:50` |
| **Spec cards** potli | `70:5`, `70:73` |
| **Spec cards** scrub | `70:28`, `70:96` |

Outside the section: rows A–D full-size at `2:2`/`2:4`/`2:6`, `11:2`/`11:16`/`11:30`,
`16:2`/`16:16`/`16:30`, `16:43`/`16:57`/`16:71`; twelve 360×480 copies from `29:3`
through `34:91`; the wild six at `56:3`–`56:72`; the first dark pair at `56:86`/`56:100`.
The loose screenshots and `Main Image` / `DROP` rectangles inside Section 1 are
yours — untouched.

### The card spec

Locked after several rounds. All six cards conform.

- Card 360×480. `Main frame` inset (16, 16), so **headline text nodes are
  direct children of `Main frame`** and their x/y read directly as the spec.
- Top text layer at **x = 16, y = 24** in Main-frame coords.
- Every position, dimension, font size and line-height a **whole number** and a
  multiple of 8. No decimals anywhere.
- Glyph ink contained in its box, checked with `absoluteRenderBounds`.

### The method that makes cross-font spacing work

This is the single most useful thing learned in the Figma work.

`absoluteBoundingBox` is the layout box; **`absoluteRenderBounds` is the real
ink**. The ratio between them varies wildly by face — Pinyon 78%, Kapakana 62%,
Poppins caps 71.5%, Open Sauce One caps 78.9%. So `rescale()` and box-based
maths preserve *box* relationships while the visible spacing drifts.

Size by ink: `fontSize *= targetInk / currentInk`.
Position by ink: `offsetInBox = ink.y - box.y`, stack for ink-to-ink gaps, then
`y = inkTop - offsetInBox`.

Explicit pixel `lineHeight` is the grid unit. +8 line-height shifts ink down 4px,
which is the half-grid nudge when 8pt positions alone can't hit the optical gap.

Three constraints — 8pt sizes, ink containment, 8pt positions — leave a
worst-case gap error of about 2.7px, against 1.3px with free sizes. That is the
price of the grid and it was accepted deliberately.

## State as of this handover

Last commit `c556f66`. Nothing uncommitted.

**Just done:** cupping's headline changed from `UNDO / every ache` to
`DEEPER / than hands reach` — "suction goes deeper than hands reach", the one
thing only cupping can claim. Applied in `index.html`, `autumn.html`,
`iterations.html`, `alternates.html`, `copy.md` and the README tables; both
full-size Figma banners and both cupping cards updated. `wild.html` keeps its
own `RESET / your back`.

At the locked sizes it fits with room to spare: `DEEPER` inks 803px and
*than hands reach* 852px in the 888px column. The tail is now the constrained
line — a longer replacement needs the size dropped, not the margins touched.

### Open items

1. **The cupping kicker is switched off on both spec cards.** `CUPPING, AT HOME`
   sits at `visible: false`, `fontSize: 8` on nodes `68:24` and `70:70`. This is
   a bug of mine — a fit loop clamped to its 8px floor. Every other cupping
   layer in the file has it visible (31px full-size, 10.85px on the older
   cards). The fix I proposed and did **not** apply: visible, 16px on 16px
   line-height at x16/y24, matching the scrub card's `HEAD TO TOE` (16px Medium,
   the established tracked-caps size at card scale). The alternative is to
   delete the layer — the reference card has no kicker and the footer already
   says "Cupping therapy". Your call; it should not stay hidden either way.

2. **A close-up frame for the Korean body scrub.** This is where we stopped. The
   image was at `~/Downloads/scrub image .jpg`, which a web session cannot
   reach — hence this handover. Locally, just point at the file.

   A close-up is the hardest case for the locked rules, so check it against them
   before anything else: a tight crop is *more* likely to catch a forearm or
   sleeve (hands-only), makes age legible with nowhere to hide, and risks the
   elevated-hip pose that was already rejected once. Then the type problem —
   hierarchy C puts *Glow* at 336px across the top third, and a close-up fills
   that zone with subject instead of wall. Measure it (`tools/brightness.mjs`,
   then `tools/contrast.mjs`) and either find a crop that keeps the zone clear
   or move that frame to a different hierarchy. Do not reach for the scrim;
   scrub runs at zero.

   Decide up front whether it **replaces S1** — in which case `index.html`, the
   Figma cards and `downloads/` all follow — or is a **fourth option** built as
   a variant with S1 left alone.

3. **`Text / headline` was dissolved in the cards.** Found mid-work: the wrapper
   frame was gone and text nodes sat as direct children of `Main frame`, with
   kicker and hero both at y=24, overlapping. All six cards are now normalised
   to that flat structure rather than rebuilt with the wrapper — which also
   makes the spec measure directly. Noted in case it surprises you.

## Gotchas worth keeping

**Rendering**
- `NOTEXT=1` keeps the canvas, crop, grain and scrims but drops the lettering —
  a drop-in plate that lines up pixel for pixel. `NOCHROME=1` drops the footer
  and scrims too, for the bare photograph at banner crop.
- `CHROMIUM_PATH` overrides the browser. Needed in containers where Playwright's
  bundled headless shell is missing; unnecessary on a laptop.

**Type**
- `white-space: nowrap` on `.h-script__hero` and `.h-rules__hero`. Without it a
  "brighter" copy variant overran by 157px and silently wrapped.
- Font style names differ by family: Inter wants `"Semi Bold"` (with the space),
  Poppins and Open Sauce One want `"SemiBold"` (without).

**Image generation** (Magnific / Seedream 5 Pro, 3:4 at 2k, reference
`xSPAiJRjfW` as the locked bed)
- State the **read**, not the attribute. "Longer wavy hair pushed back" —
  added only to vary one banner — outvoted "man aged 29", because with the face
  in a headrest and the therapist cropped out, hair is one of the only gender
  cues left. Say "unmistakably male, obvious at a glance".
- State the base pose as an absolute **first**, then vary. "Knee drawn up so the
  hip rolls toward camera" produced the technically-wrong elevated scrub pose.
- Beware instructions that conflict with an object: "forearm resting beyond the
  headrest" made the model delete the headrest to resolve it.
- Fix framing problems **positionally**, not anatomically. Malformed scrub legs
  were solved by "body runs out of the LEFT edge at the towel", not by
  describing legs.
- Describe expressions as awake. "Brow smooth, jaw slack, lips softly parted" is
  a description of unconsciousness — it read as asleep. "Calm closed-mouth
  smile" is what was wanted.
- Grading has a hard limit: a gamma curve trades brightness against contrast and
  cannot create both. Potli needed gamma 1.34 to reach 22% brightness and its
  contrast fell to 3.73:1. Fix lighting in the shoot, not the curve.

**Figma**
- Load the `figma-use` skill before every `use_figma` call.
- `query()` rejects `/` in selectors — use
  `findAll(n => n.name.indexOf('...') !== -1)`.
- Dragging an image onto a card creates a **new rect above the old one** at a
  sub-pixel offset. That is where stray decimals come from; two cards had
  stacked rects and one had three.
- Guard fit loops on both sides: `absoluteRenderBounds` is `null` right after a
  reparent, and an inverted guard stepped a font size to zero
  (`if (!i || i.width <= target || size <= 8) break;`).
- `mcp.figma.com` and `www.figma.com` were blocked from the web container
  (403 on CONNECT), so image upload had to go through the desktop app. On a
  laptop this should just work — which is the other reason to move locally.

## Environment differences, web session → laptop

| | web container | your laptop |
|---|---|---|
| Local files (`~/Downloads/...`) | unreachable | **available** |
| Figma image upload | blocked by egress proxy | should work |
| Chromium | needs `CHROMIUM_PATH` | `npm install` handles it |
| Scratchpad tooling | ephemeral, gone | ported into `tools/` |

The three tools in `tools/` are the ones worth keeping from a much larger
scratchpad set; the rest were one-round throwaways.

## Don't

- Open a pull request unless asked.
- Push to any branch but `claude/massage-banners-copy-gj5zxs`.
- Add a scrim to fix contrast. Repaint the wall.
