import { ProductEntity } from '../../../shared/types/Product.entity';

export interface ProductStoreState {
  isListLoading: boolean;
  list: ProductEntity[];
  item: ProductEntity;
}
