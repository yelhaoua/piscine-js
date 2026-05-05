const isValid = (time) => {
  if (typeof time === "string") return false;
  const date = new Date(time);
  return date instanceof Date && !isNaN(date.getTime());
};

const isAfter = (time, after) => {
  const date = new Date(after);
  const date1 = new Date(time);
  return date < date1;
};
const isBefore = (time, after) => {
  const date = new Date(after);
  const date1 = new Date(time);
  return date > date1;
};
const isFuture = (time) => {
  const date = new Date(time);
  return date > Date.now();
};

const isPast = (time) => {
  const date = new Date(time);
  return date > Date.now() && isValid(time);
};
