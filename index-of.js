const indexOf = (arr, value, start) => {
  if (!start) {
    start = 0;
  }
  if (start > arr.length) {
    return -1;
  }
  let index = -1;
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return index;
};

const lastIndexOf = (arr, value, start) => {
  let newstart = 0;
  let newarr = arr;
  if (!start) {
    start = 0;
  }
  if (start > 0) {
    newarr = arr.slice(0, start + 1);
  }
  if (start > arr.length) {
    return -1;
  }
  let index = -1;
  for (let i = newstart; i < newarr.length; i++) {
    if (arr[i] === value) {
      index = i;
    }
  }
  return index;
};
const includes = (arr, value) => {
  let index = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      return true;
    }
  }
  return index;
};
