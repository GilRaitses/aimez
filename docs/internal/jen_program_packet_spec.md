# Jen Program Packet Specification

## Purpose

This document defines the first Jen-facing packet that should live inside `aimez` privately before any part of it is promoted publicly. The packet is not the same as an email. The email is one delivery surface. The packet is the site-local research-program surface that the email points toward.

The packet should be usable in three ways:

1. as a direct link sent to Jen
2. as an internal anchor for future `aimez` public pages
3. as the program's first coherent synthesis of the mobility substrate, the theory anchors, and the broader applied-research ethos

It should remain distinct from any audience-specific validation note such as the StreetLight-facing brief. The Jen packet is a research-program packet. The StreetLight page is a bounded empirical-validation page.

## Packet posture

The packet should read like:

- a research-program overview
- selective and curated
- enough context to orient a senior reader quickly
- neither a personal note nor a full archive

It should not read like:

- a personal email dump
- a raw appendix mirror
- a full theory manifesto
- a public-facing homepage statement

## Packet location inside `aimez`

Phase 3 target:

- `docs/notes/jen-packet.html`

Initially link-hidden. Openable only by direct URL or by future internal testing via the modal pattern.

## Core components

The packet should contain five components in this order.

### 1. Program memo (top)

One short section answering:

- what `aimez` is
- what the demonstrated applied substrate is
- what structural problem the program is trying to solve

Target length:
- 300 to 500 words

Source materials:
- `aimez/docs/internal/identity_reorg_plan.md`
- `aimez/docs/internal/theory_anchor_map.md`

### 2. The mobility substrate as the first applied instance

One section with:

- one or two selected figures
- one paragraph explaining what the substrate does
- one paragraph explaining why this is not “just a routing tool”

Required figures:
- shortest-vs-sigma route comparison
- camera-derived stress or burden overlay (pick one, not both, at first)

Source materials:
- `IST675/ist_675_final_proj_core/demonstration/appendix/index.html`
- `IST675/ist_675_final_proj_core/demonstration/notes/SPEAKER_NOTES.md`
- selected figure paths from `demonstration/artifacts/figures/`

### 3. Why these theory anchors matter

One short section on:

- Sharpness Dimension / edge-of-stability
- Allocentric Flocking / active matter bridge

Format:
- two subsections
- each with:
  - one sentence: what the paper claims
  - one sentence: what transfers into the program
  - one sentence: what does not transfer

Source materials:
- `IST675/ist_675_final_proj_core/post_presentation_followup/03_formal_theory_integration_sharpness_dimension.md`
- `IST675/ist_675_final_proj_core/references/2604.19740.md`
- `IST675/ist_675_final_proj_core/references/The BONKERS Physics of Animal Swarms (Not Clickbait) [English] [GetSubs.cc].txt`

### 4. Why Jen in particular

One short section stating why this packet is being assembled for Jen specifically.

It should name:

- multi-mechanism learning
- rigidity transitions
- non-local response to bounded perturbation
- allostery as a useful gesture, not a formal adopted term
- active matter as the umbrella rather than the brand

This section should be short and precise. It is the site-local analog of the strongest paragraph in the Friday email draft.

Source materials:
- `IST675/ist_675_final_proj_core/demonstration/jen_outreach/email_to_jen_20260424.md`
- desktop v2 draft if used later

### 5. Selective links out

At the bottom, the packet should link out to:

- the current Jen email draft (optional; private)
- the canonical walkthrough PDF
- the IST 675 appendix HTML
- selected figure assets if needed

This keeps the packet lightweight while still making the full archive accessible.

## First-phase packet contents to stage privately

Before the HTML note exists, these are the concrete artifacts that define the packet:

1. `IST675/ist_675_final_proj_core/demonstration/jen_outreach/email_to_jen_20260424.md`
2. `IST675/ist_675_final_proj_core/demonstration/appendix/index.html`
3. `pax/docs/deliverables/jen_walkthrough_20260424/gil_canonical_walkthrough_for_jen_20260424.pdf`
4. selected figures from the IST 675 demonstration package
5. the internal strategy docs written in this phase

The packet spec should treat these as the current truth set.

## Adjacent private note surfaces that should remain separate

The following private note surfaces may coexist inside `aimez`, but should not be collapsed into the Jen packet:

1. `streetlight-brief.html`
   - audience: external data vendor
   - scope: bounded academic validation use case
   - posture: empirical and disclosure-limited

2. `related-anchors.html`
   - audience: technically curious research readers
   - scope: why Sane / Sridhar / active matter matter
   - posture: explanatory and conceptual

3. `research-program.html`
   - audience: general research readers
   - scope: public-safe statement of the program
   - posture: broad but still selective

4. `program-brief.html`
   - audience: grant reviewers, conference readers, private-sector research partners, and general external readers who need a polished top-down overview
   - scope: the broadest private-facing summary of the program
   - posture: comprehensive, polished, and selective rather than personal

The Jen packet can link to these later, but should not absorb their roles.

## Figure selection for the first packet

Do not include too many.

Recommended first packet figure set:

1. shortest-vs-sigma route comparison
2. camera-derived stress field
3. cross-street capacity overlay
4. one CV pipeline figure

Optional fifth:
5. load redistribution under stress-aware routing

Do not begin with the full 17-figure appendix set or the full canonical walkthrough.

## Why the packet should live inside `aimez`

Three reasons:

1. It turns `aimez` from a site with only abstract mission language into a program that has a private but coherent evidence surface.
2. It prevents the Jen-facing story from remaining scattered across desktop files, IST 675 notes, and the pax repo.
3. It gives the site a future public showcase path that can be activated later without rethinking the architecture from scratch.

## What not to put in the first packet

Do not include:

- the full speaker notes
- the full Q&A guide
- every related paper
- raw transcripts
- every figure variant
- implementation details that only matter to internal debugging
- the StreetLight-facing validation note or any vendor-specific disclosure language

The packet should feel like a deliberate research introduction, not an archive.

## Success condition

The packet is successful when a reader like Jen can answer, quickly:

1. what is the program's problem?
2. what is the best demonstrated example of that problem?
3. why do the theory anchors matter?
4. why is this worth a conversation?

If any of those four are not immediately clear, the packet is too diffuse.
