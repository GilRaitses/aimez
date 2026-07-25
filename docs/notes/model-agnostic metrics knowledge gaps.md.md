# Model-Agnostic Metrics: Knowledge Gaps

## Immediate Applications

The paper introduces practical, model-agnostic metrics (sequence compression and sequence distinction) and test procedures to evaluate whether a generative model has a coherent "world model" of a domain representable as a deterministic finite automaton (DFA). Below are immediate, deployable use cases across sectors that leverage these metrics, the provided benchmark and software, and the detour-fragility methodology.

### Software, ML, and Product Engineering

**World-model audit in model evaluation pipelines**

Use the compression/distinction metrics as a pre-deployment gate for models used in structured domains (e.g., planners, protocol handlers, UI flow agents).

- *Potential tools/products/workflows:* CI/CD "world-model check" suite; model cards including boundary precision/recall; test harnesses that generate Myhill–Nerode boundary cases.
- *Assumptions/dependencies:* Access to a rule engine/simulator or DFA for the target domain; model APIs exposing token probabilities or controllable sampling thresholds; computational budget for boundary estimation.

**Interpretability and debugging via model-implied graph reconstruction**

Apply the reconstruction method to visualize implicit graphs learned by models (as in Manhattan maps) to spot inconsistent structure (e.g., impossible edges, cycles, or missing transitions).

- *Potential tools/products/workflows:* "World-model viewer" for engineering and safety teams; diffing reconstructed graphs across versions to detect regression.
- *Assumptions/dependencies:* Known vertex set or canonical state abstraction; constraints that bound reconstruction combinatorics; sufficient sampling coverage of generated sequences.

**Robustness testing through detour-stress tests**

Adopt the detour-fragility test (random and adversarial "detours") for any model controlling sequential decisions under constraints, catching failure modes masked by high next-token validity.

- *Potential tools/products/workflows:* Red-team robustness scripts for planning agents; test coverage targets that include boundary-reaching perturbations.
- *Assumptions/dependencies:* Ability to enforce valid perturbations; a simulator that guarantees a reachable goal remains; reproducible decoding.

**Data augmentation for better world-model fidelity**

Incorporate diverse traversal data (e.g., random walks rather than only shortest paths) to improve the distinction metric and downstream robustness.

- *Potential tools/products/workflows:* Training data generators that emphasize diverse, boundary-probing trajectories; curriculum schedules mixing shortest paths and random walks.
- *Assumptions/dependencies:* Access to domain graph/simulator; careful balancing to avoid degrading other performance metrics.

**Safer agentic workflows**

Gate agent actions in structured workflows (RPA, API orchestration, LLM agents) with boundary-aware validators to prevent incoherent transitions.

- *Potential tools/products/workflows:* DFA-based guards or "coherence filters" in agent frameworks; fallback planning policies when boundary inconsistencies are detected.
- *Assumptions/dependencies:* DFA or approximate automaton for the workflow; acceptance thresholds tuned to model API precision.

### Mapping, Logistics, and Navigation

**Pre-deployment evaluation of routing models**

Evaluate learned route planners with compression/distinction metrics to identify incoherence that standard next-token and probing tests miss.

- *Potential tools/products/workflows:* Navigation QA suite that includes detour robustness and boundary recall/precision; procurement criteria for third-party routing models.
- *Assumptions/dependencies:* Access to the real road network as a DFA-like graph; APIs that output token probabilities for turns/directions.

**Route reliability under disruptions**

Incorporate detour-stress testing for fleet, delivery, and mobility platforms to ensure plans remain valid under closures or dynamic constraints.

- *Potential tools/products/workflows:* "Detour resilience" score in SLAs; continuous monitoring on live telemetry to detect rising boundary errors.
- *Assumptions/dependencies:* Accurate, up-to-date maps; mechanism to simulate or ingest real-time detours; safety oversight.

### Games and Interactive Systems

**Game AI evaluation beyond next-move validity**

Use sequence compression to ensure distinct openings that converge to the same board position are treated equivalently; use distinction to detect fused states.

