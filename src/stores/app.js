import { watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { i18n } from "../settings/lang";

export const useAppStore = defineStore("app", () => {
  const theme = useStorage("userTheme", Telegram.WebApp.colorScheme ?? "light");
  const lang = useStorage(
    "userLang",
    Telegram.WebApp.initDataUnsafe.user?.language_code ?? "en",
  );

  const switchTheme = (color) => {
    if (!color) {
      theme.value = theme.value === "dark" ? "light" : "dark";
    } else {
      theme.value = color;
    }
  };

  const setUserLang = (locale) => {
    lang.value = locale;
  };

  watchEffect(() => {
    i18n.locale.value = lang.value;
  });

  return {
    theme,
    lang,
    switchTheme,
    setUserLang,
  };
});
