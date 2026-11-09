// Uses the app's already installed Playwright; installs no dependencies.
import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { createRequire } from 'node:module'
import { SERIES } from '../_fonte/artigos/procura-2026-11-data.mjs'

const appRoot = process.env.FALAPLUS_APP_ROOT || 'C:/Users/pc/Desktop/FalaPlus/App/fala-plus'
const { chromium } = createRequire(path.join(appRoot, 'package.json'))('playwright')
const root = path.resolve(import.meta.dirname, '..')
const output = path.join(appRoot, 'tmp', 'demand-november-preview')
fs.mkdirSync(output, { recursive: true })
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.ttf': 'font/ttf', '.ico': 'image/x-icon' }
const server = http.createServer((req, res) => {
  let filename = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname))
  if (!filename.startsWith(root + path.sep) && filename !== root) { res.writeHead(403).end(); return }
  if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) filename = path.join(filename, 'index.html')
  if (!fs.existsSync(filename)) { res.writeHead(404).end(); return }
  res.setHeader('Content-Type', mime[path.extname(filename)] || 'application/octet-stream')
  res.end(fs.readFileSync(filename))
})
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
const origin = `http://127.0.0.1:${server.address().port}`
const browser = await chromium.launch({ headless: true })
const results = [], errors = []
try {
  for (const width of [360, 1366]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' })
    // Keep third-party counters out of local validation. Local requests and assets are still checked.
    await context.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort())
    const page = await context.newPage()
    page.on('pageerror', e => errors.push(String(e)))
    page.on('response', r => { if (r.url().startsWith(origin) && r.status() >= 400) errors.push(`${r.status()} ${r.url()}`) })
    for (const item of SERIES) for (const lang of ['pt', 'en', 'es']) {
      const base = lang === 'pt' ? 'artigos' : lang === 'en' ? 'en/articles' : 'es/articulos'
      const route = `/${base}/${item[lang].slug}/`
      const response = await page.goto(origin + route, { waitUntil: 'networkidle' })
      await page.evaluate(() => document.fonts.ready)
      const state = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        heading: document.querySelector('h1')?.innerText,
        brokenImages: [...document.images].filter(i => i.loading !== 'lazy' && (!i.complete || !i.naturalWidth)).map(i => i.src),
        faq: document.querySelectorAll('details').length,
        lang: document.documentElement.lang,
      }))
      if (response.status() !== 200 || state.overflow || state.brokenImages.length || state.faq < 4) errors.push({ route, width, ...state })
      if (lang === 'pt' && ['jogos-aprender-ler-6-anos', 'disgrafia-disortografia-diferencas', 'crianca-nao-responde-nome'].includes(item.id)) {
        await page.screenshot({ path: path.join(output, `${item.id}-${width}.png`), fullPage: true })
      }
      // Check the FAQ is operable, including its keyboard-native details state.
      const firstFaq = page.locator('details').first()
      await firstFaq.locator('summary').click()
      if (!await firstFaq.getAttribute('open').then(v => v !== null)) errors.push(`${route}: FAQ did not open`)
      results.push({ route, width, ...state })
    }
    await context.close()
  }
} finally {
  await browser.close()
  await new Promise(resolve => server.close(resolve))
}
fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify({ results, errors }, null, 2))
if (errors.length) { console.error(errors); process.exit(1) }
console.log('60 browser visits OK at 360/1366 px: HTTP, overflow, images, FAQ interaction and JavaScript. Six screenshots saved to ' + output)
