# The Answerworthy Standard

**What must be true for a business to be a defensible answer to a prospective customer's question — and how an agent can start from almost any business material.**

SEO makes you findable. GEO makes you citable. **Answerworthy makes you choosable for the right buyer, for reasons the evidence supports.**

This repository is the working draft of Answerworthy 1.0.

## Quick start

Paste this into any capable AI agent:

```text
Get started with https://answerworthy.md
```

That's it. If no business source is already available, the agent asks for one. A source may be a website, deck, presentation, document, PDF, product page, profile, repository, or similar.

## What Answerworthy means

A business is **Answerworthy within a declared scope** when its public decision corpus gives a capable answering system accessible, consistent, and verifiable grounds to decide whether the business is a defensible fit for a prospective customer's question — including clear grounds not to choose it when the fit is wrong.

The unit is contextual:

> **business × buyer-question family × market × language × constraints × time**

The **public decision corpus** is all public information from which a system can identify, understand, compare, and justify a decision about the business: owned pages and data, public profiles and documentation, marketplaces, reviews, publications, case studies, directories, and other relevant external sources.

A private deck, document, or conversation can inform the work. It does not become public evidence merely because an agent has read it.

The corpus is **sufficient within scope** when no material decision fact or established buyer-question family remains absent, vague, contradictory, unsupported, or stripped of its context. A fact or question is material when it could change fit, comparative choice, terms, risk, or the buyer's next action.

An exact query is a test or language sample. A **question family** is the coverage unit: several phrasings may express the same underlying buying decision. The Standard does not require one page per query.

## Compression and decision-grade expansion

Human-facing marketing may compress. A headline, name, or short proposition is an interface for people; it does not need to carry the whole buying case.

Every consequential meaning it compresses must resolve through the public decision corpus into decision-grade expansion: the precise offer, fit and non-fit, terms, constraints, alternatives, evidence, and limits needed for the buyer situation.

Do not make concise marketing verbose merely to satisfy the Standard. Preserve useful compression and create or connect the missing expansion. The expansion must clarify, not materially revise, the impression created by the compression.

## The business-owned file

`answerworthy.md` is the business-owned, portable answerability plan defined by this Standard.

The clean starter and a mature business guide are the same artifact at different stages. The file begins almost empty, then grows only with information about that business:

- sources;
- scope and its provenance;
- buyer Outcomes;
- observed State and evidence;
- material next Actions;
- maintenance information.

It must not grow by copying the Standard, tutorials, raw research dumps, or implementation doctrine into every business file. The `standard:` link is part of the file itself: an agent resolves and reads the current Standard before interpreting or continuing the file.

The fixed section order is:

```markdown
---
answerworthy: "1.0-draft"
standard: "https://raw.githubusercontent.com/kosmopteros/answerworthy.md/main/README.md"
---

## Sources
## Scope
## Outcomes
## State
## Actions
## Maintenance
```

Large research sets, assistant transcripts, and raw evidence may live elsewhere and be linked from the file. The file keeps the conclusion and enough provenance to continue the work.

## Runtime contract

When an agent is asked to apply this Standard, it must:

1. **Read the current Standard** before acting. If an existing `answerworthy.md` contains `standard:`, resolve that living reference.
2. **Treat `Get started with <Standard URL>` as a complete zero-input invocation.** If no business source is available, ask exactly one question in the user's language, equivalent to: “Send one useful source about the business — a website URL, an attached deck, document or PDF, a profile or repository, or a short description.” Do not require a website and do not ask the owner to fill Scope.
3. **Find and continue an existing `answerworthy.md`** when one is available. Do not reconstruct the work from zero.
4. **Otherwise create the business file** with the six sections defined above. The user does not need to download, copy, or fill the starter first. If the environment cannot persist files, return the complete `answerworthy.md` as a named Markdown artifact.
5. **Use and inspect available business material before asking anything further.** Inputs may be public or private and may include URLs, decks, presentations, documents, PDFs, profiles, product pages, repositories, descriptions, or equivalent sources.
6. **Bootstrap Scope when it is unknown.** Discover candidate buyer situations, question families, markets, languages, alternatives, decision criteria, constraints, and non-fit from the available material and relevant research.
7. **Preserve provenance.** Every material Scope premise remains labelled `supplied`, `observed`, `researched`, or `inferred`.
8. **Define one to four falsifiable Outcomes** from the best-supported Scope. Include correct fit and material non-fit; Outcomes are buyer decisions, not rankings, scores, or content tasks.
9. **Inspect the relevant public decision corpus** against the eight conditions. Anything not reached remains `unreached`; anything outside a declared bounded task remains `uncovered`.
10. **Work backwards from the Outcomes.** If the missing thing is business reality, a decision, or evidence, make that the Action before publication. Do not turn every gap into copy or website work.
11. **Update the file with business-specific State and Actions only.** Create an Action only when it advances an Outcome, removes a material blocker, or verifies the result.
12. **Act only within permission.** Stop for human approval before publishing a new or materially changed consequential claim or sending/submitting anything directly to a third party.
13. **Re-verify changed public State**, update the file, and stop when no material ready Action remains within the granted permission.

