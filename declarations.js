const escapeStr = `\`\\/"'.`;
const arr = [4, '2'];
const obj = {
  str: "string",
  num: 1,
  bool: true,
  undef: undefined,
};
const nested = {
  arr: [4, undefined, 2],
  obj: {
    str: "string",
    num: 1,
    bool: true,
  },
};

function deepFreeze(obj) {
  const keys = Object.keys(obj);
  for (const names of Object.keys(obj)) {
    if (typeof obj[names] === "object") {
      deepFreeze(obj[names]);
    }
  }
  return Object.freeze(obj);
}

Object.freeze(obj);
deepFreeze(nested);
Object.freeze(arr);
