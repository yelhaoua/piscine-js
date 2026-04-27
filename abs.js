const isPositive = (params) => {
  return params > 0 ? true : false;
};

const abs = (params) => {
  if (params === 0) {
    return params;
  }
  return isPositive(params) ? params : params * -1;
};
