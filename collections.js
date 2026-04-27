const str = "hello";
const arr = [1, 2, 1, 3];
const obj = { x: 45, y: 75, radius: 24 };
const set = new Set();
const map = new Map();
set.add(1);
set.add(2);
set.add(1);
set.add(3);
map.set("a", 1);
map.set("b", 2);
map.set(3, "c");
map.set(4, "d");

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
    obj[key] = val;
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

const superTypeOf = (params) => {
  if (params === null) {
    return null;
  }
  if (params === undefined) {
    return undefined;
  }
  return Object.prototype.toString.call().slice(8 ,-1);
};
