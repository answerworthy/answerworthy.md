# The Answerworthy Standard

**What must be true for a business to be a defensible answer to a prospective customer's question — and how an agent can start from almost any business material.**

SEO makes you findable. GEO makes you citable. **Answerworthy makes you choosable for the right buyer, for reasons the evidence supports.**

This repository is the working draft of Answerworthy 1.0.

Canonical public gateway: [answerworthy.md](https://answerworthy.md) · Canonical source: [answerworthy/answerworthy.md](https://github.com/answerworthy/answerworthy.md).

Use it with any capable agent or practitioner to investigate, choose useful work, prepare it, carry out authorised changes, and continue from the file you keep. No paid account or private material is required to use the Standard. A hosted service's free or paid limits apply to that service, not to independent use of this Standard.

## Quick start

Paste this into any capable AI agent:

```text
Get started with https://answerworthy.md
```

That's it. If no business source is already available, the agent asks for one. A source may be a website, deck, presentation, document, PDF, product page, profile, repository, or similar.

If you already have a commercial objective or permission to change particular material, include it. Neither is a form you must fill before work can begin. See the [empty starter](./template/answerworthy.md) or a [prepared example with all its sources](./examples/acme/answerworthy.md).

## What Answerworthy means

A business is **Answerworthy within a declared scope** when its public decision corpus gives a capable answering system accessible, consistent, and verifiable grounds to decide whether the business is a defensible fit for a prospective customer's question — including clear grounds not to choose it when the fit is wrong.

The unit is contextual:

> **business × buyer-question family × market × language × constraints × time**

The **public decision corpus** is all public information from which a system can identify, understand, compare, and justify a decision about the business: owned pages and data, public profiles and documentation, marketplaces, reviews, publications, case studies, directories, and other relevant external sources.

A private deck, document, or conversation can inform the work. It does not become public evidence merely because an agent has read it.

The corpus is **sufficient within scope** when no material decision fact or established buyer-question family remains absent, vague, contradictory, unsupported, or stripped of its context. A fact or question is material when it could change fit, comparative choice, terms, risk, or the buyer's next action.

An exact query is a test or language sample. A **question family** is the coverage unit: several phrasings may express the same underlying buying decision. The Standard does not require one page per query.

## From business objective to useful work

A commercial objective gives the work direction: for example, more suitable enquiries for an existing service. Record a supplied objective in Scope; if none is supplied, derive a provisional direction from the available business material and label it `inferred`. Do not present an inferred direction as the owner's commitment.

Translate that direction into buyer Outcomes: what a prospective customer or answering system should be able to discover, understand, trust, choose, or rule out. Then select work with a reasoned relationship to those Outcomes. State why the work deserves effort for this business, where it will be used, and what buyer response would indicate whether it helped.

Useful work can build on an existing strength, adapt a useful asset, or reach another relevant buyer situation even when the inspected conditions are adequate. A recommendation does not need a fabricated defect or a measured effect before it can be proposed. Its factual premises need sources; its expected contribution remains a reasoned judgment until observed. Do not add work merely because an imperfection is detectable.

Keep four things distinct: what the sources establish, what is recommended or prepared, what actually changed in public, and what commercial response was observed. A finished draft is useful completed preparation. It is not a published change, an achieved buyer Outcome, or evidence of more sales.

## Full and bounded use

All eight conditions apply to a full assessment within the declared buyer situations, markets, languages, and time. Record `coverage: full` in Scope only when all eight have been attempted and represented in State. Full coverage describes the inspection, not success: findings may remain missing, unsupported, or unreached.

A bounded task may inspect a subset, such as `coverage: [understood, answering, evidenced]`. Unlisted conditions are `uncovered`: outside this inspection, with no verdict implied. A selected check that cannot be performed is `unreached`, with the access or observation limit recorded. Partial use is useful in its own right; keep its limits visible when handing off or describing the result.

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
standard: "https://raw.githubusercontent.com/answerworthy/answerworthy.md/main/README.md"
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
8. **Define one to four falsifiable Outcomes** from the best-supported Scope and commercial objective where available. Include correct fit and material non-fit; Outcomes are buyer decisions, not rankings, scores, or content tasks.
9. **Inspect the relevant public decision corpus** against the eight conditions. Anything not reached remains `unreached`; anything outside a declared bounded task remains `uncovered`.
10. **Work backwards from the Outcomes.** Investigate relevant opportunities and useful existing material as well as gaps. If the missing thing is business reality, a decision, or evidence, make that the Action before publication. Do not turn every gap into copy or website work.
11. **Select and prepare material Actions.** Explain the relationship to an Outcome and expected commercial contribution. Use available sources to do the research, comparison, drafting, or other preparation that can be completed within the task; a generic instruction to commission the same work again is not prepared work. Keep the business file concise and link usable supporting artifacts.
12. **Act only within permission.** Human approval is required before publishing a new or materially changed consequential claim or sending/submitting anything directly to a third party. Existing approval applies within its stated scope; drafting and investigation can proceed while a later publication step awaits approval.
13. **Verify what was completed.** Check prepared work against its sources; re-fetch actual public changes and re-observe affected Outcomes when relevant and available. Update State and Actions, name the next operation and any genuine dependency, and stop when the bounded task is complete or no material ready Action remains within permission. A complete brief piece of work and an empty missing-input list are valid results.

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

Record the buyer situations, question families, market, language, alternatives, criteria, constraints, non-fit, and bounded coverage. Include the commercial objective when available and the permission for the current task. Keep provenance visible for every material premise.

### Outcomes

Use stable IDs such as `O1`. An Outcome describes a buyer decision that should become defensible:

> **O1 —** When a small regulated team compares analytics tools, an answering system can correctly determine whether Acme is a defensible fit over the relevant alternatives and support every consequential stated reason from the public corpus.

Include a non-fit Outcome when recommending the business outside its real fit would be materially wrong.

### State

Use stable IDs such as `S1`. Each material finding records one condition and one state:

`verified` · `unsupported` · `contradicted` · `missing` · `unreached` · `stale` · `incomplete`

- **`verified`** — current inspectable evidence supports the stated finding within its recorded boundary; this is not a verdict on the whole business.
- **`unsupported`** — a consequential claim is present, but inspected evidence does not establish it. Lack of support does not prove it false.
- **`contradicted`** — inspected sources materially conflict with the claim or each other. Record both sides and what remains unresolved.
- **`missing`** — a needed decision fact, answer, or evidence was not found within an inspected boundary. Say where you looked; do not claim absence from sources you could not inspect.
- **`unreached`** — a selected source or check could not be accessed or performed. Record the limit, not a guessed business finding.
- **`stale`** — previously usable evidence is no longer current enough for the conclusion; identify what requires a refresh.
- **`incomplete`** — an inspected finding covers only part of the required question or evidence. Name the supported part and remainder; record inaccessible checks as `unreached` rather than hiding them in this label.

`uncovered` describes coverage, not an adverse State finding. For example, a supplier's unavailable study is `unreached`; it does not establish that the supplier has no study. If a claim is visible but its support cannot be inspected, the claim may separately remain `unsupported` on the evidence available to this assessment.

```markdown
### S1 — Homepage onboarding claim (illustrative)

condition: evidenced
state: unsupported
claim: "Reduces onboarding time by 40%"
evidence:
  - claim visible at https://acme.example/product — inspected 2026-08-14
needed:
  - evidence appropriate to this timing claim: baseline, method, scope, date, limits, and exceptions
```

`verified` requires current evidence another person could inspect. For Observed findings, retain the test conditions and stated reasons, or link to a supporting observation log.

State records findings, including adequate existing material worth reusing. Keep proposals and prepared artifacts in Actions; do not change public State merely because an agent drafted an improvement.

### Actions

Use stable IDs such as `A1`.

An Action is a bounded piece of work that materially advances a buyer Outcome, removes a dependency, or verifies the result. It may investigate an opportunity, reuse an existing asset, clarify business facts, generate evidence, change a product or service, prepare material, publish, earn independent corroboration, distribute, improve access, or verify. Do not choose a writing task when the underlying fact or evidence does not yet exist.

Order Actions by their expected contribution, prerequisites, and effort. `advances:` names Outcome IDs; `serves:` names relevant conditions within the declared coverage. An Action may extend useful coverage without repairing a failed condition. Explain that opportunity in `why:`. If the selected work requires another condition to be inspected, update Scope and inspect it rather than implying it has been assessed.

Each active Action must make the next operation clear, name its actor and unmet prerequisites, define a checkable completion boundary, and explain verification. Link prepared material and its source basis so another agent can continue without reconstructing the work. A short Action can be complete when these are clear; extra fields, long briefs, or missing inputs are not required for their own sake.

```markdown
### A1 — Obtain the missing timing study (illustrative)

advances: [O1]
serves: [evidenced]
state: waiting-human
needs: [human]
why: the claim can change the buying decision and is currently unsupported
next: the owner supplies the study behind the 40% figure, or confirms that none exists
depends_on: [owner response]
done_when:
  - the study is available for inspection, or its absence is confirmed
verify:
  - inspect any supplied study for baseline, method, scope, date, and limits
  - select the next Action to retain, narrow, or remove the public claim based on that inspection
```

Action states:

`ready` · `blocked` · `waiting-human` · `waiting-third-party` · `done`

`needs:` may include `agent`, `human`, or `third-party`, for the next operation. State follows that operation, not everyone who might eventually participate:

- **`ready`** — the next operation can proceed with available inputs and permission. Agent preparation is ready even if later publication needs a human.
- **`blocked`** — an unmet prerequisite prevents that operation; name the dependency and what would resolve it.
- **`waiting-human`** — the immediate next operation is a specific human decision, approval, or contribution that remains outstanding.
- **`waiting-third-party`** — the immediate next operation belongs to an external party and the required request or submission has actually been made. Preparation for a future submission is not waiting on that party.
- **`done`** — the Action's stated completion boundary has been met and checked. Preparation may be done while publication is pending as a separate Action.

Split preparation, approval, publication, and observation when their completion or dependencies differ. A dependency or `needed:` list may be empty. Do not invent a request to keep work open, and do not treat publication approval as missing business evidence.

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

## Continuing the work

Hand off the business file together with the referenced sources and prepared artifacts, using links the next practitioner can access. State what was completed, the next operation, who can perform it, and any unmet prerequisite. If material must remain private, preserve that boundary and identify the access needed to continue; do not imply a recipient already has it.

Anyone may apply the Standard without a particular vendor, tool, paid service, or standing review group. Conforming work preserves the six-section file, provenance, declared coverage, evidence-grounded State, Outcome-linked Actions, permission boundaries, and honest verification. Preparation can be independently useful; a published change still requires its own verification, and a commercial result requires its own observation.

## License

Standard text: CC BY 4.0. Starter and example: CC0 1.0.

Created and stewarded by Alexander Pichugin. Changes by pull request.
