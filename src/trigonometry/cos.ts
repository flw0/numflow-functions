import Matrix from '../linear-algebra/Matrix';
import operation from '../linear-algebra/operation';

function cos(a: Matrix | number): Matrix | number {
  return operation(a, 'cos');
}

export default cos;
