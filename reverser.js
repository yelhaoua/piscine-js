const reverse = (arr) => {
  let resArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    resArr.push(arr[i]);
  }
  return resArr
};

