const getAcceleration = (gg) => {
  let Δv = "";
  let Δt = "";
  let f,
    d,
    t,
    m = "";

  for (let key in gg) {
    if (key === "Δv") {
      Δv = gg[key];
    }
    if (key === "Δt") {
      Δt = gg[key];
    }
    if (key === "f") {
      f = gg[key];
    }
    if (key === "m") {
      m = gg[key];
    }
    if (key === "d") {
      d = gg[key];
    }
    if (key === "t") {
      t = gg[key];
    }
  }
  if (Δt != "" && Δv != "") {
    return Δv / Δt;
  }
  if (f != "" && m != "") {
    return f / m;
  }
  if (d != "" && t != "") {
    return 2*d / t**2;
  }
  return "impossible";
};
