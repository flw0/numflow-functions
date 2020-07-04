import Fill from "./Fill";

function zeros(size: number) {
  return new Zeros(size);
}

class Zeros extends Fill {
  constructor(size: number) {
    super(size, 0);
  }
}

export { zeros };

export default Zeros;
