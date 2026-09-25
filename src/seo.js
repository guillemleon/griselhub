// Single source of truth for SEO metadata. Used by the build-time prerender
// (scripts/prerender.mjs) to bake each page's <head>, and by the app to keep
// document.title in sync during client-side navigation.
import { translations } from './i18n/translations.js'

export const SITE_URL = 'https://griselhub.com'
export const CONTACT_EMAIL = 'support@griselhub.com'

// Route → head metadata. Titles ≤ ~60 chars, descriptions ≤ ~155 chars.
export const PAGES = {
  '/': {
    title: 'griselhub — Privacy-first iOS apps: Fulcrum, Crescia & Yantar',
    description:
      'Independent iOS app studio. Fulcrum (gym, calisthenics & calories), Crescia (personal finance) and Yantar (intermittent fasting). No accounts, no tracking.',
  },
  '/privacy': {
    title: 'Privacy Policy — griselhub',
    description:
      'How griselhub apps (Fulcrum, Crescia, Yantar) handle your data: stored on your device or your own iCloud, no accounts, no analytics SDKs, no ads.',
  },
  '/terms': {
    title: 'Terms of Service — griselhub',
    description:
      'Terms of Service for Fulcrum, Crescia and Yantar, the iOS apps published by griselhub: subscriptions, free trials, health disclaimers and more.',
  },
  '/support': {
    title: 'Support & FAQ — griselhub',
    description:
      'Get help with Fulcrum, Crescia and Yantar: answers to common questions about subscriptions, iCloud sync, privacy and contacting griselhub support.',
  },
}

export const NOT_FOUND = {
  title: 'Page not found — griselhub',
  description: 'This page does not exist. Explore Fulcrum, Crescia and Yantar, the privacy-first iOS apps by griselhub.',
}

// The apps, for structured data (kept in sync with the list on the home page).
const APPS = [
  {
    name: 'Fulcrum',
    key: 'fulcrum',
    category: 'HealthApplication',
    icon: '/icons/fulcrum-icon.png',
    url: 'https://apps.apple.com/es/app/fulcrum-gym-y-calistenia/id6804208652',
  },
  {
    name: 'Crescia',
    key: 'crescia',
    category: 'FinanceApplication',
    icon: '/icons/crescia_icon.png',
    url: 'https://apps.apple.com/es/app/crescia/id6760351477',
  },
  {
    name: 'Yantar',
    key: 'yantar',
    category: 'HealthApplication',
    icon: '/icons/yantar-icon.png',
    url: 'https://apps.apple.com/es/app/yantar/id6760302054',
  },
]

/** schema.org JSON-LD graph: the studio, the website, and the three apps. */
export function structuredData(path) {
  const org = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'griselhub',
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    email: CONTACT_EMAIL,
    description: 'Independent studio building privacy-first iOS apps.',
  }
  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'griselhub',
    inLanguage: 'en',
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
  const graph = [org, website]
  if (path === '/') {
    for (const app of APPS) {
      graph.push({
        '@type': 'MobileApplication',
        name: app.name,
        operatingSystem: 'iOS',
        applicationCategory: app.category,
        description: translations.en[`${app.key}.description`],
        image: `${SITE_URL}${app.icon}`,
        installUrl: app.url,
        url: app.url,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
        publisher: { '@id': `${SITE_URL}/#organization` },
      })
    }
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

/** Metadata for a pathname (falls back to the 404 entry). */
export function metaFor(pathname) {
  return PAGES[pathname] ?? NOT_FOUND
}
