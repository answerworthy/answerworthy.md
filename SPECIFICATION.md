# The Answerworthy Standard

**Current specification:** answerworthy 0.2  
**Canonical location:** https://answerworthy.md/standard  
**Public source:** https://github.com/kosmopteros/answerworthy.md  
**Specification license:** CC BY 4.0  
**Tooling license:** Apache-2.0  
**Initial steward:** Alexander Pichugin

## 0. Category definition

Answerworthy is the new standard for how businesses become understandable, verifiable and recommendable by AI.

A business is **answerworthy** when its identity, offer, facts, answers, evidence, limitations and freshness are publicly accessible, machine-readable and independently checkable.

The category ladder is:

1. SEO makes you findable.
2. GEO makes you citable.
3. Answerworthiness makes you choosable.

Answerworthiness is the condition that technical SEO, content, structured data, GEO, public evidence, PR, reputation, authority, marketing and distribution should collectively produce.

## 1. The one canonical file

The standard defines one published file:

```text
/answerworthy.md
```

answerworthy.md is the canonical AI-native public representation of Answerworthiness for one subject.

answerworthy.md is the canonical file. Any JSON, HTML, PDF, dashboard or score that an implementation emits is a projection of it and cannot outrank it.

A pointer at `/.well-known/answerworthy.md` is permitted while a registered well-known URI does not exist. The pointer names the root file as canonical and carries no independent substance.

The file uses UTF-8 Markdown with YAML frontmatter. Frontmatter and fixed level-two sections provide machine-readable structure. The prose remains useful without specialised tooling.

## 2. Scope

The standard governs:

- the category definition of Answerworthiness;
- the canonical answerworthy.md file;
- the public file grammar;
- six bounded evidence dimensions;
- cumulative conformance states;
- exact evidence and finding states;
- four implementation acts;
- independent corroboration recorded inside the file;
- interoperability, governance and open implementation.

The standard does not define:

- a universal 0 to 100 Answerworthy score;
- a universal ranking formula;
- one mandatory crawler, provider, model or commercial product;
- a guarantee of ranking, citation, recommendation, traffic, leads or revenue;
- autonomous permission to publish, purchase, contact third parties or modify production systems;
- search-engine, IETF, IANA or W3C endorsement.

## 3. Axioms

1. **One canonical file.** The file concentrates identity, facts, answers, evidence limits and freshness at one public path.
2. **Declaration is not verification.** Publishing the file proves control of the origin. Truth, independence and citation eligibility require separate evidence.
3. **No evidence, no evaluated claim.** Every evaluated finding references retained evidence. Missing evidence remains unavailable or incomplete.
4. **Unknown is not failure.** Blocked access, provider failure and parser failure never become fabricated absence or a negative grade.
5. **Side effects denied by default.** The file grants no credentials, publication authority, outreach permission or third-party consent.
6. **No guaranteed outcome.** Conformance does not guarantee ranking, citation, recommendation, traffic, leads or revenue.
7. **Open implementation.** Anyone may generate, validate, audit, corroborate, remediate or refresh answerworthy.md.

## 4. File grammar

A conforming file has YAML frontmatter and Markdown sections keyed on fixed level-two headings.

### Required frontmatter

- `answerworthy`: grammar compatibility token;
- `entity`: canonical subject name;
- `canonical`: canonical subject URL;
- `last_verified`: ISO date.

### Recommended frontmatter

- `kind`;
- `aliases`;
- `sameas`;
- `maintainer`;
- `license`;
- `freshness_days`;
- `conformance`;
- independent attestation fields when M3 or M4 is claimed.

### Required sections

- `## Identity`;
- `## Answers`.

### Recommended sections

- `## Offer and audience`;
- `## Canonical facts`;
- `## Entities`;
- `## Provenance`;
- `## Known corrections`;
- `## Evidence limitations`;
- `## Freshness policy`;
- `## Dimensions`;
- `## Conformance`.

A canonical fact carries `statement`, `basis`, `source_class`, `source` and `verified_at`.

An answer uses a question-form level-three heading, a self-contained response and a `source` line.

Evidence limitations state what the subject cannot currently support, what was unavailable and which markets, dates, products, sources or questions remain outside scope.

## 5. Six dimensions

Answerworthiness is evaluated against the file and the live public surface. Every finding maps to one dimension or a namespaced extension.

1. **access-retrieval:** can relevant systems retrieve and render the public evidence?
2. **entity-certainty:** can the subject be identified without material ambiguity or contradiction?
3. **offer-comprehension:** can a qualified buyer or agent understand what is offered, for whom and under which conditions?
4. **evidence-corroboration:** can consequential claims be supported, attributed and independently checked?
5. **buyer-question-coverage:** does the public evidence answer priority pre-brand questions, comparisons and constraints?
6. **answer-performance:** what was actually mentioned, cited, recommended or followed through in declared answer-system observations?

