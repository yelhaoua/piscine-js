const pick = (obj, str) => {
  let res = {};
  for (let [key, value] of Object.entries(obj)) {
    if (typeof str === "string" && str === key) {
      res[key] = value;
    }
    if (typeof str != "string" && str.includes(key)) {
      res[key] = value;
    }
  }

  return res;
};

const omit = (obj, str) => {
  let res = {};
  for (let [key, value] of Object.entries(obj)) {
    if (typeof str === "string" && !(str === key)) {
      res[key] = value;
    }
    if (typeof str != "string" && !str.includes(key)) {
      res[key] = value;
    }
  }
  return res
};
