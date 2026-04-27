const arrToSet = (params) => {
  return new Set(params);
};

const arrToStr = (params) => {
  return params.join("");
};

const setToArr = (params) => {
  return [...params];
};

const setToStr = (params) => {
  return [...params].join("");
};

const strToArr = (params) => {
  return params.split("");
};
const strToSet = (params) => {
  return new Set(params.split(""));
};
const mapToObj = (params) => {
  const obj = {};
  params.forEach((val, key) => {
    obj[val] = key;
  });

  return obj;
};

const objToArr = (params) => {
  let arr = [];
  for (const key in params) {
    arr = [...arr, params[key]];
  }
  return arr;
};

const objToMap = (params) => {
  const map = new Map();
  for (const keys in params) {
    map.set(keys, params[keys]);
  }
  return map;
};

const arrToObj = (params) => {
  const obj = {};
  for (let i = 0; i < params.length; i++) {
    obj[i] = params[i];
  }
  return obj;
};

const strToObj = (params) => {
  const obj = {};
  for (let i = 0; i < params.length; i++) {
    obj[i] = params[i];
  }
  return obj;
};
