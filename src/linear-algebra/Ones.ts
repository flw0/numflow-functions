import Fill from "./Fill";

function ones(size: number) {
  return new Ones(size);
}

class Ones extends Fill {
  constructor(size: number) {
    super(size, 1);
  }
}

export { ones };

export default Ones;
