import { Check } from '@checkpoint/check/domain/entities/check';
import { Children } from '@checkpoint/children/domain/entities/children';

interface CheckProps {
  name: string;
  checked: boolean;
}

interface ChildrenProps {
  name: string;
  birthday: Date;
  father?: string;
  mother: string;
  responsible?: string;
}

interface RegisterChildrenCheckProps {
  children: ChildrenProps;
  check: CheckProps;
}

export class RegisterChildrenCheckUseCase {
  static execute(props: RegisterChildrenCheckProps): Children {
    const { checked, name } = props.check;
    const {
      birthday,
      mother,
      name: childrenName,
      father,
      responsible,
    } = props.children;

    const children = new Children({
      name: childrenName,
      birthday,
      mother,
      father,
      responsible,
    });

    const check = new Check({
      name,
      checked,
      childrenId: children.id,
    });

    children.checks.push(check);

    return children;
  }
}
