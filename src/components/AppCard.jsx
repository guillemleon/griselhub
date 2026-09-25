import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import StoreButton from './StoreButton'

// One app as an editorial row: icon · name & tagline · description & features · store link.
// The whole row opens the app's detail page; the App Store button stays its own link.
function AppCard({ app }) {
  const { t } = useLanguage()
  const page = `/${app.slug}`

  return (
    <article className="app-row">
      <img src={app.icon} alt={`${app.name} app icon`} className="app-row__icon" width="76" height="76" loading="lazy" />

      <div className="app-row__body">
        <h3 className="app-row__name">
          {/* stretched link: its ::after covers the whole row, making the card clickable */}
          <Link to={page} className="app-row__link">{app.name}</Link>
        </h3>
        <p className="app-row__tagline">
          <span className="app-row__dot" style={{ background: app.accentColor }} aria-hidden="true" />
          {t(`${app.slug}.tagline`)}
        </p>
        <span className="app-row__more" aria-hidden="true">
          {t('app.details')} →
        </span>
      </div>

      <div className="app-row__body">
        <p className="app-row__description">{t(`${app.slug}.description`)}</p>
        <ul className="app-row__features">
          {app.featureKeys.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
      </div>

      <div className="app-row__actions">
        <StoreButton app={app} />
      </div>
    </article>
  )
}

export default AppCard
