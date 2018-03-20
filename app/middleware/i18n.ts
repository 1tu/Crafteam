import { I18nStore, I18nTypes } from '../store/modules/i18n/i18n.store';
import { I18nLocale } from '../store/modules/i18n/i18n.storeState';

// From: https://nuxtjs.org/examples/i18n

export default ({ isHMR, app, store, route, params, error, redirect }) => {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return;
  // Get locale from params
  const locale: I18nLocale = params.lang || 'ru';
  if (store.state.I18n.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 });
  }
  // Set locale
  store.commit(`${I18nStore.name}/${I18nTypes.mutation.locale}`, locale);
  app.i18n.locale = store.state.I18n.locale;
  // If route is /en/... -> redirect to /...
  if (locale === 'en' && route.fullPath.indexOf('/en') === 0) {
    return redirect(route.fullPath.replace(/^\/en/, '/'));
  }
};
