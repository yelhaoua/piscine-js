const triangle = (str, num) => {
  let res = "";
  let text = "";
  for (let i = 1; i <= num; i++) {
    if (i < num ) {
      text += str.repeat(i);
      text += "\n";
    } else {
      text += str.repeat(i);
    }
  }
  return text;
};
