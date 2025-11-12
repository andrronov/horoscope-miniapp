import { computed } from "vue";
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

export const languages = { en, ru };
export const defaultLang = "en";

const instance = createI18n({
  legacy: false,
  locale: defaultLang,
  fallbackLocale: "en",
  globalInjection: true,
  messages: languages,
});

const locale = computed({
  get: () => instance.global.locale.value,
  set: (value) => (instance.global.locale.value = value),
});

export const i18n = {
  instance,
  locale,
  messages: languages,
};

export default instance;
