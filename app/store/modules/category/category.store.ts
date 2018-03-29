import { Action as vAction, Getter as vGetter, Mutation as vMutation, namespace, State as vState } from 'vuex-class';
import axios from 'axios';

import { action, decorator, getter, keymirror, mutation } from '../../vuexTypes';
import { CategoryStoreState, PropItem } from './Category.storeState';
import { CategoryEntity } from '../../../shared/types/category.entity';
import { Context } from '../../../typings/nuxt';
import { RootTypes } from '../../root.store';
import { tText } from '../../../shared/helpers/tText';

const name = 'Category';
const state = (): CategoryStoreState => ({
  currentBaseId: null,
  listBase: [],
  list: [],
  item: null,
  propList: []
});
const pureState = state();

const getters = getter(pureState, {
  idByNameTranslit(state) {
    return (name: string) => (state.listBase.find(c => c.nameTranslit === name) || ({} as CategoryEntity)).id;
  },
  categoryById(state) {
    return (id: number) => state.listBase.concat(state.list).find(c => c.id === id);
  },
  head(state, getters, rootState, rootGetters) {
    return rootGetters.head(state.item.seoList[0].seoMeta);
  }
});

const mutations = mutation(pureState, {
  listBase(state, listBase: CategoryEntity[]) {
    state.listBase = listBase;
  },
  list(state, list: CategoryEntity[]) {
    state.list = list;
  },
  item(state, item: CategoryEntity) {
    state.item = item;
  },
  propList(state, propList: PropItem[]) {
    state.propList = propList;
  },
  currentBaseId(state, categoryId: number) {
    state.currentBaseId = categoryId;
  }
});

const actions = action(pureState, {
  async init({ commit, rootState }) {
    const res = await axios.get(rootState.baseApiUrl + 'category/listBase');
    commit(types.mutation.listBase, res.data);
    return res.data;
  },
  async getListByBase({ commit, dispatch, rootState }, categoryId: number) {
    commit(types.mutation.currentBaseId, categoryId);
    const res = await axios.get(rootState.baseApiUrl + 'category/listByBaseId', { params: { categoryId } });
    commit(types.mutation.list, res.data);
    await dispatch(types.action.getPropList);
  },
  async getPropList({ commit, state, rootState }) {
    const res = await axios.get(rootState.baseApiUrl + 'property/listCategoryIds', {
      params: { categoryIds: state.list.map(c => c.id).concat(state.currentBaseId) }
    });
    commit(types.mutation.propList, res.data);
    return res.data;
  },
  async getItemByName({ commit, rootState }, nameTranslit: number) {
    const res = await axios.get(rootState.baseApiUrl + 'category/byNameTranslit', { params: { nameTranslit } });
    commit(types.mutation.item, res.data);
    return res.data;
  }
});

const types = {
  state: keymirror(pureState),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions)
};

export const CategoryStore = { namespaced: true, name, state, getters, mutations, actions };

export const CategoryTypes = types;
export const CategoryState = decorator(namespace(name, vState), types.state);
export const CategoryGetter = decorator(namespace(name, vGetter), types.getter);
export const CategoryMutation = decorator(namespace(name, vMutation), types.mutation);
export const CategoryAction = decorator(namespace(name, vAction), types.action);
