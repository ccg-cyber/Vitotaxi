// Copies the finished build (web/dist) to the repository root, which is what GitHub Pages serves.
// Only entries this script published last time are replaced; web/, .git, .github and README.md are never touched.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const web = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const repo = path.resolve(web, '..')
const dist = path.join(web, 'dist')
const manifest = path.join(repo, '.published.json')
const KEEP = new Set(['web', '.git', '.github', 'README.md', '.gitignore', '.published.json', 'node_modules'])

const previous = fs.existsSync(manifest) ? JSON.parse(fs.readFileSync(manifest, 'utf8')) : []
for (const name of previous) {
  if (KEEP.has(name)) continue
  fs.rmSync(path.join(repo, name), { recursive: true, force: true })
}

const entries = fs.readdirSync(dist).filter(n => !KEEP.has(n))
for (const name of entries) fs.cpSync(path.join(dist, name), path.join(repo, name), { recursive: true })
fs.writeFileSync(path.join(repo, '.nojekyll'), '')
if (!entries.includes('.nojekyll')) entries.push('.nojekyll')
fs.writeFileSync(manifest, JSON.stringify(entries.sort(), null, 1) + '\n')
console.log(`Published ${entries.length} entries to the repository root.`)
