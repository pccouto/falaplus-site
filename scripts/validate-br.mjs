// Uses the already-installed Playwright in the app; no dependencies added.
import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { BR_CATALOG } from '../_fonte/artigos/br/catalogo.mjs'

const root = path.resolve(import.meta.dirname, '..')
const appRoot = process.env.FALAPLUS_APP_ROOT || 'C:/Users/pc/Desktop/FalaPlus/App/fala-plus'
const { chromium } = createRequire(path.join(appRoot, 'package.json'))('playwright')
const output = path.join(appRoot, 'tmp', 'br-preview')
fs.mkdirSync(output, { recursive:true })
const routes = ['/br/', '/br/app/', '/br/artigos/', ...BR_CATALOG.map(e=>'/br/artigos/'+e.br.slug+'/'), '/br/artigos/tema/fala-e-linguagem/', '/br/artigos/tema/brincar/']
const errors = [], results = []
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.ttf':'font/ttf','.ico':'image/x-icon','.mp4':'video/mp4'}
const server = http.createServer((req,res)=>{
  let file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname))
  if (file!==root && !file.startsWith(root+path.sep)) {res.writeHead(403).end(); return}
  if(fs.existsSync(file)&&fs.statSync(file).isDirectory()) file=path.join(file,'index.html')
  if(!fs.existsSync(file)){res.writeHead(404).end();return}
  res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream')
  res.end(fs.readFileSync(file))
})
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve))
const origin='http://127.0.0.1:'+server.address().port
const browser=await chromium.launch({headless:true})
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8')
try {
  for(const width of [360,1366]) {
    const context=await browser.newContext({viewport:{width,height:width===360?800:1600},reducedMotion:'reduce'})
    await context.route('**/*',r=>r.request().url().startsWith(origin)?r.continue():r.abort())
    const page=await context.newPage()
    page.on('pageerror',e=>errors.push(String(e)))
    page.on('response',r=>{if(r.url().startsWith(origin)&&r.status()>=400)errors.push(r.status()+' '+r.url())})
    for(const route of routes) {
      await page.goto(origin+route,{waitUntil:'networkidle'})
      await page.evaluate(()=>document.fonts.ready)
      const state=await page.evaluate(()=>({
        lang:document.documentElement.lang, h1:document.querySelectorAll('h1').length,
        overflow:document.documentElement.scrollWidth>innerWidth+1,
        canonical:[...document.querySelectorAll('link[rel="canonical"]')].map(e=>e.href),
        noindex:document.querySelector('meta[name="robots"]')?.content.includes('noindex')||false,
        alternates:[...document.querySelectorAll('link[rel="alternate"][hreflang]')].map(e=>[e.hreflang,e.href]),
        links:[...document.querySelectorAll('a[href]')].map(e=>e.getAttribute('href')),
        schema:[...document.querySelectorAll('script[type="application/ld+json"]')].map(e=>JSON.parse(e.textContent)),
        brokenImages:[...document.images].filter(e=>e.loading!=='lazy'&&(!e.complete||!e.naturalWidth)).map(e=>e.src),
        unresolved:document.body.innerText.includes('[['),
        switcher:[...document.querySelectorAll('.fp-languages a[aria-current="page"]')].map(e=>e.textContent),
        portugueseLeak:/\b(telemóvel|ecrã|gaguez|bebé|frigorífico|comboios|uma transtorno|uma aplicativo|a compartilhamento)\b/.test(document.body.innerText),
        featured:[...document.querySelectorAll('.popular-rank')].map(e=>e.textContent)
      }))
      if(state.lang!=='pt-BR'||state.h1!==1||state.overflow||state.noindex||state.brokenImages.length||state.unresolved||state.portugueseLeak||JSON.stringify(state.switcher)!=='["BR"]')errors.push({route,width,...state})
      assert.deepEqual(state.canonical,['https://falamais.pt'+route],route+': canonical')
      assert(sitemap.includes('<loc>https://falamais.pt'+route+'</loc>'),route+': sitemap')
      assert.equal(state.alternates.filter(([hl])=>hl==='pt-BR').length,1,route+': self alternate')
      for(const [hl,url] of state.alternates) {
        const u=new URL(url); const f=path.join(root,u.pathname,'index.html');assert(fs.existsSync(f),'Missing alternate '+url)
        if(hl!=='pt-BR')assert(fs.readFileSync(f,'utf8').includes('hreflang="pt-BR" href="https://falamais.pt'+route+'"'),'Missing reciprocal '+url)
      }
      for(const href of state.links) {
        const u=new URL(href,origin+route)
        if(u.origin!==origin) {
          if(u.hostname==='play.google.com'){assert.equal(u.searchParams.get('hl'),'pt_BR');assert.equal(u.searchParams.get('gl'),'BR')}
          continue
        }
        let f=path.join(root,decodeURIComponent(u.pathname));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html')
        if(!fs.existsSync(f)){errors.push(route+': missing '+href);continue}
        if(u.hash&&f.endsWith('.html')) {
          const id=decodeURIComponent(u.hash.slice(1)), html=fs.readFileSync(f,'utf8')
          if(!html.includes('id="'+id+'"'))errors.push(route+': missing anchor '+href)
        }
      }
      if(state.featured.length)assert(state.featured.every(s=>s==='Em destaque'))
      if(await page.locator('details').count()) {
        const faq=page.locator('details').first();await faq.locator('summary').click();assert.notEqual(await faq.getAttribute('open'),null)
      }
      if(route==='/br/artigos/') {
        await page.locator('[data-search-input]').fill('gagueira')
        assert(await page.locator('.article-card:visible').filter({hasText:'Gagueira'}).count()>0)
        await page.locator('[data-search-input]').fill('')
      }
      if(width===360&&await page.locator('.fp-toggle').count()) {
        await page.locator('.fp-toggle').click();assert.equal(await page.locator('.fp-toggle').getAttribute('aria-expanded'),'true')
        await page.keyboard.press('Escape');assert.equal(await page.locator('.fp-toggle').getAttribute('aria-expanded'),'false')
      }
      await page.evaluate(()=>{document.activeElement?.blur();window.scrollTo(0,0)})
      const clipped = await page.locator('.fp-header a:visible, .fp-toggle:visible').evaluateAll(items=>items.filter(e=>{const r=e.getBoundingClientRect();return r.left<0||r.right>innerWidth+1}).map(e=>e.textContent))
      if(clipped.length)errors.push({route,width,clipped})
      if(['/br/','/br/app/','/br/artigos/','/br/artigos/gagueira-infantil/'].includes(route))await page.screenshot({path:path.join(output,route.slice(1).replaceAll('/','-')+width+'.png'),fullPage:true})
      results.push({route,width,heading:await page.locator('h1').innerText()})
    }
    await context.close()
  }
} finally {await browser.close();await new Promise(resolve=>server.close(resolve))}
fs.writeFileSync(path.join(output,'results.json'),JSON.stringify({results,errors},null,2))
if(errors.length){console.error(JSON.stringify(errors,null,2));process.exitCode=1}
else console.log('PASS: '+results.length+' browser visits; metadata, reciprocal alternates, sitemap, local links/anchors, assets, JSON-LD, search, menu and FAQ. Screenshots: '+output)
