import { AEntityBase } from './_base.entity';
import { CityEntity } from './city.entity';
import { PreManufactureEntity } from './preManufacture.entity';
import { ProductEntity } from './product.entity';
import { SeoMetaEntity } from './seoMeta.entity';

export class ShopEntity extends AEntityBase {
  name: string;
  host: string;
  seoMeta: SeoMetaEntity;
  productList: ProductEntity[];
  preManufactureList: PreManufactureEntity[];
  cityList: CityEntity[];
}
