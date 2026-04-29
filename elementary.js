const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
const modulo = (a, b) => {
  let res = 1;
  for (let i = 0; i < b; i++) {
    res *= a;
  }
  return res;
};
