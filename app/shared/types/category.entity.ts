import { AEntityBase, AEntityTimestamp } from './_base.entity';
import { ProductCategoryEntity } from './product.entity';
import { SeoMetaEntity } from './seoMeta.entity';
import { SeoTemplateEntity } from './seoTemplate.entity';
import { ShopEntity } from './shop.entity';

export class CategoryEntity extends AEntityTimestamp {
  name: string;
  nameTranslit: string;
  isBase: boolean;
  seoList: CategoryShopEntity[];
  productList: ProductCategoryEntity;
  categoryParent: CategoryEntity;
  categoryChildList: CategoryEntity[];
}

export class CategoryShopEntity extends AEntityBase {
  shop: ShopEntity;
  category: CategoryEntity;
  seoTemplate: SeoTemplateEntity;
  seoMeta: SeoMetaEntity;
}
