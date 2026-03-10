import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

function PrivacyPolicy() {
  const { t } = useLanguage()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal">
      <div className="legal__inner">
        <h1>{t('privacy.title')}</h1>
        <p className="legal__meta">
          <strong>GriselHub</strong> &middot; {t('privacy.meta')} &middot; {t('privacy.effective')}
        </p>
        <p className="legal__note" dangerouslySetInnerHTML={{ __html: t('privacy.scope') }} />

        <hr />

        <h2>{t('privacy.s1.title')}</h2>
        <p>{t('privacy.s1.p1')}</p>
        <p>
          <strong>{t('privacy.s1.contact')}</strong> support@griselhub.com<br />
          <strong>{t('privacy.s1.country')}</strong> Spain
        </p>

        <h2>{t('privacy.s2.title')}</h2>

        <h3>{t('privacy.s2.1.title')}</h3>
        <p>{t('privacy.s2.1.p')}</p>

        <h3>{t('privacy.s2.2.title')}</h3>
        <p>{t('privacy.s2.2.p')}</p>
        <ul>
          <li><strong>{t('privacy.s2.2.health')}</strong> {t('privacy.s2.2.healthDetail')}</li>
          <li><strong>{t('privacy.s2.2.finance')}</strong> {t('privacy.s2.2.financeDetail')}</li>
        </ul>

        <h3>{t('privacy.s2.3.title')} <span className="legal__app-tag">Yantar</span></h3>
        <p>{t('privacy.s2.3.p')}</p>
        <ul>
          <li><strong>{t('privacy.s2.3.read')}</strong> {t('privacy.s2.3.readDetail')}</li>
          <li><strong>{t('privacy.s2.3.write')}</strong> {t('privacy.s2.3.writeDetail')}</li>
        </ul>
        <p dangerouslySetInnerHTML={{ __html: t('privacy.s2.3.p2') }} />

        <h3>{t('privacy.s2.4.title')}</h3>
        <p>{t('privacy.s2.4.p')}</p>

        <h3>{t('privacy.s2.5.title')}</h3>
        <p>{t('privacy.s2.5.p')}</p>

        <h3>{t('privacy.s2.6.title')}</h3>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s2.6.l1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s2.6.l2') }} />
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s2.6.l3') }} />
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s2.6.l4') }} />
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s2.6.l5') }} />
        </ul>

        <h2>{t('privacy.s3.title')}</h2>
        <table>
          <thead>
            <tr><th>{t('privacy.s3.table.purpose')}</th><th>{t('privacy.s3.table.data')}</th><th>{t('privacy.s3.table.legal')}</th></tr>
          </thead>
          <tbody>
            <tr><td>{t('privacy.s3.t1.purpose')}</td><td>{t('privacy.s3.t1.data')}</td><td>{t('privacy.s3.t1.legal')}</td></tr>
            <tr><td>{t('privacy.s3.t3.purpose')}</td><td>{t('privacy.s3.t3.data')}</td><td>{t('privacy.s3.t3.legal')}</td></tr>
            <tr><td>{t('privacy.s3.t4.purpose')}</td><td>{t('privacy.s3.t4.data')}</td><td>{t('privacy.s3.t4.legal')}</td></tr>
            <tr><td>{t('privacy.s3.t5.purpose')}</td><td>{t('privacy.s3.t5.data')}</td><td>{t('privacy.s3.t5.legal')}</td></tr>
          </tbody>
        </table>
        <p>{t('privacy.s3.p')}</p>

        <h2>{t('privacy.s4.title')}</h2>

        <p>{t('privacy.s4.p')}</p>

        <h2>{t('privacy.s5.title')}</h2>
        <p>{t('privacy.s5.p')}</p>
        <table>
          <thead>
            <tr><th>{t('privacy.s5.table.service')}</th><th>{t('privacy.s5.table.provider')}</th><th>{t('privacy.s5.table.purpose')}</th><th>{t('privacy.s5.table.apps')}</th></tr>
          </thead>
          <tbody>
            <tr><td>App Store / StoreKit</td><td>Apple</td><td>{t('privacy.s5.t1')}</td><td>{t('privacy.s5.all')}</td></tr>
            <tr><td>HealthKit</td><td>Apple</td><td>{t('privacy.s5.t2')}</td><td>Yantar</td></tr>
            <tr><td>CloudKit / iCloud</td><td>Apple</td><td>{t('privacy.s5.t3')}</td><td>{t('privacy.s5.all')}</td></tr>
            <tr><td>ActivityKit</td><td>Apple</td><td>{t('privacy.s5.t4')}</td><td>Yantar</td></tr>
            <tr><td>WidgetKit</td><td>Apple</td><td>{t('privacy.s5.t5')}</td><td>{t('privacy.s5.all')}</td></tr>
            <tr><td>UserNotifications</td><td>Apple</td><td>{t('privacy.s5.t6')}</td><td>{t('privacy.s5.all')}</td></tr>
          </tbody>
        </table>
        <p>{t('privacy.s5.bottom')}</p>

        <h2>{t('privacy.s6.title')}</h2>
        <p>{t('privacy.s6.p')}</p>

        <h2>{t('privacy.s7.title')}</h2>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s7.l1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s7.l3') }} />
        </ul>

        <h2>{t('privacy.s8.title')}</h2>
        <p>{t('privacy.s8.p')}</p>

        <h2>{t('privacy.s9.title')}</h2>
        <p>{t('privacy.s9.p')}</p>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s9.l1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s9.l2') }} />
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s9.l3') }} />
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s9.l4') }} />
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s9.l5') }} />
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s9.l6') }} />
          <li dangerouslySetInnerHTML={{ __html: t('privacy.s9.l7') }} />
        </ul>
        <p>{t('privacy.s9.bottom')} <a href="mailto:support@griselhub.com">support@griselhub.com</a>.</p>

        <h2>{t('privacy.s10.title')}</h2>
        <p>{t('privacy.s10.p')}</p>

        <h2>{t('privacy.s11.title')}</h2>
        <p>{t('privacy.s11.p')}</p>

        <h2>{t('privacy.s12.title')}</h2>
        <p>{t('privacy.s12.p')}</p>
        <p>
          <strong>{t('privacy.email')}</strong> <a href="mailto:support@griselhub.com">support@griselhub.com</a><br />
          <strong>{t('privacy.website')}</strong> griselhub.com
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
