# tools

Three measurement scripts. They exist because every art-direction argument on
this project was settled by measuring the render rather than looking at it, and
the same questions come back every round.

```
node tools/fit.mjs [page.html]              do the headlines fit
node tools/contrast.mjs [page.html]         what contrast does the type get
NOSCRIM=1 node tools/contrast.mjs           ... with the scrim switched off
node tools/brightness.mjs <image> [...]     is a photograph lit right for this layout
```

All three drive the real page through Playwright, so they measure what ships.
`fit` exits non-zero if a line does not fit, which makes it usable as a check.

## fit.mjs — do the headlines fit

Reports each headline line's **ink** width against the column it lives in, plus
how far the glyphs sit from the frame edge.

Ink, not the layout box, is the point. A text box can be 888px wide and still
hold glyphs that overhang it, and it is the glyphs the eye judges. Pinyon
Script's swashes hang about 10px left of their own box at display sizes, which
is why `sinks in` reads as closer to the edge than the sans line above it even
though both boxes start at x=56. The tool separates the two cases:

- **DOES NOT FIT** — ink wider than the column. A real break; fix it.
- **hangs Npx left of its box** — a font side bearing. Not a bug, but it is
  what "the text is too near the edge" actually means, so it is reported.

The column is read from the block's own computed box, not assumed, because
hierarchy B (`.h-editorial`) is inset 56px left but 300px right.

## contrast.mjs — what contrast does the type actually get

Measures where each headline line's glyphs land, hides the type, then samples
the photograph inside exactly those rectangles. Sampling a guessed box or the
whole top third averages in wall the type never touches and flatters the result.

Judge the **mean**. The reference banner lands at roughly 3.3–5.4:1 and that is
the bar. Below ~3:1 the fix is to repaint the wall in the next shoot, not to add
a scrim — a scrim buys contrast by desaturating the whole frame, which is the
dull-banner problem this campaign started with.

The **lightest patch** column is a crop warning, not a verdict: most of a line's
rectangle is the gaps between letters, so a low number there means part of the
line is crossing something bright (a window, a curtain) and the crop wants
moving. `than hands reach` on C1 reads 1.52:1 there because its left end passes
over the sunlit curtain, while its mean is a healthy 3.24:1.

`NOSCRIM=1` shows what the raw photograph gives you, which is the number that
decides whether a scrim is needed at all.

## brightness.mjs — is a photograph lit right for this layout

The whole art direction rests on one split: the **subject** carries the
brightness (oiled back, white sheet, sunlit floor) while the **wall behind the
type** sits two steps below. That is what lets the scrim go to zero and the
banner still look bright.

Measured off the three approved autumn frames, aim for a type zone near 20% and
a subject zone near 33%. Judge the split, not the absolute values — exposure
varies, the relationship is the design. A type zone above ~24% is the warning
sign, and a subject zone at or below the type zone means the light is in the
wrong place.

Zones are sampled after a cover-crop to 1000x1372, exactly as CSS crops it, so
what is measured is what ships rather than the whole 3:4 source.

For reference, the current chosen set:

```
cupping-therapy.jpg   frame 27.6%   type 28.9%   subject 24.3%   -4.6pt   #748980
potli-massage.jpg     frame 26.4%   type 20.1%   subject 32.9%   12.7pt   #816646
korean-scrub.jpg      frame 25.2%   type 17.6%   subject 32.5%   14.8pt   #856567
```

C1 is the outlier and always has been: its type zone is lighter than its
subject, which is exactly why cupping still runs a 0.14 scrim while potli and
scrub run at zero. If a reshoot of cupping ever fixes that split, the scrim can
go to zero too.

## Chromium

On a laptop `npm install` runs `playwright install chromium` and the scripts
find it themselves. Inside a container where Playwright's bundled build is
missing, point them at a system Chromium:

```
CHROMIUM_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome node tools/fit.mjs
```
