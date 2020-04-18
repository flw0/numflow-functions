type unit = "m" | "ft" | "kts";

function distance(value: number, oldUnit: unit, newUnit: unit) {
  if (oldUnit === "m") {
    if (newUnit === "ft") {
    } else if (newUnit === "kts") {
    }
  } else if (oldUnit === "ft") {
  } else if (oldUnit === "kts") {
  }

  return value;
}

export default distance;
