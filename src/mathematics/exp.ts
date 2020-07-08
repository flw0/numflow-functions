import Matrix from '../linear-algebra/Matrix';
import operation from '../linear-algebra/operation';

function exp(a: number): number;
function exp(a: Matrix): Matrix;
function exp(a: Matrix | number): Matrix | number {
  return operation(a, 'exp');
}

export default exp;
