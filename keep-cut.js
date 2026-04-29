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
  return keepFirst(txt) + keepLast(txt);
};
