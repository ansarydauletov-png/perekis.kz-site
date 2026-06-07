import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const ORIGINAL = 'https://perekis.kz/'
const LOCAL = 'http://127.0.0.1:5173/'

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 900 },
]

const outDir = path.resolve('comparison-screenshots')

async function capture(page, url, viewport, label) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height })
  await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 })
  await page.waitForTimeout(2000)

  const dir = path.join(outDir, viewport.name, label)
  await mkdir(dir, { recursive: true })

  await page.screenshot({
    path: path.join(dir, 'fullpage.png'),
    fullPage: true,
  })

  await page.screenshot({
    path: path.join(dir, 'viewport-top.png'),
    fullPage: false,
  })

  const metrics = await page.evaluate(() => ({
    title: document.title,
    headings: [...document.querySelectorAll('h1,h2,h3,.t-hero__title,.t-section__title')].map((el) => el.textContent?.trim()).filter(Boolean),
    imageCount: [...document.querySelectorAll('img')].filter((img) => img.src && !img.src.startsWith('data:')).length,
    waLinks: [...new Set([...document.querySelectorAll('a[href*="wa.me"]')].map((a) => a.getAttribute('href')))],
    phoneLinks: [...new Set([...document.querySelectorAll('a[href^="tel:"]')].map((a) => a.getAttribute('href')))],
    sectionIds: [...document.querySelectorAll('[id]')].map((el) => el.id).filter((id) => ['hero', 'buy', 'kall', 'location', 'contact', 't-header'].includes(id)),
    bodyHeight: document.body.scrollHeight,
    hasCertificate: document.body.innerText.includes('СЕРТИФИКАТ КАЧЕСТВА'),
    hasCalculator: document.body.innerText.includes('КАЛЬКУЛЯТОР РАСЧЕТА ПЕРЕКИСИ ВОДОРОДА'),
    productCount: (document.body.innerText.match(/Купить/g) || []).length,
    reviewSlides: document.querySelectorAll('.t-reviews-slider__slide, .t-slds__item, [class*="t-slds"]').length,
  }))

  return metrics
}

const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()

const report = {}

for (const viewport of viewports) {
  report[viewport.name] = {
    original: await capture(page, ORIGINAL, viewport, 'original'),
    local: await capture(page, LOCAL, viewport, 'local'),
  }
}

await browser.close()

for (const [vp, data] of Object.entries(report)) {
  console.log(`\n=== ${vp.toUpperCase()} ===`)
  console.log('Original headings:', data.original.headings.slice(0, 8).join(' | '))
  console.log('Local headings:   ', data.local.headings.slice(0, 8).join(' | '))
  console.log('Original images:', data.original.imageCount, '| Local images:', data.local.imageCount)
  console.log('Original height:', data.original.bodyHeight, '| Local height:', data.local.bodyHeight)
  console.log('Original products (Купить):', data.original.productCount, '| Local:', data.local.productCount)
  console.log('Section IDs local:', data.local.sectionIds.join(', '))
}

console.log(`\nScreenshots saved to: ${outDir}`)
console.log(JSON.stringify(report, null, 2))
