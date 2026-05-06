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
    return ((parseInt(el) - 32) / 1.8).toFixed() + "°C";
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
    const C = fahrenheitToCelsius([arr[0].temperature]) ;

    return (
      C +
      "elsius in " +
      citiesOnly(arr) +
      ", " +
      upperCasingStates([arr[0].state])
    );
  });
};
