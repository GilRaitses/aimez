# Typography and Identity Note

## Purpose

This note locks a first-pass separation between:

1. `aimez` platform identity typography
2. content typography on the site
3. the logo / mark system

The goal is to make the site recognizable without making the public surface louder than the program can yet support.

## Source reference

Two sources inform this lock:

1. the user's PHY600 mod4 brain-organoid presentation (`/Users/gilraitses/PHY600/mod4/presentation/Team-3-BioInspired600-BrainOrganoids.pdf`), which supplied the hierarchy
2. the explicit web-font stack the user selected afterward, which is now the canonical implementation

The recapitulation slides use a recognizable hierarchy:

1. a small tracked line above the main headline
2. a bold-ish headline block
3. a strong but not over-heavy subheading / callout layer
4. a lighter body layer below

This is the hierarchy we are porting conceptually into `aimez`, not the full slide aesthetic. The actual type families are now the user-selected IBM Plex / Newsreader stack, not the embedded fonts from the PDF.

## Typographic split to lock in now

### Platform identity typography

Use for:

- the `aimez` name
- eyebrow lines
- page titles
- section heads
- buttons or pill-like navigation elements

Family:
- `IBM Plex Sans`, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- for the largest identity headline only: `Newsreader`, `IBM Plex Serif`, Georgia, serif

Why:
- IBM Plex Sans gives the identity layer a technical but not cold register
- Newsreader gives the main platform name a more editorial and research-forward weight without turning the site into a magazine
- the combination reproduces the hierarchy you liked in the organoid slides more faithfully than the temporary Trebuchet / Arial approximation

### Content typography

Use for:

- body copy
- captions
- explanatory notes
- figure descriptions
- long prose

Family:
- body and general prose: `IBM Plex Sans`
- reflective, note-like, or slightly more discursive sublayers: `IBM Plex Serif`
- editorial / hero moments, if needed later: `Newsreader`
- technical captions and figure labels: `IBM Plex Mono`

Why:
- IBM Plex Sans keeps the pages precise and readable
- IBM Plex Serif gives room for quieter, more reflective sublayers without collapsing into generic web body text
- IBM Plex Mono makes labels, captions, and technical callouts visibly distinct from the explanatory prose

### Weight hierarchy

Use this hierarchy consistently:

1. eyebrow line
   - small caps or uppercase
   - high tracking
   - serif or editorial family
   - subtle accent color

2. page title
   - editorial family for major top-level headlines
   - sans family for secondary page titles
   - medium weight
   - not oversized

3. section title
   - sans family
   - medium weight

4. body and captions
   - body copy: sans family
   - technical captions and labels: mono family
   - reflective small notes: serif family
   - regular or light

This hierarchy is enough. Do not add more decorative levels until the public identity is stronger.

## Mark system

### Current mark

The current low-key mark is the circular `a` extracted from the leftmost segment of the existing wide logo:

- source logo: `docs/assets/aimezlogo.png`
- transparent cropped mark: `docs/assets/aimez-mark.png`
- web version: `docs/assets/aimez-mark.webp`

### Usage

Use the mark:

- on the homepage, quietly paired with the `aimez` word
- at the top of private packet pages, above or beside the eyebrow line
- as the favicon family source

Do not use the full wide logo for:

- favicons
- small packet headers
- tiny nav elements

Reserve the full wide logo / wordmark style for:

- PDF covers
- later research-program or grant-facing surfaces
- situations where the mark alone would feel too slight

## Identity strategy

This is a low-key pass. The identity should be:

- recognizable
- consistent
- quiet
- more present than before

It should not be:

- loud
- logo-dominant
- visually busier than the content can support
- trying to sell the public on a fully formed lab identity before the materials are ready

## What this note authorizes now

1. small circular mark added to homepage and private packet pages
2. IBM Plex Sans as the default UI / body family
3. Newsreader for the largest identity headline moments
4. IBM Plex Serif for eyebrow / reflective / note layers where appropriate
5. IBM Plex Mono for technical captions and labels
6. favicon family derived from the circular mark

## What this note does not authorize yet

1. a homepage hero redesign
2. a full visual-brand rollout
3. replacing the site's quiet gradients or minimal spacing system
4. using STI / discoverative-intelligence language as visual branding
5. exposing the private packet surfaces publicly

## Review criterion

The pass is successful if:

- the site becomes more recognizable across pages
- the typography clearly separates identity from content
- the mark is visible but not noisy
- the public homepage still feels spare

If the mark begins to dominate the page, the pass has gone too far.
