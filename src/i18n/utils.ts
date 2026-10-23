import { es, type Dict } from './es';
import { en } from './en';

export type Locale = 'es' | 'en';

export const locales: Locale[] = ['es', 'en'];

const dictionaries: Record<Locale, Dict> = { es, en };

export const t = (locale: Locale): Dict => dictionaries[locale];

/** Path of the home page for a locale ('/' for Spanish, '/en/' for English). */
export const homePath = (locale: Locale): string => (locale === 'es' ? '/' : '/en/');

export const otherLocale = (locale: Locale): Locale => (locale === 'es' ? 'en' : 'es');

export type Localized<T = string> = Record<Locale, T>;
