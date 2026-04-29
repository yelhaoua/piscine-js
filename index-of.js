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
const lastIndexOf = (arr, value) => {
  let index = -1;
  for (let i = arr.length - 1; i >= a; i--) {
    if (arr[i] === value) {
      return i;
    }
  }
  return index;
};
const includes = (arr, value) => {
  let index = false;
  for (let i = arr.length - 1; i >= a; i--) {
    if (arr[i] === value) {
      return true;
    }
  }
  return index;
};
