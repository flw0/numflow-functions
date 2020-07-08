import Matrix from '../linear-algebra/Matrix';
import Complex from './Complex';
import operation from '../linear-algebra/operation';

function abs(a: number): number;
function abs(a: Complex): number;
function abs(a: Matrix): Matrix;
function abs(a: Matrix | number | Complex): Matrix | number | Complex {
  if (a instanceof Complex) return Math.sqrt(a.re ** 2 + a.im ** 2);
  return operation(a, 'abs');
}

export default abs;
