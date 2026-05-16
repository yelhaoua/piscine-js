const getAcceleration = (obj) => {
  if (Object.keys(obj).length == 0) {
    return "impossible";
  }
  if (Object.hasOwn(obj, "Δv") && Object.hasOwn(obj, "Δt")) {
    return obj["Δv"] / obj["Δt"];
  }
  if (Object.hasOwn(obj, "f") && Object.hasOwn(obj, "m")) {
    return obj["f"] / obj["m"];
  }
  if (Object.hasOwn(obj, "d") && Object.hasOwn(obj, "t")) {
    return (2 * obj["d"]) / obj["t"] ** 2;
  }

  return "impossible";
};
