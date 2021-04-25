import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationDE from "./locales/de/translation.json";

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
    de: {
        translation: translationDE,
    },
};

i18n.use(reactI18nextModule).init({
    resources,
    lng: "en",

    keySeparator: false,

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
