import Matrix from '../linear-algebra/Matrix';

function max(a: Matrix): number {
  return Math.max(...a.getValues());
}

export default max;
