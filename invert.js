const invert = (obj) => {
  const res = {};
  for (let key in obj) {
    res[obj[key]] = key;
  }
  return res;
};
