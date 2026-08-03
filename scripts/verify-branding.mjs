import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'

const forbiddenLovableHash = 'dd821076a9b03adc2173c93956226aea3d92482d7578fc4339c5d3a2e9c24586'
const iconPaths = [
  'public/favicon.ico',
  'public/favicon.png',
  'public/apple-touch-icon.png',
  'public/icon-192x192.png',
  'public/icon-512x512.png',
]

if (existsSync('src/app/favicon.ico')) {
  throw new Error('src/app/favicon.ico overrides metadata icons and must not be restored')
}

const layout = readFileSync('src/app/layout.tsx', 'utf8')
for (const iconUrl of ['/favicon.png?v=20260803', '/favicon.ico?v=20260803', '/apple-touch-icon.png?v=20260803']) {
  if (!layout.includes(iconUrl)) throw new Error(`Missing branded icon metadata: ${iconUrl}`)
}

for (const iconPath of iconPaths) {
  const content = readFileSync(iconPath)
  const hash = createHash('sha256').update(content).digest('hex')
  if (hash === forbiddenLovableHash) throw new Error(`Lovable favicon detected at ${iconPath}`)
}

process.stdout.write(`${JSON.stringify({ success: true, checked: iconPaths.length }, null, 2)}\n`)
