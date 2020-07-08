import Matrix from '../linear-algebra/Matrix';
import operation from '../linear-algebra/operation';

function sqrt(a: Matrix): Matrix;
function sqrt(a: number): number;
function sqrt(a: Matrix | number): Matrix | number {
  return operation(a, 'sqrt');
}

export default sqrt;
