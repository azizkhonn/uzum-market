import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uz from './translation/uz/translationUz.json';
import ru from './translation/ru/translationRu.json';

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: uz
    },
    ru: {
      translation: ru
    }
  },
  lng: 'uz', 
  fallbackLng: 'uz',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
