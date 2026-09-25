import { Link, useLocation } from 'react-router-dom'
import { useLanguage, LANGUAGES } from '../i18n/LanguageContext'
import { useState, useRef, useEffect } from 'react'
import Wordmark from './Wordmark'
import { ChevronDown } from './Icons'

function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // hairline + solid background once the page scrolls (always on inner pages)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${!isHome || scrolled ? 'navbar--solid' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="griselhub">
          <Wordmark />
        </Link>
        <div className="navbar__right">
          <div className="navbar__links">
            <Link to="/" className={location.pathname === '/' && !location.hash ? 'active' : ''}>{t('nav.apps')}</Link>
            <Link to="/privacy" className={location.pathname === '/privacy' ? 'active' : ''}>{t('nav.privacy')}</Link>
            <Link to="/terms" className={location.pathname === '/terms' ? 'active' : ''}>{t('nav.terms')}</Link>
            <Link to={{ pathname: '/', hash: '#contact' }} className="navbar__cta">{t('nav.work')}</Link>
          </div>
          <div className="lang-picker" ref={ref}>
            <button
              className="lang-picker__btn"
              onClick={() => setOpen(!open)}
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-label="Language"
            >
              {lang.toUpperCase()}
              <ChevronDown />
            </button>
            {open && (
              <div className="lang-picker__dropdown" role="listbox">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    role="option"
                    aria-selected={l.code === lang}
                    className={`lang-picker__option ${l.code === lang ? 'lang-picker__option--active' : ''}`}
                    onClick={() => { setLang(l.code); setOpen(false) }}
                  >
                    <span>{l.label}</span>
                    <span className="lang-picker__option-code">{l.code.toUpperCase()}</span>
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
