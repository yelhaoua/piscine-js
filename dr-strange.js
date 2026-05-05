const epoch = new Date("0001-01-01T00:00:00Z");

const addWeek = (time) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday",
  ];

  let day = (time.getTime() - epoch.getTime()) / (1000 * 60 * 60 * 24);
  return days[day % 14];
};

const timeTravel = ({ date, hour, minute, second }) => {
  let res = new Date(date);
  res.setHours(hour);
  res.setMinutes(minute);
  res.setSeconds(second);
  return res;
};
