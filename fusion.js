const fusion = (...obj) => {
  const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);

  const merge = (target, source) => {
    for (let key in source) {
      let val = source[key];
      let old = target[key];
      if (Array.isArray(val)) {
        target[key] = Array.isArray(old) ? [...old, ...val] : [...val];
      } else if (typeof val === "string") {
        target[key] = typeof old === "string" ? old + " " + val : val;
      } else if (typeof val === "number") {
        target[key] = typeof old === "number" ? old + val : val;
      } else if (isObj(val)) {
        if (isObj(old)) {
          target[key] = merge(old, val);
        } else {
          target[key] = merge({}, val);
        }
      } else {
        target[key] = val;
      }
    }
    // return target
  };
  return obj.reduce((acc, source) => merge(acc, source), {});
};


console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }));
