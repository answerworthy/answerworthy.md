# Governance of the Answerworthy Standard

The Answerworthy Standard is an open specification stewarded in public. It is not a company constitution, a certification business, or a proprietary methodology disguised as a standard.

This document describes how the specification changes while the project is still small enough to have a single founding steward. Governance should grow only when participation makes additional structure necessary.

## Canonical source and status

Normative releases are published in the organisation-owned repository:

- https://github.com/answerworthy/answerworthy.md

The canonical public gateway is:

- https://answerworthy.md

Working drafts may be developed elsewhere before being proposed back to the canonical repository. A working draft is not a release and does not supersede the latest normative version merely by being newer.

The specification version is carried by the `answerworthy:` field defined by the Standard. Draft versions use the `-draft` suffix.

## Names and domains confer no status

Ownership or use of a domain, brand or product name that resembles or contains the Standard's name — under any TLD or naming variation — creates no special relationship to the Standard. It does not establish adoption, affiliation, endorsement, conformance, reference status or a right to be listed.

Mention in the implementation registry is earned under the same evidence requirements for every product or implementation. Name similarity neither accelerates nor blocks assessment.

`https://answerworthy.md` is the canonical public gateway for the Standard. The `answerworthy.md` filename is the working-file format defined by the Standard. Neither is an implementation entry. Reference implementations are separate artifacts and receive no privileged conformance merely because they are maintained by the Standard's steward.

## What is normative

The following parts of the canonical repository define the Standard:

1. the definitions, eight conditions, Rules and conformance requirements in `README.md`;
2. the required structure and field semantics of `answerworthy.md` as defined there;
3. versioned normative changes recorded in `CHANGELOG.md`.

The template is a convenience artifact and must not contradict the Standard. Examples are non-normative. Implementation profiles, assessments, commercial services and reference software are non-normative.

Where an example conflicts with the specification, the specification wins.

## Stewardship

Alexander Pichugin is the founding steward.

At the current stage, the steward may merge normative changes after public review. This is deliberately explicit: the project does not pretend to have committee consensus that does not yet exist.

The steward is responsible for:

- preserving the evidence and honesty core of the Standard;
- keeping normative releases internally coherent;
- recording material changes and their rationale;
- distinguishing specification requirements from implementation preferences;
- disclosing conflicts when assessing implementations maintained by the steward;
- expanding governance when sustained independent participation makes that useful.

Stewardship does not give the steward's software, agency work or commercial services privileged conformance.

## Changes

Normative changes are proposed by pull request against the canonical repository. A proposal should state:

- the problem it addresses;
- whether it changes required behaviour or only clarifies wording;
- compatibility impact on existing `answerworthy.md` files and implementations;
- evidence or concrete cases motivating the change where applicable.

Editorial corrections may be small. Changes to condition semantics, required fields, Rules, authority boundaries or conformance require explicit changelog entries.

A proposal earns inclusion because it improves the Standard, not because its author is an implementation vendor, customer, sponsor or steward.

## Versioning

The project uses a simple three-part policy:

- **major** — incompatible change to the meaning of a condition, a required section, a Rule, authority boundary or conformance requirement;
- **minor** — backward-compatible capability, optional field, additional state or material clarification that does not invalidate conforming prior files;
- **patch** — editorial correction or clarification with no intended change in required behaviour.

Working versions append `-draft` until released.

The changelog is the human-readable record of what changed. Version numbers do not replace that explanation.

## The invariant core

The project may improve its terminology and mechanics, but changes must not silently weaken the principles that make the Standard trustworthy:

- claims remain objects under evaluation rather than facts by inclusion;
- unavailable evidence remains unavailable rather than becoming a zero or invented negative;
- independent support must actually be independent;
- measurements remain evidence rather than objectives;
- consequential business claims and third-party communications retain human authority boundaries;
- partial coverage must be disclosed as partial.

A future version may deliberately change one of these principles only through an explicit normative proposal that calls out the change and its consequences.

## Implementations are separate from the Standard

Anyone may implement the Standard. Implementations may be open or proprietary, local or hosted, automated or service-led.

A product name, domain, brand, feature claim or listing in the registry does not establish adoption, affiliation, endorsement or conformance. Those are separate claims and must be evidenced separately.

The registry uses three relationship classes:

- **reference implementation** — maintained by the Standard's steward to demonstrate one way to implement it;
- **declared implementation** — an independent tool, agent or service that explicitly declares support for the Standard;
- **independently mapped product** — a product assessed against the Standard without claiming that it adopted the Standard.

Reference status is not a higher conformance grade.

## Implementation assessments and conflicts

Implementation assessments must distinguish what a vendor says from what can be demonstrated or independently verified. They must state the reviewed product tier, date, evidence basis and Standard version.

The steward's own implementation is assessed under the same method and carries an explicit conflict disclosure. No implementation may pay for a better mapping or ranking.

A vendor or maintainer may submit corrections by pull request with supporting evidence. "Not publicly demonstrated" means exactly that; it must not be rewritten as "does not exist" without evidence.

## Future governance

Governance should become more distributed when the project has sustained independent implementers or contributors who need shared decision rights. Possible later structures include additional maintainers, a technical steering group or an independent foundation.

Those structures should be created because participation requires them, not to make a young standard look institutionally older than it is.
