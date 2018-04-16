import { AEntityTimestamp, AEntityBase } from './_base.entity';
import { ImageEntity } from './image.entity';
import { SeoMetaEntity } from './seoMeta.entity';
import { SeoTemplateEntity } from './seoTemplate.entity';
import { ShopEntity } from './shop.entity';
import { ManufactureEntity } from './manufacture.entity';
import { CategoryEntity } from './category.entity';

export class PreManufactureEntity extends AEntityTimestamp {
  name: string;
  nameTranslit: string;
  description: string;
  config: PreManufactureConfigItem[];
  imageList: ImageEntity;
  seoMeta: SeoMetaEntity;
  seoTemplate: SeoTemplateEntity;
  shop: ShopEntity;
  manufacture: ManufactureEntity;
  categoryList: PreManufactureCategoryEntity[];
}

export class ManufactureConfigItem {
  name: string;
  key: string;
  value: string;
}

export class PreManufactureCategoryEntity extends AEntityBase {
  preManufacture: PreManufactureEntity;
  category: CategoryEntity;
  isMain: boolean;
}

export class PreManufactureConfigItem extends ManufactureConfigItem {
  isLocked: boolean;
}
