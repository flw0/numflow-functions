import Matrix from '../linear-algebra/Matrix';

function min(a: Matrix): number {
  return Math.min(...a.getValues());
}

export default min;
