const mult2 = (x) => {
  return function (y) {
    return x * y;
  };
};

const add3 = (x) => {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
};

const sub4 = (x) => {
  return function (y) {
    return function (z) {
      return function (a) {
        return x - y - z - a;
      };
    };
  };
};


