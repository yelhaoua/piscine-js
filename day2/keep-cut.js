const cutFirst = (txt) => {
  const arr = [];
  for (let i = 2; i < txt.length; i++) {
    arr.push(txt[i]);
  }
  return arr.join("");
};
const cutLast = (txt) => {
  const arr = [];
  for (let i = 0; i < txt.length - 2; i++) {
    arr.push(txt[i]);
  }
  return arr.join("");
};
const cutFirstLast = (txt) => {
  const arr = [];
  for (let i = 2; i < txt.length - 2; i++) {
    arr.push(txt[i]);
  }
  return arr.join("");
};
const keepFirst = (txt) => {
  const arr = [];
  for (let i = 0; i < 2; i++) {
    arr.push(txt[i]);
  }
  return arr.join("");
};
const keepLast = (txt) => {
  const arr = [];
  for (let i = txt.length - 2; i < txt.length; i++) {
    arr.push(txt[i]);
  }
  return arr.join("");
};
const keepFirstLast = (txt) => {
  if (txt.length <= 2) {
    return keepFirst(txt);
  }
  if (txt.length === 3) {
    return keepFirst(txt) + txt[txt.length - 1];
  }
  return keepFirst(txt) + keepLast(txt);
};
