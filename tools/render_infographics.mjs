import { existsSync } from 'node:fs'
import { mkdir, readFile, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

import { infographics } from '../src/content/infographicContent.js'

const ROOT = path.resolve(import.meta.dirname, '..')
const OUTPUT = path.join(ROOT, 'public', 'infographics')
const FONT = path.join(ROOT, 'src', 'assets', 'fonts', 'Vazirmatn-VariableFont_wght.ttf')
const ART = path.join(OUTPUT, 'assets', 'serviceos-visual-foundation.png')
const WIDTH = 1200
const HEIGHT = 1500

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

async function loadPlaywright() {
  try {
    return await import('playwright')
  } catch {
    const bundled = process.env.CODEX_BUNDLED_NODE_MODULES
    if (!bundled) throw new Error('playwright is unavailable; set CODEX_BUNDLED_NODE_MODULES to the bundled node_modules path.')
    return import(pathToFileURL(path.join(bundled, 'playwright', 'index.mjs')).href)
  }
}

const renderStats = (stats) => stats.length ? `
  <div class="stats stats--${Math.min(stats.length, 4)}">
    ${stats.map(({ value, label }) => `<div><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join('')}
  </div>` : ''

const renderSections = (sections) => `
  <div class="sections sections--${Math.min(sections.length, 8)}">
    ${sections.map(({ title, items, tone }) => `
      <section class="section section--${escapeHtml(tone)}">
        <h2>${escapeHtml(title)}</h2>
        <ul>${items.map((item) => `<li><i></i><span>${escapeHtml(item)}</span></li>`).join('')}</ul>
      </section>`).join('')}
  </div>`

function template(item, fontData, artData) {
  const totalItems = item.sections.reduce((sum, current) => sum + current.items.length, 0)
  const density = totalItems > 34 ? 'density-high' : totalItems > 23 ? 'density-medium' : 'density-normal'
  const cover = item.layout === 'cover'
  const pageNumber = `${Number(item.id) + 1} / ${infographics.length}`

  return `<!doctype html>
  <html lang="fa" dir="rtl">
    <head>
      <meta charset="utf-8">
      <style>
        @font-face { font-family: Vazirmatn; src: url(data:font/ttf;base64,${fontData}) format('truetype'); font-weight: 100 900; }
        * { box-sizing: border-box; }
        html, body { margin: 0; width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden; }
        body { font-family: Vazirmatn, sans-serif; color: #12162a; background: #f4f6fb; }
        .canvas { position: relative; width: ${WIDTH}px; height: ${HEIGHT}px; padding: 62px 66px 52px; overflow: hidden; isolation: isolate; background: radial-gradient(circle at 90% 8%, rgba(105,78,215,.16), transparent 26%), radial-gradient(circle at 3% 46%, rgba(46,204,173,.13), transparent 25%), linear-gradient(180deg, #fbfcff, #f0f3fa); }
        .canvas::before { content: ''; position: absolute; inset: 0; z-index: -2; opacity: .06; background: url(data:image/png;base64,${artData}) center 42% / 100% auto no-repeat; }
        .canvas::after { content: ''; position: absolute; inset: 24px; z-index: 5; pointer-events: none; border: 1px solid rgba(81,65,155,.14); border-radius: 34px; }
        .cover { padding: 74px; display: flex; flex-direction: column; color: #10152a; background: linear-gradient(180deg, rgba(255,255,255,.88) 0%, rgba(255,255,255,.26) 38%, rgba(245,247,252,.92) 76%, #f2f4fa 100%), url(data:image/png;base64,${artData}) center 39% / cover no-repeat; }
        .cover::before { display: none; }
        .header { position: relative; display: grid; grid-template-columns: 1fr auto; gap: 30px; align-items: start; z-index: 1; }
        .brand { display: flex; align-items: center; gap: 13px; direction: ltr; }
        .brand-mark { width: 56px; height: 56px; display: grid; grid-template-columns: 1fr 1fr; gap: 6px; padding: 9px; border: 1px solid rgba(108,82,221,.27); border-radius: 17px; background: rgba(255,255,255,.72); box-shadow: 0 15px 40px rgba(43,38,105,.12); }
        .brand-mark i { border-radius: 50%; background: #765be5; }
        .brand-mark i:nth-child(2), .brand-mark i:nth-child(3) { background: #2ecdb1; }
        .brand-text { display: grid; direction: rtl; }
        .brand-text strong { font-size: 24px; line-height: 1; }
        .brand-text span { margin-top: 6px; color: #687087; font-size: 14px; }
        .page { min-width: 92px; padding: 13px 18px; color: #6b55dc; border: 1px solid rgba(108,82,221,.24); border-radius: 99px; background: rgba(255,255,255,.68); font-size: 15px; font-weight: 800; text-align: center; direction: ltr; }
        .hero { position: relative; z-index: 1; margin-top: 52px; }
        .eyebrow { display: inline-flex; padding: 8px 13px; color: #6a52d6; border: 1px solid rgba(108,82,221,.23); border-radius: 99px; background: rgba(255,255,255,.7); font: 800 14px/1.2 Vazirmatn; letter-spacing: .06em; direction: ltr; }
        h1 { max-width: 1000px; margin: 22px 0 0; font-size: 55px; line-height: 1.25; letter-spacing: -.025em; }
        .cover h1 { max-width: 900px; margin-top: 28px; font-size: 76px; line-height: 1.17; }
        .summary { max-width: 1030px; margin: 18px 0 0; color: #5f687d; font-size: 23px; line-height: 1.75; }
        .cover .summary { max-width: 920px; color: #505a70; font-size: 28px; line-height: 1.8; }
        .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 28px; }
        .stats--1 { grid-template-columns: 1fr; }
        .stats--2 { grid-template-columns: repeat(2, 1fr); }
        .stats--3 { grid-template-columns: repeat(3, 1fr); }
        .stats > div { min-height: 92px; display: flex; flex-direction: column; justify-content: center; padding: 15px 18px; border: 1px solid rgba(81,65,155,.14); border-radius: 18px; background: rgba(255,255,255,.72); box-shadow: 0 14px 40px rgba(41,37,92,.055); }
        .stats strong { color: #5f49c7; font-size: 25px; line-height: 1.2; }
        .stats span { margin-top: 7px; color: #71798b; font-size: 14px; }
        .sections { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-content: start; gap: 12px; margin-top: 26px; }
        .sections--1 { grid-template-columns: 1fr; }
        .section { min-width: 0; padding: 18px 20px 19px; border: 1px solid rgba(78,73,119,.13); border-radius: 20px; background: rgba(255,255,255,.82); box-shadow: 0 14px 35px rgba(34,31,74,.045); }
        .section--accent { border-color: rgba(29,157,143,.27); background: linear-gradient(145deg, rgba(237,252,249,.95), rgba(245,243,255,.92)); }
        .section--warning { border-color: rgba(217,153,69,.3); background: linear-gradient(145deg, rgba(255,249,237,.97), rgba(255,244,242,.94)); }
        .section h2 { margin: 0; color: #5142a6; font-size: 21px; line-height: 1.45; }
        .section--accent h2 { color: #147f72; }
        .section--warning h2 { color: #aa6722; }
        ul { margin: 13px 0 0; padding: 0; list-style: none; }
        li { display: grid; grid-template-columns: 10px 1fr; gap: 10px; align-items: start; margin-top: 8px; color: #3f485d; font-size: 17px; line-height: 1.68; }
        li:first-child { margin-top: 0; }
        li i { width: 7px; height: 7px; margin-top: 11px; border-radius: 50%; background: linear-gradient(135deg, #7458e1, #2ecdb1); }
        .density-medium h1 { font-size: 50px; }
        .density-medium .summary { font-size: 21px; }
        .density-medium .section { padding: 16px 18px; }
        .density-medium .section h2 { font-size: 19px; }
        .density-medium li { margin-top: 6px; font-size: 15px; line-height: 1.58; }
        .density-medium li i { margin-top: 9px; }
        .density-high .hero { margin-top: 35px; }
        .density-high h1 { font-size: 44px; }
        .density-high .summary { margin-top: 12px; font-size: 18px; line-height: 1.6; }
        .density-high .stats { margin-top: 18px; }
        .density-high .stats > div { min-height: 72px; padding: 10px 14px; }
        .density-high .stats strong { font-size: 21px; }
        .density-high .sections { gap: 9px; margin-top: 18px; }
        .density-high .section { padding: 13px 15px; border-radius: 16px; }
        .density-high .section h2 { font-size: 16px; }
        .density-high li { grid-template-columns: 8px 1fr; gap: 7px; margin-top: 4px; font-size: 13px; line-height: 1.5; }
        .density-high li i { width: 5px; height: 5px; margin-top: 7px; }
        .layout-stage .sections { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .layout-stage .section:nth-child(2), .layout-stage .section:nth-child(3) { min-height: 300px; }
        .layout-stage .section:last-child { grid-column: 1 / -1; }
        .layout-flow .sections, .layout-timeline .sections { position: relative; }
        .layout-flow .section, .layout-timeline .section { border-inline-start: 5px solid rgba(111,83,220,.5); }
        .layout-layers .sections { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .layout-layers .section { min-height: 145px; }
        .layout-layers .section:last-child { grid-column: 1 / -1; }
        .layout-checklist .section li i { width: 16px; height: 16px; margin-top: 5px; border: 4px solid #dff8f3; background: #21af98; }
        .cover .sections { width: 760px; margin-top: auto; }
        .cover .section { backdrop-filter: blur(12px); background: rgba(255,255,255,.82); }
        .cover .stats { width: 850px; margin-top: auto; }
        .footer { position: absolute; inset: auto 66px 45px; display: flex; justify-content: space-between; align-items: center; color: #7a8191; font-size: 13px; z-index: 2; }
        .footer span:last-child { direction: ltr; font-weight: 700; }
      </style>
    </head>
    <body>
      <main class="canvas ${cover ? 'cover' : ''} layout-${escapeHtml(item.layout)} ${density}">
        <header class="header">
          <div class="brand"><div class="brand-mark"><i></i><i></i><i></i><i></i></div><div class="brand-text"><strong>ServiceOS</strong><span>شبکه خدمات هوشمند</span></div></div>
          <div class="page">${escapeHtml(pageNumber)}</div>
        </header>
        <div class="hero">
          <span class="eyebrow">${escapeHtml(item.eyebrow)}</span>
          <h1>${escapeHtml(item.title)}</h1>
          <p class="summary">${escapeHtml(item.summary)}</p>
        </div>
        ${renderStats(item.stats)}
        ${renderSections(item.sections)}
        <footer class="footer"><span>${escapeHtml(item.footer)}</span><span>${escapeHtml(item.id)} · ${escapeHtml(item.slug)}</span></footer>
      </main>
    </body>
  </html>`
}

async function main() {
  await mkdir(OUTPUT, { recursive: true })
  const fontData = (await readFile(FONT)).toString('base64')
  const artData = (await readFile(ART)).toString('base64')
  const { chromium } = await loadPlaywright()
  const executablePath = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  if (!existsSync(executablePath)) throw new Error(`Chrome executable not found: ${executablePath}`)
  const browser = await chromium.launch({ headless: true, executablePath })

  try {
    for (const item of infographics) {
      const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT }, deviceScaleFactor: 1 })
      await page.setContent(template(item, fontData, artData), { waitUntil: 'load' })
      await page.evaluate(() => document.fonts.ready)
      const layout = await page.evaluate(() => {
        const footer = document.querySelector('.footer')
        const sections = [...document.querySelectorAll('.section')]
        const stats = document.querySelector('.stats')
        const content = [...sections, stats].filter(Boolean)
        return {
          footerTop: footer?.getBoundingClientRect().top ?? 1500,
          contentBottom: Math.max(0, ...content.map((element) => element.getBoundingClientRect().bottom)),
          viewportWidth: document.documentElement.scrollWidth,
          viewportHeight: document.documentElement.scrollHeight,
        }
      })
      const footerGap = item.layout === 'cover' ? 4 : 14
      if (layout.viewportWidth > WIDTH || layout.viewportHeight > HEIGHT || layout.contentBottom > layout.footerTop - footerGap) {
        throw new Error(`Layout overflow for ${item.id}-${item.slug}: ${JSON.stringify(layout)}`)
      }
      const outputPath = path.join(OUTPUT, `${item.id}-${item.slug}.png`)
      await page.screenshot({ path: outputPath, type: 'png', fullPage: false, animations: 'disabled' })
      await page.close()
      const file = await stat(outputPath)
      if (file.size < 50_000) throw new Error(`Rendered image is unexpectedly small: ${outputPath}`)
      process.stdout.write(`${item.id} ${item.slug} ${(file.size / 1024).toFixed(0)}KB\n`)
    }
  } finally {
    await browser.close()
  }

  const stale = path.join(OUTPUT, '.rendering')
  await rm(stale, { force: true })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
