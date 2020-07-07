import Fill from './Fill';

class Ones extends Fill {
  constructor(size: number) {
    super(size, 1);
  }
}

function ones(size: number): Ones {
  return new Ones(size);
}

export default ones;
