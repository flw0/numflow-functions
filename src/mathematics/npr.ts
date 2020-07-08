import factorial from './factorial';

function npr(n: number, r: number): number {
  return factorial(n) / factorial(n - r);
}

export default npr;
