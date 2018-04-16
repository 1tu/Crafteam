export class AEntityBase {
  id: number;
}

export class AEntityTimestamp extends AEntityBase {
  createdAt: Date;
  updatedAt: Date;
}
