import { createContext, useContext, useState, useCallback } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

const SUPPORTED_LANGS = ['en', 'es', 'fr', 'ca', 'de', 'hu', 'it', 'pt']

function detectLanguage() {
  const saved = localStorage.getItem('griselhub-lang')
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved
  const browser = navigator.language?.slice(0, 2).toLowerCase()
  if (browser && SUPPORTED_LANGS.includes(browser)) return browser
  return 'en'
}

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ca', label: 'Català', flag: '🏳️' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'hu', label: 'Magyar', flag: '🇭🇺' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
]

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage)

  const setLang = useCallback((code) => {
    setLangState(code)
    localStorage.setItem('griselhub-lang', code)
    document.documentElement.lang = code
  }, [])

  const t = useCallback((key) => {
    return translations[lang]?.[key] || translations.en[key] || key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
