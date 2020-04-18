import average from "./average";

function variance(values: number[]) {
  const mu = average(values);

  return values.reduce((sum, e) => sum + (e - mu) ** 2, 0) / values.length;
}

export default variance;
