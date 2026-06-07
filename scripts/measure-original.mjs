import { chromium } from '@playwright/test'

const browser = await chromium.launch()
const page = await browser.newPage()
await page.setViewportSize({ width: 1280, height: 900 })

async function measure(url, label) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 })
  await page.waitForTimeout(2000)

  return page.evaluate(() => {
    const style = (el) => {
      if (!el) return null
      const s = getComputedStyle(el)
      const r = el.getBoundingClientRect()
      return {
        text: el.innerText?.trim().substring(0, 40),
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        w: Math.round(r.width),
        h: Math.round(r.height),
      }
    }

    const byText = (text) =>
      [...document.querySelectorAll('*')].filter(
        (el) => el.children.length === 0 && el.innerText?.trim() === text,
      )

    const heroTitles = byText('ПРОЦЕСС ОЧИСТКИ').map(style)
    const qualityTitle = byText('КАЧЕСТВО ПРОДУКЦИИ').map(style)
    const benefitsTitle = byText('НАШИ ПРЕИМУЩЕСТВА').map(style)

    const benefitsSection = [...document.querySelectorAll('.t-rec, .r')].find((el) =>
      el.innerText?.includes('НАШИ ПРЕИМУЩЕСТВА'),
    )
    benefitsSection?.scrollIntoView({ block: 'center' })

    const benefitIcons = benefitsSection
      ? [...benefitsSection.querySelectorAll('img, .t-bgimg, [data-original]')].map((el) => {
          const r = el.getBoundingClientRect()
          return { w: Math.round(r.width), h: Math.round(r.height), src: (el.src || el.getAttribute('data-original') || '').slice(-24) }
        })
      : []

    const deliverySection = [...document.querySelectorAll('.t-rec, .r')].find((el) =>
      el.innerText?.includes('БЕСПЛАТНАЯ ДОСТАВКА'),
    )
    deliverySection?.scrollIntoView({ block: 'center' })

    const deliveryTitle = deliverySection
      ? [...deliverySection.querySelectorAll('*')]
          .filter((el) => el.children.length === 0 && el.innerText?.trim() === 'БЕСПЛАТНАЯ ДОСТАВКА')
          .map(style)
      : []
    const deliveryText = deliverySection
      ? [...deliverySection.querySelectorAll('*')]
          .filter((el) => el.children.length === 0 && el.innerText?.includes('Доставим куда'))
          .map(style)
      : []

    document.querySelector('#kall, [href*="#kall"]')?.scrollIntoView({ block: 'start' })
    const calcSection = [...document.querySelectorAll('.t-rec, .r')].find((el) =>
      el.innerText?.includes('КАЛЬКУЛЯТОР РАСЧЕТА'),
    )
    const calcTitle = calcSection
      ? [...calcSection.querySelectorAll('*')]
          .filter((el) => el.children.length === 0 && el.innerText?.includes('КАЛЬКУЛЯТОР РАСЧЕТА'))
          .map(style)
      : []
    const calcSub = calcSection
      ? [...calcSection.querySelectorAll('*')]
          .filter((el) => el.children.length === 0 && el.innerText?.trim() === 'КВАДРАТНЫЙ БАССЕЙН')
          .map(style)
      : []
    const calcLabel = calcSection
      ? [...calcSection.querySelectorAll('*')]
          .filter((el) => el.children.length === 0 && el.innerText?.includes('Длина бассейна'))
          .map(style)
      : []
    const calcVol = calcSection
      ? [...calcSection.querySelectorAll('*')]
          .filter((el) => el.children.length === 0 && el.innerText?.includes('ОБЪЕМ ВАШЕГО'))
          .map(style)
      : []

    const range = document.querySelector('input[type="range"]')
    const rangeThumb = range
      ? {
          accentColor: getComputedStyle(range).accentColor,
          background: getComputedStyle(range).background,
        }
      : null

    return {
      heroTitles,
      qualityTitle,
      benefitsTitle,
      benefitIcons,
      deliveryTitle,
      deliveryText,
      calcTitle,
      calcSub,
      calcLabel,
      calcVol,
      rangeThumb,
    }
  })
}

const original = await measure('https://perekis.kz/', 'original')
const local = await measure('http://127.0.0.1:5173/', 'local')
console.log(JSON.stringify({ original, local }, null, 2))
await browser.close()
