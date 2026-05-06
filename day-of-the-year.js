const dayOfTheYear = (date) => {
  const newdate = new Date(date);
  newdate.setUTCHours(0, 0, 0, 0);
  newdate.setUTCMonth(0, 1);
  return (date - newdate) / (1000 * 60 * 60 * 24) + 1;
};
