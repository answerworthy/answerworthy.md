# answerworthy.md file grammar

**Compatibility:** answerworthy 0.2  
**Canonical specification:** https://answerworthy.md/standard  
**Public source:** https://github.com/kosmopteros/answerworthy.md  
**License:** CC BY 4.0

## Purpose

answerworthy.md is the canonical AI-native public representation of Answerworthiness.

A business is answerworthy when its identity, offer, facts, answers, evidence, limitations and freshness are publicly accessible, machine-readable and independently checkable.

## Encoding and location

- UTF-8 Markdown.
- YAML frontmatter begins and ends with `---`.
- The canonical path is `/answerworthy.md` at the subject's site root.
- A derivative pointer may exist at `/.well-known/answerworthy.md` and must name the root file as canonical.

## Required frontmatter

- `answerworthy`
- `entity`
- `canonical`
- `last_verified`

## Recommended frontmatter

- `kind`
- `aliases`
- `sameas`
- `maintainer`
- `license`
- `freshness_days`
- `conformance`
- attestation fields for M3 or M4

## Required sections

- `## Identity`
- `## Answers`

## Recommended sections

- `## Offer and audience`
- `## Canonical facts`
- `## Entities`
- `## Provenance`
- `## Known corrections`
- `## Evidence limitations`
- `## Freshness policy`
- `## Dimensions`
- `## Conformance`

## Identity

Identity provides one canonical description, category, material aliases and disambiguation from namesakes.

## Offer and audience

Offer and audience states what the business offers, who it serves, where the offer applies and which material conditions shape the choice.

## Canonical facts

Each material fact uses one list item and carries:

- `statement`
- `basis`
- `source_class`
- `source`
- `verified_at`

An owned source supports a declared fact. It does not create independent corroboration.

## Answers

Each answer uses:

1. a question-form level-three heading;
2. a self-contained answer;
3. an absolute `source` line.

Answers should address buyer problems, comparisons, constraints, proof requirements and actions in addition to brand-name questions.

## Evidence limitations

The file explicitly states material claims, markets, dates, sources and questions it cannot currently support. Unavailable evidence remains unavailable rather than becoming a negative grade.

## Dimensions

The file or its evaluation maps findings to these identifiers:

- `access-retrieval`
- `entity-certainty`
- `offer-comprehension`
- `evidence-corroboration`
- `buyer-question-coverage`
- `answer-performance`

## Finding states

Evaluations preserve these public states:

- `verified`
- `unsupported`
- `contradicted`
- `unavailable`
- `stale`
- `incomplete`

The grammar defines no universal 0 to 100 Answerworthy score.

## Conformance

- M0 Present
- M1 Structured
- M2 Sourced
- M3 Corroborated
- M4 Maintained

M0 through M2 may be self-declared. M3 requires an independent attestation recorded inside the file through signed fields or a referenced URL and SHA-256 hash.

## Open implementation

Implementations may generate, validate, audit, corroborate, remediate or refresh the file. Each implementation declares its capabilities honestly.
