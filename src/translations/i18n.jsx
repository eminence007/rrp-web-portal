import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATION_EN } from "./english/translations";
import { TRANSALTION_HI } from "./hindi/translations";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATION_EN,
      },
      hi: {
        translation: TRANSALTION_HI,
      },
    },
  });

i18next.changeLanguage("hi"); //this function is used to choose the language
