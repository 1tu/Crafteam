import { Action as vAction, Getter as vGetter, Mutation as vMutation, namespace, State as vState } from 'vuex-class';
import axios from 'axios';

import { action, decorator, getter, keymirror, mutation } from '../../vuexTypes';
import { FilteredPageStoreState } from './FilteredPage.storeState';
import { FilteredPageEntity } from '../../../shared/types/filteredPage.entity';
import { Context } from '../../../typings/nuxt';
import { RootTypes } from '../../root.store';
import { ProductTypes } from '../product';

const name = 'FilteredPage';
const state = (): FilteredPageStoreState => ({
  list: [],
  item: null
});
const pureState = state();

const getters = getter(pureState, {
  head(state, getters, rootState, rootGetters) {
    return rootGetters.head(state.item.seoMeta);
  }
});

const mutations = mutation(pureState, {
  list(state, list: FilteredPageEntity[]) {
    state.list = list;
  },
  item(state, item: FilteredPageEntity) {
    state.item = item;
  }
});

const actions = action(pureState, {
  async getItemByUrl({ commit, rootState }, url: string) {
    const res = await axios.get(rootState.baseApiUrl + 'filteredPage/byUrl', { params: { url } });
    commit(types.mutation.item, res.data);
  },
  async getListByCategoryId({ commit, rootState }, categoryId: number) {
    const res = await axios.get(rootState.baseApiUrl + 'filteredPage/listByCategoryId', { params: { categoryId } });
    commit(types.mutation.list, res.data);
  }
});

const types = {
  state: keymirror(pureState),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions)
};

export const FilteredPageStore = { namespaced: true, name, state, getters, mutations, actions };

export const FilteredPageTypes = types;
export const FilteredPageState = decorator(namespace(name, vState), types.state);
export const FilteredPageGetter = decorator(namespace(name, vGetter), types.getter);
export const FilteredPageMutation = decorator(namespace(name, vMutation), types.mutation);
export const FilteredPageAction = decorator(namespace(name, vAction), types.action);
