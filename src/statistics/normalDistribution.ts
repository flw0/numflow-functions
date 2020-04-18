import standardDeviation from "./standardDeviation";
import average from "./average";

/**
 * Taken from: https://en.wikipedia.org/wiki/Normal_distribution
 * @param x 
 * @param values 
 */
function normalDistribution(x: number, values: number[]) {
  const mu = average(values);
  const sigma = standardDeviation(values);

  return (
    (1 / (sigma * Math.sqrt(2 * Math.PI))) *
    Math.exp((-1 / 2) * ((x - mu) / sigma) ** 2)
  );
}

export default normalDistribution;
