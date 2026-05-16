const get = (src, path) => {
  let arr = [];
  let word = "";
  let value = src;
  for (let i = 0; i < path.length; i++) {
    if (path[i] != ".") {
      word += path[i];
    } else {
      value = value[word];
      word = "";
    }
  }
  if (value) return value[word];
  return undefined;
};

