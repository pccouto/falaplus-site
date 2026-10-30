import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { SEARCH_DEMAND_CATALOG } from '../_fonte/artigos/temas-procurados-data.mjs'

let checked=0
for(const lang of ['pt','en','es']) for(const article of SEARCH_DEMAND_CATALOG){
  const base=lang==='pt'?'artigos':lang==='en'?'en/articles':'es/articulos'
  const file=join(base,article[lang].slug,'index.html'), html=readFileSync(file,'utf8')
  const title=html.match(/<title>(.*?)<\/title>/s)?.[1]
  if(!title||title.length>60) throw new Error(`Invalid title: ${file}`)
  if(!html.includes('class="bridge"')) throw new Error(`Missing app bridge: ${file}`)
  for(const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1])
  const canonical=html.match(/<link rel="canonical" href="([^"]+)/)?.[1]
  if(!canonical?.endsWith(`/${article[lang].slug}/`)) throw new Error(`Invalid canonical: ${file}`)
  if((html.match(/hreflang=/g)||[]).length<4) throw new Error(`Missing hreflang: ${file}`)
  checked++
}
console.log(`${checked} search-demand pages: metadata, structured data and app bridge OK`)