- *Potential tools/products/workflows:* Tournament eligibility checks for AI; model selection favoring coherent world models for coaching/analysis tools.
- *Assumptions/dependencies:* Enumerated game DFAs or high-fidelity simulators; compute sufficient to sample boundaries.

### Education and Assessment

**Logic tutoring and curriculum design**

Diagnose where LLMs violate compression (treating equivalent partial information as different) to design targeted exercises; use distinction failures to craft "teachable moments."

- *Potential tools/products/workflows:* EdTech analytics dashboards flagging student/LLM inconsistencies relative to the DFA; auto-generated practice problems that hit boundary cases.
- *Assumptions/dependencies:* Formalized puzzle domains as DFAs; controlled prompting to elicit step-by-step reasoning; evaluation harness integrated with LLM APIs.

### Healthcare and Life Sciences

**Sanity checks for sequence-based scientific modeling**

Audit LLMs used in chemistry/protein/DNA tasks where protocols or reaction grammars can be DFA-approximated, ensuring models respect process constraints.

- *Potential tools/products/workflows:* "Protocol coherence" checks in automated lab planning; boundary-aware proposal filters for reaction steps.
- *Assumptions/dependencies:* High-quality, domain-specific DFAs or grammars; domain simulators to compute acceptance sets; human oversight in safety-critical contexts.

### Finance, Compliance, and Enterprise Workflows

**Policy/compliance rule adherence**

Validate that LLM-driven workflows obey procedural constraints (KYC/AML checks, approval gates) by auditing compression/distinction on the organization's process DFA.

- *Potential tools/products/workflows:* Compliance audit trail including boundary metrics; automated pre-execution checks for agent actions in ERP/CRM.
- *Assumptions/dependencies:* Accurate formalization of policies as state machines; governance for updates when policies change.

### Policy and Governance

**Risk management and procurement standards**

Include world-model coherence metrics in AI assurance frameworks for safety-critical or high-stakes domains.

- *Potential tools/products/workflows:* NIST/ISO-aligned guidance recommending boundary-based evaluations; disclosure of detour robustness in safety cases.
- *Assumptions/dependencies:* Sector-specific DFAs/simulators; standardized reporting formats; independent evaluation capacity.

---

## Long-Term Applications

Extending the paper's DFA-based framework, metrics, and insights to broader, more stochastic, and partially observed settings could enable certification, training innovations, and safer deployments across many industries.

### Cross-Cutting ML Advancements

**Certification of learned world models beyond DFAs**

Generalize compression/distinction metrics to stochastic automata, POMDPs, and hybrid systems; develop formal "world-model coherence" certifications.

- *Potential tools/products/workflows:* Third-party certification services; formal verification toolchains integrating boundary metrics with model checking.
- *Assumptions/dependencies:* Theoretical extensions to non-deterministic/stochastic settings; scalable algorithms for boundary estimation; standardized test corpora.

**Training objectives aligned with world-model recovery**

Create loss functions or regularizers that directly optimize sequence compression and distinction, reducing reliance on proxy next-token performance.

- *Potential tools/products/workflows:* World-model-aware pretraining; curriculum learning that schedules interior vs. boundary exposures; architecture modules that enforce state consistency.
- *Assumptions/dependencies:* Differentiable surrogates for boundary metrics; stable optimization; evaluation frameworks to prevent mode collapse.

**World-model distillation to interpretable automata**

Extract compact automata that approximate a model's behavior for safety, interpretability, and governance.

- *Potential tools/products/workflows:* "Automaton distillers" producing human-auditable controllers; change detection via automaton diffs between model versions.
- *Assumptions/dependencies:* Reliable black-box-to-automata extraction; guarantees on fidelity and error bounds; handling of very large state spaces.

### Robotics, Autonomy, and CPS

**Safety cases for autonomous systems**

Use generalized world-model metrics for certifying planners in autonomous vehicles, drones, and industrial robots operating under dynamic constraints.

