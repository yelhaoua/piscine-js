const slice = (params, start, end) => {
  let arr = [];
  let count = 0;

  if (!end) {
    end = params.length;
  }
  if (!start) {
    start = 0;
  }

  let sliceStart = start;
  let sliceEnd = end - 1;

  if (start < 0) {
    for (let i = params.length - 1; i >= 0; i--) {
      if (count === -start) {
        sliceStart = i + 1;
        break;
      }
      count++;
    }
  }
  count = 0;
  if (end < 0) {
    for (let i = params.length - 1; i >= 0; i--) {
      if (count === -end) {
        sliceEnd = i;
        break;
      }
      count++;
    }
  }
  for (let i = sliceStart; i <= sliceEnd; i++) {
    arr.push(params[i]);
  }
  if (typeof params == "string") {
    return arr.join("");
  }

  return arr;
};

