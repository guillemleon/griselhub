import { Link, useLocation } from 'react-router-dom'
import { useLanguage, LANGUAGES } from '../i18n/LanguageContext'
import { useState, useRef, useEffect } from 'react'

function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const current = LANGUAGES.find(l => l.code === lang)

  return (
    <nav className={`navbar ${!isHome ? 'navbar--solid' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">⚒</span>
          <span className="navbar__logo-text">GriselHub</span>
        </Link>
        <div className="navbar__right">
          <div className="navbar__links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t('nav.apps')}</Link>
            <Link to="/privacy" className={location.pathname === '/privacy' ? 'active' : ''}>{t('nav.privacy')}</Link>
            <Link to="/terms" className={location.pathname === '/terms' ? 'active' : ''}>{t('nav.terms')}</Link>
          </div>
          <div className="lang-picker" ref={ref}>
            <button className="lang-picker__btn" onClick={() => setOpen(!open)}>
              {current?.flag} <span className="lang-picker__code">{lang.toUpperCase()}</span>
            </button>
            {open && (
              <div className="lang-picker__dropdown">
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    className={`lang-picker__option ${l.code === lang ? 'lang-picker__option--active' : ''}`}
                    onClick={() => { setLang(l.code); setOpen(false) }}
                  >
                    <span>{l.flag}</span> {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
