const map = (arr, methode) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(methode(arr[i], i, arr));
  }
  return res;
};

const flatMap = (arr, flat) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(flat(arr[i], i, arr))) {
      res.push(...flat(arr[i]));
    } else {
      res.push(flat(arr[i], i, arr));
    }
  }

  return res;
};
