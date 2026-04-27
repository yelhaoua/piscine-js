const dogYears = (planet, seconds) => {
  switch (planet) {
    case "earth":
      return (seconds / 31557600) * 7;

    case "mercury":
      return ((seconds / 31557600) * 7) / 0.2408467;

    case "venus":
      return ((seconds / 31557600) * 7) / 0.61519726;

    case "mars":
      return ((seconds / 31557600) * 7) / 1.8808158;

    case "jupiter":
      return ((seconds / 31557600) * 7) / 11.862615;

    case "saturn":
      return ((seconds / 31557600) * 7) / 29.447498;

    case "uranus":
      return ((seconds / 31557600) * 7) / 84.016846;

    case "neptune":
      return ((seconds / 31557600) * 7) / 164.79132;

    default:
      break;
  }
};
