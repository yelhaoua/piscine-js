const round = (arr) => {
  let num = getNum(arr);

  if (num > 0.5) {
    return arr - num + 1;
  } else {
    return arr - num;
  }
};
const floor = (arr) => {
  let num = getNum(arr);
  if (num < 0) {
    return num - arr;
  } else {
    return arr - num;
  }
};
const trunc = (arr) => {
  return arr - getNum(arr);
};

const ceil = (arr) => {
  let num = getNum(arr);
  if (num > 0) {
    return arr - num + 1;
  }
  return arr - num;
};

const getNum = (num) => {
  let sol = 0;
  var loopnum = num;
  if (loopnum > 1000000) {
    while (sol < loopnum) {
      sol += 10000000000;
    }
  }
  if (loopnum < 0) {
    while (sol > loopnum) {
      sol -= 1;
    }
  }
  while (sol < loopnum) {
    sol += 1;
  }
  if (num < 0) {
    return num - sol;
  }

  return sol - num;
};

const nums12 = Array.from({ length: 20 }, () => (Math.random() - 0.5) * 20);

console.log(nums12.map(Math.round));
console.log(nums12.map(round));

console.log(nums12.map(Math.ceil) === nums12.map(ceil));
console.log(nums12.map(ceil));

console.log(nums12.map(Math.floor));
console.log(nums12.map(floor));

console.log(nums12.map(Math.trunc));
console.log(nums12.map(trunc));

