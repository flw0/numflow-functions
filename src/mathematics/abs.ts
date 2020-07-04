import { Matrix } from "../linear-algebra/";
import operation from "../linear-algebra/operation";

function abs(a: Matrix | number) {
  return operation(a, "abs");
}

export default abs;
