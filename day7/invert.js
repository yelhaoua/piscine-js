const invert = (obj) => {
  const res = {};
  for (let [key, val] of Object.entries(obj)) {
    res[val] = key;
  }
  return res;
};
