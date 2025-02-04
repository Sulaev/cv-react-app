import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import en from "./en.json"

console.log('en', en)


i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: en
      },
    },
    lng: "en", 
    fallbackLng: "en",
  });

