import { useState } from 'react'
import { heroCopy, images } from '../../data/content'

const menuItems = [
  { href: '#buy', label: heroCopy.ctaCatalog },
  { href: '#kall', label: heroCopy.ctaCalculator },
]

export default function TildaHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="t-header" id="t-header">
      <div className="t-header__wrap">
        <div className="t-header__main">
          <a href="/" className="t-header__logo">
            <img src={images.logo} alt="ZNS" />
          </a>
          <div className="t-header__spacer" aria-hidden="true" />
          <div className="t-header__desktop-actions">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} className="t-btn t-btnflex t-btnflex--header">
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className={`t-menuburger ${open ? 't-menuburger-opened' : ''}`}
            aria-label="Меню"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav className={`t-header__menu ${open ? 't-header__menu--open' : ''}`}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="t-btn t-btnflex t-btnflex--header" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
