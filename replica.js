const replica = (...args) => {
  let res = {};
  const isobj = (v) => v && typeof v == "object" && !Array.isArray(v);
  for (let i = 0; i < args.length; i++) {
    for (let [key, v] of Object.entries(args[i])) {
      if (res[key] && isobj(v)) {
        for (let [ke, va] of Object.entries(v)) {
          if (!Array.isArray(va)) {
            res[key] = { ...res[key], ...v };
          } else {
            res[key] = v;
          }
        }
      } else {
        res[key] = v;
      }
    }
  }
  return res;
};
