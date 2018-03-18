export type I18nLocale = 'ru' | 'en';

export interface I18nStoreState {
  locales: I18nLocale[];
  locale: I18nLocale;
}
