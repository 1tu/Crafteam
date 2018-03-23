import { Action as vAction, Getter as vGetter, Mutation as vMutation, namespace, State as vState } from 'vuex-class';
import axios from 'axios';

import { action, decorator, getter, keymirror, mutation } from '../../vuexTypes';
import { ProductStoreState } from './Product.storeState';
import { ProductEntity } from '../../../shared/types/Product.entity';
import { Context } from '../../../typings/nuxt';
import { RootTypes } from '../../root.store';

const name = 'Product';
const state = (): ProductStoreState => ({
  list: [],
  item: null
});
const pureState = state();

const getters = getter(pureState, {});

const mutations = mutation(pureState, {
  list(state, list: ProductEntity[]) {
    state.list = list;
  },
  item(state, item: ProductEntity) {
    state.item = item;
  }
});

const actions = action(pureState, {
  async getItemById({ commit, rootState }, id: number) {
    const res = await axios.get(rootState.baseApiUrl + 'product/byId', { params: { id } });
    commit(types.mutation.item, res.data);
  },
  async getListByFilter({ commit, dispatch, rootState }, { categoryIds, propKeyValues }) {
    const res = await axios.get(rootState.baseApiUrl + 'product/listByFilter', { params: { categoryIds, propKeyValues } });
    commit(types.mutation.list, res.data);
  }
});

const types = {
  state: keymirror(pureState),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions)
};

export const ProductStore = { namespaced: true, name, state, getters, mutations, actions };

export const ProductTypes = types;
export const ProductState = decorator(namespace(null, vState), types.state);
export const ProductGetter = decorator(namespace(null, vGetter), types.getter);
export const ProductMutation = decorator(namespace(null, vMutation), types.mutation);
export const ProductAction = decorator(namespace(null, vAction), types.action);
