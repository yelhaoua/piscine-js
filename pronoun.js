const pronoun = (str) => {
  const arr = str.replaceAll(",\n", " ").split(" ");
  let noun = "";

  let count = 0;
  let worde = [];
  let obj = {};
  "".toLowerCase;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].toLowerCase() === "i" ||
      arr[i].toLowerCase() === "you" ||
      arr[i].toLowerCase() === "he" ||
      arr[i].toLowerCase() === "she" ||
      arr[i].toLowerCase() === "it" ||
      arr[i].toLowerCase() === "they" ||
      arr[i].toLowerCase() === "we"
    ) {
      let res = helpe(arr[i], arr);
      if (obj) {
        obj = { ...obj, ...res };
      } else {
        obj = { ...obj };
      }
    }
  }
  console.log(obj);

  return obj;
};

function helpe(val, arr) {
  let obj = {};
  let count = 0;
  let worde = [];
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i].toLowerCase()) {
      count++;
      if (
        i < arr.length - 1 &&
        !(
          arr[i + 1].toLowerCase() === "i" ||
          arr[i + 1].toLowerCase() === "you" ||
          arr[i + 1].toLowerCase() === "he" ||
          arr[i + 1].toLowerCase() === "she" ||
          arr[i + 1].toLowerCase() === "it" ||
          arr[i + 1].toLowerCase() === "they" ||
          arr[i + 1].toLowerCase() === "we"
        )
      ) {
        worde.push(arr[i + 1]);
      }
    }
  }
  if (val) {
    obj[val.toLowerCase()] = { count: count, word: worde };
  }
  console.log(obj);

  return obj;
}
