const ionOut = (txt) => {
  const reg = /\w+tion/g;
  const nextxt = txt.match(reg);
  if (Array.isArray(nextxt)) {
    return nextxt.map((el) => {
      return el.replace(/tion/, "t");
    });
  }
  return [];
};
console.log(ionOut("attention, direction"));
console.log(ionOut("promotion, provision"));
console.log(ionOut("transfusion"));
console.log(ionOut(" 1st position is the vision of the 2nd position"));
