import { Matrix } from "../linear-algebra/";
import operation from "../linear-algebra/operation";

function exp(a: Matrix | number) {
  return operation(a, "exp");
}

export default exp;
