const nasa = (num) => {
  let txt = "";
  let i = 1;
  while (i <= num) {
    if (i % 5 == 0 && i % 3 == 0) {
      txt += "NASA ";
    } else if (i % 3 == 0) {
      txt += "NA ";
    } else if (i % 5 == 0) {
      txt += "SA ";
    } else {
      txt += i + " ";
    }
    i++;
  }
  return txt;
};

