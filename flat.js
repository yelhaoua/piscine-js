const flat = (arr, num) => {
  let res = [];
  if (!num) {
    num = 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && deep > 0) {
      const flatarr = flat(arr[i], num - 1);
      for (let j = 0; j < flatarr.length; j++) {
        res.push(flatarr[j]);
      }
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

