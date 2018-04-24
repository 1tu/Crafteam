import { CityEntity } from '../shared/types/city.entity';
import { ShopEntity } from '../shared/types/shop.entity';
import { CartStoreState } from './modules/cart/cart.storeState';
import { CategoryStoreState } from './modules/category/category.storeState';
import { FilteredPageStoreState } from './modules/filteredPage/filteredPage.storeState';
import { ProductStoreState } from './modules/product/product.storeState';

export interface State {
  crmUrl: string;
  baseUrl: string;
  clientUrl: string;
  city: CityEntity;
  shop: ShopEntity;
}

interface ModulesStates {
  Cart: CartStoreState;
  Category: CategoryStoreState;
  Product: ProductStoreState;
  FilteredPage: FilteredPageStoreState;
}

export type RootState = State & ModulesStates;