- *Potential tools/products/workflows:* Regulatory submissions including boundary robustness; runtime monitors that halt plans when compression fails.
- *Assumptions/dependencies:* High-fidelity simulators/digital twins; real-time estimation of world-model coherence; integration with existing safety standards (e.g., ISO 26262).

**Robust re-planning under uncertainty**

Build agents that detect when they are near a boundary and proactively seek information or switch to conservative policies.

- *Potential tools/products/workflows:* Boundary-aware exploration strategies; uncertainty-aware controllers that degrade gracefully during detours/disruptions.
- *Assumptions/dependencies:* Calibrated uncertainty estimates; sensor fusion; compute for online evaluation.

### Mapping, Supply Chain, and Energy

**Dynamic network operations under disruptions**

Apply detour-robustness concepts to power grid reconfiguration, supply chain routing, and telecom network recovery after failures.

- *Potential tools/products/workflows:* Control room dashboards showing "coherence margins"; simulators that generate adversarial boundary scenarios for drills.
- *Assumptions/dependencies:* Accurate digital twins; regulatory permissions to test; cross-system integration.

### Healthcare and Science

**Protocol-true lab automation and clinical decision support**

Ensure agentic systems strictly adhere to experimental/clinical pathway constraints, with boundary-aware alerts when proposed steps violate protocol logic.

- *Potential tools/products/workflows:* Protocol validators embedded in lab robots; CDSS modules that flag logic inconsistencies in recommendations.
- *Assumptions/dependencies:* Machine-readable protocols; validated simulators; rigorous clinical oversight and audit trails.

**Scientific discovery with grounded world models**

Build LLM-driven discovery pipelines that can prove adherence to mechanistic constraints (e.g., reaction pathways) using coherence metrics.

- *Potential tools/products/workflows:* Discovery platforms that reject incoherent hypotheses; factorized models that separately learn structure and dynamics.
- *Assumptions/dependencies:* High-quality symbolic knowledge bases; multi-modal integration (text + structured data).

### Education and Assessment

**Formal methods–based tutoring at scale**

Tutors that diagnose reasoning errors as compression/distinction failures, offering targeted feedback on equivalence and discriminative evidence.

- *Potential tools/products/workflows:* Adaptive assessment engines that generate minimal distinguishing counterexamples for students.
- *Assumptions/dependencies:* Rich, domain-formalized curricula; measurement models linking DFA metrics to learning outcomes.

### Finance and Governance

**Process integrity in autonomous enterprise agents**

Certify that autonomous financial or operations agents comply with internal control "worlds," even under rare sequences of events (boundary regions).

- *Potential tools/products/workflows:* Real-time control monitors; internal audit tools that reconstruct agent-implied process automata.
- *Assumptions/dependencies:* Formalized internal control DFAs; privacy-preserving evaluation; model governance maturity.

**Regulatory frameworks for "world-model audits"**

Mandate coherence reporting for AI systems in high-stakes use, akin to stress tests in banking.

- *Potential tools/products/workflows:* Sector-specific audit protocols; public incident reporting tied to boundary failures.
- *Assumptions/dependencies:* Consensus standards; auditor expertise; incentives/compliance mechanisms.

---

## Global Assumptions and Dependencies

- **DFA suitability:** The immediate metrics assume the domain can be approximated as a DFA or that a rule-based simulator exists; long-term work extends beyond DFAs.
- **Access to ground truth oracles:** Computing boundaries requires membership tests (accept/reject) from a DFA/simulator; where unavailable, proxy or learned oracles are needed.
- **API capabilities:** Many applications need token-level probabilities or logprobs to define acceptance at a threshold ε; some providers limit access.
- **Computational cost:** Boundary estimation and reconstruction can be expensive for large state spaces; sampling and approximation strategies are necessary.
- **Data coverage:** Accurate assessment relies on sampling sequences that reach boundary regions; biased datasets (e.g., only optimal paths) can hide failures.
- **Safety and oversight:** In safety-critical contexts, human-in-the-loop review and regulatory alignment remain essential despite improved metrics.

