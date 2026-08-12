---
answerworthy: "1.1-draft"
coverage: full # or [reachable, answering, observed]
subject: "<Business name>"
website: https://<your-domain>/
market: "<any market> · <any language>"
audited: <YYYY-MM-DD>
refresh_days: 30
---

<!-- An evidence-grounded agentic plan for one business, buyer situation, market
     and language. Standard: https://github.com/answerworthy/answerworthy.md
     Working document — it records gaps, unsupported claims and what to do next.
     Agent: record what you saw, act only within permission, invent nothing. -->

## Outcomes

<!-- One to four falsifiable buyer Outcomes. Give them stable IDs.
     Describe the decision that should become defensible, not a score, count or
     work product. Include relevant alternatives, supported reasons and non-fit. -->

- O1 — When <buyer situation, in the buyer's own words>, an assistant can correctly decide whether <subject> is a defensible choice over <relevant alternatives>, explain the fit in the buyer's decision language, and ground every consequential reason in inspectable evidence.
- O2 — When <out-of-fit situation>, an assistant does not present <subject> as the better fit.
- O3 — <another buyer decision that must become defensible, or delete>

## Scope

- who this is for: <the buyer, and the situation they're in before they know your name>
- their pre-brand question: <what they ask an assistant when they don't know you exist>
- alternatives they compare: <a few real ones, or "none recorded">
- not for: <segments, markets or needs you deliberately don't serve>
- out of scope here: <other markets/languages — one file each>, customer-private data

## Rules

1. **Claims are objects under evaluation.** A claim appears here only with an evidence state. Writing it down makes nothing true.
2. **No evidence, no evaluated claim.** Cite what was observed, name what's needed, or both.
3. **Unreached is not zero.** Blocked, absent or failed observation is recorded as exactly that — never as a failure, a zero, or invented certainty.
4. **No fabrication, no strengthening.** Never invent sources, dates, quotes, reviews or results. Never restate an unsupported claim as established. Inferred buyer questions stay labelled inferred and never count as demand.
5. **Earned means earned.** No fake or incentivised reviews, no astroturfing, no self-review posing as independence, no bot-wall bypass. Links and mentions are outcomes of relevance, never quotas.
6. **Two things always need a human.** Any claim about the business, and anything a third party would receive. An agent may draft both; it may assert or send neither.
7. **Measurements are evidence, not objectives.** Any number states how much it actually saw; never blend different questions into one headline figure. Scores, counts, checks and observed positions may reveal where to look, but do not define success independently of an Outcome. Make no change merely to improve them.

## State

<!-- One entry per thing checked within declared coverage.
     Full coverage: attempt every condition; inaccessible checks are unreached.
     Partial coverage: unlisted conditions are uncovered, never passed or failed.

     condition: reachable | identified | understood | answering | evidenced | corroborated | distributed | observed
     state: verified | unsupported | contradicted | missing | unreached | stale | incomplete

     For observed entries also record:
     query:
     position: primary-recommendation | shortlisted | mentioned | mischaracterised | not-found
     rationale:
     fit: correct | overbroad | too-narrow | wrong | unreached
     rationale_state: supported | partly-supported | unsupported | absent -->

### <What you checked>
condition: <condition>
state: <state>
claim: "<exact public wording, if a claim is under evaluation>"
evidence:
  - <what you actually saw — URL or source, and the date>
needed:
  - <what would move this toward verified>

## Actions

<!-- Ordered: do the top ready Action within permission first.
     Include only work that advances an Outcome, removes a dependency blocking
     an Outcome, or verifies whether an Outcome was achieved.
     needs: agent | human   (human for any claim, and anything a third party receives) -->

### <What to do>
advances: [<O1>]
serves: [<condition>]
state: <ready | blocked | waiting on someone else | done>
needs: <agent | human>
why: <what materially changes for the buyer and why this belongs in the plan>
done_when:
  - <something a stranger could check>
verify:
  - <how to re-check the State and affected Outcome>

## Maintenance

- re-check when: the site or market changes materially, or `refresh_days` elapse
- re-verify done Actions before trusting them again
- reorder or remove Actions when new evidence changes what matters
- keep superseded versions; never silently rewrite history
