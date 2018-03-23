import { AEntityBase, AEntityTimestamp } from './_base.entity';
import { CategoryEntity } from './category.entity';
import { ImageEntity } from './image.entity';
import { ManufactureEntity } from './manufacture.entity';
import { SeoMetaEntity } from './seoMeta.entity';
import { SeoTemplateEntity } from './seoTemplate.entity';
import { ShopEntity } from './shop.entity';

export class ProductEntity extends AEntityTimestamp {
  name: string;
  nameTranslit: string;
  description: string;
  propertyList: ProductProperty[];
  seoMeta: SeoMetaEntity;
  seoTemplate: SeoTemplateEntity;
  imageList: ImageEntity;
  shop: ShopEntity;
  manufacture?: ManufactureEntity;
  categoryList: ProductCategoryEntity[];
}

export class ProductCategoryEntity extends AEntityBase {
  product: ProductEntity;
  category: CategoryEntity;
  isMain: boolean;
}

export class ProductProperty {
  name: string;
  value: string;
}
