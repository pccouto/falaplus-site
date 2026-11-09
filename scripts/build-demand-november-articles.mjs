import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { SERIES } from '../_fonte/artigos/procura-2026-11-data.mjs'

const root = fileURLToPath(new URL('../', import.meta.url))
for (const item of SERIES) for (const lang of ['pt', 'en', 'es']) {
  writeFileSync(resolve(root, '_fonte/artigos/conteudo', lang, item[lang].slug + '.mjs'),
    `// Source text and verified references live in procura-2026-11-data.mjs.\nimport { getDemandArticle } from '../../procura-2026-11-data.mjs'\nexport default getDemandArticle('${item.id}', '${lang}')\n`)
}
console.log('30 source modules written; run node _fonte/artigos/build.mjs to generate the pages.')
