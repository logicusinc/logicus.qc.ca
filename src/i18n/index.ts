import fr from './fr.json';
import en from './en.json';

const translations = { fr, en } as const;

export type Locale = keyof typeof translations;
export type TranslationData = typeof fr;

export function getTranslations(locale: Locale): TranslationData {
  return translations[locale];
}

export const locales: Locale[] = ['fr', 'en'];
export const defaultLocale: Locale = 'fr';
