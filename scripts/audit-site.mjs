import { chromium, devices } from '@playwright/test'
import { mkdir } from 'node:fs/promises'

const BASE_URL = process.env.AUDIT_URL ?? 'http://localhost:5173/'

const viewports = [
  { name: 'mobile', ...devices['iPhone 13'] },
  { name: 'tablet', viewport: { width: 768, height: 1024 } },
  { name: 'desktop', viewport: { width: 1200, height: 800 } },
]

const requiredSections = [
  'hero',
  'process',
  'benefits',
  'delivery',
  'catalog',
  'reviews',
  'calculator',
  'location',
  'contact',
]

async function auditViewport(browser, profile) {
  const context = await browser.newContext(profile)
  const page = await context.newPage()

  const consoleErrors = []
  const pageErrors = []

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text())
  })
  page.on('pageerror', (error) => pageErrors.push(error.message))

  await page.goto(BASE_URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)

  const missing = []
  for (const id of requiredSections) {
    const visible = await page.locator(`#${id}`).first().isVisible().catch(() => false)
    if (!visible) missing.push(id)
  }

  await mkdir('tests/screenshots', { recursive: true })
  await page.screenshot({
    path: `tests/screenshots/${profile.name ?? 'desktop'}.png`,
    fullPage: true,
  })

  const title = await page.title()
  const hasLogo = await page.locator('.t-header__logo img').isVisible()
  const hasFab = await page.locator('.t-fab-wa').isVisible()

  await context.close()

  return {
    profile: profile.name ?? 'desktop',
    title,
    hasLogo,
    hasFab,
    missingSections: missing,
    consoleErrors: [...new Set(consoleErrors)],
    pageErrors: [...new Set(pageErrors)],
  }
}

const browser = await chromium.launch({ headless: true })
const results = []

for (const profile of viewports) {
  results.push(await auditViewport(browser, profile))
}

await browser.close()

console.log(JSON.stringify(results, null, 2))

const hasErrors = results.some(
  (r) =>
    r.consoleErrors.length > 0 ||
    r.pageErrors.length > 0 ||
    r.missingSections.length > 0 ||
    !r.hasLogo ||
    !r.hasFab,
)

process.exit(hasErrors ? 1 : 0)
