const chunk = (arr, num) => {
  const res = [];
  let subarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (subarr.length != num) {
      subarr.push(arr[i]);
    } else {
      res.push(subarr);
      subarr = [arr[i]];
    }
  }
  res.push(subarr);
  return res;
};
