import { randomUUID } from 'node:crypto';

export class Check {
  id: string;
  name: string;
  checked: boolean;
  childrenId?: string;
  createdAt: Date;
  updatedAt?: Date;

  constructor(props: Omit<Check, 'id' | 'createdAt'>, id?: string) {
    Object.assign(this, props);
    this.id = id ?? randomUUID();
  }
}
