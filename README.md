# The Answerworthy Standard

**What to do to be understood, trusted and recommended by AI — and how to put an agent to work on it.**

SEO makes you findable. GEO makes you citable. **Answerworthy is the work that makes you choosable.**

Eight conditions decide whether an answering system can recommend a business. This standard names them, tells you how to check each one honestly, and defines `answerworthy.md` — the file where your agent records where you stand and what to do next.

Canonical: [answerworthy.md](https://answerworthy.md) · Source: [github.com/answerworthy/answerworthy.md](https://github.com/answerworthy/answerworthy.md)

---

## Why

AI visibility should be a capability you own, not a subscription you rent. The work that makes a business recommendable — real buyer questions, public evidence, independent corroboration, distribution — used to need five specialists. Agents make it reachable for small teams. This standard makes it portable: your questions, findings, decisions and history live in one file you keep.

It does not tell AI what to believe about you. It tells your agent how to build the public reasons that make trust defensible.

Any business, any language, any geography.

## Start

Paste this into Claude Code, Cursor, Codex, ChatGPT, or any capable agent. Fill the three lines at the top.

```
Read the Answerworthy Standard:
https://raw.githubusercontent.com/answerworthy/answerworthy.md/main/README.md

My business: <name> · <website> · <priority market and language>
My buyers: <who they are, and the situation they're in before they know my name>
What you may change: <nothing yet, propose only | the site files I've given you | my CMS>

Then:

1. INSPECT the eight conditions against my actual public presence: the site as
   raw HTML, whether AI crawlers really get in, what independent sources say
   about me, and what assistants say right now when asked my buyers' questions.
   Anything you cannot reach, record as unreached — never guess it.
2. WRITE answerworthy.md: where I stand on each of the eight conditions, with
   the evidence you actually saw, and the ordered work to close the gaps.
3. FIX only what I authorised above. One change at a time. Tell me what you
   changed and why, in plain language.
4. STOP at two lines: any claim about my business, and anything a third party
   would receive. Draft them for me; never assert or send them yourself.
5. RE-VERIFY by refetching what you changed, then update the file.

No score. Show me what changed and what is left.
```

Keep `answerworthy.md` wherever your working files live — a repo, a shared drive, a docs folder. If you have version control, use it. Every future session starts by reading it.

## The eight conditions

In order. Each one gates the ones below it: there is no point earning press if an assistant cannot read your site.

**1 · Reachable** — *Can an answering system actually fetch and read you?*
Content present in raw HTML without JavaScript. AI crawlers genuinely allowed — check the CDN and bot-protection rules, not just `robots.txt`. Indexable, reasonably fast, accessible. Most failures here are invisible from the browser and silent.

**2 · Identified** — *Does it know who you are, without contradiction?*
One clear entity: name, aliases, people, products, relationships. The same facts on your site and on every profile that mentions you. Contradictions across sources are worse than silence.

**3 · Understood** — *Does it know what you sell, to whom, and on what terms?*
Audience, problem, offer, commercial shape, price posture, what you are *not* for. Stated in the buyer's words, not in invented-category language.

**4 · Answering** — *Do you answer the questions buyers ask before they know your name?*
The fuzzy, pre-brand questions: "which option works for a small regulated team?" — not "is Acme any good?". Each commercial page should own a real question family. Answers must be self-contained enough to survive being quoted out of context.

**5 · Evidenced** — *Can your consequential claims be checked?*
Every claim that would move a decision needs a method, a dated sample, its scope and its limits, at a source someone can open. A claim without evidence is a liability the moment an assistant repeats it.

**6 · Corroborated** — *Does anyone independent back you up?*
Reviews on platforms your buyers use, directories, marketplaces, institutional and expert references. This is the part you cannot self-publish, which is exactly why it carries weight.

**7 · Distributed** — *Is the evidence where buyers and systems encounter it?*
Publishers, editorial, communities, partners, associations, the surfaces of your market. Evidence nobody meets does no work.

**8 · Observed** — *What do assistants actually say right now?*
Ask your buyers' real questions and record what comes back, dated, with provider and locale: `primary-recommendation` · `shortlisted` · `mentioned` · `mischaracterised` · `not-found`. One answer on one day is an anecdote, not a position.

A tool that checks conditions 1 and 8 is doing useful work on two of eight. The chain is the point.

## The file

Six sections, fixed order. It is a working document — it records your gaps, your unsupported claims and your competitors, so treat it like any internal file.

```markdown
---
answerworthy: "1.0"
subject: "Acme GmbH"
website: https://acme.example/
market: "Germany · de-DE"
audited: 2026-08-06
refresh_days: 30
---

## Outcomes     ← what buyers must be able to conclude. The agent's goal.
## Scope        ← who you're for, which alternatives, honest exclusions.
## Rules        ← the honesty core. Copy verbatim.
## State        ← where you stand on the eight conditions, with evidence.
## Actions      ← the ordered work to close the gaps.
## Maintenance  ← how this stays true.
```

**Outcomes** lead, in buyer language and falsifiable: *"When a small regulated team asks an assistant which option works for them, Acme is a candidate it can defensibly recommend, with inspectable evidence for every claim it would repeat."* Not "rank #1", not "score 90".

**State** records one entry per condition you checked:

```
### Homepage onboarding claim
condition: evidenced
state: unsupported
claim: "Reduces onboarding time by 40%"
evidence:
  - claim visible at https://acme.example/product — retrieved 2026-08-06
needed:
  - reproducible methodology with dated sample and limitations
  - independent corroboration
```

Conditions: `reachable` · `identified` · `understood` · `answering` · `evidenced` · `corroborated` · `distributed` · `observed`.

States: `verified` · `unsupported` · `contradicted` · `missing` · `unreached` · `stale` · `incomplete`. `verified` needs current evidence someone else could open. `unreached` is what you write when you could not check — never a zero, never a guess.

**Actions** say what to do, what done looks like, and how to re-check:

```
### Publish the onboarding-time methodology
serves: evidenced
state: ready
needs: human
why: the 40% claim is a primary buying reason; unsupported, it is a liability
done_when:
  - public methodology page with sample, method and limitations
  - the site's claim wording matches the evidence
verify:
  - refetch the page; compare the claim against the retained study
```

Action states: `ready` · `blocked` · `waiting on someone else` · `done`. `needs:` is `agent` or `human` — human for any claim, and anything a third party receives.

## Rules

Copy these into every file, verbatim.

1. **Claims are objects under evaluation.** A claim appears here only with an evidence state. Writing it down makes nothing true.
2. **No evidence, no evaluated claim.** Cite what was observed, name what's needed, or both.
3. **Unreached is not zero.** Blocked, absent or failed observation is recorded as exactly that — never as a failure, a zero, or invented certainty.
4. **No fabrication, no strengthening.** Never invent sources, dates, quotes, reviews or results. Never restate an unsupported claim as established. Inferred buyer questions stay labelled inferred and never count as demand.
5. **Earned means earned.** No fake or incentivised reviews, no astroturfing, no self-review posing as independence, no bot-wall bypass. Links and mentions are outcomes of relevance, never quotas.
6. **Two things always need a human.** Any claim about the business, and anything a third party would receive. An agent may draft both; it may assert or send neither.
7. **Numbers carry their coverage.** Any figure states how much it actually saw. Never blend different questions into one headline number. The output is the work, not a grade.

## What your agent may change

Not a permission system — a boundary. You tell it what it can touch; these two lines hold regardless.

| | |
|---|---|
| **Your own surfaces** | Pages, answers, markup, access config, internal links, discovery files — whatever access you granted. Change one thing at a time and say what changed. |
| **Claims** | Always human. The agent may build the page that would carry a claim and draft the wording; you decide whether it is true enough to publish. |
| **Third parties** | Always human. Reviews, outreach, PR, partnerships, profiles you must own — drafted by the agent, sent by you. |

If your site deploys automatically, the agent proposes changes for your review before they go live.

## Why this isn't a scanner

| Scanner | Answerworthy |
|---|---|
| Returns a score | Returns changed pages and an ordered queue |
| Your website | Eight conditions, including what you cannot self-publish |
| Your brand name in prompts | The buyer's question *before* they know your brand |
| A dashboard you revisit | A file you keep, that agents continue from |
| One blended number | Separate findings, each with its evidence |

Tools that check one condition are useful. This is the chain.

## Conformance

A file is **declared** when it has valid frontmatter and all six sections; **evidenced** when every entry in State has a state and an evidence basis and the Rules are followed; **maintained** when the audit date is fresh, completed actions are re-verified, and history is kept.

Anyone may implement this — agents, tools, agencies, the business itself. No service owns implementation, including the author's. Implementations should say which of the eight conditions they actually cover. Partial coverage is normal and welcome; presenting one condition as the whole chain is not.

Following this standard structures evidence and closes gaps. It does not guarantee ranking, citation, recommendation or revenue.

## License

Text CC BY 4.0 · template and example CC0 — copy them freely.

Created and stewarded by Alexander Pichugin. Changes by pull request in the open.

---

**Next:** copy [`template/answerworthy.md`](./template/answerworthy.md), or see [`examples/acme/answerworthy.md`](./examples/acme/answerworthy.md).

*The standard is free. Becoming the answer is the work.*
