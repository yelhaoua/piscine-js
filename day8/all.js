const all = async (list) => {
  let out = {};
  for (const [k, v] of Object.entries(list)) {
    out[k] = await v;
  }
  return out;
};
