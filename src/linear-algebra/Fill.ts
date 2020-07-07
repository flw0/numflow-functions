import Matrix from './Matrix';

class Fill extends Matrix {
  constructor(size: number, value: number) {
    const result = new Array(size * size);
    for (let i = 0; i < size * size; i += 1) result[i] = value;

    super(result as number[], size, size);
  }
}

export default Fill;
