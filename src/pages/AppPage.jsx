import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { APPS, screenshotUrls } from '../apps'
import StoreButton from '../components/StoreButton'

function Arrow({ dir }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === 'left' ? <path d="M12.5 8h-9M7.5 4l-4 4 4 4" /> : <path d="M3.5 8h9M8.5 4l4 4-4 4" />}
    </svg>
  )
}

// Detail page for one app: header, App Store screenshots, features, other apps.
function AppPage({ app }) {
  const { lang, t } = useLanguage()
  const rail = useRef(null)
  const shots = screenshotUrls(app, lang)
  const others = APPS.filter((a) => a.slug !== app.slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [app.slug])

  // Step to the next/previous screenshot edge (aligned with the snap points,
  // so snapping never fights the scroll).
  const scrollRail = (dir) => {
    const el = rail.current
    if (!el) return
    const pad = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0
    const stops = [...el.children].map((c) => c.offsetLeft - el.offsetLeft - pad)
    const x = el.scrollLeft
    const target = dir > 0 ? stops.find((s) => s > x + 4) : [...stops].reverse().find((s) => s < x - 4)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollTo({ left: target ?? (dir > 0 ? el.scrollWidth : 0), behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className="app-page" style={{ '--app-accent': app.accentColor }}>
      <section className="app-hero">
        <div className="container">
          <Link to="/" className="app-hero__back">
            <Arrow dir="left" /> {t('app.back')}
          </Link>

          <div className="app-hero__grid">
            <img src={app.icon} alt={`${app.name} app icon`} className="app-hero__icon" width="112" height="112" />
            <div>
              <span className="eyebrow">{app.platforms}</span>
              <h1 className="app-hero__name">{app.name}</h1>
              <p className="app-hero__tagline">{t(`${app.slug}.tagline`)}</p>
            </div>
          </div>

          <div className="app-hero__body">
            <p className="app-hero__description">{t(`${app.slug}.description`)}</p>
            <StoreButton app={app} />
          </div>
        </div>
      </section>

      <section className="section app-gallery">
        <div className="container">
          <div className="app-gallery__head">
            <h2 className="section-title">{t('app.screenshots')}</h2>
            <div className="app-gallery__nav">
              <button type="button" onClick={() => scrollRail(-1)} aria-label={t('app.prev')}><Arrow dir="left" /></button>
              <button type="button" onClick={() => scrollRail(1)} aria-label={t('app.next')}><Arrow dir="right" /></button>
            </div>
          </div>
        </div>
        <div className="app-gallery__rail" ref={rail}>
          {shots.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${app.name} — ${t('app.screenshots')} ${i + 1}`}
              width="640"
              height="1385"
              loading={i < 3 ? 'eager' : 'lazy'}
              className="app-gallery__shot"
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{app.name}</span>
          <h2 className="section-title">{t('app.features')}</h2>
          <ul className="app-features">
            {app.featureKeys.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
          <div className="app-cta">
            <StoreButton app={app} />
            <Link to="/support" className="app-cta__link">{t('footer.support')}</Link>
            <Link to="/privacy" className="app-cta__link">{t('footer.privacy')}</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">griselhub</span>
          <h2 className="section-title">{t('app.more')}</h2>
          <div className="app-others">
            {others.map((o) => (
              <Link key={o.slug} to={`/${o.slug}`} className="app-other">
                <img src={o.icon} alt="" width="56" height="56" loading="lazy" />
                <span>
                  <strong>{o.name}</strong>
                  <span>{t(`${o.slug}.tagline`)}</span>
                </span>
                <Arrow dir="right" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AppPage
