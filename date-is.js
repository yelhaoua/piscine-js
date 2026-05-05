const isValid = (time) => {
  console.log(time);
  if (time instanceof Date) {
    console.log("d");
    
    return true;
  }

  return !isNaN(time.getDate());
};

// const isAfter = (time, date) => {
//   return time.getTime() < date.getFullTime() ? false : true;
// };
// const isBefore = (time, date) => {
//   return time.getFullTime() > date.getFullTime() ? false : true;
// };
// const isFuture = () => {};
// const isPast = () => {};

// console.log(ne);
// () => !invalid;
