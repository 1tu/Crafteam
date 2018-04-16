import { AEntityTimestamp } from './_base.entity';
import { SeoTemplateEntity } from './seoTemplate.entity';
import { SeoMetaEntity } from './seoMeta.entity';
import { ShopEntity } from './shop.entity';

export class FilteredPageEntity extends AEntityTimestamp {
  name: string;
  url: string;
  filters: FilteredPageFilters;
  seoTemplate: SeoTemplateEntity;
  seoMeta: SeoMetaEntity;
  shop: ShopEntity;
}

export class FilteredPageFilters {
  categoryIdList: number[];
  propertyKeyValueList: PropertyKeyValueItem[];
}

interface PropertyKeyValueItem {
  key: string;
  valueList: string[];
}
