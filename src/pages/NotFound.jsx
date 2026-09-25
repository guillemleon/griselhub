import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="legal">
      <div className="legal__inner">
        <span className="eyebrow">404</span>
        <h1 style={{ marginTop: 16 }}>{t('notfound.title')}</h1>
        <p>{t('notfound.text')}</p>
        <p>
          <Link to="/">{t('notfound.home')}</Link>
        </p>
      </div>
    </div>
  )
}

export default NotFound
