import { ProductEntity } from '../../../shared/types/Product.entity';

export interface ProductStoreState {
  list: ProductEntity[];
  item: ProductEntity;
}
