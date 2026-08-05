# answerworthy.md

> **Answerworthy is the new standard for how businesses become understandable, verifiable and recommendable by AI.**

**Canonical domain:** https://answerworthy.md  
**Current specification:** https://answerworthy.md/standard  
**Initial steward:** Alexander Pichugin  
**Specification prose:** CC BY 4.0  
**Tooling:** Apache-2.0

## The category

SEO makes you findable.  
GEO makes you citable.  
**Answerworthiness makes you choosable.**

A business is **answerworthy** when its identity, offer, facts, answers, evidence, limitations and freshness are publicly accessible, machine-readable and independently checkable.

Answerworthiness is the condition that technical SEO, content, structured data, GEO, public evidence, PR, reputation, authority, marketing and distribution should collectively produce.

## The canonical file

The standard defines one published file:

```text
/answerworthy.md
```

`answerworthy.md` is the canonical AI-native public representation of Answerworthiness.

It carries:

- canonical identity and aliases;
- offer, audience and material conditions;
- sourced facts and verification dates;
- self-contained buyer answers;
- entities and provenance;
- known corrections;
- evidence limitations and explicit unknowns;
- freshness policy;
- six-dimension mapping;
- honest conformance state;
- independent attestation fields when M3 or M4 is supported.

answerworthy.md is the canonical file. Any JSON, HTML, PDF, dashboard or score that an implementation emits is a projection of it and cannot outrank it.

## The open standard

This repository is the public source for:

- [`SPECIFICATION.md`](SPECIFICATION.md): the category, one-file model, dimensions, states, acts and implementation boundaries;
- [`GRAMMAR.md`](GRAMMAR.md): the machine-readable and human-readable file grammar;
- [`validator.mjs`](validator.mjs): a dependency-free validator for local files and remote URLs;
- [`examples/`](examples): minimal and sourced examples;
- [`GOVERNANCE.md`](GOVERNANCE.md): public contribution, compatibility and registry policy;
- [`CONTRIBUTING.md`](CONTRIBUTING.md): issue and pull-request workflow;
- [`LICENSE.md`](LICENSE.md): specification and tooling licenses;
- [`TRADEMARKS.md`](TRADEMARKS.md): naming and certification boundaries;
- Git history, issues and pull requests: the inspectable evolution of the standard.

The canonical rendered specification and implementation registry live at https://answerworthy.md.

## Conformance states

- **M0 Present:** a valid file exists at the canonical path and parses.
- **M1 Structured:** required frontmatter and sections are present and well formed.
- **M2 Sourced:** material facts carry basis, source class, source and verification date.
- **M3 Corroborated:** an independent party re-fetched the site and recorded an inspectable attestation inside the file.
- **M4 Maintained:** the file stays within its freshness policy and receives dated rechecks.

M0 through M2 may be self-declared. A subject cannot issue M3 about itself.

## Evidence states

The standard preserves exact conditions:

- verified;
- unsupported;
- contradicted;
- unavailable;
- stale;
- incomplete.

The standard defines no universal 0 to 100 Answerworthy score.

## Six dimensions

- `access-retrieval`
- `entity-certainty`
- `offer-comprehension`
- `evidence-corroboration`
- `buyer-question-coverage`
- `answer-performance`

Mention, citation, recommendation and follow-through remain separate outcomes.

## Four implementation acts

Implementations may perform any honest subset of:

1. **Generate:** draft the file and mark unsupported facts for confirmation.
2. **Audit:** evaluate the file and live site across six dimensions while preserving contradictions and unavailable evidence.
3. **Remediate:** apply permitted changes, then update the canonical file.
4. **Refresh:** re-fetch, recheck, update freshness and record material changes.

Validation and independent corroboration are also explicit implementation capabilities. An implementation declares what it actually does.

## Run the validator

Node 20 or newer. No dependencies.

```bash
node validator.mjs ./examples/sourced.answerworthy.md
node validator.mjs https://example.com/answerworthy.md
```

The validator reports:

- claimed and achieved conformance;
- canonical fact and answer counts;
- six-dimension coverage;
- exact errors and warnings.

It reports conditions rather than a grade.

## Build an implementation

Other implementations are invited.

An implementation may generate, validate, audit, corroborate, remediate or refresh answerworthy.md. A registry listing requires a resolvable public file and accurate capability claims. A corroboration-verified listing also requires an inspectable attestation URL and SHA-256 hash.

See the public registry at https://answerworthy.md/implementations.

## Reference implementation and commercial layer

The **Answerworthy Engine** is the initial reference implementation.

The **Answerworthy Plan** is the founder-reviewed commercial sequence for strengthening Answerworthiness across:

- technical SEO and retrieval;
- entity, category, offer and audience comprehension;
- buyer-question coverage and GEO;
- site architecture, copy, comparisons and alternatives;
- claims, evidence, original research and proof assets;
- reviews, directories and third-party corroboration;
- PR, publishers, experts, communities and authority;
- partnerships, marketing and distribution;
- dependencies, permissions, completion tests and rechecks.

The commercial sequence is organised as:

1. Fix now
2. Build next
3. Earn externally
4. Test afterward
5. Maintain continuously

The standard is free. Becoming the answer is the work.

## Stewardship

Alexander Pichugin is the initial steward.

The steward maintains the canonical terminology, reviews proposals, protects evidence boundaries, separates normative requirements from reference-implementation behaviour and creates a path towards broader governance as independent implementations emerge.

The public contribution mechanism is GitHub issues and pull requests. See [`CONTRIBUTING.md`](CONTRIBUTING.md).
