# Cloud agent data manifest (aimez + pax demos)

This manifest tells a cloud agent (or local operator) what already exists in git, what must be copied from a laptop to AWS, and how to wire interactive demos.  
Last updated 2026-06-03 (America/New_York).  
It is written for operators syncing `IST675`, raw camera samples, or canonical JSON artifacts for EC2/Lambda demos.

---

## 1. Already in GitHub (no AWS copy required for static site)

### aimez (`GilRaitses/aimez`), GitHub Pages root `docs/`

| Resource | Path | Use |
|----------|------|-----|
| Public executive summary | `docs/public/executive-summary.html` | Investor entry point |
| Representation pipeline | `docs/public/representation-pipeline.html` | Camera → stress (category A) |
| Canonical figure walkthrough | `docs/public/figure-walkthrough.html` | 15 figures + discussion |
| Live routing demo (UI) | `docs/public/routing-demo.html` | Browser client; needs API URL |
| Gallery PNGs | `docs/assets/gallery/mobility/`, `cv-pipeline/`, `walkthrough/` | All walkthrough images |
| PDFs | `docs/assets/gallery/documents/pax_report.pdf`, `streetlight_one_pager.pdf` | Downloads |

**Camera imagery note.** Repo includes **derived** figures with real frames embedded in composites (e.g. `cv-pipeline/cv_model_outputs_park_vs_madison.png`). It does **not** include raw frame archives or the full IST 675 appendix tree.

### pax (`GilRaitses/pax`), routing API data

| Resource | Path | Use |
|----------|------|-----|
| Corridor graph GeoJSON | `data/geojson/intersections_with_six_and_half_ave_connected.json` | Router graph |
| Stress scores | `data/stress_scores_updated.json` | Per-edge / node stress |
| Camera manifest | `data/manifests/corridor_cameras_numbered.json` | Positions + IDs |
| Routing demo service | `services/routing_demo/` | Lambda/EC2 handler + README |
| Large sigma edge file | `data/extension_work/manhattan_alignment/pipeline_sigma_edge.json` | Extended pipeline (optional) |

Deploy per `pax/services/routing_demo/README.md`. Set `routing-demo.html` `API` query param to the deployed HTTPS endpoint.

---

## 2. Not in cloud clone (sync from laptop → AWS)

Copy these to a **single S3 prefix or EC2 directory** (suggested layout below). Record the actual bucket/prefix in the operator block at the end.

### IST 675 demonstration package

| Local path (typical Mac) | Contents | Demo use |
|--------------------------|----------|----------|
| `IST675/ist_675_final_proj_core/demonstration/appendix/index.html` | Full walkthrough HTML (course scale) | Host as static site or mirror into `aimez` |
| `IST675/ist_675_final_proj_core/demonstration/` (sibling assets) | Slides, images, notes referenced by appendix | Same |
| `IST675/ist_675_final_proj_core/demonstration/notes/SPEAKER_NOTES.md` | Speaker notes | Agent context only |

**IST 675 vs aimez public pages.** Course appendix may include additional panels and narrative not duplicated on aimez.ai. After sync, either serve appendix from S3/CloudFront or extract missing assets into `docs/assets/gallery/appendix/` in aimez.

### Raw camera data (optional; for retraining / new figures)

| Expected | Notes |
|----------|--------|
| Frame archives per camera ID | Not in git; required only to regenerate stress JSON or new CV composites |
| Stress regression training tables | If separate from `stress_scores_updated.json` |

Without raw frames, cloud agents can still run routing demos and serve existing gallery figures.

### Canonical analysis artifacts (pax parity)

| File | Referenced in |
|------|----------------|
| `artifacts/canonical/phase_compare_shortest_vs_sigma_routes.json` | April canonical figure regeneration |
| `artifacts/canonical/phase_a_corridor_laplacian_axes.json` | Laplacian axis figure |
| `scripts/ops/phase_compare_shortest_vs_sigma_routes.py` | Ops scripts (applications notes) |

