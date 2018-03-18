import { Action as vAction, Getter as vGetter, Mutation as vMutation, namespace, State as vState } from 'vuex-class';

import { action, decorator, getter, keymirror, mutation } from '../../vuexTypes';
import { CartStoreState, CartItem } from './cart.storeState';

const name = 'Cart';
const state = (): CartStoreState => ({
  productList: null
});
const pureState = state();

const getters = getter(pureState, {
  itemById(state) {
    return (id: number) => state.productList.find(i => i.product.id === id);
  }
});

const mutations = mutation(pureState, {
  addItem(state, item: CartItem) {
    state.productList.push(item);
  }
});

const actions = action(pureState, {});

const types = {
  state: keymirror(pureState),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions)
};

export const CartStore = { namespaced: true, name, state, getters, mutations, actions };

export const CartTypes = types;
export const CartState = decorator(namespace(null, vState), types.state);
export const CartGetter = decorator(namespace(null, vGetter), types.getter);
export const CartMutation = decorator(namespace(null, vMutation), types.mutation);
export const CartAction = decorator(namespace(null, vAction), types.action);
