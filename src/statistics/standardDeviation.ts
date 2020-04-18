import variance from "./variance";

function standardDeviation(values: number[]) {
  return Math.sqrt(variance(values));
}

export default standardDeviation;