These applications leverage the paper's central insight: next-token validity and simple probes can dramatically overstate a model's grasp of underlying structure. Compression and distinction metrics, reconstruction, and detour-stress testing provide actionable ways to close this gap across research and deployment.

---

## Knowledge Gaps and Open Questions

1. **Assumption of DFA world models:** The framework only handles deterministic finite automata; it does not cover stochastic, nondeterministic, partially observable, or continuous-state environments (e.g., POMDPs, MDPs, hybrid symbolic–numeric systems).

2. **Ground-truth access requirement:** The metrics rely on query access to the true automaton (states and transition validity). Many real domains lack a known or tractable world model. How to evaluate without ground-truth DFA access?

3. **Automaton discovery:** The paper does not provide methods to infer or learn the underlying DFA (or a minimal DFA) from sequences. How can one jointly learn or approximate state partitions and transitions?

4. **Computational scalability:** Exact computation or approximation of Myhill–Nerode boundaries and interiors may be intractable for large alphabets or state spaces. What are efficient algorithms, sampling strategies, or bounds for scalable evaluation?

5. **Sample complexity:** The paper does not quantify how many sequences, state pairs, and boundary samples are needed to estimate precision/recall within desired confidence intervals; no finite-sample guarantees are provided.

6. **Sensitivity to acceptance threshold ε:** The evaluation depends on a probability threshold defining "accepted" continuations. How should ε be selected or calibrated across models and decoding settings, and what is the sensitivity of conclusions to ε?

7. **Decoding dependence:** Results primarily use greedy decoding. How do compression/distinction scores change under different decoding policies (temperature, top-k, nucleus sampling, beam search)?

8. **Approximate next-token correctness:** While exact next-token prediction implies recovery, the paper does not provide theoretical bounds relating near-perfect next-token accuracy to language-level recovery (e.g., via distances between accepted languages).

9. **Boundary length and interior size characterization:** The framework highlights boundary/interior but does not provide metrics for boundary-length distributions or interior size profiles across domains, which could diagnose where next-token testing is fragile.

10. **Metric validity for continuous outputs:** The proposed metrics assume discrete token alphabets. How can the approach be generalized to free-form natural language generations or continuous actions?

11. **Evaluation without minimal DFA:** The theory references minimal DFAs, but practical world models may not be minimal. How do metrics behave when the underlying DFA is non-minimal or when the minimal automaton is unknown?

12. **Precision for LLM distinction:** For logic puzzles, distinction precision was not computed due to cost. What scalable approximations enable precision estimation for LLMs while preserving reliability?

13. **Training interventions:** The paper proposes evaluation metrics but does not explore training methods to improve compression/distinction (e.g., structural regularizers, contrastive losses, automaton-aware objectives, curriculum design).

14. **Relating data diversity to recovery:** Random-walk training improved distinction/compression compared to shortest-path training, but the causal mechanisms are not analyzed. What properties of data distributions most promote world-model recovery?

15. **Robustness to distribution shift:** The evaluation avoids overlapping origin–destination pairs across splits, but does not examine out-of-distribution states, unseen intersections, or topology changes (e.g., new roads, closures).

16. **Map reconstruction assumptions:** The reconstruction fixes the vertex set to the true intersections and constrains degree/orientation. How would reconstruction perform when the node set is unknown, with noisy GPS paths, or in cities with irregular street layouts?

17. **Reconstruction fidelity metrics:** Visual inspection reveals incoherence, but there is no formal quantitative measure of reconstructed graph quality (e.g., edge-orientation error, planarity violations, flyover counts, path stretch).

18. **Real-world trajectory realism:** Taxi routes are approximated via shortest/noisy-shortest paths or random walks—not actual driven trajectories. How do results change with real turn-level traces (including traffic, turn restrictions, and driver behavior)?

19. **Detour design and guarantees:** The detour procedure ensures a valid path exists but details are limited; the impact of different detour policies, frequencies, and adversarial perturbations on performance is not characterized theoretically.

