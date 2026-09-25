import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import Wordmark from './Wordmark'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Link to="/" className="footer__brand" aria-label="griselhub">
              <Wordmark />
            </Link>
            <p className="footer__tagline">{t('footer.tagline')}</p>
          </div>
          <nav className="footer__links">
            <Link to="/privacy">{t('footer.privacy')}</Link>
            <Link to="/terms">{t('footer.terms')}</Link>
            <Link to="/support">{t('footer.support')}</Link>
            <a href="mailto:support@griselhub.com">{t('footer.contact')}</a>
          </nav>
        </div>
        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} GriselHub. {t('footer.rights')}</span>
          <span>support@griselhub.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
