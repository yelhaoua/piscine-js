const pyramid = (str, num) => {
  let res = "";
  let space = " ".repeat(str.length);
  for (let i = 1; i <= num; i++) {
    res += space.repeat(num - i);
    res += str.repeat(i * 2 - 1);
    if (i < num) {
      res += "\n";
    }
  }
  return res;
};