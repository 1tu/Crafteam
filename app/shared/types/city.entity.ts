import { AEntityBase } from './_base.entity';

export class CityEntity extends AEntityBase {
  nameTranslit: string;
  name: string;
  nameGenitive: string;
  nameDative: string;
  nameAccusative: string;
  nameInstrumental: string;
  namePrepositional: string;
  population: number;
}
