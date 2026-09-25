import { useLanguage } from '../i18n/LanguageContext'

const CONTACT_EMAIL = 'support@griselhub.com'
const SERVICES = ['work.s1', 'work.s2', 'work.s3', 'work.s4', 'work.s5']

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 8h9M8.5 4l4 4-4 4" />
    </svg>
  )
}

// Invitation to commission an app: headline + pitch, what we build, and a
// mailto CTA with the subject pre-filled.
function WorkWithUs() {
  const { t } = useLanguage()
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t('work.subject'))}`

  return (
    <section className="section work" id="contact">
      <div className="container">
        <div className="work__panel">
          <div className="work__copy">
            <span className="eyebrow">{t('work.eyebrow')}</span>
            <h2 className="section-title work__title">{t('work.title')}</h2>
            <p className="work__text">{t('work.text')}</p>
            <ul className="work__services">
              {SERVICES.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </div>
          <div className="work__action">
            <a href={mailto} className="work__cta">
              {t('work.cta')}
              <ArrowIcon />
            </a>
            <a href={mailto} className="work__email">{CONTACT_EMAIL}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkWithUs
