AUTUMN ROW (row E) — UC Spa Banners
https://www.figma.com/design/6TTvUxKDWjXZdpCLsQuQyH

The three frames are already built in the Figma file at the bottom of the
canvas, labelled "E · Autumn palette — one family, three rooms" (y = 6608).
Everything is done except the photographs: the top scrim is at 0% on all
three, the headline is the approved copy in the campaign cream, and the
footer is the frosted-glass band.

Each photo rectangle is named with the file it wants:

    Image / photo  <-  DROP autumn/1-cupping-therapy.jpg
    Image / photo  <-  DROP autumn/2-herbal-potli-massage.jpg
    Image / photo  <-  DROP autumn/3-korean-body-scrub.jpg

To place one: open the frame in the layers panel, click that rectangle,
and drag the matching file from this folder onto it. The rectangle is
already 1000 x 1372 and positioned, so the photo crops exactly as designed
and the type lands where it was measured.

Right now each rectangle holds a flat mid-tone of its own wall colour, so
the row reads on-palette while it waits.

WHY THIS IS A MANUAL STEP: uploading image bytes needs a direct POST to
mcp.figma.com, which this environment's network policy blocks (403 on the
CONNECT). The plugin sandbox has no fetch or XMLHttpRequest either, so
there is no in-Figma route that does not involve transcribing ~590,000
characters of base64 by hand, which is not safe to do. Adding
mcp.figma.com to the environment's allowed domains would let a future
session place these automatically.
