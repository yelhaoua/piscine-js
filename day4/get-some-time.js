const firstDayWeek = (week, year) => {
  let date = new Date(0);
  date.setFullYear(parseInt(year), 0, 1);

  if (week === 1) {
    return formatDate(date);
  }
  let nextMonday;
  if (date.getDay() === 1) {
    nextMonday = 7;
  } else {
    nextMonday = date.getDay() === 0 ? 1 : 8 - date.getDay();
  }
  date.setDate(date.getDate() + nextMonday + (week - 2) * 7);
  return formatDate(date);
};

function formatDate(date) {
  const DD = String(date.getDate()).padStart(2, "0");
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const YY = String(date.getFullYear()).padStart(4, "0");
  return `${DD}-${MM}-${YY}`;
}
