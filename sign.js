const sign = (num) => {
  if (num === 0) {
    return 0;
  }
  return num > 0 ? 1 : -1;
};

const sameSign = (num1, num2) => {
    if (num1 == 0 && num2 == 0){
        return true
    }
  return (num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0) ? true : false;
};
