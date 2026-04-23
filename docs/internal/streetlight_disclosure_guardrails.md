# StreetLight Disclosure Guardrails

## Purpose

This memo sets the disclosure boundary for any `aimez` material that may be shown to StreetLight Data or similar commercial data providers. The goal is to present a bounded academic validation use case without drifting into the January provisional filing's protected diagnostic-infrastructure lane.

The governing source materials are:

- [`/Users/gilraitses/pax/scripts/2026-01-20/patent-research/filing-metadata.yaml`](file:///Users/gilraitses/pax/scripts/2026-01-20/patent-research/filing-metadata.yaml)
- [`/Users/gilraitses/pax/scripts/2026-01-20/patent-research/internalonly-claims-interpretation-guide.md`](file:///Users/gilraitses/pax/scripts/2026-01-20/patent-research/internalonly-claims-interpretation-guide.md)
- [`/Users/gilraitses/pax/scripts/2026-01-20/patent-research/summary-of-invention.md`](file:///Users/gilraitses/pax/scripts/2026-01-20/patent-research/summary-of-invention.md)
- [`/Users/gilraitses/pax/scripts/2026-01-20/patent-research/internal-product-taxonomy.md`](file:///Users/gilraitses/pax/scripts/2026-01-20/patent-research/internal-product-taxonomy.md)
- [`/Users/gilraitses/pax/scripts/2026-01-20/patent-research/internalonly-investor-pitch.md`](file:///Users/gilraitses/pax/scripts/2026-01-20/patent-research/internalonly-investor-pitch.md)

## What the provisional actually protects

The January provisional is explicitly framed as:

> Systems and Methods for Decision Stability Diagnostics Across Representation Families

The claim guide makes the guardrail explicit: the invention is diagnostic infrastructure rather than routing, planning, optimization, or learning technology. The protected object is the infrastructure that:

- varies representations upstream of a fixed decision engine
- identifies decision-constant regions and decision-change boundaries
- stores a stability profile artifact
- replay-validates that artifact
- derives a stability signal or stability index for downstream systems

This is the `DecisionDB` / `DecisionDB SDK` lane, not the public `aimez` experience-layer lane.

## Safe to disclose on a StreetLight-facing page

The following are safe and useful to disclose publicly in a StreetLight-facing note:

1. **Academic context**
   - Syracuse University affiliation
   - NSF NRT seed-grant context
   - the fact that this is a research validation problem

2. **The mobility substrate as a public research demonstration**
   - a graph-based pedestrian routing substrate for the Midtown corridor
   - uses a camera-derived stress field plus a seven-layer cross-street capacity model
   - compares shortest-path versus stress-aware recommendations
   - the demonstration result (same hop count, lower accumulated stress)

3. **Public-data provenance**
   - the capacity model is built from public NYC Open Data sources
   - the camera-derived demand layer is private / collected by the research program

4. **The validation gap**
   - need for per-block pedestrian volume data
   - why public NYC DOT counts are insufficient
   - what StreetLight volumes would enable

5. **Bounded data ask**
   - geography, temporal scope, spatial resolution, primary mode

6. **High-level methodology**
   - cost = stress / capacity
   - A* pathfinding on a corridor graph
   - no need to describe upstream representation-family diagnostics

7. **Filed provisional status, if needed**
   - a short footer note that some broader diagnostic-infrastructure concepts in the research program are the subject of a filed U.S. provisional patent application

## Do not disclose on the StreetLight-facing page

Do not include:

1. **DecisionDB terminology**
   - representation function
   - representation family
   - representation-parameter space
   - decision-constant region
   - decision-change boundary
   - switching surface
   - stability profile artifact
   - replay validation criterion
   - stability signal / stability index

2. **Core-product taxonomy**
   - DecisionDB
   - DecisionDB SDK
   - AIME as interface layer
   - any acquisition / investor narrative

3. **System claims posture**
   - do not describe the work as a routing product or decision-stability platform being sold
   - do not imply that StreetLight is being asked to validate or support a patented system

4. **Any implementation detail whose value is specifically in the diagnostic artifact**
   - how representation sweeps are run
   - how replay validation is performed
   - how decision-constant regions are stored or queried

## Public-facing nomenclature

Use:

- `aimez` as the visible project label
- “research substrate”
- “routing demonstration”
- “public-data capacity model”
- “camera-derived stress field”
- “validation use case”

Do not use:

- DecisionDB
- stability profile
- representation-family diagnostics
- diagnostic infrastructure as a product label

## Recommended footer disclosure

If the StreetLight note page needs a patent status line, use this exact type of sentence:

> Some broader diagnostic-infrastructure concepts in the research program are the subject of a filed U.S. provisional patent application. The materials on this page are limited to the public research demonstration and its empirical validation needs.

This is enough to avoid hiding the existence of a filing without dragging claim language into the page.

## One-sentence summary

The StreetLight-facing page should describe the mobility substrate as a bounded academic validation use case and should not expose the January filing's internal diagnostic-infrastructure vocabulary or product taxonomy.
