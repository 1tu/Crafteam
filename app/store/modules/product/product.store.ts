import { Action as vAction, Getter as vGetter, Mutation as vMutation, namespace, State as vState } from 'vuex-class';
import axios from 'axios';

import { action, decorator, getter, keymirror, mutation } from '../../vuexTypes';
import { ProductStoreState } from './Product.storeState';
import { ProductEntity } from '../../../shared/types/Product.entity';
import { Context } from '../../../typings/nuxt';
import { RootTypes } from '../../root.store';

const name = 'Product';
const state = (): ProductStoreState => ({
  isListLoading: false,
  list: [],
  item: null
});
const pureState = state();

const getters = getter(pureState, {
  listByPage(state) {
    return (pageNum: string, perPage: string) => {
      const start = (parseInt(pageNum) - 1) * parseInt(perPage);
      return state.list.slice(start, start + parseInt(perPage));
    };
  },
  pageCount(state) {
    return (perPage: number) => Math.ceil(state.list.length / perPage);
  }
});

const mutations = mutation(pureState, {
  list(state, list: ProductEntity[]) {
    state.list = list;
  },
  item(state, item: ProductEntity) {
    state.item = item;
  },
  listLoading(state, isLoading: boolean) {
    state.isListLoading = isLoading;
  }
});

const actions = action(pureState, {
  async getItemByNameTranslit({ commit, rootGetters }, nameTranslit: string) {
    const res = await axios.get(rootGetters.baseApiUrl + 'product/byNameTranslit', { params: { nameTranslit } });
    commit(types.mutation.item, res.data);
  },
  async getListByFilter({ commit, dispatch, rootGetters }, { categoryIdList, propertyKeyValueList }) {
    commit(types.mutation.list, []);
    commit(types.mutation.listLoading, true);
    const res = await axios.get(rootGetters.baseApiUrl + 'product/listByFilter', { params: { categoryIdList, propertyKeyValueList } });
    commit(types.mutation.list, res.data);
    commit(types.mutation.listLoading, false);
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
export const ProductState = decorator(namespace(name, vState), types.state);
export const ProductGetter = decorator(namespace(name, vGetter), types.getter);
export const ProductMutation = decorator(namespace(name, vMutation), types.mutation);
export const ProductAction = decorator(namespace(name, vAction), types.action);
