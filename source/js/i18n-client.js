import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import LocizeBackend from 'i18next-locize-backend';

i18n
  .use(LocizeBackend)
  .use(LanguageDetector)
  .init({
    whitelist: ['en', 'pt'],
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    interpolation: {},

    react: {
      wait: true,
    },
  });

i18n.addResourceBundle('en', 'common', JSON.parse(JSON.stringify(require('../locales/en/common.json'))), true);
i18n.addResourceBundle('pt', 'common', JSON.parse(JSON.stringify(require('../locales/pt/common.json'))), true);

export default i18n;
