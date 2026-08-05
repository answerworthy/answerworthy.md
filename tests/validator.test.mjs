import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'
import { validateAnswerworthy } from '../validator.mjs'

const root = process.cwd()
const source = (file) => readFile(path.join(root, file), 'utf8')

async function textFiles(directory = root) {
  const results = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (['.git', 'node_modules'].includes(entry.name)) continue
    const absolute = path.join(directory, entry.name)
    if (entry.isDirectory()) results.push(...await textFiles(absolute))
    else results.push(absolute)
  }
  return results
}

test('the sourced example passes at self-declared M2', async () => {
  const result = validateAnswerworthy(await source('examples/sourced.answerworthy.md'))
  assert.equal(result.valid, true)
  assert.equal(result.claimed, 'M2')
  assert.equal(result.achieved, 'M2')
  assert.equal(result.facts, 2)
  assert.equal(result.answers, 2)
  assert.equal(result.dimensions.present, 6)
  assert.deepEqual(result.errors, [])
})

test('the minimal example passes at M1 and warns that sourcing is missing', async () => {
  const result = validateAnswerworthy(await source('examples/minimal.answerworthy.md'))
  assert.equal(result.valid, true)
  assert.equal(result.claimed, 'M1')
  assert.equal(result.achieved, 'M1')
  assert.match(result.warnings.join(' '), /M2 cannot be established/)
})

test('M3 cannot be self-claimed without an independent attestation', () => {
  const text = `---
answerworthy: "0.2"
entity: "Example Co"
canonical: https://example.com
last_verified: 2026-08-05
conformance: M3
---

## Identity

Example Co makes software.

## Canonical facts

- statement: "Example Co makes software."
  basis: declared
  source_class: owned
  source: https://example.com
  verified_at: 2026-08-05

## Answers

### What does Example Co make?

Software.

source: https://example.com
`
  const result = validateAnswerworthy(text)
  assert.equal(result.valid, false)
  assert.equal(result.achieved, 'M2')
  assert.match(result.errors.join(' '), /M3 requires an independent attestation URL and SHA-256 hash/)
})

test('a referenced attestation can establish M3', () => {
  const text = `---
answerworthy: "0.2"
entity: "Example Co"
canonical: https://example.com
last_verified: 2026-08-05
conformance: M3
attestation_url: https://verifier.example/attestations/1
attestation_sha256: 0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
---

## Identity

Example Co makes software.

## Canonical facts

- statement: "Example Co makes software."
  basis: declared
  source_class: owned
  source: https://example.com
  verified_at: 2026-08-05

## Answers

### What does Example Co make?

Software.

source: https://example.com
`
  const result = validateAnswerworthy(text)
  assert.equal(result.valid, true)
  assert.equal(result.achieved, 'M3')
})

test('the category definition and canonical-file statement are identical across normative files', async () => {
  const category = 'A business is answerworthy when its identity, offer, facts, answers, evidence, limitations and freshness are publicly accessible, machine-readable and independently checkable.'
  const canonical = 'answerworthy.md is the canonical file. Any JSON, HTML, PDF, dashboard or score that an implementation emits is a projection of it and cannot outrank it.'
  for (const file of ['README.md', 'SPECIFICATION.md', 'GRAMMAR.md']) {
    const content = await source(file)
    assert.ok(content.includes(category), `${file} must contain the category definition`)
  }
  for (const file of ['README.md', 'SPECIFICATION.md']) {
    const content = await source(file)
    assert.ok(content.includes(canonical), `${file} must contain the canonical-file statement`)
  }
})

test('normative and public copy contains no em dash and no universal numeric grade', async () => {
  const files = await textFiles()
  const combined = (await Promise.all(files.map((file) => readFile(file, 'utf8')))).join('\n')
  assert.doesNotMatch(combined, /—/)
  assert.doesNotMatch(combined, /\b\d{1,3}\s*\/\s*100\b/)
  assert.doesNotMatch(combined, /overall\s+(?:answerworthy|visibility|readiness)\s+score/i)
})
