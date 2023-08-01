import { Check } from '@checkpoint/check/domain/entities/check';
import { randomUUID } from 'node:crypto';

export class Children {
  id: string;
  name: string;
  birthday: Date;
  checks?: Check[];
  father?: string;
  mother: string;
  responsible?: string;
  createdAt: Date;
  updatedAt?: Date;

  constructor(props: Omit<Children, 'id' | 'createdAt'>, id?: string) {
    Object.assign(this, props);
    this.id = id ?? randomUUID();
    this.checks = props.checks ?? [];
  }
}
