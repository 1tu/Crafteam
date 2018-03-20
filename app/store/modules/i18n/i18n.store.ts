import { Action as vAction, Getter as vGetter, Mutation as vMutation, namespace, State as vState } from 'vuex-class';

import { action, decorator, getter, keymirror, mutation } from '../../vuexTypes';
import { I18nStoreState, I18nLocale } from './i18n.storeState';

const name = 'I18n';
const state = (): I18nStoreState => ({
  locales: ['en', 'ru'],
  locale: 'ru'
});
const pureState = state();

const getters = getter(pureState, {});

const mutations = mutation(pureState, {
  locale(state, locale: I18nLocale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  }
});

const actions = action(pureState, {});

const types = {
  state: keymirror(pureState),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions)
};

export const I18nStore = { namespaced: true, name, state, getters, mutations, actions };

export const I18nTypes = types;
export const I18nState = decorator(namespace(null, vState), types.state);
export const I18nGetter = decorator(namespace(null, vGetter), types.getter);
export const I18nMutation = decorator(namespace(null, vMutation), types.mutation);
export const I18nAction = decorator(namespace(null, vAction), types.action);
