import Matrix from './Matrix';

class Rand extends Matrix {
  constructor(width?: number, height?: number, size?: number) {
    if (size !== undefined && width === undefined && height === undefined) {
      const result = new Array(size ** 2);

      for (let i = 0; i < size; i += 1) {
        for (let j = 0; j < size; j += 1) {
          result[i * size + j] = Math.random();
        }
      }

      super(result as number[], size, size);
    } else if (width !== undefined && height !== undefined) {
      const result = new Array(width * height);

      for (let i = 0; i < height; i += 1) {
        for (let j = 0; j < width; j += 1) {
          result[i * width + j] = Math.random();
        }
      }

      super(result as number[], width, height);
    } else
      throw new TypeError(
        'The parameters to construct a new random matrix from are not sufficient to do that'
      );
  }
}

function rand(size: number): Rand;
function rand(width: number, height: number): Rand;
function rand(width?: number, height?: number, size?: number): Rand {
  return new Rand(width, height, size);
}

export default rand;
