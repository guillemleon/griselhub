import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

function TermsOfService() {
  const { t } = useLanguage()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal">
      <div className="legal__inner">
        <h1>{t('terms.title')}</h1>
        <p className="legal__meta">
          <strong>GriselHub</strong> &middot; {t('terms.meta')} &middot; {t('terms.effective')}
        </p>
        <p className="legal__note" dangerouslySetInnerHTML={{ __html: t('terms.scope') }} />

        <hr />

        <h2>{t('terms.s1.title')}</h2>
        <p>{t('terms.s1.p')}</p>

        <h2>{t('terms.s2.title')}</h2>
        <p>{t('terms.s2.p')}</p>
        <ul>
          <li><strong>Yantar</strong> — {t('terms.s2.yantar')}</li>
          <li><strong>Crescia</strong> — {t('terms.s2.crescia')}</li>
        </ul>
        <p>{t('terms.s2.p2')}</p>

        <h2>{t('terms.s3.title')}</h2>
        <p className="legal__important" dangerouslySetInnerHTML={{ __html: t('terms.s3.important') }} />
        <ul>
          <li>{t('terms.s3.l1')}</li>
          <li>{t('terms.s3.l2')}</li>
          <li>{t('terms.s3.l3')}</li>
          <li>{t('terms.s3.l4')}</li>
          <li>{t('terms.s3.l5')}</li>
        </ul>
        <p><strong>{t('terms.s3.bottom')}</strong></p>

        <h2>{t('terms.s4.title')}</h2>
        <p className="legal__important" dangerouslySetInnerHTML={{ __html: t('terms.s4.important') }} />
        <ul>
          <li>{t('terms.s4.l1')}</li>
          <li>{t('terms.s4.l2')}</li>
          <li>{t('terms.s4.l3')}</li>
          <li>{t('terms.s4.l4')}</li>
        </ul>

        <h2>{t('terms.s5.title')}</h2>

        <h3>{t('terms.s5.1.title')}</h3>
        <p>{t('terms.s5.1.p')}</p>

        <h3>{t('terms.s5.2.title')}</h3>
        <p>{t('terms.s5.2.p')}</p>

        <h3>{t('terms.s5.3.title')}</h3>
        <ul>
          <li>{t('terms.s5.3.l1')}</li>
          <li>{t('terms.s5.3.l2')}</li>
          <li>{t('terms.s5.3.l3')}</li>
          <li>{t('terms.s5.3.l4')}</li>
        </ul>

        <h3>{t('terms.s5.4.title')}</h3>
        <p>{t('terms.s5.4.p')}</p>

        <h3>{t('terms.s5.5.title')}</h3>
        <p>
          {t('terms.s5.5.p')}{' '}
          <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">{t('terms.s5.5.link')}</a>{' '}
          {t('terms.s5.5.p2')}
        </p>

        <h2>{t('terms.s6.title')}</h2>
        <p>{t('terms.s6.p')}</p>

        <h2>{t('terms.s7.title')}</h2>
        <p>{t('terms.s7.p')}</p>
        <ul>
          <li>{t('terms.s7.l1')}</li>
          <li>{t('terms.s7.l2')}</li>
          <li>{t('terms.s7.l3')}</li>
          <li>{t('terms.s7.l4')}</li>
        </ul>

        <h2>{t('terms.s8.title')}</h2>
        <ul>
          <li>{t('terms.s8.l1')}</li>
          <li>{t('terms.s8.l2')}</li>
          <li>{t('terms.s8.l3')}</li>
        </ul>

        <h2>{t('terms.s9.title')} <span className="legal__app-tag">Yantar</span></h2>
        <ul>
          <li>{t('terms.s9.l1')}</li>
          <li>{t('terms.s9.l2')}</li>
          <li>{t('terms.s9.l3')}</li>
        </ul>

        <h2>{t('terms.s10.title')}</h2>
        <p>
          {t('terms.s10.p')} <a href="/privacy">{t('terms.s10.link')}</a>{t('terms.s10.p2')}
        </p>

        <h2>{t('terms.s11.title')}</h2>
        <ul>
          <li>{t('terms.s11.l1')}</li>
          <li>{t('terms.s11.l2')}</li>
          <li>{t('terms.s11.l3')}</li>
        </ul>

        <h2>{t('terms.s12.title')}</h2>
        <p>{t('terms.s12.p')}</p>
        <ul>
          <li>{t('terms.s12.l1')}</li>
          <li>{t('terms.s12.l2')}</li>
          <li>{t('terms.s12.l3')}</li>
          <li>{t('terms.s12.l4')}</li>
          <li>{t('terms.s12.l5')}</li>
        </ul>

        <h2>{t('terms.s13.title')}</h2>
        <p>{t('terms.s13.p')}</p>

        <h2>{t('terms.s14.title')}</h2>
        <p>{t('terms.s14.p')}</p>

        <h2>{t('terms.s15.title')}</h2>
        <p>{t('terms.s15.p')}</p>

        <h2>{t('terms.s16.title')}</h2>
        <p>{t('terms.s16.p')}</p>

        <h2>{t('terms.s17.title')}</h2>
        <p>{t('terms.s17.p')}</p>
        <p>
          <strong>{t('terms.email')}</strong> <a href="mailto:support@griselhub.com">support@griselhub.com</a><br />
          <strong>{t('terms.website')}</strong> griselhub.com
        </p>
      </div>
    </div>
  )
}

export default TermsOfService
