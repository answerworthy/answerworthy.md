---
answerworthy: "1.1-draft"
coverage: full
subject: "Acme Analytics GmbH"
website: https://acme.example/
market: "Germany · de-DE"
audited: 2026-08-08
refresh_days: 30
---

## Outcomes

- O1 — When a small regulated German team asks "which analytics option works for us without a compliance headache?", an assistant can correctly decide whether Acme is a defensible choice over BigDash and MetricsCo, explain the fit in the buyer's decision language, and ground every consequential reason in inspectable evidence.
- O2 — When a buyer needs enterprise-scale governance or in-house compliance controls that Acme does not provide, an assistant does not present Acme as the better fit.
- O3 — When an assistant mentions Acme's onboarding-time advantage, it states the supported scope and limitations of the evidence rather than repeating "40%" as a universal fact.

## Scope

- who this is for: a small regulated team choosing analytics tooling with no dedicated compliance staff
- their pre-brand question: "which analytics tool can a small regulated team run without a compliance specialist?"
- alternatives they compare: BigDash, MetricsCo
- not for: enterprises with in-house compliance teams or requirements Acme cannot support
- out of scope here: US market, customer-private data

## Rules

1. **Claims are objects under evaluation.** A claim appears here only with an evidence state. Writing it down makes nothing true.
2. **No evidence, no evaluated claim.** Cite what was observed, name what's needed, or both.
3. **Unreached is not zero.** Blocked, absent or failed observation is recorded as exactly that — never as a failure, a zero, or invented certainty.
4. **No fabrication, no strengthening.** Never invent sources, dates, quotes, reviews or results. Never restate an unsupported claim as established. Inferred buyer questions stay labelled inferred and never count as demand.
5. **Earned means earned.** No fake or incentivised reviews, no astroturfing, no self-review posing as independence, no bot-wall bypass. Links and mentions are outcomes of relevance, never quotas.
6. **Two things always need a human.** Any claim about the business, and anything a third party would receive. An agent may draft both; it may assert or send neither.
7. **Measurements are evidence, not objectives.** Any number states how much it actually saw; never blend different questions into one headline figure. Scores, counts, checks and observed positions may reveal where to look, but do not define success independently of an Outcome. Make no change merely to improve them.

## State

### AI crawler access at the CDN
condition: reachable
state: verified
evidence:
  - robots.txt allows OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot
  - after the rule change, all five named agents receive 200 on the homepage and commercial pages without a challenge — verified 2026-08-08

### Raw-HTML readability of commercial pages
condition: reachable
state: verified
evidence:
  - product and pricing pages return full content in raw HTML with JavaScript disabled — 2026-08-08

### Company name across public profiles
condition: identified
state: unreached
evidence:
  - two of five known profiles checked; the rest sit behind logins this agent has no access to
needed:
  - the remaining profiles checked by someone who can sign in

### Comparative fit for regulated small teams
condition: understood
state: incomplete
evidence:
  - the site says "compliance without complexity" but does not state which workflows, controls, team sizes or trade-offs make Acme a stronger fit than BigDash or MetricsCo — checked 2026-08-08
  - no public source states where Acme is the weaker choice
needed:
  - the real decision-relevant differences against BigDash and MetricsCo, validated by Acme
  - explicit fit boundaries and evidence for every consequential distinction

### The regulated small-team question
condition: answering
state: missing
provenance: inferred from the buyer situation — not observed demand
evidence:
  - no de-DE page directly answers the pre-brand question or compares fit against plausible alternatives — checked 2026-08-08
needed:
  - an answer in the buyer's language using validated fit distinctions, boundaries and limits

### Homepage onboarding claim
condition: evidenced
state: unsupported
claim: "Reduces onboarding time by 40%"
evidence:
  - claim visible at https://acme.example/product — retrieved 2026-08-08
needed:
  - reproducible methodology with dated sample and limitations
  - public wording no stronger than the retained evidence

### Independent review presence
condition: corroborated
state: missing
evidence:
  - no Acme listing on either review platform German buyers use for this category — checked 2026-08-08
needed:
  - an accurate claimed profile and a genuine, uncompensated review process

### Decision-relevant evidence across the market
condition: distributed
state: incomplete
evidence:
  - two partner pages name Acme but repeat only generic product copy; neither carries evidence about small-team fit or onboarding — checked 2026-08-08
