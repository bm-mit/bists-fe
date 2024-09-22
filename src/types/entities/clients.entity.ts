import { Indicator } from '@/types/entities/indicators.entity';

export class Client {
  id?: number;

  name?: string;

  indicators?: Indicator[];

  constructor(props: Partial<Client>) {
    Object.assign(this, props);
  }
}
