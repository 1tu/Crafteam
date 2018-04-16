import { AEntityTimestamp } from './_base.entity';

export class ImageEntity extends AEntityTimestamp {
  alt: string;
  name: string;
  description: string;
  filepath: string;
}
