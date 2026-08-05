# answerworthy.md

> **The open AI-native standard for making a business understandable, verifiable and recommendable by AI.**

**Status:** Founding working draft  
**First canonical publication:** 5 August 2026  
**Creator and initial steward:** Alexander Pichugin  
**Canonical domain:** [answerworthy.md](https://answerworthy.md)

## The category

SEO makes pages findable.  
GEO makes content citable.  
**Answerworthiness makes a business choosable.**

A business is **answerworthy** when its identity, offer, facts, answers, evidence, limitations and freshness are publicly accessible, machine-readable and independently checkable.

`answerworthy.md` is the canonical AI-native file that carries those facts and evidence.

AI systems increasingly mediate discovery, comparison and recommendation. Existing disciplines solve parts of this problem: technical SEO supports retrieval, structured data identifies entities, content answers questions, and public evidence creates corroboration. GEO, AEO and related practices improve how this material appears in generated answers.

They do not provide one portable public contract for what a business claims, how consequential claims are supported, where the limits are, and when the information was last checked.

**`answerworthy.md` is that contract.**

## One file

The standard defines one canonical file:

```text
/answerworthy.md
```

The file is UTF-8 Markdown with machine-readable frontmatter and human-readable sections. It is designed to carry:

- canonical identity and aliases;
- the offer, audience and material conditions;
- sourced facts and verification dates;
- self-contained answers to consequential buyer questions;
- entities and provenance;
- known corrections and contradictions;
- coverage limits and explicit unknowns;
- freshness policy and conformance state.

Any JSON, HTML, PDF, score or report emitted by an implementation is a projection of the canonical file. When a projection and `answerworthy.md` disagree, the file wins.

## First principles

1. **One canonical file.** One public place concentrates identity, facts, answers, evidence, limits and freshness.
2. **Declaration is not verification.** Publishing a file proves control of an origin. It does not make every statement true or independently corroborated.
3. **No evidence, no evaluated claim.** Material findings should resolve to inspectable evidence or remain explicitly unavailable.
4. **Unknown is not zero.** Blocked access, absent evidence and failed observation must not become fabricated certainty.
5. **No guaranteed outcome.** Conformance cannot promise ranking, citation, recommendation, traffic, leads or revenue.
6. **Open implementation.** Anyone may generate, audit, validate or maintain an `answerworthy.md` file. No commercial service owns implementation of the standard.

## Relationship to the existing web

`answerworthy.md` complements the web stack rather than replacing it.

- HTML remains the primary human-facing surface.
- Schema.org provides structured assertions inside pages.
- `robots.txt` governs crawler access.
- sitemaps support URL discovery.
- `llms.txt` may point systems towards useful resources.
- `answerworthy.md` provides the canonical, evidence-aware account of the business itself.

SEO, GEO, AEO, content, PR, reputation and structured data remain useful practices. **Answerworthiness is the condition they should collectively produce.**

## Day 0 contract

This founding publication deliberately fixes only four things:

1. the category definition of **answerworthiness**;
2. the canonical filename and root path, **`/answerworthy.md`**;
3. the evidence and honesty principles above;
4. the open-standard premise and initial stewardship.

The exact grammar, conformance levels, validator contract, governance process and versioning policy remain a public working draft until released here as a numbered specification.

That restraint is intentional. The category should be clear from day one; the protocol should earn stability through implementation.

## Stewardship

The `answerworthy.md` standard was created by **Alexander Pichugin**, who serves as its initial steward during the working-draft stage.

The steward's role is to maintain the canonical terminology, separate normative requirements from reference-implementation behaviour, preserve evidence discipline, publish versioned drafts and create a credible path towards broader governance as independent implementations emerge.

The word *answerworthy* may be used descriptively by anyone. Conformance, certification and claims of compatibility will require the versioned standard once published.

## What comes next

The next public draft will add:

- the normative file grammar;
- a minimal conforming example;
- cumulative conformance states;
- an open validator contract;
- licensing and trademark boundaries;
- a proposal and governance process.

Until then, this repository is the canonical founding record of the category and the standard.
