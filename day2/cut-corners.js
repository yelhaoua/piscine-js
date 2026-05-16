const round = (arr) => {
  let num = getNum(arr);

  if (num > 0.5 && arr > 0) {
    return arr - num + 1;
  } else if (num > 0.5 && arr < 0) {
    console.log(num, arr + num);
    return arr + num - 1;
  } else if (num < 0.5 && arr > 0) {
    return arr - num;
  } else if (num < 0.5 && arr < 0) {
    return arr + num;
  }else return arr - num
};
const floor = (arr) => {
  let num = getNum(arr);
  if (arr < 0) {
    return num + arr - 1;
  } else {
    return arr - num;
  }
};
const trunc = (arr) => {
  if (arr < 0) {
    return arr + getNum(arr);
  }
  return arr - getNum(arr);
};

const ceil = (arr) => {
  let num = getNum(arr);
  if (arr > 0) {
    return arr - num + 1;
  }
  return arr + num;
};

export const getNum = (num) => {
  let val = num < 0 ? -num : num;
  let power = 1;
  while (power * 2 <= val) power *= 2;
  while (power >= 1) {
    if (val >= power) val -= power;
    power /= 2;
  }
  return val;
};


console.log([3, -3, 3, -3, 0].map(round));
