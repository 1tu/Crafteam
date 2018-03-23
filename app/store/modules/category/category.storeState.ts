import { CategoryEntity } from '../../../shared/types/category.entity';

export interface CategoryStoreState {
  listBase: CategoryEntity[];
  list: CategoryEntity[];
  item: CategoryEntity;
  propList: PropItem[];
}

export interface PropItem {
  name: string;
  key: string;
  valueList: PropItemValue[];
}

export interface PropItemValue {
  name: string;
  value: string;
}
