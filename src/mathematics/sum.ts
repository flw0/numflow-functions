import Matrix from '../linear-algebra/Matrix';

function sum(a: number | Matrix): number {
  if (typeof a === 'number') return a;

  const matrixValues = a.getValues();

  return matrixValues.reduce((b, c) => b + c, 0);
}

export default sum;
