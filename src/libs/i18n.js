import { createI18n } from "vue-i18n";
import { languages, defaultLang } from "../settings/lang/main.js";

const messages = Object.assign(languages)
export const i18n = createI18n({
   legacy: false,
   locale: defaultLang,
   fallbackLocale: 'en',
   messages
})