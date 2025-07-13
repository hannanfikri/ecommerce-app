import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { ALL_NAMESPACES } from "./namespaces";
import { allTranslations } from "../locales";

// Supported languages
export const supportedLanguages = {
  en: "English",
  my: "Bahasa Malaysia",
};

// Default namespace list
export const namespaces = ALL_NAMESPACES;

// Resources configuration
const resources = allTranslations;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Language settings
    fallbackLng: "en",
    supportedLngs: Object.keys(supportedLanguages),
    debug: import.meta.env.DEV,

    // Namespace configuration
    ns: namespaces,
    defaultNS: "common",

    // Use preloaded resources instead of backend loading
    resources,

    // React specific options
    interpolation: {
      escapeValue: false, // React already does escaping
    },

    // Language detection options
    detection: {
      // Detection order - check localStorage first, then browser language, then HTML tag
      order: ["localStorage", "navigator", "htmlTag"],
      // Cache the selected language in localStorage
      caches: ["localStorage"],
      // Look for language in these places
      lookupLocalStorage: "i18nextLng",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    },

    // Performance and behavior options
    load: "languageOnly", // Load only language, not region (en instead of en-US)
    cleanCode: true, // Clean language codes

    // Pluralization
    pluralSeparator: "_",
    contextSeparator: "_",

    // Error handling
    saveMissing: import.meta.env.DEV, // Save missing keys in development
    missingKeyHandler: import.meta.env.DEV
      ? (lng, ns, key) => {
          console.warn(
            `Missing translation key: ${key} in namespace: ${ns} for language: ${lng}`
          );
        }
      : undefined,

    // React suspense support
    react: {
      useSuspense: false, // Disable suspense for SSR compatibility
    },
  });

// Helper function to get current language
export const getCurrentLanguage = () => i18n.language || "en";

// Helper function to change language
export const changeLanguage = (lng: string) => {
  return i18n.changeLanguage(lng);
};

// Helper function to get available languages
export const getAvailableLanguages = () => supportedLanguages;

export default i18n;
