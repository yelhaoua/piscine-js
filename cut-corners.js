const round = (arr) => {
  let num = getNum(arr);
  if (num > 0) {
    return arr - num + 1;
  } else {
    return arr - num;
  }
};
const floor = (arr) => {
  let num = getNum(arr);
  if (num < 0) {
    return arr - num - 1;
  } else {
    return arr - num;
  }
};
const trunc = (arr) => {
  if (arr < 0) {
    return arr - getNum(arr) + 1;
  }
  return arr - getNum(arr);
};

const ceil = (arr) => {
  let num = getNum(arr);
  if (arr < 0) {
    return arr - num + 1;
  }

  return arr - num +1 ;
};

const getNum = (num) => {
  let sol = 0;
  if (num > 1000000) {
    while (sol < num) {
      sol += 10000000000;
    }
  }
  if (num < 0) {
    while (sol > num - 1) {
      sol -= 1;
    }
  }
  while (sol < num - 1) {
    sol += 1;
  }

  return num - sol;
};
