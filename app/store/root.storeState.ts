import { CartStoreState } from './modules/cart/cart.storeState';

export interface State {
  name: string;
}

interface ModulesStates {
  Cart: CartStoreState;
}

export type RootState = State & ModulesStates;
