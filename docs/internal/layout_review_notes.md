# Layout and Constraint Review Notes

## Purpose

This note records what the browser checks and recent delivery work revealed about where earlier constraints were too loose, under-specified, or prone to drift. It is not a retrospective blame document. It is a practical tightening memo for future `aimez` phases so the next passes are less noisy and less likely to get pulled off track by ambiguity.

## What the browser review found

All five new phase-3 note pages are now functional at desktop and mobile widths after one fix to `program-brief.html`. The pages tested:

- `research-program.html`
- `jen-packet.html`
- `research-partner.html`
- `related-anchors.html`
- `program-brief.html`

Initial issue found:

- `program-brief.html` showed minor horizontal overflow on mobile width. This was corrected by:
  - adding `max-width: 100%` to images
  - adding `overflow: hidden` and `min-width: 0` to figures
  - allowing action links to wrap
  - reducing body padding on very narrow screens

Final state:

- all pages are responsive
- no content cutoff
- no broken images
- no horizontal scroll at 375px width

## Where prior constraints were too loose

### 1. Audience segmentation was not explicit early enough

The project initially spoke of “the packet” as if one polished surface could serve all external readers. The later work made clear there are at least four distinct private-facing lanes:

1. advisor-facing (Jen)
2. data-provider-facing (StreetLight)
3. research-partner-facing (Kasey-like audience)
4. broad private program-brief for grants, conferences, paper submissions, and general external readers

Constraint to add going forward:

- every external-facing page must begin with a single explicit audience line in its spec:
  - who it is for
  - what it is trying to achieve
  - what it must not become

### 2. Figure staging was under-specified

Earlier phases did not force a distinction between:

- demonstration figures for slide insertion
- archive figures for appendix
- figures selected for private packet pages
- figures selected for public pages

This led to repeated re-triage and duplicate reasoning about which figures belonged where.

Constraint to add going forward:

- every future phase with figures must include a `figure_allowlist.md` with four columns:
  - asset path
  - audience lane
  - purpose
  - readiness (public-safe, private-only, appendix-only, excluded)

### 3. Caption / title constraints were too weak

Several rounds of cleanup were needed because:

- titles were heading-like when they needed to be full claims
- captions were fragmentary or overly implicit
- negational / corrective framing persisted longer than desired

Constraint to add going forward:

- for every page or slide spec, require:
  - one sentence naming what the object is
  - one sentence naming what it shows
  - one sentence naming why it matters
- forbid fragment-only captions in spec documents unless the audience is purely internal

### 4. Responsive requirements were checked too late

The pages were architecturally fine but the mobile overflow issue on `program-brief.html` was found only after the page existed.

Constraint to add going forward:

- any phase that adds a new note page with images must include a mandatory browser pass at:
  - desktop width ~1400px
  - tablet width ~768px
  - mobile width ~375px
- no phase is “done” until the responsive pass is complete

### 5. Asset portability was not treated as a first-class requirement early enough

Several useful materials lived outside `aimez` and only later got copied into `docs/assets/gallery/`. This delayed self-contained packet construction.

Constraint to add going forward:

- private note pages that may become public later should not depend on external absolute paths
- if an asset is required for comprehension, copy it into `aimez/docs/assets/gallery/` before writing the page that refers to it

### 6. The patent boundary needed a dedicated surface

The StreetLight brief demonstrated that “private note” is not specific enough. A disclosure-safe lane needed its own guardrail memo.

Constraint to add going forward:

- when a page may be shown to any external entity with commercial, legal, or procurement implications, create a dedicated `*_disclosure_guardrails.md` before the page is written

## How to avoid getting thrown off track in future phases

### Rule 1. Declare the lane first

Before writing any new page, answer:

1. audience
2. objective
3. excluded content

If those three are not written down, do not draft the page yet.

### Rule 2. Promote only after a private packet proves itself

No public homepage promotion until:

- the page has been used privately
- the assets are self-contained
- the copy no longer requires justification scaffolding

### Rule 3. Keep one source of truth for language

For future phases, all public or private page drafts should point back to:

- `identity_reorg_plan.md`
- `theory_anchor_map.md`

If a phrase on a new page cannot be traced back to one of those two docs, it is probably drifting.

### Rule 4. Separate the conceptual bridge from the public identity

Theory anchors like Sharpness Dimension, Allocentric Flocking, active matter, and STI are useful because they sharpen the program's internal understanding. They are not automatically public-facing identity terms.

Use them as:

- internal constraints
- private explanatory bridges
- audience-specific side notes

Do not use them as:

- homepage slogans
- category claims
- unexplained public nouns

## Ready-state checklist for future phases

Before calling a future `aimez` phase complete, verify:

- [ ] audience lane explicit
- [ ] figure allowlist written
- [ ] assets copied locally into `docs/assets/gallery/`
- [ ] browser pass run at three widths
- [ ] no fragment-only captions on external surfaces
- [ ] theory-anchor usage traceable back to `theory_anchor_map.md`
- [ ] disclosure guardrails written where needed

This note should be treated as a process constraint, not as commentary. It exists to reduce drift and to keep later phases sharper than the early ones.
