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


  for (let [key, val] of Object.entries(obj)) {
  
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
      +Number((val1 * val) / 100).toFixed(3),
    ]);
  }
  return res;
};


const nutritionDB = {
  tomato: {
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    sugar: 2.6,
    fiber: 1.2,
    fat: 0.2,
  },
  vinegar: {
    calories: 20,
    protein: 0.04,
    carbs: 0.6,
    sugar: 0.4,
    fiber: 0,
    fat: 0,
  },
  oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
  onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
  garlic: {
    calories: 149,
    protein: 6.4,
    carbs: 33,
    sugar: 1,
    fiber: 2.1,
    fat: 0.5,
  },
  paprika: {
    calories: 282,
    protein: 14.14,
    carbs: 53.99,
    sugar: 1,
    fiber: 0,
    fat: 12.89,
  },
  sugar: {
    calories: 387,
    protein: 0,
    carbs: 100,
    sugar: 100,
    fiber: 0,
    fat: 0,
  },
  orange: {
    calories: 49,
    protein: 0.9,
    carbs: 13,
    sugar: 9,
    fiber: 0.2,
    fat: 0.1,
  },
};