Mention, citation, recommendation and follow-through remain separate outcomes.

The standard defines no universal weighting or total score. Implementations preserve each finding's evidence, boundary, state and verification method.

## 6. Conformance states

A subject claims the highest cumulative state it fully meets. M0 through M2 may be self-declared. M3 requires an independent party.

- **M0 Present:** a valid answerworthy.md exists at the canonical path and parses.
- **M1 Structured:** required frontmatter and sections are present and well formed.
- **M2 Sourced:** material facts carry basis, source class, source and verification date.
- **M3 Corroborated:** an independent party re-fetched the site and attested that the file's material claims hold, including contradictions and unavailable evidence.
- **M4 Maintained:** the file remains within its freshness policy and receives dated rechecks.

### M3 attestation

The attestation is recorded inside answerworthy.md. A conforming M3 claim includes one of these patterns:

- signed attestation fields inside the file;
- an attestation URL plus a SHA-256 hash;
- a verifier identifier, method, date and retained evidence reference.

The attestation does not become a separate standard artifact. A subject cannot issue M3 about itself.

## 7. Evidence and finding states

A finding uses one of these public states:

- **verified:** retained evidence supports the bounded claim or condition;
- **unsupported:** the claim exists while the required supporting evidence is absent or insufficient;
- **contradicted:** retained public evidence conflicts with the declared claim;
- **unavailable:** evidence could not be obtained and no negative conclusion is inferred;
- **stale:** the claim or evidence is outside its declared freshness policy;
- **incomplete:** part of the condition is established and explicit requirements remain missing.

Internal confidence and coverage calculations may guide an implementation. They do not become a universal Answerworthy grade.

## 8. Implementation acts

Implementations operate on the canonical file and live site through four acts.

- **generate:** draft answerworthy.md from a public site and mark unsupported facts for confirmation;
- **audit:** evaluate the file and site across six dimensions while preserving contradictions and unavailable evidence;
- **remediate:** apply changes within granted permission and separate credentials, then update the canonical file;
- **refresh:** re-fetch, recheck, update `last_verified` and record material changes without rewriting history.

A validator may implement only structural and sourcing checks. A generator, auditor, corroborator, remediation agent or maintenance service may implement a different subset. Every implementation declares its capabilities honestly.

Working evidence and remediation may live in a session, repository or private client delivery. The public standard defines one canonical file.

## 9. Implementation priorities

The standard defines the condition. Implementations decide how to achieve and strengthen it.

The Answerworthy reference implementation uses five action horizons:

1. **Fix now:** remove critical retrieval, identity, contradiction and buyer-comprehension blockers.
2. **Build next:** create canonical pages, proof assets, comparisons, original research and missing evidence surfaces.
3. **Earn externally:** secure independent corroboration through reviews, directories, publishers, partners, communities and PR.
4. **Test afterward:** re-fetch the public surface and observe mention, citation, recommendation and follow-through separately.
5. **Maintain continuously:** refresh facts, corrections, evidence, relationships and answerworthy.md as the business changes.

These horizons are implementation vocabulary. They do not introduce a second public artifact.

## 10. Verification and commercial implementations

Verification is an act. An independent implementation re-fetches the site, checks material claims against retained evidence and records the attestation inside answerworthy.md.

The Answerworthy Engine is the initial reference implementation. It can generate, validate, audit, corroborate, remediate and refresh the file.

A commercial implementation may coordinate technical SEO, GEO, site architecture, claims, evidence, original research, reviews, directories, PR, authority, partnerships, marketing, distribution, dependencies, permissions, completion tests and rechecks.

The standard is free. Implementation work may be commercial.

## 11. Interoperability

answerworthy.md sits beside the existing web stack.

- HTML remains the primary human-facing surface.
- Schema.org provides structured assertions inside pages.
- `robots.txt` governs crawler access.
- sitemaps support URL discovery.
- `llms.txt` may point systems towards useful resources.
- answerworthy.md provides the canonical evidence-aware account of the business itself.

Where structured data and answerworthy.md assert the same material fact, they should agree.

## 12. Open source, governance and licensing

The public source repository is:

https://github.com/kosmopteros/answerworthy.md

Anyone may fork the standard, open an issue or propose a pull request.

Alexander Pichugin is the initial steward. Broader governance is intended after independent implementations and recurring external contributions exist.

Specification prose: CC BY 4.0. Tooling: Apache-2.0.

Open licensing grants implementation and quotation rights. It does not grant certification, endorsement or impersonation rights.
