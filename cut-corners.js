const round = (arr) => {
  let num = getNum(arr);
  if (arr - num > 0.5) {
    return num + 1;
  } else if (num - arr < -0.5) {
    return num - 1;
  } else {
    return num;
  }
};
const floor = (arr) => {
  let num = getNum(arr);
  if (arr - num < 0) {
    return num - 1;
  } else {
    return num;
  }
};
const trunc = (arr) => {
  if (getNum(arr) > 0) {
    return getNum(arr);
  }
  return getNum(arr) +1;
};

const ceil = (arr) => {
  let num = getNum(nums);

  if (arr - num < 0) {
    return getNum(arr)+1;
  } else if (arr === 0) {
    return arr;
  } else {
    return getNum(arr) + 1;
  }
};

const getNum = (num) => {
  let sol = 0;
  if (num > 1000000) {
    while (sol < num) {
      sol += 10000000000;
    }
  }
  if (num < 0) {
    while (sol > num) {
      sol -= 1;
    }
  }
  while (sol < num - 1) {
    sol += 1;
    console.log(sol);
  }

  return sol;
};

