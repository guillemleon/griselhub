import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

function Support() {
  const { t } = useLanguage()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal">
      <div className="legal__inner">
        <h1>{t('support.title')}</h1>
        <p className="legal__meta">
          <strong>GriselHub</strong> &middot; {t('support.subtitle')}
        </p>

        <hr />

        <h2>{t('support.contact.title')}</h2>
        <p>{t('support.contact.p')}</p>
        <p>
          <strong>{t('support.contact.email')}</strong>{' '}
          <a href="mailto:support@griselhub.com">support@griselhub.com</a>
        </p>
        <p>{t('support.contact.response')}</p>

        <h2>{t('support.faq.title')}</h2>

        <h3>{t('support.faq.q1')}</h3>
        <p>{t('support.faq.a1')}</p>

        <h3>{t('support.faq.q2')}</h3>
        <p>{t('support.faq.a2')}</p>

        <h3>{t('support.faq.q3')}</h3>
        <p>{t('support.faq.a3')}</p>

        <h3>{t('support.faq.q4')}</h3>
        <p>{t('support.faq.a4')}</p>

        <h3>{t('support.faq.q5')}</h3>
        <p>{t('support.faq.a5')}</p>

        <h3>{t('support.faq.q6')}</h3>
        <p>{t('support.faq.a6')}</p>

        <h2>{t('support.subscriptions.title')}</h2>
        <p>{t('support.subscriptions.p')}</p>
        <ol>
          <li>{t('support.subscriptions.s1')}</li>
          <li>{t('support.subscriptions.s2')}</li>
          <li>{t('support.subscriptions.s3')}</li>
        </ol>

        <h2>{t('support.data.title')}</h2>
        <p>{t('support.data.p')}</p>

        <hr />

        <p>{t('support.footer')}</p>
      </div>
    </div>
  )
}

export default Support
