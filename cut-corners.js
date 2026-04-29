const modulo = (a, b) => {
  return a - (b * a) / b;
};

const round = (arr) => {
  if (modulo(arr, 1) > 0.5) {
    return arr - modulo(arr, 1) + 1;
  } else if (modulo(arr, 1) < -0.5) {
    return arr - modulo(arr, 1) - 1;
  } else {
    return arr - modulo(arr, 1);
  }
};
const floor = (arr) => {
  if (modulo(arr, 1) < 0) {
    return arr - modulo(arr, 1) - 1;
  } else {
    return arr - modulo(arr, 1);
  }
};
const trunc = (arr) => {
  console.log(arr);
  console.log(arr - modulo(arr, 1));

  return arr - modulo(arr, 1);
};

const ceil = (arr) => {
  if (modulo(arr, 1) < 0) {
    return arr - modulo(arr, 1);
  } else if (arr === 0) {
    return arr;
  } else {
    return arr - modulo(arr, 1) + 1;
  }
};


