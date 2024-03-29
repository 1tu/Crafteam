import axios from 'axios';
import { Action as vAction, Getter as vGetter, Mutation as vMutation, namespace, State as vState } from 'vuex-class';

import { State as rootState } from './root.storeState';
import { action, decorator, getter, keymirror, mutation } from './vuexTypes';
import { ShopEntity } from '../shared/types/shop.entity';
import { CityEntity } from '../shared/types/city.entity';
import { Context } from '../typings/nuxt';
import { SeoMetaEntity } from '../shared/types/seoMeta.entity';
import { tText } from '../shared/helpers/tText.helper';
import { cityFromHost } from '../shared/helpers/cityFromHost.helper';

const state = (): rootState => ({
  crmUrl: null,
  baseUrl: null,
  shop: null,
  city: null
});
const pureState = state();

const getters = getter(pureState, {
  baseApiUrl(state) {
    return (process as any).client ? '/api/' : state.baseUrl + '/api/';
  },
  head(state) {
    return (meta: SeoMetaEntity) => {
      if (!meta) return {};
      return {
        title: tText(meta.title, state.city, meta),
        meta: [
          { hid: 'description', name: 'description', content: tText(meta.description, state.city, meta) },
          { hid: 'keywords', name: 'keywords', content: tText(meta.keywords, state.city, meta) }
        ]
      };
    };
  },
  tText(state) {
    return (text: string, meta: SeoMetaEntity) => tText(text, state.city, meta);
  }
});

const mutations = mutation(pureState, {
  baseUrl(state, baseUrl: string) {
    state.baseUrl = baseUrl;
  },
  crmUrl(state, crmUrl: string) {
    state.crmUrl = crmUrl;
  },
  shop(state, shop: ShopEntity) {
    state.shop = shop;
  },
  city(state, city: CityEntity) {
    state.city = city;
  }
});

const actions = action(pureState, {
  async nuxtServerInit({ getters, commit, dispatch }, ctx: Context) {
    commit(types.mutation.baseUrl, ctx.env.baseUrl);
    commit(types.mutation.crmUrl, ctx.env.crmUrl);
    const host = ctx.req ? (ctx.req.headers as any).host : window.location.host;
    const city = ctx.isDev ? host.split('.')[0] : cityFromHost(host);
    const res = await Promise.all([
      axios.get(getters.baseApiUrl + 'shop/byHost', { params: { host: 'craft.ru' } }),
      axios.get(getters.baseApiUrl + 'city/byNameTranslit', { params: { nameTranslit: city } })
    ]);
    if (!res[0].data.cityList.find(c => c.nameTranslit === city)) {
      ctx.error({ statusCode: 404, message: 'Нет такого города' });
    }
    commit(types.mutation.shop, res[0].data);
    commit(types.mutation.city, res[1].data);
    return dispatch('Category/init');
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
