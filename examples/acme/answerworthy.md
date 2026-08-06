---
answerworthy: "1.0"
subject: "Acme Analytics GmbH"
website: https://acme.example/
market: "Germany · de-DE"
audited: 2026-08-06
refresh_days: 30
---

## Outcomes

- When a small regulated team asks an assistant "which analytics option works for us without a compliance headache?", Acme is a candidate it can defensibly recommend, with inspectable evidence for every claim it would repeat.
- Acme's onboarding-time claim is either publicly supported by a dated methodology or taken off the site.
- At least two independent sources — a review platform, editorial or institutional — corroborate what Acme says about itself.

## Scope

- who this is for: a small regulated team choosing analytics tooling with no dedicated compliance staff
- their pre-brand question: "which analytics tool can a small regulated team run without a compliance specialist?"
- alternatives they compare: BigDash, MetricsCo
- not for: enterprises with in-house compliance teams
- out of scope here: US market, customer-private data

## Rules

1. Claims are objects under evaluation — a claim appears here only with an evidence state. Writing it down makes nothing true.
2. No evidence, no evaluated claim — cite what was observed, name what's needed, or both.
3. Unreached is not zero — blocked, absent or failed observation is recorded as such, never as failure.
4. No fabrication, no strengthening — invent nothing; never restate unsupported as established; inferred questions never count as demand.
5. Earned means earned — no fake or incentivised reviews, no astroturfing, no self-review posing as independence, no bot-wall bypass; links are outcomes of relevance, never quotas.
6. Two things always need a human — any claim about the business, and anything a third party would receive. Draft both; assert or send neither.
7. Numbers carry their coverage — any figure states how much it actually saw; never one blended headline number.

## State

### AI crawler access at the CDN
condition: reachable
state: contradicted
evidence:
  - robots.txt allows OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot
  - the CDN "block AI bots" rule returns 403 to Claude-SearchBot and PerplexityBot — tested 2026-08-06
needed:
  - the CDN rule to match the stated robots policy

### Raw-HTML readability of commercial pages
condition: reachable
state: verified
evidence:
  - product and pricing pages return full content in raw HTML with JavaScript disabled — 2026-08-06

### Company name across public profiles
condition: identified
state: unreached
evidence:
  - two of five known profiles checked; the rest sit behind logins this agent has no access to
needed:
  - the remaining profiles checked by someone who can sign in

### The regulated small-team question
condition: answering
state: missing
provenance: inferred from the buyer situation — not observed demand
needed:
  - a page in de-DE answering the pre-brand question, with fit boundaries and limits

### Homepage onboarding claim
condition: evidenced
state: unsupported
claim: "Reduces onboarding time by 40%"
evidence:
  - claim visible at https://acme.example/product — retrieved 2026-08-06
needed:
  - reproducible methodology with dated sample and limitations
  - independent corroboration

### Independent review presence
condition: corroborated
state: missing
evidence:
  - no Acme listing on either review platform German buyers use for this category — checked 2026-08-06
needed:
  - a claimed, accurate profile and a genuine, uncompensated review process

### What assistants say today
condition: observed
state: incomplete
evidence:
  - the pre-brand question asked once, on one provider, 2026-08-05 — outcome `mentioned`, not recommended
needed:
  - the same question across providers and repeated runs before this counts as a position, not an anecdote

## Actions

### Align the CDN bot rules with the stated robots policy
serves: reachable
state: done
needs: agent
why: the site says assistants may read it while the CDN refuses them — nothing below this matters until it's true
done_when:
  - all five named agents receive 200 on the homepage and commercial pages
verify:
  - refetch with each user agent; confirm no challenge or 403
done_on: 2026-08-06

### Write the regulated small-team answer page
serves: answering
state: ready
needs: agent
why: the buyer's pre-brand question has nowhere to land
done_when:
  - the page answers the question in de-DE with explicit fit boundaries and limits
  - the answer still makes sense quoted on its own, away from the page
  - it's linked internally and in the sitemap
verify:
  - refetch as raw HTML; ask the pre-brand question again across providers

### Publish the onboarding-time methodology
serves: evidenced
state: ready
needs: human
why: the 40% claim is a primary buying reason; unsupported, it's a liability the moment an assistant repeats it
done_when:
  - a public methodology page with sample, method and limitations
  - the site's claim wording matches the evidence
verify:
  - refetch the page; compare the public claim against the retained study
note: the agent may build the page and draft the wording — Acme decides whether the claim is true enough to publish

### Establish genuine review presence
serves: corroborated
state: waiting on someone else
needs: human
why: assistants cross-check what a business says about itself; nothing independent exists yet
done_when:
  - an accurate profile live on at least one platform German buyers use
  - first uncompensated reviews present, with the process documented
verify:
  - refetch the profile; confirm no incentive is attached to leaving a review

### Finish the assistant probes
serves: observed
state: ready
needs: agent
why: one answer on one day is an anecdote; the Outcomes need a real baseline
done_when:
  - the buyer questions asked across providers, repeated, each run dated with provider and locale
verify:
  - re-run after the answering and evidenced work ships; compare

## Maintenance

- re-check when: the site or the German market changes materially, or 30 days elapse
- re-verify done actions before trusting them again — the CDN rule especially, it can be reverted by any infra change
- keep superseded versions; never silently rewrite history
