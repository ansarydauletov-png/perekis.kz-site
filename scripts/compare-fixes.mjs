import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const ORIGINAL = 'https://perekis.kz/'
const LOCAL = 'http://127.0.0.1:5173/'
const outDir = path.resolve('comparison-screenshots')

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1280, height: 900 },
]

async function capture(page, url, label, viewport) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height })
  await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 })
  await page.waitForTimeout(2000)

  const dir = path.join(outDir, viewport.name, label)
  await mkdir(dir, { recursive: true })

  await page.screenshot({ path: path.join(dir, 'hero-info.png'), fullPage: false })

  await page.evaluate(() => {
    document.querySelector('#location')?.scrollIntoView({ block: 'start' })
  })
  await page.waitForTimeout(800)
  await page.screenshot({ path: path.join(dir, 'location.png'), fullPage: false })

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2))
  await page.waitForTimeout(500)
  await page.screenshot({ path: path.join(dir, 'fab.png'), fullPage: false })

  const metrics = await page.evaluate(() => {
    const rect = (el) => {
      if (!el) return null
      const r = el.getBoundingClientRect()
      const s = getComputedStyle(el)
      return {
        x: Math.round(r.x),
        y: Math.round(r.y),
        w: Math.round(r.width),
        h: Math.round(r.height),
        fontSize: s.fontSize,
        borderRadius: s.borderRadius,
      }
    }

    const heroTitles = [...document.querySelectorAll('.t-hero-info__title, .t-hero-info__title-accent')]
    const fab = document.querySelector('.t-fab-wa, .t898__btn_label')
    const locLabel = document.querySelector('.t-location__label strong')
    const locAddress = document.querySelector('.t-location__address strong')
    const locMap = document.querySelector('.t-location__map img, .t509__blockimg')

    return {
      heroTitles: heroTitles.map((el) => ({ text: el.innerText.substring(0, 25), ...rect(el) })),
      fab: rect(fab),
      locLabel: rect(locLabel),
      locAddress: rect(locAddress),
      locMap: rect(locMap),
      viewport: window.innerWidth,
    }
  })

  return metrics
}

const browser = await chromium.launch()
const page = await browser.newPage()
const report = {}

for (const vp of viewports) {
  report[vp.name] = {
    original: await capture(page, ORIGINAL, 'original', vp),
    local: await capture(page, LOCAL, 'local', vp),
  }
}

await browser.close()
console.log(JSON.stringify(report, null, 2))
console.log(`\nScreenshots: ${outDir}/{mobile|desktop}/{original|local}/`)
