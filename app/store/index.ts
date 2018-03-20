import { RootStore } from './root.store';
import { CartStore } from './modules/cart/cart.store';

export const modules = {
  [CartStore.name]: CartStore
};

export const state = RootStore.state;
export const getters = RootStore.getters;
export const actions = RootStore.actions;
export const mutations = RootStore.mutations;
