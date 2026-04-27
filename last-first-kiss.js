function first(params) {
  return params[0];
}

function last(params) {
  return params[params.length - 1];
}

const kiss = (params) => {
  return params[params.length - 1], params[0];
};
