const filterEntries = (obj, func) => {
  let res = {};
  for (let [key, val] of Object.entries(obj)) {
    if (func([key, val])) {
      res[key] = val;
    }
  }
  return res;
};

const lowCarbs = (obj) => {
  return filterEntries(
    obj,
    ([key, v]) => (v * nutritionDB[key]["carbs"]) / 100 < 50,
  );
};

const reduceEntries = (obj, func, init = "") => {
  let res = init;
  for (let [key, val] of Object.entries(obj)) {
    res = func(res, [key, val]);
  }
  return res;
};
const totalCalories = (obj) => {
  let acc = reduceEntries(
    obj,
    (acc, [key, val]) => acc + (val * nutritionDB[key].calories) / 100,
    0,
  );

  return +Number(acc).toFixed(1);
};

const mapEntries = (obj, func) => {
  let res = {};
  console.log(obj);

  for (let [key, val] of Object.entries(obj)) {
    console.log(key, val);

    const [keyfunc, valfunc] = func([key, val]);

    res[keyfunc] = valfunc;
  }
  return res;
};

const cartTotal = (obj) => {
  let res = {};
  for (let [key, val1] of Object.entries(obj)) {
    res[key] = mapEntries(nutritionDB[key], ([key, val]) => [
      key,
      +Number((val1 * val) / 100),
    ]);
  }
  return res;
};
