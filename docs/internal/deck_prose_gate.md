# Public deck prose gate

Slide copy in `docs/public/executive-summary.html` and `docs/public/figure-walkthrough.html` must pass `docs/public/check-deck-prose.sh` (qualityFilter patterns + **no operator briefing**).

**Never on public slides:** slide numbers, “who to talk to,” Tonight/Offer/Send lines, pitch scripts, “after the panels” as a kicker. Operator notes live only in `internal/executive-summary-briefing.html` (outside `docs/`, not on aimez.ai).

Before landing deck changes:

```bash
docs/public/check-deck-prose.sh
```

Canonical rule source: https://github.com/GilRaitses/phdPrograms/blob/main/qualityFilter.yaml
