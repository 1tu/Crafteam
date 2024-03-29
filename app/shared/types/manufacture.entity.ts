import { AEntityTimestamp } from 'app/shared/types/_base.entity';
import { ProductEntity } from './product.entity';
import { PreManufactureEntity } from './preManufacture.entity';

export class ManufactureEntity extends AEntityTimestamp {
  schema: ManufactureSchemaItem[];
  product: ProductEntity;
  preManufactureList: PreManufactureEntity[];
}

export class ManufactureSchemaItem {
  name: string;
  key: string;
  type: ManufactureSchemaTypes;
  isRequired: boolean;
  optionList: ManufactureSchemaOption[];
}

export class ManufactureSchemaOption {
  name: string;
  value: string;
  price: number;
}

export const ManufactureSchemaTypesMap = [
  { id: 0, name: 'Выбор' },
  { id: 1, name: 'Выбор цвета' },
  { id: 3, name: 'Выбор размера' },
  { id: 2, name: 'Выбор отображения' },
  { id: 4, name: 'Текст' }
];

export enum ManufactureSchemaTypes {
  SELECT = 0,
  SELECT_COLOR = 1,
  SELECT_SIZE = 3,
  SELECT_IMAGE = 2,
  TEXT = 4,
}
