// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './langs/en/translation.tsx';
import seTranslation from './langs/se/translation.tsx';

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      se: { translation: seTranslation },
      en: { translation: enTranslation },
    },
    lng:'se',
    fallbackLng: 'se', // Fallback language if detection fails
    interpolation: { escapeValue: false },
  });

export default i18n;
