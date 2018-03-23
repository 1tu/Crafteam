import { ProductEntity } from '../../../shared/types/product.entity';

export interface CartItem {
  count: number;
  product: ProductEntity;
}

export interface CartStoreState {
  productList: CartItem[];
}
