---
answerworthy: "1.0-draft"
standard: "https://raw.githubusercontent.com/answerworthy/answerworthy.md/main/README.md"
subject: "Acme Cycle Workshop"
updated: 2026-09-13
---

## Sources

- [Business fixture](./business-fixture.md) — public example material. F1–F3 represent Acme's existing public homepage, service page, and booking page; F4 is its supplied owner brief. All are fictional, written for this example and inspected as local text on 2026-09-13. These are not fetched pages or evidence of a real business, buyer demand, assistant answers, or sales.
- [Prepared commuter repair guide](./commuter-repair-guide.md) — public example artifact, proposed business material. Its source map and placement are included. It has not been published to an Acme business website.

## Scope

- objective: increase suitable bookings for the £60 commuter service using the existing offer and material, without advertising spend — supplied, F4.
- market and language: Manchester, UK; en-GB — supplied, F4.
- buyers: local people who commute on conventional bicycles and can leave a bicycle for a weekday appointment — supplied, F2 and F4. The size and demand of this segment have not been researched.
- alternatives: make the simple pre-booking checks in F3, book Acme's commuter service, or arrange a separate repair assessment; motor or battery faults require an e-bike specialist — supplied, F2–F3. No named competitors have been investigated.
- constraints and non-fit: £60 covers labour for the listed service, parts cost extra with prior approval, no motor or battery repairs, and no promise of completion on the day — supplied, F2–F3.
- coverage: [understood, answering, evidenced]. Inspection is of the included fixture only. Reachable, identified, corroborated, distributed, and observed are uncovered; no live access or market tests were attempted.
- permission: research the supplied material and prepare a guide and proposed placement. The owner controls website publication and must approve the prepared guide and placement first — supplied, F4.

### QF1 — Which appointment suits my commuter bicycle?

- decision: distinguish a routine service from a specific repair assessment or an e-bike specialist appointment — supplied, F2–F4.
- example question: “My commuter bike has noisy gears. Should I book a service or a repair?” — inferred wording, not an observed search or customer quotation.
- material criteria: work included, labour price and parts approval, symptoms to describe, transport and timing constraints, and repair exclusions — supplied, F2–F3.
- opportunity: adapt the existing answers into a short guide organised around that decision and link it near the service booking action — inferred recommendation. The current service page already gives the relevant facts. The expected benefit is easier appointment selection at the point of booking; that effect has not been measured.

## Outcomes

- **O1 — QF1:** A Manchester commuter or answering system can determine when Acme's £60 service is an appropriate appointment, distinguish it from a separate repair assessment, and support the recommendation with the listed work, parts terms, and timing limits.
- **O2 — QF1:** A buyer with a motor or battery fault, or a need for guaranteed same-day completion, can identify that Acme's commuter service does not meet that requirement.

## State

### S1 — Service fit and limits are already explicit

condition: understood
state: verified
evidence:
  - F2 names the commuter service, included work, labour price, approval for extra parts, and e-bike exclusions; F3 states the timing limit and separate assessment route.
  - verified against the included fictional source text on 2026-09-13; no live business site was assessed.
needed: []

### S2 — Existing service and booking material answers QF1

condition: answering
state: verified
evidence:
  - F2 distinguishes routine adjustment from persistent faults and damage; F3 explains what to check, what to describe, and how to choose an appointment.
  - the proposed guide reuses these answers in a single decision sequence; it does not establish that current buyers fail to find them.
needed: []

### S3 — Offer statements have an inspectable source basis

condition: evidenced
state: verified
evidence:
  - F2–F3 are the fixture's own published service terms, adequate here for the limited claims about what the business offers and charges.
  - no claim of faster repairs, better performance, independent endorsement, or improved conversion is made. Such claims would need different evidence.
needed: []

## Actions

### A1 — Prepare the commuter appointment guide from existing answers

advances: [O1, O2]
serves: [understood, answering, evidenced]
state: done
needs: []
why: the owner wants more suitable commuter-service bookings. A short decision guide can help visitors choose an appointment using Acme's existing strengths and terms; it is a bounded opportunity to support that objective, not a correction to a failed condition.
prepared: [commuter-repair-guide.md](./commuter-repair-guide.md)
done_when:
  - the guide provides usable decision copy, a booking action, proposed placement, and a source map without requiring another writer to produce it.
verify:
  - checked every offer statement against F2–F3; the £60 labour boundary, extra-parts approval, separate assessment, timing, and e-bike exclusions are preserved.
  - checked that the guide supports both O1 and O2 and leaves F1's concise headline intact.
result: preparation complete; no public business change or commercial result observed.
missing_inputs: []

### A2 — Owner reviews the guide and its booking-page placement

advances: [O1, O2]
serves: [understood, answering, evidenced]
state: waiting-human
needs: [human]
why: the guide and placement are ready; the owner reserved publication approval in F4.
next: the owner approves the exact guide text and proposed service-page link in the prepared artifact, or identifies a specific change.
depends_on: [owner publication approval]
missing_inputs: []
done_when:
  - the owner's decision on the guide and placement is recorded.
verify:
  - compare the approved text with the prepared version and re-check any changed offer statements against F2–F3.
continuation: after approval, record a separate publication Action for the owner who controls the site, with the guide and link as its deliverables. Verify the actual page and booking route after publication before updating public State. If live retrieval cannot be performed, record it as unreached. Evaluate any booking response separately from the publication check.

## Maintenance

- Re-read the current Standard when work resumes, then read the fixture and prepared guide linked above. All materials needed for this example travel in this directory.
- The one outstanding dependency is the owner's publication decision; no missing business fact prevents review of the prepared work.
- Re-check the guide if the price, included work, booking options, repair exclusions, or timing terms change. Reuse its source map when updating it.
- If the owner publishes, agree how to review subsequent commuter-service bookings and appointment corrections using available booking records. No measurement has been run and no increase is promised; counts alone would not establish that the guide caused a change.
