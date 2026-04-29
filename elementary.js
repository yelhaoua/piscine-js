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
  return res;
};
const divide = (a, b) => {
  let res = a;
  let count = 0;
  if (b == 0) {
    return;
  }
  if (a == b) {
    return 1;
  }
  if (b > 0) {
    for (let i = 0; i < a; i++) {
      if (res > b) {
        res = res - b;
        count++;
      }
    }
  } else {
    for (let i = a; i > 0; i--) {
      if (res > multiply(b, -1)) {
        res = res - multiply(b, -1);
        count++;
      }
    }
    return -count
  }
  return count;
};
const modulo = (a, b) => {
  return a - multiply(b, divide(a, b));
};
console.log(multiply(34, 78));
console.log(divide(123, -22));
