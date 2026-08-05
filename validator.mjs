#!/usr/bin/env node

import { readFile } from 'node:fs/promises'

const REQUIRED_FRONTMATTER = ['answerworthy', 'entity', 'canonical', 'last_verified']
const REQUIRED_SECTIONS = ['Identity', 'Answers']
const DIMENSIONS = ['access-retrieval', 'entity-certainty', 'offer-comprehension', 'evidence-corroboration', 'buyer-question-coverage', 'answer-performance']
const STATES = ['M0', 'M1', 'M2', 'M3', 'M4']

function stripQuotes(value) {
  const trimmed = value.trim()
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) return trimmed.slice(1, -1)
  return trimmed
}

function parseFrontmatter(text) {
  const clean = text.replace(/^\uFEFF/, '')
  const lines = clean.split(/\r?\n/)
  if (lines[0]?.trim() !== '---') return { data: {}, body: clean, error: 'YAML frontmatter must begin on the first line.' }
  const end = lines.findIndex((line, index) => index > 0 && line.trim() === '---')
  if (end < 0) return { data: {}, body: clean, error: 'YAML frontmatter has no closing delimiter.' }
  const data = {}
  for (const line of lines.slice(1, end)) {
    if (!line.trim() || /^\s/.test(line)) continue
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (match) data[match[1]] = stripQuotes(match[2])
  }
  return { data, body: lines.slice(end + 1).join('\n'), error: null }
}

function sectionMap(body) {
  const matches = [...body.matchAll(/^##\s+(.+?)\s*$/gm)]
  const sections = new Map()
  matches.forEach((match, index) => {
    const start = match.index + match[0].length
    const end = matches[index + 1]?.index ?? body.length
    sections.set(match[1].trim(), body.slice(start, end).trim())
  })
  return sections
}

function factRecords(block) {
  if (!block) return []
  const starts = [...block.matchAll(/^-\s+/gm)]
  return starts.map((match, index) => {
    const start = match.index
    const end = starts[index + 1]?.index ?? block.length
    return block.slice(start, end)
  })
}

function hasField(record, field) {
  return new RegExp(`^\\s*(?:-\\s*)?${field}:\\s*\\S+`, 'm').test(record)
}

function answerRecords(block) {
  if (!block) return []
  const matches = [...block.matchAll(/^###\s+(.+?)\s*$/gm)]
  return matches.map((match, index) => {
    const start = match.index + match[0].length
    const end = matches[index + 1]?.index ?? block.length
    return { question: match[1].trim(), body: block.slice(start, end).trim() }
  })
}

function stateIndex(state) {
  return STATES.indexOf(state)
}

export function validateAnswerworthy(text) {
  const errors = []
  const warnings = []
  const parsed = parseFrontmatter(text)
  if (parsed.error) errors.push(parsed.error)
  const frontmatter = parsed.data
  const sections = sectionMap(parsed.body)

  for (const field of REQUIRED_FRONTMATTER) if (!frontmatter[field]) errors.push(`Missing frontmatter field: ${field}`)
  if (frontmatter.answerworthy && frontmatter.answerworthy !== '0.2') errors.push('The answerworthy field must equal 0.2 for this validator.')
  if (frontmatter.canonical) {
    try { new URL(frontmatter.canonical) } catch { errors.push('The canonical field must be an absolute URL.') }
  }
  if (frontmatter.last_verified && !/^\d{4}-\d{2}-\d{2}$/.test(frontmatter.last_verified)) errors.push('The last_verified field must use YYYY-MM-DD.')

  for (const section of REQUIRED_SECTIONS) if (!sections.has(section)) errors.push(`Missing required section: ${section}`)

  const facts = factRecords(sections.get('Canonical facts'))
  const factFields = ['statement', 'basis', 'source_class', 'source', 'verified_at']
  const incompleteFacts = facts.filter((record) => factFields.some((field) => !hasField(record, field)))
  if (facts.length === 0) warnings.push('No canonical facts were found, so M2 cannot be established.')
  if (incompleteFacts.length) errors.push(`${incompleteFacts.length} canonical fact record(s) are missing required fields.`)

  const answers = answerRecords(sections.get('Answers'))
  if (answers.length === 0) errors.push('The Answers section must contain at least one level-three question.')
  for (const answer of answers) {
    if (!answer.question.endsWith('?')) warnings.push(`Answer heading is not question-form: ${answer.question}`)
    if (!/^source:\s*https?:\/\//m.test(answer.body)) errors.push(`Answer has no absolute source URL: ${answer.question}`)
  }

  const dimensionText = sections.get('Dimensions') || ''
  const missingDimensions = DIMENSIONS.filter((dimension) => !dimensionText.includes(dimension))
  if (missingDimensions.length) warnings.push(`Dimension mapping is incomplete: ${missingDimensions.join(', ')}`)

  let achieved = 'M0'
  const structured = REQUIRED_FRONTMATTER.every((field) => frontmatter[field]) && REQUIRED_SECTIONS.every((section) => sections.has(section)) && answers.length > 0
  if (structured && !parsed.error) achieved = 'M1'
  const sourced = structured && facts.length > 0 && incompleteFacts.length === 0 && answers.every((answer) => /^source:\s*https?:\/\//m.test(answer.body))
  if (sourced) achieved = 'M2'

  const hasAttestation = Boolean(frontmatter.attestation_url && /^https?:\/\//.test(frontmatter.attestation_url) && frontmatter.attestation_sha256 && /^[a-f0-9]{64}$/.test(frontmatter.attestation_sha256))
  if (sourced && hasAttestation) achieved = 'M3'

  const freshnessDays = Number(frontmatter.freshness_days)
  const verifiedAt = frontmatter.last_verified ? Date.parse(`${frontmatter.last_verified}T00:00:00Z`) : Number.NaN
  const fresh = Number.isFinite(freshnessDays) && freshnessDays > 0 && Number.isFinite(verifiedAt) && Date.now() - verifiedAt <= freshnessDays * 86400000
  if (hasAttestation && fresh) achieved = 'M4'

  const claimed = frontmatter.conformance || null
  if (claimed && !STATES.includes(claimed)) errors.push(`Unknown conformance state: ${claimed}`)
  if (claimed && STATES.includes(claimed) && stateIndex(claimed) > stateIndex(achieved)) errors.push(`Claimed ${claimed}, achieved ${achieved}.`)
  if ((claimed === 'M3' || claimed === 'M4') && !hasAttestation) errors.push(`${claimed} requires an independent attestation URL and SHA-256 hash inside the file.`)

  const valid = errors.length === 0 && stateIndex(achieved) >= stateIndex('M1')
  return { valid, version: '0.2', claimed, achieved, facts: facts.length, answers: answers.length, dimensions: { present: DIMENSIONS.length - missingDimensions.length, total: DIMENSIONS.length, missing: missingDimensions }, errors, warnings }
}

async function loadInput(input) {
  if (/^https?:\/\//.test(input)) {
    const response = await fetch(input, { headers: { accept: 'text/markdown,text/plain;q=0.9' } })
    if (!response.ok) throw new Error(`HTTP ${response.status} while fetching ${input}`)
    return response.text()
  }
  return readFile(input, 'utf8')
}

const invokedDirectly = process.argv[1] && import.meta.url.endsWith(process.argv[1].replaceAll('\\', '/'))
if (invokedDirectly) {
  const input = process.argv[2] || 'examples/sourced.answerworthy.md'
  try {
    const result = validateAnswerworthy(await loadInput(input))
    console.log(JSON.stringify(result, null, 2))
    if (!result.valid) process.exitCode = 1
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error))
    process.exitCode = 1
  }
}
