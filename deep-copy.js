const deepCopy = (val) => {
  if (val === null || typeof val !== "object") {
    return val;
  }
  if (val instanceof RegExp) {
    return new RegExp(val);
  }
  if (Array.isArray(val)) {
    const arr = val.map((el) => deepCopy(el));
    return arr;
  }
  const res = {};
  for (let [key, v] of Object.entries(val)) {
    res[key] = deepCopy(val);
  }
  return res;
};
