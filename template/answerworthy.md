---
answerworthy: "1.0"
subject: "<Business name>"
website: https://<your-domain>/
market: "<any market> · <any language>"
audited: <YYYY-MM-DD>
refresh_days: 30
---

<!-- Where this business stands on the eight conditions of being recommendable by AI,
     and what to do next. Standard: https://github.com/answerworthy/answerworthy.md
     Working document — it records gaps and unsupported claims. Treat it as internal.
     Agent: record what you saw, fix what you're allowed to, invent nothing. -->

## Outcomes

<!-- 3–6 falsifiable outcomes in buyer language. This is the agent's goal. No vanity metrics. -->

- When <buyer situation, in the buyer's own words>, <subject> is a candidate an assistant can defensibly recommend, with inspectable evidence for every claim it would repeat.
- <outcome 2>
- <outcome 3>

## Scope

- who this is for: <the buyer, and the situation they're in before they know your name>
- their pre-brand question: <what they ask an assistant when they don't know you exist>
- alternatives they compare: <a few real ones, or "none recorded">
- not for: <segments, markets or needs you deliberately don't serve>
- out of scope here: <other markets/languages — one file each>, customer-private data

## Rules

1. Claims are objects under evaluation — a claim appears here only with an evidence state. Writing it down makes nothing true.
2. No evidence, no evaluated claim — cite what was observed, name what's needed, or both.
3. Unreached is not zero — blocked, absent or failed observation is recorded as such, never as failure.
4. No fabrication, no strengthening — invent nothing; never restate unsupported as established; inferred questions never count as demand.
5. Earned means earned — no fake or incentivised reviews, no astroturfing, no self-review posing as independence, no bot-wall bypass; links are outcomes of relevance, never quotas.
6. Two things always need a human — any claim about the business, and anything a third party would receive. Draft both; assert or send neither.
7. Numbers carry their coverage — any figure states how much it actually saw; never one blended headline number.

## State

<!-- One entry per thing you checked.
     condition: reachable | identified | understood | answering | evidenced | corroborated | distributed | observed
     state: verified | unsupported | contradicted | missing | unreached | stale | incomplete -->

### <What you checked>
condition: <condition>
state: <state>
claim: "<exact public wording, if a claim is under evaluation>"
evidence:
  - <what you actually saw — URL or source, and the date>
needed:
  - <what would move this toward verified>

## Actions

<!-- Ordered: do the top one first. Conditions gate each other — reachable before distributed.
     needs: agent | human   (human for any claim, and anything a third party receives) -->

### <What to do>
serves: <condition>
state: <ready | blocked | waiting on someone else | done>
needs: <agent | human>
why: <what it changes for the buyer>
done_when:
  - <something a stranger could check>
verify:
  - <how to re-check it later>

## Maintenance

- re-check when: the site or market changes materially, or `refresh_days` elapse
- re-verify done actions before trusting them again
- keep superseded versions; never silently rewrite history
