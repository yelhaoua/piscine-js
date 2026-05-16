async function isWinner(country) {
  try {
    let iswi = await db.getWinner(country);
    if (iswi) {
      let isInEur = await db.getResults(iswi.id);
      if (iswi.continent != "Europe") {
        return (
          country + " is not what we are looking for because of the continent"
        );
      }
      if (isInEur.length > 0 && isInEur.length < 3) {
        return (
          country +
          " is not what we are looking for because of the number of times it was champion"
        );
      }
      return (
        country +
        " won the FIFA World Cup in " +
        isInEur
          .map((el) => {
            return el.year;
          })
          .join(", ") +
        " winning by " +
        isInEur
          .map((el) => {
            return el.score;
          })
          .join(", ")
      );
    } else {
      return country + " never was a winner";
    }
  } catch (error) {
    return country + " never was a winner";
  }
}
