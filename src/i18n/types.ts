// i18n related types

export type SupportedLanguage = "en" | "my";

export type Namespace =
  | "header"
  | "footer"
  | "home"
  | "products"
  | "cart"
  | "common";

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  flag: string;
}

// Generic translation object type
export type TranslationObject = Record<string, string>;

export interface TranslationResources {
  [language: string]: {
    [namespace: string]: TranslationObject;
  };
}

// Translation function type
export type TFunction = (key: string, options?: any) => string;
