import sum from "../mathematics/sum";

function average(values: number[]) {
  return sum(values) / values.length;
}

export default average;
