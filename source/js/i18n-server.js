import i18n from 'i18next';
import Backend from 'i18next-node-fs-backend';
import { LanguageDetector } from 'i18next-express-middleware';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    whitelist: ['en', 'pt'],
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    interpolation: {},
  });

i18n.addResourceBundle('en', 'common', JSON.parse(JSON.stringify(require('../locales/en/common.json'))), true);
i18n.addResourceBundle('pt', 'common', JSON.parse(JSON.stringify(require('../locales/pt/common.json'))), true);


export default i18n;
