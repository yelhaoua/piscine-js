const filterKeys = (obj, func) => {
  let res = {};
  for (let key in obj) {
    if (func(key)) {
      res[key] = obj[key];
    }
  }
  return res;
};

const mapKeys = (obj, func) => {
  let res = {};
  for (let [key, val] of Object.entries(obj)) {
    res[func(key)] = val;
  }
  return res;
};

const reduceKeys = (obj, func, init = "") => {
  let res = init;
  for (let key in obj) {
    if (res === "") {
      res = key;
    } else {
      res = func(res, key);
    }
  }
  return res;
};
