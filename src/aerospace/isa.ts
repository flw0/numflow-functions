import { g } from "../constants";

type ISALayerProperties = [number, number][];

const layerProperties: ISALayerProperties = [
  [11 * 1000, -0.0065],
  [20 * 1000, 0.0],
  [32 * 1000, 0.001],
  [47 * 1000, 0.0],
  [51 * 1000, -0.0028],
  [71 * 1000, -0.002],
  [86 * 1000, 0.0],
];

/**
 * Function to calculate the ISA temperature based on some parameters
 * @param T0
 * @param lapseRate
 * @param h0
 * @param h1
 */
function isaTemp(T0: number, lapseRate: number, h0: number, h1: number) {
  return T0 + lapseRate * (h0 - h1);
}

/**
 * Function to calculate the ISA pressure based on some parameters
 * @param p0
 * @param T1
 * @param T0
 * @param lapseRate
 */
function isaPressureWithLapse(
  p0: number,
  T1: number,
  T0: number,
  lapseRate: number
) {
  return p0 * Math.pow(T1 / T0, -g / lapseRate / 287.0);
}

/**
 * Function to calculate the ISA pressure based on some parameters
 * @param p0
 * @param T
 * @param h0
 * @param h1
 */
function isaPressureWithoutLapse(
  p0: number,
  T: number,
  h0: number,
  h1: number
) {
  return p0 * Math.exp((-g / 287.0 / T) * (h1 - h0));
}

/**
 * Function to calculate ISA density based on some parameters
 * @param rho0
 * @param T1
 * @param T0
 * @param lapseRate
 */
function isaDensityWithLapse(
  rho0: number,
  T1: number,
  T0: number,
  lapseRate: number
) {
  return rho0 * Math.pow(T1 / T0, -g / lapseRate / 287.0 - 1);
}

/**
 * Function to calculate ISA density based on some parameters
 * @param rho0
 * @param T
 * @param h0
 * @param h1
 */
function isaDensityWithoutLapse(
  rho0: number,
  T: number,
  h0: number,
  h1: number
) {
  return rho0 * Math.exp((-g / 287.0 / T) * (h1 - h0));
}

/**
 * Function to calculate ISA density based on some parameters
 * @param h
 * @param baseTemp
 */
function isa(h: number, baseTemp = 288.15) {
  let T0 = baseTemp;
  let p0 = 101325;
  let rho0 = p0 / 287.0 / T0;
  let h0 = 0;

  let temperature = 0;
  let pressure = 0;
  let density = 0;

  // Loop through all layers and break out of the loop if the layer is reached in which the altitude is
  layerProperties.some((layer) => {
    const minAlt = Math.min(h, layer[0]);

    // If the layer is isothermal
    if (layer[1] == 0) {
      temperature = T0;
      pressure = isaPressureWithoutLapse(p0, T0, h0, minAlt);
      density = isaDensityWithoutLapse(rho0, T0, h0, minAlt);
    }

    // If the layer is not isothermal
    else {
      temperature = isaTemp(T0, layer[1], h0, minAlt);
      pressure = isaPressureWithLapse(p0, temperature, T0, layer[1]);
      density = isaDensityWithLapse(rho0, temperature, T0, layer[1]);
    }

    // Set all the properties for the next loop though
    T0 = temperature;
    p0 = pressure;
    rho0 = density;
    h0 = layer[0];

    return minAlt < layer[0];
  });

  return [temperature, pressure, density];
}

export default isa;
