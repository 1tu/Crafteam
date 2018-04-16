import { AEntityTimestamp } from './_base.entity';

export class SeoMetaEntity extends AEntityTimestamp {
  keys: string[];
  keywords: string;
  description: string;
  title: string;
}
