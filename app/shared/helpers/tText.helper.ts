import { CityEntity } from '../types/city.entity';
import { SeoMetaEntity } from '../types/seoMeta.entity';

export function tText(text: string, city: CityEntity, meta: SeoMetaEntity): string {
  if (!text) return '';
  return text.replace(/{{([^}]+)}}/g, (substr: string, strPath: string) => {
    const path = strPath.trim().split('.');
    return path[0][0] === 'c' ? city[path[1]] : meta.keys[path[1]];
  });
}