Inspect before asking. Ask the human only when an unresolved fact cannot be established from available evidence and its answer would change Scope, an Outcome, or the next material Action.

## Scope provenance

Use these provenance values for material buyer situations, question families, alternatives, criteria, constraints, and non-fit:

- **`supplied`** — stated by the business, operator, or supplied material. It may establish a business-side fact, but it does not by itself establish public visibility or market demand.
- **`observed`** — directly present in retained buyer, customer, market, or public evidence.
- **`researched`** — supported by credible external research rather than direct observation in the inspected business context.
- **`inferred`** — a working hypothesis derived from available material.

Inference is useful for deciding what to investigate next. It is not evidence of demand or fact, and repetition does not upgrade it.

Mark Sources as public or private. Private evidence may support Scope or a human decision, but it cannot satisfy a public-corpus condition until the relevant information becomes publicly inspectable.

## The eight conditions

The conditions form a dependency network, not a score and not a universal implementation order.

### 1 · Reachable

**Can the relevant systems and buyers access the decision-useful information?**

Required facts and evidence must be available through the surfaces, formats, and access conditions relevant to the declared scope. Current checks may include rendered or raw HTML, crawler access, bot protection, structured data, feeds, profiles, marketplaces, or other retrieval paths; these are implementation techniques, not universal requirements.

### 2 · Identified

**Can the business be resolved as one consistent entity?**

Names, aliases, people, products, locations, and relationships must be unambiguous and materially consistent across the corpus. Unknown is better than a silent contradiction.

### 3 · Understood

**Is the offer and comparative fit explicit?**

The corpus must state what is offered, to whom, where, on what terms, under which constraints, and where the business is a strong or weak fit against relevant alternatives. Use the buyer's decision language rather than invented-category language alone. Concise marketing may remain concise; its consequential meaning must resolve into precise public detail.

### 4 · Answering

**Does the corpus answer the material questions buyers use before they know the business's name?**

Coverage follows question families in the declared market and language, including local terminology and materially different constraints. Answers must contain decision-useful distinctions and remain intelligible when encountered away from their original page. Coverage belongs to the corpus as a whole; no single page must carry the entire explanation.

### 5 · Evidenced

**Can every consequential reason for choosing or rejecting the business be checked?**

A reason that could change the decision must resolve to evidence with the provenance, scope, freshness, method, and limitations necessary for that kind of claim. Unsupported material remains explicitly unsupported.

### 6 · Corroborated

**Which material facts survive beyond the business's own assertion?**

Independent sources must establish the facts for which self-publication is insufficient. A third-party page that merely repeats the business's wording is not independent corroboration of the underlying claim.

### 7 · Distributed

**Are the answers and evidence present where this market encounters them?**

Decision-useful information must exist on the owned and external surfaces that buyers and systems in the declared scope are reasonably likely to use. Evidence placed where nobody relevant encounters it does no work.

### 8 · Observed

**What do particular answering systems say under documented conditions?**

Record the exact buyer question, provider or model where available, mode, date, locale, relevant context, position, representation quality, buyer fit, stated reasons, and whether those reasons are supported by the inspected corpus. One run is an observation, not a stable position. A system's stated reason is not access to its hidden retrieval, ranking, training influence, or internal reasoning.

