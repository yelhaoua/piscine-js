const dogYears = (planet, seconds) => {
  switch (planet) {
    case "earth":
      return Number(((seconds / 31557600) * 7).toFixed(2));

    case "mercury":
      return Number((((seconds / 31557600) * 7) / 0.2408467).toFixed(2));

    case "venus":
      return Number((((seconds / 31557600) * 7) / 0.61519726).toFixed(2));

    case "mars":
      return Number((((seconds / 31557600) * 7) / 1.8808158).toFixed(2));

    case "jupiter":
      return Number((((seconds / 31557600) * 7) / 11.862615).toFixed(2));

    case "saturn":
      return Number((((seconds / 31557600) * 7) / 29.447498).toFixed(2));

    case "uranus":
      return Number((((seconds / 31557600) * 7) / 84.016846).toFixed(2));

    case "neptune":
      return Number((((seconds / 31557600) * 7) / 164.79132).toFixed(2));

    default:
      break;
  }
};
