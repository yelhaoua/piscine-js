const filterValues = (obj, func) => {
  let res = {};
  for (let [key, val] of Object.entries(obj)) {
    if (func(obj[key])) {
      res[key] = val;
    }
  }
  return res;
};

const mapValues = (obj, func) => {
  let res = {};

  for (let [key, val] of Object.entries(obj)) {
    res[key] = func(val);
  }
  return res;
};

const reduceValues = (obj, func, int = 0) => {
  let res = int;
  for (let [key, value] of Object.entries(obj)) {
    res = func(res, value);
  }
  return res;
};
