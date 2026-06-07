import { chromium } from '@playwright/test'

const ORIGINAL = 'https://perekis.kz/'
const LOCAL = 'http://127.0.0.1:5173/'

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 900 },
]

async function measure(page, url, label) {
  const data = { label, viewports: {} }
  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height })
    await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 })
    await page.waitForTimeout(1500)

    const metrics = await page.evaluate(() => {
      const rect = (el) => {
        if (!el) return null
        const r = el.getBoundingClientRect()
        return {
          x: Math.round(r.x),
          y: Math.round(r.y),
          w: Math.round(r.width),
          h: Math.round(r.height),
          cx: Math.round(r.x + r.width / 2),
        }
      }

      const heroItems = [...document.querySelectorAll('.t-hero-info__item, [id^="rec585424725"] li')].slice(0, 3)
      const hero = heroItems.map((li, i) => {
        const img = li.querySelector('img, [data-original], .t-bgimg, .tn-atom__img')
        const content = li.querySelector('.t-hero-info__content') || li.querySelector('p, .t-text')?.closest('div')
        const media = li.querySelector('.t-hero-info__media') || img?.parentElement
        const imgRect = rect(img)
        const contentRect = rect(content)
        const mediaRect = rect(media)
        const textStart = li.innerText?.trim().substring(0, 30)
        return {
          index: i,
          textStart,
          img: imgRect,
          content: contentRect,
          media: mediaRect,
          imgLeftOfContent: imgRect && contentRect ? imgRect.cx < contentRect.cx : null,
        }
      })

      const products = [...document.querySelectorAll('.t-rec--product, [data-record-type="780"]')].slice(0, 4).map((sec, i) => {
        const info = sec.querySelector('.t-product__info') || sec.querySelector('strong')?.closest('div')
        const name = sec.querySelector('.t-product__name, strong')
        const imgEl = sec.querySelector('img') || sec
        const bg = window.getComputedStyle(sec)
        return {
          index: i,
          name: name?.innerText?.trim().substring(0, 25),
          section: rect(sec),
          info: rect(info),
          nameEl: rect(name),
          bgSize: bg.backgroundSize,
          bgPosition: bg.backgroundPosition,
          centered: info ? Math.abs((rect(info)?.cx || 0) - window.innerWidth / 2) < 80 : null,
        }
      })

      return { hero, products, viewport: window.innerWidth }
    })

    await page.screenshot({
      path: `comparison-screenshots/layout-${label}-${vp.name}.png`,
      fullPage: false,
    })

    data.viewports[vp.name] = metrics
  }
  return data
}

const browser = await chromium.launch()
const page = await browser.newPage()

let original, local
try {
  original = await measure(page, ORIGINAL, 'original')
  local = await measure(page, LOCAL, 'local')
} catch (e) {
  console.error('Comparison failed:', e.message)
  original = null
  local = null
}

await browser.close()

if (original && local) {
  console.log(JSON.stringify({ original, local }, null, 2))
}