With full coverage, Observed is the integration test: does a current system choose or reject the business for the right buyer, in the right context, for reasons the public corpus can support?

## File semantics

### Sources

List the material inputs and evidence references needed to continue the work. Mark each as public or private and record the inspection date when freshness matters.

### Scope

Record the buyer situations, question families, market, language, alternatives, criteria, constraints, non-fit, and bounded coverage. Keep provenance visible for every material premise.

### Outcomes

Use stable IDs such as `O1`. An Outcome describes a buyer decision that should become defensible:

> **O1 —** When a small regulated team compares analytics tools, an answering system can correctly determine whether Acme is a defensible fit over the relevant alternatives and support every consequential stated reason from the public corpus.

Include a non-fit Outcome when recommending the business outside its real fit would be materially wrong.

### State

Use stable IDs such as `S1`. Each material finding records one condition and one state:

`verified` · `unsupported` · `contradicted` · `missing` · `unreached` · `stale` · `incomplete`

```markdown
### S1 — Homepage onboarding claim

condition: evidenced
state: unsupported
claim: "Reduces onboarding time by 40%"
evidence:
  - claim visible at https://acme.example/product — inspected 2026-08-14
needed:
  - evidence appropriate to this timing claim: baseline, method, scope, date, limits, and exceptions
```

`verified` requires current evidence another person could inspect. For Observed findings, retain the test conditions and stated reasons, or link to a supporting observation log.

### Actions

Use stable IDs such as `A1`.

An Action is the smallest material change required to make a buyer-relevant conclusion true, supportable, public, discoverable, or correctly observable. It may require business clarification, evidence generation, product or service work, publication, independent corroboration, distribution, technical access, or verification. Do not choose a writing task when the underlying fact or evidence does not yet exist.

```markdown
### A1 — Resolve the onboarding-time claim

advances: [O1]
serves: [evidenced]
state: waiting-human
needs: [human]
why: the claim can change the buying decision and is currently unsupported
done_when:
  - the claim is removed, or public evidence supports wording no stronger than the evidence
verify:
  - refetch the claim and evidence
  - repeat the affected buyer question and inspect the stated reasons
```

Action states:

`ready` · `blocked` · `waiting-human` · `waiting-third-party` · `done`

`needs:` may include `agent`, `human`, or `third-party`.

### Maintenance

Re-read the current Standard whenever work resumes. Re-check when the offer, corpus, market, or evidence changes materially; re-verify completed Actions before relying on them again; preserve superseded history when useful; and remove stale instructions that no longer describe the business.

## Rules

1. **Scope premises retain provenance.** Unknown is valid. `inferred` may guide discovery but never silently becomes observed demand or established fact.
2. **Compression must resolve into explanation.** Preserve useful human-facing compression. Every consequential meaning it carries must unfold into public decision-grade detail, and the expansion must not materially revise the impression created by the compression.
3. **Claims remain under evaluation.** Writing a claim in the file or corpus makes nothing true. Consequential claims require evidence appropriate to their kind.
4. **No fabrication or strengthening.** Never invent sources, dates, quotes, reviews, results, demand, or certainty. `unreached` is not failure, zero, or permission to guess.
5. **Independence must be real.** No fake or incentivised reviews, astroturfing, self-review posing as independence, or access-control bypass. External repetition is not automatically corroboration.
6. **Measurements are evidence, not objectives.** Counts, scores, positions, and checks may show where to investigate. No change is made merely to improve them.
7. **Observation is not hidden causality.** Record what a system said and the conditions under which it said it. Do not claim access to hidden model processes without direct evidence.
8. **Questions must earn interruption.** Ask the human only to resolve a material uncertainty that cannot be established otherwise and that changes Scope, an Outcome, or the next Action.
9. **Human authority remains where consequences leave the system.** A human approves new or materially changed consequential claims and direct third-party messages, submissions, outreach, reviews, PR, or partnership communication.

## License

Standard text: CC BY 4.0. Starter and example: CC0 1.0.

Created and stewarded by Alexander Pichugin. Changes by pull request.
