export class Client {
  id?: number;

  name?: string;

  indicators?: string[];

  constructor(props: Partial<Client>) {
    Object.assign(this, props);
  }
}
