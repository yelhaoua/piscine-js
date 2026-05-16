const reduceCurry = (func) => {
  return (obj, init = 0) => {
    let res = init;
    for (let [key, val] of Object.entries(obj)) {
      res = func(res, [key, val]);
    }
    return res;
  };
};

const reduceScore = (ojb, init) => {
  let res = reduceCurry(
    (res, [key, val]) =>
      res + (personnel[key]["shootingScore"] + personnel[key]["pilotingScore"]),
  )(
    filterCurry(([key, val]) => personnel[key]["isForceUser"] === true)(ojb),
    init,
  );

  return res;
};

const filterCurry = (func) => {
  return (obj) => {
    let res = {};
    for (let [key, val] of Object.entries(obj)) {
      if (func([key, val])) {
        res[key] = val;
      }
    }
    return res;
  };
};

const filterForce = (obj) => {
  obj = filterCurry(
    ([k, v]) =>
      personnel[k]["shootingScore"] >= 80 && personnel[k]["shootingScore"] < 90,
  )(obj);

  return obj;
};

const defaultCurry = (obj1) => {
  return (obj2) => {
    return { ...obj1, ...obj2 };
  };
};

const mapCurry = (func) => {
  return (obj) => {
    let res = {};
    for (let [key, val] of Object.entries(obj)) {
      console.log([key, val["shootingScore"]]);

      let [mankey, mainval] = func([key, val]);
      res[mankey] = mainval;
    }
    return res;
  };
};
const mapAverage = (obj) => {
  return mapCurry(([key, val]) => [
    key,
    {
      ...val,
      averageScore: (val["shootingScore"] + val["pilotingScore"]) / 2,
    },
  ])(obj);
};