20. **Linking metrics to downstream failure:** While detour robustness correlates with distinction/compression, the paper does not propose formal predictive models linking metric scores to task performance under perturbations.

21. **State probe limitations:** Probes recover current state in many cases despite incoherent world models. What are the conditions under which probing overestimates world-model fidelity, and can probe-based methods be refined to detect incoherence?

22. **Generalization to other domains:** Extensions to protein design, chemistry, and genomics are suggested but not demonstrated. How to adapt metrics when tokens/states are domain-specific and rules are partially known or probabilistic?

23. **Handling nondeterminism and noise:** Many domains have nondeterministic transitions or noisy observations. How can Myhill–Nerode-inspired evaluations be adapted to stochastic languages and probabilistic automata?

24. **Error localization:** The metrics provide aggregate scores but do not localize where compression/distinction errors occur (e.g., specific neighborhoods, board regions, or logical constraints). Can one develop tools to diagnose and correct specific error modes?

25. **Interpretability and mechanism:** The paper does not connect compression/distinction failures to internal model mechanisms (e.g., attention patterns, representation geometry). Can mechanistic interpretability reveal why states fail to compress or distinguish?

26. **Scaling laws:** Only two transformer sizes were trained from scratch on navigation. Do larger models, longer training, or pretraining on diverse corpora improve world-model recovery predictably, and what are the scaling laws for compression/distinction?

27. **Formal guarantees for evaluation procedures:** Beyond definitions, the paper lacks formal guarantees (e.g., consistency of boundary estimators, robustness to model miscalibration). Can we provide theoretical properties for the proposed metrics?

---

## Glossary

| Term | Definition |
|------|------------|
| **Adversarial detours** | A stress-test setup where each chosen action is replaced by the model's worst valid alternative to force difficult re-routing. |
| **Boundary precision** | The fraction of model-identified minimal distinguishing suffixes that truly distinguish two states in the ground-truth DFA. |
| **Boundary recall** | The fraction of ground-truth minimal distinguishing suffixes that the model correctly identifies as distinguishing. |
| **Chain-of-thought reasoning** | A prompting technique that elicits intermediate reasoning steps from an LLM before the final answer. |
| **Current-state probe** | A diagnostic that trains a simple classifier on internal representations to recover the current underlying state. |
| **Deterministic finite automaton (DFA)** | A finite-state machine with deterministic transitions that recognizes a regular language. |
| **End-of-sequence token** | A special marker that denotes the termination of a generated sequence. |
| **Extended transition function** | The function that applies the DFA's single-step transition repeatedly over a sequence to yield a resulting state. |
| **Generative model** | A model that defines a probability distribution over the next token conditioned on the observed prefix. |
| **Graph reconstruction** | Inferring an underlying graph (e.g., a map) from sequences generated by a model. |
| **Greedy decoding** | A decoding strategy that selects the highest-probability next token at each step without lookahead. |
| **Linear probe** | A linear classifier/regressor trained on model representations to assess whether specific information is linearly decodable. |
| **Model-agnostic** | An evaluation approach that uses only input-output behavior, not internals of the model. |
| **Myhill-Nerode boundary** | The set of shortest distinguishing suffixes that are accepted from one state but not another. |
| **Myhill-Nerode interior** | The set of suffixes that are accepted from both of two states and hence do not distinguish them. |
| **Myhill-Nerode theorem** | A foundational result characterizing regular languages via distinguishability of states by suffixes. |
| **Next-token prediction** | The core language modeling task of predicting the next symbol given a prefix. |
| **Next-token test** | An evaluation that checks whether the model's top-1 next token is legal/valid under the true world model. |
| **Random walks** | Traversals where each next step is sampled randomly rather than chosen to optimize a path. |
| **Sequence compression** | The requirement that different prefixes leading to the same state admit the same set of continuations. |
| **Sequence distinction** | The requirement that prefixes leading to different states have distinguishable sets of continuations. |
| **Transformer** | An attention-based neural architecture for sequence modeling and generation. |
| **World model** | An internal representation of the environment's latent states and transition dynamics that supports generalization across tasks. |
