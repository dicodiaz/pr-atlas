import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { storage } from '@/lib/storage'

import en from './locales/en.json'
import es from './locales/es.json'

const LANG_KEY = 'pr-atlas:language'

void i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, es: { translation: es } },
  lng: storage.get(LANG_KEY, navigator.language.startsWith('es') ? 'es' : 'en'),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export { LANG_KEY }
export default i18n
