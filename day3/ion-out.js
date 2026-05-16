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
