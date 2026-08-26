import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import AppCard from '../components/AppCard'

const apps = [
  {
    name: 'Yantar',
    icon: '/icons/yantar-icon.png',
    taglineKey: 'yantar.tagline',
    descriptionKey: 'yantar.description',
    gradient: 'linear-gradient(135deg, #d1734a, #a85a3a)',
    accentColor: '#d1734a',
    featureKeys: ['yantar.f.timer', 'yantar.f.stages', 'yantar.f.healthkit', 'yantar.f.live', 'yantar.f.widgets', 'yantar.f.academy'],
    appStoreUrl: 'https://apps.apple.com/es/app/yantar/id6760302054',
  },
  {
    name: 'Fulcrum',
    icon: '/icons/fulcrum-icon.png',
    taglineKey: 'fulcrum.tagline',
    descriptionKey: 'fulcrum.description',
    gradient: 'linear-gradient(135deg, #ace57a, #93cb60)',
    accentColor: '#93cb60',
    featureKeys: ['fulcrum.f.routines', 'fulcrum.f.exercises', 'fulcrum.f.scan', 'fulcrum.f.watch', 'fulcrum.f.healthkit', 'fulcrum.f.calories', 'fulcrum.f.progress', 'fulcrum.f.languages'],
    // TODO: set the App Store URL once the app is live.
  },
  {
    name: 'Crescia',
    icon: '/icons/crescia_icon.png',
    taglineKey: 'crescia.tagline',
    descriptionKey: 'crescia.description',
    gradient: 'linear-gradient(135deg, #4a90d1, #3a6fa8)',
    accentColor: '#4a90d1',
    featureKeys: ['crescia.f.budget', 'crescia.f.categories', 'crescia.f.piggy', 'crescia.f.sync', 'crescia.f.widgets', 'crescia.f.currency'],
    appStoreUrl: 'https://apps.apple.com/es/app/crescia/id6760351477',
  },
]

function Home() {
  const { t } = useLanguage()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__inner">
          <h1 className="hero__title">
            {t('hero.title1')}<br />
            <span className="hero__highlight">{t('hero.title2')}</span>
          </h1>
          <p className="hero__subtitle">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="apps-section" id="apps">
        <div className="apps-section__inner">
          <h2 className="section-title">{t('apps.title')}</h2>
          <div className="apps-grid">
            {apps.map(app => (
              <AppCard key={app.name} app={app} />
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-section__inner">
          <h2 className="section-title">{t('values.title')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-card__icon">🔒</span>
              <h3>{t('values.privacy.title')}</h3>
              <p>{t('values.privacy.text')}</p>
            </div>
            <div className="value-card">
              <span className="value-card__icon">🎨</span>
              <h3>{t('values.design.title')}</h3>
              <p>{t('values.design.text')}</p>
            </div>
            <div className="value-card">
              <span className="value-card__icon">🌍</span>
              <h3>{t('values.everyone.title')}</h3>
              <p>{t('values.everyone.text')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
