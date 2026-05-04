const addWeek = (time) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let daye = Number(time.getUTCDate());
  console.log(daye);
  if (daye > 7) {
    console.log("second" + days[daye % 7]);
    return;
  }

  if (daye === 7) {
    console.log(days[0]);
    return;
  }

  console.log(days[daye]);
};

const timeTravel = ({ date, hour, minute, second }) => {
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(second);
  console.log(date.toString());
};
