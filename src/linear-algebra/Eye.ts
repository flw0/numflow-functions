import Matrix from "./Matrix";

function eye(size: number) {
  return new Eye(size);
}

class Eye extends Matrix {
  constructor(size: number) {
    const result = new Array(size * size);

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const currentIndex = i * size + j;
        if (j == i) {
          result[currentIndex] = 1;
        } else result[currentIndex] = 0;
      }
    }

    super(result as number[], size, size);
  }
}

export { eye };

export default Eye;
