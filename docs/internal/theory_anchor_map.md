# Theory Anchor Map

## Purpose

This document maps the current `aimez` language to three external anchors that now sharpen the program's direction without replacing its internal vocabulary:

1. coherence diagnostics and applicability under reuse (the existing `aimez` center)
2. Sharpness Dimension / Edge-of-Stability (Sane et al.)
3. Allocentric Flocking / active matter bridge (Sridhar et al. plus the broader boids-to-crowds lineage)

The point of this map is not to import those external terms verbatim into the site. It is to clarify what they let the program say more precisely and where they should remain only internal or private.

## Anchor map

| Anchor | What transfers | What does not transfer |
|---|---|---|
| Coherence diagnostics and applicability under reuse (current `aimez`) | artifact-centered framing; conditions omitted at formation; later reuse assuming those conditions still hold; evaluability across time and context; hidden dependency surfacing; durability of artifacts | a full positive theory of intelligence; a public-facing claim about new model classes; any implication that `aimez` is only a static diagnostic registry rather than an applied substrate builder |
| Sharpness Dimension / Edge-of-Stability (Sane et al.) | local metric versus attractor geometry; pointwise success versus field-level or scene-level structure; the regularity gap between smooth assumptions and non-smooth real systems; full spectral structure rather than crude scalar summaries; intervention at the representation stage because local quality can improve while global fit remains unstable | the deep-learning-specific objects (loss minima, Hessian of a trained network, SGD dynamics) as direct descriptions of `aimez`; public framing of the site as a deep learning theory project; use of Sharpness Dimension as a headline identity term |
| Allocentric Flocking / active matter bridge (Sridhar et al.; boids; crowds) | egocentric versus allocentric reference frames; failure of agent-centered encoding alone to produce coherent system-level behavior; importance of world-anchored representation; non-local response emerging from local interaction over a structured substrate; continuity between biological swarms, human crowds, and other collective systems; the active-matter umbrella as a way to explain why the mobility substrate matters | presenting `aimez` as a flocking lab; using “allosteric flocking” as if it were an established field term; implying the mobility substrate is a direct simulation of animal swarms; replacing artifact-centered framing with swarm metaphors |

## Existing `aimez` terms and how they now sharpen

### Coherence

Current role:
- structural descriptions remaining usable under variation

Sharper role after integration:
- the attractor-level or field-level property that remains stable when pointwise or local metrics drift

What to say internally:
- coherence names whether the representation still supports evaluation when the system is carried across contexts
- coherence can now be described as a geometry-level property without losing the original meaning

What not to say publicly yet:
- “coherence is Sharpness Dimension for applied AI”

### Applicability under reuse

Current role:
- the key structural problem of the program

Sharper role after integration:
- the HAII analog of the regularity gap: the artifact remains locally valid under the generating conditions while becoming misapplied once the second-order constraint field changes

Useful bridge sentence:
- an artifact can remain correct at generation time and still lose applicability under reuse because the relevant field-level structure lies outside the represented surface

### Through time / across time

Current role:
- pressure vs evaluation distinction

Sharper role after integration:
- a temporal version of the local-vs-attractor distinction
- “through time” now resonates with structured temporal intelligence as an external language, without `aimez` needing to adopt STI publicly yet

### Representation

Current role:
- the object that varies in representation sweeps

Sharper role after integration:
- the thing whose geometry governs system behavior when outputs persist and are carried forward
- the thing that may be egocentric / interface-relative or allocentric / scene-anchored

Useful bridge sentence:
- the program is increasingly interested in what happens when a system can only manipulate the agent-centered frame while the outcome depends on the world-anchored frame

## Recommended public-safe phrases

These can begin to replace weaker or more generic formulations in later phases:

- “field of constraint”
- “scene-anchored structure”
- “attractor-level behavior”
- “pointwise success”
- “world-anchored representation”
- “applicability under reuse”
- “geometry of what the system actually explores”

## Phrases to reserve for internal or private use

These are analytically useful but too loaded or too specific for public phase-1 copy:

- Sharpness Dimension
- Edge of Stability
- Clarke generalized Jacobian
- pullback random attractor
- allosteric flocking
- STI / structured temporal intelligence as a top-line identity term
- discoverative intelligence as a top-line public slogan

## Recommended one-paragraph internal synthesis

Use this paragraph when the team needs to explain the program to itself:

> `aimez` studies where artifacts lose applicability under reuse when systems operate on fields of constraint that exceed what their interfaces make visible. The newer theory anchors sharpen this by showing the same structural move in other domains: deep learning theory is shifting from pointwise sharpness to attractor geometry, and collective-behavior neuroscience is shifting from egocentric to allocentric representation as the operative variable in coherent response. `aimez` does not need to become either of those fields. It needs to absorb what they clarify about its own problem.

## Use in phase 1

This map should inform:

1. `identity_reorg_plan.md` — to name the new center of gravity
2. `private_gallery_spec.md` — to decide which explanatory note pages are needed first
3. `jen_program_packet_spec.md` — to define what conceptual bridges a Jen-facing packet must include

It should not yet inform:

- direct homepage copy
- public slogans
- public metadata / SEO text
