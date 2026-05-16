const isFriday = (Date) => {
  return Date.getDay() === 5 ? true : false;
};
const isWeekend = (Date) => {
  return Date.getDay() === 6 || Date.getDay() === 0 ? true : false;
};

const isLeapYear = (Date) => {
  return (Date.getFullYear() % 4 && Date.getFullYear() % 100 !== 0) ||
    Date.getFullYear() % 400 === 0
    ? false
    : true;
};

const isLastDayOfMonth = (date) => {
  const mount = date.getMonth();
  const newyear = new Date(date);
  newyear.setDate(date.getDate() + 1);
  const newmoute = newyear.getMonth();
  return newmoute != mount ? true : false;
};
