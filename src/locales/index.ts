// Main locales index - exports all language translations
import enTranslations from "./en";
import myTranslations from "./my";

// Export individual namespace translations for each language
export * as enNamespaces from "./en";
export * as myNamespaces from "./my";

// Export all translations as a resources object for i18next
export const allTranslations = {
  en: enTranslations,
  my: myTranslations,
};

// Export individual languages with clear names
export { default as en } from "./en";
export { default as my } from "./my";

// Named exports
export { enTranslations, myTranslations };
