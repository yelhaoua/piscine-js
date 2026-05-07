const adder = (arr, num = 0) => {
  return arr.reduce((prev, curent) => {
    return prev + curent;
  }, num);
};

const sumOrMul = (arr, num = 0) => {
  return arr.reduce((prev, curent) => {
    return curent % 2 === 0 ? prev * curent : prev + curent;
  }, num);
};

const funcExec = (arr, num = 0) => {
  return arr.reduce((prev, curnent) => {
    return curnent(prev);
  }, num);
};
