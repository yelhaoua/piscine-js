const split = (text, sep) => {
  let res = [];
  let cout = 0;
  let woord = "";
  let ind = 0;

  if (sep === "") {
    for (let j = 0; j < text.length; j++) {
      res[j] = text[j];
    }
    return res;
  }

  for (let i = 0; i < text.length; i++) {
    if (sep[cout] == text[i]) {
      res[ind] = woord;
      woord = "";
      ind++;
      for (let j = i; j < text.length - 1; j++) {
        if (sep[cout] == text[j] && cout < sep.length) {
          i = j;
          cout++;
        } else {
          cout = 0;
          break;
        }
      }
    } else {
      woord += text[i];
    }
  }
  if (woord) {
    res[ind] = woord;
  }
  return res;
};

const join = (arr, sep) => {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      res += arr[i] + sep;
    } else {
      res += arr[i];
    }
  }
  return res;
};
