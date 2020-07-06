import Matrix from '../linear-algebra/Matrix';
import operation from '../linear-algebra/operation';

function sin(a: Matrix | number): Matrix | number {
  return operation(a, 'sin');
}

export default sin;
