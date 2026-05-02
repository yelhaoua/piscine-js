const getURL = (dataSet) => {
  let regex = /https?:\/\/[^\s]+/gi;
  return dataSet.match(regex) === null ? [] : dataSet.match(regex);
};

const greedyQuery = (dataSet) => {
  let regex = /https?:\/\/[^?\s]+\?([^=&\s]+=[^&\s]+&){2,}[^=&\s]+=[^&\s]+/gi;
  return dataSet.match(regex) === null ? [] : dataSet.match(regex);
};

const notSoGreedy = (dataSet) => {
  let regex =
    /https?:\/\/[^?\s]+\?([^=&\s]+=[^&\s]+&){1,2}[^=&\s]+=[^&\s]+(?![^&\s]*&)/gi;
  return dataSet.match(regex) === null ? [] : dataSet.match(regex);
};
