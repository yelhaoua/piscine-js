is.num = (params) => {
  return typeof params === "number" ? true : false;
};

is.nan = (params) => {
  return isNaN(params) ? true : false;
};
is.str = (params) => {
  return typeof params === "string" ? true : false;
};
is.bool = (params) => {
  return typeof params === "boolean" ? true : false;
};
is.undef = (params) => {
  return typeof params === "undefined" ? true : false;
};
is.def = (params) => {
  return typeof params != "undefined" ? true : false;
};
is.arr = (params) => {
  return Array.isArray(params) ? true : false;
};
is.obj = (params) => {
  return params !== null && typeof params === "object" ? true : false;
};
is.fun = (params) => {
  return typeof params === "function" ? true : false;
};
is.truthy = (params) => {
  return params ? true : false;
};
is.falsy = (params) => {
  return !params ? true : false;
};
