const words = (str) => {
  return str.split(" ");
};
const sentence = (arr) => {
  return arr.join(" ");
};

const yell = (str) => {
  return str.toUpperCase();
};
const whisper = (str) => {
  return "*" + str.toLocaleLowerCase() + "*";
};
const capitalize = (str) => {
  str = str.toLocaleLowerCase()
  return  str.charAt(0).toUpperCase() + str.slice(1);
};
