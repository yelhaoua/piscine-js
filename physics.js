const getAcceleration = (gg) => {
  let Δv = 0;
  let Δt = 0;

  for (let key in gg) {
    if (key === "Δv") {
      Δv = gg[key];
    }
    if (key === "Δt") {
      Δt = gg[key];
    }
  }
  if (Δt != 0 && Δv != 0) {
    return Δv / Δt;
  }
  return "impossible";
};