---

## 3. Suggested AWS layout

```text
s3://<bucket>/aimez-demo/
  manifest.json                 # operator-filled: see schema below
  ist675/                       # rsync from laptop IST675/.../demonstration/
  camera-raw/                   # optional; camera_id=.../frames/
  pax-canonical/                # phase_compare_*.json, phase_a_*.json
  routing/                      # optional clone of pax repo or subset

ec2://<instance>:/opt/aimez-demo/   # same tree if agents SSH to EC2
```

### `manifest.json` schema (operator writes after sync)

```json
{
  "version": "1",
  "updated": "2026-06-03",
  "s3_prefix": "s3://YOUR_BUCKET/aimez-demo/",
  "paths": {
    "ist675_appendix_html": "ist675/appendix/index.html",
    "camera_raw_root": "camera-raw/",
    "pax_canonical_dir": "pax-canonical/",
    "stress_scores_json": "pax-canonical/stress_scores_updated.json"
  },
  "repos": {
    "aimez": "https://github.com/GilRaitses/aimez",
    "pax": "https://github.com/GilRaitses/pax"
  },
  "endpoints": {
    "routing_demo_api": "https://YOUR_API_GATEWAY_OR_ALB/",
    "github_pages": "https://aimez.ai/public/"
  },
  "in_git": {
    "executive_summary": "docs/public/executive-summary.html",
    "figure_walkthrough": "docs/public/figure-walkthrough.html",
    "routing_demo_ui": "docs/public/routing-demo.html"
  }
}
```

Cloud agents should **read** `manifest.json` and **never fabricate** stress scores, registry status, or simulation completion.

---

## 4. Demo build checklist (cloud agent)

1. Clone `aimez` + `pax` on instance (or use workspace copies).
2. If `manifest.json` lists S3 paths, `aws s3 sync` IST675 and canonical JSON into local paths.
3. Deploy the routing API. Run `pip install -r pax/services/routing_demo/requirements.txt`, run the handler smoke test, then expose via API Gateway or uvicorn + HTTPS (see README).
4. Point `docs/public/routing-demo.html` API base URL at deployed endpoint (query `?api=` for testing).
5. For static-only investor review, GitHub Pages needs no AWS. Share `https://aimez.ai/public/executive-summary.html`.

---

## 5. Operator block (fill in after laptop sync)

| Field | Value |
|-------|--------|
| S3 bucket | `aimez-demo-198456344617` (us-east-1, private) |
| S3 prefix | `s3://aimez-demo-198456344617/aimez-demo/` |
| Routing API URL | `https://50pl2v7kne.execute-api.us-east-1.amazonaws.com` (redeployed in-repo `pax/services/routing_demo` handler via API Gateway HTTP API; legacy `09nmb9gia3` retired) |
| IST675 synced? | yes / 2026-06-03 (220 objects under `ist675/`) |
| Raw cameras synced? | no (no raw frame archive present; derived camera panels ride inside `ist675/`) |
| Canonical JSON synced? | yes / 2026-06-03 (`pax-canonical/`) |

---

## 6. Related repos (out of scope unless task says otherwise)

| Repo | Role |
|------|------|
| `PHY600` | LAMMPS synapsin campaign (magniphyq); not used for aimez investor demo |
| `magniphyq` | Dashboard host for simulations |
| `gilraitses.github.io` | Profile links to `aimez.ai/public/…` |

---

## 7. Quick answers for investors / agents

| Question | Answer |
|----------|--------|
| Does the public site show original camera frames? | Composites with real frames in `cv_model_outputs_park_vs_madison.png`; not full raw archive. |
| Is IST 675 appendix in git? | No. Sync from laptop or use public `representation-pipeline.html` + `figure-walkthrough.html`. |
| Can cloud agent run routing without AWS data sync? | Yes, if `pax` is cloned; graph + stress JSON are in repo. |
| What blocks figure-perfect API parity? | Missing `artifacts/canonical/*.json` on laptop only. |
