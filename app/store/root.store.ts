import axios from 'axios';
import { Action as vAction, Getter as vGetter, Mutation as vMutation, namespace, State as vState } from 'vuex-class';

import { Context } from '../typings/nuxt';
import { State as rootState } from './root.storeState';
import { action, decorator, getter, keymirror, mutation } from './vuexTypes';
import { ShopEntity } from '../shared/types/shop.entity';
import { CityEntity } from '../shared/types/city.entity';

const state = (): rootState => ({
  baseApiUrl: null,
  shop: null,
  city: null
});
const pureState = state();

const getters = getter(pureState, {});

const mutations = mutation(pureState, {
  baseApiUrl(state, baseApiUrl: string) {
    state.baseApiUrl = baseApiUrl;
  },
  shop(state, shop: ShopEntity) {
    state.shop = shop;
  },
  city(state, city: CityEntity) {
    state.city = city;
  }
});

const actions = action(pureState, {
  async nuxtServerInit({ commit, dispatch }, ctx: Context) {
    commit(types.mutation.baseApiUrl, ctx.env.baseApiUrl);
    const city = (ctx.req ? (ctx.req.headers as any).host : window.location.host.split(':')[0]).split('.')[0];
    const res = await Promise.all([
      axios.get(ctx.env.baseApiUrl + 'shop/byDomain', { params: { domain: ctx.env.shopDomain } }),
      axios.get(ctx.env.baseApiUrl + 'city/byNameTranslit', { params: { nameTranslit: city } })
    ]);
    commit(types.mutation.shop, res[0].data);
    commit(types.mutation.city, res[1].data);
    await dispatch('Category/init');
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
