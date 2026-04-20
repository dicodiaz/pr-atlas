import { execFileSync, spawnSync } from 'node:child_process'

const BUILD_RELEVANT = {
  srcCode: (p) => p.startsWith('src/') && (p.endsWith('.ts') || p.endsWith('.tsx')),
  viteConfig: (p) => p === 'vite.config.ts' || p === 'vite.config.js',
  tsconfig: (p) => p.startsWith('tsconfig') && p.endsWith('.json'),
  packageJson: (p) => p === 'package.json',
  pnpmLock: (p) => p === 'pnpm-lock.yaml',
}

function normalizePath(p) {
  return p.replaceAll('\\', '/')
}

function getGitOutput(args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim()
}

function tryGetUpstreamRef() {
  try {
    // Will throw if no upstream is configured for this branch
    return getGitOutput(['rev-parse', '--abbrev-ref', '--symbolic-full-name', '@{u}'])
  } catch {
    return null
  }
}

function listChangedFilesInRange(range) {
  const out = getGitOutput(['diff', '--name-only', range])
  if (!out) return []
  return out
    .split('\n')
    .map((p) => p.trim())
    .filter(Boolean)
    .map(normalizePath)
}

function isBuildRelevant(p) {
  return (
    BUILD_RELEVANT.srcCode(p) ||
    BUILD_RELEVANT.viteConfig(p) ||
    BUILD_RELEVANT.tsconfig(p) ||
    BUILD_RELEVANT.packageJson(p) ||
    BUILD_RELEVANT.pnpmLock(p)
  )
}

function runBuild() {
  const result = spawnSync('pnpm', ['build'], { stdio: 'inherit', shell: true })
  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

const upstream = tryGetUpstreamRef()

if (!upstream) {
  console.log(
    '[build:if-needed:push] No upstream configured for this branch; running pnpm build.',
  )
  runBuild()
  process.exit(0)
}

const range = `${upstream}..HEAD`
const changedFiles = listChangedFilesInRange(range)
const relevantFiles = changedFiles.filter(isBuildRelevant)

if (relevantFiles.length === 0) {
  console.log(
    `[build:if-needed:push] Skip pnpm build (no build-relevant changes in ${range}).`,
  )
  process.exit(0)
}

console.log(
  `[build:if-needed:push] Running pnpm build (build-relevant changes detected in ${range}).`,
)
runBuild()
