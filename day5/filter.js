const filter = (arr, arg) => {
  let res = [];


  for (let i = 0; i < arr.length; i++) {
    if (arg(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
};

const reject = (arr, arg) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arg(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
};

const partition = (arr, arg) => {
  let res1 = [];
  let res2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arg(arr[i], i, arr)) {
      res1.push(arr[i]);
    } else {
      res2.push(arr[i]);
    }
  }
  return [res1, res2];
};
