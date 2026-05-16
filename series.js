const series = async (arr) => {
  let out = [];
  for (const e of arr) {
    out.push(await e());
  }
  return out;
};
