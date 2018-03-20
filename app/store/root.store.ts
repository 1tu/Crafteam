import { Action as vAction, Getter as vGetter, Mutation as vMutation, namespace, State as vState } from 'vuex-class';

import { action, decorator, getter, keymirror, mutation } from './vuexTypes';
import { State as rootState } from './root.storeState';

const state = (): rootState => ({
  name: 'Default App'
});
const pureState = state();

const getters = getter(pureState, {
  todayName(state): string {
    return state.name + ' ' + Date.now();
  }
});

const mutations = mutation(pureState, {
  setAppName(state, name: string): void {
    state.name = name;
  }
});

const actions = action(pureState, {
  nuxtServerInit({ commit }): void {
    // Fired when app starts
  },

  changeName({ commit }, name: string): void {
    commit(types.mutation.setAppName, name);
  }
});

const types = {
  state: keymirror(pureState),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions)
};

export const RootStore = { state, getters, mutations, actions };

export const RootTypes = types;
export const RootState = decorator(namespace(null, vState), types.state);
export const RootGetter = decorator(namespace(null, vGetter), types.getter);
export const RootMutation = decorator(namespace(null, vMutation), types.mutation);
export const RootAction = decorator(namespace(null, vAction), types.action);
