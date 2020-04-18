import npr from "./npr";
import factorial from "./factorial";

function ncr(n: number, r: number) {
  return npr(n, r) / factorial(r);
}

export default ncr;
