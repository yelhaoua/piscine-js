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
  let newa = a;
  let newb = b;

  let signe = 1;
  if (a < 0) {
    newa = multiply(a, -1);
    signe = -1;
  }
  if (b < 0) {
    newb = multiply(b, -1);
    signe = -1;
  }

  if (a < 0 && b < 0) {
    signe = 1;
  }
  let count = 0;
  if (b == 0) {
    return;
  }
  if (a == b) {
    return 1;
  }
  let res = newa;

  for (let i = 0; i < newa; i++) {
    if (res > newb) {
      res = res - newb;
      count++;
    }
  }
  return multiply(count, signe);
};
const modulo = (a, b) => {
  return a - multiply(b, divide(a, b));
};

const round = (arr) => {
  if (modulo(arr, 1) > 0.5) {
    return (arr = arr - modulo(arr, 1) + 1);
  } else if (modulo(arr, 1) < -0.5) {
    return (arr = arr - modulo(arr, 1) - 1);
  } else {
    return (arr = arr - modulo(arr, 1));
  }
};
const floor = (arr) => {
  if (modulo(arr, 1) < 0) {
    return (arr = arr - modulo(arr, 1) - 1);
  } else {
    return (arr = arr - modulo(arr, 1));
  }
};
const trunc = (arr) => {
  return (arr = arr - modulo(arr, 1));
};

const ceil = (arr) => {
  if (modulo(arr, 1) < 0) {
    return (arr = arr - modulo(arr, 1));
  } else {
    return (arr = arr - modulo(arr, 1) + 1);
  }
};
