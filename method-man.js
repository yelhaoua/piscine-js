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
  return str.toLocaleLowerCase();
};
const capitalize = (str) => {
    console.log(str);
   str = words(str)
    console.log(str);
    for (let i = 0 ; i < str.length ;i++){
        str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1);

    }
  return sentence(str);
};