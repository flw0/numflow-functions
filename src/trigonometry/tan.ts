import Matrix from "../linear-algebra/Matrix";
import operation from "../linear-algebra/operation";

function tan(a: Matrix | number) {
  return operation(a, "tan");
}

export default tan;
