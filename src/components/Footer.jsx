import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo-icon">⚒</span>
          <span>GriselHub</span>
        </div>
        <div className="footer__links">
          <Link to="/privacy">{t('footer.privacy')}</Link>
          <Link to="/terms">{t('footer.terms')}</Link>
          <Link to="/support">{t('footer.support')}</Link>
          <a href="mailto:support@griselhub.com">{t('footer.contact')}</a>
        </div>
        <p className="footer__copy">&copy; {new Date().getFullYear()} GriselHub. {t('footer.rights')}</p>
      </div>
    </footer>
  )
}

export default Footer
