const multiply = (a, b) => {
  let res = 0;
  if (b > 0) {
    for (let i = 0; i < b; i++) {
      res += a;
    }
  } else {
    for (let i = b; i < 0; i++) {
      res -= a;
    }
  }
  for (let i = 0; i < b; i++) {
    res += a;
  }
  return res;
};
const divide = (a, b) => {
  let res = a;
  let count = 0;
  if (b == 0) {
    return;
  }
  for (let i = 0; i < a; i++) {
    if (a == b) {
      return 1;
    }
    if (res > b) {
      res = res - b;
      count++;
    }
  }
  return count;
};
const modulo = (a, b) => {
  return a - multiply(b, divide(a, b));
};