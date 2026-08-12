# Implementations and independent mappings

The Answerworthy Standard is intentionally implementation-neutral. This registry documents how tools, agents and services relate to the Standard without turning vendor marketing into conformance.

A product may be useful while covering only part of the eight-condition chain. Partial coverage is normal. It must simply remain visible as partial.

## Registry inclusion is earned

A name, domain or branding choice does not create standing in this registry. Resembling or containing the Standard's name does not establish adoption, affiliation, endorsement, conformance or reference status.

Products and implementations are listed because there is retained evidence worth mapping against the Standard. Name similarity neither earns nor prevents inclusion.

`https://answerworthy.md` is the canonical public gateway for the Standard. The `answerworthy.md` filename is the working-file format defined by it. Neither is an implementation entry.

## Relationship classes

Every registry entry uses exactly one relationship class.

### Reference implementation

Maintained by the Standard's steward to demonstrate one way to implement the specification.

Reference status is a relationship disclosure, not a higher score or privileged interpretation of the Standard.

### Declared implementation

A tool, agent, agency or service that explicitly declares that it implements the Answerworthy Standard or writes/maintains `answerworthy.md` according to it.

A declaration is not verification. The implementation must still show what it covers.

### Independently mapped product

A product assessed against the Standard without claiming that it adopted the Standard.

An independent mapping must never be worded so that it implies affiliation, endorsement or adoption by the product being assessed.

## Evidence levels

Capability evidence is recorded separately from capability depth.

- **declared** — the vendor or maintainer says the capability exists;
- **demonstrated** — a retained public artifact, sample, export or reproducible demonstration shows the capability operating;
- **verified** — the assessor ran a controlled test and retained enough evidence for someone else to inspect the conclusion.

A homepage promise can establish `declared`. It cannot establish `verified` by itself.

When evidence is unavailable, use **not publicly demonstrated**. Do not silently convert that into **does not exist**.

## Condition depth

Implementation depth may be mapped independently for each of the eight conditions.

| Depth | Demonstrated workflow support |
|---:|---|
| **0** | No support established from the retained evidence. |
| **1** | Observes or inspects part of the condition. |
| **2** | Diagnoses a material gap and explains why it matters. |
| **3** | Prescribes a specific action with a completion criterion. |
| **4** | Produces the usable change, artifact or human-ready action required to advance the condition. |
| **5** | Re-verifies the resulting state and preserves enough context to maintain it over time. |

Depth measures workflow support, not autonomous power. For conditions such as Evidenced, Corroborated and Distributed, a conforming implementation may correctly stop for a human or wait for an independent third party. It can still reach depth 5 by preserving the dependency and re-verifying the resulting public state later.

## Summaries

A profile may report two bounded summaries when the full matrix remains visible:

- **condition breadth** — the number of conditions with depth 3 or higher;
- **workflow depth** — the sum of the eight depth values, out of 40.

A percentage derived from workflow depth is allowed only as a secondary mathematical summary of that implementation matrix. It is **not an Answerworthiness score**, does not score a business, and must never replace the per-condition evidence.

For example, `24/40 = 60% workflow depth` means only that the assessed implementation accumulated 24 points under this registry method. It does not mean that a customer using it becomes "60% answerworthy".

## What every profile must disclose

- product or implementation name;
- canonical product URL or repository, or an explicit statement that none is public yet;
- relationship class;
- Standard version used for the mapping;
- product tier or configuration reviewed;
- assessment date;
- assessor and conflict disclosure;
- evidence level for every scored condition;
- the visible eight-condition matrix;
- important capabilities outside the Standard;
- limitations and unreached surfaces;
- correction path and revision history.

No implementation may pay for a better mapping or ranking.

## File conformance is separate

The Standard defines conformance states for an `answerworthy.md` file. The registry measures implementation workflow coverage.

A tool can perform excellent work on Reachable or Observed without writing a conformant file. Conversely, a tool can generate a structurally valid file while doing weak evidence work. These are different claims and must not be collapsed.

## Seed registry

| Implementation / product | Relationship | Declared Standard adoption | Current assessment |
|---|---|---|---|
| [Answerworthy Engine](./answerworthy-engine.md) | reference implementation | yes | planned; public verification pending |

Independent products should be added when there is retained evidence worth assessing and enough entries to make the registry useful as a market map, not to manufacture the appearance of an ecosystem or elevate a single comparison into a defining rivalry.

## Corrections

Maintainers and vendors are welcome to submit corrections by pull request. A correction should point to public documentation, a reproducible output or another inspectable source.

The registry records what the retained evidence supports at the assessment date. It is not a permanent judgment about a product.
