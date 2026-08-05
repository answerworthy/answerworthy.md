# Contributing to the Answerworthy Standard

The standard is developed in public through GitHub issues and pull requests.

## Before proposing a change

Read:

- [`SPECIFICATION.md`](SPECIFICATION.md)
- [`GRAMMAR.md`](GRAMMAR.md)
- [`GOVERNANCE.md`](GOVERNANCE.md)
- [`README.md`](README.md)

Run the validator against the sourced example:

```bash
node validator.mjs ./examples/sourced.answerworthy.md
```

Run the tests:

```bash
npm test
```

## Good proposals

A strong proposal identifies:

- the interoperability, evidence or implementation problem;
- the current behaviour;
- the requested normative change;
- grammar and validator impact;
- migration impact;
- security and privacy implications;
- at least one real or reproducible implementation case;
- alternatives considered.

## Issues before large changes

Open an issue before a large grammar, category, state or validator change. This creates a public rationale before code and prose diverge.

Small corrections, examples and validator fixtures may go directly to a pull request.

## Compatibility

Files declare the grammar compatibility token they target.

- Clarifications preserve meaning.
- Compatible changes add optional capability.
- Semantic breaks require a migration and a new compatibility token.

Published historical files and releases remain inspectable in Git.

## Evidence discipline

Contributions must preserve these principles:

- declaration is not verification;
- no evidence means no evaluated claim;
- unknown evidence is not failure;
- M3 cannot be self-awarded;
- mention, citation, recommendation and follow-through remain separate;
- the standard defines no universal 0 to 100 Answerworthy score;
- answerworthy.md remains the one canonical public file.

## Copy style

Use direct, dense prose. Avoid em dash characters. Avoid copy patterns that hide the actual claim behind stacked negation.

## Licensing

By contributing, you agree that accepted specification prose and examples may be distributed under CC BY 4.0, and accepted tooling or tests may be distributed under Apache-2.0.

## Conduct

Critique claims, evidence, grammar and implementation directly and respectfully. Fabricated benchmarks, undisclosed conflicts and certification impersonation are incompatible with participation.
