
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enCommon from '../locales/en/common.json';
import enSessions from '../locales/en/sessions.json';
import esCommon from '../locales/es/common.json';
import esSessions from '../locales/es/sessions.json';
import frCommon from '../locales/fr/common.json';
import frSessions from '../locales/fr/sessions.json';
import arCommon from '../locales/ar/common.json';
import arSessions from '../locales/ar/sessions.json';

const resources = {
  en: {
    common: enCommon,
    sessions: enSessions,
  },
  es: {
    common: esCommon,
    sessions: esSessions,
  },
  fr: {
    common: frCommon,
    sessions: frSessions,
  },
  ar: {
    common: arCommon,
    sessions: arSessions,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: false,
    
    // Use namespaces
    defaultNS: 'common',
    ns: ['common', 'sessions'],
    
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
