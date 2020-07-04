import Matrix from "./Matrix";

function rand(width: number, height: number) {
  return new Rand(width, height);
}

class Rand extends Matrix {
  constructor(width: number, height: number) {
    const result = new Array(width * height);

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        result[i * width + j] = Math.random();
      }
    }

    super(result as number[], width, height);
  }
}

export { rand };

export default Rand;
