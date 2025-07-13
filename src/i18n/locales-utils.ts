// Utility functions for working with exported locales
import { allTranslations, en, my } from "../locales";
import type { Namespace, TranslationObject } from "./types";

// Get a specific translation by language and namespace
export const getTranslation = (
  language: "en" | "my",
  namespace: Namespace,
  key: string
): string => {
  const translations = allTranslations[language];
  if (!translations || !translations[namespace]) {
    console.warn(`Translation not found for ${language}.${namespace}.${key}`);
    return key; // Return the key as fallback
  }

  const namespaceTranslations = translations[namespace] as TranslationObject;
  return namespaceTranslations[key] || key;
};

// Get all translations for a specific namespace across all languages
export const getNamespaceTranslations = (namespace: Namespace) => {
  return {
    en: en[namespace],
    my: my[namespace],
  };
};

// Get available translation keys for a namespace
export const getTranslationKeys = (
  language: "en" | "my",
  namespace: Namespace
): string[] => {
  const translations = allTranslations[language];
  if (!translations || !translations[namespace]) {
    return [];
  }

  const namespaceTranslations = translations[namespace] as TranslationObject;
  return Object.keys(namespaceTranslations);
};

// Validate that all languages have the same keys for a namespace
export const validateNamespaceKeys = (namespace: Namespace): boolean => {
  const enKeys = getTranslationKeys("en", namespace);
  const myKeys = getTranslationKeys("my", namespace);

  if (enKeys.length !== myKeys.length) {
    console.warn(
      `Key count mismatch in namespace ${namespace}: EN(${enKeys.length}) vs MY(${myKeys.length})`
    );
    return false;
  }

  const missingInMy = enKeys.filter((key) => !myKeys.includes(key));
  const missingInEn = myKeys.filter((key) => !enKeys.includes(key));

  if (missingInMy.length > 0) {
    console.warn(`Keys missing in MY for ${namespace}:`, missingInMy);
    return false;
  }

  if (missingInEn.length > 0) {
    console.warn(`Keys missing in EN for ${namespace}:`, missingInEn);
    return false;
  }

  return true;
};

// Export the direct access to translations
export { allTranslations, en, my };
export * from "../locales";
