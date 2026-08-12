# The Answerworthy Standard

**What to do to be understood, trusted and recommended by AI — and how to put an agent to work on it.**

SEO makes you findable. GEO makes you citable. **Answerworthy is the work that makes you choosable.**

**Choosable** means an answering system can explain why a business is a defensible fit for a particular buyer over relevant alternatives, in the buyer's decision language, for reasons the evidence supports. The right answer may be not to recommend it.

Eight conditions diagnose whether that outcome is possible. They are composable, not a score. This standard names them, tells you how to check them honestly, and defines `answerworthy.md` — an evidence-grounded agentic plan in which State records what is true, Outcomes define what must become defensible, and Actions contain only the material work required to close the distance.

Canonical public gateway: [answerworthy.md](https://answerworthy.md) · Canonical source: [github.com/answerworthy/answerworthy.md](https://github.com/answerworthy/answerworthy.md)

---

## Why

AI visibility should be a capability you own, not a subscription you rent. The work that makes a business recommendable — real buyer questions, public evidence, independent corroboration, distribution — used to need five specialists. Agents make it reachable for small teams. This standard makes it portable: your questions, findings, decisions and history live in one file you keep.

It does not tell AI what to believe about you. It tells your agent how to make real fit and real advantages legible, and how to build the public reasons that make a recommendation defensible.

Any business, any language, any geography.

## Use it whole or partially

The core travels with every use: buyer Outcomes, evidence Rules, material prioritisation, human boundaries and verification.

Use all eight conditions for a full Answerworthy plan, or a declared subset for a bounded task. Partial use is valid and useful when coverage is stated honestly. An unchecked condition is **uncovered** — never passed, failed or irrelevant by implication. A partial implementation must not present itself as the whole chain.

The standard is usable as-is through the prompt below. The resulting file is then tailored through the business, buyer situation, market and language, relevant alternatives, honest exclusions and permissions. Implementations may adapt their workflow; they may not silently weaken the core or the Rules and still claim conformance.

## Start

Paste this into Claude Code, Cursor, Codex, ChatGPT, or any capable agent. Fill the lines at the top.

```
Read the Answerworthy Standard:
https://raw.githubusercontent.com/answerworthy/answerworthy.md/main/README.md

My business: <name> · <website> · <priority market and language>
My buyers: <who they are, and the situation they're in before they know my name>
Coverage: <full | a bounded list of condition names; omit for full>
What you may change: <nothing yet, propose only | the site files I've given you | my CMS>

Then:

1. DEFINE one to four falsifiable Outcomes in the buyer's decision language:
   what an assistant should be able to conclude, for whom, against which real
   alternatives, for which supported reasons, and where the business is not
   the right fit.
2. INSPECT the declared conditions against my actual public presence. Check
   raw HTML, real crawler access, independent sources and current assistant
   answers where relevant. Anything you cannot reach is unreached — never guess.
3. WRITE answerworthy.md as an evidence-grounded agentic plan: observed State,
   declared coverage, and an ordered Actions queue. Turn only material gaps
   into Actions; a detected imperfection does not earn work by itself.
4. FIX only what I authorised above, starting with the highest ready Action
   within permission. Make one coherent intervention at a time and explain
   why it advances an Outcome.
5. STOP at two lines: any claim about my business, and anything a third party
   would receive. Draft them for me; never assert or send them yourself.
6. RE-VERIFY by refetching what changed and re-observing the affected buyer
   Outcome. Update State and Actions. Iterate only when material evidence
   shows that something still blocks an Outcome.

Do not optimise a score. Show me what changed, why it matters, and what is left.
```

Keep `answerworthy.md` wherever your working files live — a repo, a shared drive, a docs folder. If you have version control, use it. Every future session starts by reading it.

## The eight conditions

The conditions form a dependency chain, not a scorecard or strict waterfall. A failure in one can make work elsewhere ineffective. Follow those dependencies, but spend effort according to the stated Outcomes.

**1 · Reachable** — *Can an answering system actually fetch and read you?*  
Content present in raw HTML without JavaScript. AI crawlers genuinely allowed — check the CDN and bot-protection rules, not just `robots.txt`. Indexable, reasonably fast, accessible. Most failures here are invisible from the browser and silent.

**2 · Identified** — *Does it know who you are, without contradiction?*  
One clear entity: name, aliases, people, products, relationships. The same facts on your site and on every profile that mentions you. Contradictions across sources are worse than silence.

**3 · Understood** — *Does it understand what you sell, who it is for, where it is a strong or weak fit, and which real differences matter against relevant alternatives?*  
Audience, problem, offer, commercial shape, price posture, fit, trade-offs and honest exclusions. Stated in the buyer's decision language, not in invented-category language.

**4 · Answering** — *Can it find answers to the questions buyers use to choose before they know your name?*  
The fuzzy, pre-brand questions: "which option works for a small regulated team?" — not "is Acme any good?". Each commercial page should own a real question family. Answers must contain decision-useful distinctions and remain intelligible when quoted out of context.

**5 · Evidenced** — *Can your consequential claims be checked?*  
Every claim that would move a decision needs a method, a dated sample, its scope and its limits, at a source someone can open. A claim without evidence is a liability the moment an assistant repeats it.

**6 · Corroborated** — *Does anyone independent back you up?*  
Reviews on platforms your buyers use, directories, marketplaces, institutional and expert references. This is the part you cannot self-publish, which is exactly why it carries weight.

**7 · Distributed** — *Is the evidence where buyers and systems encounter it?*  
Publishers, editorial, communities, partners, associations, the surfaces of your market. Evidence nobody meets does no work.

**8 · Observed** — *What do assistants actually say, and why?*  
Ask your buyers' real questions and record what comes back, dated, with provider and locale. Record the position — `primary-recommendation` · `shortlisted` · `mentioned` · `mischaracterised` · `not-found` — together with the rationale, whether the buyer fit is correct, and whether the stated reasons are supported by inspected evidence. One answer on one day is an anecdote, not a position.

With full coverage, Observed is the integration test. If every diagnostic looks healthy but assistants still cannot explain why this business is a defensible fit over relevant alternatives, explain it for unsupported reasons, or recommend it outside its real fit, the Outcome has not been achieved.

A tool that checks conditions 1 and 8 is doing useful work on two of eight. It should declare that coverage; it has not tested the whole chain.

## The file

Six sections, fixed order. It is a working document — it records gaps, unsupported claims, alternatives and the executable work ahead, so treat it like any internal file.

```markdown
---
answerworthy: "1.1-draft"
coverage: full
subject: "Acme GmbH"
website: https://acme.example/
market: "Germany · de-DE"
audited: 2026-08-08
refresh_days: 30
---

## Outcomes     ← buyer decisions that must become defensible. Give them IDs.
## Scope        ← buyer, alternatives, fit, exclusions and boundaries.
## Rules        ← the invariant honesty core. Copy verbatim.
## State        ← observed reality for the declared conditions, with evidence.
## Actions      ← the ordered, executable plan for material gaps only.
## Maintenance  ← how evidence, Outcomes and Actions stay current.
```

For partial coverage, list only the conditions actually inspected:

```yaml
coverage: [reachable, understood, answering, observed]
```

Unlisted conditions are uncovered. For full coverage, every condition must be attempted and represented in State; an inaccessible check is `unreached`, not omitted.

**Outcomes** lead, use stable IDs, and remain falsifiable in buyer language:

> **O1 —** When a small regulated team asks which analytics option works without a compliance specialist, an assistant can correctly decide whether Acme is a defensible choice over BigDash and MetricsCo, explain the fit in the buyer's decision language, and ground every consequential reason in inspectable evidence.

An Outcome describes a buyer decision that should become defensible. It is not "rank #1", "score 90", "publish a page" or "get two reviews".

**State** records one entry per thing you checked:

```
### Homepage onboarding claim
condition: evidenced
state: unsupported
claim: "Reduces onboarding time by 40%"
evidence:
  - claim visible at https://acme.example/product — retrieved 2026-08-08
needed:
  - reproducible methodology with dated sample and limitations
  - independent corroboration
```

Conditions: `reachable` · `identified` · `understood` · `answering` · `evidenced` · `corroborated` · `distributed` · `observed`.

States: `verified` · `unsupported` · `contradicted` · `missing` · `unreached` · `stale` · `incomplete`. `verified` needs current evidence someone else could open. `unreached` is what you write when you could not check — never a zero, never a guess.

Observed entries also record:

```
query: "<the buyer question asked>"
position: <primary-recommendation | shortlisted | mentioned | mischaracterised | not-found>
rationale: "<why the assistant said the option fits, or absent>"
fit: <correct | overbroad | too-narrow | wrong | unreached>
rationale_state: <supported | partly-supported | unsupported | absent>
```

**Actions** are the executable plan, not a list of every imperfection. Include an Action only when it materially advances an Outcome, removes a dependency blocking such work, or verifies whether the Outcome has been achieved.

```
### Publish the onboarding-time methodology
advances: [O1]
serves: [evidenced]
state: ready
needs: human
why: the 40% claim is a primary buying reason; unsupported, it is a liability
done_when:
  - public methodology page with sample, method and limitations
  - the site's claim wording matches the evidence
verify:
  - refetch the page; compare the claim against the retained study
  - repeat the affected buyer question and inspect the rationale
```

`advances:` lists one or more Outcome IDs. `serves:` lists one or more covered conditions.

Action states: `ready` · `blocked` · `waiting on someone else` · `done`. `needs:` is `agent` or `human` — human for any claim, and anything a third party receives. After verification, reorder or remove remaining Actions when the evidence changes what matters.

## Rules

Copy these into every file, verbatim.

1. **Claims are objects under evaluation.** A claim appears here only with an evidence state. Writing it down makes nothing true.
2. **No evidence, no evaluated claim.** Cite what was observed, name what's needed, or both.
3. **Unreached is not zero.** Blocked, absent or failed observation is recorded as exactly that — never as a failure, a zero, or invented certainty.
4. **No fabrication, no strengthening.** Never invent sources, dates, quotes, reviews or results. Never restate an unsupported claim as established. Inferred buyer questions stay labelled inferred and never count as demand.
5. **Earned means earned.** No fake or incentivised reviews, no astroturfing, no self-review posing as independence, no bot-wall bypass. Links and mentions are outcomes of relevance, never quotas.
6. **Two things always need a human.** Any claim about the business, and anything a third party would receive. An agent may draft both; it may assert or send neither.
7. **Measurements are evidence, not objectives.** Any number states how much it actually saw; never blend different questions into one headline figure. Scores, counts, checks and observed positions may reveal where to look, but do not define success independently of an Outcome. Make no change merely to improve them.

## What your agent may change

Not a permission system — a boundary. You tell it what it can touch; these boundaries hold regardless.

| | |
|---|---|
| **Your own surfaces** | Pages, answers, markup, access config, internal links, discovery files — whatever access you granted. Make one coherent intervention at a time and say what changed. |
| **Claims** | Always human. The agent may build the page that would carry a claim and draft the wording; you decide whether it is true enough to publish. |
| **Third parties** | Always human. Reviews, outreach, PR, partnerships, profiles you must own — drafted by the agent, sent by you. |

If your site deploys automatically, the agent proposes changes for your review before they go live.

## Why this isn't a scanner

| Scanner | Answerworthy |
|---|---|
| Returns a score | Returns an evidence-grounded agentic plan and verified changes |
| Checks your website | Declares coverage across eight composable conditions, including what you cannot self-publish |
| Uses your brand name in prompts | Starts from the buyer's decision question before they know your brand |
| Gives you a dashboard to revisit | Gives you a file you keep, that agents continue from |
| Reports a position or blended number | Tests the right buyer, the right choice and supported reasons separately |

Tools that check one condition are useful. This is the framework that makes their coverage and limits explicit.

## Conformance

A file is:

- **declared** when it has valid frontmatter, explicit coverage and all six sections;
- **evidenced** when every State entry has a state and an evidence basis and the Rules are followed;
- **actionable** when every active Action advances an Outcome, serves one or more covered conditions, names who acts, defines completion and says how to verify it;
- **maintained** when the audit date is fresh, completed Actions are re-verified, new evidence can reorder the queue, and history is kept.

Full coverage means all eight conditions were attempted and represented in State. Partial coverage means the frontmatter lists the subset actually attempted. Partial coverage is normal and welcome; presenting a partial implementation as the whole chain is not conformant.

Anyone may implement this — agents, tools, agencies, the business itself. No service owns implementation, including the author's.

Following this standard structures evidence and produces an actionable plan. It does not guarantee ranking, citation, recommendation or revenue.

## License

Text CC BY 4.0 · template and example CC0 — copy them freely.

Created and stewarded by Alexander Pichugin. Changes follow the public [governance](./GOVERNANCE.md). Implementation relationships and assessments live in the [registry](./implementations/README.md).

---

**Next:** copy [`template/answerworthy.md`](./template/answerworthy.md), or see [`examples/acme/answerworthy.md`](./examples/acme/answerworthy.md).

*The standard is free. Becoming the answer is the work.*
