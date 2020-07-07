import Fill from './Fill';

class Zeros extends Fill {
  constructor(size: number) {
    super(size, 0);
  }
}

function zeros(size: number): Zeros {
  return new Zeros(size);
}

export default zeros;
