const isPositive = (params) => {
  return params > 0 ? true : false;
};

const abs = (params) => {
  return isPositive(params) ? params : params * -1;
};
