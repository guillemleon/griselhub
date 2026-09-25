import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import AppCard from '../components/AppCard'
import { LockIcon, CraftIcon, GlobeIcon } from '../components/Icons'
import WorkWithUs from '../components/WorkWithUs'

const apps = [
  {
    name: 'Fulcrum',
    icon: '/icons/fulcrum-icon.png',
    taglineKey: 'fulcrum.tagline',
    descriptionKey: 'fulcrum.description',
    accentColor: '#a6dd7c',
    featureKeys: ['fulcrum.f.routines', 'fulcrum.f.exercises', 'fulcrum.f.scan', 'fulcrum.f.watch', 'fulcrum.f.healthkit', 'fulcrum.f.calories', 'fulcrum.f.progress', 'fulcrum.f.languages'],
    appStoreUrl: 'https://apps.apple.com/es/app/fulcrum-gym-y-calistenia/id6804208652',
  },
  {
    name: 'Crescia',
    icon: '/icons/crescia_icon.png',
    taglineKey: 'crescia.tagline',
    descriptionKey: 'crescia.description',
    accentColor: '#4a90d1',
    featureKeys: ['crescia.f.budget', 'crescia.f.categories', 'crescia.f.piggy', 'crescia.f.sync', 'crescia.f.widgets', 'crescia.f.currency'],
    appStoreUrl: 'https://apps.apple.com/es/app/crescia/id6760351477',
  },
  {
    name: 'Yantar',
    icon: '/icons/yantar-icon.png',
    taglineKey: 'yantar.tagline',
    descriptionKey: 'yantar.description',
    accentColor: '#d1734a',
    featureKeys: ['yantar.f.timer', 'yantar.f.stages', 'yantar.f.healthkit', 'yantar.f.live', 'yantar.f.widgets', 'yantar.f.academy'],
    appStoreUrl: 'https://apps.apple.com/es/app/yantar/id6760302054',
  },
]

const values = [
  { icon: <LockIcon />, key: 'privacy' },
  { icon: <CraftIcon />, key: 'design' },
  { icon: <GlobeIcon />, key: 'everyone' },
]

function Home() {
  const { t } = useLanguage()

  const { hash, key } = useLocation()

  // /#contact (from the navbar, on any page) scrolls to that section;
  // otherwise start at the top.
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    // wait a beat so layout (fonts, icons) has settled before scrolling
    const id = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    }, 60)
    return () => clearTimeout(id)
  }, [hash, key])

  const liveApps = apps.filter((a) => a.appStoreUrl).length

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero__inner">
          <span className="eyebrow">{t('hero.eyebrow')}</span>
          <h1 className="hero__title">
            {t('hero.title1')}{' '}
            <span className="hero__highlight">{t('hero.title2')}</span>
          </h1>
          <p className="hero__subtitle">{t('hero.subtitle')}</p>

          <dl className="hero__facts">
            <div className="hero__fact">
              <dt className="hero__fact-value">{liveApps}</dt>
              <dd className="hero__fact-label">{t('hero.fact1')}</dd>
            </div>
            <div className="hero__fact">
              <dt className="hero__fact-value">0</dt>
              <dd className="hero__fact-label">{t('hero.fact2')}</dd>
            </div>
            <div className="hero__fact">
              <dt className="hero__fact-value">0</dt>
              <dd className="hero__fact-label">{t('hero.fact3')}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" id="apps">
        <div className="container">
          <div className="section__head">
            <div>
              <span className="eyebrow">{t('apps.eyebrow')}</span>
              <h2 className="section-title">{t('apps.title')}</h2>
            </div>
            <p className="section__lede">{t('apps.lede')}</p>
          </div>
          <div className="apps-list">
            {apps.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <span className="eyebrow">{t('values.eyebrow')}</span>
              <h2 className="section-title">{t('values.title')}</h2>
            </div>
          </div>
          <div className="values-grid">
            {values.map(({ icon, key }) => (
              <div className="value" key={key}>
                <span className="value__icon">{icon}</span>
                <h3>{t(`values.${key}.title`)}</h3>
                <p>{t(`values.${key}.text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkWithUs />
    </div>
  )
}

export default Home
