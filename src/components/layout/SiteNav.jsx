import { useState } from 'react'
import { navLinks } from '../../data/content'

function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (event, id) => {
    event.preventDefault()
    scrollToSection(id)
    window.history.pushState(null, '', `#${id}`)
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="top-nav" aria-label="Основная навигация">
        <a
          href="#hero"
          className="brand"
          onClick={(event) => handleNavClick(event, 'hero')}
        >
          perekis.kz
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav-menu"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="site-nav-menu"
          className={`nav-links ${menuOpen ? 'is-open' : ''}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => handleNavClick(event, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
