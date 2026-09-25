// The apps, in display order. Single source for the home list, the detail
// pages (/fulcrum, /crescia, /yantar) and SEO metadata/structured data.
// Plain JS (no JSX) so scripts/prerender.mjs can import it in Node.

export const APPS = [
  {
    slug: 'fulcrum',
    name: 'Fulcrum',
    icon: '/icons/fulcrum-icon.png',
    accentColor: '#a6dd7c',
    category: 'HealthApplication',
    platforms: 'iPhone · Apple Watch',
    featureKeys: ['fulcrum.f.routines', 'fulcrum.f.exercises', 'fulcrum.f.scan', 'fulcrum.f.watch', 'fulcrum.f.healthkit', 'fulcrum.f.calories', 'fulcrum.f.progress', 'fulcrum.f.languages'],
    appStoreUrl: 'https://apps.apple.com/es/app/fulcrum-gym-y-calistenia/id6804208652',
    screenshots: 10,
    seo: {
      title: 'Fulcrum — Gym, calisthenics & calorie tracker for iPhone | griselhub',
      description: 'Fulcrum: build calisthenics and gym routines, run sessions on Apple Watch and track calories — with an AI meal scanner. No account, data on your device.',
    },
  },
  {
    slug: 'crescia',
    name: 'Crescia',
    icon: '/icons/crescia_icon.png',
    accentColor: '#4a90d1',
    category: 'FinanceApplication',
    platforms: 'iPhone',
    featureKeys: ['crescia.f.budget', 'crescia.f.categories', 'crescia.f.piggy', 'crescia.f.sync', 'crescia.f.widgets', 'crescia.f.currency'],
    appStoreUrl: 'https://apps.apple.com/es/app/crescia/id6760351477',
    screenshots: 7,
    seo: {
      title: 'Crescia — Daily budget & expense tracker for iPhone | griselhub',
      description: 'Crescia: a daily budget and expense tracker for iPhone with savings goals, piggy banks, widgets and iCloud sync. No account, no ads, no tracking.',
    },
  },
  {
    slug: 'yantar',
    name: 'Yantar',
    icon: '/icons/yantar-icon.png',
    accentColor: '#d1734a',
    category: 'HealthApplication',
    platforms: 'iPhone',
    featureKeys: ['yantar.f.timer', 'yantar.f.stages', 'yantar.f.healthkit', 'yantar.f.live', 'yantar.f.widgets', 'yantar.f.academy'],
    appStoreUrl: 'https://apps.apple.com/es/app/yantar/id6760302054',
    screenshots: 5,
    seo: {
      title: 'Yantar — Intermittent fasting timer for iPhone | griselhub',
      description: 'Yantar: an intermittent fasting timer for iPhone with real-time body stages, Apple Health integration, widgets and a fasting academy. Private by design.',
    },
  },
]

export const appBySlug = (slug) => APPS.find((a) => a.slug === slug)

/** Screenshot set for a UI language: Spanish/Catalan get the Spanish listing, others English. */
export function screenshotUrls(app, lang) {
  const set = lang === 'es' || lang === 'ca' ? 'es' : 'en'
  return Array.from({ length: app.screenshots }, (_, i) => `/apps/${app.slug}/${set}-${String(i + 1).padStart(2, '0')}.jpg`)
}
