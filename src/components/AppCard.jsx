import { useLanguage } from '../i18n/LanguageContext'

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

// One app as an editorial row: icon · name & tagline · description & features · store link.
function AppCard({ app }) {
  const { t } = useLanguage()

  return (
    <article className="app-row">
      <img src={app.icon} alt={`${app.name} app icon`} className="app-row__icon" width="76" height="76" loading="lazy" />

      <div className="app-row__body">
        <h3 className="app-row__name">{app.name}</h3>
        <p className="app-row__tagline">
          <span className="app-row__dot" style={{ background: app.accentColor }} aria-hidden="true" />
          {t(app.taglineKey)}
        </p>
      </div>

      <div className="app-row__body">
        <p className="app-row__description">{t(app.descriptionKey)}</p>
        <ul className="app-row__features">
          {app.featureKeys.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
      </div>

      <div className="app-row__actions">
        {app.appStoreUrl ? (
          <a
            href={app.appStoreUrl}
            className="store-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${app.name} — ${t('apps.download')} ${t('apps.appStore')}`}
          >
            <AppleLogo />
            <span className="store-btn__text">
              <span className="store-btn__small">{t('apps.download')}</span>
              <span className="store-btn__big">{t('apps.appStore')}</span>
            </span>
          </a>
        ) : (
          <span className="app-row__soon">{t('apps.comingSoon')}</span>
        )}
      </div>
    </article>
  )
}

export default AppCard