needed:
  - validated decision-relevant evidence present on surfaces German buyers and assistants actually encounter

### What assistants say today
condition: observed
state: incomplete
query: "Which analytics tool can a small regulated German team run without a compliance specialist?"
position: mentioned
rationale: "Acme may suit smaller teams because it is simpler to deploy."
fit: unreached
rationale_state: unsupported
evidence:
  - one provider, de-DE locale, one run on 2026-08-08; Acme was mentioned after BigDash and MetricsCo
  - neither "simpler to deploy" nor the comparative fit was supported by a cited public source
needed:
  - the same buyer and non-fit questions across providers and repeated runs
  - comparison of each rationale against the inspected evidence before treating the result as a position

## Actions

### Align the CDN bot rules with the stated robots policy
advances: [O1, O2, O3]
serves: [reachable]
state: done
needs: agent
why: assistants cannot inspect the facts needed for any Outcome while the CDN refuses them
done_when:
  - all five named agents receive 200 on the homepage and commercial pages
verify:
  - refetch with each user agent; confirm no challenge or 403
done_on: 2026-08-08

### Validate Acme's regulated-small-team fit
advances: [O1, O2]
serves: [understood, evidenced]
state: ready
needs: human
why: no defensible recommendation rationale exists until Acme validates which real differences matter against BigDash and MetricsCo, and where those differences stop applying
done_when:
  - decision-relevant differences, trade-offs and exclusions are documented against both alternatives
  - each consequential distinction has evidence or is explicitly marked unsupported
  - Acme approves the facts and boundaries; the agent drafts but asserts nothing
verify:
  - compare every proposed fit statement against the retained evidence
  - test whether the same facts support choosing Acme for O1 and not choosing it for O2

### Write the regulated-small-team answer page
advances: [O1, O2]
serves: [understood, answering, evidenced]
state: blocked
needs: agent
why: the buyer's pre-brand question has nowhere to land, but writing it before the fit distinctions are validated would only make unsupported positioning more legible
done_when:
  - the page answers the question in de-DE using approved distinctions, trade-offs and limits
  - the answer still makes sense quoted on its own, away from the page
  - it explains when BigDash or MetricsCo is the better fit
  - it is present in raw HTML and linked from relevant commercial pages
verify:
  - refetch as raw HTML
  - ask the O1 and O2 questions across providers; inspect position, fit, rationale and rationale_state

### Resolve the onboarding-time claim
advances: [O3]
serves: [evidenced]
state: ready
needs: human
why: "40%" is a consequential buying reason; unsupported, it is a liability when an assistant repeats it
done_when:
  - Acme either publishes a methodology with sample, method, scope and limitations, or removes the claim
  - any public wording matches the evidence exactly
verify:
  - refetch the page and methodology
  - repeat the affected buyer question; confirm the rationale is supported or the claim is absent
note: the agent may build the page and draft the wording — Acme decides whether the claim is true enough to publish

### Establish genuine review presence
advances: [O1]
serves: [corroborated, distributed]
state: waiting on someone else
needs: human
why: the small-team fit currently exists only as self-description; assistants have no independent reason to trust it
done_when:
  - an accurate profile is live on a platform German buyers actually use
  - eligible customers can review Acme without incentive, scripting or pressure
  - at least one resulting review or other independent source corroborates a decision-relevant fact
  - resulting reviews remain independently hosted and unedited
verify:
  - refetch the profile and review process
  - confirm that no benefit is attached to leaving or changing a review

### Finish the assistant baseline
advances: [O1, O2, O3]
serves: [observed]
state: ready
needs: agent
why: one answer on one day cannot show whether assistants choose the right business for the right buyer or for supported reasons
done_when:
  - the buyer and non-fit questions are asked across declared providers and repeated runs
  - every run records provider, locale, date, position, rationale, fit and rationale_state
verify:
  - rerun after the answering and evidence work ships
  - compare whether the Outcomes moved for the intended reasons, not merely whether Acme moved up

## Maintenance

- re-check when: the site or the German market changes materially, or 30 days elapse
- re-verify done Actions before trusting them again — the CDN rule especially, because any infrastructure change can revert it
- reorder or remove Actions when new evidence changes what materially blocks an Outcome
- keep superseded versions; never silently rewrite history
