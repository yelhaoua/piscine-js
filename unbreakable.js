const split = (text, sep) => {
  let res = [];
  let cout = 0;
  let woord = "";
  let ind = 0;
  let nessep = "";

  if (sep === "") {
    for (let j = 0; j < text.length; j++) {
      res[j] = text[j];
    }
    return res;
  }

  for (let i = 0; i < text.length; i++) {
    if (sep[cout] == text[i]) {
      cout++;
      if (cout === sep.length) {
        res[ind] = woord;
        cout = 0;
        woord = "";
        ind++;
      }
    } else {
      woord += text[i];
    }
  }
  res[ind] = woord;
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
