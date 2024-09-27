export class Indicator {
  id?: number;

  name?: string;

  values: { time: string; value: number }[] = [];

  constructor(props: Partial<Indicator>) {
    Object.assign(this, props);
  }
}
