import { Matrix } from "../linear-algebra/";
import operation from "../linear-algebra/operation";

function sqrt(a: Matrix | number) {
  return operation(a, "sqrt");
}

export default sqrt;
