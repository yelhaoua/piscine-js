const groupPrice = (str) => {
  const regEx = /([A-Z]{3})(\d+)\.(\d{2})/g;
  const result = [];
  let match;

  while ((match = regEx.exec(str)) !== null) {
    result.push([match[0], match[2], match[3]]);
  }

  return result;
};
