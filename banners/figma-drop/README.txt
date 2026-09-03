UC SPA BANNERS — PHOTOGRAPHS TO DROP INTO FIGMA
https://www.figma.com/design/6TTvUxKDWjXZdpCLsQuQyH

Four rows at the bottom of the canvas are finished except their photography.
Every frame already has: top scrim at 0%, the approved copy, the campaign
cream headline, the frosted-glass footer. Each photo rectangle is NAMED WITH
THE FILE IT WANTS, so you can work straight down the layers panel.

To drop one: click the photo rectangle in the layers panel and drag the named
file onto it. The rectangle is already 1000 x 1372 and positioned, so the crop
and the type alignment come out exactly as measured.

Until a file lands, each rectangle holds a flat mid-tone of that shot's own
measured wall colour, so every row reads on-palette while it waits.

--------------------------------------------------------------------------
ROW E   y = 6608    THE AUTUMN SET — the current direction
--------------------------------------------------------------------------
    autumn/1-cupping-therapy.jpg
    autumn/2-herbal-potli-massage.jpg
    autumn/3-korean-body-scrub.jpg

--------------------------------------------------------------------------
ROW F   y = 8160    THE SAME THREE, UNGRADED — before the gamma lift
--------------------------------------------------------------------------
Moodier and higher contrast. Frame brightness 20.6 / 19.0 / 20.0% against
row E's 22.2 / 22.0 / 23.5%, and contrast 5.53 / 5.10 / 6.18:1 against
4.91 / 4.28 / 5.15:1. Same rooms, same poses, same copy — a pure exposure
A/B against row E.

    autumn-dark/1-cupping-therapy.jpg
    autumn-dark/2-herbal-potli-massage.jpg
    autumn-dark/3-korean-body-scrub.jpg

--------------------------------------------------------------------------
ROW G   y = 9712    THE WILD SIX — jewel walls, 269 degrees of hue
--------------------------------------------------------------------------
Two per service. Given the approved copy and the cream headline so that only
the photography varies between rows; the original tinted headlines (ice blue,
blush, butter gold, pale pink, mint, warm white) are one --ink declaration
away if you want them back.

    wild/1-cupping-ink.jpg           ink petrol      #52717B
    wild/2-cupping-terracotta.jpg    burnt terracotta #9A6450
    wild/3-potli-plum.jpg            violet plum     #7C5E86
    wild/4-potli-olive.jpg           deep olive      #74743F
    wild/5-scrub-slate.jpg           slate blue      #5F6E7C
    wild/6-scrub-ochre.jpg           ochre gold      #8A6B2E

--------------------------------------------------------------------------
ROW H   y = 11264   THE FIRST DARK RESHOOT — moodiest in the project
--------------------------------------------------------------------------
16.7% and 17.9% frame brightness. Potli and scrub only; cupping has no
counterpart in that batch.

WARNING: these two PREDATE the hands-only casting rule. The therapist is
fully visible in both, so they break the casting brief as it now stands.
They are here as a lighting reference, not as usable creative.

    first-dark/1-herbal-potli-massage.jpg
    first-dark/2-korean-body-scrub.jpg

--------------------------------------------------------------------------
WHY THIS IS MANUAL
--------------------------------------------------------------------------
Three routes were tested, not assumed:

  upload_assets POSTing to mcp.figma.com   403 on the CONNECT. Network
                                           policy. Tested five times.
  fetch / XMLHttpRequest in the sandbox    Both undefined. No in-Figma
                                           download route either.
  base64Decode + createImage               Both work — but the bytes must
                                           arrive as script text under a
                                           50,000-character cap.

That last one is why the answer is "drag them" rather than "impossible": the
API genuinely works, but three images at near-native size is roughly 590,000
characters of base64 typed by hand across 13 calls, and one slip yields a
corrupt image with no way to tell which chunk broke it.

Adding mcp.figma.com to the environment's Network access: Custom allowed
domains removes this for future sessions.
