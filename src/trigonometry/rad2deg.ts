import pi from './pi';

function rad2deg(a: number): number {
  return a * (180 / pi);
}

export default rad2deg;
