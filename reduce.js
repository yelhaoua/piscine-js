const fold = (arr, func, acc) => {
  console.log(arr, func, acc);
  let res = acc;

  for (let i = 0; i < arr.length; i++) {
    res = func(res, arr[i]);
  }
  return res;
};

const foldRight = (arr, func, acc) => {
  console.log(arr, func, acc);
  let res = acc;

  for (let i = arr.length - 1; i >= 0; i--) {
    res = func(res, arr[i]);
  }
  return res;
};

const reduce = (arr, func) => {
  console.log(arr, func);
  let res = 0;
  let res2 = "";

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      res2 = func(res2, arr[i]);
    } else {
      res = func(res, arr[i]);
    }
  }
  console.log(res, res2);

  if (res) {
    return res;
  } else {
    return res2;
  }
};

const reduceRight = (arr, func) => {
  console.log(arr, func);
  let res = 0;
  let res2 = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    if (typeof arr[i] === "string") {
      res2 = func(res2, arr[i]);
    } else {
      res = func(res, arr[i]);
    }
  }
  console.log(res, res2);

  if (res) {
    return res;
  } else {
    return res2;
  }
};
