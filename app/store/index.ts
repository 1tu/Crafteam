import { CartStore } from './modules/cart/cart.store';
import { CategoryStore } from './modules/category/category.store';
import { FilteredPageStore } from './modules/filteredPage/filteredPage.store';
import { ProductStore } from './modules/product/product.store';
import { RootStore } from './root.store';

export const modules = {
  [CartStore.name]: CartStore,
  [CategoryStore.name]: CategoryStore,
  [ProductStore.name]: ProductStore,
  [FilteredPageStore.name]: FilteredPageStore
};

export const state = RootStore.state;
export const getters = RootStore.getters;
export const actions = RootStore.actions;
export const mutations = RootStore.mutations;
