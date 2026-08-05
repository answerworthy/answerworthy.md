# Answerworthy Standard governance

**Canonical specification:** https://answerworthy.md/standard  
**Public source:** https://github.com/kosmopteros/answerworthy.md  
**Initial steward:** Alexander Pichugin

## Objectives

Governance keeps the category definition, canonical file, grammar, validator and public terminology coherent, evidence-disciplined, implementation-neutral and useful to people and agents.

## Public contribution path

Material changes are discussed and implemented through this repository.

Contributors may:

- open an issue;
- propose an example;
- report an interoperability problem;
- submit a validator fixture;
- propose a grammar change;
- submit a pull request;
- challenge a category or evidence definition with implementation evidence.

## Initial stewardship

Alexander Pichugin is the initial standard steward.

The steward reviews proposals, maintains canonical terms, publishes compatibility changes, protects evidence boundaries, separates reference-implementation behaviour from normative requirements and maintains the open validator.

A technical steering group becomes appropriate when independent implementations and recurring external contributions exist.

## Answerworthy proposals

A material change records:

- problem statement;
- normative change;
- grammar and validator impact;
- security and privacy impact;
- migration path;
- alternatives considered;
- implementation evidence;
- requested compatibility treatment.

Public proposal states are proposal, review, accepted, rejected, implemented and superseded.

## Acceptance criteria

A normative proposal should demonstrate at least one of these conditions:

- repeated use in an implementation;
- independent consumption;
- an interoperability failure;
- a safety, privacy or evidence-integrity need;
- a correction required to preserve the category definition.

Marketing convenience and feature-count growth do not satisfy the acceptance criteria.

## Compatibility

The public brand remains the Answerworthy Standard.

Files declare the grammar compatibility token they target. Clarifications preserve meaning. Compatible changes add optional capability. Semantic breaks require an explicit migration and a new compatibility token.

Git history and releases preserve the technical timeline. The canonical website presents the current specification.

## Reference implementation

The Answerworthy Engine is the initial reference implementation. Engine behaviour becomes normative only through a public specification change.

Other implementations are invited. They may implement generation, validation, audit, corroboration, remediation, refresh or any honest subset.

## Registry fairness

A listed implementation must:

- accurately declare its capabilities;
- resolve its claimed output to a live answerworthy.md file;
- preserve the canonical file and evidence boundaries;
- avoid claiming independent corroboration without an inspectable attestation.

A corroboration-verified listing additionally requires an attestation URL and SHA-256 hash that can be checked publicly.

The same capability and verification rules apply to every submission, including the reference implementation.

## Universal score policy

The standard defines conformance and exact evidence states. It defines no universal 0 to 100 Answerworthy score.

Implementations may calculate internal confidence, coverage or prioritisation weights. They must not present those calculations as the definition of Answerworthiness.

## Licensing

Specification prose: CC BY 4.0. Tooling: Apache-2.0.

These licenses permit implementation, quotation, modification and redistribution under their terms. They grant no certification, endorsement or impersonation rights.
