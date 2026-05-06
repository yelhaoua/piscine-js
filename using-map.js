const citiesOnly = (arr) => {
  return arr.map((el) => {
    return el.city;
  });
};

const upperCasingStates = (arr) => {


  return arr.map((el) => {
    return el
      .split(" ")
      .map((el) => {
        return (el = el[0].toUpperCase() + el.slice(1));
      })
      .join(" ");
  });
};

const fahrenheitToCelsius = (arr) => {
  return arr.map((el) => {
    return !el.includes("C")
      ? Math.floor((parseInt(el) - 32) / 1.8) + "°C"
      : el;
  });
};

const trimTemp = (arr) => {
  return arr.map((el) => {
    const trim = el.temperature
      .split("°")
      .map((el) => {
        return el.trim();
      })
      .join("°");
    el.temperature = trim;
    return el;
  });
};

const tempForecasts = (arr) => {
  return arr.map((el) => {
    arr = trimTemp(arr);
    const C = fahrenheitToCelsius([el.temperature]);
    return (
      C + "elsius in " + citiesOnly([el]) + ", " + upperCasingStates([el.state])
    );
  });
};
