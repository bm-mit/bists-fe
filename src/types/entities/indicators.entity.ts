export class Indicator {
  id?: number;

  name?: string;

  values?: number[];

  constructor(props: Partial<Indicator>) {
    Object.assign(this, props);
  }
}
