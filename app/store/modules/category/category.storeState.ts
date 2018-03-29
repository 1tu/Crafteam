import { CategoryEntity } from '../../../shared/types/category.entity';

export interface CategoryStoreState {
  currentBaseId: number;
  listBase: CategoryEntity[];
  list: CategoryEntity[];
  item: CategoryEntity;
  propList: PropItem[];
}

export interface PropItem {
  name: string;
  key: string;
  options: PropItemValue[];
}

export interface PropItemValue {
  name: string;
  value: string;
}
