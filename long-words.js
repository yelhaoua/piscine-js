const longWords = (arr) => {
  return arr.every((el) => {
    return el.length >= 5;
  });
};

const oneLongWord = (arr) => {
  return arr.some((el) => {
    return el.length >= 10;
  });
};
const noLongWords = (arr) => {
  return arr.every((el) => {
    return el.length >= 7;
  });
};
