import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/trans.json';
import es from './locales/es/trans.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
        },
        lng: localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : es , // idioma por defecto
        fallbackLng: localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : es, // idioma de respaldo
       
    });

export default i18n;