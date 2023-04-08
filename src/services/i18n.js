import i18n from "i18next";
import { en, id } from "@languages";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: async (cb) => {
    const lang = await AsyncStorage.getItem("language");

    if (lang) {
      return cb(lang);
    } else {
      await AsyncStorage.setItem("language", "en");
      return cb("en");
    }
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

export default i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    compatibilityJSON: "v3",
    resources: {
      en: en,
      id: id,
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Path: src\services\i18n.js
